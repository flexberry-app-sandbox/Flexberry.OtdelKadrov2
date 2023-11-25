import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаДк: DS.attr('date'),
  исполнитель: DS.attr('string'),
  период: DS.attr('date'),
  руководитель: DS.attr('string'),
  отделКадров: DS.belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', { inverse: null, async: false })
});

export let ValidationRules = {
  датаДк: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-таб-уч-р-в.validations.датаДк.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  исполнитель: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-таб-уч-р-в.validations.исполнитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  период: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-таб-уч-р-в.validations.период.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  руководитель: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-таб-уч-р-в.validations.руководитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отделКадров: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-таб-уч-р-в.validations.отделКадров.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТабУчРВE', 'i-i-s-otdel-kadrov-2-таб-уч-р-в', {
    датаДк: attr('Дата дк', { index: 0 }),
    руководитель: attr('Руководитель', { index: 1 }),
    период: attr('Период', { index: 2 }),
    исполнитель: attr('Исполнитель', { index: 3 }),
    отделКадров: belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', 'Отдел кадров', {

    }, { index: 4 })
  });

  modelClass.defineProjection('ТабУчРВL', 'i-i-s-otdel-kadrov-2-таб-уч-р-в', {
    датаДк: attr('Дата дк', { index: 0 }),
    руководитель: attr('Руководитель', { index: 1 }),
    период: attr('Период', { index: 2 }),
    исполнитель: attr('Исполнитель', { index: 3 })
  });
};
