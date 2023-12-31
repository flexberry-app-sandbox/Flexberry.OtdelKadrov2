import { createEnum } from 'ember-flexberry-data/utils/enum-functions';

export default createEnum({
  ВремНеполнаяЗан: 'Временная Неполная занятость',
  НеполнаяЗан: 'Неполная занятость',
  УслованаяЗан: 'Условная занятость',
  НерегЗан: 'Нерегулярная занятость',
  ТеневаяЗан: 'Теневая занятость',
  ВторичнаяЗан: 'Вторичная занятость',
  ПолстояннаяЗан: 'Постоянная занятость',
  ЧастичнаяЗан: 'Частичная занятость'
});
