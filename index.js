module.exports = function (options) {
  return function (req, res, next) {
    var model = req.getModel();
    var language = req.headers['accept-language'] || '';
    model.push($locale.preffered, language.split(','));
    next();
  };
};