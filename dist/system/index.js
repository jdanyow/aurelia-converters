System.register(["moment", "numeral"], function (_export) {
  "use strict";

  var moment, numeral, _prototypeProperties, _classCallCheck, RelativeValueConverter, DateValueConverter, NumberValueConverter, AgeValueConverter;
  _export("install", install);

  function install(aurelia) {
    aurelia.withResources(RelativeValueConverter, DateValueConverter, NumberValueConverter, AgeValueConverter);
  }
  return {
    setters: [function (_moment) {
      moment = _moment["default"];
    }, function (_numeral) {
      numeral = _numeral["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      RelativeValueConverter = _export("RelativeValueConverter", (function () {
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
      })());
      DateValueConverter = _export("DateValueConverter", (function () {
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
      })());
      NumberValueConverter = _export("NumberValueConverter", (function () {
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
      })());
      AgeValueConverter = _export("AgeValueConverter", (function () {
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
      })());
    }
  };
});