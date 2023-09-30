export const StatusSuccess = (req, res, next) => {
  res.ok = (data) => {
    return res.status(200).send(data);
  };
  next();
};
