System.register(["moment", "numeral", "vague-time"], function (_export) {
  "use strict";

  var moment, numeral, vagueTime, _prototypeProperties, _classCallCheck, VagueValueConverter, DateValueConverter, NumberValueConverter;
  _export("install", install);

  function install(aurelia) {
    aurelia.withResources(VagueValueConverter, DateValueConverter, NumberValueConverter);
  }
  return {
    setters: [function (_moment) {
      moment = _moment["default"];
    }, function (_numeral) {
      numeral = _numeral["default"];
    }, function (_vagueTime) {
      vagueTime = _vagueTime["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      VagueValueConverter = _export("VagueValueConverter", (function () {
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
      })());
      DateValueConverter = _export("DateValueConverter", (function () {
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
      })());
      NumberValueConverter = _export("NumberValueConverter", (function () {
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
      })());
    }
  };
});