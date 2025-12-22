import Joi from "joi";

const objectId = Joi.string().pattern(/^[0-9a-fA-F]{24}$/);

export const createSocietySchema = Joi.object({
  name: Joi.string().trim().required(),
  category: objectId.required(),

  logo: Joi.string().required(),
  about: Joi.string().required(),

  stats: Joi.object({
    activeMembers: Joi.number().min(0).optional(),
    establishedYear: Joi.number().optional(),
    location: Joi.string().optional(),
  }).optional(),

  contact: Joi.object({
    email: Joi.string().email().allow("", null),
    phone: Joi.string().allow("", null),
    website: Joi.string().uri().allow("", null),
  }).optional(),

 executiveTeam: Joi.array()
  .items(
    Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      role: Joi.string().required(),
    })
  )
  .min(1)
  .required(),



  ourActivities: Joi.array().items(Joi.string()).optional(),
  recentAchievements: Joi.array().items(Joi.string()).optional(),

  upcomingEvents: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().required(),
        date: Joi.string().required(),
        location: Joi.string().allow("", null),
      })
    )
    .optional(),

  socials: Joi.object({
    instagram: Joi.string().uri().allow("", null),
    linkedin: Joi.string().uri().allow("", null),
    twitter: Joi.string().uri().allow("", null),
  }).optional(),
});
