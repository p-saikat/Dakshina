export const handleError = (err, req, res, next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(400).send({ err: res._("limitFileSize") });
  } else {
    let message;
    let status;

    if (err.statusCode) {
      message = err.message || "serverError";
      status = err.statusCode;
    } else {
      message = "serverError";
      status = 500;
    }

    res.locals.error = res._(message);

    res.status(status).send({
      success: true,
      message: res._(message),
    });
  }
};
