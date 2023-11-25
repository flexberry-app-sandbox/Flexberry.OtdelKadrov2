import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаДк: DS.attr('date'),
  дниЧасы: DS.attr('number'),
  изНихПоПричинам: DS.attr('number'),
  код: DS.attr('number'),
  кодВидаОплаты: DS.attr('string'),
  колВыхПразд: DS.attr('number'),
  колНеявок: DS.attr('number'),
  колЯвокМес: DS.attr('number'),
  колЯвокПМес: DS.attr('number'),
  корресСчет: DS.attr('number'),
  часыЗаМесяц: DS.attr('decimal'),
  часыЗаПМес: DS.attr('decimal'),
  явкаНеявка: DS.attr('boolean')
});

export let ValidationRules = {
  датаДк: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.датаДк.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  дниЧасы: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.дниЧасы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  изНихПоПричинам: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.изНихПоПричинам.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодВидаОплаты: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.кодВидаОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колВыхПразд: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.колВыхПразд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колНеявок: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.колНеявок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колЯвокМес: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.колЯвокМес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колЯвокПМес: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.колЯвокПМес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  корресСчет: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.корресСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  часыЗаМесяц: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.часыЗаМесяц.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  часыЗаПМес: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.часыЗаПМес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  явкаНеявка: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.явкаНеявка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТаблЧастьТУE', 'i-i-s-otdel-kadrov-2-табл-часть-т-у', {
    код: attr('Код', { index: 0 }),
    датаДк: attr('Дата дк', { index: 1 }),
    явкаНеявка: attr('Явка неявка', { index: 2 }),
    колЯвокПМес: attr('Кол явок п мес', { index: 3 }),
    колЯвокМес: attr('Кол явок мес', { index: 4 }),
    часыЗаПМес: attr('Часы за п мес', { index: 5 }),
    часыЗаМесяц: attr('Часы за месяц', { index: 6 }),
    кодВидаОплаты: attr('Код вида оплаты', { index: 7 }),
    корресСчет: attr('Коррес счет', { index: 8 }),
    дниЧасы: attr('Дни часы', { index: 9 }),
    колНеявок: attr('Кол неявок', { index: 10 }),
    изНихПоПричинам: attr('Из них по причинам', { index: 11 }),
    колВыхПразд: attr('Кол вых празд', { index: 12 })
  });

  modelClass.defineProjection('ТаблЧастьТУL', 'i-i-s-otdel-kadrov-2-табл-часть-т-у', {
    код: attr('Код', { index: 0 }),
    датаДк: attr('Дата дк', { index: 1 }),
    явкаНеявка: attr('Явка неявка', { index: 2 }),
    колЯвокПМес: attr('Кол явок п мес', { index: 3 }),
    колЯвокМес: attr('Кол явок мес', { index: 4 }),
    часыЗаПМес: attr('Часы за п мес', { index: 5 }),
    часыЗаМесяц: attr('Часы за месяц', { index: 6 }),
    кодВидаОплаты: attr('Код вида оплаты', { index: 7 }),
    корресСчет: attr('Коррес счет', { index: 8 }),
    дниЧасы: attr('Дни часы', { index: 9 }),
    колНеявок: attr('Кол неявок', { index: 10 }),
    изНихПоПричинам: attr('Из них по причинам', { index: 11 }),
    колВыхПразд: attr('Кол вых празд', { index: 12 })
  });
};
