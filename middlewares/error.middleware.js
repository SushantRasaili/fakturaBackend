export const errorHandler = (err, _req, res, _next) => {
  let error = { ...err };
  error.messages = err.messages;

  if (new RegExp("token", "gi").test(err.name)) {
    const message = "Bad Token";
    error = new ErrorResponse([message], 401);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    messages: error.messages || ["Server Error"],
  });
};
