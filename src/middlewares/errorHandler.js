const errorValidationHandler = (req, res, next) => {
  const error = req.validationErrors();
  const validationErrors = [];
  if (error) {
    error.map(err => validationErrors.push(err.msg));
    return res.status(400).json({
      error: validationErrors
    });
  }
  next();
};

export default errorValidationHandler;
