import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDСотрудника: DS.attr('number'),
  гражданство: DS.attr('string'),
  датаРождения: DS.attr('date'),
  знаниеЯзыков: DS.attr('string'),
  образование: DS.attr('i-i-s-otdel-kadrov-2-образование'),
  подразделение: DS.attr('i-i-s-otdel-kadrov-2-подразделение'),
  пол: DS.attr('string'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-otdel-kadrov-2-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  iDСотрудника: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.iDСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  гражданство: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.гражданство.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаРождения: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  знаниеЯзыков: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.знаниеЯзыков.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подразделение: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-otdel-kadrov-2-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    iDСотрудника: attr('I d сотрудника', { index: 2 }),
    пол: attr('Пол', { index: 3 }),
    подразделение: attr('Подразделение', { index: 4 }),
    знаниеЯзыков: attr('Знание языков', { index: 5 }),
    образование: attr('Образование', { index: 6 }),
    гражданство: attr('Гражданство', { index: 7 }),
    должность: belongsTo('i-i-s-otdel-kadrov-2-должность', 'Должность', {
      наименование: attr('Наименование', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-otdel-kadrov-2-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    iDСотрудника: attr('I d сотрудника', { index: 2 }),
    пол: attr('Пол', { index: 3 }),
    подразделение: attr('Подразделение', { index: 4 }),
    знаниеЯзыков: attr('Знание языков', { index: 5 }),
    образование: attr('Образование', { index: 6 }),
    гражданство: attr('Гражданство', { index: 7 }),
    должность: belongsTo('i-i-s-otdel-kadrov-2-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
