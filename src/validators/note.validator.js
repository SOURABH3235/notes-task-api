const { body, validationResult } = require("express-validator");

const validateNote = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Title must be between 3 and 100 characters"),

  body("content")
    .trim()
    .notEmpty()
    .withMessage("Content is required"),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be true or false"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map((error) => ({
          field: error.path,
          message: error.msg
        }))
      });
    }

    next();
  }
];

module.exports = { validateNote };