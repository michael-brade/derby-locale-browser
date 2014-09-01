module.exports = function (options) {
  if (!options) options = {};
  if (!options.path) options.path = '$locale';
  if (!options.name) options.name = 'browser';
  return function (req, res, next) {
    var model = req.getModel();
    var path = options.path + '.strategies.' + options.name;
    var strategy = {};
    var locales = req.headers['Accept-Language'];
    locales = locales ? locales.split(',') : [];
    strategy.order = options.order;
    strategy.locales = locales;
    model.set(path, strategy);
    next();
  };
};
