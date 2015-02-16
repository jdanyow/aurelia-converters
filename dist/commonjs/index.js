"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.install = install;
var moment = _interopRequire(require("moment"));

var numeral = _interopRequire(require("numeral"));

var RelativeValueConverter = exports.RelativeValueConverter = (function () {
  function RelativeValueConverter() {
    _classCallCheck(this, RelativeValueConverter);
  }

  _prototypeProperties(RelativeValueConverter, null, {
    toView: {
      value: function toView(value) {
        if (!value) {
          return null;
        }return moment(value).fromNow();
      },
      writable: true,
      configurable: true
    }
  });

  return RelativeValueConverter;
})();
var DateValueConverter = exports.DateValueConverter = (function () {
  function DateValueConverter() {
    _classCallCheck(this, DateValueConverter);
  }

  _prototypeProperties(DateValueConverter, null, {
    toView: {
      value: function toView(value, format) {
        if (!value) {
          return null;
        }return moment(value).format(format);
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
        if (!value) {
          return null;
        }return numeral(value).format(format);
      },
      writable: true,
      configurable: true
    }
  });

  return NumberValueConverter;
})();
var AgeValueConverter = exports.AgeValueConverter = (function () {
  function AgeValueConverter() {
    _classCallCheck(this, AgeValueConverter);
  }

  _prototypeProperties(AgeValueConverter, null, {
    toView: {
      value: function toView(dob) {
        if (!dob) {
          return null;
        }return Math.floor(moment().diff(moment(dob), "year", false));
      },
      writable: true,
      configurable: true
    }
  });

  return AgeValueConverter;
})();
function install(aurelia) {
  aurelia.withResources(RelativeValueConverter, DateValueConverter, NumberValueConverter, AgeValueConverter);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});