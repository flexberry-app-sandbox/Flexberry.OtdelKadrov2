import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  графикРаботы: DS.attr('string'),
  датаДк: DS.attr('date'),
  датаПриема: DS.attr('date'),
  занятость: DS.attr('i-i-s-otdel-kadrov-2-занятость'),
  оклад: DS.attr('decimal'),
  ответсвенный: DS.attr('string'),
  подразделение: DS.attr('i-i-s-otdel-kadrov-2-подразделение'),
  срокЗаключения: DS.attr('number'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-otdel-kadrov-2-должность', { inverse: null, async: false }),
  отделКадров: DS.belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', { inverse: null, async: false })
});

export let ValidationRules = {
  графикРаботы: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.графикРаботы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаДк: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.датаДк.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаПриема: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.датаПриема.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  занятость: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.занятость.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ответсвенный: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.ответсвенный.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подразделение: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  срокЗаключения: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.срокЗаключения.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отделКадров: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.отделКадров.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриказОПриемеE', 'i-i-s-otdel-kadrov-2-приказ-о-приеме', {
    подразделение: attr('Подразделение', { index: 0 }),
    оклад: attr('Оклад', { index: 1 }),
    фИО: attr('ФИО', { index: 2 }),
    графикРаботы: attr('График работы', { index: 3 }),
    датаДк: attr('Дата дк', { index: 4 }),
    ответсвенный: attr('Ответсвенный', { index: 5 }),
    срокЗаключения: attr('Срок заключения', { index: 6 }),
    датаПриема: attr('Дата приема', { index: 7 }),
    занятость: attr('Занятость', { index: 8 }),
    должность: belongsTo('i-i-s-otdel-kadrov-2-должность', 'Должность', {
      наименование: attr('Наименование', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'наименование' }),
    отделКадров: belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', 'Отдел кадров', {

    }, { index: 11 })
  });

  modelClass.defineProjection('ПриказОПриемеL', 'i-i-s-otdel-kadrov-2-приказ-о-приеме', {
    датаДк: attr('Дата дк', { index: 0 }),
    подразделение: attr('Подразделение', { index: 1 }),
    оклад: attr('Оклад', { index: 2 }),
    фИО: attr('ФИО', { index: 3 }),
    графикРаботы: attr('График работы', { index: 4 }),
    ответсвенный: attr('Ответсвенный', { index: 5 }),
    срокЗаключения: attr('Срок заключения', { index: 6 }),
    датаПриема: attr('Дата приема', { index: 7 }),
    занятость: attr('Занятость', { index: 8 }),
    должность: belongsTo('i-i-s-otdel-kadrov-2-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
