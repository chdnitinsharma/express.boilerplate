const setup = res => {
  res._500 = (message, err = {}) => {
    res
      .status(500)
      .json({ message: res.__(message), error_message: err.message, stack: err.stack });
  };
};

module.exports = setup;
