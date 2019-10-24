const setup = res => {
  res._200 = (message, data = {}) => {
    res.status(200).json({ message: res.__(message), data });
  };
};

module.exports = setup;
