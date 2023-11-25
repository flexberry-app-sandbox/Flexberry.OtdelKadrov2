import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  всего: DS.attr('number'),
  всегоКолШЕ: DS.attr('number'),
  всегоНадбавки: DS.attr('number'),
  всегоТС: DS.attr('number'),
  итогоВсего: DS.attr('number'),
  код: DS.attr('number'),
  количествоШЕ: DS.attr('number'),
  надбавки: DS.attr('number'),
  наименование: DS.attr('i-i-s-otdel-kadrov-2-подразделение'),
  примечание: DS.attr('string'),
  тарифнаяСтавка: DS.attr('number'),
  должность: DS.belongsTo('i-i-s-otdel-kadrov-2-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  всего: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.всего.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  всегоКолШЕ: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.всегоКолШЕ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  всегоНадбавки: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.всегоНадбавки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  всегоТС: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.всегоТС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  итогоВсего: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.итогоВсего.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  количествоШЕ: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.количествоШЕ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  надбавки: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.надбавки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  примечание: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.примечание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тарифнаяСтавка: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.тарифнаяСтавка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТаблЧастьСШРE', 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    количествоШЕ: attr('Количество ШЕ', { index: 2 }),
    тарифнаяСтавка: attr('Тарифная ставка', { index: 3 }),
    надбавки: attr('Надбавки', { index: 4 }),
    всего: attr('Всего', { index: 5 }),
    примечание: attr('Примечание', { index: 6 }),
    всегоКолШЕ: attr('Всего кол ШЕ', { index: 7 }),
    всегоТС: attr('Всего ТС', { index: 8 }),
    всегоНадбавки: attr('Всего надбавки', { index: 9 }),
    итогоВсего: attr('Итого всего', { index: 10 }),
    должность: belongsTo('i-i-s-otdel-kadrov-2-должность', 'Должность', {
      наименование: attr('Наименование', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ТаблЧастьСШРL', 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    количествоШЕ: attr('Количество ШЕ', { index: 2 }),
    тарифнаяСтавка: attr('Тарифная ставка', { index: 3 }),
    надбавки: attr('Надбавки', { index: 4 }),
    всего: attr('Всего', { index: 5 }),
    примечание: attr('Примечание', { index: 6 }),
    всегоКолШЕ: attr('Всего кол ШЕ', { index: 7 }),
    всегоТС: attr('Всего ТС', { index: 8 }),
    всегоНадбавки: attr('Всего надбавки', { index: 9 }),
    итогоВсего: attr('Итого всего', { index: 10 }),
    должность: belongsTo('i-i-s-otdel-kadrov-2-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 11 })
    }, { index: -1, hidden: true })
  });
};
