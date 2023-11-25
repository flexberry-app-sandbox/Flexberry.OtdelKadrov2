import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗап: DS.attr('date'),
  датаФакт: DS.attr('date'),
  код: DS.attr('number'),
  колКалДней: DS.attr('number'),
  основание: DS.attr('string'),
  перенос: DS.attr('date'),
  примечание: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-otdel-kadrov-2-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаЗап: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.датаЗап.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаФакт: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.датаФакт.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колКалДней: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.колКалДней.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  основание: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.основание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  перенос: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.перенос.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  примечание: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.примечание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТаблЧастьГОE', 'i-i-s-otdel-kadrov-2-табл-часть-г-о', {
    код: attr('Код', { index: 0 }),
    колКалДней: attr('Кол кал дней', { index: 1 }),
    датаЗап: attr('Дата зап', { index: 2 }),
    датаФакт: attr('Дата факт', { index: 3 }),
    основание: attr('Основание', { index: 4 }),
    перенос: attr('Перенос', { index: 5 }),
    примечание: attr('Примечание', { index: 6 }),
    сотрудники: belongsTo('i-i-s-otdel-kadrov-2-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ТаблЧастьГОL', 'i-i-s-otdel-kadrov-2-табл-часть-г-о', {
    код: attr('Код', { index: 0 }),
    сотрудники: belongsTo('i-i-s-otdel-kadrov-2-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    колКалДней: attr('Кол кал дней', { index: 2 }),
    датаЗап: attr('Дата зап', { index: 3 }),
    датаФакт: attr('Дата факт', { index: 4 }),
    основание: attr('Основание', { index: 5 }),
    перенос: attr('Перенос', { index: 6 }),
    примечание: attr('Примечание', { index: 7 })
  });
};
