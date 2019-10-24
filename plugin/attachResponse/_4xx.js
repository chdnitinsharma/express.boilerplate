const setup = res => {
  res.invalidInput = message => {
    res.status(400).json({ message: res.__(message) });
  };
};

module.exports = setup;
