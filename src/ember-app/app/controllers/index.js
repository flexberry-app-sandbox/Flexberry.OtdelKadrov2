import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.caption'),
          title: i18n.t('forms.application.sitemap.otdel-kadrov-2.title'),
          children: [{
            link: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-сотрудники-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-табл-часть-т-у-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-табл-часть-т-у-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-табл-часть-т-у-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-таб-уч-р-в-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-таб-уч-р-в-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-таб-уч-р-в-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-должность-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-должность-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-табл-часть-г-о-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-табл-часть-г-о-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-табл-часть-г-о-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-увольнение-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-увольнение-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-увольнение-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-график-отпуск-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-график-отпуск-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-график-отпуск-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-табл-часть-сотруд-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-табл-часть-сотруд-l.title'),
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-отдел-кадров-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-отдел-кадров-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-отдел-кадров-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-сост-штат-рас-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-сост-штат-рас-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-сост-штат-рас-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-otdel-kadrov-2-приказ-о-приеме-l',
            caption: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-приказ-о-приеме-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-kadrov-2.i-i-s-otdel-kadrov-2-приказ-о-приеме-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})