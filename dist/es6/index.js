import moment from 'moment';
import numeral from 'numeral';

export class RelativeValueConverter {
  toView(value){
    if (!value)
      return null;
    return moment(value).fromNow();
  }
}

export class DateValueConverter {
  toView(value, format) {
    if (!value)
      return null;
    return moment(value).format(format);
  }
}

export class NumberValueConverter {
  toView(value, format) {
    if (!value)
      return null;
    return numeral(value).format(format);
  }
}

export class AgeValueConverter {
  toView(dob) {
    if (!dob)
      return null;
    return Math.floor(moment().diff(moment(dob), 'year', false));
  }
}

export function install(aurelia) {
  aurelia.withResources(RelativeValueConverter, DateValueConverter, NumberValueConverter, AgeValueConverter);
}
