import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISOtdel_kadrov_2ГрафикОтпускLForm from './forms/i-i-s-otdel-kadrov-2-график-отпуск-l';
import IISOtdel_kadrov_2ДолжностьLForm from './forms/i-i-s-otdel-kadrov-2-должность-l';
import IISOtdel_kadrov_2ОтделКадровLForm from './forms/i-i-s-otdel-kadrov-2-отдел-кадров-l';
import IISOtdel_kadrov_2ПриказОПриемеLForm from './forms/i-i-s-otdel-kadrov-2-приказ-о-приеме-l';
import IISOtdel_kadrov_2СостШтатРасLForm from './forms/i-i-s-otdel-kadrov-2-сост-штат-рас-l';
import IISOtdel_kadrov_2СотрудникиLForm from './forms/i-i-s-otdel-kadrov-2-сотрудники-l';
import IISOtdel_kadrov_2ТабУчРВLForm from './forms/i-i-s-otdel-kadrov-2-таб-уч-р-в-l';
import IISOtdel_kadrov_2ТаблЧастьГОLForm from './forms/i-i-s-otdel-kadrov-2-табл-часть-г-о-l';
import IISOtdel_kadrov_2ТаблЧастьСШРLForm from './forms/i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l';
import IISOtdel_kadrov_2ТаблЧастьСотрудLForm from './forms/i-i-s-otdel-kadrov-2-табл-часть-сотруд-l';
import IISOtdel_kadrov_2ТаблЧастьТУLForm from './forms/i-i-s-otdel-kadrov-2-табл-часть-т-у-l';
import IISOtdel_kadrov_2УвольнениеLForm from './forms/i-i-s-otdel-kadrov-2-увольнение-l';
import IISOtdel_kadrov_2ГрафикОтпускEForm from './forms/i-i-s-otdel-kadrov-2-график-отпуск-e';
import IISOtdel_kadrov_2ДолжностьEForm from './forms/i-i-s-otdel-kadrov-2-должность-e';
import IISOtdel_kadrov_2ОтделКадровEForm from './forms/i-i-s-otdel-kadrov-2-отдел-кадров-e';
import IISOtdel_kadrov_2ПриказОПриемеEForm from './forms/i-i-s-otdel-kadrov-2-приказ-о-приеме-e';
import IISOtdel_kadrov_2СостШтатРасEForm from './forms/i-i-s-otdel-kadrov-2-сост-штат-рас-e';
import IISOtdel_kadrov_2СотрудникиEForm from './forms/i-i-s-otdel-kadrov-2-сотрудники-e';
import IISOtdel_kadrov_2ТабУчРВEForm from './forms/i-i-s-otdel-kadrov-2-таб-уч-р-в-e';
import IISOtdel_kadrov_2ТаблЧастьГОEForm from './forms/i-i-s-otdel-kadrov-2-табл-часть-г-о-e';
import IISOtdel_kadrov_2ТаблЧастьСШРEForm from './forms/i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e';
import IISOtdel_kadrov_2ТаблЧастьСотрудEForm from './forms/i-i-s-otdel-kadrov-2-табл-часть-сотруд-e';
import IISOtdel_kadrov_2ТаблЧастьТУEForm from './forms/i-i-s-otdel-kadrov-2-табл-часть-т-у-e';
import IISOtdel_kadrov_2УвольнениеEForm from './forms/i-i-s-otdel-kadrov-2-увольнение-e';
import IISOtdel_kadrov_2ГрафикОтпускModel from './models/i-i-s-otdel-kadrov-2-график-отпуск';
import IISOtdel_kadrov_2ДолжностьModel from './models/i-i-s-otdel-kadrov-2-должность';
import IISOtdel_kadrov_2ОтделКадровModel from './models/i-i-s-otdel-kadrov-2-отдел-кадров';
import IISOtdel_kadrov_2ПриказОПриемеModel from './models/i-i-s-otdel-kadrov-2-приказ-о-приеме';
import IISOtdel_kadrov_2СостШтатРасModel from './models/i-i-s-otdel-kadrov-2-сост-штат-рас';
import IISOtdel_kadrov_2СотрудникиModel from './models/i-i-s-otdel-kadrov-2-сотрудники';
import IISOtdel_kadrov_2ТабУчРВModel from './models/i-i-s-otdel-kadrov-2-таб-уч-р-в';
import IISOtdel_kadrov_2ТаблЧастьГОModel from './models/i-i-s-otdel-kadrov-2-табл-часть-г-о';
import IISOtdel_kadrov_2ТаблЧастьСШРModel from './models/i-i-s-otdel-kadrov-2-табл-часть-с-ш-р';
import IISOtdel_kadrov_2ТаблЧастьСотрудModel from './models/i-i-s-otdel-kadrov-2-табл-часть-сотруд';
import IISOtdel_kadrov_2ТаблЧастьТУModel from './models/i-i-s-otdel-kadrov-2-табл-часть-т-у';
import IISOtdel_kadrov_2УвольнениеModel from './models/i-i-s-otdel-kadrov-2-увольнение';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otdel-kadrov-2-график-отпуск': IISOtdel_kadrov_2ГрафикОтпускModel,
    'i-i-s-otdel-kadrov-2-должность': IISOtdel_kadrov_2ДолжностьModel,
    'i-i-s-otdel-kadrov-2-отдел-кадров': IISOtdel_kadrov_2ОтделКадровModel,
    'i-i-s-otdel-kadrov-2-приказ-о-приеме': IISOtdel_kadrov_2ПриказОПриемеModel,
    'i-i-s-otdel-kadrov-2-сост-штат-рас': IISOtdel_kadrov_2СостШтатРасModel,
    'i-i-s-otdel-kadrov-2-сотрудники': IISOtdel_kadrov_2СотрудникиModel,
    'i-i-s-otdel-kadrov-2-таб-уч-р-в': IISOtdel_kadrov_2ТабУчРВModel,
    'i-i-s-otdel-kadrov-2-табл-часть-г-о': IISOtdel_kadrov_2ТаблЧастьГОModel,
    'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р': IISOtdel_kadrov_2ТаблЧастьСШРModel,
    'i-i-s-otdel-kadrov-2-табл-часть-сотруд': IISOtdel_kadrov_2ТаблЧастьСотрудModel,
    'i-i-s-otdel-kadrov-2-табл-часть-т-у': IISOtdel_kadrov_2ТаблЧастьТУModel,
    'i-i-s-otdel-kadrov-2-увольнение': IISOtdel_kadrov_2УвольнениеModel
  },

  'application-name': 'Otdel_kadrov_2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Otdel_kadrov_2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otdel_kadrov_2',
          title: 'Otdel_kadrov_2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'otdel-kadrov-2': {
          caption: 'Otdel_kadrov_2',
          title: 'Otdel_kadrov_2',
          'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l': {
            caption: 'Табл часть СШР',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-табл-часть-т-у-l': {
            caption: 'Табл часть ТУ',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-таб-уч-р-в-l': {
            caption: 'Таб уч РВ',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-табл-часть-г-о-l': {
            caption: 'Табл часть ГО',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-увольнение-l': {
            caption: 'Увольнение',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-график-отпуск-l': {
            caption: 'График отпуск',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-табл-часть-сотруд-l': {
            caption: 'Табл часть сотруд',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-отдел-кадров-l': {
            caption: 'Отдел кадров',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-сост-штат-рас-l': {
            caption: 'Сост штат рас',
            title: ''
          },
          'i-i-s-otdel-kadrov-2-приказ-о-приеме-l': {
            caption: 'Приказ о приеме',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-otdel-kadrov-2-график-отпуск-l': IISOtdel_kadrov_2ГрафикОтпускLForm,
    'i-i-s-otdel-kadrov-2-должность-l': IISOtdel_kadrov_2ДолжностьLForm,
    'i-i-s-otdel-kadrov-2-отдел-кадров-l': IISOtdel_kadrov_2ОтделКадровLForm,
    'i-i-s-otdel-kadrov-2-приказ-о-приеме-l': IISOtdel_kadrov_2ПриказОПриемеLForm,
    'i-i-s-otdel-kadrov-2-сост-штат-рас-l': IISOtdel_kadrov_2СостШтатРасLForm,
    'i-i-s-otdel-kadrov-2-сотрудники-l': IISOtdel_kadrov_2СотрудникиLForm,
    'i-i-s-otdel-kadrov-2-таб-уч-р-в-l': IISOtdel_kadrov_2ТабУчРВLForm,
    'i-i-s-otdel-kadrov-2-табл-часть-г-о-l': IISOtdel_kadrov_2ТаблЧастьГОLForm,
    'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l': IISOtdel_kadrov_2ТаблЧастьСШРLForm,
    'i-i-s-otdel-kadrov-2-табл-часть-сотруд-l': IISOtdel_kadrov_2ТаблЧастьСотрудLForm,
    'i-i-s-otdel-kadrov-2-табл-часть-т-у-l': IISOtdel_kadrov_2ТаблЧастьТУLForm,
    'i-i-s-otdel-kadrov-2-увольнение-l': IISOtdel_kadrov_2УвольнениеLForm,
    'i-i-s-otdel-kadrov-2-график-отпуск-e': IISOtdel_kadrov_2ГрафикОтпускEForm,
    'i-i-s-otdel-kadrov-2-должность-e': IISOtdel_kadrov_2ДолжностьEForm,
    'i-i-s-otdel-kadrov-2-отдел-кадров-e': IISOtdel_kadrov_2ОтделКадровEForm,
    'i-i-s-otdel-kadrov-2-приказ-о-приеме-e': IISOtdel_kadrov_2ПриказОПриемеEForm,
    'i-i-s-otdel-kadrov-2-сост-штат-рас-e': IISOtdel_kadrov_2СостШтатРасEForm,
    'i-i-s-otdel-kadrov-2-сотрудники-e': IISOtdel_kadrov_2СотрудникиEForm,
    'i-i-s-otdel-kadrov-2-таб-уч-р-в-e': IISOtdel_kadrov_2ТабУчРВEForm,
    'i-i-s-otdel-kadrov-2-табл-часть-г-о-e': IISOtdel_kadrov_2ТаблЧастьГОEForm,
    'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e': IISOtdel_kadrov_2ТаблЧастьСШРEForm,
    'i-i-s-otdel-kadrov-2-табл-часть-сотруд-e': IISOtdel_kadrov_2ТаблЧастьСотрудEForm,
    'i-i-s-otdel-kadrov-2-табл-часть-т-у-e': IISOtdel_kadrov_2ТаблЧастьТУEForm,
    'i-i-s-otdel-kadrov-2-увольнение-e': IISOtdel_kadrov_2УвольнениеEForm
  },

});

export default translations;
