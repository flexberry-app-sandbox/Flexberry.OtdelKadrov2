import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  главБух: DS.attr('string'),
  датаДк: DS.attr('date'),
  период: DS.attr('date'),
  руководительКО: DS.attr('string'),
  отделКадров: DS.belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', { inverse: null, async: false })
});

export let ValidationRules = {
  главБух: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сост-штат-рас.validations.главБух.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаДк: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сост-штат-рас.validations.датаДк.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  период: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сост-штат-рас.validations.период.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  руководительКО: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сост-штат-рас.validations.руководительКО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отделКадров: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-сост-штат-рас.validations.отделКадров.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СостШтатРасE', 'i-i-s-otdel-kadrov-2-сост-штат-рас', {
    период: attr('Период', { index: 0 }),
    руководительКО: attr('Руководитель КО', { index: 1 }),
    датаДк: attr('Дата дк', { index: 2 }),
    главБух: attr('Глав бух', { index: 3 }),
    отделКадров: belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', 'Отдел кадров', {

    }, { index: 4 })
  });

  modelClass.defineProjection('СостШтатРасL', 'i-i-s-otdel-kadrov-2-сост-штат-рас', {
    период: attr('Период', { index: 0 }),
    руководительКО: attr('Руководитель КО', { index: 1 }),
    датаДк: attr('Дата дк', { index: 2 }),
    главБух: attr('Глав бух', { index: 3 })
  });
};
