exports.printHelloWorld = (req, res) => {
  // res.setLocale('ar');
  // console.log(res.__('Hello World'));

  try {
    console.log(req.headers["accept-language"]);

    return res._200("Hello World");
  } catch (err) {
    return res._500(err.message, err);
  }
};
