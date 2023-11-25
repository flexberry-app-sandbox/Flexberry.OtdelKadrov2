import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудники: DS.belongsTo('i-i-s-otdel-kadrov-2-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  сотрудники: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-отдел-кадров.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтделКадровE', 'i-i-s-otdel-kadrov-2-отдел-кадров', {
    сотрудники: belongsTo('i-i-s-otdel-kadrov-2-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОтделКадровL', 'i-i-s-otdel-kadrov-2-отдел-кадров', {
    сотрудники: belongsTo('i-i-s-otdel-kadrov-2-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
