import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПодразделениеEnum from '../enums/i-i-s-otdel-kadrov-2-подразделение';

export default FlexberryEnum.extend({
  enum: ПодразделениеEnum,
  sourceType: 'IIS.Otdel_kadrov_2.Подразделение'
});
