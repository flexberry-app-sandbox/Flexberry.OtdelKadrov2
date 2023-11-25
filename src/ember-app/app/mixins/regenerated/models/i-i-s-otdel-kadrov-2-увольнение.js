import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаДк: DS.attr('date'),
  датаУвольнения: DS.attr('date'),
  основание: DS.attr('string'),
  ответственный: DS.attr('string'),
  отделКадров: DS.belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-otdel-kadrov-2-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаДк: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.датаДк.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаУвольнения: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.датаУвольнения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  основание: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.основание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отделКадров: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.отделКадров.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УвольнениеE', 'i-i-s-otdel-kadrov-2-увольнение', {
    датаУвольнения: attr('Дата увольнения', { index: 0 }),
    датаДк: attr('Дата дк', { index: 1 }),
    основание: attr('Основание', { index: 2 }),
    ответственный: attr('Ответственный', { index: 3 }),
    сотрудники: belongsTo('i-i-s-otdel-kadrov-2-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    отделКадров: belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', 'Отдел кадров', {

    }, { index: 6 })
  });

  modelClass.defineProjection('УвольнениеL', 'i-i-s-otdel-kadrov-2-увольнение', {
    датаДк: attr('Дата дк', { index: 0 }),
    датаУвольнения: attr('Дата увольнения', { index: 1 }),
    основание: attr('Основание', { index: 2 }),
    ответственный: attr('Ответственный', { index: 3 }),
    сотрудники: belongsTo('i-i-s-otdel-kadrov-2-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
