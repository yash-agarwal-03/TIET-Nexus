import SocietyService from "../services/society.service.js";

const service = new SocietyService();

/**
 * EDIT PERMISSION RULE
 * - Role must be THAPAR_ADMIN or SOCIETY_ADMIN
 * - AND email must exist in executiveTeam
 */
function assertCanEdit(req, society) {
  const { email, role } = req.user;

  const isAdmin =
    role === "THAPAR_ADMIN" || role === "SOCIETY_ADMIN";

  const isExec = society.executiveTeam.some(
    (m) => m.email.toLowerCase() === email.toLowerCase()
  );

  if (!isAdmin || !isExec) {
    throw { status: 403, message: "Not authorized to edit this society" };
  }
}

/**
 * CREATE SOCIETY
 * (THAPAR_ADMIN enforced at route level)
 */
export const createSociety = async (req, res, next) => {
  try {
    const created = await service.create(req.body);
    res.status(201).json({ success: true, data: created });
  } catch (err) {
    next(err);
  }
};

/**
 * GET SOCIETY BY ID (PUBLIC)
 */
export const getSocietyById = async (req, res, next) => {
  try {
    const society = await service.getById(req.params.id);
    res.json({ success: true, data: society });
  } catch (err) {
    next(err);
  }
};

/**
 * GET SOCIETIES BY CATEGORY (EXPLORE PAGE)
 */
export const getSocietiesByCategory = async (req, res, next) => {
  try {
    const data = await service.listByCategory(req.query.categoryId);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

/**
 * UPDATE SOCIETY (PATCH)
 * - Partial updates allowed
 * - Only THAPAR / SOCIETY admin
 * - AND must be in executiveTeam
 */
export const updateSociety = async (req, res, next) => {
  try {
    const society = await service.getById(req.params.id);
    assertCanEdit(req, society);

    const updated = await service.update(req.params.id, req.body);
    res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};
