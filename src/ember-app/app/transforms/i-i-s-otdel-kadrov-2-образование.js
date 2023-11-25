import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОбразованиеEnum from '../enums/i-i-s-otdel-kadrov-2-образование';

export default FlexberryEnum.extend({
  enum: ОбразованиеEnum,
  sourceType: 'IIS.Otdel_kadrov_2.Образование'
});
