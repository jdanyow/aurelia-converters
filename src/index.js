import moment from 'moment';
import numeral from 'numeral';
import vagueTime from 'vague-time';

export class VagueValueConverter {
  toView(value){
    if (value === undefined || value === null || value === '')
      return value;
    if (typeof value === 'string')
      value = Date.parse(value);
    return vagueTime.get({ to: value });
  }
}

export class DateValueConverter {
  toView(value, format) {
    return moment(value).format(format);
  }
}

export class NumberValueConverter {
  toView(value, format) {
    return numeral(value).format(format);
  }
}

export function install(aurelia) {
  aurelia.withResources(VagueValueConverter, DateValueConverter, NumberValueConverter);
}
