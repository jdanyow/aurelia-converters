define(["exports", "moment", "numeral", "vague-time"], function (exports, _moment, _numeral, _vagueTime) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  exports.install = install;
  var moment = _interopRequire(_moment);

  var numeral = _interopRequire(_numeral);

  var vagueTime = _interopRequire(_vagueTime);

  var VagueValueConverter = exports.VagueValueConverter = (function () {
    function VagueValueConverter() {
      _classCallCheck(this, VagueValueConverter);
    }

    _prototypeProperties(VagueValueConverter, null, {
      toView: {
        value: function toView(value) {
          if (value === undefined || value === null || value === "") {
            return value;
          }if (typeof value === "string") value = Date.parse(value);
          return vagueTime.get({ to: value });
        },
        writable: true,
        configurable: true
      }
    });

    return VagueValueConverter;
  })();
  var DateValueConverter = exports.DateValueConverter = (function () {
    function DateValueConverter() {
      _classCallCheck(this, DateValueConverter);
    }

    _prototypeProperties(DateValueConverter, null, {
      toView: {
        value: function toView(value, format) {
          return moment(value).format(format);
        },
        writable: true,
        configurable: true
      }
    });

    return DateValueConverter;
  })();
  var NumberValueConverter = exports.NumberValueConverter = (function () {
    function NumberValueConverter() {
      _classCallCheck(this, NumberValueConverter);
    }

    _prototypeProperties(NumberValueConverter, null, {
      toView: {
        value: function toView(value, format) {
          return numeral(value).format(format);
        },
        writable: true,
        configurable: true
      }
    });

    return NumberValueConverter;
  })();
  function install(aurelia) {
    aurelia.withResources(VagueValueConverter, DateValueConverter, NumberValueConverter);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});