import Joi from 'joi';

/**
 * Middleware factory to validate incoming request params (body / params / query)
 * Usage: router.post('/', validateRequest(createSchema, 'body'), controller.create)
 * Throws an error object { status, message } to be handled by centralized error handler
 */
export default function validateRequest(schema, source = 'body') {
  return (req, res, next) => {
    try {
      if (!schema || !Joi.isSchema(schema)) return next();

      const { error } = schema.validate(req[source], { abortEarly: false, allowUnknown: false });
      if (error) {
        const message = error.details.map((d) => d.message.replace(/"/g, '')).join(', ');
        return next({ status: 403, message });
      }

      return next();
    } catch (err) {
      console.log(`error in validating request validateRequest backend/middleware/validateRequest.js`);
      return next(err);
    }
  };
}
