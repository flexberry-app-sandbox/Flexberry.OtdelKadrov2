import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаДк: DS.attr('date'),
  период: DS.attr('date'),
  руководительКО: DS.attr('string'),
  руководительОр: DS.attr('string'),
  отделКадров: DS.belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', { inverse: null, async: false })
});

export let ValidationRules = {
  датаДк: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-график-отпуск.validations.датаДк.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  период: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-график-отпуск.validations.период.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  руководительКО: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-график-отпуск.validations.руководительКО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  руководительОр: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-график-отпуск.validations.руководительОр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отделКадров: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-график-отпуск.validations.отделКадров.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикОтпускE', 'i-i-s-otdel-kadrov-2-график-отпуск', {
    датаДк: attr('Дата дк', { index: 0 }),
    период: attr('Период', { index: 1 }),
    руководительОр: attr('Руководитель ор', { index: 2 }),
    руководительКО: attr('Руководитель КО', { index: 3 }),
    отделКадров: belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', 'Отдел кадров', {

    }, { index: 4 })
  });

  modelClass.defineProjection('ГрафикОтпускL', 'i-i-s-otdel-kadrov-2-график-отпуск', {
    датаДк: attr('Дата дк', { index: 0 }),
    период: attr('Период', { index: 1 }),
    руководительОр: attr('Руководитель ор', { index: 2 }),
    руководительКО: attr('Руководитель КО', { index: 3 })
  });
};
