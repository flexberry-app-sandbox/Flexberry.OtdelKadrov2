import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЗанятостьEnum from '../enums/i-i-s-otdel-kadrov-2-занятость';

export default FlexberryEnum.extend({
  enum: ЗанятостьEnum,
  sourceType: 'IIS.Otdel_kadrov_2.Занятость'
});
