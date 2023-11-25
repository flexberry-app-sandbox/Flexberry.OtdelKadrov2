import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  cерия: DS.attr('number'),
  годОкончания: DS.attr('date'),
  квалификация: DS.attr('string'),
  наимДок: DS.attr('string'),
  наимОбуч: DS.attr('string'),
  номер: DS.attr('number')
});

export let ValidationRules = {
  cерия: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.cерия.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  годОкончания: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.годОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  квалификация: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.квалификация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимДок: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.наимДок.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимОбуч: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.наимОбуч.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТаблЧастьСотрудE', 'i-i-s-otdel-kadrov-2-табл-часть-сотруд', {
    наимОбуч: attr('Наим обуч', { index: 0 }),
    квалификация: attr('Квалификация', { index: 1 }),
    наимДок: attr('Наим док', { index: 2 }),
    cерия: attr('Cерия', { index: 3 }),
    номер: attr('Номер', { index: 4 }),
    годОкончания: attr('Год окончания', { index: 5 })
  });

  modelClass.defineProjection('ТаблЧастьСотрудL', 'i-i-s-otdel-kadrov-2-табл-часть-сотруд', {
    наимОбуч: attr('Наим обуч', { index: 0 }),
    квалификация: attr('Квалификация', { index: 1 }),
    наимДок: attr('Наим док', { index: 2 }),
    cерия: attr('Cерия', { index: 3 }),
    номер: attr('Номер', { index: 4 }),
    годОкончания: attr('Год окончания', { index: 5 })
  });
};
