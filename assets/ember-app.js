"use strict";



define('ember-app/adapters/application-offline', ['exports', 'ember-flexberry-data/adapters/offline', 'ember-app/config/environment'], function (exports, _offline, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _offline.default.extend({
    dbName: _environment.default.APP.offline.dbName
  });
});
define('ember-app/adapters/application', ['exports', 'ember-flexberry-data/mixins/adapter', 'ember-flexberry-data/adapters/odata', 'ember-app/config/environment'], function (exports, _adapter, _odata, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _odata.default.extend(_adapter.default, {
    host: _environment.default.APP.backendUrls.api
  });
});
define('ember-app/adapters/odata', ['exports', 'ember-flexberry-data/adapters/odata'], function (exports, _odata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _odata.default;
    }
  });
});
define('ember-app/adapters/offline', ['exports', 'ember-flexberry-data/adapters/offline'], function (exports, _offline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _offline.default;
    }
  });
});
define('ember-app/app', ['exports', 'ember-app/resolver', 'ember-load-initializers', 'ember-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-app/browserify', ['npm:dexie', 'npm:node-uuid'], function (_npmDexie, _npmNodeUuid) {
  'use strict';
});
define('ember-app/components/advlimit-dialog-content', ['exports', 'ember-flexberry/components/advlimit-dialog-content'], function (exports, _advlimitDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _advlimitDialogContent.default;
    }
  });
});
define('ember-app/components/block-slot', ['exports', 'ember-block-slots/components/block-slot'], function (exports, _blockSlot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _blockSlot.default;
    }
  });
});
define('ember-app/components/colsconfig-dialog-content', ['exports', 'ember-flexberry/components/colsconfig-dialog-content'], function (exports, _colsconfigDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _colsconfigDialogContent.default;
    }
  });
});
define('ember-app/components/filters-dialog-content', ['exports', 'ember-flexberry/components/filters-dialog-content'], function (exports, _filtersDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filtersDialogContent.default;
    }
  });
});
define('ember-app/components/flexberry-button', ['exports', 'ember-flexberry/components/flexberry-button'], function (exports, _flexberryButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryButton.default;
    }
  });
});
define('ember-app/components/flexberry-checkbox', ['exports', 'ember-flexberry/components/flexberry-checkbox'], function (exports, _flexberryCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryCheckbox.default;
});
define('ember-app/components/flexberry-colorpicker', ['exports', 'ember-flexberry/components/flexberry-colorpicker'], function (exports, _flexberryColorpicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryColorpicker.default;
    }
  });
});
define('ember-app/components/flexberry-ddau-checkbox', ['exports', 'ember-flexberry/components/flexberry-ddau-checkbox'], function (exports, _flexberryDdauCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryDdauCheckbox.default;
    }
  });
});
define('ember-app/components/flexberry-ddau-slider', ['exports', 'ember-flexberry/components/flexberry-ddau-slider'], function (exports, _flexberryDdauSlider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryDdauSlider.default;
    }
  });
});
define('ember-app/components/flexberry-dialog', ['exports', 'ember-flexberry/components/flexberry-dialog'], function (exports, _flexberryDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryDialog.default;
    }
  });
});
define('ember-app/components/flexberry-dropdown', ['exports', 'ember-flexberry/components/flexberry-dropdown'], function (exports, _flexberryDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryDropdown.default;
});
define('ember-app/components/flexberry-error', ['exports', 'ember-flexberry/components/flexberry-error'], function (exports, _flexberryError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryError.default;
    }
  });
});
define('ember-app/components/flexberry-field', ['exports', 'ember-flexberry/components/flexberry-field'], function (exports, _flexberryField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryField.default;
});
define('ember-app/components/flexberry-file', ['exports', 'ember-flexberry/components/flexberry-file'], function (exports, _flexberryFile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryFile.default;
});
define('ember-app/components/flexberry-groupedit', ['exports', 'ember-flexberry/components/flexberry-groupedit'], function (exports, _flexberryGroupedit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryGroupedit.default;
});
define('ember-app/components/flexberry-icon', ['exports', 'ember-flexberry/components/flexberry-icon'], function (exports, _flexberryIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryIcon.default;
    }
  });
});
define('ember-app/components/flexberry-jsonarea', ['exports', 'ember-flexberry/components/flexberry-jsonarea'], function (exports, _flexberryJsonarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryJsonarea.default;
    }
  });
});
define('ember-app/components/flexberry-lookup', ['exports', 'ember-flexberry/components/flexberry-lookup'], function (exports, _flexberryLookup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryLookup.default;
});
define('ember-app/components/flexberry-menu', ['exports', 'ember-flexberry/components/flexberry-menu'], function (exports, _flexberryMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryMenu.default;
    }
  });
});
define('ember-app/components/flexberry-menuitem', ['exports', 'ember-flexberry/components/flexberry-menuitem'], function (exports, _flexberryMenuitem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryMenuitem.default;
    }
  });
});
define('ember-app/components/flexberry-objectlistview', ['exports', 'ember-flexberry/components/flexberry-objectlistview'], function (exports, _flexberryObjectlistview) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryObjectlistview.default;
});
define('ember-app/components/flexberry-sidebar', ['exports', 'ember-flexberry/components/flexberry-sidebar'], function (exports, _flexberrySidebar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberrySidebar.default;
    }
  });
});
define('ember-app/components/flexberry-simpledatetime', ['exports', 'ember-flexberry/components/flexberry-simpledatetime'], function (exports, _flexberrySimpledatetime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberrySimpledatetime.default;
    }
  });
});
define('ember-app/components/flexberry-sitemap-guideline', ['exports', 'ember-flexberry/components/flexberry-sitemap-guideline'], function (exports, _flexberrySitemapGuideline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberrySitemapGuideline.default;
    }
  });
});
define('ember-app/components/flexberry-sitemap', ['exports', 'ember-flexberry/components/flexberry-sitemap'], function (exports, _flexberrySitemap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberrySitemap.default;
    }
  });
});
define('ember-app/components/flexberry-tab-bar', ['exports', 'ember-flexberry/components/flexberry-tab-bar'], function (exports, _flexberryTabBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryTabBar.default;
    }
  });
});
define('ember-app/components/flexberry-text-cell', ['exports', 'ember-flexberry/components/flexberry-text-cell'], function (exports, _flexberryTextCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryTextCell.default;
    }
  });
});
define('ember-app/components/flexberry-textarea', ['exports', 'ember-flexberry/components/flexberry-textarea'], function (exports, _flexberryTextarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryTextarea.default;
});
define('ember-app/components/flexberry-textbox', ['exports', 'ember-flexberry/components/flexberry-textbox'], function (exports, _flexberryTextbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryTextbox.default;
});
define('ember-app/components/flexberry-toggler', ['exports', 'ember-flexberry/components/flexberry-toggler'], function (exports, _flexberryToggler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryToggler.default;
});
define('ember-app/components/flexberry-tree', ['exports', 'ember-flexberry/components/flexberry-tree'], function (exports, _flexberryTree) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryTree.default;
    }
  });
});
define('ember-app/components/flexberry-treenode', ['exports', 'ember-flexberry/components/flexberry-treenode'], function (exports, _flexberryTreenode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryTreenode.default;
    }
  });
});
define('ember-app/components/flexberry-validationmessage', ['exports', 'ember-flexberry/components/flexberry-validationmessage'], function (exports, _flexberryValidationmessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryValidationmessage.default;
    }
  });
});
define('ember-app/components/flexberry-validationsummary', ['exports', 'ember-flexberry/components/flexberry-validationsummary'], function (exports, _flexberryValidationsummary) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryValidationsummary.default;
    }
  });
});
define('ember-app/components/flexberry/validation-summary', ['exports', 'ember-flexberry/components/flexberry/validation-summary'], function (exports, _validationSummary) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _validationSummary.default;
    }
  });
});
define('ember-app/components/form-load-time-tracker', ['exports', 'ember-flexberry/components/form-load-time-tracker'], function (exports, _formLoadTimeTracker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formLoadTimeTracker.default;
    }
  });
});
define('ember-app/components/groupedit-toolbar', ['exports', 'ember-flexberry/components/groupedit-toolbar'], function (exports, _groupeditToolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _groupeditToolbar.default;
});
define('ember-app/components/highload-edit-form-menu', ['exports', 'ember-flexberry/components/highload-edit-form-menu'], function (exports, _highloadEditFormMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _highloadEditFormMenu.default;
    }
  });
});
define('ember-app/components/mobile/flexberry-file', ['exports', 'ember-flexberry/components/mobile/flexberry-file'], function (exports, _flexberryFile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryFile.default;
});
define('ember-app/components/mobile/flexberry-groupedit', ['exports', 'ember-flexberry/components/mobile/flexberry-groupedit'], function (exports, _flexberryGroupedit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryGroupedit.default;
});
define('ember-app/components/mobile/flexberry-objectlistview', ['exports', 'ember-flexberry/components/mobile/flexberry-objectlistview'], function (exports, _flexberryObjectlistview) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryObjectlistview.default;
});
define('ember-app/components/mobile/flexberry-sitemap-guideline', ['exports', 'ember-flexberry/components/mobile/flexberry-sitemap-guideline'], function (exports, _flexberrySitemapGuideline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberrySitemapGuideline.default;
});
define('ember-app/components/mobile/object-list-view-row', ['exports', 'ember-flexberry/components/mobile/object-list-view-row'], function (exports, _objectListViewRow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectListViewRow.default;
});
define('ember-app/components/mobile/object-list-view', ['exports', 'ember-flexberry/components/mobile/object-list-view'], function (exports, _objectListView) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectListView.default;
});
define('ember-app/components/modal-dialog', ['exports', 'ember-flexberry/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _modalDialog.default;
});
define('ember-app/components/object-list-view-cell', ['exports', 'ember-flexberry/components/object-list-view-cell'], function (exports, _objectListViewCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectListViewCell.default;
});
define('ember-app/components/object-list-view-row', ['exports', 'ember-flexberry/components/object-list-view-row'], function (exports, _objectListViewRow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectListViewRow.default;
});
define('ember-app/components/object-list-view-single-column-cell', ['exports', 'ember-flexberry/components/object-list-view-single-column-cell'], function (exports, _objectListViewSingleColumnCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectListViewSingleColumnCell.default;
    }
  });
});
define('ember-app/components/object-list-view', ['exports', 'ember-flexberry/components/object-list-view'], function (exports, _objectListView) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectListView.default;
});
define('ember-app/components/olv-filter-interval', ['exports', 'ember-flexberry/components/olv-filter-interval'], function (exports, _olvFilterInterval) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _olvFilterInterval.default;
    }
  });
});
define('ember-app/components/olv-setconfigdialogbutton', ['exports', 'ember-flexberry/components/olv-setconfigdialogbutton'], function (exports, _olvSetconfigdialogbutton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _olvSetconfigdialogbutton.default;
    }
  });
});
define('ember-app/components/olv-toolbar', ['exports', 'ember-flexberry/components/olv-toolbar'], function (exports, _olvToolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _olvToolbar.default;
});
define('ember-app/components/ui-message', ['exports', 'ember-flexberry/components/ui-message'], function (exports, _uiMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _uiMessage.default;
});
define('ember-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-app/components/yield-slot', ['exports', 'ember-block-slots/components/yield-slot'], function (exports, _yieldSlot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _yieldSlot.default;
    }
  });
});
define('ember-app/controllers/advlimit-dialog', ['exports', 'ember-flexberry/controllers/advlimit-dialog'], function (exports, _advlimitDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _advlimitDialog.default;
});
define('ember-app/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sitemap: Ember.computed('i18n.locale', function () {
      var i18n = this.get('i18n');

      return {
        nodes: [{
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
        }]
      };
    }),

    /**
      Locales supported by application.
       @property locales
      @type String[]
      @default ['ru', 'en']
    */
    locales: undefined,

    /**
      Handles changes in userSettingsService.isUserSettingsServiceEnabled.
       @method _userSettingsServiceChanged
      @private
    */
    _userSettingsServiceChanged: Ember.observer('userSettingsService.isUserSettingsServiceEnabled', function () {
      this.get('target.router').refresh();
    }),

    /**
      Initializes controller.
    */
    init: function init() {
      this._super.apply(this, arguments);

      var i18n = this.get('i18n');
      if (Ember.isNone(i18n)) {
        return;
      }

      this.set('locales', ['ru', 'en']);

      // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
      var shortCurrentLocale = this.get('i18n.locale').split('-')[0];
      var availableLocales = Ember.A(this.get('locales'));

      // Force current locale to be one of available,
      // if browser's current language is not supported by dummy application,
      // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
      if (!availableLocales.includes(shortCurrentLocale)) {
        i18n.set('locale', 'en');
      } else {
        i18n.set('locale', shortCurrentLocale);
      }
    },


    /**
      Service that triggers objectlistview events.
       @property objectlistviewEventsService
      @type Service
    */
    objectlistviewEventsService: Ember.inject.service('objectlistview-events'),

    /**
      Service for managing the state of the application.
       @property appState
      @type AppStateService
    */
    appState: Ember.inject.service(),

    actions: {
      /**
        Call `updateWidthTrigger` for `objectlistviewEventsService`.
         @method actions.updateWidth
      */
      updateWidth: function updateWidth() {
        this.get('objectlistviewEventsService').updateWidthTrigger();
      },


      /**
        Toggles application sitemap's side bar.
         @method actions.toggleSidebar
      */
      toggleSidebar: function toggleSidebar() {
        var sidebar = Ember.$('.ui.sidebar.main.menu');
        sidebar.sidebar('toggle');
        sidebar.toggleClass('sidebar-mini');

        Ember.$('.full.height').toggleClass('content-opened');

        Ember.$('.sidebar.icon .text_menu').toggleClass('hidden');
        Ember.$('.sidebar.icon').toggleClass('text-menu-show');
        Ember.$('.sidebar.icon').toggleClass('text-menu-hide');
        Ember.$('.bgw-opacity').toggleClass('hidden');

        // For reinit overflowed tabs.
        Ember.$(window).trigger('resize');
      },


      /**
        Toggles application sitemap's side bar in mobile view.
         @method actions.toggleSidebarMobile
      */
      toggleSidebarMobile: function toggleSidebarMobile() {
        Ember.$('.ui.sidebar.main.menu').sidebar('toggle');

        Ember.$('.sidebar.icon').toggleClass('text-menu-show');
        Ember.$('.sidebar.icon').toggleClass('text-menu-hide');
        Ember.$('.sidebar.icon').toggleClass('hidden-text');
        Ember.$('.bgw-opacity').toggleClass('hidden');

        if (!this.get('_hideEventIsAttached')) {
          Ember.$('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
          this.set('_hideEventIsAttached', true);
        }
      }
    }
  });
});
define('ember-app/controllers/colsconfig-dialog', ['exports', 'ember-flexberry/controllers/colsconfig-dialog'], function (exports, _colsconfigDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _colsconfigDialog.default;
});
define('ember-app/controllers/detail-edit-form', ['exports', 'ember-flexberry/controllers/detail-edit-form'], function (exports, _detailEditForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _detailEditForm.default;
    }
  });
});
define('ember-app/controllers/edit-form', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _editForm.default;
    }
  });
});
define('ember-app/controllers/filters-dialog', ['exports', 'ember-flexberry/controllers/filters-dialog'], function (exports, _filtersDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _filtersDialog.default;
});
define('ember-app/controllers/flexberry-file-view-dialog', ['exports', 'ember-flexberry/controllers/flexberry-file-view-dialog'], function (exports, _flexberryFileViewDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryFileViewDialog.default;
});
define('ember-app/controllers/i-i-s-caseberry-logging-objects-application-log-e', ['exports', 'ember-flexberry/controllers/i-i-s-caseberry-logging-objects-application-log-e'], function (exports, _iISCaseberryLoggingObjectsApplicationLogE) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLogE.default;
    }
  });
});
define('ember-app/controllers/i-i-s-caseberry-logging-objects-application-log-l', ['exports', 'ember-flexberry/controllers/i-i-s-caseberry-logging-objects-application-log-l'], function (exports, _iISCaseberryLoggingObjectsApplicationLogL) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLogL.default;
    }
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-график-отпуск-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2ГрафикОтпускENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2ГрафикОтпускENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-график-отпуск-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-график-отпуск-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-должность-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2ДолжностьENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2ДолжностьENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-должность-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-должность-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-отдел-кадров-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2ОтделКадровENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2ОтделКадровENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-отдел-кадров-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-отдел-кадров-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-приказ-о-приеме-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2ПриказОПриемеENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2ПриказОПриемеENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-приказ-о-приеме-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-приказ-о-приеме-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-сост-штат-рас-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2СостШтатРасENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2СостШтатРасENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-сост-штат-рас-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-сост-штат-рас-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-сотрудники-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2СотрудникиENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2СотрудникиENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-сотрудники-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-сотрудники-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-таб-уч-р-в-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2ТабУчРВENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2ТабУчРВENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-таб-уч-р-в-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-таб-уч-р-в-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-табл-часть-г-о-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2ТаблЧастьГОENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2ТаблЧастьГОENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-табл-часть-г-о-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-табл-часть-г-о-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2ТаблЧастьСШРENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2ТаблЧастьСШРENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2ТаблЧастьСотрудENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2ТаблЧастьСотрудENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-табл-часть-сотруд-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-табл-часть-т-у-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2ТаблЧастьТУENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2ТаблЧастьТУENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-табл-часть-т-у-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-табл-часть-т-у-e'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-e', ['exports', 'ember-flexberry/controllers/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    parentRoute: 'i-i-s-otdel-kadrov-2-увольнение-l'
  });
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-e/new', ['exports', 'ember-app/controllers/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-e'], function (exports, _iISOtdelKadrov2E) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var IISOtdel_kadrov_2УвольнениеENewController = _iISOtdelKadrov2E.default;
  exports.default = IISOtdel_kadrov_2УвольнениеENewController;
});
define('ember-app/controllers/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-l', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of related edit form route.
       @property editFormRoute
      @type String
      @default 'i-i-s-otdel-kadrov-2-увольнение-e'
     */
    editFormRoute: 'i-i-s-otdel-kadrov-2-увольнение-e'
  });
});
define('ember-app/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sitemap: Ember.computed('i18n.locale', function () {
      var i18n = this.get('i18n');

      return {
        nodes: [{
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
        }]
      };
    })
  });
});
define('ember-app/controllers/list-form', ['exports', 'ember-flexberry/controllers/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listForm.default;
    }
  });
});
define('ember-app/controllers/lookup-dialog', ['exports', 'ember-flexberry/controllers/lookup-dialog'], function (exports, _lookupDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _lookupDialog.default;
});
define('ember-app/controllers/new-platform-flexberry-services-lock-list', ['exports', 'ember-flexberry/controllers/new-platform-flexberry-services-lock-list'], function (exports, _newPlatformFlexberryServicesLockList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryServicesLockList.default;
    }
  });
});
define('ember-app/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant', ['exports', 'ember-flexberry-data/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsTExecutionVariant) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsTExecutionVariant.default;
    }
  });
});
define('ember-app/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation', ['exports', 'ember-flexberry-data/enums/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation.default;
    }
  });
});
define('ember-app/enums/i-i-s-otdel-kadrov-2-\u0437\u0430\u043D\u044F\u0442\u043E\u0441\u0442\u044C', ['exports', 'ember-flexberry-data/utils/enum-functions'], function (exports, _enumFunctions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _enumFunctions.createEnum)({
    ВремНеполнаяЗан: 'Временная Неполная занятость',
    НеполнаяЗан: 'Неполная занятость',
    УслованаяЗан: 'Условная занятость',
    НерегЗан: 'Нерегулярная занятость',
    ТеневаяЗан: 'Теневая занятость',
    ВторичнаяЗан: 'Вторичная занятость',
    ПолстояннаяЗан: 'Постоянная занятость',
    ЧастичнаяЗан: 'Частичная занятость'
  });
});
define('ember-app/enums/i-i-s-otdel-kadrov-2-\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435', ['exports', 'ember-flexberry-data/utils/enum-functions'], function (exports, _enumFunctions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _enumFunctions.createEnum)({
    Высшее1: 'Высшее 1',
    СреднееПроф: 'Среднее профессиональное',
    Высшее2: 'Высшее 2',
    Высшее3: 'Высшее 3'
  });
});
define('ember-app/enums/i-i-s-otdel-kadrov-2-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435', ['exports', 'ember-flexberry-data/utils/enum-functions'], function (exports, _enumFunctions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _enumFunctions.createEnum)({
    ВалютныйОтдел: 'Валютный отдел',
    ОтделКредит: 'Отдел кредитования',
    Бухгалтерия: 'Бухгалтерский',
    ИнвестОт: 'Инвестиционный отдел',
    ЮрОтедл: 'Юридический отдел',
    ОтДепОпер: 'Отдел депозитных операций',
    ОтделПлан: 'Отдел планирования',
    ПлатежныйОт: 'Платежный отдел',
    ОтКадров: 'Отдел кадров',
    ОтПоСтрах: 'отдел по страхованию',
    ОперацПодр: 'Операционное подразделение'
  });
});
define('ember-app/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('ember-app/helpers/app-version', ['exports', 'ember-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ember-app/helpers/array-contains', ['exports', 'ember-flexberry/helpers/array-contains'], function (exports, _arrayContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _arrayContains.default;
    }
  });
  Object.defineProperty(exports, 'arrayContains', {
    enumerable: true,
    get: function () {
      return _arrayContains.arrayContains;
    }
  });
});
define('ember-app/helpers/array', ['exports', 'ember-flexberry/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
});
define('ember-app/helpers/block-params', ['exports', 'ember-block-slots/helpers/block-params'], function (exports, _blockParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _blockParams.default;
    }
  });
  Object.defineProperty(exports, 'blockParams', {
    enumerable: true,
    get: function () {
      return _blockParams.blockParams;
    }
  });
});
define('ember-app/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('ember-app/helpers/flexberry-enum', ['exports', 'ember-flexberry/helpers/flexberry-enum'], function (exports, _flexberryEnum) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryEnum.default;
    }
  });
});
define('ember-app/helpers/get-formatted', ['exports', 'ember-flexberry/helpers/get-formatted'], function (exports, _getFormatted) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getFormatted.default;
    }
  });
});
define('ember-app/helpers/get-with-dynamic-actions', ['exports', 'ember-flexberry/helpers/get-with-dynamic-actions'], function (exports, _getWithDynamicActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getWithDynamicActions.default;
    }
  });
});
define('ember-app/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('ember-app/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('ember-app/helpers/increase-number', ['exports', 'ember-flexberry/helpers/increase-number'], function (exports, _increaseNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _increaseNumber.default;
    }
  });
});
define('ember-app/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('ember-app/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('ember-app/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('ember-app/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('ember-app/helpers/is-blank', ['exports', 'ember-flexberry/helpers/is-blank'], function (exports, _isBlank) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBlank.default;
    }
  });
});
define('ember-app/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('ember-app/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('ember-app/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('ember-app/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('ember-app/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('ember-app/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('ember-app/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('ember-app/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('ember-app/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('ember-app/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('ember-app/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('ember-app/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('ember-app/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('ember-app/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('ember-app/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('ember-app/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('ember-app/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('ember-app/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('ember-app/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('ember-app/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('ember-app/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('ember-app/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('ember-app/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('ember-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-app/helpers/readonly-cell', ['exports', 'ember-flexberry/helpers/readonly-cell'], function (exports, _readonlyCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _readonlyCell.default;
    }
  });
  Object.defineProperty(exports, 'readonlyCell', {
    enumerable: true,
    get: function () {
      return _readonlyCell.readonlyCell;
    }
  });
});
define('ember-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-app/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _helper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helper.default;
    }
  });
});
define('ember-app/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('ember-app/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
define('ember-app/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('ember-app/initializers/allow-link-action', ['exports', 'ember-link-action/initializers/allow-link-action'], function (exports, _allowLinkAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _allowLinkAction.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _allowLinkAction.initialize;
    }
  });
});
define('ember-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-app/initializers/component-prop-types', ['exports', 'ember-prop-types/initializers/component-prop-types'], function (exports, _componentPropTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _componentPropTypes.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _componentPropTypes.initialize;
    }
  });
});
define('ember-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-app/initializers/ember-i18n-cp-validations', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    // intentionally left blank to not break upgrade path
  }

  exports.default = {
    name: 'ember-i18n-cp-validations',
    initialize: initialize
  };
});
define('ember-app/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('ember-app/initializers/export-application-global', ['exports', 'ember-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-app/initializers/flexberry-enum', ['exports', 'ember-flexberry-data/initializers/flexberry-enum'], function (exports, _flexberryEnum) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryEnum.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _flexberryEnum.initialize;
    }
  });
});
define('ember-app/initializers/i18n', ['exports', 'ember-flexberry/initializers/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _i18n.initialize;
    }
  });
});
define('ember-app/initializers/local-store', ['exports', 'ember-flexberry-data/initializers/local-store'], function (exports, _localStore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _localStore.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _localStore.initialize;
    }
  });
});
define('ember-app/initializers/log', ['exports', 'ember-flexberry/initializers/log'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _log.initialize;
    }
  });
});
define('ember-app/initializers/moment', ['exports', 'ember-flexberry/initializers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _moment.initialize;
    }
  });
});
define('ember-app/initializers/offline-globals', ['exports', 'ember-flexberry-data/initializers/offline-globals'], function (exports, _offlineGlobals) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _offlineGlobals.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _offlineGlobals.initialize;
    }
  });
});
define('ember-app/initializers/perf', ['exports', 'ember-flexberry/initializers/perf'], function (exports, _perf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perf.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _perf.initialize;
    }
  });
});
define('ember-app/initializers/render-perf-logger', ['exports', 'ember-flexberry/initializers/render-perf-logger'], function (exports, _renderPerfLogger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _renderPerfLogger.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _renderPerfLogger.initialize;
    }
  });
});
define('ember-app/initializers/user-settings', ['exports', 'ember-flexberry/initializers/user-settings'], function (exports, _userSettings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _userSettings.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _userSettings.initialize;
    }
  });
});
define('ember-app/instance-initializers/block-slots', ['exports', 'ember-flexberry/instance-initializers/block-slots'], function (exports, _blockSlots) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _blockSlots.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _blockSlots.initialize;
    }
  });
});
define('ember-app/instance-initializers/default-user-setting', ['exports', 'ember-flexberry/instance-initializers/default-user-settings'], function (exports, _defaultUserSettings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _defaultUserSettings.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _defaultUserSettings.initialize;
    }
  });
});
define('ember-app/instance-initializers/device', ['exports', 'ember-flexberry/instance-initializers/device'], function (exports, _device) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _device.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _device.initialize;
    }
  });
});
define("ember-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-app/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('ember-app/instance-initializers/i18n', ['exports', 'ember-flexberry/instance-initializers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _moment.initialize;
    }
  });
});
define('ember-app/instance-initializers/lock', ['exports', 'ember-flexberry/instance-initializers/lock'], function (exports, _lock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lock.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _lock.initialize;
    }
  });
});
define('ember-app/instance-initializers/log', ['exports', 'ember-flexberry/instance-initializers/log'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _log.initialize;
    }
  });
});
define('ember-app/instance-initializers/moment', ['exports', 'ember-flexberry/instance-initializers/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _i18n.initialize;
    }
  });
});
define('ember-app/instance-initializers/perf', ['exports', 'ember-flexberry/instance-initializers/perf'], function (exports, _perf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perf.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _perf.initialize;
    }
  });
});
define('ember-app/instance-initializers/set-singletons', ['exports', 'ember-flexberry-data/instance-initializers/set-singletons'], function (exports, _setSingletons) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _setSingletons.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _setSingletons.initialize;
    }
  });
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'График отпуск',
    'датаДк-caption': 'Дата дк',
    'период-caption': 'Период',
    'руководительОр-caption': 'Руководитель ор',
    'руководительКО-caption': 'Руководитель КО',
    'отделКадров-caption': 'Отдел кадров'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'График отпуск'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Должность',
    'наименование-caption': 'Наименование',
    'iDДолжности-caption': 'I d должности'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Должность'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Отдел кадров',
    'сотрудники-caption': 'Сотрудники'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Отдел кадров'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Приказ о приеме',
    'подразделение-caption': 'Подразделение',
    'оклад-caption': 'Оклад',
    'фИО-caption': 'ФИО',
    'графикРаботы-caption': 'График работы',
    'датаДк-caption': 'Дата дк',
    'ответсвенный-caption': 'Ответсвенный',
    'срокЗаключения-caption': 'Срок заключения',
    'датаПриема-caption': 'Дата приема',
    'занятость-caption': 'Занятость',
    'должность-caption': 'Должность',
    'отделКадров-caption': 'Отдел кадров'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Приказ о приеме'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сост штат рас',
    'период-caption': 'Период',
    'руководительКО-caption': 'Руководитель КО',
    'датаДк-caption': 'Дата дк',
    'главБух-caption': 'Глав бух',
    'отделКадров-caption': 'Отдел кадров'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сост штат рас'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сотрудники',
    'фИО-caption': 'ФИО',
    'датаРождения-caption': 'Дата рождения',
    'iDСотрудника-caption': 'I d сотрудника',
    'пол-caption': 'Пол',
    'подразделение-caption': 'Подразделение',
    'знаниеЯзыков-caption': 'Знание языков',
    'образование-caption': 'Образование',
    'гражданство-caption': 'Гражданство',
    'должность-caption': 'Должность'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сотрудники'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Таб уч РВ',
    'датаДк-caption': 'Дата дк',
    'руководитель-caption': 'Руководитель',
    'период-caption': 'Период',
    'исполнитель-caption': 'Исполнитель',
    'отделКадров-caption': 'Отдел кадров'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Таб уч РВ'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть ГО',
    'код-caption': 'Код',
    'колКалДней-caption': 'Кол кал дней',
    'датаЗап-caption': 'Дата зап',
    'датаФакт-caption': 'Дата факт',
    'основание-caption': 'Основание',
    'перенос-caption': 'Перенос',
    'примечание-caption': 'Примечание',
    'сотрудники-caption': 'Сотрудники'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть ГО'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть СШР',
    'код-caption': 'Код',
    'наименование-caption': 'Наименование',
    'количествоШЕ-caption': 'Количество ШЕ',
    'тарифнаяСтавка-caption': 'Тарифная ставка',
    'надбавки-caption': 'Надбавки',
    'всего-caption': 'Всего',
    'примечание-caption': 'Примечание',
    'всегоКолШЕ-caption': 'Всего кол ШЕ',
    'всегоТС-caption': 'Всего ТС',
    'всегоНадбавки-caption': 'Всего надбавки',
    'итогоВсего-caption': 'Итого всего',
    'должность-caption': 'Должность'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть СШР'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть сотруд',
    'наимОбуч-caption': 'Наим обуч',
    'квалификация-caption': 'Квалификация',
    'наимДок-caption': 'Наим док',
    'cерия-caption': 'Cерия',
    'номер-caption': 'Номер',
    'годОкончания-caption': 'Год окончания'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть сотруд'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть ТУ',
    'код-caption': 'Код',
    'датаДк-caption': 'Дата дк',
    'явкаНеявка-caption': 'Явка неявка',
    'колЯвокПМес-caption': 'Кол явок п мес',
    'колЯвокМес-caption': 'Кол явок мес',
    'часыЗаПМес-caption': 'Часы за п мес',
    'часыЗаМесяц-caption': 'Часы за месяц',
    'кодВидаОплаты-caption': 'Код вида оплаты',
    'корресСчет-caption': 'Коррес счет',
    'дниЧасы-caption': 'Дни часы',
    'колНеявок-caption': 'Кол неявок',
    'изНихПоПричинам-caption': 'Из них по причинам',
    'колВыхПразд-caption': 'Кол вых празд'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть ТУ'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Увольнение',
    'датаУвольнения-caption': 'Дата увольнения',
    'датаДк-caption': 'Дата дк',
    'основание-caption': 'Основание',
    'ответственный-caption': 'Ответственный',
    'сотрудники-caption': 'Сотрудники',
    'отделКадров-caption': 'Отдел кадров'
  };
});
define('ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Увольнение'
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ГрафикОтпускE: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        период: {
          __caption__: 'Период'
        },
        руководительОр: {
          __caption__: 'Руководитель ор'
        },
        руководительКО: {
          __caption__: 'Руководитель КО'
        },
        отделКадров: {
          __caption__: 'Отдел кадров'
        }
      },
      ГрафикОтпускL: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        период: {
          __caption__: 'Период'
        },
        руководительОр: {
          __caption__: 'Руководитель ор'
        },
        руководительКО: {
          __caption__: 'Руководитель КО'
        }
      }
    },
    validations: {
      датаДк: {
        __caption__: 'Дата дк'
      },
      период: {
        __caption__: 'Период'
      },
      руководительКО: {
        __caption__: 'Руководитель КО'
      },
      руководительОр: {
        __caption__: 'Руководитель ор'
      },
      отделКадров: {
        __caption__: 'Отдел кадров'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ДолжностьE: {
        наименование: {
          __caption__: 'Наименование'
        },
        iDДолжности: {
          __caption__: 'I d должности'
        }
      },
      ДолжностьL: {
        наименование: {
          __caption__: 'Наименование'
        },
        iDДолжности: {
          __caption__: 'I d должности'
        }
      }
    },
    validations: {
      iDДолжности: {
        __caption__: 'I d должности'
      },
      наименование: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ОтделКадровE: {
        сотрудники: {
          __caption__: 'Сотрудники',
          фИО: {
            __caption__: 'ФИО'
          }
        }
      },
      ОтделКадровL: {
        сотрудники: {
          __caption__: 'ФИО',
          фИО: {
            __caption__: 'ФИО'
          }
        }
      }
    },
    validations: {
      сотрудники: {
        __caption__: 'Сотрудники'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ПриказОПриемеE: {
        подразделение: {
          __caption__: 'Подразделение'
        },
        оклад: {
          __caption__: 'Оклад'
        },
        фИО: {
          __caption__: 'ФИО'
        },
        графикРаботы: {
          __caption__: 'График работы'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        ответсвенный: {
          __caption__: 'Ответсвенный'
        },
        срокЗаключения: {
          __caption__: 'Срок заключения'
        },
        датаПриема: {
          __caption__: 'Дата приема'
        },
        занятость: {
          __caption__: 'Занятость'
        },
        должность: {
          __caption__: 'Должность',
          наименование: {
            __caption__: 'Наименование'
          }
        },
        отделКадров: {
          __caption__: 'Отдел кадров'
        }
      },
      ПриказОПриемеL: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        подразделение: {
          __caption__: 'Подразделение'
        },
        оклад: {
          __caption__: 'Оклад'
        },
        фИО: {
          __caption__: 'ФИО'
        },
        графикРаботы: {
          __caption__: 'График работы'
        },
        ответсвенный: {
          __caption__: 'Ответсвенный'
        },
        срокЗаключения: {
          __caption__: 'Срок заключения'
        },
        датаПриема: {
          __caption__: 'Дата приема'
        },
        занятость: {
          __caption__: 'Занятость'
        },
        должность: {
          __caption__: 'Наименование',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    validations: {
      графикРаботы: {
        __caption__: 'График работы'
      },
      датаДк: {
        __caption__: 'Дата дк'
      },
      датаПриема: {
        __caption__: 'Дата приема'
      },
      занятость: {
        __caption__: 'Занятость'
      },
      оклад: {
        __caption__: 'Оклад'
      },
      ответсвенный: {
        __caption__: 'Ответсвенный'
      },
      подразделение: {
        __caption__: 'Подразделение'
      },
      срокЗаключения: {
        __caption__: 'Срок заключения'
      },
      фИО: {
        __caption__: 'ФИО'
      },
      должность: {
        __caption__: 'Должность'
      },
      отделКадров: {
        __caption__: 'Отдел кадров'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      СостШтатРасE: {
        период: {
          __caption__: 'Период'
        },
        руководительКО: {
          __caption__: 'Руководитель КО'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        главБух: {
          __caption__: 'Глав бух'
        },
        отделКадров: {
          __caption__: 'Отдел кадров'
        }
      },
      СостШтатРасL: {
        период: {
          __caption__: 'Период'
        },
        руководительКО: {
          __caption__: 'Руководитель КО'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        главБух: {
          __caption__: 'Глав бух'
        }
      }
    },
    validations: {
      главБух: {
        __caption__: 'Глав бух'
      },
      датаДк: {
        __caption__: 'Дата дк'
      },
      период: {
        __caption__: 'Период'
      },
      руководительКО: {
        __caption__: 'Руководитель КО'
      },
      отделКадров: {
        __caption__: 'Отдел кадров'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      СотрудникиE: {
        фИО: {
          __caption__: 'ФИО'
        },
        датаРождения: {
          __caption__: 'Дата рождения'
        },
        iDСотрудника: {
          __caption__: 'I d сотрудника'
        },
        пол: {
          __caption__: 'Пол'
        },
        подразделение: {
          __caption__: 'Подразделение'
        },
        знаниеЯзыков: {
          __caption__: 'Знание языков'
        },
        образование: {
          __caption__: 'Образование'
        },
        гражданство: {
          __caption__: 'Гражданство'
        },
        должность: {
          __caption__: 'Должность',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      },
      СотрудникиL: {
        фИО: {
          __caption__: 'ФИО'
        },
        датаРождения: {
          __caption__: 'Дата рождения'
        },
        iDСотрудника: {
          __caption__: 'I d сотрудника'
        },
        пол: {
          __caption__: 'Пол'
        },
        подразделение: {
          __caption__: 'Подразделение'
        },
        знаниеЯзыков: {
          __caption__: 'Знание языков'
        },
        образование: {
          __caption__: 'Образование'
        },
        гражданство: {
          __caption__: 'Гражданство'
        },
        должность: {
          __caption__: 'Наименование',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    validations: {
      iDСотрудника: {
        __caption__: 'I d сотрудника'
      },
      гражданство: {
        __caption__: 'Гражданство'
      },
      датаРождения: {
        __caption__: 'Дата рождения'
      },
      знаниеЯзыков: {
        __caption__: 'Знание языков'
      },
      образование: {
        __caption__: 'Образование'
      },
      подразделение: {
        __caption__: 'Подразделение'
      },
      пол: {
        __caption__: 'Пол'
      },
      фИО: {
        __caption__: 'ФИО'
      },
      должность: {
        __caption__: 'Должность'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТабУчРВE: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        руководитель: {
          __caption__: 'Руководитель'
        },
        период: {
          __caption__: 'Период'
        },
        исполнитель: {
          __caption__: 'Исполнитель'
        },
        отделКадров: {
          __caption__: 'Отдел кадров'
        }
      },
      ТабУчРВL: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        руководитель: {
          __caption__: 'Руководитель'
        },
        период: {
          __caption__: 'Период'
        },
        исполнитель: {
          __caption__: 'Исполнитель'
        }
      }
    },
    validations: {
      датаДк: {
        __caption__: 'Дата дк'
      },
      исполнитель: {
        __caption__: 'Исполнитель'
      },
      период: {
        __caption__: 'Период'
      },
      руководитель: {
        __caption__: 'Руководитель'
      },
      отделКадров: {
        __caption__: 'Отдел кадров'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТаблЧастьГОE: {
        код: {
          __caption__: 'Код'
        },
        колКалДней: {
          __caption__: 'Кол кал дней'
        },
        датаЗап: {
          __caption__: 'Дата зап'
        },
        датаФакт: {
          __caption__: 'Дата факт'
        },
        основание: {
          __caption__: 'Основание'
        },
        перенос: {
          __caption__: 'Перенос'
        },
        примечание: {
          __caption__: 'Примечание'
        },
        сотрудники: {
          __caption__: 'Сотрудники',
          фИО: {
            __caption__: 'ФИО'
          }
        }
      },
      ТаблЧастьГОL: {
        код: {
          __caption__: 'Код'
        },
        сотрудники: {
          __caption__: 'ФИО',
          фИО: {
            __caption__: 'ФИО'
          }
        },
        колКалДней: {
          __caption__: 'Кол кал дней'
        },
        датаЗап: {
          __caption__: 'Дата зап'
        },
        датаФакт: {
          __caption__: 'Дата факт'
        },
        основание: {
          __caption__: 'Основание'
        },
        перенос: {
          __caption__: 'Перенос'
        },
        примечание: {
          __caption__: 'Примечание'
        }
      }
    },
    validations: {
      датаЗап: {
        __caption__: 'Дата зап'
      },
      датаФакт: {
        __caption__: 'Дата факт'
      },
      код: {
        __caption__: 'Код'
      },
      колКалДней: {
        __caption__: 'Кол кал дней'
      },
      основание: {
        __caption__: 'Основание'
      },
      перенос: {
        __caption__: 'Перенос'
      },
      примечание: {
        __caption__: 'Примечание'
      },
      сотрудники: {
        __caption__: 'Сотрудники'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТаблЧастьСШРE: {
        код: {
          __caption__: 'Код'
        },
        наименование: {
          __caption__: 'Наименование'
        },
        количествоШЕ: {
          __caption__: 'Количество ШЕ'
        },
        тарифнаяСтавка: {
          __caption__: 'Тарифная ставка'
        },
        надбавки: {
          __caption__: 'Надбавки'
        },
        всего: {
          __caption__: 'Всего'
        },
        примечание: {
          __caption__: 'Примечание'
        },
        всегоКолШЕ: {
          __caption__: 'Всего кол ШЕ'
        },
        всегоТС: {
          __caption__: 'Всего ТС'
        },
        всегоНадбавки: {
          __caption__: 'Всего надбавки'
        },
        итогоВсего: {
          __caption__: 'Итого всего'
        },
        должность: {
          __caption__: 'Должность',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      },
      ТаблЧастьСШРL: {
        код: {
          __caption__: 'Код'
        },
        наименование: {
          __caption__: 'Наименование'
        },
        количествоШЕ: {
          __caption__: 'Количество ШЕ'
        },
        тарифнаяСтавка: {
          __caption__: 'Тарифная ставка'
        },
        надбавки: {
          __caption__: 'Надбавки'
        },
        всего: {
          __caption__: 'Всего'
        },
        примечание: {
          __caption__: 'Примечание'
        },
        всегоКолШЕ: {
          __caption__: 'Всего кол ШЕ'
        },
        всегоТС: {
          __caption__: 'Всего ТС'
        },
        всегоНадбавки: {
          __caption__: 'Всего надбавки'
        },
        итогоВсего: {
          __caption__: 'Итого всего'
        },
        должность: {
          __caption__: 'Наименование',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    validations: {
      всего: {
        __caption__: 'Всего'
      },
      всегоКолШЕ: {
        __caption__: 'Всего кол ШЕ'
      },
      всегоНадбавки: {
        __caption__: 'Всего надбавки'
      },
      всегоТС: {
        __caption__: 'Всего ТС'
      },
      итогоВсего: {
        __caption__: 'Итого всего'
      },
      код: {
        __caption__: 'Код'
      },
      количествоШЕ: {
        __caption__: 'Количество ШЕ'
      },
      надбавки: {
        __caption__: 'Надбавки'
      },
      наименование: {
        __caption__: 'Наименование'
      },
      примечание: {
        __caption__: 'Примечание'
      },
      тарифнаяСтавка: {
        __caption__: 'Тарифная ставка'
      },
      должность: {
        __caption__: 'Должность'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТаблЧастьСотрудE: {
        наимОбуч: {
          __caption__: 'Наим обуч'
        },
        квалификация: {
          __caption__: 'Квалификация'
        },
        наимДок: {
          __caption__: 'Наим док'
        },
        cерия: {
          __caption__: 'Cерия'
        },
        номер: {
          __caption__: 'Номер'
        },
        годОкончания: {
          __caption__: 'Год окончания'
        }
      },
      ТаблЧастьСотрудL: {
        наимОбуч: {
          __caption__: 'Наим обуч'
        },
        квалификация: {
          __caption__: 'Квалификация'
        },
        наимДок: {
          __caption__: 'Наим док'
        },
        cерия: {
          __caption__: 'Cерия'
        },
        номер: {
          __caption__: 'Номер'
        },
        годОкончания: {
          __caption__: 'Год окончания'
        }
      }
    },
    validations: {
      cерия: {
        __caption__: 'Cерия'
      },
      годОкончания: {
        __caption__: 'Год окончания'
      },
      квалификация: {
        __caption__: 'Квалификация'
      },
      наимДок: {
        __caption__: 'Наим док'
      },
      наимОбуч: {
        __caption__: 'Наим обуч'
      },
      номер: {
        __caption__: 'Номер'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТаблЧастьТУE: {
        код: {
          __caption__: 'Код'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        явкаНеявка: {
          __caption__: 'Явка неявка'
        },
        колЯвокПМес: {
          __caption__: 'Кол явок п мес'
        },
        колЯвокМес: {
          __caption__: 'Кол явок мес'
        },
        часыЗаПМес: {
          __caption__: 'Часы за п мес'
        },
        часыЗаМесяц: {
          __caption__: 'Часы за месяц'
        },
        кодВидаОплаты: {
          __caption__: 'Код вида оплаты'
        },
        корресСчет: {
          __caption__: 'Коррес счет'
        },
        дниЧасы: {
          __caption__: 'Дни часы'
        },
        колНеявок: {
          __caption__: 'Кол неявок'
        },
        изНихПоПричинам: {
          __caption__: 'Из них по причинам'
        },
        колВыхПразд: {
          __caption__: 'Кол вых празд'
        }
      },
      ТаблЧастьТУL: {
        код: {
          __caption__: 'Код'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        явкаНеявка: {
          __caption__: 'Явка неявка'
        },
        колЯвокПМес: {
          __caption__: 'Кол явок п мес'
        },
        колЯвокМес: {
          __caption__: 'Кол явок мес'
        },
        часыЗаПМес: {
          __caption__: 'Часы за п мес'
        },
        часыЗаМесяц: {
          __caption__: 'Часы за месяц'
        },
        кодВидаОплаты: {
          __caption__: 'Код вида оплаты'
        },
        корресСчет: {
          __caption__: 'Коррес счет'
        },
        дниЧасы: {
          __caption__: 'Дни часы'
        },
        колНеявок: {
          __caption__: 'Кол неявок'
        },
        изНихПоПричинам: {
          __caption__: 'Из них по причинам'
        },
        колВыхПразд: {
          __caption__: 'Кол вых празд'
        }
      }
    },
    validations: {
      датаДк: {
        __caption__: 'Дата дк'
      },
      дниЧасы: {
        __caption__: 'Дни часы'
      },
      изНихПоПричинам: {
        __caption__: 'Из них по причинам'
      },
      код: {
        __caption__: 'Код'
      },
      кодВидаОплаты: {
        __caption__: 'Код вида оплаты'
      },
      колВыхПразд: {
        __caption__: 'Кол вых празд'
      },
      колНеявок: {
        __caption__: 'Кол неявок'
      },
      колЯвокМес: {
        __caption__: 'Кол явок мес'
      },
      колЯвокПМес: {
        __caption__: 'Кол явок п мес'
      },
      корресСчет: {
        __caption__: 'Коррес счет'
      },
      часыЗаМесяц: {
        __caption__: 'Часы за месяц'
      },
      часыЗаПМес: {
        __caption__: 'Часы за п мес'
      },
      явкаНеявка: {
        __caption__: 'Явка неявка'
      }
    }
  };
});
define('ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      УвольнениеE: {
        датаУвольнения: {
          __caption__: 'Дата увольнения'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        основание: {
          __caption__: 'Основание'
        },
        ответственный: {
          __caption__: 'Ответственный'
        },
        сотрудники: {
          __caption__: 'Сотрудники',
          фИО: {
            __caption__: 'ФИО'
          }
        },
        отделКадров: {
          __caption__: 'Отдел кадров'
        }
      },
      УвольнениеL: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        датаУвольнения: {
          __caption__: 'Дата увольнения'
        },
        основание: {
          __caption__: 'Основание'
        },
        ответственный: {
          __caption__: 'Ответственный'
        },
        сотрудники: {
          __caption__: 'ФИО',
          фИО: {
            __caption__: 'ФИО'
          }
        }
      }
    },
    validations: {
      датаДк: {
        __caption__: 'Дата дк'
      },
      датаУвольнения: {
        __caption__: 'Дата увольнения'
      },
      основание: {
        __caption__: 'Основание'
      },
      ответственный: {
        __caption__: 'Ответственный'
      },
      отделКадров: {
        __caption__: 'Отдел кадров'
      },
      сотрудники: {
        __caption__: 'Сотрудники'
      }
    }
  };
});
define('ember-app/locales/en/translations', ['exports', 'ember-flexberry/locales/en/translations', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-l', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-e', 'ember-app/locales/en/forms/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-e', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443', 'ember-app/locales/en/models/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435'], function (exports, _translations, _iISOtdelKadrov2L, _iISOtdelKadrov2L2, _iISOtdelKadrov2L3, _iISOtdelKadrov2L4, _iISOtdelKadrov2L5, _iISOtdelKadrov2L6, _iISOtdelKadrov2L7, _iISOtdelKadrov2L8, _iISOtdelKadrov2L9, _iISOtdelKadrov2L10, _iISOtdelKadrov2L11, _iISOtdelKadrov2L12, _iISOtdelKadrov2E, _iISOtdelKadrov2E2, _iISOtdelKadrov2E3, _iISOtdelKadrov2E4, _iISOtdelKadrov2E5, _iISOtdelKadrov2E6, _iISOtdelKadrov2E7, _iISOtdelKadrov2E8, _iISOtdelKadrov2E9, _iISOtdelKadrov2E10, _iISOtdelKadrov2E11, _iISOtdelKadrov2E12, _iISOtdelKadrov, _iISOtdelKadrov2, _iISOtdelKadrov3, _iISOtdelKadrov4, _iISOtdelKadrov5, _iISOtdelKadrov6, _iISOtdelKadrov7, _iISOtdelKadrov8, _iISOtdelKadrov9, _iISOtdelKadrov10, _iISOtdelKadrov11, _iISOtdelKadrov12) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var translations = {};
  Ember.$.extend(true, translations, _translations.default);

  Ember.$.extend(true, translations, {
    models: {
      'i-i-s-otdel-kadrov-2-график-отпуск': _iISOtdelKadrov.default,
      'i-i-s-otdel-kadrov-2-должность': _iISOtdelKadrov2.default,
      'i-i-s-otdel-kadrov-2-отдел-кадров': _iISOtdelKadrov3.default,
      'i-i-s-otdel-kadrov-2-приказ-о-приеме': _iISOtdelKadrov4.default,
      'i-i-s-otdel-kadrov-2-сост-штат-рас': _iISOtdelKadrov5.default,
      'i-i-s-otdel-kadrov-2-сотрудники': _iISOtdelKadrov6.default,
      'i-i-s-otdel-kadrov-2-таб-уч-р-в': _iISOtdelKadrov7.default,
      'i-i-s-otdel-kadrov-2-табл-часть-г-о': _iISOtdelKadrov8.default,
      'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р': _iISOtdelKadrov9.default,
      'i-i-s-otdel-kadrov-2-табл-часть-сотруд': _iISOtdelKadrov10.default,
      'i-i-s-otdel-kadrov-2-табл-часть-т-у': _iISOtdelKadrov11.default,
      'i-i-s-otdel-kadrov-2-увольнение': _iISOtdelKadrov12.default
    },

    'application-name': 'Otdel_kadrov_2',

    forms: {
      loading: {
        'spinner-caption': 'Loading stuff, please wait for a moment...'
      },
      index: {
        greeting: 'Welcome to ember-flexberry test stand!'
      },

      application: {
        header: {
          menu: {
            'sitemap-button': {
              title: 'Menu'
            },
            'user-settings-service-checkbox': {
              caption: 'Use service to save user settings'
            },
            'show-menu': {
              caption: 'Show menu'
            },
            'hide-menu': {
              caption: 'Hide menu'
            },
            'language-dropdown': {
              caption: 'Application language',
              placeholder: 'Choose language'
            }
          },
          login: {
            caption: 'Login'
          },
          logout: {
            caption: 'Logout'
          }
        },

        footer: {
          'application-name': 'Otdel_kadrov_2',
          'application-version': {
            caption: 'Addon version {{version}}',
            title: 'It is version of ember-flexberry addon, which uses in this dummy application ' + '(npm version + commit sha). ' + 'Click to open commit on GitHub.'
          }
        },

        sitemap: {
          'application-name': {
            caption: 'Otdel_kadrov_2',
            title: 'Otdel_kadrov_2'
          },
          'application-version': {
            caption: 'Addon version {{version}}',
            title: 'It is version of ember-flexberry addon, which uses in this dummy application ' + '(npm version + commit sha). ' + 'Click to open commit on GitHub.'
          },
          index: {
            caption: 'Home',
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
        'save-success-message-caption': 'Save operation succeed',
        'save-success-message': 'Object saved',
        'save-error-message-caption': 'Save operation failed',
        'delete-success-message-caption': 'Delete operation succeed',
        'delete-success-message': 'Object deleted',
        'delete-error-message-caption': 'Delete operation failed'
      },
      'i-i-s-otdel-kadrov-2-график-отпуск-l': _iISOtdelKadrov2L.default,
      'i-i-s-otdel-kadrov-2-должность-l': _iISOtdelKadrov2L2.default,
      'i-i-s-otdel-kadrov-2-отдел-кадров-l': _iISOtdelKadrov2L3.default,
      'i-i-s-otdel-kadrov-2-приказ-о-приеме-l': _iISOtdelKadrov2L4.default,
      'i-i-s-otdel-kadrov-2-сост-штат-рас-l': _iISOtdelKadrov2L5.default,
      'i-i-s-otdel-kadrov-2-сотрудники-l': _iISOtdelKadrov2L6.default,
      'i-i-s-otdel-kadrov-2-таб-уч-р-в-l': _iISOtdelKadrov2L7.default,
      'i-i-s-otdel-kadrov-2-табл-часть-г-о-l': _iISOtdelKadrov2L8.default,
      'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l': _iISOtdelKadrov2L9.default,
      'i-i-s-otdel-kadrov-2-табл-часть-сотруд-l': _iISOtdelKadrov2L10.default,
      'i-i-s-otdel-kadrov-2-табл-часть-т-у-l': _iISOtdelKadrov2L11.default,
      'i-i-s-otdel-kadrov-2-увольнение-l': _iISOtdelKadrov2L12.default,
      'i-i-s-otdel-kadrov-2-график-отпуск-e': _iISOtdelKadrov2E.default,
      'i-i-s-otdel-kadrov-2-должность-e': _iISOtdelKadrov2E2.default,
      'i-i-s-otdel-kadrov-2-отдел-кадров-e': _iISOtdelKadrov2E3.default,
      'i-i-s-otdel-kadrov-2-приказ-о-приеме-e': _iISOtdelKadrov2E4.default,
      'i-i-s-otdel-kadrov-2-сост-штат-рас-e': _iISOtdelKadrov2E5.default,
      'i-i-s-otdel-kadrov-2-сотрудники-e': _iISOtdelKadrov2E6.default,
      'i-i-s-otdel-kadrov-2-таб-уч-р-в-e': _iISOtdelKadrov2E7.default,
      'i-i-s-otdel-kadrov-2-табл-часть-г-о-e': _iISOtdelKadrov2E8.default,
      'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e': _iISOtdelKadrov2E9.default,
      'i-i-s-otdel-kadrov-2-табл-часть-сотруд-e': _iISOtdelKadrov2E10.default,
      'i-i-s-otdel-kadrov-2-табл-часть-т-у-e': _iISOtdelKadrov2E11.default,
      'i-i-s-otdel-kadrov-2-увольнение-e': _iISOtdelKadrov2E12.default
    }

  });

  exports.default = translations;
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'График отпуск',
    'датаДк-caption': 'Дата дк',
    'период-caption': 'Период',
    'руководительОр-caption': 'Руководитель ор',
    'руководительКО-caption': 'Руководитель КО',
    'отделКадров-caption': 'Отдел кадров'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'График отпуск'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Должность',
    'наименование-caption': 'Наименование',
    'iDДолжности-caption': 'I d должности'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Должность'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Отдел кадров',
    'сотрудники-caption': 'Сотрудники'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Отдел кадров'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Приказ о приеме',
    'подразделение-caption': 'Подразделение',
    'оклад-caption': 'Оклад',
    'фИО-caption': 'ФИО',
    'графикРаботы-caption': 'График работы',
    'датаДк-caption': 'Дата дк',
    'ответсвенный-caption': 'Ответсвенный',
    'срокЗаключения-caption': 'Срок заключения',
    'датаПриема-caption': 'Дата приема',
    'занятость-caption': 'Занятость',
    'должность-caption': 'Должность',
    'отделКадров-caption': 'Отдел кадров'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Приказ о приеме'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сост штат рас',
    'период-caption': 'Период',
    'руководительКО-caption': 'Руководитель КО',
    'датаДк-caption': 'Дата дк',
    'главБух-caption': 'Глав бух',
    'отделКадров-caption': 'Отдел кадров'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сост штат рас'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сотрудники',
    'фИО-caption': 'ФИО',
    'датаРождения-caption': 'Дата рождения',
    'iDСотрудника-caption': 'I d сотрудника',
    'пол-caption': 'Пол',
    'подразделение-caption': 'Подразделение',
    'знаниеЯзыков-caption': 'Знание языков',
    'образование-caption': 'Образование',
    'гражданство-caption': 'Гражданство',
    'должность-caption': 'Должность'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Сотрудники'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Таб уч РВ',
    'датаДк-caption': 'Дата дк',
    'руководитель-caption': 'Руководитель',
    'период-caption': 'Период',
    'исполнитель-caption': 'Исполнитель',
    'отделКадров-caption': 'Отдел кадров'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Таб уч РВ'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть ГО',
    'код-caption': 'Код',
    'колКалДней-caption': 'Кол кал дней',
    'датаЗап-caption': 'Дата зап',
    'датаФакт-caption': 'Дата факт',
    'основание-caption': 'Основание',
    'перенос-caption': 'Перенос',
    'примечание-caption': 'Примечание',
    'сотрудники-caption': 'Сотрудники'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть ГО'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть СШР',
    'код-caption': 'Код',
    'наименование-caption': 'Наименование',
    'количествоШЕ-caption': 'Количество ШЕ',
    'тарифнаяСтавка-caption': 'Тарифная ставка',
    'надбавки-caption': 'Надбавки',
    'всего-caption': 'Всего',
    'примечание-caption': 'Примечание',
    'всегоКолШЕ-caption': 'Всего кол ШЕ',
    'всегоТС-caption': 'Всего ТС',
    'всегоНадбавки-caption': 'Всего надбавки',
    'итогоВсего-caption': 'Итого всего',
    'должность-caption': 'Должность'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть СШР'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть сотруд',
    'наимОбуч-caption': 'Наим обуч',
    'квалификация-caption': 'Квалификация',
    'наимДок-caption': 'Наим док',
    'cерия-caption': 'Cерия',
    'номер-caption': 'Номер',
    'годОкончания-caption': 'Год окончания'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть сотруд'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть ТУ',
    'код-caption': 'Код',
    'датаДк-caption': 'Дата дк',
    'явкаНеявка-caption': 'Явка неявка',
    'колЯвокПМес-caption': 'Кол явок п мес',
    'колЯвокМес-caption': 'Кол явок мес',
    'часыЗаПМес-caption': 'Часы за п мес',
    'часыЗаМесяц-caption': 'Часы за месяц',
    'кодВидаОплаты-caption': 'Код вида оплаты',
    'корресСчет-caption': 'Коррес счет',
    'дниЧасы-caption': 'Дни часы',
    'колНеявок-caption': 'Кол неявок',
    'изНихПоПричинам-caption': 'Из них по причинам',
    'колВыхПразд-caption': 'Кол вых празд'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Табл часть ТУ'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-e', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Увольнение',
    'датаУвольнения-caption': 'Дата увольнения',
    'датаДк-caption': 'Дата дк',
    'основание-caption': 'Основание',
    'ответственный-caption': 'Ответственный',
    'сотрудники-caption': 'Сотрудники',
    'отделКадров-caption': 'Отдел кадров'
  };
});
define('ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-l', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    caption: 'Увольнение'
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ГрафикОтпускE: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        период: {
          __caption__: 'Период'
        },
        руководительОр: {
          __caption__: 'Руководитель ор'
        },
        руководительКО: {
          __caption__: 'Руководитель КО'
        },
        отделКадров: {
          __caption__: 'Отдел кадров'
        }
      },
      ГрафикОтпускL: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        период: {
          __caption__: 'Период'
        },
        руководительОр: {
          __caption__: 'Руководитель ор'
        },
        руководительКО: {
          __caption__: 'Руководитель КО'
        }
      }
    },
    validations: {
      датаДк: {
        __caption__: 'Дата дк'
      },
      период: {
        __caption__: 'Период'
      },
      руководительКО: {
        __caption__: 'Руководитель КО'
      },
      руководительОр: {
        __caption__: 'Руководитель ор'
      },
      отделКадров: {
        __caption__: 'Отдел кадров'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ДолжностьE: {
        наименование: {
          __caption__: 'Наименование'
        },
        iDДолжности: {
          __caption__: 'I d должности'
        }
      },
      ДолжностьL: {
        наименование: {
          __caption__: 'Наименование'
        },
        iDДолжности: {
          __caption__: 'I d должности'
        }
      }
    },
    validations: {
      iDДолжности: {
        __caption__: 'I d должности'
      },
      наименование: {
        __caption__: 'Наименование'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ОтделКадровE: {
        сотрудники: {
          __caption__: 'Сотрудники',
          фИО: {
            __caption__: 'ФИО'
          }
        }
      },
      ОтделКадровL: {
        сотрудники: {
          __caption__: 'ФИО',
          фИО: {
            __caption__: 'ФИО'
          }
        }
      }
    },
    validations: {
      сотрудники: {
        __caption__: 'Сотрудники'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ПриказОПриемеE: {
        подразделение: {
          __caption__: 'Подразделение'
        },
        оклад: {
          __caption__: 'Оклад'
        },
        фИО: {
          __caption__: 'ФИО'
        },
        графикРаботы: {
          __caption__: 'График работы'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        ответсвенный: {
          __caption__: 'Ответсвенный'
        },
        срокЗаключения: {
          __caption__: 'Срок заключения'
        },
        датаПриема: {
          __caption__: 'Дата приема'
        },
        занятость: {
          __caption__: 'Занятость'
        },
        должность: {
          __caption__: 'Должность',
          наименование: {
            __caption__: 'Наименование'
          }
        },
        отделКадров: {
          __caption__: 'Отдел кадров'
        }
      },
      ПриказОПриемеL: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        подразделение: {
          __caption__: 'Подразделение'
        },
        оклад: {
          __caption__: 'Оклад'
        },
        фИО: {
          __caption__: 'ФИО'
        },
        графикРаботы: {
          __caption__: 'График работы'
        },
        ответсвенный: {
          __caption__: 'Ответсвенный'
        },
        срокЗаключения: {
          __caption__: 'Срок заключения'
        },
        датаПриема: {
          __caption__: 'Дата приема'
        },
        занятость: {
          __caption__: 'Занятость'
        },
        должность: {
          __caption__: 'Наименование',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    validations: {
      графикРаботы: {
        __caption__: 'График работы'
      },
      датаДк: {
        __caption__: 'Дата дк'
      },
      датаПриема: {
        __caption__: 'Дата приема'
      },
      занятость: {
        __caption__: 'Занятость'
      },
      оклад: {
        __caption__: 'Оклад'
      },
      ответсвенный: {
        __caption__: 'Ответсвенный'
      },
      подразделение: {
        __caption__: 'Подразделение'
      },
      срокЗаключения: {
        __caption__: 'Срок заключения'
      },
      фИО: {
        __caption__: 'ФИО'
      },
      должность: {
        __caption__: 'Должность'
      },
      отделКадров: {
        __caption__: 'Отдел кадров'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      СостШтатРасE: {
        период: {
          __caption__: 'Период'
        },
        руководительКО: {
          __caption__: 'Руководитель КО'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        главБух: {
          __caption__: 'Глав бух'
        },
        отделКадров: {
          __caption__: 'Отдел кадров'
        }
      },
      СостШтатРасL: {
        период: {
          __caption__: 'Период'
        },
        руководительКО: {
          __caption__: 'Руководитель КО'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        главБух: {
          __caption__: 'Глав бух'
        }
      }
    },
    validations: {
      главБух: {
        __caption__: 'Глав бух'
      },
      датаДк: {
        __caption__: 'Дата дк'
      },
      период: {
        __caption__: 'Период'
      },
      руководительКО: {
        __caption__: 'Руководитель КО'
      },
      отделКадров: {
        __caption__: 'Отдел кадров'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      СотрудникиE: {
        фИО: {
          __caption__: 'ФИО'
        },
        датаРождения: {
          __caption__: 'Дата рождения'
        },
        iDСотрудника: {
          __caption__: 'I d сотрудника'
        },
        пол: {
          __caption__: 'Пол'
        },
        подразделение: {
          __caption__: 'Подразделение'
        },
        знаниеЯзыков: {
          __caption__: 'Знание языков'
        },
        образование: {
          __caption__: 'Образование'
        },
        гражданство: {
          __caption__: 'Гражданство'
        },
        должность: {
          __caption__: 'Должность',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      },
      СотрудникиL: {
        фИО: {
          __caption__: 'ФИО'
        },
        датаРождения: {
          __caption__: 'Дата рождения'
        },
        iDСотрудника: {
          __caption__: 'I d сотрудника'
        },
        пол: {
          __caption__: 'Пол'
        },
        подразделение: {
          __caption__: 'Подразделение'
        },
        знаниеЯзыков: {
          __caption__: 'Знание языков'
        },
        образование: {
          __caption__: 'Образование'
        },
        гражданство: {
          __caption__: 'Гражданство'
        },
        должность: {
          __caption__: 'Наименование',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    validations: {
      iDСотрудника: {
        __caption__: 'I d сотрудника'
      },
      гражданство: {
        __caption__: 'Гражданство'
      },
      датаРождения: {
        __caption__: 'Дата рождения'
      },
      знаниеЯзыков: {
        __caption__: 'Знание языков'
      },
      образование: {
        __caption__: 'Образование'
      },
      подразделение: {
        __caption__: 'Подразделение'
      },
      пол: {
        __caption__: 'Пол'
      },
      фИО: {
        __caption__: 'ФИО'
      },
      должность: {
        __caption__: 'Должность'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТабУчРВE: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        руководитель: {
          __caption__: 'Руководитель'
        },
        период: {
          __caption__: 'Период'
        },
        исполнитель: {
          __caption__: 'Исполнитель'
        },
        отделКадров: {
          __caption__: 'Отдел кадров'
        }
      },
      ТабУчРВL: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        руководитель: {
          __caption__: 'Руководитель'
        },
        период: {
          __caption__: 'Период'
        },
        исполнитель: {
          __caption__: 'Исполнитель'
        }
      }
    },
    validations: {
      датаДк: {
        __caption__: 'Дата дк'
      },
      исполнитель: {
        __caption__: 'Исполнитель'
      },
      период: {
        __caption__: 'Период'
      },
      руководитель: {
        __caption__: 'Руководитель'
      },
      отделКадров: {
        __caption__: 'Отдел кадров'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТаблЧастьГОE: {
        код: {
          __caption__: 'Код'
        },
        колКалДней: {
          __caption__: 'Кол кал дней'
        },
        датаЗап: {
          __caption__: 'Дата зап'
        },
        датаФакт: {
          __caption__: 'Дата факт'
        },
        основание: {
          __caption__: 'Основание'
        },
        перенос: {
          __caption__: 'Перенос'
        },
        примечание: {
          __caption__: 'Примечание'
        },
        сотрудники: {
          __caption__: 'Сотрудники',
          фИО: {
            __caption__: 'ФИО'
          }
        }
      },
      ТаблЧастьГОL: {
        код: {
          __caption__: 'Код'
        },
        сотрудники: {
          __caption__: 'ФИО',
          фИО: {
            __caption__: 'ФИО'
          }
        },
        колКалДней: {
          __caption__: 'Кол кал дней'
        },
        датаЗап: {
          __caption__: 'Дата зап'
        },
        датаФакт: {
          __caption__: 'Дата факт'
        },
        основание: {
          __caption__: 'Основание'
        },
        перенос: {
          __caption__: 'Перенос'
        },
        примечание: {
          __caption__: 'Примечание'
        }
      }
    },
    validations: {
      датаЗап: {
        __caption__: 'Дата зап'
      },
      датаФакт: {
        __caption__: 'Дата факт'
      },
      код: {
        __caption__: 'Код'
      },
      колКалДней: {
        __caption__: 'Кол кал дней'
      },
      основание: {
        __caption__: 'Основание'
      },
      перенос: {
        __caption__: 'Перенос'
      },
      примечание: {
        __caption__: 'Примечание'
      },
      сотрудники: {
        __caption__: 'Сотрудники'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТаблЧастьСШРE: {
        код: {
          __caption__: 'Код'
        },
        наименование: {
          __caption__: 'Наименование'
        },
        количествоШЕ: {
          __caption__: 'Количество ШЕ'
        },
        тарифнаяСтавка: {
          __caption__: 'Тарифная ставка'
        },
        надбавки: {
          __caption__: 'Надбавки'
        },
        всего: {
          __caption__: 'Всего'
        },
        примечание: {
          __caption__: 'Примечание'
        },
        всегоКолШЕ: {
          __caption__: 'Всего кол ШЕ'
        },
        всегоТС: {
          __caption__: 'Всего ТС'
        },
        всегоНадбавки: {
          __caption__: 'Всего надбавки'
        },
        итогоВсего: {
          __caption__: 'Итого всего'
        },
        должность: {
          __caption__: 'Должность',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      },
      ТаблЧастьСШРL: {
        код: {
          __caption__: 'Код'
        },
        наименование: {
          __caption__: 'Наименование'
        },
        количествоШЕ: {
          __caption__: 'Количество ШЕ'
        },
        тарифнаяСтавка: {
          __caption__: 'Тарифная ставка'
        },
        надбавки: {
          __caption__: 'Надбавки'
        },
        всего: {
          __caption__: 'Всего'
        },
        примечание: {
          __caption__: 'Примечание'
        },
        всегоКолШЕ: {
          __caption__: 'Всего кол ШЕ'
        },
        всегоТС: {
          __caption__: 'Всего ТС'
        },
        всегоНадбавки: {
          __caption__: 'Всего надбавки'
        },
        итогоВсего: {
          __caption__: 'Итого всего'
        },
        должность: {
          __caption__: 'Наименование',
          наименование: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    validations: {
      всего: {
        __caption__: 'Всего'
      },
      всегоКолШЕ: {
        __caption__: 'Всего кол ШЕ'
      },
      всегоНадбавки: {
        __caption__: 'Всего надбавки'
      },
      всегоТС: {
        __caption__: 'Всего ТС'
      },
      итогоВсего: {
        __caption__: 'Итого всего'
      },
      код: {
        __caption__: 'Код'
      },
      количествоШЕ: {
        __caption__: 'Количество ШЕ'
      },
      надбавки: {
        __caption__: 'Надбавки'
      },
      наименование: {
        __caption__: 'Наименование'
      },
      примечание: {
        __caption__: 'Примечание'
      },
      тарифнаяСтавка: {
        __caption__: 'Тарифная ставка'
      },
      должность: {
        __caption__: 'Должность'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТаблЧастьСотрудE: {
        наимОбуч: {
          __caption__: 'Наим обуч'
        },
        квалификация: {
          __caption__: 'Квалификация'
        },
        наимДок: {
          __caption__: 'Наим док'
        },
        cерия: {
          __caption__: 'Cерия'
        },
        номер: {
          __caption__: 'Номер'
        },
        годОкончания: {
          __caption__: 'Год окончания'
        }
      },
      ТаблЧастьСотрудL: {
        наимОбуч: {
          __caption__: 'Наим обуч'
        },
        квалификация: {
          __caption__: 'Квалификация'
        },
        наимДок: {
          __caption__: 'Наим док'
        },
        cерия: {
          __caption__: 'Cерия'
        },
        номер: {
          __caption__: 'Номер'
        },
        годОкончания: {
          __caption__: 'Год окончания'
        }
      }
    },
    validations: {
      cерия: {
        __caption__: 'Cерия'
      },
      годОкончания: {
        __caption__: 'Год окончания'
      },
      квалификация: {
        __caption__: 'Квалификация'
      },
      наимДок: {
        __caption__: 'Наим док'
      },
      наимОбуч: {
        __caption__: 'Наим обуч'
      },
      номер: {
        __caption__: 'Номер'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      ТаблЧастьТУE: {
        код: {
          __caption__: 'Код'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        явкаНеявка: {
          __caption__: 'Явка неявка'
        },
        колЯвокПМес: {
          __caption__: 'Кол явок п мес'
        },
        колЯвокМес: {
          __caption__: 'Кол явок мес'
        },
        часыЗаПМес: {
          __caption__: 'Часы за п мес'
        },
        часыЗаМесяц: {
          __caption__: 'Часы за месяц'
        },
        кодВидаОплаты: {
          __caption__: 'Код вида оплаты'
        },
        корресСчет: {
          __caption__: 'Коррес счет'
        },
        дниЧасы: {
          __caption__: 'Дни часы'
        },
        колНеявок: {
          __caption__: 'Кол неявок'
        },
        изНихПоПричинам: {
          __caption__: 'Из них по причинам'
        },
        колВыхПразд: {
          __caption__: 'Кол вых празд'
        }
      },
      ТаблЧастьТУL: {
        код: {
          __caption__: 'Код'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        явкаНеявка: {
          __caption__: 'Явка неявка'
        },
        колЯвокПМес: {
          __caption__: 'Кол явок п мес'
        },
        колЯвокМес: {
          __caption__: 'Кол явок мес'
        },
        часыЗаПМес: {
          __caption__: 'Часы за п мес'
        },
        часыЗаМесяц: {
          __caption__: 'Часы за месяц'
        },
        кодВидаОплаты: {
          __caption__: 'Код вида оплаты'
        },
        корресСчет: {
          __caption__: 'Коррес счет'
        },
        дниЧасы: {
          __caption__: 'Дни часы'
        },
        колНеявок: {
          __caption__: 'Кол неявок'
        },
        изНихПоПричинам: {
          __caption__: 'Из них по причинам'
        },
        колВыхПразд: {
          __caption__: 'Кол вых празд'
        }
      }
    },
    validations: {
      датаДк: {
        __caption__: 'Дата дк'
      },
      дниЧасы: {
        __caption__: 'Дни часы'
      },
      изНихПоПричинам: {
        __caption__: 'Из них по причинам'
      },
      код: {
        __caption__: 'Код'
      },
      кодВидаОплаты: {
        __caption__: 'Код вида оплаты'
      },
      колВыхПразд: {
        __caption__: 'Кол вых празд'
      },
      колНеявок: {
        __caption__: 'Кол неявок'
      },
      колЯвокМес: {
        __caption__: 'Кол явок мес'
      },
      колЯвокПМес: {
        __caption__: 'Кол явок п мес'
      },
      корресСчет: {
        __caption__: 'Коррес счет'
      },
      часыЗаМесяц: {
        __caption__: 'Часы за месяц'
      },
      часыЗаПМес: {
        __caption__: 'Часы за п мес'
      },
      явкаНеявка: {
        __caption__: 'Явка неявка'
      }
    }
  };
});
define('ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    projections: {
      УвольнениеE: {
        датаУвольнения: {
          __caption__: 'Дата увольнения'
        },
        датаДк: {
          __caption__: 'Дата дк'
        },
        основание: {
          __caption__: 'Основание'
        },
        ответственный: {
          __caption__: 'Ответственный'
        },
        сотрудники: {
          __caption__: 'Сотрудники',
          фИО: {
            __caption__: 'ФИО'
          }
        },
        отделКадров: {
          __caption__: 'Отдел кадров'
        }
      },
      УвольнениеL: {
        датаДк: {
          __caption__: 'Дата дк'
        },
        датаУвольнения: {
          __caption__: 'Дата увольнения'
        },
        основание: {
          __caption__: 'Основание'
        },
        ответственный: {
          __caption__: 'Ответственный'
        },
        сотрудники: {
          __caption__: 'ФИО',
          фИО: {
            __caption__: 'ФИО'
          }
        }
      }
    },
    validations: {
      датаДк: {
        __caption__: 'Дата дк'
      },
      датаУвольнения: {
        __caption__: 'Дата увольнения'
      },
      основание: {
        __caption__: 'Основание'
      },
      ответственный: {
        __caption__: 'Ответственный'
      },
      отделКадров: {
        __caption__: 'Отдел кадров'
      },
      сотрудники: {
        __caption__: 'Сотрудники'
      }
    }
  };
});
define('ember-app/locales/ru/translations', ['exports', 'ember-flexberry/locales/ru/translations', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-l', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-e', 'ember-app/locales/ru/forms/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-e', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443', 'ember-app/locales/ru/models/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435'], function (exports, _translations, _iISOtdelKadrov2L, _iISOtdelKadrov2L2, _iISOtdelKadrov2L3, _iISOtdelKadrov2L4, _iISOtdelKadrov2L5, _iISOtdelKadrov2L6, _iISOtdelKadrov2L7, _iISOtdelKadrov2L8, _iISOtdelKadrov2L9, _iISOtdelKadrov2L10, _iISOtdelKadrov2L11, _iISOtdelKadrov2L12, _iISOtdelKadrov2E, _iISOtdelKadrov2E2, _iISOtdelKadrov2E3, _iISOtdelKadrov2E4, _iISOtdelKadrov2E5, _iISOtdelKadrov2E6, _iISOtdelKadrov2E7, _iISOtdelKadrov2E8, _iISOtdelKadrov2E9, _iISOtdelKadrov2E10, _iISOtdelKadrov2E11, _iISOtdelKadrov2E12, _iISOtdelKadrov, _iISOtdelKadrov2, _iISOtdelKadrov3, _iISOtdelKadrov4, _iISOtdelKadrov5, _iISOtdelKadrov6, _iISOtdelKadrov7, _iISOtdelKadrov8, _iISOtdelKadrov9, _iISOtdelKadrov10, _iISOtdelKadrov11, _iISOtdelKadrov12) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var translations = {};
  Ember.$.extend(true, translations, _translations.default);

  Ember.$.extend(true, translations, {
    models: {
      'i-i-s-otdel-kadrov-2-график-отпуск': _iISOtdelKadrov.default,
      'i-i-s-otdel-kadrov-2-должность': _iISOtdelKadrov2.default,
      'i-i-s-otdel-kadrov-2-отдел-кадров': _iISOtdelKadrov3.default,
      'i-i-s-otdel-kadrov-2-приказ-о-приеме': _iISOtdelKadrov4.default,
      'i-i-s-otdel-kadrov-2-сост-штат-рас': _iISOtdelKadrov5.default,
      'i-i-s-otdel-kadrov-2-сотрудники': _iISOtdelKadrov6.default,
      'i-i-s-otdel-kadrov-2-таб-уч-р-в': _iISOtdelKadrov7.default,
      'i-i-s-otdel-kadrov-2-табл-часть-г-о': _iISOtdelKadrov8.default,
      'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р': _iISOtdelKadrov9.default,
      'i-i-s-otdel-kadrov-2-табл-часть-сотруд': _iISOtdelKadrov10.default,
      'i-i-s-otdel-kadrov-2-табл-часть-т-у': _iISOtdelKadrov11.default,
      'i-i-s-otdel-kadrov-2-увольнение': _iISOtdelKadrov12.default
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
            title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' + '(версия npm-пакета + хэш коммита). ' + 'Кликните, чтобы перейти на GitHub.'
          }
        },

        sitemap: {
          'application-name': {
            caption: 'Otdel_kadrov_2',
            title: 'Otdel_kadrov_2'
          },
          'application-version': {
            caption: 'Версия аддона {{version}}',
            title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' + '(версия npm-пакета + хэш коммита). ' + 'Кликните, чтобы перейти на GitHub.'
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
      'i-i-s-otdel-kadrov-2-график-отпуск-l': _iISOtdelKadrov2L.default,
      'i-i-s-otdel-kadrov-2-должность-l': _iISOtdelKadrov2L2.default,
      'i-i-s-otdel-kadrov-2-отдел-кадров-l': _iISOtdelKadrov2L3.default,
      'i-i-s-otdel-kadrov-2-приказ-о-приеме-l': _iISOtdelKadrov2L4.default,
      'i-i-s-otdel-kadrov-2-сост-штат-рас-l': _iISOtdelKadrov2L5.default,
      'i-i-s-otdel-kadrov-2-сотрудники-l': _iISOtdelKadrov2L6.default,
      'i-i-s-otdel-kadrov-2-таб-уч-р-в-l': _iISOtdelKadrov2L7.default,
      'i-i-s-otdel-kadrov-2-табл-часть-г-о-l': _iISOtdelKadrov2L8.default,
      'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l': _iISOtdelKadrov2L9.default,
      'i-i-s-otdel-kadrov-2-табл-часть-сотруд-l': _iISOtdelKadrov2L10.default,
      'i-i-s-otdel-kadrov-2-табл-часть-т-у-l': _iISOtdelKadrov2L11.default,
      'i-i-s-otdel-kadrov-2-увольнение-l': _iISOtdelKadrov2L12.default,
      'i-i-s-otdel-kadrov-2-график-отпуск-e': _iISOtdelKadrov2E.default,
      'i-i-s-otdel-kadrov-2-должность-e': _iISOtdelKadrov2E2.default,
      'i-i-s-otdel-kadrov-2-отдел-кадров-e': _iISOtdelKadrov2E3.default,
      'i-i-s-otdel-kadrov-2-приказ-о-приеме-e': _iISOtdelKadrov2E4.default,
      'i-i-s-otdel-kadrov-2-сост-штат-рас-e': _iISOtdelKadrov2E5.default,
      'i-i-s-otdel-kadrov-2-сотрудники-e': _iISOtdelKadrov2E6.default,
      'i-i-s-otdel-kadrov-2-таб-уч-р-в-e': _iISOtdelKadrov2E7.default,
      'i-i-s-otdel-kadrov-2-табл-часть-г-о-e': _iISOtdelKadrov2E8.default,
      'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e': _iISOtdelKadrov2E9.default,
      'i-i-s-otdel-kadrov-2-табл-часть-сотруд-e': _iISOtdelKadrov2E10.default,
      'i-i-s-otdel-kadrov-2-табл-часть-т-у-e': _iISOtdelKadrov2E11.default,
      'i-i-s-otdel-kadrov-2-увольнение-e': _iISOtdelKadrov2E12.default
    }

  });

  exports.default = translations;
});
define('ember-app/mixins/link-action', ['exports', 'ember-link-action/mixins/link-action'], function (exports, _linkAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkAction.default;
    }
  });
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    датаДк: _emberData.default.attr('date'),
    период: _emberData.default.attr('date'),
    руководительКО: _emberData.default.attr('string'),
    руководительОр: _emberData.default.attr('string'),
    отделКадров: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    датаДк: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-график-отпуск.validations.датаДк.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    период: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-график-отпуск.validations.период.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    руководительКО: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-график-отпуск.validations.руководительКО.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    руководительОр: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-график-отпуск.validations.руководительОр.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    отделКадров: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-график-отпуск.validations.отделКадров.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ГрафикОтпускE', 'i-i-s-otdel-kadrov-2-график-отпуск', {
      датаДк: (0, _attributes.attr)('Дата дк', { index: 0 }),
      период: (0, _attributes.attr)('Период', { index: 1 }),
      руководительОр: (0, _attributes.attr)('Руководитель ор', { index: 2 }),
      руководительКО: (0, _attributes.attr)('Руководитель КО', { index: 3 }),
      отделКадров: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-отдел-кадров', 'Отдел кадров', {}, { index: 4 })
    });

    modelClass.defineProjection('ГрафикОтпускL', 'i-i-s-otdel-kadrov-2-график-отпуск', {
      датаДк: (0, _attributes.attr)('Дата дк', { index: 0 }),
      период: (0, _attributes.attr)('Период', { index: 1 }),
      руководительОр: (0, _attributes.attr)('Руководитель ор', { index: 2 }),
      руководительКО: (0, _attributes.attr)('Руководитель КО', { index: 3 })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    iDДолжности: _emberData.default.attr('number'),
    наименование: _emberData.default.attr('string')
  });

  var ValidationRules = exports.ValidationRules = {
    iDДолжности: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-должность.validations.iDДолжности.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    наименование: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-должность.validations.наименование.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ДолжностьE', 'i-i-s-otdel-kadrov-2-должность', {
      наименование: (0, _attributes.attr)('Наименование', { index: 0 }),
      iDДолжности: (0, _attributes.attr)('I d должности', { index: 1 })
    });

    modelClass.defineProjection('ДолжностьL', 'i-i-s-otdel-kadrov-2-должность', {
      наименование: (0, _attributes.attr)('Наименование', { index: 0 }),
      iDДолжности: (0, _attributes.attr)('I d должности', { index: 1 })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    сотрудники: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-сотрудники', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    сотрудники: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-отдел-кадров.validations.сотрудники.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ОтделКадровE', 'i-i-s-otdel-kadrov-2-отдел-кадров', {
      сотрудники: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-сотрудники', 'Сотрудники', {
        фИО: (0, _attributes.attr)('ФИО', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    });

    modelClass.defineProjection('ОтделКадровL', 'i-i-s-otdel-kadrov-2-отдел-кадров', {
      сотрудники: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-сотрудники', 'ФИО', {
        фИО: (0, _attributes.attr)('ФИО', { index: 0 })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    графикРаботы: _emberData.default.attr('string'),
    датаДк: _emberData.default.attr('date'),
    датаПриема: _emberData.default.attr('date'),
    занятость: _emberData.default.attr('i-i-s-otdel-kadrov-2-занятость'),
    оклад: _emberData.default.attr('decimal'),
    ответсвенный: _emberData.default.attr('string'),
    подразделение: _emberData.default.attr('i-i-s-otdel-kadrov-2-подразделение'),
    срокЗаключения: _emberData.default.attr('number'),
    фИО: _emberData.default.attr('string'),
    должность: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-должность', { inverse: null, async: false }),
    отделКадров: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    графикРаботы: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.графикРаботы.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    датаДк: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.датаДк.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    датаПриема: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.датаПриема.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    занятость: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.занятость.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    оклад: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.оклад.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true })]
    },
    ответсвенный: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.ответсвенный.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    подразделение: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.подразделение.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    срокЗаключения: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.срокЗаключения.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    фИО: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.фИО.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    должность: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.должность.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    отделКадров: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-приказ-о-приеме.validations.отделКадров.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ПриказОПриемеE', 'i-i-s-otdel-kadrov-2-приказ-о-приеме', {
      подразделение: (0, _attributes.attr)('Подразделение', { index: 0 }),
      оклад: (0, _attributes.attr)('Оклад', { index: 1 }),
      фИО: (0, _attributes.attr)('ФИО', { index: 2 }),
      графикРаботы: (0, _attributes.attr)('График работы', { index: 3 }),
      датаДк: (0, _attributes.attr)('Дата дк', { index: 4 }),
      ответсвенный: (0, _attributes.attr)('Ответсвенный', { index: 5 }),
      срокЗаключения: (0, _attributes.attr)('Срок заключения', { index: 6 }),
      датаПриема: (0, _attributes.attr)('Дата приема', { index: 7 }),
      занятость: (0, _attributes.attr)('Занятость', { index: 8 }),
      должность: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-должность', 'Должность', {
        наименование: (0, _attributes.attr)('Наименование', { index: 10, hidden: true })
      }, { index: 9, displayMemberPath: 'наименование' }),
      отделКадров: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-отдел-кадров', 'Отдел кадров', {}, { index: 11 })
    });

    modelClass.defineProjection('ПриказОПриемеL', 'i-i-s-otdel-kadrov-2-приказ-о-приеме', {
      датаДк: (0, _attributes.attr)('Дата дк', { index: 0 }),
      подразделение: (0, _attributes.attr)('Подразделение', { index: 1 }),
      оклад: (0, _attributes.attr)('Оклад', { index: 2 }),
      фИО: (0, _attributes.attr)('ФИО', { index: 3 }),
      графикРаботы: (0, _attributes.attr)('График работы', { index: 4 }),
      ответсвенный: (0, _attributes.attr)('Ответсвенный', { index: 5 }),
      срокЗаключения: (0, _attributes.attr)('Срок заключения', { index: 6 }),
      датаПриема: (0, _attributes.attr)('Дата приема', { index: 7 }),
      занятость: (0, _attributes.attr)('Занятость', { index: 8 }),
      должность: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-должность', 'Наименование', {
        наименование: (0, _attributes.attr)('Наименование', { index: 9 })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    главБух: _emberData.default.attr('string'),
    датаДк: _emberData.default.attr('date'),
    период: _emberData.default.attr('date'),
    руководительКО: _emberData.default.attr('string'),
    отделКадров: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    главБух: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сост-штат-рас.validations.главБух.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    датаДк: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сост-штат-рас.validations.датаДк.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    период: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сост-штат-рас.validations.период.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    руководительКО: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сост-штат-рас.validations.руководительКО.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    отделКадров: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сост-штат-рас.validations.отделКадров.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('СостШтатРасE', 'i-i-s-otdel-kadrov-2-сост-штат-рас', {
      период: (0, _attributes.attr)('Период', { index: 0 }),
      руководительКО: (0, _attributes.attr)('Руководитель КО', { index: 1 }),
      датаДк: (0, _attributes.attr)('Дата дк', { index: 2 }),
      главБух: (0, _attributes.attr)('Глав бух', { index: 3 }),
      отделКадров: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-отдел-кадров', 'Отдел кадров', {}, { index: 4 })
    });

    modelClass.defineProjection('СостШтатРасL', 'i-i-s-otdel-kadrov-2-сост-штат-рас', {
      период: (0, _attributes.attr)('Период', { index: 0 }),
      руководительКО: (0, _attributes.attr)('Руководитель КО', { index: 1 }),
      датаДк: (0, _attributes.attr)('Дата дк', { index: 2 }),
      главБух: (0, _attributes.attr)('Глав бух', { index: 3 })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    iDСотрудника: _emberData.default.attr('number'),
    гражданство: _emberData.default.attr('string'),
    датаРождения: _emberData.default.attr('date'),
    знаниеЯзыков: _emberData.default.attr('string'),
    образование: _emberData.default.attr('i-i-s-otdel-kadrov-2-образование'),
    подразделение: _emberData.default.attr('i-i-s-otdel-kadrov-2-подразделение'),
    пол: _emberData.default.attr('string'),
    фИО: _emberData.default.attr('string'),
    должность: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-должность', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    iDСотрудника: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.iDСотрудника.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    гражданство: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.гражданство.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    датаРождения: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.датаРождения.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    знаниеЯзыков: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.знаниеЯзыков.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    образование: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.образование.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    подразделение: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.подразделение.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    пол: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.пол.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    фИО: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.фИО.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    должность: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-сотрудники.validations.должность.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('СотрудникиE', 'i-i-s-otdel-kadrov-2-сотрудники', {
      фИО: (0, _attributes.attr)('ФИО', { index: 0 }),
      датаРождения: (0, _attributes.attr)('Дата рождения', { index: 1 }),
      iDСотрудника: (0, _attributes.attr)('I d сотрудника', { index: 2 }),
      пол: (0, _attributes.attr)('Пол', { index: 3 }),
      подразделение: (0, _attributes.attr)('Подразделение', { index: 4 }),
      знаниеЯзыков: (0, _attributes.attr)('Знание языков', { index: 5 }),
      образование: (0, _attributes.attr)('Образование', { index: 6 }),
      гражданство: (0, _attributes.attr)('Гражданство', { index: 7 }),
      должность: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-должность', 'Должность', {
        наименование: (0, _attributes.attr)('Наименование', { index: 9, hidden: true })
      }, { index: 8, displayMemberPath: 'наименование' })
    });

    modelClass.defineProjection('СотрудникиL', 'i-i-s-otdel-kadrov-2-сотрудники', {
      фИО: (0, _attributes.attr)('ФИО', { index: 0 }),
      датаРождения: (0, _attributes.attr)('Дата рождения', { index: 1 }),
      iDСотрудника: (0, _attributes.attr)('I d сотрудника', { index: 2 }),
      пол: (0, _attributes.attr)('Пол', { index: 3 }),
      подразделение: (0, _attributes.attr)('Подразделение', { index: 4 }),
      знаниеЯзыков: (0, _attributes.attr)('Знание языков', { index: 5 }),
      образование: (0, _attributes.attr)('Образование', { index: 6 }),
      гражданство: (0, _attributes.attr)('Гражданство', { index: 7 }),
      должность: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-должность', 'Наименование', {
        наименование: (0, _attributes.attr)('Наименование', { index: 8 })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    датаДк: _emberData.default.attr('date'),
    исполнитель: _emberData.default.attr('string'),
    период: _emberData.default.attr('date'),
    руководитель: _emberData.default.attr('string'),
    отделКадров: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    датаДк: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-таб-уч-р-в.validations.датаДк.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    исполнитель: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-таб-уч-р-в.validations.исполнитель.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    период: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-таб-уч-р-в.validations.период.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    руководитель: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-таб-уч-р-в.validations.руководитель.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    отделКадров: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-таб-уч-р-в.validations.отделКадров.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ТабУчРВE', 'i-i-s-otdel-kadrov-2-таб-уч-р-в', {
      датаДк: (0, _attributes.attr)('Дата дк', { index: 0 }),
      руководитель: (0, _attributes.attr)('Руководитель', { index: 1 }),
      период: (0, _attributes.attr)('Период', { index: 2 }),
      исполнитель: (0, _attributes.attr)('Исполнитель', { index: 3 }),
      отделКадров: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-отдел-кадров', 'Отдел кадров', {}, { index: 4 })
    });

    modelClass.defineProjection('ТабУчРВL', 'i-i-s-otdel-kadrov-2-таб-уч-р-в', {
      датаДк: (0, _attributes.attr)('Дата дк', { index: 0 }),
      руководитель: (0, _attributes.attr)('Руководитель', { index: 1 }),
      период: (0, _attributes.attr)('Период', { index: 2 }),
      исполнитель: (0, _attributes.attr)('Исполнитель', { index: 3 })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    датаЗап: _emberData.default.attr('date'),
    датаФакт: _emberData.default.attr('date'),
    код: _emberData.default.attr('number'),
    колКалДней: _emberData.default.attr('number'),
    основание: _emberData.default.attr('string'),
    перенос: _emberData.default.attr('date'),
    примечание: _emberData.default.attr('string'),
    сотрудники: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-сотрудники', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    датаЗап: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.датаЗап.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    датаФакт: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.датаФакт.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    код: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.код.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    колКалДней: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.колКалДней.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    основание: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.основание.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    перенос: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.перенос.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    примечание: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.примечание.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    сотрудники: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-г-о.validations.сотрудники.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ТаблЧастьГОE', 'i-i-s-otdel-kadrov-2-табл-часть-г-о', {
      код: (0, _attributes.attr)('Код', { index: 0 }),
      колКалДней: (0, _attributes.attr)('Кол кал дней', { index: 1 }),
      датаЗап: (0, _attributes.attr)('Дата зап', { index: 2 }),
      датаФакт: (0, _attributes.attr)('Дата факт', { index: 3 }),
      основание: (0, _attributes.attr)('Основание', { index: 4 }),
      перенос: (0, _attributes.attr)('Перенос', { index: 5 }),
      примечание: (0, _attributes.attr)('Примечание', { index: 6 }),
      сотрудники: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-сотрудники', 'Сотрудники', {
        фИО: (0, _attributes.attr)('ФИО', { index: 8, hidden: true })
      }, { index: 7, displayMemberPath: 'фИО' })
    });

    modelClass.defineProjection('ТаблЧастьГОL', 'i-i-s-otdel-kadrov-2-табл-часть-г-о', {
      код: (0, _attributes.attr)('Код', { index: 0 }),
      сотрудники: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-сотрудники', 'ФИО', {
        фИО: (0, _attributes.attr)('ФИО', { index: 1 })
      }, { index: -1, hidden: true }),
      колКалДней: (0, _attributes.attr)('Кол кал дней', { index: 2 }),
      датаЗап: (0, _attributes.attr)('Дата зап', { index: 3 }),
      датаФакт: (0, _attributes.attr)('Дата факт', { index: 4 }),
      основание: (0, _attributes.attr)('Основание', { index: 5 }),
      перенос: (0, _attributes.attr)('Перенос', { index: 6 }),
      примечание: (0, _attributes.attr)('Примечание', { index: 7 })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    всего: _emberData.default.attr('number'),
    всегоКолШЕ: _emberData.default.attr('number'),
    всегоНадбавки: _emberData.default.attr('number'),
    всегоТС: _emberData.default.attr('number'),
    итогоВсего: _emberData.default.attr('number'),
    код: _emberData.default.attr('number'),
    количествоШЕ: _emberData.default.attr('number'),
    надбавки: _emberData.default.attr('number'),
    наименование: _emberData.default.attr('i-i-s-otdel-kadrov-2-подразделение'),
    примечание: _emberData.default.attr('string'),
    тарифнаяСтавка: _emberData.default.attr('number'),
    должность: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-должность', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    всего: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.всего.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    всегоКолШЕ: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.всегоКолШЕ.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    всегоНадбавки: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.всегоНадбавки.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    всегоТС: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.всегоТС.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    итогоВсего: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.итогоВсего.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    код: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.код.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    количествоШЕ: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.количествоШЕ.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    надбавки: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.надбавки.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    наименование: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.наименование.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    примечание: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.примечание.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    тарифнаяСтавка: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.тарифнаяСтавка.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    должность: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р.validations.должность.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ТаблЧастьСШРE', 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р', {
      код: (0, _attributes.attr)('Код', { index: 0 }),
      наименование: (0, _attributes.attr)('Наименование', { index: 1 }),
      количествоШЕ: (0, _attributes.attr)('Количество ШЕ', { index: 2 }),
      тарифнаяСтавка: (0, _attributes.attr)('Тарифная ставка', { index: 3 }),
      надбавки: (0, _attributes.attr)('Надбавки', { index: 4 }),
      всего: (0, _attributes.attr)('Всего', { index: 5 }),
      примечание: (0, _attributes.attr)('Примечание', { index: 6 }),
      всегоКолШЕ: (0, _attributes.attr)('Всего кол ШЕ', { index: 7 }),
      всегоТС: (0, _attributes.attr)('Всего ТС', { index: 8 }),
      всегоНадбавки: (0, _attributes.attr)('Всего надбавки', { index: 9 }),
      итогоВсего: (0, _attributes.attr)('Итого всего', { index: 10 }),
      должность: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-должность', 'Должность', {
        наименование: (0, _attributes.attr)('Наименование', { index: 12, hidden: true })
      }, { index: 11, displayMemberPath: 'наименование' })
    });

    modelClass.defineProjection('ТаблЧастьСШРL', 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р', {
      код: (0, _attributes.attr)('Код', { index: 0 }),
      наименование: (0, _attributes.attr)('Наименование', { index: 1 }),
      количествоШЕ: (0, _attributes.attr)('Количество ШЕ', { index: 2 }),
      тарифнаяСтавка: (0, _attributes.attr)('Тарифная ставка', { index: 3 }),
      надбавки: (0, _attributes.attr)('Надбавки', { index: 4 }),
      всего: (0, _attributes.attr)('Всего', { index: 5 }),
      примечание: (0, _attributes.attr)('Примечание', { index: 6 }),
      всегоКолШЕ: (0, _attributes.attr)('Всего кол ШЕ', { index: 7 }),
      всегоТС: (0, _attributes.attr)('Всего ТС', { index: 8 }),
      всегоНадбавки: (0, _attributes.attr)('Всего надбавки', { index: 9 }),
      итогоВсего: (0, _attributes.attr)('Итого всего', { index: 10 }),
      должность: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-должность', 'Наименование', {
        наименование: (0, _attributes.attr)('Наименование', { index: 11 })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    cерия: _emberData.default.attr('number'),
    годОкончания: _emberData.default.attr('date'),
    квалификация: _emberData.default.attr('string'),
    наимДок: _emberData.default.attr('string'),
    наимОбуч: _emberData.default.attr('string'),
    номер: _emberData.default.attr('number')
  });

  var ValidationRules = exports.ValidationRules = {
    cерия: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.cерия.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    годОкончания: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.годОкончания.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    квалификация: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.квалификация.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    наимДок: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.наимДок.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    наимОбуч: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.наимОбуч.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    номер: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-сотруд.validations.номер.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ТаблЧастьСотрудE', 'i-i-s-otdel-kadrov-2-табл-часть-сотруд', {
      наимОбуч: (0, _attributes.attr)('Наим обуч', { index: 0 }),
      квалификация: (0, _attributes.attr)('Квалификация', { index: 1 }),
      наимДок: (0, _attributes.attr)('Наим док', { index: 2 }),
      cерия: (0, _attributes.attr)('Cерия', { index: 3 }),
      номер: (0, _attributes.attr)('Номер', { index: 4 }),
      годОкончания: (0, _attributes.attr)('Год окончания', { index: 5 })
    });

    modelClass.defineProjection('ТаблЧастьСотрудL', 'i-i-s-otdel-kadrov-2-табл-часть-сотруд', {
      наимОбуч: (0, _attributes.attr)('Наим обуч', { index: 0 }),
      квалификация: (0, _attributes.attr)('Квалификация', { index: 1 }),
      наимДок: (0, _attributes.attr)('Наим док', { index: 2 }),
      cерия: (0, _attributes.attr)('Cерия', { index: 3 }),
      номер: (0, _attributes.attr)('Номер', { index: 4 }),
      годОкончания: (0, _attributes.attr)('Год окончания', { index: 5 })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    датаДк: _emberData.default.attr('date'),
    дниЧасы: _emberData.default.attr('number'),
    изНихПоПричинам: _emberData.default.attr('number'),
    код: _emberData.default.attr('number'),
    кодВидаОплаты: _emberData.default.attr('string'),
    колВыхПразд: _emberData.default.attr('number'),
    колНеявок: _emberData.default.attr('number'),
    колЯвокМес: _emberData.default.attr('number'),
    колЯвокПМес: _emberData.default.attr('number'),
    корресСчет: _emberData.default.attr('number'),
    часыЗаМесяц: _emberData.default.attr('decimal'),
    часыЗаПМес: _emberData.default.attr('decimal'),
    явкаНеявка: _emberData.default.attr('boolean')
  });

  var ValidationRules = exports.ValidationRules = {
    датаДк: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.датаДк.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    дниЧасы: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.дниЧасы.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    изНихПоПричинам: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.изНихПоПричинам.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    код: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.код.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    кодВидаОплаты: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.кодВидаОплаты.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    колВыхПразд: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.колВыхПразд.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    колНеявок: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.колНеявок.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    колЯвокМес: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.колЯвокМес.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    колЯвокПМес: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.колЯвокПМес.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    корресСчет: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.корресСчет.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true, integer: true })]
    },
    часыЗаМесяц: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.часыЗаМесяц.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true })]
    },
    часыЗаПМес: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.часыЗаПМес.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('number', { allowString: true, allowBlank: true })]
    },
    явкаНеявка: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-табл-часть-т-у.validations.явкаНеявка.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('ТаблЧастьТУE', 'i-i-s-otdel-kadrov-2-табл-часть-т-у', {
      код: (0, _attributes.attr)('Код', { index: 0 }),
      датаДк: (0, _attributes.attr)('Дата дк', { index: 1 }),
      явкаНеявка: (0, _attributes.attr)('Явка неявка', { index: 2 }),
      колЯвокПМес: (0, _attributes.attr)('Кол явок п мес', { index: 3 }),
      колЯвокМес: (0, _attributes.attr)('Кол явок мес', { index: 4 }),
      часыЗаПМес: (0, _attributes.attr)('Часы за п мес', { index: 5 }),
      часыЗаМесяц: (0, _attributes.attr)('Часы за месяц', { index: 6 }),
      кодВидаОплаты: (0, _attributes.attr)('Код вида оплаты', { index: 7 }),
      корресСчет: (0, _attributes.attr)('Коррес счет', { index: 8 }),
      дниЧасы: (0, _attributes.attr)('Дни часы', { index: 9 }),
      колНеявок: (0, _attributes.attr)('Кол неявок', { index: 10 }),
      изНихПоПричинам: (0, _attributes.attr)('Из них по причинам', { index: 11 }),
      колВыхПразд: (0, _attributes.attr)('Кол вых празд', { index: 12 })
    });

    modelClass.defineProjection('ТаблЧастьТУL', 'i-i-s-otdel-kadrov-2-табл-часть-т-у', {
      код: (0, _attributes.attr)('Код', { index: 0 }),
      датаДк: (0, _attributes.attr)('Дата дк', { index: 1 }),
      явкаНеявка: (0, _attributes.attr)('Явка неявка', { index: 2 }),
      колЯвокПМес: (0, _attributes.attr)('Кол явок п мес', { index: 3 }),
      колЯвокМес: (0, _attributes.attr)('Кол явок мес', { index: 4 }),
      часыЗаПМес: (0, _attributes.attr)('Часы за п мес', { index: 5 }),
      часыЗаМесяц: (0, _attributes.attr)('Часы за месяц', { index: 6 }),
      кодВидаОплаты: (0, _attributes.attr)('Код вида оплаты', { index: 7 }),
      корресСчет: (0, _attributes.attr)('Коррес счет', { index: 8 }),
      дниЧасы: (0, _attributes.attr)('Дни часы', { index: 9 }),
      колНеявок: (0, _attributes.attr)('Кол неявок', { index: 10 }),
      изНихПоПричинам: (0, _attributes.attr)('Из них по причинам', { index: 11 }),
      колВыхПразд: (0, _attributes.attr)('Кол вых празд', { index: 12 })
    });
  };
});
define('ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435', ['exports', 'ember-data', 'ember-cp-validations', 'ember-flexberry-data/utils/attributes'], function (exports, _emberData, _emberCpValidations, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defineProjections = exports.ValidationRules = exports.Model = undefined;
  var Model = exports.Model = Ember.Mixin.create({
    датаДк: _emberData.default.attr('date'),
    датаУвольнения: _emberData.default.attr('date'),
    основание: _emberData.default.attr('string'),
    ответственный: _emberData.default.attr('string'),
    отделКадров: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-отдел-кадров', { inverse: null, async: false }),
    сотрудники: _emberData.default.belongsTo('i-i-s-otdel-kadrov-2-сотрудники', { inverse: null, async: false })
  });

  var ValidationRules = exports.ValidationRules = {
    датаДк: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.датаДк.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    датаУвольнения: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.датаУвольнения.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('date')]
    },
    основание: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.основание.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    ответственный: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.ответственный.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error')]
    },
    отделКадров: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.отделКадров.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    },
    сотрудники: {
      descriptionKey: 'models.i-i-s-otdel-kadrov-2-увольнение.validations.сотрудники.__caption__',
      validators: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
    }
  };

  var defineProjections = exports.defineProjections = function defineProjections(modelClass) {
    modelClass.defineProjection('УвольнениеE', 'i-i-s-otdel-kadrov-2-увольнение', {
      датаУвольнения: (0, _attributes.attr)('Дата увольнения', { index: 0 }),
      датаДк: (0, _attributes.attr)('Дата дк', { index: 1 }),
      основание: (0, _attributes.attr)('Основание', { index: 2 }),
      ответственный: (0, _attributes.attr)('Ответственный', { index: 3 }),
      сотрудники: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-сотрудники', 'Сотрудники', {
        фИО: (0, _attributes.attr)('ФИО', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'фИО' }),
      отделКадров: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-отдел-кадров', 'Отдел кадров', {}, { index: 6 })
    });

    modelClass.defineProjection('УвольнениеL', 'i-i-s-otdel-kadrov-2-увольнение', {
      датаДк: (0, _attributes.attr)('Дата дк', { index: 0 }),
      датаУвольнения: (0, _attributes.attr)('Дата увольнения', { index: 1 }),
      основание: (0, _attributes.attr)('Основание', { index: 2 }),
      ответственный: (0, _attributes.attr)('Ответственный', { index: 3 }),
      сотрудники: (0, _attributes.belongsTo)('i-i-s-otdel-kadrov-2-сотрудники', 'ФИО', {
        фИО: (0, _attributes.attr)('ФИО', { index: 4 })
      }, { index: -1, hidden: true })
    });
  };
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        отделКадров: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        отделКадров: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        сотрудники: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        сотрудники: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        должность: { serialize: 'id', deserialize: 'records' },
        отделКадров: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        должность: { serialize: 'odata-id', deserialize: 'records' },
        отделКадров: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        отделКадров: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        отделКадров: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        должность: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        должность: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        отделКадров: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        отделКадров: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        сотрудники: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        сотрудники: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        должность: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        должность: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {};

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-offline', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OfflineSerializer = exports.OfflineSerializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        отделКадров: { serialize: 'id', deserialize: 'records' },
        сотрудники: { serialize: 'id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Serializer = exports.Serializer = Ember.Mixin.create({
    getAttrs: function getAttrs() {
      var parentAttrs = this._super();
      var attrs = {
        отделКадров: { serialize: 'odata-id', deserialize: 'records' },
        сотрудники: { serialize: 'odata-id', deserialize: 'records' }
      };

      return Ember.$.extend(true, {}, parentAttrs, attrs);
    },
    init: function init() {
      this.set('attrs', this.getAttrs());
      this._super.apply(this, arguments);
    }
  });
});
define('ember-app/models/flexberry-adv-limit', ['exports', 'ember-flexberry/models/flexberry-adv-limit'], function (exports, _flexberryAdvLimit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryAdvLimit.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditEntity) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditEntity.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditField.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsObjectType) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsObjectType.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent'], function (exports, _iCSSoftSTORMNETSecurityAgent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecurityAgent.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group'], function (exports, _iCSSoftSTORMNETSecurityLinkGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecurityLinkGroup.default;
    }
  });
});
define('ember-app/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-session', ['exports', 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-session'], function (exports, _iCSSoftSTORMNETSecuritySession) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecuritySession.default;
    }
  });
});
define('ember-app/models/i-i-s-caseberry-logging-objects-application-log', ['exports', 'ember-flexberry/models/i-i-s-caseberry-logging-objects-application-log'], function (exports, _iISCaseberryLoggingObjectsApplicationLog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLog.default;
    }
  });
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435', ['exports', 'ember-cp-validations', 'ember-flexberry-data/models/model', 'ember-app/mixins/regenerated/models/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435'], function (exports, _emberCpValidations, _model, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)(_iISOtdelKadrov.ValidationRules, {
    dependentKeys: ['model.i18n.locale']
  });

  var Model = _model.default.extend(_iISOtdelKadrov.Model, Validations, {});

  (0, _iISOtdelKadrov.defineProjections)(Model);

  exports.default = Model;
});
define('ember-app/models/model-without-validation', ['exports', 'ember-flexberry-data/models/model-without-validation'], function (exports, _modelWithoutValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modelWithoutValidation.default;
    }
  });
});
define('ember-app/models/model', ['exports', 'ember-flexberry-data/models/model'], function (exports, _model) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _model.default;
    }
  });
});
define('ember-app/models/new-platform-flexberry-flexberry-user-setting', ['exports', 'ember-flexberry/models/new-platform-flexberry-flexberry-user-setting'], function (exports, _newPlatformFlexberryFlexberryUserSetting) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryFlexberryUserSetting.default;
    }
  });
});
define('ember-app/models/new-platform-flexberry-services-lock', ['exports', 'ember-flexberry/models/new-platform-flexberry-services-lock'], function (exports, _newPlatformFlexberryServicesLock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryServicesLock.default;
    }
  });
});
define('ember-app/models/offline-model', ['exports', 'ember-flexberry-data/models/offline-model'], function (exports, _offlineModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _offlineModel.default;
    }
  });
});
define('ember-app/resolver', ['exports', 'ember-flexberry/resolver'], function (exports, _resolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _resolver.default;
});
define('ember-app/router', ['exports', 'ember-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType
  });

  Router.map(function () {
    this.route('i-i-s-otdel-kadrov-2-график-отпуск-l');
    this.route('i-i-s-otdel-kadrov-2-график-отпуск-e', { path: 'i-i-s-otdel-kadrov-2-график-отпуск-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-график-отпуск-e.new', { path: 'i-i-s-otdel-kadrov-2-график-отпуск-e/new' });
    this.route('i-i-s-otdel-kadrov-2-должность-l');
    this.route('i-i-s-otdel-kadrov-2-должность-e', { path: 'i-i-s-otdel-kadrov-2-должность-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-должность-e.new', { path: 'i-i-s-otdel-kadrov-2-должность-e/new' });
    this.route('i-i-s-otdel-kadrov-2-отдел-кадров-l');
    this.route('i-i-s-otdel-kadrov-2-отдел-кадров-e', { path: 'i-i-s-otdel-kadrov-2-отдел-кадров-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-отдел-кадров-e.new', { path: 'i-i-s-otdel-kadrov-2-отдел-кадров-e/new' });
    this.route('i-i-s-otdel-kadrov-2-приказ-о-приеме-l');
    this.route('i-i-s-otdel-kadrov-2-приказ-о-приеме-e', { path: 'i-i-s-otdel-kadrov-2-приказ-о-приеме-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-приказ-о-приеме-e.new', { path: 'i-i-s-otdel-kadrov-2-приказ-о-приеме-e/new' });
    this.route('i-i-s-otdel-kadrov-2-сост-штат-рас-l');
    this.route('i-i-s-otdel-kadrov-2-сост-штат-рас-e', { path: 'i-i-s-otdel-kadrov-2-сост-штат-рас-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-сост-штат-рас-e.new', { path: 'i-i-s-otdel-kadrov-2-сост-штат-рас-e/new' });
    this.route('i-i-s-otdel-kadrov-2-сотрудники-l');
    this.route('i-i-s-otdel-kadrov-2-сотрудники-e', { path: 'i-i-s-otdel-kadrov-2-сотрудники-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-сотрудники-e.new', { path: 'i-i-s-otdel-kadrov-2-сотрудники-e/new' });
    this.route('i-i-s-otdel-kadrov-2-таб-уч-р-в-l');
    this.route('i-i-s-otdel-kadrov-2-таб-уч-р-в-e', { path: 'i-i-s-otdel-kadrov-2-таб-уч-р-в-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-таб-уч-р-в-e.new', { path: 'i-i-s-otdel-kadrov-2-таб-уч-р-в-e/new' });
    this.route('i-i-s-otdel-kadrov-2-табл-часть-г-о-l');
    this.route('i-i-s-otdel-kadrov-2-табл-часть-г-о-e', { path: 'i-i-s-otdel-kadrov-2-табл-часть-г-о-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-табл-часть-г-о-e.new', { path: 'i-i-s-otdel-kadrov-2-табл-часть-г-о-e/new' });
    this.route('i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l');
    this.route('i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e', { path: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.new', { path: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e/new' });
    this.route('i-i-s-otdel-kadrov-2-табл-часть-сотруд-l');
    this.route('i-i-s-otdel-kadrov-2-табл-часть-сотруд-e', { path: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-табл-часть-сотруд-e.new', { path: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд-e/new' });
    this.route('i-i-s-otdel-kadrov-2-табл-часть-т-у-l');
    this.route('i-i-s-otdel-kadrov-2-табл-часть-т-у-e', { path: 'i-i-s-otdel-kadrov-2-табл-часть-т-у-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-табл-часть-т-у-e.new', { path: 'i-i-s-otdel-kadrov-2-табл-часть-т-у-e/new' });
    this.route('i-i-s-otdel-kadrov-2-увольнение-l');
    this.route('i-i-s-otdel-kadrov-2-увольнение-e', { path: 'i-i-s-otdel-kadrov-2-увольнение-e/:id' });
    this.route('i-i-s-otdel-kadrov-2-увольнение-e.new', { path: 'i-i-s-otdel-kadrov-2-увольнение-e/new' });
  });

  exports.default = Router;
});
define('ember-app/routes/application', ['exports', 'ember-flexberry/mixins/modal-application-route'], function (exports, _modalApplicationRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_modalApplicationRoute.default);
});
define('ember-app/routes/edit-form', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _editForm.default;
    }
  });
});
define('ember-app/routes/i-i-s-caseberry-logging-objects-application-log-e', ['exports', 'ember-flexberry/routes/i-i-s-caseberry-logging-objects-application-log-e'], function (exports, _iISCaseberryLoggingObjectsApplicationLogE) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLogE.default;
    }
  });
});
define('ember-app/routes/i-i-s-caseberry-logging-objects-application-log-l', ['exports', 'ember-flexberry/routes/i-i-s-caseberry-logging-objects-application-log-l'], function (exports, _iISCaseberryLoggingObjectsApplicationLogL) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLogL.default;
    }
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ГрафикОтпускE',
    modelName: 'i-i-s-otdel-kadrov-2-график-отпуск'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ГрафикОтпускE',
    modelName: 'i-i-s-otdel-kadrov-2-график-отпуск',
    templateName: 'i-i-s-otdel-kadrov-2-график-отпуск-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ГрафикОтпускL'
    */
    modelProjection: 'ГрафикОтпускL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-график-отпуск'
    */
    modelName: 'i-i-s-otdel-kadrov-2-график-отпуск',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2ГрафикОтпускL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ДолжностьE',
    modelName: 'i-i-s-otdel-kadrov-2-должность'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ДолжностьE',
    modelName: 'i-i-s-otdel-kadrov-2-должность',
    templateName: 'i-i-s-otdel-kadrov-2-должность-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ДолжностьL'
    */
    modelProjection: 'ДолжностьL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-должность'
    */
    modelName: 'i-i-s-otdel-kadrov-2-должность',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2ДолжностьL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ОтделКадровE',
    modelName: 'i-i-s-otdel-kadrov-2-отдел-кадров'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ОтделКадровE',
    modelName: 'i-i-s-otdel-kadrov-2-отдел-кадров',
    templateName: 'i-i-s-otdel-kadrov-2-отдел-кадров-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ОтделКадровL'
    */
    modelProjection: 'ОтделКадровL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-отдел-кадров'
    */
    modelName: 'i-i-s-otdel-kadrov-2-отдел-кадров',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2ОтделКадровL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ПриказОПриемеE',
    modelName: 'i-i-s-otdel-kadrov-2-приказ-о-приеме'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ПриказОПриемеE',
    modelName: 'i-i-s-otdel-kadrov-2-приказ-о-приеме',
    templateName: 'i-i-s-otdel-kadrov-2-приказ-о-приеме-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ПриказОПриемеL'
    */
    modelProjection: 'ПриказОПриемеL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-приказ-о-приеме'
    */
    modelName: 'i-i-s-otdel-kadrov-2-приказ-о-приеме',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2ПриказОПриемеL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'СостШтатРасE',
    modelName: 'i-i-s-otdel-kadrov-2-сост-штат-рас'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'СостШтатРасE',
    modelName: 'i-i-s-otdel-kadrov-2-сост-штат-рас',
    templateName: 'i-i-s-otdel-kadrov-2-сост-штат-рас-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'СостШтатРасL'
    */
    modelProjection: 'СостШтатРасL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-сост-штат-рас'
    */
    modelName: 'i-i-s-otdel-kadrov-2-сост-штат-рас',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2СостШтатРасL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'СотрудникиE',
    modelName: 'i-i-s-otdel-kadrov-2-сотрудники'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'СотрудникиE',
    modelName: 'i-i-s-otdel-kadrov-2-сотрудники',
    templateName: 'i-i-s-otdel-kadrov-2-сотрудники-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'СотрудникиL'
    */
    modelProjection: 'СотрудникиL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-сотрудники'
    */
    modelName: 'i-i-s-otdel-kadrov-2-сотрудники',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2СотрудникиL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ТабУчРВE',
    modelName: 'i-i-s-otdel-kadrov-2-таб-уч-р-в'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ТабУчРВE',
    modelName: 'i-i-s-otdel-kadrov-2-таб-уч-р-в',
    templateName: 'i-i-s-otdel-kadrov-2-таб-уч-р-в-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ТабУчРВL'
    */
    modelProjection: 'ТабУчРВL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-таб-уч-р-в'
    */
    modelName: 'i-i-s-otdel-kadrov-2-таб-уч-р-в',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2ТабУчРВL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ТаблЧастьГОE',
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-г-о'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ТаблЧастьГОE',
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-г-о',
    templateName: 'i-i-s-otdel-kadrov-2-табл-часть-г-о-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ТаблЧастьГОL'
    */
    modelProjection: 'ТаблЧастьГОL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-табл-часть-г-о'
    */
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-г-о',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2ТаблЧастьГОL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ТаблЧастьСШРE',
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ТаблЧастьСШРE',
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р',
    templateName: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ТаблЧастьСШРL'
    */
    modelProjection: 'ТаблЧастьСШРL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р'
    */
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2ТаблЧастьСШРL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ТаблЧастьСотрудE',
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ТаблЧастьСотрудE',
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд',
    templateName: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ТаблЧастьСотрудL'
    */
    modelProjection: 'ТаблЧастьСотрудL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-табл-часть-сотруд'
    */
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-сотруд',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2ТаблЧастьСотрудL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'ТаблЧастьТУE',
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-т-у'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'ТаблЧастьТУE',
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-т-у',
    templateName: 'i-i-s-otdel-kadrov-2-табл-часть-т-у-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'ТаблЧастьТУL'
    */
    modelProjection: 'ТаблЧастьТУL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-табл-часть-т-у'
    */
    modelName: 'i-i-s-otdel-kadrov-2-табл-часть-т-у',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2ТаблЧастьТУL: {} };
    })
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-e', ['exports', 'ember-flexberry/routes/edit-form'], function (exports, _editForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editForm.default.extend({
    modelProjection: 'УвольнениеE',
    modelName: 'i-i-s-otdel-kadrov-2-увольнение'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-e/new', ['exports', 'ember-flexberry/routes/edit-form-new'], function (exports, _editFormNew) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _editFormNew.default.extend({
    modelProjection: 'УвольнениеE',
    modelName: 'i-i-s-otdel-kadrov-2-увольнение',
    templateName: 'i-i-s-otdel-kadrov-2-увольнение-e'
  });
});
define('ember-app/routes/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-l', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _listForm.default.extend({
    /**
      Name of model projection to be used as record's properties limitation.
       @property modelProjection
      @type String
      @default 'УвольнениеL'
    */
    modelProjection: 'УвольнениеL',

    /**
      Name of model to be used as list's records types.
       @property modelName
      @type String
      @default 'i-i-s-otdel-kadrov-2-увольнение'
    */
    modelName: 'i-i-s-otdel-kadrov-2-увольнение',

    /**
      Defined user settings developer.
      For default userSetting use empty name ('').
      Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.
       ```javascript
      {
        <componentName>: {
          <settingName>: {
            colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
            sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
            colsWidths: [ <colName>:<colWidth>, ... ],
          },
          ...
        },
        ...
      }
      ```
       @property developerUserSettings
      @type Object
    */
    developerUserSettings: Ember.computed(function () {
      return { IISOtdel_kadrov_2УвольнениеL: {} };
    })
  });
});
define('ember-app/routes/list-form', ['exports', 'ember-flexberry/routes/list-form'], function (exports, _listForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listForm.default;
    }
  });
});
define('ember-app/routes/new-platform-flexberry-services-lock-list', ['exports', 'ember-flexberry/routes/new-platform-flexberry-services-lock-list'], function (exports, _newPlatformFlexberryServicesLockList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryServicesLockList.default;
    }
  });
});
define('ember-app/serializers/application-offline', ['exports', 'ember-data', 'ember-flexberry-data/serializers/offline'], function (exports, _emberData, _offline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _offline.default.extend(_emberData.default.EmbeddedRecordsMixin, {
    attrs: {}
  });
});
define('ember-app/serializers/application', ['exports', 'ember-flexberry-data/serializers/odata'], function (exports, _odata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _odata.default.extend({});
});
define('ember-app/serializers/base', ['exports', 'ember-flexberry-data/serializers/base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _base.default;
    }
  });
});
define('ember-app/serializers/flexberry-adv-limit', ['exports', 'ember-flexberry/serializers/flexberry-adv-limit'], function (exports, _flexberryAdvLimit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryAdvLimit.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-offline'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditEntityOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditEntityOffline.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditEntity) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditEntity.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field-offline'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditFieldOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditFieldOffline.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsAuditField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsAuditField.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type-offline'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsObjectTypeOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsObjectTypeOffline.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsObjectType) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsObjectType.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent-offline', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent-offline'], function (exports, _iCSSoftSTORMNETSecurityAgentOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecurityAgentOffline.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent'], function (exports, _iCSSoftSTORMNETSecurityAgent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecurityAgent.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group'], function (exports, _iCSSoftSTORMNETSecurityLinkGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecurityLinkGroup.default;
    }
  });
});
define('ember-app/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-session', ['exports', 'ember-flexberry-data/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-session'], function (exports, _iCSSoftSTORMNETSecuritySession) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETSecuritySession.default;
    }
  });
});
define('ember-app/serializers/i-i-s-caseberry-logging-objects-application-log', ['exports', 'ember-flexberry/serializers/i-i-s-caseberry-logging-objects-application-log'], function (exports, _iISCaseberryLoggingObjectsApplicationLog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iISCaseberryLoggingObjectsApplicationLog.default;
    }
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-offline', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-offline', 'ember-app/serializers/application-offline'], function (exports, _iISOtdelKadrov2Offline, _applicationOffline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _applicationOffline.default.extend(_iISOtdelKadrov2Offline.OfflineSerializer, {});
});
define('ember-app/serializers/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435', ['exports', 'ember-app/mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435', 'ember-app/serializers/application'], function (exports, _iISOtdelKadrov, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend(_iISOtdelKadrov.Serializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
  });
});
define('ember-app/serializers/new-platform-flexberry-flexberry-user-setting', ['exports', 'ember-flexberry/serializers/new-platform-flexberry-flexberry-user-setting'], function (exports, _newPlatformFlexberryFlexberryUserSetting) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryFlexberryUserSetting.default;
    }
  });
});
define('ember-app/serializers/new-platform-flexberry-services-lock', ['exports', 'ember-flexberry/serializers/new-platform-flexberry-services-lock'], function (exports, _newPlatformFlexberryServicesLock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _newPlatformFlexberryServicesLock.default;
    }
  });
});
define('ember-app/serializers/odata', ['exports', 'ember-flexberry-data/serializers/odata'], function (exports, _odata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _odata.default;
    }
  });
});
define('ember-app/serializers/offline', ['exports', 'ember-flexberry-data/serializers/offline'], function (exports, _offline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _offline.default;
    }
  });
});
define('ember-app/services/adv-limit', ['exports', 'ember-flexberry/services/adv-limit'], function (exports, _advLimit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _advLimit.default;
});
define('ember-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('ember-app/services/app-state', ['exports', 'ember-flexberry/services/app-state'], function (exports, _appState) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _appState.default;
    }
  });
});
define('ember-app/services/cols-config-menu', ['exports', 'ember-flexberry/services/cols-config-menu', 'ember-app/config/environment'], function (exports, _colsConfigMenu, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var environment = Ember.get(_environment.default, 'environment');
  _colsConfigMenu.default.reopen({
    environment: environment
  });

  exports.default = _colsConfigMenu.default;
});
define('ember-app/services/detail-interaction', ['exports', 'ember-flexberry/services/detail-interaction'], function (exports, _detailInteraction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _detailInteraction.default;
});
define('ember-app/services/device', ['exports', 'ember-flexberry/services/device'], function (exports, _device) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _device.default;
    }
  });
});
define('ember-app/services/dexie', ['exports', 'ember-flexberry-data/services/dexie'], function (exports, _dexie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dexie.default;
    }
  });
});
define('ember-app/services/form-load-time-tracker', ['exports', 'ember-flexberry/services/form-load-time-tracker'], function (exports, _formLoadTimeTracker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formLoadTimeTracker.default;
    }
  });
});
define('ember-app/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
});
define('ember-app/services/log', ['exports', 'ember-flexberry/services/log'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
});
define('ember-app/services/lookup-events', ['exports', 'ember-flexberry/services/lookup-events'], function (exports, _lookupEvents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _lookupEvents.default;
});
define('ember-app/services/moment', ['exports', 'ember-moment/services/moment', 'ember-app/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = Ember.get;
  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define('ember-app/services/objectlistview-events', ['exports', 'ember-flexberry/services/objectlistview-events'], function (exports, _objectlistviewEvents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _objectlistviewEvents.default;
});
define('ember-app/services/offline-globals', ['exports', 'ember-flexberry/services/offline-globals'], function (exports, _offlineGlobals) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _offlineGlobals.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      this.setOnlineAvailable(false);
    },
    getOfflineSchema: function getOfflineSchema() {
      var parentSchema = this._super.apply(this, arguments);
      var returnedSchema = Ember.merge(parentSchema, {
        'i-i-s-otdel-kadrov-2-график-отпуск': 'id,датаДк,период,руководительКО,руководительОр,отделКадров',
        'i-i-s-otdel-kadrov-2-должность': 'id,iDДолжности,наименование',
        'i-i-s-otdel-kadrov-2-отдел-кадров': 'id,сотрудники',
        'i-i-s-otdel-kadrov-2-приказ-о-приеме': 'id,графикРаботы,датаДк,датаПриема,занятость,оклад,ответсвенный,подразделение,срокЗаключения,фИО,должность,отделКадров',
        'i-i-s-otdel-kadrov-2-сост-штат-рас': 'id,главБух,датаДк,период,руководительКО,отделКадров',
        'i-i-s-otdel-kadrov-2-сотрудники': 'id,iDСотрудника,гражданство,датаРождения,знаниеЯзыков,образование,подразделение,пол,фИО,должность',
        'i-i-s-otdel-kadrov-2-таб-уч-р-в': 'id,датаДк,исполнитель,период,руководитель,отделКадров',
        'i-i-s-otdel-kadrov-2-табл-часть-г-о': 'id,датаЗап,датаФакт,код,колКалДней,основание,перенос,примечание,сотрудники',
        'i-i-s-otdel-kadrov-2-табл-часть-с-ш-р': 'id,всего,всегоКолШЕ,всегоНадбавки,всегоТС,итогоВсего,код,количествоШЕ,надбавки,наименование,примечание,тарифнаяСтавка,должность',
        'i-i-s-otdel-kadrov-2-табл-часть-сотруд': 'id,cерия,годОкончания,квалификация,наимДок,наимОбуч,номер',
        'i-i-s-otdel-kadrov-2-табл-часть-т-у': 'id,датаДк,дниЧасы,изНихПоПричинам,код,кодВидаОплаты,колВыхПразд,колНеявок,колЯвокМес,колЯвокПМес,корресСчет,часыЗаМесяц,часыЗаПМес,явкаНеявка',
        'i-i-s-otdel-kadrov-2-увольнение': 'id,датаДк,датаУвольнения,основание,ответственный,отделКадров,сотрудники'
      });

      return returnedSchema;
    }
  });
});
define('ember-app/services/perf', ['exports', 'ember-flexberry/services/perf', 'ember-app/config/environment'], function (exports, _perf, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var enabled = Ember.get(_environment.default, 'APP.perf.enabled');
  if (Ember.typeOf(enabled) === 'boolean') {
    _perf.default.reopen({
      enabled: enabled
    });
  }

  exports.default = _perf.default;
});
define('ember-app/services/route-history', ['exports', 'ember-flexberry/services/route-history'], function (exports, _routeHistory) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeHistory.default;
    }
  });
});
define('ember-app/services/store', ['exports', 'ember-flexberry-data/stores/base-store', 'ember-flexberry-data/mixins/store', 'ember-app/config/environment'], function (exports, _baseStore, _store, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  exports.default = _baseStore.default.reopen(_store.default, {
    /**
     Service that return offline schemas.
      @property objectlistviewEventsService
     @type {Class}
     @default OfflineGlobalsService
    */
    offlineGlobals: Ember.inject.service('offline-globals'),

    init: function init() {
      this.set('offlineSchema', _defineProperty({}, _environment.default.APP.offline.dbName, { 1: this.get('offlineGlobals').getOfflineSchema() }));
      return this._super.apply(this, arguments);
    }
  });
});
define('ember-app/services/syncer', ['exports', 'ember-flexberry-data/services/syncer'], function (exports, _syncer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _syncer.default;
    }
  });
});
define('ember-app/services/user-settings', ['exports', 'ember-flexberry/services/user-settings', 'ember-app/config/environment'], function (exports, _userSettings, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var enabled = Ember.get(_environment.default, 'APP.useUserSettingsService');
  var appName = Ember.get(_environment.default, 'APP.name');
  if (Ember.typeOf(enabled) === 'boolean') {
    _userSettings.default.reopen({
      isUserSettingsServiceEnabled: enabled,
      appName: appName
    });
  }

  exports.default = _userSettings.default;
});
define('ember-app/services/user', ['exports', 'ember-flexberry-data/services/user'], function (exports, _user) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _user.default;
    }
  });
});
define("ember-app/templates/advlimit-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zAPXV7Xw", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"advlimit-dialog-content\",null,[[\"model\",\"close\",\"message\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"closeModalDialog\"],null],[22,[\"message\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/advlimit-dialog-content.hbs" } });
});
define("ember-app/templates/advlimit-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cgoUuyMj", "block": "{\"symbols\":[],\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"sizeClass\",\"close\",\"created\",\"useOkButton\",\"useCloseButton\"],[[22,[\"title\"]],\"small\",\"removeModalDialog\",\"createdModalDialog\",false,false]],{\"statements\":[[0,\"  \"],[1,[26,\"outlet\",[\"modal-content\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/advlimit-dialog.hbs" } });
});
define("ember-app/templates/application-with-submenu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rZYUOeR4", "block": "{\"symbols\":[],\"statements\":[[4,\"flexberry-sidebar\",null,[[\"class\"],[\"inverted vertical main menu\"]],{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"header item\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",\"brand\"],[10,\"href\",\"#\"],[8],[0,\"Flexberry Ember Demo\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\"],[[22,[\"sitemap\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[10,\"id\",\"example-with-submenu\"],[10,\"class\",\"pusher\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"full height\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui fixed main menu\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"launch icon item\"],[3,\"action\",[[21,0,[]],\"toggleSidebar\"]],[8],[6,\"i\"],[10,\"class\",\"sidebar icon\"],[8],[9],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui main container segment flexberry-content\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui close left rail\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui sticky transition visible\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"flexberry-submenu ui large violet pointing secondary vertical following fluid menu\"],[8],[0,\"\\n            \"],[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\"],[[22,[\"sitemap\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[1,[20,\"outlet\"],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui main container\"],[8],[0,\"\\n  \"],[1,[26,\"outlet\",[\"modal\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/application-with-submenu.hbs" } });
});
define("ember-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yAX+HoFF", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"isInAcceptanceTestMode\"]]],null,{\"statements\":[[0,\"  \"],[1,[20,\"outlet\"],false],[0,\"\\n  \"],[1,[26,\"outlet\",[\"modal\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"flexberry-sidebar\",null,[[\"class\",\"settings\"],[\"inverted vertical main menu visible\",[26,\"hash\",null,[[\"closable\",\"dimPage\",\"onShow\",\"onHidden\"],[false,false,[26,\"action\",[[21,0,[]],\"updateWidth\"],null],[26,\"action\",[[21,0,[]],\"updateWidth\"],null]]]]]],{\"statements\":[[0,\"  \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"class\"],[[22,[\"sitemap\"]],\"flexberry-sitemap\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[10,\"class\",\"bgw-fix\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"background-logo\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui top attached\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui attached menu\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui container flex-container\"],[8],[0,\"\\n          \"],[6,\"a\"],[10,\"class\",\"launch icon item\"],[11,\"title\",[26,\"t\",[\"forms.application.header.menu.sitemap-button.title\"],null],null],[3,\"action\",[[21,0,[]],\"toggleSidebar\"]],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"sidebar icon text-menu-hide\"],[8],[0,\"\\n              \"],[6,\"span\"],[10,\"class\",\"text_menu hidden\"],[8],[0,\"\\n                \"],[1,[26,\"t\",[\"forms.application.header.menu.show-menu.caption\"],null],false],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"span\"],[10,\"class\",\"text_menu hidden-text\"],[8],[0,\"\\n                \"],[1,[26,\"t\",[\"forms.application.header.menu.hide-menu.caption\"],null],false],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",\"item logo\"],[10,\"href\",\"#\"],[10,\"target\",\"_blank\"],[11,\"title\",[26,\"t\",[\"forms.application.sitemap.application-name.title\"],null],null],[8],[0,\"\\n      \"],[6,\"img\"],[10,\"class\",\"ui centered image\"],[10,\"src\",\"assets/images/flexberry-logo.png\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"page-header-caption\"],[8],[6,\"a\"],[10,\"href\",\"#\"],[8],[1,[26,\"t\",[\"application-name\"],null],false],[9],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"id\",\"example\"],[10,\"class\",\"pusher\"],[8],[0,\"\\n  \"],[6,\"div\"],[11,\"class\",[27,[\"ui form \",[22,[\"appState\",\"state\"]]]]],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"full height\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"flexberry-content ui attached segment\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui main container\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"stackable grid container\"],[8],[0,\"\\n            \"],[1,[20,\"outlet\"],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui main container\"],[8],[0,\"\\n  \"],[1,[26,\"outlet\",[\"modal\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui vertical footer segment\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui container flex-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui text menu\"],[8],[0,\"\\n      \"],[6,\"a\"],[10,\"class\",\"brand item\"],[10,\"href\",\"#\"],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.application.footer.application-name\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-dropdown\",null,[[\"class\",\"items\",\"value\",\"placeholder\",\"settings\"],[\"compact\",[22,[\"locales\"]],[22,[\"i18n\",\"locale\"]],[26,\"t\",[\"forms.application.header.menu.language-dropdown.placeholder\"],null],[26,\"hash\",null,[[\"direction\"],[\"upward\"]]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/application.hbs" } });
});
define("ember-app/templates/colsconfig-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ifjuTqW2", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"colsconfig-dialog-content\",null,[[\"model\",\"close\",\"type\",\"closeable\",\"visible\",\"caption\",\"message\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"sortByColumnsConfig\"],null],[22,[\"message\",\"type\"]],true,[22,[\"message\",\"visible\"]],[22,[\"message\",\"caption\"]],[22,[\"message\",\"message\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/colsconfig-dialog-content.hbs" } });
});
define("ember-app/templates/colsconfig-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kRvzniyp", "block": "{\"symbols\":[],\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"sizeClass\",\"close\",\"created\",\"useOkButton\",\"useCloseButton\",\"useSidePageMode\",\"componentName\"],[[26,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],[26,\"t\",[\"components.colsconfig-dialog-content.export-modal-dialog-title\"],null],[26,\"t\",[\"components.colsconfig-dialog-content.title\"],null]],null],\"small\",\"removeModalDialog\",\"createdModalDialog\",false,false,[22,[\"model\",\"useSidePageMode\"]],[22,[\"model\",\"componentName\"]]]],{\"statements\":[[0,\"  \"],[1,[26,\"outlet\",[\"modal-content\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/colsconfig-dialog.hbs" } });
});
define("ember-app/templates/components/advlimit-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4DwpZodg", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[11,\"class\",[27,[\"ui form \",[22,[\"appState\",\"state\"]]]]],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-colsconfig content\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui action input flexberry-advlimit-input\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-textarea\",null,[[\"value\",\"class\",\"rows\"],[[22,[\"model\",\"advLimit\"]],[22,[\"class\"]],\"10\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui action input flexberry-advlimit-input\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"input\",\"setting-name-input fluid\",[22,[\"model\",\"advLimitName\"]],[26,\"t\",[\"components.advlimit-dialog-content.enter-limit-name\"],null]]]],false],[0,\"\\n\"],[4,\"if\",[[22,[\"advLimit\",\"isAdvLimitServiceEnabled\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"ui small button cols-config-save\",[26,\"unless\",[[22,[\"model\",\"advLimitName\"]],\" disabled\"],null]]]],[3,\"action\",[[21,0,[]],\"saveAdvLimit\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"components.advlimit-dialog-content.save\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[6,\"div\"],[10,\"class\",\"ui right floated button cols-config-apply\"],[3,\"action\",[[21,0,[]],\"apply\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.advlimit-dialog-content.use\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui button cols-config-check\"],[3,\"action\",[[21,0,[]],\"check\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.advlimit-dialog-content.check\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[1,[26,\"ui-message\",null,[[\"type\",\"visible\",\"caption\",\"message\",\"closeable\"],[[22,[\"message\",\"type\"]],[22,[\"message\",\"visible\"]],[22,[\"message\",\"caption\"]],[22,[\"message\",\"message\"]],[22,[\"message\",\"closeable\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/advlimit-dialog-content.hbs" } });
});
define("ember-app/templates/components/colsconfig-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xSBrUXqi", "block": "{\"symbols\":[\"colDesc\",\"n\"],\"statements\":[[6,\"div\"],[11,\"class\",[27,[\"ui form \",[22,[\"appState\",\"state\"]]]]],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-colsconfig content\"],[8],[0,\"\\n    \"],[6,\"table\"],[10,\"class\",\"ui unstackable fixed selectable celled table\"],[8],[0,\"\\n      \"],[6,\"thead\"],[8],[0,\"\\n        \"],[6,\"tr\"],[8],[0,\"\\n          \"],[6,\"th\"],[10,\"class\",\"show-columns\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.dont-show-columns\"],null]]]],[10,\"style\",\"cursor:default\"],[8],[6,\"i\"],[10,\"class\",\"large hide icon\"],[8],[9],[9],[0,\"\\n          \"],[6,\"th\"],[10,\"class\",\"columns-order\"],[10,\"style\",\"cursor:default\"],[8],[6,\"i\"],[10,\"class\",\"large sort icon\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.columns-order\"],null]]]],[8],[9],[9],[0,\"\\n          \"],[6,\"th\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.column-name\"],null]]]],[10,\"style\",\"cursor:default\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.column-name\"],null],false],[9],[0,\"\\n          \"],[6,\"th\"],[10,\"class\",\"sort-direction\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction\"],null]]]],[10,\"style\",\"cursor:default\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-caption\"],null],false],[9],[0,\"\\n          \"],[6,\"th\"],[10,\"class\",\"sort-priority\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.sort-priority\"],null]]]],[10,\"style\",\"cursor:default\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-priority-caption\"],null],false],[9],[0,\"\\n          \"],[6,\"th\"],[10,\"class\",\"column-width\"],[11,\"title\",[27,[[26,\"t\",[\"components.colsconfig-dialog-content.column-width\"],null]]]],[10,\"style\",\"cursor:default\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.column-width-caption\"],null],false],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"tbody\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"colDescs\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[11,\"propName\",[27,[[21,1,[\"propName\"]]]]],[8],[0,\"\\n          \"],[6,\"td\"],[8],[0,\"\\n            \"],[6,\"i\"],[11,\"class\",[27,[\"large \",[26,\"if\",[[21,1,[\"hide\"]],\"hide\",\"unhide\"],null],\" icon\"]]],[10,\"colsConfigHidden\",\"false\"],[10,\"style\",\"cursor:pointer\"],[3,\"action\",[[21,0,[]],\"invertVisibility\",[21,2,[]]]],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"td\"],[8],[0,\"\\n            \"],[6,\"button\"],[11,\"class\",[27,[\"ui icon tiny button\",[26,\"if\",[[26,\"eq\",[[21,2,[]],0],null],\" disabled\"],null]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"rowUp\",[21,2,[]]]],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"chevron up icon\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"button\"],[11,\"class\",[27,[\"ui icon tiny button row-down-button no-margin\",[26,\"if\",[[26,\"eq\",[[21,1,[]],[22,[\"model\",\"colDescs\",\"lastObject\"]]],null],\" disabled\"],null]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"rowDown\",[21,2,[]]]],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"chevron down icon\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"td\"],[11,\"class\",[27,[[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n            \"],[4,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]]],null,{\"statements\":[[1,[26,\"input\",null,[[\"class\",\"value\"],[[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null],[21,1,[\"name\"]]]]],false]],\"parameters\":[]},{\"statements\":[[1,[21,1,[\"name\"]],false]],\"parameters\":[]}],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"td\"],[10,\"class\",\"sort-direction-cell\"],[8],[0,\"\\n            \"],[6,\"div\"],[11,\"class\",[27,[[26,\"concat\",[\"ui compact selection dropdown sort-direction-dropdown\",[26,\"if\",[[21,1,[\"hide\"]],\" disabled\"],null],[26,\"if\",[[21,1,[\"isHasMany\"]],\" hidden\"],null]],null]]]],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"default text\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-none\"],null],false],[9],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"0\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-none\"],null],false],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"1\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-asc\"],null],false],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"-1\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-desc\"],null],false],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[6,\"td\"],[11,\"class\",[27,[[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n            \"],[6,\"div\"],[11,\"class\",[27,[\"ui input \",[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n              \"],[1,[26,\"input\",null,[[\"size\",\"class\",\"value\"],[\"2\",[26,\"concat\",[\"sort-priority-input\",[26,\"unless\",[[21,1,[\"sortOrder\"]],\" hidden\"],null]],null],[21,1,[\"sortPriority\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"td\"],[11,\"class\",[27,[[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n            \"],[6,\"div\"],[11,\"class\",[27,[\"ui input \",[26,\"if\",[[26,\"or\",[[21,1,[\"hide\"]],[26,\"or\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],[26,\"or\",[[21,1,[\"fixed\"]],[26,\"not\",[[22,[\"model\",\"saveColWidthState\"]]],null]],null]],null]],null],\"disabled\"],null]]]],[8],[0,\"\\n              \"],[1,[26,\"input\",null,[[\"size\",\"class\",\"value\"],[\"2\",\"column-width-input\",[21,1,[\"columnWidth\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"tfoot\"],[10,\"class\",\"full-width\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[8],[0,\"\\n          \"],[6,\"th\"],[10,\"colspan\",\"6\"],[8],[0,\"\\n            \"],[1,[26,\"flexberry-checkbox\",null,[[\"label\",\"value\"],[[26,\"t\",[\"components.colsconfig-dialog-content.det-separate-cols\"],null],[22,[\"model\",\"exportParams\",\"detSeparateCols\"]]]]],false],[0,\"\\n            \"],[1,[26,\"flexberry-checkbox\",null,[[\"label\",\"value\"],[[26,\"t\",[\"components.colsconfig-dialog-content.det-separate-rows\"],null],[22,[\"model\",\"exportParams\",\"detSeparateRows\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"tr\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],\"hidden\"],null]]]],[8],[0,\"\\n        \"],[6,\"th\"],[10,\"colspan\",\"5\"],[10,\"style\",\"text-align:right\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.col-width-on\"],null],false],[9],[0,\"\\n          \"],[6,\"th\"],[8],[0,\"\\n            \"],[1,[26,\"flexberry-checkbox\",null,[[\"class\",\"value\"],[\"toggle\",[22,[\"model\",\"saveColWidthState\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"tr\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],\"hidden\"],null]]]],[8],[0,\"\\n        \"],[6,\"th\"],[10,\"colspan\",\"5\"],[10,\"style\",\"text-align:right\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.per-page\"],null],false],[9],[0,\"\\n          \"],[6,\"th\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui input\"],[8],[0,\"\\n              \"],[1,[26,\"input\",null,[[\"size\",\"class\",\"value\"],[\"2\",\"per-page-input\",[22,[\"model\",\"perPageValue\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"tr\"],[8],[0,\"\\n          \"],[6,\"th\"],[10,\"colspan\",\"4\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui action input\"],[8],[0,\"\\n              \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"input\",\"setting-name-input\",[22,[\"model\",\"settingName\"]],[26,\"t\",[\"components.colsconfig-dialog-content.enter-setting-name\"],null]]]],false],[0,\"\\n              \"],[6,\"div\"],[11,\"class\",[27,[\"ui small button cols-config-save\",[26,\"if\",[[26,\"is-blank\",[[22,[\"model\",\"settingName\"]]],null],\" disabled\"],null]]]],[3,\"action\",[[21,0,[]],\"saveColsSetting\"]],[8],[0,\"\\n                \"],[1,[26,\"t\",[\"components.colsconfig-dialog-content.save\"],null],false],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"th\"],[10,\"colspan\",\"2\"],[8],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"ui right floated button cols-config-apply\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"apply\"]],[8],[1,[26,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],[26,\"t\",[\"components.colsconfig-dialog-content.export\"],null],[26,\"t\",[\"components.colsconfig-dialog-content.use\"],null]],null],false],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[1,[26,\"ui-message\",null,[[\"type\",\"closeable\",\"visible\",\"caption\",\"message\"],[[22,[\"type\"]],[22,[\"closeable\"]],[22,[\"visible\"]],[22,[\"caption\"]],[22,[\"message\"]]]]],false],[0,\"\\n    \"],[6,\"a\"],[10,\"class\",\"hidden download-anchor\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/colsconfig-dialog-content.hbs" } });
});
define("ember-app/templates/components/filters-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "29gExrEX", "block": "{\"symbols\":[\"column\"],\"statements\":[[6,\"div\"],[10,\"class\",\"ui equal width form\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-colsconfig content\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"filterColumns\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"fields object-list-view-filters\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n          \"],[1,[26,\"flexberry-textbox\",null,[[\"value\",\"readonly\"],[[21,1,[\"header\"]],true]]],false],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"filter\",\"conditions\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"flexberry-dropdown\",null,[[\"value\",\"items\",\"displayCaptions\",\"class\",\"placeholder\",\"needChecksOnValue\",\"onChange\"],[[21,1,[\"filter\",\"condition\"]],[21,1,[\"filter\",\"conditions\"]],[26,\"not\",[[26,\"is-array\",[[21,1,[\"filter\",\"conditions\"]]],null]],null],\"compact fluid\",[26,\"t\",[\"components.object-list-view.filter-condition\"],null],false,[26,\"action\",[[21,0,[]],\"filterConditionChanged\",[21,1,[\"filter\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"filter\",\"component\",\"name\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"component\",[[21,1,[\"filter\",\"component\",\"name\"]]],[[\"value\",\"readonly\",\"dynamicProperties\"],[[21,1,[\"filter\",\"pattern\"]],[26,\"or\",[[26,\"eq\",[[21,1,[\"filter\",\"condition\"]],\"empty\"],null],[26,\"eq\",[[21,1,[\"filter\",\"condition\"]],\"nempty\"],null]],null],[21,1,[\"filter\",\"component\",\"properties\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"],[4,\"if\",[[21,1,[\"filter\",\"component\",\"name\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui icon button\"],[11,\"title\",[26,\"t\",[\"components.filters-dialog-content.clear-this-filter\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearFilterField\",[21,1,[\"filter\"]]]],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"trash icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"ui right floated primary button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"applyFilters\"]],[8],[1,[26,\"t\",[\"components.filters-dialog-content.apply\"],null],false],[9],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"ui right floated basic button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearFiltersFields\"]],[8],[1,[26,\"t\",[\"components.filters-dialog-content.clear\"],null],false],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/filters-dialog-content.hbs" } });
});
define("ember-app/templates/components/flexberry-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mvcSYV1F", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,[\"_hasIcon\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[11,\"class\",[27,[[20,\"iconClass\"]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"_hasCaption\"]]],null,{\"statements\":[[0,\"  \"],[1,[20,\"caption\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-button.hbs" } });
});
define("ember-app/templates/components/flexberry-checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1GCTybNL", "block": "{\"symbols\":[],\"statements\":[[6,\"input\"],[10,\"class\",\"flexberry-checkbox-input\"],[10,\"type\",\"checkbox\"],[8],[9],[0,\"\\n\"],[6,\"label\"],[10,\"class\",\"flexberry-checkbox-label\"],[8],[1,[20,\"label\"],false],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-checkbox.hbs" } });
});
define("ember-app/templates/components/flexberry-colorpicker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l+b7fh5t", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"input\",null,[[\"class\",\"type\",\"value\"],[[22,[\"flexberryClassNames\",\"input\"]],\"hidden\",[26,\"get\",[[21,0,[]],\"value\"],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-colorpicker.hbs" } });
});
define("ember-app/templates/components/flexberry-ddau-checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OMEA8vmn", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"input\",null,[[\"class\",\"type\",\"checked\"],[[22,[\"flexberryClassNames\",\"checkboxInput\"]],\"checkbox\",[26,\"get\",[[21,0,[]],\"value\"],null]]]],false],[0,\"\\n\"],[6,\"label\"],[11,\"class\",[22,[\"flexberryClassNames\",\"checkboxCaption\"]],null],[8],[0,\"\\n  \"],[1,[20,\"caption\"],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-ddau-checkbox.hbs" } });
});
define("ember-app/templates/components/flexberry-ddau-slider", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oj7SPP65", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"ui-slider\",null,[[\"value\",\"defaultValue\",\"min\",\"max\",\"step\",\"disabled\",\"immediateResponse\",\"tooltip\"],[[26,\"get\",[[21,0,[]],\"value\"],null],[22,[\"defaultValue\"]],[22,[\"min\"]],[22,[\"max\"]],[22,[\"step\"]],[22,[\"readonly\"]],false,\"hide\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-ddau-slider.hbs" } });
});
define("ember-app/templates/components/flexberry-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XkEBnmCX", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"i\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"closeButton\"]],\" close icon\"]]],[8],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"header\"]],\" header\"]]],[8],[0,\"\\n  \"],[1,[20,\"caption\"],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"content\"]],\" content \",[20,\"contentClass\"]]]],[8],[0,\"\\n  \"],[1,[20,\"content\"],false],[0,\"\\n  \"],[13,1],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"toolbar\"]],\" actions\"]]],[8],[0,\"\\n  \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"caption\"],[[26,\"concat\",[[22,[\"flexberryClassNames\",\"approveButton\"]],\" approve positive\"],null],[22,[\"approveButtonCaption\"]]]]],false],[0,\"\\n  \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"caption\"],[[26,\"concat\",[[22,[\"flexberryClassNames\",\"cancelButton\"]],\" deny negative\"],null],[22,[\"denyButtonCaption\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-dialog.hbs" } });
});
define("ember-app/templates/components/flexberry-dropdown", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tq7mMRS2", "block": "{\"symbols\":[\"key\",\"itemValue\",\"&default\"],\"statements\":[[4,\"if\",[[22,[\"isSearch\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"isSearchReadOnly\"]]],null,{\"statements\":[[0,\"    \"],[6,\"input\"],[10,\"class\",\"search\"],[10,\"autocomplete\",\"off\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"input\"],[10,\"class\",\"search\"],[10,\"autocomplete\",\"off\"],[10,\"readonly\",\"\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"unless\",[[22,[\"value\"]],\"default\"],null],\" text\"]]],[8],[1,[20,\"text\"],false],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[\"menu \",[26,\"if\",[[22,[\"canFixElement\"]],[22,[\"fixedElementClass\"]]],null]]]],[8],[0,\"\\n  \"],[13,3],[0,\"\\n\"],[4,\"each\",[[26,\"-each-in\",[[22,[\"items\"]]],null]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[11,\"class\",[27,[\"item \",[26,\"if\",[[26,\"eq\",[[22,[\"value\"]],[26,\"if\",[[22,[\"displayCaptions\"]],[21,1,[]],[21,2,[]]],null]],null],\"active selected\"],null]]]],[11,\"data-value\",[27,[[21,1,[]]]]],[8],[1,[21,2,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-dropdown.hbs" } });
});
define("ember-app/templates/components/flexberry-error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5vSW4OmB", "block": "{\"symbols\":[\"e\",\"e\",\"err\"],\"statements\":[[4,\"if\",[[22,[\"error\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"modal\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"useOkButton\",\"useCloseButton\",\"settings\"],[[26,\"t\",[\"components.flexberry-error.caption\"],null],[22,[\"useOkButton\"]],[22,[\"useCloseButton\"]],[26,\"hash\",null,[[\"context\",\"onHidden\"],[[22,[\"modalContext\"]],[26,\"action\",[[21,0,[]],\"close\"],null]]]]]],{\"statements\":[[0,\"      \"],[6,\"h2\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"_errorIsArray\"]],[22,[\"_messageIsNotSpecified\"]]],null]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"ui bulleted list\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"error\"]]],null,{\"statements\":[[4,\"if\",[[26,\"eq\",[[21,3,[\"state\"]],\"rejected\"],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[1,[21,3,[\"reason\",\"message\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"error\",\"messageLocaleKey\"]]],null,{\"statements\":[[0,\"          \"],[1,[26,\"t\",[[22,[\"error\",\"messageLocaleKey\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"error\",\"message\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,[\"error\",\"message\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[26,\"t\",[\"components.flexberry-error.unknown-error\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"error\",\"errors\"]]],null,{\"statements\":[[4,\"flexberry-toggler\",null,[[\"caption\"],[[26,\"t\",[\"components.flexberry-error.show-more\"],null]]],{\"statements\":[[4,\"each\",[[22,[\"error\",\"errors\"]]],null,{\"statements\":[[0,\"            \"],[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\"],[4,\"if\",[[21,2,[\"messageLocaleKey\"]]],null,{\"statements\":[[0,\"                \"],[1,[26,\"t\",[[21,2,[\"messageLocaleKey\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[21,2,[\"message\"]]],null,{\"statements\":[[0,\"                \"],[1,[21,2,[\"message\"]],false],[0,\"\\n              \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n            \"],[6,\"pre\"],[8],[1,[21,2,[\"stack\"]],false],[9],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"ui-message\",null,[[\"type\",\"onHide\",\"closeable\"],[\"negative\",[26,\"action\",[[21,0,[]],\"close\"],null],true]],{\"statements\":[[0,\"      \"],[6,\"h2\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"error\",\"messageLocaleKey\"]]],null,{\"statements\":[[0,\"          \"],[1,[26,\"t\",[[22,[\"error\",\"messageLocaleKey\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"error\",\"message\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,[\"error\",\"message\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[26,\"t\",[\"components.flexberry-error.unknown-error\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"error\",\"errors\"]]],null,{\"statements\":[[4,\"flexberry-toggler\",null,[[\"caption\"],[[26,\"t\",[\"components.flexberry-error.show-more\"],null]]],{\"statements\":[[4,\"each\",[[22,[\"error\",\"errors\"]]],null,{\"statements\":[[0,\"            \"],[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"messageLocaleKey\"]]],null,{\"statements\":[[0,\"                \"],[1,[26,\"t\",[[21,1,[\"messageLocaleKey\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[21,1,[\"message\"]]],null,{\"statements\":[[0,\"                \"],[1,[21,1,[\"message\"]],false],[0,\"\\n              \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n            \"],[6,\"pre\"],[8],[1,[21,1,[\"stack\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-error.hbs" } });
});
define("ember-app/templates/components/flexberry-field", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LsW173fo", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"label\"]]],null,{\"statements\":[[6,\"label\"],[8],[1,[20,\"label\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[1,[26,\"flexberry-textbox\",null,[[\"class\",\"type\",\"value\",\"readonly\",\"required\",\"placeholder\",\"maxlength\"],[[22,[\"class\"]],[22,[\"type\"]],[22,[\"value\"]],[26,\"if\",[[22,[\"readonly\"]],\"readonly\"],null],[22,[\"required\"]],[22,[\"placeholder\"]],[22,[\"maxlength\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-field.hbs" } });
});
define("ember-app/templates/components/flexberry-file", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8zzgeqy0", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[11,\"class\",[27,[\"ui \",[20,\"inputClass\"],\" action input\"]]],[8],[0,\"\\n  \"],[6,\"input\"],[10,\"name\",\"files[]\"],[11,\"accept\",[20,\"accept\"],null],[11,\"id\",[20,\"_fileInputId\"],null],[10,\"class\",\"flexberry-file-file-input\"],[10,\"style\",\"display:none\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n\"],[0,\"  \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"readonly\",\"placeholder\",\"value\"],[\"text\",\"flexberry-file-filename-input\",\"readonly\",[22,[\"placeholder\"]],[26,\"get\",[[21,0,[]],\"_fileName\"],null]]]],false],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"_addButtonIsVisible\"]]],null,{\"statements\":[[0,\"      \"],[6,\"label\"],[11,\"class\",[27,[\"flexberry-file-add-button ui icon \",[20,\"buttonClass\"],\" \",[26,\"unless\",[[22,[\"_addButtonIsEnabled\"]],\"disabled\"],null],\" \",[26,\"if\",[[22,[\"_hasFile\"]],\"hidden\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-file.add-button-title\"],null],null],[11,\"for\",[20,\"_fileInputId\"],null],[3,\"action\",[[21,0,[]],\"addButtonClick\"],[[\"on\",\"preventDefault\"],[\"click\",false]]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"add outline square icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"_removeButtonIsVisible\"]]],null,{\"statements\":[[0,\"      \"],[6,\"label\"],[11,\"class\",[27,[\"flexberry-file-remove-button ui icon \",[20,\"buttonClass\"],\" \",[26,\"unless\",[[22,[\"_removeButtonIsEnabled\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-file.remove-button-title\"],null],null],[3,\"action\",[[21,0,[]],\"removeButtonClick\"],[[\"on\",\"preventDefault\"],[\"click\",false]]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"trash outline icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"_uploadButtonIsVisible\"]]],null,{\"statements\":[[0,\"      \"],[6,\"label\"],[11,\"class\",[27,[\"flexberry-file-upload-button ui icon \",[20,\"buttonClass\"],\" \",[26,\"unless\",[[22,[\"_uploadButtonIsEnabled\"]],\"disabled\"],null],\" \",[26,\"if\",[[22,[\"_uploadIsInProgress\"]],\"loading\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-file.upload-button-title\"],null],null],[3,\"action\",[[21,0,[]],\"uploadButtonClick\"],[[\"on\",\"preventDefault\"],[\"click\",false]]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"upload icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[22,[\"_downloadButtonIsVisible\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[11,\"class\",[27,[\"flexberry-file-download-button ui icon \",[20,\"buttonClass\"],\" \",[26,\"unless\",[[22,[\"_downloadButtonIsEnabled\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-file.download-button-title\"],null],null],[3,\"action\",[[21,0,[]],\"downloadButtonClick\"],[[\"on\",\"preventDefault\"],[\"click\",false]]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"download outline icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"showPreview\"]],[22,[\"_hasFile\"]]],null]],null,{\"statements\":[[4,\"if\",[[22,[\"_canLoadPreview\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"flexberry-file-image-preview-wrapper ui segment\"],[3,\"action\",[[21,0,[]],\"viewLoadedImage\"]],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"_previewDownloadIsInProgress\"]]],null,{\"statements\":[[0,\"        \"],[6,\"img\"],[10,\"class\",\"flexberry-file-image-preview ui small centered image\"],[11,\"src\",[20,\"_previewImageAsBase64String\"],null],[11,\"alt\",[26,\"t\",[\"components.flexberry-file.preview-image-alternative-text\"],null],null],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[6,\"div\"],[11,\"class\",[27,[\"ui \",[26,\"if\",[[22,[\"_previewDownloadIsInProgress\"]],\"active\",\"disabled\"],null],\" loader\"]]],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"span\"],[8],[1,[20,\"_fileName\"],false],[9],[0,\" \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[1,[20,\"_errorPreviewCaption\"],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[6,\"div\"],[10,\"class\",\"flexberry-file-download-iframes-container\"],[10,\"style\",\"display: none;\"],[8],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog ui tiny modal\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n    \"],[1,[20,\"_errorModalDialogCaption\"],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"content\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog-content\"],[8],[0,\"\\n      \"],[1,[20,\"_errorModalDialogContent\"],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog-button actions\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui button primary flexberry-file-error-modal-dialog-ok-button approve\"],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"checkmark icon\"],[8],[9],[0,\"\\n      \"],[1,[26,\"t\",[\"components.flexberry-file.error-dialog-ok-button-caption\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-file.hbs" } });
});
define("ember-app/templates/components/flexberry-groupedit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3nYe/BLG", "block": "{\"symbols\":[\"@configurateSelectedRows\",\"@configurateRow\",\"@addColumnToSorting\",\"@sortByColumn\"],\"statements\":[[1,[26,\"groupedit-toolbar\",null,[[\"componentName\",\"readonly\",\"buttonClass\",\"createNewButton\",\"deleteButton\",\"defaultSettingsButton\",\"confirmDeleteRows\",\"sorting\",\"customButtonAction\",\"customButtons\",\"orderedProperty\"],[[22,[\"componentName\"]],[22,[\"readonly\"]],[22,[\"buttonClass\"]],[22,[\"createNewButton\"]],[22,[\"deleteButton\"]],[22,[\"defaultSettingsButton\"]],[22,[\"confirmDeleteRows\"]],[22,[\"sorting\"]],[26,\"action\",[[21,0,[]],\"customButtonAction\"],null],[22,[\"customButtons\"]],[22,[\"orderedProperty\"]]]]],false],[0,\"\\n\"],[1,[26,\"object-list-view\",null,[[\"class\",\"orderedProperty\",\"placeholder\",\"readonly\",\"buttonClass\",\"tableStriped\",\"columnsWidthAutoresize\",\"minAutoColumnWidth\",\"customTableClass\",\"cellComponent\",\"singleColumnCellComponent\",\"singleColumnHeaderTitle\",\"showValidationMessagesInRow\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showDeleteButtonInRow\",\"showEditMenuItemInRow\",\"showDeleteMenuItemInRow\",\"sendMenuItemAction\",\"menuInRowAdditionalItems\",\"rowClickable\",\"orderable\",\"editOnSeparateRoute\",\"saveBeforeRouteLeave\",\"sorting\",\"modelName\",\"mainModelProjection\",\"modelProjection\",\"content\",\"sortByColumn\",\"addColumnToSorting\",\"action\",\"componentName\",\"allowColumnResize\",\"configurateRow\",\"confirmDeleteRow\",\"configurateSelectedRows\",\"customButtonInRowAction\",\"customButtonsInRow\",\"beforeDeleteRecord\",\"searchForContentChange\",\"immediateDelete\",\"notUseUserSettings\",\"defaultSortingButton\",\"overflowedComponents\",\"fixedHeader\"],[\"groupedit-container\",[22,[\"orderedProperty\"]],[22,[\"placeholder\"]],[22,[\"readonly\"]],[22,[\"buttonClass\"]],[22,[\"tableStriped\"]],[22,[\"columnsWidthAutoresize\"]],[22,[\"minAutoColumnWidth\"]],[22,[\"customTableClass\"]],[22,[\"cellComponent\"]],[22,[\"singleColumnCellComponent\"]],[22,[\"singleColumnHeaderTitle\"]],[22,[\"showValidationMessagesInRow\"]],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditMenuItemInRow\"]],[22,[\"showDeleteMenuItemInRow\"]],[26,\"action\",[[21,0,[]],\"sendMenuItemAction\"],null],[22,[\"menuInRowAdditionalItems\"]],[22,[\"rowClickable\"]],[22,[\"orderable\"]],[22,[\"editOnSeparateRoute\"]],[22,[\"saveBeforeRouteLeave\"]],[22,[\"sorting\"]],[22,[\"modelName\"]],[22,[\"mainModelProjection\"]],[22,[\"modelProjection\"]],[22,[\"content\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,4,[]],[21,4,[]],\"sortByColumn\"],null]],null],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,3,[]],[21,3,[]],\"addColumnToSorting\"],null]],null],[26,\"action\",[[21,0,[]],\"groupEditRowClick\"],null],[22,[\"componentName\"]],[22,[\"allowColumnResize\"]],[21,2,[]],[22,[\"confirmDeleteRow\"]],[21,1,[]],\"customButtonInRowAction\",[22,[\"customButtonsInRow\"]],[22,[\"beforeDeleteRecord\"]],[22,[\"searchForContentChange\"]],false,[22,[\"notUseUserSettings\"]],[22,[\"defaultSortingButton\"]],[22,[\"overflowedComponents\"]],[22,[\"fixedHeader\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-groupedit.hbs" } });
});
define("ember-app/templates/components/flexberry-icon", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NJd17OJB", "block": "{\"symbols\":[\"&default\"],\"statements\":[[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-icon.hbs" } });
});
define("ember-app/templates/components/flexberry-jsonarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MWDUQ/kS", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"_showErrorMessage\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sexteen wide column\"],[8],[0,\"\\n      \"],[1,[26,\"ui-message\",null,[[\"type\",\"closeable\",\"visible\",\"caption\",\"message\",\"onShow\",\"onHide\"],[\"error\",true,[22,[\"_showErrorMessage\"]],[22,[\"_errorMessageCaption\"]],[22,[\"_errorMessage\"]],[26,\"action\",[[21,0,[]],\"onErrorMessageShow\"],null],[26,\"action\",[[21,0,[]],\"onErrorMessageHide\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[26,\"not\",[[22,[\"readonly\"]]],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sexteen wide column\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"iconClass\",\"click\"],[[26,\"concat\",[[22,[\"flexberryClassNames\",\"editButton\"]],\" fluid\",[26,\"if\",[[22,[\"_isEditing\"]],\" positive\"],null]],null],[26,\"if\",[[22,[\"_isEditing\"]],\"checkmark icon\",\"edit icon\"],null],[26,\"action\",[[21,0,[]],\"onEditButtonClick\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"sexteen wide column\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-textarea\",null,[[\"class\",\"placeholder\",\"value\",\"readonly\"],[[26,\"concat\",[[22,[\"flexberryClassNames\",\"textarea\"]],\" fluid\"],null],[22,[\"placeholder\"]],[22,[\"_jsonText\"]],[26,\"not\",[[22,[\"_isEditing\"]]],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-jsonarea.hbs" } });
});
define("ember-app/templates/components/flexberry-lookup", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3vOT51hI", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,[\"dropdown\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"flexberry-dropdown\",null,[[\"placeholder\",\"class\",\"value\",\"readonly\",\"needChecksOnValue\",\"isSearch\",\"isSearchReadOnly\",\"settings\"],[[22,[\"placeholder\"]],[26,\"concat\",[\"search \",[22,[\"dropdownClass\"]]],null],[22,[\"displayValue\"]],[26,\"if\",[[22,[\"readonly\"]],\"readonly\"],null],false,true,[22,[\"dropdownIsSearch\"]],[22,[\"_dropdownSettings\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"data-test-lookup\",\"\"],[11,\"class\",[27,[\"ui \",[26,\"unless\",[[23,1],\"fluid\"],null],\" action input \",[26,\"if\",[[26,\"and\",[[22,[\"readonly\"]],[26,\"not\",[[23,1]],null]],null],\"disabled\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[23,1]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[11,\"class\",[27,[\"ui transparent \",[26,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[22,[\"isBlocked\"]]],null],\"disabled\"],null],\" \",[26,\"if\",[[26,\"or\",[[22,[\"modalIsBeforeToShow\"]],[22,[\"modalIsStartToShow\"]]],null],\"loading\"],null],\" icon input\"]]],[3,\"action\",[[21,0,[]],\"choose\",[22,[\"chooseData\"]]]],[8],[0,\"\\n        \"],[6,\"span\"],[10,\"class\",\"lookup-field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"value\"]]],null,{\"statements\":[[0,\"            \"],[13,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[20,\"placeholder\"],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"          \"],[6,\"i\"],[10,\"class\",\"chevron right icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\",\"focusOut\",\"readonly\"],[\"text\",[26,\"concat\",[\"lookup-field \",[26,\"if\",[[22,[\"autocomplete\"]],\"prompt\"],null]],null],[22,[\"placeholder\"]],[22,[\"displayValue\"]],[26,\"action\",[[21,0,[]],\"onInputFocusOut\"],null],[26,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"autocomplete\"]]],null]],null],\"readonly\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[22,[\"showPreviewButton\"]]],null,{\"statements\":[[4,\"if\",[[26,\"and\",[[22,[\"previewFormRoute\"]],[22,[\"value\"]]],null]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"data-test-lookup-preview\",\"\"],[11,\"class\",[27,[\"ui ui-preview \",[26,\"if\",[[22,[\"isBlocked\"]],\" disabled\"],null],\" \",[20,\"previewButtonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-lookup.preview-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"preview\"]],[8],[0,\"\\n          \"],[1,[20,\"previewText\"],true],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[6,\"button\"],[10,\"data-test-lookup-clear\",\"\"],[11,\"class\",[27,[\"ui ui-clear \",[26,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[22,[\"isBlocked\"]]],null],\" disabled\"],null],\" \",[20,\"removeButtonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-lookup.remove-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"remove\",[22,[\"removeData\"]]]],[8],[0,\"\\n      \"],[1,[20,\"removeText\"],true],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"unless\",[[23,1]],null,{\"statements\":[[0,\"      \"],[6,\"button\"],[10,\"data-test-lookup-change\",\"\"],[11,\"class\",[27,[\"ui ui-change \",[26,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[22,[\"isBlocked\"]]],null],\" disabled\"],null],\" \",[20,\"chooseButtonClass\"],\" \",[26,\"if\",[[26,\"or\",[[22,[\"modalIsBeforeToShow\"]],[22,[\"modalIsStartToShow\"]]],null],\" loading\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-lookup.choose-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"choose\",[22,[\"chooseData\"]]]],[8],[0,\"\\n        \"],[1,[20,\"chooseText\"],true],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[23,1]],null,{\"statements\":[[0,\"  \"],[1,[20,\"_hasBlockSetter\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"autocomplete\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[\"results \",[26,\"if\",[[22,[\"canFixElement\"]],[22,[\"fixedElementClass\"]]],null]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-lookup.hbs" } });
});
define("ember-app/templates/components/flexberry-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SHFekwkQ", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"each\",[[22,[\"items\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"flexberry-menuitem\",null,[[\"tagName\",\"item\",\"settings\"],[\"\",[21,1,[]],[22,[\"settings\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-menu.hbs" } });
});
define("ember-app/templates/components/flexberry-menuitem", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "k9x5caOH", "block": "{\"symbols\":[\"item\",\"button\",\"&default\"],\"statements\":[[4,\"if\",[[22,[\"titleIsBeforeIcon\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"item\",\"localeKey\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[8],[1,[26,\"t\",[[22,[\"item\",\"localeKey\"]]],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"span\"],[8],[1,[22,[\"item\",\"title\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"item\",\"icon\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[11,\"class\",[27,[[22,[\"item\",\"icon\"]]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[26,\"not\",[[22,[\"titleIsBeforeIcon\"]]],null]],null,{\"statements\":[[4,\"if\",[[22,[\"item\",\"localeKey\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[8],[1,[26,\"t\",[[22,[\"item\",\"localeKey\"]]],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"span\"],[8],[1,[22,[\"item\",\"title\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"each\",[[22,[\"item\",\"buttons\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[21,2,[\"buttonClasses\"]],\" button\"]]],[11,\"title\",[21,2,[\"buttonTitle\"]],null],[11,\"disabled\",[21,2,[\"disabled\"]],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"itemButtonAction\",[21,2,[\"buttonAction\"]]],[[\"bubbles\"],[false]]],[8],[0,\"\\n\"],[4,\"if\",[[21,2,[\"iconClass\"]]],null,{\"statements\":[[0,\"        \"],[6,\"i\"],[11,\"class\",[27,[[21,2,[\"iconClass\"]]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[26,\"if\",[[21,2,[\"buttonName\"]],[21,2,[\"buttonName\"]]],null],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[4,\"if\",[[22,[\"hasSubitems\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"item\",\"itemsAlignment\"]],[22,[\"item\",\"itemsAlignment\"]]],null],\" menu\"]]],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"item\",\"items\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-menuitem\",null,[[\"item\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[13,3],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-menuitem.hbs" } });
});
define("ember-app/templates/components/flexberry-objectlistview", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l1ekcxnt", "block": "{\"symbols\":[\"page\",\"@gotoPage\",\"@previousPage\",\"@nextPage\",\"@resetFilters\",\"@configurateSelectedRows\",\"@configurateRow\",\"@filterByAnyMatch\",\"@addColumnToSorting\",\"@sortByColumn\"],\"statements\":[[1,[26,\"olv-toolbar\",null,[[\"class\",\"createNewButton\",\"enableCreateNewButton\",\"refreshButton\",\"deleteButton\",\"colsConfigButton\",\"advLimitButton\",\"enableFilters\",\"exportExcelButton\",\"showFilters\",\"showFiltersInModal\",\"filters\",\"toggleStateFilters\",\"resetFilters\",\"filterButton\",\"filterText\",\"buttonClass\",\"enableDeleteButton\",\"inLookup\",\"componentName\",\"lookupComponentName\",\"modelController\",\"customButtonAction\",\"customButtons\",\"editFormRoute\",\"showConfigDialog\",\"showAdvLimitDialog\",\"confirmDeleteRows\",\"inHierarchicalMode\",\"inExpandMode\",\"availableHierarchicalMode\",\"availableCollExpandMode\",\"switchHierarchicalMode\",\"switchExpandMode\",\"readonly\",\"useSidePageMode\"],[\"ui secondary menu no-margin flexberry-olv-toolbar\",[22,[\"createNewButton\"]],[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"refreshButton\"]],[22,[\"deleteButton\"]],[22,[\"colsConfigButton\"]],[22,[\"advLimitButton\"]],[22,[\"enableFilters\"]],[22,[\"exportExcelButton\"]],[22,[\"_showFilters\"]],[22,[\"showFiltersInModal\"]],[22,[\"filters\"]],[26,\"action\",[[21,0,[]],\"toggleStateFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\",[21,5,[]]],null],[22,[\"filterButton\"]],[22,[\"filterText\"]],[22,[\"buttonClass\"]],[26,\"not\",[[22,[\"readonly\"]]],null],[26,\"eq\",[[22,[\"componentMode\"]],\"lookupform\"],null],[22,[\"componentName\"]],[22,[\"lookupComponentName\"]],[22,[\"currentController\"]],[26,\"action\",[[21,0,[]],\"customButtonAction\"],null],[22,[\"customButtons\"]],[22,[\"editFormRoute\"]],\"showConfigDialog\",\"showConfigDialog\",[22,[\"confirmDeleteRows\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[22,[\"_availableHierarchicalMode\"]],[22,[\"availableCollExpandMode\"]],[26,\"action\",[[21,0,[]],\"switchHierarchicalMode\"],null],[26,\"action\",[[21,0,[]],\"switchExpandMode\"],null],[22,[\"readonly\"]],[22,[\"useSidePageMode\"]]]]],false],[0,\"\\n\"],[1,[26,\"object-list-view\",null,[[\"placeholder\",\"readonly\",\"columnsWidthAutoresize\",\"columnsResizeMode\",\"minAutoColumnWidth\",\"buttonClass\",\"tableStriped\",\"customTableClass\",\"cellComponent\",\"singleColumnCellComponent\",\"singleColumnHeaderTitle\",\"createNewByPrototype\",\"showValidationMessagesInRow\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"showDeleteButtonInRow\",\"showEditMenuItemInRow\",\"showPrototypeMenuItemInRow\",\"showDeleteMenuItemInRow\",\"sendMenuItemAction\",\"menuInRowAdditionalItems\",\"rowClickable\",\"orderable\",\"sorting\",\"immediateDelete\",\"modelName\",\"modelProjection\",\"content\",\"sortByColumn\",\"addColumnToSorting\",\"enableFilters\",\"showFilters\",\"showFiltersInModal\",\"filters\",\"applyFilters\",\"componentForFilter\",\"componentForFilterByCondition\",\"conditionsByType\",\"filterByAnyMatch\",\"filterByAnyWord\",\"filterByAllWords\",\"configurateRow\",\"configurateSelectedRows\",\"confirmDeleteRow\",\"beforeDeleteRecord\",\"action\",\"beforeDeleteAllRecords\",\"componentName\",\"allowColumnResize\",\"selectedRecord\",\"notUseUserSettings\",\"isParentRecordPropertyName\",\"hierarchicalIndent\",\"inHierarchicalMode\",\"inExpandMode\",\"disableHierarchicalMode\",\"loadRecords\",\"availableHierarchicalMode\",\"hierarchyAttribute\",\"useRowByRowLoading\",\"useRowByRowLoadingProgress\",\"eventsBus\",\"onEditForm\",\"customButtonInRowAction\",\"customButtonsInRow\",\"defaultSortingButton\",\"defaultLeftPadding\",\"overflowedComponents\",\"customParameters\",\"fixedHeader\"],[[22,[\"placeholder\"]],[22,[\"readonly\"]],[22,[\"columnsWidthAutoresize\"]],[22,[\"columnsResizeMode\"]],[22,[\"minAutoColumnWidth\"]],[22,[\"buttonClass\"]],[22,[\"tableStriped\"]],[22,[\"customTableClass\"]],[22,[\"cellComponent\"]],[22,[\"singleColumnCellComponent\"]],[22,[\"singleColumnHeaderTitle\"]],[26,\"action\",[[21,0,[]],\"createNewByPrototype\"],null],[26,\"and\",[[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"showValidationMessagesInRow\"]]],null],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditMenuItemInRow\"]],[22,[\"showPrototypeMenuItemInRow\"]],[22,[\"showDeleteMenuItemInRow\"]],[26,\"action\",[[21,0,[]],\"sendMenuItemAction\"],null],[22,[\"menuInRowAdditionalItems\"]],[26,\"and\",[[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"rowClickable\"]]],null],[22,[\"orderable\"]],[22,[\"sorting\"]],true,[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"content\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,10,[]],[21,10,[]],\"sortByColumn\"],null]],null],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,9,[]],[21,9,[]],\"addColumnToSorting\"],null]],null],[22,[\"enableFilters\"]],[22,[\"_showFilters\"]],[22,[\"showFiltersInModal\"]],[22,[\"filters\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[22,[\"applyFilters\"]],[22,[\"applyFilters\"]],\"applyFilters\"],null]],null],[22,[\"componentForFilter\"]],[22,[\"componentForFilterByCondition\"]],[22,[\"conditionsByType\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,8,[]],[21,8,[]],\"filterByAnyMatch\"],null]],null],[22,[\"filterByAnyWord\"]],[22,[\"filterByAllWords\"]],[21,7,[]],[21,6,[]],[22,[\"confirmDeleteRow\"]],[22,[\"beforeDeleteRecord\"]],[26,\"action\",[[21,0,[]],\"objectListViewRowClick\"],null],[22,[\"beforeDeleteAllRecords\"]],[22,[\"componentName\"]],[22,[\"allowColumnResize\"]],[22,[\"selectedRecord\"]],[22,[\"notUseUserSettings\"]],[22,[\"isParentRecordPropertyName\"]],[22,[\"hierarchicalIndent\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[26,\"if\",[[22,[\"hierarchyByAttribute\"]],true,[22,[\"disableHierarchicalMode\"]]],null],[26,\"action\",[[21,0,[]],\"loadRecords\"],null],[26,\"action\",[[21,0,[]],\"availableHierarchicalMode\"],null],[22,[\"hierarchyAttribute\"]],[22,[\"useRowByRowLoading\"]],[22,[\"useRowByRowLoadingProgress\"]],[22,[\"eventsBus\"]],[22,[\"onEditForm\"]],\"customButtonInRowAction\",[22,[\"customButtonsInRow\"]],[22,[\"defaultSortingButton\"]],[22,[\"defaultLeftPadding\"]],[22,[\"overflowedComponents\"]],[22,[\"customParameters\"]],[22,[\"fixedHeader\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"or\",[[26,\"not\",[[22,[\"inHierarchicalMode\"]]],null],[22,[\"hierarchyPaging\"]]],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui secondary menu no-margin nav-bar\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui basic buttons\"],[8],[0,\"\\n      \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[26,\"unless\",[[22,[\"hasPreviousPage\"]],\"disabled\"],null],\" button prev-page-button\"]]],[11,\"disabled\",[26,\"not\",[[22,[\"hasPreviousPage\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"previousPage\",[21,3,[]]]],[8],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"pages\"]]],null,{\"statements\":[[4,\"if\",[[21,1,[\"isEllipsis\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"ui button\"],[8],[0,\"...\"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[21,1,[\"isCurrent\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui disabled active button\"],[10,\"disabled\",\"\"],[10,\"type\",\"button\"],[8],[1,[21,1,[\"number\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"gotoPage\",[21,2,[]],[21,1,[\"number\"]]]],[8],[1,[21,1,[\"number\"]],false],[9],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1]},null],[0,\"      \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[26,\"unless\",[[22,[\"hasNextPage\"]],\"disabled\"],null],\" button next-page-button\"]]],[11,\"disabled\",[26,\"not\",[[22,[\"hasNextPage\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"nextPage\",[21,4,[]]]],[8],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[\"ui input nav-bar-search-page \",[26,\"if\",[[26,\"and\",[[22,[\"searchPageValue\"]],[22,[\"searchPageButtonReadonly\"]]],null],\"error\"],null]]]],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"min\",\"max\",\"placeholder\",\"value\",\"enter\"],[\"number\",[22,[\"_pages\",\"firstObject\",\"number\"]],[22,[\"_pages\",\"lastObject\",\"number\"]],[26,\"t\",[\"components.flexberry-objectlistview.search-page-placeholder\"],null],[22,[\"searchPageValue\"]],[26,\"action\",[[21,0,[]],\"searchPageButtonAction\",[21,2,[]]],null]]]],false],[0,\"\\n\"],[0,\"      \"],[1,[26,\"input\",null,[[\"classNames\"],[[26,\"array\",[\"hidden\"],null]]]],false],[0,\"\\n\"],[4,\"if\",[[22,[\"searchPageValue\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[20,\"buttonClass\"],\" icon button \",[26,\"if\",[[22,[\"searchPageButtonReadonly\"]],\"disabled\",\"primary\"],null],\" goto-page-button small\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-objectlistview.search-button-text\"],null],null],[11,\"disabled\",[20,\"searchPageButtonReadonly\"],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"searchPageButtonAction\",[21,2,[]]]],[8],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"showShowingEntries\"]],[22,[\"recordsTotalCount\"]]],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"showing-entries\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"currentIntervalRecords\"]],[22,[\"recordsTotalCount\"]]],null]],null,{\"statements\":[[0,\"            \"],[1,[26,\"concat\",[[26,\"t\",[\"components.flexberry-objectlistview.showing-entries.showing\"],null],[22,[\"currentIntervalRecords\"]],[26,\"t\",[\"components.flexberry-objectlistview.showing-entries.of\"],null],[22,[\"recordsTotalCount\"]],[26,\"t\",[\"components.flexberry-objectlistview.showing-entries.entries\"],null]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[26,\"flexberry-dropdown\",null,[[\"needChecksOnValue\",\"items\",\"value\",\"class\",\"onChange\",\"settings\"],[false,[22,[\"perPageValues\"]],[22,[\"perPageValue\"]],\"compact selection\",[26,\"action\",[[21,0,[]],\"perPageClick\"],null],[26,\"hash\",null,[[\"direction\"],[\"upward\"]]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-objectlistview.hbs" } });
});
define("ember-app/templates/components/flexberry-sidebar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "caXKP3oK", "block": "{\"symbols\":[\"&default\"],\"statements\":[[13,1]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-sidebar.hbs" } });
});
define("ember-app/templates/components/flexberry-simpledatetime", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9d+haj5T", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[26,\"and\",[[22,[\"currentTypeSupported\"]],[22,[\"useBrowserInput\"]]],null]],null,{\"statements\":[[0,\"  \"],[1,[26,\"input\",[[26,\"-input-type\",[[22,[\"type\"]]],null]],[[\"type\",\"readonly\",\"value\",\"min\",\"max\",\"placeholder\"],[[22,[\"type\"]],[22,[\"readonlyAttr\"]],[22,[\"_valueAsString\"]],[22,[\"_minAsString\"]],[22,[\"_maxAsString\"]],[22,[\"placeholder\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui fluid action input flatpickr\"],[8],[0,\"\\n    \"],[6,\"input\"],[11,\"placeholder\",[20,\"placeholder\"],null],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"openButton\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"readonlyAttr\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui ui-open disabled button\"],[11,\"title\",[26,\"t\",[\"components.flexberry-simpledatetime.apply-button-text\"],null],null],[10,\"disabled\",\"disabled\"],[3,\"action\",[[21,0,[]],\"open\"],[[\"bubbles\"],[false]]],[8],[0,\"\\n          \"],[6,\"i\"],[11,\"class\",[27,[[20,\"type\"],\" icon\"]]],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui ui-open button\"],[11,\"title\",[26,\"t\",[\"components.flexberry-simpledatetime.apply-button-text\"],null],null],[3,\"action\",[[21,0,[]],\"open\"],[[\"bubbles\"],[false]]],[8],[0,\"\\n          \"],[6,\"i\"],[11,\"class\",[27,[[20,\"type\"],\" icon\"]]],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"removeButton\"]]],null,{\"statements\":[[0,\"      \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-clear \",[26,\"if\",[[22,[\"readonlyAttr\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-lookup.remove-button-text\"],null],null],[11,\"disabled\",[20,\"readonlyAttr\"],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"remove\"],[[\"bubbles\"],[false]]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-simpledatetime.hbs" } });
});
define("ember-app/templates/components/flexberry-sitemap-guideline", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1xak9Ju9", "block": "{\"symbols\":[\"node\",\"child\"],\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"link\"]]],null,{\"statements\":[[4,\"link-to\",[[22,[\"sitemap\",\"link\"]]],[[\"title\"],[[22,[\"sitemap\",\"title\"]]]],{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"icon\"]]],null,{\"statements\":[[0,\"        \"],[6,\"i\"],[11,\"class\",[27,[\"icon \",[22,[\"sitemap\",\"icon\"]]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[22,[\"sitemap\",\"caption\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"caption\"]]],null,{\"statements\":[[0,\"    \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"icon\"]]],null,{\"statements\":[[0,\"        \"],[6,\"i\"],[11,\"class\",[27,[\"icon \",[22,[\"sitemap\",\"icon\"]]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[22,[\"sitemap\",\"caption\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"children\",\"length\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"sitemap\",\"children\"]]],null,{\"statements\":[[0,\"          \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"isDropDown\",\"classNames\"],[[21,2,[]],false,\"item\"]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"isDropDown\"],[[21,1,[]],true]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-sitemap-guideline.hbs" } });
});
define("ember-app/templates/components/flexberry-sitemap", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xjagFnhF", "block": "{\"symbols\":[\"node\",\"child\",\"child\"],\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"link\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"isHomeSitemap\"]]],null,{\"statements\":[[4,\"link-to\",[[22,[\"sitemap\",\"link\"]]],[[\"class\",\"title\"],[\"aligned column\",[22,[\"sitemap\",\"title\"]]]],{\"statements\":[[0,\"      \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"sitemap\",\"icon\"]],[22,[\"sitemap\",\"icon\"]]],null],\" icon\"]]],[8],[9],[0,\"\\n      \"],[6,\"div\"],[8],[1,[22,[\"sitemap\",\"caption\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"link-to\",[[22,[\"sitemap\",\"link\"]]],[[\"class\",\"title\"],[\"item\",[22,[\"sitemap\",\"title\"]]]],{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[3,\"action\",[[21,0,[]],\"menuToggle\"]],[8],[1,[22,[\"sitemap\",\"caption\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"caption\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"isHomeSitemap\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"children\",\"length\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"sitemap\",\"children\"]]],null,{\"statements\":[[0,\"        \"],[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\",\"isHomeSitemap\"],[[21,3,[]],[22,[\"isHomeSitemap\"]]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"item item-menu\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[3,\"action\",[[21,0,[]],\"menuToggle\"]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"children\",\"length\"]]],null,{\"statements\":[[0,\"          \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"nodeIsOpen\"]],\"minus\",\"plus\"],null],\" square outline icon\"]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[1,[22,[\"sitemap\",\"caption\"]],false],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"children\",\"length\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"menu subMenu hidden\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"sitemap\",\"children\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\"],[[21,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\",\"isHomeSitemap\"],[[21,1,[]],[22,[\"isHomeSitemap\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-sitemap.hbs" } });
});
define("ember-app/templates/components/flexberry-tab-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FrjfQgWC", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"each\",[[22,[\"items\"]]],null,{\"statements\":[[0,\"  \"],[6,\"a\"],[11,\"class\",[27,[[26,\"concat\",[[22,[\"flexberryClassNames\",\"tab\"]],\" tab item \",[21,1,[\"class\"]],[26,\"if\",[[21,1,[\"active\"]],\" active\"],null]],null]]]],[11,\"title\",[27,[[21,1,[\"caption\"]]]]],[11,\"data-tab\",[27,[[21,1,[\"selector\"]]]]],[3,\"action\",[[21,0,[]],\"change\",[21,1,[]]],[[\"on\"],[\"click\"]]],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"iconClass\"]]],null,{\"statements\":[[0,\"      \"],[6,\"i\"],[11,\"class\",[27,[[26,\"concat\",[[22,[\"flexberryClassNames\",\"tabIcon\"]],\" \",[21,1,[\"iconClass\"]]],null]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[21,1,[\"caption\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-tab-bar.hbs" } });
});
define("ember-app/templates/components/flexberry-text-cell", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KGV1t3GI", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"flexberry-text-cell oveflow-text\"],[11,\"title\",[20,\"titleValue\"],null],[8],[13,1],[1,[20,\"displayValue\"],false],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-text-cell.hbs" } });
});
define("ember-app/templates/components/flexberry-textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "voagFARt", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"textarea\",null,[[\"value\",\"readonly\",\"required\",\"placeholder\",\"rows\",\"cols\",\"disabled\",\"maxlength\",\"selectionEnd\",\"selectionStart\",\"selectionDirection\",\"wrap\",\"autofocus\",\"spellcheck\"],[[22,[\"value\"]],[22,[\"readonly\"]],[22,[\"required\"]],[22,[\"placeholder\"]],[22,[\"rows\"]],[22,[\"cols\"]],[22,[\"disabled\"]],[22,[\"maxlength\"]],[22,[\"selectionEnd\"]],[22,[\"selectionStart\"]],[22,[\"selectionDirection\"]],[22,[\"wrap\"]],[22,[\"autofocus\"]],[22,[\"spellcheck\"]]]]],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-textarea.hbs" } });
});
define("ember-app/templates/components/flexberry-textbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "v7ldaNAJ", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"input\",[[26,\"-input-type\",[[22,[\"type\"]]],null]],[[\"type\",\"value\",\"readonly\",\"required\",\"placeholder\",\"maxlength\"],[[22,[\"type\"]],[26,\"readonly\",[[22,[\"value\"]]],null],\"readonly\",[22,[\"required\"]],[22,[\"placeholder\"]],[22,[\"maxlength\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[26,\"input\",[[26,\"-input-type\",[[22,[\"type\"]]],null]],[[\"type\",\"value\",\"required\",\"placeholder\",\"maxlength\"],[[22,[\"type\"]],[22,[\"value\"]],[22,[\"required\"]],[22,[\"placeholder\"]],[22,[\"maxlength\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-textbox.hbs" } });
});
define("ember-app/templates/components/flexberry-toggler", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hJya+3t/", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[11,\"class\",[27,[\"title \",[26,\"if\",[[22,[\"expanded\"]],\"active\"],null]]]],[8],[0,\"\\n  \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"iconClass\"]],[22,[\"iconClass\"]],\"dropdown icon\"],null]]]],[8],[9],[6,\"span\"],[10,\"class\",\"flexberry-toggler-caption\"],[8],[1,[20,\"currentCaption\"],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[\"content flexberry-toggler-content \",[26,\"if\",[[22,[\"expanded\"]],\"active\"],null]]]],[8],[13,1],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-toggler.hbs" } });
});
define("ember-app/templates/components/flexberry-tree", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "v6waNOY9", "block": "{\"symbols\":[\"node\",\"&default\"],\"statements\":[[13,2],[0,\"\\n\\n\"],[4,\"yield-slot\",[\"header\"],null,{\"statements\":[[4,\"if\",[[22,[\"_hasHeader\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"header\"]]]]],[8],[0,\"\\n      \"],[13,2],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[22,[\"_hasContent\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"nodes\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"flexberry-treenode\",null,[[\"caption\",\"nodes\",\"dynamicProperties\",\"dynamicActions\"],[[21,1,[\"caption\"]],[21,1,[\"nodes\"]],[21,1,[\"dynamicProperties\"]],[21,1,[\"dynamicActions\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"yield-slot\",[\"content\"],null,{\"statements\":[[0,\"    \"],[13,2],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"_isRoot\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"placeholder\"]],\" title\"]]],[8],[0,\"\\n    \"],[1,[20,\"placeholder\"],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[4,\"yield-slot\",[\"footer\"],null,{\"statements\":[[4,\"if\",[[22,[\"_hasFooter\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"footer\"]]]]],[8],[0,\"\\n      \"],[13,2],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-tree.hbs" } });
});
define("ember-app/templates/components/flexberry-treenode", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eNV3j+u7", "block": "{\"symbols\":[\"&default\"],\"statements\":[[13,1],[0,\"\\n\\n\"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"header\"]],\" title\"]]],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"onHeaderClick\"],[[\"preventDefault\"],[false]]],null],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"_hasContent\"]]],null,{\"statements\":[[0,\"      \"],[6,\"i\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"expandCollapseIcon\"]],\" dropdown icon\"]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"i\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"expandCollapseIcon\"]],\" dropdown icon\"]]],[10,\"style\",\"visibility: hidden;\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[1,[20,\"caption\"],false],[0,\"\\n\"],[4,\"yield-slot\",[\"header\"],null,{\"statements\":[[0,\"      \"],[13,1],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[22,[\"flexberryClassNames\",\"content\"]],\" content\"]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"_hasNodes\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"flexberry-tree\",null,[[\"nodes\"],[[22,[\"nodes\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"yield-slot\",[\"content\"],null,{\"statements\":[[0,\"    \"],[13,1],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-treenode.hbs" } });
});
define("ember-app/templates/components/flexberry-validationmessage", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3iBsJkC7", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"error\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-validationmessage.hbs" } });
});
define("ember-app/templates/components/flexberry-validationsummary", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lTfFimHi", "block": "{\"symbols\":[\"error\",\"key\",\"errors\",\"error\"],\"statements\":[[4,\"if\",[[22,[\"header\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"header\"],[8],[1,[20,\"header\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"ul\"],[10,\"class\",\"list\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"_isEmberDataErrors\"]]],null,{\"statements\":[[4,\"each\",[[26,\"-each-in\",[[22,[\"errors\"]]],null]],null,{\"statements\":[[4,\"with\",[[26,\"get\",[[22,[\"errors\"]],[21,2,[]]],null]],null,{\"statements\":[[4,\"if\",[[26,\"is-array\",[[21,3,[]]],null]],null,{\"statements\":[[4,\"each\",[[21,3,[]]],null,{\"statements\":[[0,\"            \"],[6,\"li\"],[8],[1,[21,4,[]],false],[9],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[]},null]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[22,[\"errors\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry-validationsummary.hbs" } });
});
define("ember-app/templates/components/flexberry/validation-summary", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "meIaJyBD", "block": "{\"symbols\":[\"error\"],\"statements\":[[4,\"if\",[[22,[\"header\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"header\"],[8],[1,[20,\"header\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"ul\"],[10,\"class\",\"list\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"errors\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/flexberry/validation-summary.hbs" } });
});
define("ember-app/templates/components/form-load-time-tracker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HveHaWhT", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[26,\"t\",[\"components.form-load-time-tracker.load-time\"],null],false],[0,\": \"],[1,[20,\"loadTime\"],false],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"t\",[\"components.form-load-time-tracker.render-time\"],null],false],[0,\": \"],[1,[20,\"renderTime\"],false],[6,\"br\"],[8],[9],[0,\"\\n\"],[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/form-load-time-tracker.hbs" } });
});
define("ember-app/templates/components/groupedit-toolbar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wDPU/HAr", "block": "{\"symbols\":[\"customButton\"],\"statements\":[[4,\"if\",[[22,[\"createNewButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-add \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.groupedit-toolbar.add-button-text\"],null],null],[11,\"disabled\",[26,\"if\",[[22,[\"readonly\"]],true,null],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"addRow\"]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"plus icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"deleteButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-delete \",[26,\"unless\",[[22,[\"_hasSelectedRows\"]],\"disabled\"],null],\" \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.groupedit-toolbar.delete-button-text\"],null],null],[11,\"disabled\",[26,\"or\",[[26,\"not\",[[22,[\"_hasSelectedRows\"]]],null],[22,[\"readonly\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"deleteRows\"]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"minus icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[26,\"and\",[[22,[\"defaultSettingsButton\"]],[26,\"not\",[[22,[\"orderedProperty\"]]],null]],null]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-clear-settings \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.groupedit-toolbar.clear-settings-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"setDefaultSettings\"]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"configure icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[22,[\"arrowsButtons\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-move-up \",[20,\"buttonClass\"],\" \",[26,\"if\",[[26,\"or\",[[26,\"not\",[[22,[\"_hasSelectedRows\"]]],null],[22,[\"_disableMoveUpButton\"]],[22,[\"readonly\"]]],null],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.groupedit-toolbar.move-up-button-text\"],null],null],[11,\"disabled\",[26,\"or\",[[26,\"not\",[[22,[\"_hasSelectedRows\"]]],null],[22,[\"_disableMoveUpButton\"]],[22,[\"readonly\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"moveRow\",-1]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"arrow up icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-move-down \",[20,\"buttonClass\"],\" \",[26,\"if\",[[26,\"or\",[[26,\"not\",[[22,[\"_hasSelectedRows\"]]],null],[22,[\"_disableMoveDownButton\"]],[22,[\"readonly\"]]],null],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.groupedit-toolbar.move-down-button-text\"],null],null],[11,\"disabled\",[26,\"or\",[[26,\"not\",[[22,[\"_hasSelectedRows\"]]],null],[22,[\"_disableMoveDownButton\"]],[22,[\"readonly\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"moveRow\",1]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"arrow down icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"each\",[[22,[\"customButtons\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[26,\"if\",[[21,1,[\"buttonClasses\"]],[21,1,[\"buttonClasses\"]]],null],\" \",[26,\"if\",[[21,1,[\"iconClasses\"]],\"icon\"],null],\" custom button\"]]],[11,\"title\",[26,\"if\",[[21,1,[\"buttonTitle\"]],[21,1,[\"buttonTitle\"]]],null],null],[11,\"disabled\",[21,1,[\"disabled\"]],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"customButtonAction\",[21,1,[\"buttonAction\"]]]],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"iconClasses\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"i\"],[11,\"class\",[27,[[21,1,[\"iconClasses\"]],\" icon\"]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\t\\t\\t\"],[1,[26,\"if\",[[21,1,[\"buttonName\"]],[21,1,[\"buttonName\"]],[26,\"t\",[\"components.groupedit-toolbar.custom-button-text\"],null]],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/groupedit-toolbar.hbs" } });
});
define("ember-app/templates/components/highload-edit-form-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "B9zrN6nk", "block": "{\"symbols\":[\"item\",\"index\",\"child\",\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"ui two column grid\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"five wide column\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui fixed\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui two column grid highloaded-menu\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"menu\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"highloaded-menu-cell\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"razdelNumeration\"]]],null,{\"statements\":[[0,\"              \"],[6,\"h3\"],[10,\"class\",\"ui header highloaded-menu-number\"],[8],[1,[26,\"increase-number\",[[21,2,[]]],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[6,\"div\"],[8],[0,\"\\n              \"],[6,\"h3\"],[10,\"class\",\"ui header title\"],[8],[1,[21,1,[\"razdelName\"]],false],[9],[0,\"\\n              \"],[6,\"ul\"],[11,\"class\",[26,\"concat\",[\"list\",[26,\"if\",[[21,1,[\"active\"]],\" active\"],null]],null],null],[8],[0,\"\\n\"],[4,\"each\",[[21,1,[\"children\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"li\"],[10,\"class\",\"tab-item-container\"],[8],[0,\"\\n                    \"],[6,\"a\"],[11,\"class\",[26,\"concat\",[\"tab item\",[21,1,[\"class\"]],[26,\"if\",[[21,3,[\"active\"]],\" active\"],null]],null],null],[11,\"title\",[21,3,[\"gruppaPolejVvodaName\"]],null],[11,\"data-tab\",[21,3,[\"selector\"]],null],[3,\"action\",[[21,0,[]],\"change\",[21,3,[]]],[[\"on\"],[\"click\"]]],[8],[0,\"\\n                      \"],[1,[21,3,[\"gruppaPolejVvodaName\"]],false],[0,\"\\n                    \"],[9],[0,\"\\n\"],[4,\"if\",[[21,3,[\"showAsterisk\"]]],null,{\"statements\":[[0,\"                      \"],[6,\"div\"],[10,\"class\",\"cell asterisk-cell\"],[8],[0,\"\\n                        \"],[6,\"i\"],[10,\"class\",\"asterisk small red icon\"],[8],[9],[0,\"\\n                      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                  \"],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"div\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"iconClass\",\"caption\",\"tooltip\",\"readonly\",\"click\"],[\"showAllFormsButton ui empty button show-all\",\"icon-guideline-list icon\",[26,\"t\",[\"components.highload-edit-form-menu.show-all-forms-button\"],null],[26,\"t\",[\"components.highload-edit-form-menu.show-all-forms-button\"],null],[22,[\"readonly\"]],[26,\"action\",[[21,0,[]],\"showAllForms\"],null]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"eleven wide column\"],[8],[0,\"\\n    \"],[13,4],[0,\"\\n    \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"iconClass\",\"caption\",\"readonly\",\"click\"],[\"tabsNavigation primary\",\"icon icon-guideline-navigate-arrow-down\",[26,\"t\",[\"components.highload-edit-form-menu.next-button\"],null],[22,[\"readonly\"]],[26,\"action\",[[21,0,[]],\"showNextGroupForms\"],null]]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-button\",null,[[\"class\",\"iconClass\",\"caption\",\"readonly\",\"click\"],[\"empty tabsNavigation\",\"icon icon-guideline-navigate-arrow-up\",[26,\"t\",[\"components.highload-edit-form-menu.prev-button\"],null],[22,[\"readonly\"]],[26,\"action\",[[21,0,[]],\"showPrevGroupForms\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/highload-edit-form-menu.hbs" } });
});
define("ember-app/templates/components/modal-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XMzlgyZH", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"i\"],[10,\"class\",\"close icon\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"header\"],[8],[1,[20,\"title\"],false],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"viewImageContent\"]],\"image\"],null],\" scrolling content\"]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"viewImageContent\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"ui centered image\"],[8],[13,1],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[13,1],[0,\"\\n\"]],\"parameters\":[]}],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"_toolbarVisible\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"useCloseButton\"]]],null,{\"statements\":[[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui cancel button\"],[10,\"data-dismiss\",\"modal\"],[11,\"title\",[26,\"t\",[\"components.modal-dialog.close-button-text\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.modal-dialog.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"useOkButton\"]]],null,{\"statements\":[[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui positive button\"],[11,\"title\",[26,\"t\",[\"components.modal-dialog.ok-button-text\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.modal-dialog.ok-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/modal-dialog.hbs" } });
});
define("ember-app/templates/components/object-list-view-cell", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "R5ZP7O//", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"oveflow-text\"],[11,\"title\",[20,\"titleValue\"],null],[8],[13,1],[1,[20,\"displayValue\"],false],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/object-list-view-cell.hbs" } });
});
define("ember-app/templates/components/object-list-view-row", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hb3ohx91", "block": "{\"symbols\":[\"record\",\"menuItem\",\"column\",\"index\",\"relation\",\"relation\",\"customButtonInRow\"],\"statements\":[[4,\"if\",[[22,[\"doRenderData\"]]],null,{\"statements\":[[0,\"  \"],[6,\"tr\"],[11,\"class\",[27,[[22,[\"record\",\"rowConfig\",\"customClass\"]],[26,\"if\",[[22,[\"record\",\"selected\"]],\" active\"],null],[26,\"if\",[[22,[\"record\",\"data\",\"hasDirtyAttributes\"]],\" groupedit-new-row\"],null]]]],[8],[0,\"\\n    \"],[6,\"td\"],[11,\"class\",[27,[\"object-list-view-helper-column \",[26,\"unless\",[[22,[\"showHelperColumn\"]],\"hidden\"],null]]]],[11,\"style\",[20,\"defaultPaddingStyle\"],null],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"hidden\"],[8],[1,[22,[\"record\",\"key\"]],false],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"object-list-view-helper-column-cell\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[4,\"if\",[[26,\"and\",[[22,[\"showAsteriskInRow\"]],[22,[\"record\",\"data\",\"hasDirtyAttributes\"]]],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"cell asterisk-cell\"],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"asterisk small red icon\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showCheckBoxInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"cell\"],[8],[0,\"\\n              \"],[1,[26,\"flexberry-checkbox\",null,[[\"readonly\",\"onChange\",\"value\"],[[26,\"or\",[[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeSelected\"]]],null],[22,[\"allSelect\"]]],null],[26,\"action\",[[21,0,[]],[22,[\"selectRow\"]],[22,[\"record\"]]],null],[22,[\"record\",\"selected\"]]]]],false],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showEditButtonInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"cell\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-edit-button \",[20,\"buttonClass\"],\" disabled button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.edit-menu-item-title\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-edit-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.edit-menu-item-title\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"onRowClick\",[22,[\"record\"]],[26,\"hash\",null,[[\"column\",\"columnIndex\",\"rowEdit\"],[null,null,true]]]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showPrototypeButtonInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"cell\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-prototype-button \",[20,\"buttonClass\"],\" disabled button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.prototype-menu-item-title\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"copy icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-prototype-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.prototype-menu-item-title\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"createNewByPrototype\"]],[26,\"get\",[[22,[\"record\"]],\"data.id\"],null]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"copy icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showDeleteButtonInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"cell\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeDeleted\"]]],null]],null]],null,{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-delete object-list-view-row-delete-button \",[20,\"buttonClass\"],\" disabled button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.delete-menu-item-title\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"minus icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-delete object-list-view-row-delete-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.object-list-view.menu-in-row.delete-menu-item-title\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"deleteRow\"]],[22,[\"record\"]]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"minus icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"each\",[[22,[\"customButtonsInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[21,7,[\"buttonClasses\"]],\" button\"]]],[11,\"title\",[26,\"if\",[[21,7,[\"buttonTitle\"]],[21,7,[\"buttonTitle\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"customButtonInRowAction\",[21,7,[\"buttonAction\"]],[22,[\"record\",\"data\"]]]],[8],[0,\"\\n              \"],[6,\"i\"],[11,\"class\",[21,7,[\"buttonIcon\"]],null],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"      \"],[6,\"td\"],[11,\"class\",[27,[\"field \",[26,\"if\",[[26,\"array-contains\",[[22,[\"overflowedComponents\"]],[21,3,[\"cellComponent\",\"componentName\"]]],null],\" overflowed-cell\"],null]]]],[11,\"style\",[26,\"if\",[[26,\"and\",[[26,\"not\",[[21,4,[]]],null],[22,[\"inHierarchicalMode\"]]],null],[22,[\"hierarchicalIndentStyle\"]],[22,[\"defaultPaddingStyle\"]]],null],null],[3,\"action\",[[21,0,[]],\"onRowClick\",[22,[\"record\"]],[26,\"hash\",null,[[\"column\",\"columnIndex\"],[[21,3,[]],[21,4,[]]]]]],[[\"preventDefault\"],[false]]],[8],[0,\"\\n\"],[4,\"if\",[[21,3,[\"cellComponent\",\"componentName\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"inHierarchicalMode\"]]],null,{\"statements\":[[4,\"with\",[[26,\"if\",[[21,3,[\"relationshipPath\"]],[26,\"get\",[[22,[\"record\",\"data\"]],[21,3,[\"relationshipPath\"]]],null],[22,[\"record\",\"data\"]]],null]],null,{\"statements\":[[4,\"component\",[[21,3,[\"cellComponent\",\"componentName\"]]],[[\"dynamicProperties\",\"relatedModel\",\"value\",\"class\",\"readonly\",\"required\",\"componentName\"],[[21,3,[\"cellComponent\",\"componentProperties\"]],[22,[\"record\",\"data\"]],[26,\"mut\",[[26,\"get\",[[22,[\"record\",\"data\"]],[21,3,[\"propName\"]]],null]],null],[26,\"if\",[[26,\"and\",[[22,[\"showValidationMessages\"]],[26,\"get\",[[26,\"get\",[[21,6,[\"validations\",\"attrs\"]],[21,3,[\"attrName\"]]],null],\"isInvalid\"],null]],null],\"error\"],null],[26,\"readonly-cell\",[[22,[\"record\",\"rowConfig\",\"readonlyColumns\"]],[21,3,[\"propName\"]],[22,[\"readonly\"]],[21,3,[\"cellComponent\",\"componentProperties\",\"readonly\"]]],null],[22,[\"required\"]],[26,\"concat\",[\"(\",[22,[\"folvComponentName\"]],\"_\",[21,3,[\"cellComponent\",\"componentName\"]],\"_\",[21,3,[\"propName\"]],\")\"],null]]],{\"statements\":[[4,\"if\",[[26,\"and\",[[26,\"not\",[[21,4,[]]],null],[22,[\"inHierarchicalMode\"]],[26,\"or\",[[22,[\"isParentRecord\"]],[22,[\"hasRecords\"]]],null]],null]],null,{\"statements\":[[0,\"                  \"],[6,\"button\"],[11,\"class\",[27,[\"ui button hierarchy-expand icon mini compact \",[26,\"if\",[[22,[\"_recordsIsLoading\"]],\"loading\"],null],\" \",[20,\"buttonClass\"]]]],[11,\"title\",[26,\"t\",[[26,\"concat\",[\"components.object-list-view.hierarchy-buttons.\",[26,\"if\",[[22,[\"_expanded\"]],\"minus\",\"plus\"],null],\"-button-title\"],null]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[26,\"if\",[[22,[\"recordsLoaded\"]],\"expand\",\"loadChildRecords\"],null]],[[\"bubbles\"],[false]]],[8],[0,\"\\n                    \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"_expanded\"]],\"minus\",\"plus\"],null],\" hierarchy-expand icon\"]]],[8],[9],[0,\"\\n                  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[6]},null]],\"parameters\":[]},{\"statements\":[[4,\"with\",[[26,\"if\",[[21,3,[\"relationshipPath\"]],[26,\"get\",[[22,[\"record\",\"data\"]],[21,3,[\"relationshipPath\"]]],null],[22,[\"record\",\"data\"]]],null]],null,{\"statements\":[[0,\"              \"],[1,[26,\"component\",[[21,3,[\"cellComponent\",\"componentName\"]]],[[\"dynamicProperties\",\"relatedModel\",\"value\",\"class\",\"readonly\",\"required\",\"componentName\",\"canFixElement\"],[[21,3,[\"cellComponent\",\"componentProperties\"]],[22,[\"record\",\"data\"]],[26,\"mut\",[[26,\"get\",[[22,[\"record\",\"data\"]],[21,3,[\"propName\"]]],null]],null],[26,\"if\",[[26,\"and\",[[22,[\"showValidationMessages\"]],[26,\"get\",[[26,\"get\",[[21,5,[\"validations\",\"attrs\"]],[21,3,[\"attrName\"]]],null],\"isInvalid\"],null]],null],\"error\"],null],[26,\"readonly-cell\",[[22,[\"record\",\"rowConfig\",\"readonlyColumns\"]],[21,3,[\"propName\"]],[22,[\"readonly\"]],[21,3,[\"cellComponent\",\"componentProperties\",\"readonly\"]]],null],[22,[\"required\"]],[26,\"concat\",[\"(\",[22,[\"folvComponentName\"]],\"_\",[21,3,[\"cellComponent\",\"componentName\"]],\"_\",[21,3,[\"propName\"]],\")\"],null],[26,\"or\",[[26,\"eq\",[[21,3,[\"cellComponent\",\"componentName\"]],\"flexberry-dropdown\"],null],[26,\"eq\",[[21,3,[\"cellComponent\",\"componentName\"]],\"flexberry-lookup\"],null]],null]]]],false],[0,\"\\n\"],[4,\"if\",[[22,[\"showValidationMessages\"]]],null,{\"statements\":[[0,\"                \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[21,5,[\"validations\",\"attrs\"]],[21,3,[\"attrName\"]]],null],\"message\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[5]},null]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"oveflow-text\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[26,\"not\",[[21,4,[]]],null],[22,[\"inHierarchicalMode\"]],[26,\"or\",[[22,[\"isParentRecord\"]],[22,[\"hasRecords\"]]],null]],null]],null,{\"statements\":[[0,\"              \"],[6,\"button\"],[11,\"class\",[27,[\"ui button hierarchy-expand icon mini compact \",[26,\"if\",[[22,[\"_recordsIsLoading\"]],\"loading\"],null],\" \",[20,\"buttonClass\"]]]],[11,\"title\",[26,\"t\",[[26,\"concat\",[\"components.object-list-view.hierarchy-buttons.\",[26,\"if\",[[22,[\"_expanded\"]],\"minus\",\"plus\"],null],\"-button-title\"],null]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[26,\"if\",[[22,[\"recordsLoaded\"]],\"expand\",\"loadChildRecords\"],null]],[[\"bubbles\"],[false]]],[8],[0,\"\\n                \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"_expanded\"]],\"minus\",\"plus\"],null],\" hierarchy-expand icon\"]]],[8],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[1,[26,\"get-formatted\",[[22,[\"record\",\"data\"]],[21,3,[\"propName\"]]],[[\"dateFormat\",\"moment\"],[[22,[\"dateFormat\"]],[22,[\"moment\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[3,4]},null],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"      \"],[6,\"td\"],[10,\"class\",\"object-list-view-menu\"],[11,\"style\",[20,\"defaultPaddingStyle\"],null],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"right pointing ui icon dropdown button\"],[8],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"list layout icon\"],[8],[9],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showEditMenuItemInRow\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item disabled edit-menu\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.edit-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item edit-menu\"],[3,\"action\",[[21,0,[]],\"onRowClick\",[22,[\"record\"]],[26,\"hash\",null,[[\"column\",\"columnIndex\",\"rowEdit\"],[null,null,true]]]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.edit-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showPrototypeMenuItemInRow\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item disabled prototype-menu\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"copy icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.prototype-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item prototype-menu\"],[3,\"action\",[[21,0,[]],[22,[\"createNewByPrototype\"]],[26,\"get\",[[22,[\"record\"]],\"data.id\"],null]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"copy icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.prototype-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showDeleteMenuItemInRow\"]]],null,{\"statements\":[[4,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeDeleted\"]]],null]],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item disabled delete-menu\"],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"trash icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.delete-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"item delete-menu\"],[3,\"action\",[[21,0,[]],[22,[\"deleteRow\"]],[22,[\"record\"]]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"trash icon\"],[8],[9],[0,\"\\n                  \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.delete-menu-item-title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"each\",[[22,[\"menuInRowAdditionalItems\"]]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[10,\"class\",\"item\"],[3,\"action\",[[21,0,[]],[22,[\"sendMenuItemAction\"]],[21,2,[\"actionName\"]],[22,[\"record\",\"data\"]]]],[8],[0,\"\\n                \"],[6,\"i\"],[11,\"class\",[27,[[21,2,[\"icon\"]]]]],[8],[9],[0,\"\\n                \"],[6,\"span\"],[8],[1,[21,2,[\"title\"]],false],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"_expanded\"]],[22,[\"inHierarchicalMode\"]]],null]],null,{\"statements\":[[4,\"each\",[[22,[\"records\"]]],[[\"key\"],[\"key\"]],{\"statements\":[[0,\"      \"],[1,[26,\"object-list-view-row\",null,[[\"record\",\"columns\",\"readonly\",\"required\",\"showMenuColumn\",\"sendMenuItemAction\",\"menuInRowAdditionalItems\",\"showHelperColumn\",\"defaultRowConfig\",\"showValidationMessages\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"showDeleteButtonInRow\",\"isParentRecordPropertyName\",\"inHierarchicalMode\",\"inExpandMode\",\"loadRecords\",\"doRenderData\",\"rowClick\",\"selectRow\",\"createNewByPrototype\",\"deleteRow\",\"_currentLevel\",\"hierarchicalIndent\",\"defaultLeftPadding\",\"overflowedComponents\",\"folvComponentName\",\"hierarchyLoadedLevel\",\"configurateRow\"],[[21,1,[]],[22,[\"columns\"]],[22,[\"readonly\"]],[22,[\"required\"]],[22,[\"showMenuColumn\"]],[22,[\"sendMenuItemAction\"]],[22,[\"menuInRowAdditionalItems\"]],[22,[\"showHelperColumn\"]],[22,[\"defaultRowConfig\"]],[22,[\"showValidationMessages\"]],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"isParentRecordPropertyName\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[22,[\"loadRecords\"]],[21,1,[\"doRenderData\"]],[22,[\"rowClick\"]],[22,[\"selectRow\"]],[22,[\"createNewByPrototype\"]],[22,[\"deleteRow\"]],[22,[\"_currentLevel\"]],[22,[\"_hierarchicalIndent\"]],[22,[\"defaultLeftPadding\"]],[22,[\"overflowedComponents\"]],[22,[\"folvComponentName\"]],[22,[\"hierarchyLoadedLevel\"]],[22,[\"configurateRow\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/object-list-view-row.hbs" } });
});
define("ember-app/templates/components/object-list-view-single-column-cell", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6A3NQ51M", "block": "{\"symbols\":[\"column\"],\"statements\":[[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[\"field \",[26,\"if\",[[26,\"and\",[[22,[\"showValidationMessages\"]],[26,\"get\",[[26,\"get\",[[22,[\"model\",\"validations\",\"attrs\"]],[21,1,[\"propName\"]]],null],\"isInvalid\"],null]],null],\"error\"],null]]]],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"if\",[[21,1,[\"keyLocale\"]],[26,\"t\",[[21,1,[\"keyLocale\"]]],null],[21,1,[\"header\"]]],null],false],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[\"inline fields \",[26,\"if\",[[26,\"not\",[[22,[\"hasEditableValues\"]]],null],\"readonly\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"cellComponent\",\"componentName\"]]],null,{\"statements\":[[0,\"        \"],[1,[26,\"component\",[[21,1,[\"cellComponent\",\"componentName\"]]],[[\"dynamicProperties\",\"relatedModel\",\"value\",\"readonly\",\"required\"],[[21,1,[\"cellComponent\",\"componentProperties\"]],[22,[\"model\"]],[26,\"mut\",[[26,\"get\",[[22,[\"model\"]],[21,1,[\"propName\"]]],null]],null],[22,[\"readonly\"]],[22,[\"required\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"oveflow-text\"],[8],[0,\"\\n          \"],[1,[26,\"get-formatted\",[[22,[\"model\"]],[21,1,[\"propName\"]]],[[\"dateFormat\",\"moment\"],[[22,[\"dateFormat\"]],[22,[\"moment\"]]]]],false],[0,\" \\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[22,[\"showValidationMessages\"]]],null,{\"statements\":[[0,\"        \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\",\"pointing\"],[[26,\"get\",[[26,\"get\",[[22,[\"model\",\"validations\",\"attrs\"]],[21,1,[\"propName\"]]],null],\"messages\"],null],\"left pointing\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/object-list-view-single-column-cell.hbs" } });
});
define("ember-app/templates/components/object-list-view", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2Q/yz8zG", "block": "{\"symbols\":[\"record\",\"column\",\"column\",\"column\"],\"statements\":[[6,\"table\"],[11,\"class\",[27,[\"object-list-view ui unstackable celled \",[26,\"if\",[[22,[\"readonly\"]],\"readonly\"],null],\" \",[20,\"tableClass\"],\" table\"]]],[8],[0,\"\\n  \"],[6,\"thead\"],[8],[0,\"\\n    \"],[6,\"tr\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"        \"],[6,\"th\"],[10,\"class\",\"object-list-view-operations collapsing\"],[10,\"data-olv-header-property-name\",\"OlvRowToolbar\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showCheckBoxInRow\"]]],null,{\"statements\":[[4,\"if\",[[26,\"not-eq\",[[22,[\"class\"]],\"groupedit-container\"],null]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[11,\"class\",[27,[\"ui check-rows-button \",[20,\"buttonClass\"],\" button \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"checkRowsSettingsItems\"]]],null,{\"statements\":[[0,\"                  \"],[1,[26,\"flexberry-menu\",null,[[\"items\",\"onItemClick\"],[[22,[\"checkRowsSettingsItems\"]],[26,\"action\",[[21,0,[]],\"onCheckRowMenuItemClick\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"              \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[6,\"button\"],[11,\"class\",[27,[\"ui check-all-at-page-button \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.check-all-at-page-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"checkAllAtPage\"]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"check-square-o icon\"],[8],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[26,\"and\",[[22,[\"defaultSortingButton\"]],[26,\"not\",[[22,[\"orderedProperty\"]]],null]],null]],null,{\"statements\":[[0,\"              \"],[6,\"button\"],[11,\"class\",[27,[\"ui clear-sorting-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.clear-sorting-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearSorting\"]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"sort icon\"],[8],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"        \"],[6,\"th\"],[10,\"class\",\"dt-head-left me class\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"headerCellClick\",[21,4,[]]],null],null],[11,\"width\",[21,4,[\"width\"]],null],[8],[0,\"\\n          \"],[6,\"div\"],[11,\"data-olv-header-property-name\",[21,4,[\"propName\"]],null],[11,\"title\",[20,\"sortTitleCompute\"],null],[8],[0,\"\\n            \"],[6,\"span\"],[8],[0,\"\\n\"],[4,\"if\",[[21,4,[\"keyLocale\"]]],null,{\"statements\":[[0,\"              \"],[1,[26,\"t\",[[21,4,[\"keyLocale\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[21,4,[\"header\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[9],[0,\"\\n\"],[4,\"if\",[[21,4,[\"sorted\"]]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[10,\"class\",\"object-list-view-order-icon\"],[8],[0,\"\\n\"],[4,\"if\",[[21,4,[\"sortAscending\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[11,\"title\",[27,[[26,\"t\",[\"components.object-list-view.sort-ascending\"],null]]]],[8],[0,\"\\n                    \"],[1,[21,4,[\"sortNumber\"]],false],[6,\"i\"],[10,\"class\",\"ascending icon\"],[8],[9],[0,\"\\n                  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                  \"],[6,\"div\"],[11,\"title\",[27,[[26,\"t\",[\"components.object-list-view.sort-descending\"],null]]]],[8],[0,\"\\n                    \"],[1,[21,4,[\"sortNumber\"]],false],[6,\"i\"],[10,\"class\",\"descending icon\"],[8],[9],[0,\"\\n                  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"        \"],[6,\"th\"],[10,\"class\",\"object-list-view-menu collapsing\"],[10,\"data-olv-header-property-name\",\"OlvRowMenu\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"tbody\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[26,\"not\",[[22,[\"showFiltersInModal\"]]],null],[22,[\"showFilters\"]]],null]],null,{\"statements\":[[0,\"      \"],[6,\"tr\"],[10,\"class\",\"object-list-view-filters\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[10,\"rowspan\",\"1\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[11,\"style\",[20,\"defaultPaddingStyle\"],null],[10,\"class\",\"overflowed-cell\"],[8],[0,\"\\n\"],[4,\"if\",[[21,3,[\"filter\",\"conditions\"]]],null,{\"statements\":[[0,\"              \"],[1,[26,\"flexberry-dropdown\",null,[[\"displayCaptions\",\"value\",\"items\",\"class\",\"placeholder\",\"needChecksOnValue\",\"onChange\"],[[26,\"not\",[[26,\"is-array\",[[21,3,[\"filter\",\"conditions\"]]],null]],null],[21,3,[\"filter\",\"condition\"]],[21,3,[\"filter\",\"conditions\"]],\"compact fluid\",[26,\"t\",[\"components.object-list-view.filter-condition\"],null],false,[26,\"action\",[[21,0,[]],\"filterConditionChanged\",[21,3,[\"filter\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[10,\"rowspan\",\"1\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"tr\"],[10,\"class\",\"object-list-view-filters\"],[11,\"onkeydown\",[26,\"action\",[[21,0,[]],\"applyFiltersByEnter\"],null],null],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[10,\"rowspan\",\"1\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[11,\"style\",[20,\"defaultPaddingStyle\"],null],[11,\"class\",[27,[[26,\"if\",[[26,\"array-contains\",[[22,[\"overflowedComponents\"]],[21,2,[\"filter\",\"component\",\"name\"]]],null],\"overflowed-cell\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[21,2,[\"filter\",\"component\",\"name\"]]],null,{\"statements\":[[0,\"              \"],[6,\"div\"],[10,\"class\",\"fluid action input ui\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"style\",\"width: 100%\"],[8],[0,\"\\n                  \"],[1,[26,\"component\",[[21,2,[\"filter\",\"component\",\"name\"]]],[[\"value\",\"readonly\",\"dynamicProperties\"],[[21,2,[\"filter\",\"pattern\"]],[26,\"or\",[[26,\"eq\",[[21,2,[\"filter\",\"condition\"]],\"empty\"],null],[26,\"eq\",[[21,2,[\"filter\",\"condition\"]],\"nempty\"],null]],null],[21,2,[\"filter\",\"component\",\"properties\"]]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"ui clear-filter button\"],[11,\"title\",[26,\"t\",[\"components.object-list-view.clear-filter-in-column\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearFilterForColumn\",[21,2,[\"filter\"]]]],[8],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[10,\"rowspan\",\"1\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"unless\",[[22,[\"content\"]]],null,{\"statements\":[[0,\"      \"],[6,\"tr\"],[8],[0,\"\\n        \"],[6,\"td\"],[11,\"colspan\",[27,[[20,\"colspan\"]]]],[10,\"style\",\"text-align:center;\"],[8],[0,\"\\n            \"],[1,[20,\"placeholder\"],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[22,[\"contentWithKeys\"]]],[[\"key\"],[\"key\"]],{\"statements\":[[0,\"        \"],[1,[26,\"object-list-view-row\",null,[[\"record\",\"columns\",\"readonly\",\"required\",\"showMenuColumn\",\"sendMenuItemAction\",\"menuInRowAdditionalItems\",\"showHelperColumn\",\"defaultRowConfig\",\"showValidationMessages\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"showDeleteButtonInRow\",\"showEditMenuItemInRow\",\"showPrototypeMenuItemInRow\",\"showDeleteMenuItemInRow\",\"isParentRecordPropertyName\",\"hierarchicalIndent\",\"inHierarchicalMode\",\"inExpandMode\",\"loadRecords\",\"doRenderData\",\"rowClick\",\"selectRow\",\"createNewByPrototype\",\"deleteRow\",\"customButtonsInRow\",\"customButtonInRowAction\",\"defaultLeftPadding\",\"overflowedComponents\",\"folvComponentName\",\"hierarchyPaging\",\"configurateRow\",\"allSelect\"],[[21,1,[]],[22,[\"columns\"]],[22,[\"readonly\"]],[22,[\"required\"]],[22,[\"showMenuColumn\"]],[22,[\"sendMenuItemAction\"]],[22,[\"menuInRowAdditionalItems\"]],[22,[\"showHelperColumn\"]],[22,[\"defaultRowConfig\"]],[22,[\"showValidationMessagesInRow\"]],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditMenuItemInRow\"]],[22,[\"showPrototypeMenuItemInRow\"]],[22,[\"showDeleteMenuItemInRow\"]],[22,[\"isParentRecordPropertyName\"]],[22,[\"hierarchicalIndent\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[22,[\"loadRecords\"]],[21,1,[\"doRenderData\"]],[26,\"action\",[[21,0,[]],\"rowClick\"],null],[26,\"action\",[[21,0,[]],\"selectRow\"],null],[22,[\"createNewByPrototype\"]],[26,\"action\",[[21,0,[]],\"deleteRow\"],null],[22,[\"customButtonsInRow\"]],\"customButtonInRowAction\",[22,[\"defaultLeftPadding\"]],[22,[\"overflowedComponents\"]],[22,[\"componentName\"]],[22,[\"hierarchyPaging\"]],[22,[\"configurateRow\"]],[22,[\"allSelect\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[22,[\"rowByRowLoadingProgress\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[8],[0,\"\\n          \"],[6,\"td\"],[11,\"colspan\",[27,[[20,\"colspan\"]]]],[10,\"style\",\"text-align:center;\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui active centered inline loader\"],[8],[9],[0,\"\\n            \"],[1,[26,\"t\",[\"components.object-list-view.loading-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/object-list-view.hbs" } });
});
define("ember-app/templates/components/olv-filter-interval", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cGaZ4Ppu", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"style\",\"float: left; width: 45%;\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-textbox\",null,[[\"value\",\"placeholder\",\"dynamicProperties\"],[[22,[\"from\"]],[22,[\"fromPlaceholder\"]],[22,[\"dynProps\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"style\",\"float: right; width: 45%;\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-textbox\",null,[[\"value\",\"placeholder\",\"dynamicProperties\"],[[22,[\"to\"]],[22,[\"toPlaceholder\"]],[22,[\"dynProps\"]]]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/olv-filter-interval.hbs" } });
});
define("ember-app/templates/components/olv-setconfigdialogbutton", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "z0uDzkd+", "block": "{\"symbols\":[],\"statements\":[[6,\"button\"],[10,\"class\",\"ui button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"choose\",[22,[\"chooseData\"]]]],[8],[6,\"i\"],[10,\"class\",\"large setting icon\"],[10,\"title\",\"customize column views\"],[8],[9],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/olv-setconfigdialogbutton.hbs" } });
});
define("ember-app/templates/components/olv-toolbar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LF/DE8lZ", "block": "{\"symbols\":[\"customButton\"],\"statements\":[[4,\"if\",[[22,[\"refreshButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui refresh-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.refresh-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"refresh\"]],[8],[0,\"\\n      \"],[1,[26,\"t\",[\"components.olv-toolbar.refresh-button-text\"],null],false],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"refresh icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"createNewButton\"]]],null,{\"statements\":[[4,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"enableCreateNewButton\"]]],null]],null]],null,{\"statements\":[[0,\"    \"],[6,\"button\"],[11,\"class\",[27,[\"ui create-button \",[20,\"buttonClass\"],\" disabled button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.add-button-text\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"createNew\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.olv-toolbar.add-button-text\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"button\"],[11,\"class\",[27,[\"ui create-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.add-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"createNew\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.olv-toolbar.add-button-text\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"deleteButton\"]]],null,{\"statements\":[[4,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"isDeleteButtonEnabled\"]]],null]],null]],null,{\"statements\":[[0,\"    \"],[6,\"button\"],[11,\"class\",[27,[\"ui delete-button \",[20,\"buttonClass\"],\" disabled button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],false],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"delete icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"button\"],[11,\"class\",[27,[\"ui delete-button \",[20,\"buttonClass\"],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],false],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"delete icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,[\"availableHierarchicalMode\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui button icon hierarchical-button \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"inHierarchicalMode\"]],\"active\"],null]]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.hierarchy-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"switchHierarchicalMode\"]]]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"sitemap icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"availableCollExpandMode\"]]],null,{\"statements\":[[0,\"    \"],[6,\"button\"],[11,\"class\",[27,[\"ui button icon hierarchical-button \",[20,\"buttonClass\"],\" active\"]]],[11,\"title\",[26,\"if\",[[22,[\"inExpandMode\"]],[26,\"t\",[\"components.olv-toolbar.coll-comspres-button-text\"],null],[26,\"t\",[\"components.olv-toolbar.coll-expand-button-text\"],null]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"switchExpandMode\"]]]],[8],[0,\"\\n        \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"inExpandMode\"]],\"compress\",\"expand\"],null],\" icon\"]]],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[22,[\"enableFilters\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[\"ui icon buttons filter-active \",[26,\"if\",[[22,[\"filters\"]],\"show-filter\"],null]]]],[8],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui button \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"showFilters\"]],\"active\"],null]]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.filter-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"showFiltersTool\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"filter icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"filters\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"or\"],[10,\"data-text\",\"•\"],[8],[9],[0,\"\\n      \"],[6,\"button\"],[11,\"class\",[27,[\"ui button removeFilter-button \",[20,\"buttonClass\"]]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.remove-filter-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"resetFilters\"]]]],[8],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"filterButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui action input olv-search\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"block-action-input\"],[8],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"key-down\"],[\"text\",[26,\"t\",[\"components.olv-toolbar.filter-by-any-match-placeholder\"],null],[22,[\"filterByAnyMatchText\"]],\"keyDownFilterAction\"]]],false],[9],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[20,\"buttonClass\"],\" icon button search-button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.search-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"filterByAnyMatch\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[20,\"buttonClass\"],\" icon button clear-search-button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.clear-search-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"removeFilter\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"exportExcelButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui buttons export-config\"],[8],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui button icon export-button \",[20,\"buttonClass\"]]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.export-excel-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"showExportDialog\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"large file excel outline icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[1,[26,\"flexberry-menu\",null,[[\"items\",\"onItemClick\"],[[22,[\"exportExcelItems\"]],[26,\"action\",[[21,0,[]],\"onExportMenuItemClick\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"colsConfigButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui buttons cols-config\"],[8],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui icon button config-button\",[26,\"if\",[[22,[\"colsSettingsItems\"]],\" settings-enabled\",\"\"],null]]]],[11,\"title\",[26,\"t\",[\"components.colsconfig-dialog-content.title\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"showConfigDialog\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"large table icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"colsSettingsItems\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-menu\",null,[[\"items\",\"onItemClick\"],[[22,[\"colsSettingsItems\"]],[26,\"action\",[[21,0,[]],\"onMenuItemClick\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"advLimitButton\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui buttons adv-limit-config\"],[8],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"ui icon button adv-limit-button\"],[11,\"title\",[26,\"t\",[\"components.advlimit-dialog-content.title\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"showAdvLimitDialog\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"large flask icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"advLimitItems\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-menu\",null,[[\"items\",\"onItemClick\"],[[22,[\"advLimitItems\"]],[26,\"action\",[[21,0,[]],\"onLimitMenuItemClick\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[22,[\"customButtons\"]]],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[26,\"if\",[[21,1,[\"buttonClasses\"]],[21,1,[\"buttonClasses\"]]],null],\" button\"]]],[11,\"title\",[26,\"if\",[[21,1,[\"buttonTitle\"]],[21,1,[\"buttonTitle\"]]],null],null],[11,\"disabled\",[21,1,[\"disabled\"]],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"customButtonAction\",[21,1,[\"buttonAction\"]]]],[8],[0,\"\\n\"],[4,\"if\",[[21,1,[\"iconClasses\"]]],null,{\"statements\":[[0,\"        \"],[6,\"i\"],[11,\"class\",[21,1,[\"iconClasses\"]],null],[8],[9],[0,\"\\n        \"],[1,[21,1,[\"buttonName\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[21,1,[\"buttonName\"]]],null,{\"statements\":[[0,\"        \"],[1,[21,1,[\"buttonName\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[26,\"t\",[\"components.olv-toolbar.custom-button-text\"],null],false],[0,\"\\n      \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[6,\"div\"],[10,\"class\",\"olv-toolbar-info-modal-dialog ui small basic modal\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui icon header\"],[8],[0,\"\\n    \"],[6,\"i\"],[10,\"class\",\"olvt icon\"],[8],[9],[0,\"\\n    \"],[1,[20,\"_infoModalDialogCaption\"],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"center aligned ui grid\"],[8],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"ui button icon olv-toolbar-info-modal-dialog-copy-button\"],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.copy\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"copyJSONContent\"]],[8],[0,\"\\n      \"],[1,[26,\"t\",[\"components.olv-toolbar.copy\"],null],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui button approve olv-toolbar-info-modal-dialog-ok-button\"],[8],[0,\"\\n      \"],[1,[26,\"t\",[\"components.olv-toolbar.close\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui field olv-toolbar-info-modal-dialog-content center aligned \"],[8],[0,\"\\n      \"],[6,\"textarea\"],[10,\"cols\",\"80\"],[10,\"rows\",\"20\"],[8],[1,[20,\"_infoModalDialogContent\"],false],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/olv-toolbar.hbs" } });
});
define("ember-app/templates/components/ui-message-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hBG4GtN2", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,[\"caption\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"header\"],[8],[1,[20,\"caption\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"message\"]]],null,{\"statements\":[[0,\"  \"],[6,\"p\"],[8],[1,[20,\"message\"],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/ui-message-content.hbs" } });
});
define("ember-app/templates/components/ui-message", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sX22wWKh", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"icon\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[11,\"class\",[27,[[20,\"icon\"]]]],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"closeable\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[10,\"class\",\"close icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"icon\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"content\"],[8],[0,\"\\n    \"],[14,\"components/ui-message-content\",[]],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[14,\"components/ui-message-content\",[]],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":true}", "meta": { "moduleName": "ember-app/templates/components/ui-message.hbs" } });
});
define("ember-app/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rFWIUbhC", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.error-form.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[8],[0,\"\\n  \"],[6,\"h2\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"nameLocaleKey\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"t\",[[22,[\"model\",\"nameLocaleKey\"]]],null],false],[0,\":\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"model\",\"name\"]]],null,{\"statements\":[[0,\"      \"],[1,[22,[\"model\",\"name\"]],false],[0,\":\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}],[4,\"if\",[[22,[\"model\",\"messageLocaleKey\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"t\",[[22,[\"model\",\"messageLocaleKey\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"model\",\"message\"]]],null,{\"statements\":[[0,\"      \"],[1,[22,[\"model\",\"message\"]],false],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"stack\"]]],null,{\"statements\":[[4,\"flexberry-toggler\",null,[[\"caption\"],[[26,\"t\",[\"forms.error-form.show-more\"],null]]],{\"statements\":[[0,\"      \"],[6,\"pre\"],[8],[1,[22,[\"model\",\"stack\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[22,[\"model\",\"retryRoute\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"model\",\"id\"]]],null,{\"statements\":[[0,\"      \"],[4,\"link-to\",[[22,[\"model\",\"retryRoute\"]],[22,[\"model\",\"id\"]]],[[\"tagName\",\"activeClass\",\"class\"],[\"button\",\"\",\"ui button\"]],{\"statements\":[[1,[26,\"t\",[\"forms.error-form.retry\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[4,\"link-to\",[[22,[\"model\",\"retryRoute\"]]],[[\"tagName\",\"activeClass\",\"class\"],[\"button\",\"\",\"ui button\"]],{\"statements\":[[1,[26,\"t\",[\"forms.error-form.retry\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/error.hbs" } });
});
define("ember-app/templates/filters-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OFAJrn4N", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"filters-dialog-content\",null,[[\"componentName\",\"filterColumns\",\"close\",\"message\"],[[22,[\"model\",\"componentName\"]],[22,[\"model\",\"filterColumns\"]],[26,\"action\",[[21,0,[]],\"closeModalDialog\"],null],[22,[\"message\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/filters-dialog-content.hbs" } });
});
define("ember-app/templates/filters-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AAmZ2lvY", "block": "{\"symbols\":[],\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"sizeClass\",\"close\",\"created\",\"useOkButton\",\"useCloseButton\",\"useSidePageMode\"],[[22,[\"title\"]],\"small\",\"removeModalDialog\",\"createdModalDialog\",false,false,[22,[\"model\",\"useSidePageMode\"]]]],{\"statements\":[[0,\"  \"],[1,[26,\"outlet\",[\"modal-content\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/filters-dialog.hbs" } });
});
define("ember-app/templates/flexberry-file-view-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LR87NL9f", "block": "{\"symbols\":[],\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"useOkButton\",\"close\",\"created\",\"viewImageContent\",\"sizeClass\",\"settings\"],[[22,[\"title\"]],false,\"removeModalDialog\",\"createdModalDialog\",true,[22,[\"sizeClass\"]],[22,[\"settings\"]]]],{\"statements\":[[0,\"  \"],[6,\"img\"],[10,\"class\",\"flexberry-file-view-dialog\"],[11,\"src\",[27,[[20,\"imageSrc\"]]]],[11,\"alt\",[26,\"t\",[\"components.flexberry-file.preview-image-alternative-text\"],null],null],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/flexberry-file-view-dialog.hbs" } });
});
define("ember-app/templates/i-i-s-caseberry-logging-objects-application-log-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7M73W9Z5", "block": "{\"symbols\":[\"currentError\"],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"errorMessages\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"errorMessages\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"ui-message\",null,[[\"type\",\"closeable\",\"title\",\"message\"],[\"error\",true,\"Error occurred\",[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[4,\"unless\",[[26,\"and\",[[22,[\"hasParentRoute\"]],[26,\"not\",[[22,[\"saveBeforeRouteLeave\"]]],null]],null]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[10,\"type\",\"submit\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"unless\",[[26,\"and\",[[22,[\"hasParentRoute\"]],[26,\"not\",[[22,[\"saveBeforeRouteLeave\"]]],null]],null]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-close-button\"],[10,\"type\",\"submit\"],[3,\"action\",[[21,0,[]],\"saveAndClose\"]],[8],[1,[26,\"t\",[\"forms.edit-form.saveAndClose-button-text\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"unless\",[[26,\"and\",[[22,[\"model\",\"isNew\"]],[26,\"or\",[[26,\"not\",[[22,[\"hasParentRoute\"]]],null],[26,\"and\",[[22,[\"hasParentRoute\"]],[22,[\"saveBeforeRouteLeave\"]]],null]],null]],null]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[10,\"type\",\"submit\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[10,\"type\",\"submit\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"category\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"category\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"category\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"category\"]],\"error\",\"\"],null],\"Category\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"eventId\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"eventId\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"eventId\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"eventId\"]],\"error\",\"\"],null],\"Event id\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"priority\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"priority\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"priority\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"priority\"]],\"error\",\"\"],null],\"Priority\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"severity\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"severity\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"severity\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"severity\"]],\"error\",\"\"],null],\"Severity\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"title\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"title\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"title\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"title\"]],\"error\",\"\"],null],\"Title\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n  \"],[6,\"label\"],[8],[0,\"Timestamp\"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"timestamp\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[1,[22,[\"model\",\"errors\",\"timestamp\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\"],[\"datetime-local\",[22,[\"readonly\"]],[22,[\"model\",\"timestamp\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"timestamp\"]],\"error\",\"\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"machineName\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"machineName\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"machineName\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"machineName\"]],\"error\",\"\"],null],\"Machine name\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"appDomainName\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"appDomainName\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"appDomainName\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"appDomainName\"]],\"error\",\"\"],null],\"App domain name\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"processId\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"processId\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"processId\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"processId\"]],\"error\",\"\"],null],\"Process id\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"processName\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"processName\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"processName\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"processName\"]],\"error\",\"\"],null],\"Process name\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"threadName\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"threadName\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"threadName\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"threadName\"]],\"error\",\"\"],null],\"Thread name\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"win32ThreadId\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"win32ThreadId\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"win32ThreadId\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"win32ThreadId\"]],\"error\",\"\"],null],\"Win32 thread id\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"message\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"message\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"message\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"message\"]],\"error\",\"\"],null],\"Message\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"errors\",\"formattedMessage\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"errors\",\"formattedMessage\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"required\",\"value\",\"class\",\"label\"],[[22,[\"readonly\"]],true,[22,[\"model\",\"formattedMessage\"]],[26,\"if\",[[22,[\"model\",\"errors\",\"formattedMessage\"]],\"error\",\"\"],null],\"Formatted message\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-caseberry-logging-objects-application-log-e.hbs" } });
});
define("ember-app/templates/i-i-s-caseberry-logging-objects-application-log-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5vqdwkRi", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-caseberry-logging-objects-application-log-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"content\",\"modelName\",\"modelProjection\",\"editFormRoute\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"sortByColumn\",\"addColumnToSorting\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"beforeDeleteAllRecords\"],[[22,[\"model\"]],\"i-i-s-caseberry-logging-objects-application-log\",[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],false,true,[22,[\"computedSorting\"]],true,[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISLoggingObjectListView\",[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-caseberry-logging-objects-application-log-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LtPS1OFX", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-график-отпуск-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-график-отпуск-e.датаДк-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-график-отпуск-e-датаДк\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаДк\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-график-отпуск-e.период-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-график-отпуск-e-период\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"период\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"период\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"период\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-график-отпуск-e-руководительОр\"],[[22,[\"readonly\"]],[22,[\"model\",\"руководительОр\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"руководительОр\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-график-отпуск-e.руководительОр-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"руководительОр\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-график-отпуск-e-руководительКО\"],[[22,[\"readonly\"]],[22,[\"model\",\"руководительКО\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"руководительКО\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-график-отпуск-e.руководительКО-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"руководительКО\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-график-отпуск-e.отделКадров-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-график-отпуск-e-отделКадров\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"отделКадров\"]],\"отделКадров\",\"ОтделКадровL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-график-отпуск-e.отделКадров-caption\"],null],[22,[\"readonly\"]],\"отделКадровLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"отделКадров\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"отделКадров\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-график-отпуск-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0433\u0440\u0430\u0444\u0438\u043A-\u043E\u0442\u043F\u0443\u0441\u043A-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "As+nLAak", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-график-отпуск-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2ГрафикОтпускL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-график-отпуск-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ASHIHYpu", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-должность-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-должность-e-наименование\"],[[22,[\"readonly\"]],[22,[\"model\",\"наименование\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"наименование\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-должность-e.наименование-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"наименование\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-должность-e-iDДолжности\"],[[22,[\"readonly\"]],[22,[\"model\",\"iDДолжности\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"iDДолжности\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-должность-e.iDДолжности-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"iDДолжности\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-должность-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VxJhqRAW", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-должность-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2ДолжностьL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-должность-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0/J8ZoS4", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-отдел-кадров-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-отдел-кадров-e.сотрудники-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-отдел-кадров-e-сотрудники\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"сотрудники\"]],\"фИО\",true,\"сотрудники\",\"СотрудникиL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-отдел-кадров-e.сотрудники-caption\"],null],[22,[\"readonly\"]],\"сотрудникиLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"сотрудники\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"сотрудники\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-отдел-кадров-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u043E\u0442\u0434\u0435\u043B-\u043A\u0430\u0434\u0440\u043E\u0432-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JE3CuS5i", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-отдел-кадров-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2ОтделКадровL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-отдел-кадров-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "q90BSKdP", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[10,\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-подразделение\",\"true\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.подразделение-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-dropdown\",null,[[\"items\",\"value\",\"class\",\"readonly\"],[[26,\"flexberry-enum\",[\"i-i-s-otdel-kadrov-2-подразделение\"],null],[22,[\"model\",\"подразделение\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"подразделение\"],null],\"isInvalid\"],null],\"error\"],null],[22,[\"readonly\"]]]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"подразделение\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-оклад\"],[[22,[\"readonly\"]],[22,[\"model\",\"оклад\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"оклад\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.оклад-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"оклад\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-фИО\"],[[22,[\"readonly\"]],[22,[\"model\",\"фИО\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"фИО\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.фИО-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"фИО\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-графикРаботы\"],[[22,[\"readonly\"]],[22,[\"model\",\"графикРаботы\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"графикРаботы\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.графикРаботы-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"графикРаботы\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.датаДк-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-датаДк\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаДк\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-ответсвенный\"],[[22,[\"readonly\"]],[22,[\"model\",\"ответсвенный\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"ответсвенный\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.ответсвенный-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"ответсвенный\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-срокЗаключения\"],[[22,[\"readonly\"]],[22,[\"model\",\"срокЗаключения\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"срокЗаключения\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.срокЗаключения-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"срокЗаключения\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.датаПриема-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-датаПриема\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаПриема\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаПриема\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаПриема\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[10,\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-занятость\",\"true\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.занятость-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-dropdown\",null,[[\"items\",\"value\",\"class\",\"readonly\"],[[26,\"flexberry-enum\",[\"i-i-s-otdel-kadrov-2-занятость\"],null],[22,[\"model\",\"занятость\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"занятость\"],null],\"isInvalid\"],null],\"error\"],null],[22,[\"readonly\"]]]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"занятость\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.должность-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-должность\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"должность\"]],\"наименование\",true,\"должность\",\"ДолжностьL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.должность-caption\"],null],[22,[\"readonly\"]],\"должностьLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"должность\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"должность\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.отделКадров-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-приказ-о-приеме-e-отделКадров\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"отделКадров\"]],\"отделКадров\",\"ОтделКадровL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-e.отделКадров-caption\"],null],[22,[\"readonly\"]],\"отделКадровLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"отделКадров\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"отделКадров\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-приказ-о-приеме-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u043F\u0440\u0438\u043A\u0430\u0437-\u043E-\u043F\u0440\u0438\u0435\u043C\u0435-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SkNKdjuw", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-приказ-о-приеме-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2ПриказОПриемеL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-приказ-о-приеме-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "G4JZ0ppM", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сост-штат-рас-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сост-штат-рас-e.период-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-сост-штат-рас-e-период\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"период\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"период\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"период\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-сост-штат-рас-e-руководительКО\"],[[22,[\"readonly\"]],[22,[\"model\",\"руководительКО\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"руководительКО\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сост-штат-рас-e.руководительКО-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"руководительКО\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сост-штат-рас-e.датаДк-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-сост-штат-рас-e-датаДк\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаДк\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-сост-штат-рас-e-главБух\"],[[22,[\"readonly\"]],[22,[\"model\",\"главБух\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"главБух\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сост-штат-рас-e.главБух-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"главБух\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сост-штат-рас-e.отделКадров-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-сост-штат-рас-e-отделКадров\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"отделКадров\"]],\"отделКадров\",\"ОтделКадровL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сост-штат-рас-e.отделКадров-caption\"],null],[22,[\"readonly\"]],\"отделКадровLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"отделКадров\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"отделКадров\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-сост-штат-рас-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0441\u043E\u0441\u0442-\u0448\u0442\u0430\u0442-\u0440\u0430\u0441-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "G2txsRy6", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сост-штат-рас-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2СостШтатРасL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-сост-штат-рас-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LnNmkgNA", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-сотрудники-e-фИО\"],[[22,[\"readonly\"]],[22,[\"model\",\"фИО\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"фИО\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.фИО-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"фИО\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.датаРождения-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-сотрудники-e-датаРождения\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаРождения\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаРождения\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаРождения\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-сотрудники-e-iDСотрудника\"],[[22,[\"readonly\"]],[22,[\"model\",\"iDСотрудника\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"iDСотрудника\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.iDСотрудника-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"iDСотрудника\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-сотрудники-e-пол\"],[[22,[\"readonly\"]],[22,[\"model\",\"пол\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"пол\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.пол-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"пол\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[10,\"data-test-i-i-s-otdel-kadrov-2-сотрудники-e-подразделение\",\"true\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.подразделение-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-dropdown\",null,[[\"items\",\"value\",\"class\",\"readonly\"],[[26,\"flexberry-enum\",[\"i-i-s-otdel-kadrov-2-подразделение\"],null],[22,[\"model\",\"подразделение\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"подразделение\"],null],\"isInvalid\"],null],\"error\"],null],[22,[\"readonly\"]]]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"подразделение\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-сотрудники-e-знаниеЯзыков\"],[[22,[\"readonly\"]],[22,[\"model\",\"знаниеЯзыков\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"знаниеЯзыков\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.знаниеЯзыков-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"знаниеЯзыков\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[10,\"data-test-i-i-s-otdel-kadrov-2-сотрудники-e-образование\",\"true\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.образование-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-dropdown\",null,[[\"items\",\"value\",\"class\",\"readonly\"],[[26,\"flexberry-enum\",[\"i-i-s-otdel-kadrov-2-образование\"],null],[22,[\"model\",\"образование\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"образование\"],null],\"isInvalid\"],null],\"error\"],null],[22,[\"readonly\"]]]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"образование\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-сотрудники-e-гражданство\"],[[22,[\"readonly\"]],[22,[\"model\",\"гражданство\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"гражданство\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.гражданство-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"гражданство\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.должность-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-сотрудники-e-должность\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"должность\"]],\"наименование\",true,\"должность\",\"ДолжностьL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-e.должность-caption\"],null],[22,[\"readonly\"]],\"должностьLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"должность\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"должность\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-сотрудники-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Q5oALXTs", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-сотрудники-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2СотрудникиL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-сотрудники-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ORtias2a", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-таб-уч-р-в-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-таб-уч-р-в-e.датаДк-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-таб-уч-р-в-e-датаДк\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаДк\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-таб-уч-р-в-e-руководитель\"],[[22,[\"readonly\"]],[22,[\"model\",\"руководитель\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"руководитель\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-таб-уч-р-в-e.руководитель-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"руководитель\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-таб-уч-р-в-e.период-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-таб-уч-р-в-e-период\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"период\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"период\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"период\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-таб-уч-р-в-e-исполнитель\"],[[22,[\"readonly\"]],[22,[\"model\",\"исполнитель\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"исполнитель\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-таб-уч-р-в-e.исполнитель-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"исполнитель\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-таб-уч-р-в-e.отделКадров-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-таб-уч-р-в-e-отделКадров\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"отделКадров\"]],\"отделКадров\",\"ОтделКадровL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-таб-уч-р-в-e.отделКадров-caption\"],null],[22,[\"readonly\"]],\"отделКадровLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"отделКадров\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"отделКадров\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-таб-уч-р-в-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431-\u0443\u0447-\u0440-\u0432-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5T/gULPi", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-таб-уч-р-в-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2ТабУчРВL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-таб-уч-р-в-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "92qKOhg5", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-г-о-e-код\"],[[22,[\"readonly\"]],[22,[\"model\",\"код\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"код\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-e.код-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"код\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-г-о-e-колКалДней\"],[[22,[\"readonly\"]],[22,[\"model\",\"колКалДней\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"колКалДней\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-e.колКалДней-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"колКалДней\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-e.датаЗап-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-г-о-e-датаЗап\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаЗап\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаЗап\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаЗап\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-e.датаФакт-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-г-о-e-датаФакт\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаФакт\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаФакт\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаФакт\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-г-о-e-основание\"],[[22,[\"readonly\"]],[22,[\"model\",\"основание\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"основание\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-e.основание-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"основание\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-e.перенос-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-г-о-e-перенос\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"перенос\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"перенос\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"перенос\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-г-о-e-примечание\"],[[22,[\"readonly\"]],[22,[\"model\",\"примечание\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"примечание\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-e.примечание-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"примечание\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-e.сотрудники-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-г-о-e-сотрудники\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"сотрудники\"]],\"фИО\",true,\"сотрудники\",\"СотрудникиL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-e.сотрудники-caption\"],null],[22,[\"readonly\"]],\"сотрудникиLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"сотрудники\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"сотрудники\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-табл-часть-г-о-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0433-\u043E-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "J4F4v8zU", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-г-о-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2ТаблЧастьГОL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-табл-часть-г-о-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fh8/B6Ap", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-код\"],[[22,[\"readonly\"]],[22,[\"model\",\"код\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"код\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.код-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"код\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[10,\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-наименование\",\"true\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.наименование-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-dropdown\",null,[[\"items\",\"value\",\"class\",\"readonly\"],[[26,\"flexberry-enum\",[\"i-i-s-otdel-kadrov-2-подразделение\"],null],[22,[\"model\",\"наименование\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"наименование\"],null],\"isInvalid\"],null],\"error\"],null],[22,[\"readonly\"]]]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"наименование\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-количествоШЕ\"],[[22,[\"readonly\"]],[22,[\"model\",\"количествоШЕ\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"количествоШЕ\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.количествоШЕ-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"количествоШЕ\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-тарифнаяСтавка\"],[[22,[\"readonly\"]],[22,[\"model\",\"тарифнаяСтавка\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"тарифнаяСтавка\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.тарифнаяСтавка-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"тарифнаяСтавка\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-надбавки\"],[[22,[\"readonly\"]],[22,[\"model\",\"надбавки\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"надбавки\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.надбавки-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"надбавки\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-всего\"],[[22,[\"readonly\"]],[22,[\"model\",\"всего\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"всего\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.всего-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"всего\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-примечание\"],[[22,[\"readonly\"]],[22,[\"model\",\"примечание\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"примечание\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.примечание-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"примечание\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-всегоКолШЕ\"],[[22,[\"readonly\"]],[22,[\"model\",\"всегоКолШЕ\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"всегоКолШЕ\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.всегоКолШЕ-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"всегоКолШЕ\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-всегоТС\"],[[22,[\"readonly\"]],[22,[\"model\",\"всегоТС\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"всегоТС\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.всегоТС-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"всегоТС\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-всегоНадбавки\"],[[22,[\"readonly\"]],[22,[\"model\",\"всегоНадбавки\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"всегоНадбавки\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.всегоНадбавки-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"всегоНадбавки\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-итогоВсего\"],[[22,[\"readonly\"]],[22,[\"model\",\"итогоВсего\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"итогоВсего\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.итогоВсего-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"итогоВсего\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.должность-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e-должность\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"должность\"]],\"наименование\",true,\"должность\",\"ДолжностьL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.должность-caption\"],null],[22,[\"readonly\"]],\"должностьLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"должность\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"должность\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441-\u0448-\u0440-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qN1Qmgmb", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2ТаблЧастьСШРL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-табл-часть-с-ш-р-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tpq7mOtI", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-сотруд-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-сотруд-e-наимОбуч\"],[[22,[\"readonly\"]],[22,[\"model\",\"наимОбуч\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"наимОбуч\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-сотруд-e.наимОбуч-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"наимОбуч\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-сотруд-e-квалификация\"],[[22,[\"readonly\"]],[22,[\"model\",\"квалификация\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"квалификация\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-сотруд-e.квалификация-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"квалификация\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-сотруд-e-наимДок\"],[[22,[\"readonly\"]],[22,[\"model\",\"наимДок\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"наимДок\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-сотруд-e.наимДок-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"наимДок\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-сотруд-e-cерия\"],[[22,[\"readonly\"]],[22,[\"model\",\"cерия\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"cерия\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-сотруд-e.cерия-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"cерия\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-сотруд-e-номер\"],[[22,[\"readonly\"]],[22,[\"model\",\"номер\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"номер\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-сотруд-e.номер-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"номер\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-сотруд-e.годОкончания-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-сотруд-e-годОкончания\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"годОкончания\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"годОкончания\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"годОкончания\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-табл-часть-сотруд-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0441\u043E\u0442\u0440\u0443\u0434-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sSxYePNS", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-сотруд-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2ТаблЧастьСотрудL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-табл-часть-сотруд-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ezZ9VURP", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-код\"],[[22,[\"readonly\"]],[22,[\"model\",\"код\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"код\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.код-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"код\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.датаДк-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-датаДк\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаДк\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.явкаНеявка-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-checkbox\",null,[[\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-явкаНеявка\"],[[22,[\"readonly\"]],[22,[\"model\",\"явкаНеявка\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"явкаНеявка\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"явкаНеявка\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-колЯвокПМес\"],[[22,[\"readonly\"]],[22,[\"model\",\"колЯвокПМес\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"колЯвокПМес\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.колЯвокПМес-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"колЯвокПМес\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-колЯвокМес\"],[[22,[\"readonly\"]],[22,[\"model\",\"колЯвокМес\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"колЯвокМес\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.колЯвокМес-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"колЯвокМес\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-часыЗаПМес\"],[[22,[\"readonly\"]],[22,[\"model\",\"часыЗаПМес\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"часыЗаПМес\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.часыЗаПМес-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"часыЗаПМес\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-часыЗаМесяц\"],[[22,[\"readonly\"]],[22,[\"model\",\"часыЗаМесяц\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"часыЗаМесяц\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.часыЗаМесяц-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"часыЗаМесяц\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-кодВидаОплаты\"],[[22,[\"readonly\"]],[22,[\"model\",\"кодВидаОплаты\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"кодВидаОплаты\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.кодВидаОплаты-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"кодВидаОплаты\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-корресСчет\"],[[22,[\"readonly\"]],[22,[\"model\",\"корресСчет\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"корресСчет\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.корресСчет-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"корресСчет\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-дниЧасы\"],[[22,[\"readonly\"]],[22,[\"model\",\"дниЧасы\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"дниЧасы\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.дниЧасы-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"дниЧасы\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-колНеявок\"],[[22,[\"readonly\"]],[22,[\"model\",\"колНеявок\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"колНеявок\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.колНеявок-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"колНеявок\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-изНихПоПричинам\"],[[22,[\"readonly\"]],[22,[\"model\",\"изНихПоПричинам\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"изНихПоПричинам\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.изНихПоПричинам-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"изНихПоПричинам\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-табл-часть-т-у-e-колВыхПразд\"],[[22,[\"readonly\"]],[22,[\"model\",\"колВыхПразд\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"колВыхПразд\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-e.колВыхПразд-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"колВыхПразд\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-табл-часть-т-у-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0442\u0430\u0431\u043B-\u0447\u0430\u0441\u0442\u044C-\u0442-\u0443-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "p8uaII8j", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-табл-часть-т-у-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2ТаблЧастьТУL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-табл-часть-т-у-l.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-e", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0O0se18K", "block": "{\"symbols\":[],\"statements\":[[6,\"h3\"],[10,\"class\",\"ui header\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-увольнение-e.caption\"],null],false],[9],[0,\"\\n\\n\"],[6,\"form\"],[10,\"class\",\"ui form flexberry-vertical-form\"],[10,\"role\",\"form\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-edit-panel\"],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"readonly\"]]],null,{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"ui button save-button\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"forms.edit-form.save-button-text\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"unless\",[[22,[\"model\",\"isNew\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[10,\"class\",\"ui button save-del-button\"],[3,\"action\",[[21,0,[]],\"delete\"]],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.edit-form.delete-button-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"button\"],[10,\"class\",\"ui button close-button\"],[3,\"action\",[[21,0,[]],\"close\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.edit-form.close-button-text\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field flexberry-validationsummary-container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"sixteen wide\"],[8],[0,\"\\n      \"],[1,[26,\"flexberry-validationsummary\",null,[[\"errors\"],[[26,\"get\",[[22,[\"validationObject\",\"validations\"]],\"messages\"],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-увольнение-e.датаУвольнения-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-увольнение-e-датаУвольнения\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаУвольнения\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаУвольнения\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаУвольнения\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-увольнение-e.датаДк-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-simpledatetime\",null,[[\"type\",\"readonly\",\"value\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-увольнение-e-датаДк\"],[\"date\",[22,[\"readonly\"]],[22,[\"model\",\"датаДк\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"датаДк\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-увольнение-e-основание\"],[[22,[\"readonly\"]],[22,[\"model\",\"основание\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"основание\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-увольнение-e.основание-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"основание\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[1,[26,\"flexberry-field\",null,[[\"readonly\",\"value\",\"class\",\"label\",\"data-test-i-i-s-otdel-kadrov-2-увольнение-e-ответственный\"],[[22,[\"readonly\"]],[22,[\"model\",\"ответственный\"]],[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"ответственный\"],null],\"isInvalid\"],null],\"error\"],null],[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-увольнение-e.ответственный-caption\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"ответственный\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-увольнение-e.сотрудники-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"displayAttributeName\",\"autocomplete\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-увольнение-e-сотрудники\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"сотрудники\"]],\"фИО\",true,\"сотрудники\",\"СотрудникиL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-увольнение-e.сотрудники-caption\"],null],[22,[\"readonly\"]],\"сотрудникиLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"сотрудники\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"сотрудники\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-увольнение-e.отделКадров-caption\"],null],false],[9],[0,\"\\n    \"],[1,[26,\"flexberry-lookup\",null,[[\"choose\",\"remove\",\"value\",\"relationName\",\"projection\",\"title\",\"readonly\",\"componentName\",\"class\",\"data-test-i-i-s-otdel-kadrov-2-увольнение-e-отделКадров\"],[\"showLookupDialog\",\"removeLookupValue\",[22,[\"model\",\"отделКадров\"]],\"отделКадров\",\"ОтделКадровL\",[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-увольнение-e.отделКадров-caption\"],null],[22,[\"readonly\"]],\"отделКадровLookup\",[26,\"if\",[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"отделКадров\"],null],\"isInvalid\"],null],\"error\"],null],true]]],false],[0,\"\\n    \"],[1,[26,\"flexberry-validationmessage\",null,[[\"error\"],[[26,\"get\",[[26,\"get\",[[22,[\"validationModel\",\"validations\",\"attrs\"]],\"отделКадров\"],null],\"message\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-увольнение-e.hbs" } });
});
define("ember-app/templates/i-i-s-otdel-kadrov-2-\u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u0435-l", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9D3B0B9t", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.i-i-s-otdel-kadrov-2-увольнение-l.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"modelName\",\"modelProjection\",\"editFormRoute\",\"content\",\"createNewButton\",\"refreshButton\",\"sorting\",\"orderable\",\"showCheckBoxInRow\",\"sortByColumn\",\"addColumnToSorting\",\"beforeDeleteAllRecords\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"componentName\",\"deleteButton\",\"exportExcelButton\",\"enableFilters\",\"filters\",\"filterButton\",\"showDeleteButtonInRow\",\"showPrototypeButtonInRow\",\"showEditButtonInRow\",\"showFiltersInModal\",\"applyFilters\",\"resetFilters\",\"filterByAnyMatch\"],[[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],[22,[\"model\"]],true,true,[22,[\"computedSorting\"]],true,true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],\"IISOtdel_kadrov_2УвольнениеL\",true,true,true,[22,[\"filters\"]],true,true,true,true,true,[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/i-i-s-otdel-kadrov-2-увольнение-l.hbs" } });
});
define("ember-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7bIun4E8", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-sitemap\",null,[[\"sitemap\",\"isHomeSitemap\",\"class\"],[[22,[\"sitemap\"]],true,\"ui three column centered grid flexberry-home-sitemap\"]]],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/index.hbs" } });
});
define("ember-app/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "r4NAFGKn", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"loading-pane\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"loading-message\"],[8],[0,\"\\n    \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.loading.caption\"],null],false],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"spinner\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/loading.hbs" } });
});
define("ember-app/templates/lookup-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i3PewHQx", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"id\",\"lookup-list\"],[10,\"class\",\"ui form list-group\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"class\",\"modelProjection\",\"modelName\",\"content\",\"selectedRecord\",\"componentMode\",\"componentName\",\"lookupComponentName\",\"showEditMenuItemInRow\",\"createNewButton\",\"showCheckBoxInRow\",\"colsConfigButton\",\"columnsWidthAutoresize\",\"filterByAnyMatch\",\"filterText\",\"filters\",\"applyFilters\",\"resetFilters\",\"customProperties\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"previousPage\",\"gotoPage\",\"nextPage\",\"disableHierarchicalMode\",\"sorting\",\"orderable\",\"sortByColumn\",\"addColumnToSorting\",\"notUseUserSettings\",\"beforeDeleteAllRecords\",\"data-test-lookup-olv\"],[\"ui bottom attached\",[22,[\"modelProjection\"]],[22,[\"modelName\"]],[22,[\"model\"]],[22,[\"currentLookupRow\"]],\"lookupform\",[22,[\"folvComponentName\"]],[22,[\"componentName\"]],false,false,false,false,true,[26,\"action\",[[21,0,[]],\"filterByAnyMatch\"],null],[22,[\"filter\"]],[22,[\"filters\"]],[26,\"action\",[[21,0,[]],\"applyFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\"],null],[22,[\"customPropertiesData\"]],[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"previousPage\"],null],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],[22,[\"disableHierarchicalMode\"]],[22,[\"computedSorting\"]],true,[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],[22,[\"notUseUserSettings\"]],[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null],true]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/lookup-dialog-content.hbs" } });
});
define("ember-app/templates/lookup-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CgHq5XTB", "block": "{\"symbols\":[],\"statements\":[[4,\"modal-dialog\",null,[[\"title\",\"sizeClass\",\"close\",\"created\",\"useOkButton\",\"useCloseButton\",\"componentName\",\"useSidePageMode\",\"settings\",\"data-test-lookup-dialog\"],[[22,[\"title\"]],[22,[\"modalDialogSettings\",\"sizeClass\"]],\"removeModalDialog\",\"createdModalDialog\",[22,[\"modalDialogSettings\",\"useOkButton\"]],[22,[\"modalDialogSettings\",\"useCloseButton\"]],[22,[\"componentName\"]],[22,[\"modalDialogSettings\",\"useSidePageMode\"]],[22,[\"modalDialogSettings\",\"settings\"]],true]],{\"statements\":[[0,\"  \"],[1,[26,\"outlet\",[\"modal-content\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/lookup-dialog.hbs" } });
});
define("ember-app/templates/mobile/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w0QuvJY1", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"isInAcceptanceTestMode\"]]],null,{\"statements\":[[0,\"  \"],[1,[20,\"outlet\"],false],[0,\"\\n  \"],[1,[26,\"outlet\",[\"modal\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"flexberry-sidebar\",null,[[\"class\",\"settings\"],[\"mobile inverted vertical main menu\",[26,\"hash\",null,[[\"onShow\",\"onHidden\"],[[26,\"action\",[[21,0,[]],\"updateWidth\"],null],[26,\"action\",[[21,0,[]],\"updateWidth\"],null]]]]]],{\"statements\":[[0,\"  \"],[6,\"a\"],[10,\"class\",\"item\"],[11,\"href\",[20,\"addonVersionHref\"],null],[10,\"target\",\"_blank\"],[11,\"title\",[26,\"t\",[\"forms.application.sitemap.application-version.title\"],null],null],[8],[0,\"\\n    \"],[1,[26,\"t\",[\"forms.application.sitemap.application-version.caption\"],[[\"version\"],[[22,[\"addonVersion\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"class\"],[[22,[\"sitemap\"]],\"flexberry-sitemap\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[10,\"class\",\"bgw-fix mobile\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"background-logo mobile\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui attached menu mobile\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui container flex-container\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"launch icon item mobile\"],[11,\"title\",[26,\"t\",[\"forms.application.header.menu.sitemap-button.title\"],null],null],[3,\"action\",[[21,0,[]],\"toggleSidebarMobile\"]],[8],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"sidebar icon text-menu-show\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"right item\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"style\",\"margin-right: 5px;\"],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.application.header.menu.user-settings-service-checkbox.caption\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[1,[26,\"flexberry-checkbox\",null,[[\"class\",\"value\"],[\"toggle\",[22,[\"userSettingsService\",\"isUserSettingsServiceEnabled\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"right item lang\"],[8],[0,\"\\n          \"],[6,\"label\"],[10,\"style\",\"margin-right: 5px;\"],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.application.header.menu.language-dropdown.caption\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n          \"],[1,[26,\"flexberry-dropdown\",null,[[\"class\",\"items\",\"value\",\"placeholder\"],[\"compact\",[22,[\"locales\"]],[22,[\"i18n\",\"locale\"]],[26,\"t\",[\"forms.application.header.menu.language-dropdown.placeholder\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"id\",\"example-mobile\"],[10,\"class\",\"pusher mobile\"],[8],[0,\"\\n  \"],[6,\"div\"],[11,\"class\",[27,[\"ui form \",[22,[\"appState\",\"state\"]]]]],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"full height\"],[10,\"style\",\"min-height: 94.8vh!important;\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"flexberry-content ui attached segment\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui main container\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"stackable grid container\"],[8],[0,\"\\n            \"],[1,[20,\"outlet\"],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui main container\"],[8],[0,\"\\n  \"],[1,[26,\"outlet\",[\"modal\"],null],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui vertical footer segment\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui container flex-container mobile-footer\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui text menu\"],[8],[0,\"\\n      \"],[6,\"a\"],[10,\"class\",\"brand item\"],[10,\"href\",\"#\"],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"forms.application.footer.application-name\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"item\"],[11,\"href\",[20,\"addonVersionHref\"],null],[10,\"target\",\"_blank\"],[11,\"title\",[26,\"t\",[\"forms.application.footer.application-version.title\"],null],null],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"forms.application.footer.application-version.caption\"],[[\"version\"],[[22,[\"addonVersion\"]]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/application.hbs" } });
});
define("ember-app/templates/mobile/components/colsconfig-dialog-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YI42qzW/", "block": "{\"symbols\":[\"colDesc\",\"n\"],\"statements\":[[6,\"div\"],[11,\"class\",[27,[\"ui form \",[22,[\"appState\",\"state\"]]]]],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-colsconfig content\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"ui button cols-config-apply\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"apply\"]],[8],[1,[26,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],[26,\"t\",[\"components.colsconfig-dialog-content.export\"],null],[26,\"t\",[\"components.colsconfig-dialog-content.use\"],null]],null],false],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-field\",null,[[\"class\",\"value\",\"label\"],[\"setting-name-input fluid\",[22,[\"model\",\"settingName\"]],[26,\"t\",[\"components.colsconfig-dialog-content.enter-setting-name\"],null]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n        \"],[6,\"button\"],[11,\"class\",[27,[\"ui button positive cols-config-save\",[26,\"unless\",[[22,[\"model\",\"settingName\"]],\" disabled\"],null]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"saveColsSetting\"]],[8],[0,\"\\n          \"],[1,[26,\"t\",[\"components.colsconfig-dialog-content.save\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[1,[26,\"ui-message\",null,[[\"type\",\"closeable\",\"visible\",\"caption\",\"message\"],[[22,[\"type\"]],[22,[\"closeable\"]],[22,[\"visible\"]],[22,[\"caption\"]],[22,[\"message\"]]]]],false],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-checkbox\",null,[[\"label\",\"value\"],[[26,\"t\",[\"components.colsconfig-dialog-content.det-separate-cols\"],null],[22,[\"model\",\"exportParams\",\"detSeparateCols\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-checkbox\",null,[[\"label\",\"value\"],[[26,\"t\",[\"components.colsconfig-dialog-content.det-separate-rows\"],null],[22,[\"model\",\"exportParams\",\"detSeparateRows\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"two fields unstackable\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n          \"],[1,[26,\"flexberry-field\",null,[[\"class\",\"value\",\"label\"],[\"per-page-input\",[22,[\"model\",\"perPageValue\"]],[26,\"t\",[\"components.colsconfig-dialog-content.per-page\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[0,\" \"],[9],[0,\"\\n          \"],[1,[26,\"flexberry-checkbox\",null,[[\"class\",\"value\",\"label\"],[\"toggle\",[22,[\"model\",\"saveColWidthState\"]],[26,\"t\",[\"components.colsconfig-dialog-content.col-width-on\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"colDescs\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[11,\"propName\",[27,[[21,1,[\"propName\"]]]]],[10,\"class\",\"colsconfig-prop\"],[8],[0,\"\\n        \"],[6,\"div\"],[11,\"class\",[27,[\"field colsconfig-prop-name \",[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]]],null,{\"statements\":[[0,\"            \"],[6,\"label\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.column-name\"],null],false],[9],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"class\",\"value\"],[[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null],[21,1,[\"name\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"span\"],[8],[1,[21,1,[\"name\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[9],[0,\"\\n\\n\"],[0,\"        \"],[6,\"div\"],[10,\"class\",\"two fields unstackable\"],[8],[0,\"\\n\"],[4,\"unless\",[[21,1,[\"isHasMany\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"sort-direction-cell field\"],[8],[0,\"\\n              \"],[6,\"label\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-caption\"],null],false],[9],[0,\"\\n              \"],[6,\"div\"],[11,\"class\",[27,[\"ui compact selection dropdown sort-direction-dropdown \",[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n                \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"default text\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-none\"],null],false],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"0\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-none\"],null],false],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"1\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-asc\"],null],false],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"item\"],[10,\"data-value\",\"-1\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-direction-desc\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[21,1,[\"sortOrder\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n              \"],[6,\"label\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.sort-priority-caption\"],null],false],[9],[0,\"\\n              \"],[6,\"div\"],[11,\"class\",[27,[\"ui input \",[26,\"if\",[[21,1,[\"hide\"]],\"disabled\"],null]]]],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"class\",\"value\"],[\"sort-priority-input\",[21,1,[\"sortPriority\"]]]]],false],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n\\n\"],[0,\"        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n          \"],[6,\"label\"],[8],[1,[26,\"t\",[\"components.colsconfig-dialog-content.column-width-caption\"],null],false],[9],[0,\"\\n          \"],[6,\"div\"],[11,\"class\",[27,[\"ui input \",[26,\"if\",[[26,\"or\",[[21,1,[\"hide\"]],[26,\"or\",[[22,[\"model\",\"exportParams\",\"isExportExcel\"]],[26,\"or\",[[21,1,[\"fixed\"]],[26,\"not\",[[22,[\"model\",\"saveColWidthState\"]]],null]],null]],null]],null],\"disabled\"],null]]]],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"class\",\"value\"],[\"column-width-input\",[21,1,[\"columnWidth\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"colsconfig-actions\"],[8],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"ui icon button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"invertVisibility\",[21,2,[]]]],[8],[6,\"i\"],[11,\"class\",[27,[\"large \",[26,\"if\",[[21,1,[\"hide\"]],\"hide\",\"unhide\"],null],\" icon\"]]],[8],[9],[9],[0,\"\\n          \"],[6,\"button\"],[11,\"class\",[27,[\"ui icon button\",[26,\"if\",[[26,\"eq\",[[21,2,[]],0],null],\" disabled\"],null]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"rowUp\",[21,2,[]]]],[8],[6,\"i\"],[10,\"class\",\"chevron up icon\"],[8],[9],[9],[0,\"\\n          \"],[6,\"button\"],[11,\"class\",[27,[\"ui icon button row-down-button no-margin\",[26,\"if\",[[26,\"eq\",[[21,1,[]],[22,[\"model\",\"colDescs\",\"lastObject\"]]],null],\" disabled\"],null]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"rowDown\",[21,2,[]]]],[8],[6,\"i\"],[10,\"class\",\"chevron down icon\"],[8],[9],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"    \"],[6,\"a\"],[10,\"class\",\"hidden download-anchor\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/colsconfig-dialog-content.hbs" } });
});
define("ember-app/templates/mobile/components/flexberry-file", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ea5GPEY8", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"flexberry-file-grid ui grid\"],[8],[0,\"\\n  \"],[6,\"input\"],[10,\"name\",\"files[]\"],[11,\"id\",[20,\"_fileInputId\"],null],[10,\"class\",\"flexberry-file-file-input\"],[10,\"style\",\"display:none\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[6,\"label\"],[11,\"class\",[27,[\"flexberry-file-add-button ui \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\",[26,\"unless\",[[22,[\"_addButtonIsEnabled\"]],\"disabled\"],null]],null],\" \",[26,\"if\",[[22,[\"_hasFile\"]],\"hidden\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.flexberry-file.add-button-title\"],null],null],[11,\"for\",[20,\"_fileInputId\"],null],[3,\"action\",[[21,0,[]],\"addButtonClick\"],[[\"on\",\"preventDefault\"],[\"click\",false]]],[8],[0,\"\\n    \"],[1,[26,\"t\",[\"components.flexberry-file.add-button-caption\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"_hasFile\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"flexberry-file-menu\"],[8],[0,\"\\n        \"],[1,[26,\"flexberry-menu\",null,[[\"class\",\"items\",\"callItemsOnClickCallbacks\",\"onItemClick\",\"collapseMenuOnItemClick\",\"onlyClickHandler\"],[[26,\"concat\",[\"flexberry-file-mobile-menu top right pointing\",[26,\"if\",[[26,\"and\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"showPreview\"]]],null]],null],\" disabled\",\"\"],null]],null],[22,[\"_menuItems\"]],false,[26,\"action\",[[21,0,[]],\"onMenuItemClick\"],null],true,true]]],false],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"showPreview\"]]],null,{\"statements\":[[4,\"if\",[[22,[\"_canLoadPreview\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"flexberry-file-image-preview-wrapper ui small image\"],[3,\"action\",[[21,0,[]],\"viewLoadedImage\"]],[8],[0,\"\\n\"],[4,\"unless\",[[22,[\"_previewDownloadIsInProgress\"]]],null,{\"statements\":[[0,\"              \"],[6,\"img\"],[10,\"class\",\"flexberry-file-image-preview\"],[11,\"src\",[20,\"_previewImageAsBase64String\"],null],[11,\"alt\",[26,\"t\",[\"components.flexberry-file.preview-image-alternative-text\"],null],null],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[6,\"div\"],[11,\"class\",[27,[\"ui \",[26,\"if\",[[22,[\"_previewDownloadIsInProgress\"]],\"active\",\"disabled\"],null],\" loader\"]]],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"span\"],[8],[1,[20,\"_fileName\"],false],[9],[0,\" \"],[6,\"span\"],[10,\"style\",\"color:red\"],[8],[1,[20,\"_errorPreviewCaption\"],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"flexberry-file-download-iframes-container\"],[10,\"style\",\"display: none;\"],[8],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog ui small basic modal\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ui icon header\"],[8],[0,\"\\n    \"],[1,[20,\"_errorModalDialogCaption\"],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"content\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog-content center aligned ui grid\"],[8],[0,\"\\n      \"],[1,[20,\"_errorModalDialogContent\"],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog-button center aligned ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"actions\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"flexberry-file-error-modal-dialog-ok-button ui approve green inverted button\"],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"checkmark icon\"],[8],[9],[0,\"\\n        \"],[1,[26,\"t\",[\"components.flexberry-file.error-dialog-ok-button-caption\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/flexberry-file.hbs" } });
});
define("ember-app/templates/mobile/components/flexberry-objectlistview", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mcc0KCKf", "block": "{\"symbols\":[\"page\",\"@gotoPage\",\"@resetFilters\",\"@configurateSelectedRows\",\"@configurateRow\",\"@filterByAnyMatch\",\"@addColumnToSorting\",\"@sortByColumn\"],\"statements\":[[1,[26,\"olv-toolbar\",null,[[\"class\",\"createNewButton\",\"enableCreateNewButton\",\"refreshButton\",\"deleteButton\",\"colsConfigButton\",\"advLimitButton\",\"enableFilters\",\"exportExcelButton\",\"showFilters\",\"showFiltersInModal\",\"filters\",\"toggleStateFilters\",\"resetFilters\",\"filterButton\",\"filterText\",\"buttonClass\",\"enableDeleteButton\",\"inLookup\",\"componentName\",\"lookupComponentName\",\"modelController\",\"customButtonAction\",\"customButtons\",\"editFormRoute\",\"showConfigDialog\",\"showAdvLimitDialog\",\"confirmDeleteRows\",\"inHierarchicalMode\",\"inExpandMode\",\"availableHierarchicalMode\",\"availableCollExpandMode\",\"switchHierarchicalMode\",\"switchExpandMode\",\"readonly\",\"useSidePageMode\"],[\"ui secondary menu no-margin flexberry-olv-toolbar\",[22,[\"createNewButton\"]],[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"refreshButton\"]],[22,[\"deleteButton\"]],[22,[\"colsConfigButton\"]],[22,[\"advLimitButton\"]],[22,[\"enableFilters\"]],[22,[\"exportExcelButton\"]],[22,[\"_showFilters\"]],[22,[\"showFiltersInModal\"]],[22,[\"filters\"]],[26,\"action\",[[21,0,[]],\"toggleStateFilters\"],null],[26,\"action\",[[21,0,[]],\"resetFilters\",[21,3,[]]],null],[22,[\"filterButton\"]],[22,[\"filterText\"]],[22,[\"buttonClass\"]],[26,\"not\",[[22,[\"readonly\"]]],null],[26,\"eq\",[[22,[\"componentMode\"]],\"lookupform\"],null],[22,[\"componentName\"]],[22,[\"lookupComponentName\"]],[22,[\"currentController\"]],[26,\"action\",[[21,0,[]],\"customButtonAction\"],null],[22,[\"customButtons\"]],[22,[\"editFormRoute\"]],\"showConfigDialog\",\"showConfigDialog\",[22,[\"confirmDeleteRows\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[22,[\"_availableHierarchicalMode\"]],[22,[\"availableCollExpandMode\"]],[26,\"action\",[[21,0,[]],\"switchHierarchicalMode\"],null],[26,\"action\",[[21,0,[]],\"switchExpandMode\"],null],[22,[\"readonly\"]],[22,[\"useSidePageMode\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"or\",[[26,\"not\",[[22,[\"inHierarchicalMode\"]]],null],[22,[\"hierarchyPaging\"]]],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"ui secondary menu no-margin nav-bar\"],[8],[0,\"\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui \",[26,\"unless\",[[22,[\"colsConfigButton\"]],\"disabled\"],null],\" button mobile-sorting-setting-button\"]]],[11,\"title\",[20,\"_mobileSortingSettingsCaption\"],null],[11,\"disabled\",[26,\"not\",[[22,[\"colsConfigButton\"]]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"showConfigDialog\"]],[8],[0,\"\\n        \"],[6,\"i\"],[11,\"class\",[20,\"_mobileSortingSettingsIcon\"],null],[8],[9],[0,\"\\n        \"],[1,[20,\"_mobileSortingSettingsCaption\"],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"right menu\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui basic buttons\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"_mobilePages\"]]],null,{\"statements\":[[4,\"if\",[[26,\"not\",[[21,1,[\"isEllipsis\"]]],null]],null,{\"statements\":[[4,\"if\",[[21,1,[\"isCurrent\"]]],null,{\"statements\":[[0,\"              \"],[6,\"button\"],[10,\"class\",\"ui disabled active button\"],[10,\"disabled\",\"\"],[10,\"type\",\"button\"],[8],[1,[21,1,[\"number\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[6,\"button\"],[10,\"class\",\"ui button\"],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"gotoPage\",[21,2,[]],[21,1,[\"number\"]]]],[8],[1,[21,1,[\"number\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"gt\",[[22,[\"_mobilePages\",\"length\"]],4],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"class\",[27,[\"ui input nav-bar-search-page \",[26,\"if\",[[26,\"and\",[[22,[\"searchPageValue\"]],[22,[\"searchPageButtonReadonly\"]]],null],\"error\"],null]]]],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"min\",\"max\",\"placeholder\",\"enter\",\"value\"],[\"number\",[22,[\"_pages\",\"firstObject\",\"number\"]],[22,[\"_pages\",\"lastObject\",\"number\"]],[22,[\"_mobilePages\",\"lastObject\",\"number\"]],[26,\"action\",[[21,0,[]],\"searchPageButtonAction\",[21,2,[]]],null],[22,[\"searchPageValue\"]]]]],false],[0,\"\\n\"],[0,\"          \"],[1,[26,\"input\",null,[[\"classNames\"],[[26,\"array\",[\"hidden\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[1,[26,\"object-list-view\",null,[[\"placeholder\",\"readonly\",\"columnsWidthAutoresize\",\"minAutoColumnWidth\",\"buttonClass\",\"tableStriped\",\"customTableClass\",\"cellComponent\",\"singleColumnCellComponent\",\"singleColumnHeaderTitle\",\"createNewByPrototype\",\"showValidationMessagesInRow\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"showDeleteButtonInRow\",\"showEditMenuItemInRow\",\"showPrototypeMenuItemInRow\",\"showDeleteMenuItemInRow\",\"sendMenuItemAction\",\"menuInRowAdditionalItems\",\"rowClickable\",\"orderable\",\"sorting\",\"immediateDelete\",\"modelName\",\"modelProjection\",\"content\",\"sortByColumn\",\"addColumnToSorting\",\"enableFilters\",\"showFilters\",\"showFiltersInModal\",\"filters\",\"applyFilters\",\"componentForFilter\",\"componentForFilterByCondition\",\"conditionsByType\",\"filterByAnyMatch\",\"filterByAnyWord\",\"filterByAllWords\",\"configurateRow\",\"configurateSelectedRows\",\"confirmDeleteRow\",\"beforeDeleteRecord\",\"action\",\"beforeDeleteAllRecords\",\"componentName\",\"allowColumnResize\",\"selectedRecord\",\"notUseUserSettings\",\"hierarchicalIndent\",\"confirmDeleteRows\",\"inHierarchicalMode\",\"inExpandMode\",\"disableHierarchicalMode\",\"loadRecords\",\"availableHierarchicalMode\",\"hierarchyAttribute\",\"useRowByRowLoading\",\"useRowByRowLoadingProgress\",\"eventsBus\",\"onEditForm\",\"customButtonInRowAction\",\"customButtonsInRow\",\"defaultSortingButton\",\"defaultLeftPadding\",\"overflowedComponents\",\"fixedHeader\",\"recordsTotalCount\"],[[22,[\"placeholder\"]],[22,[\"readonly\"]],[22,[\"columnsWidthAutoresize\"]],[22,[\"minAutoColumnWidth\"]],[22,[\"buttonClass\"]],[22,[\"tableStriped\"]],[22,[\"customTableClass\"]],[22,[\"cellComponent\"]],[22,[\"singleColumnCellComponent\"]],[22,[\"singleColumnHeaderTitle\"]],[26,\"action\",[[21,0,[]],\"createNewByPrototype\"],null],[26,\"and\",[[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"showValidationMessagesInRow\"]]],null],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditMenuItemInRow\"]],[22,[\"showPrototypeMenuItemInRow\"]],[22,[\"showDeleteMenuItemInRow\"]],[26,\"action\",[[21,0,[]],\"sendMenuItemAction\"],null],[22,[\"menuInRowAdditionalItems\"]],[26,\"and\",[[26,\"not\",[[22,[\"readonly\"]]],null],[22,[\"rowClickable\"]]],null],[22,[\"orderable\"]],[22,[\"sorting\"]],true,[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"content\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,8,[]],[21,8,[]],\"sortByColumn\"],null]],null],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,7,[]],[21,7,[]],\"addColumnToSorting\"],null]],null],[22,[\"enableFilters\"]],[22,[\"_showFilters\"]],[22,[\"showFiltersInModal\"]],[22,[\"filters\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[22,[\"applyFilters\"]],[22,[\"applyFilters\"]],\"applyFilters\"],null]],null],[22,[\"componentForFilter\"]],[22,[\"componentForFilterByCondition\"]],[22,[\"conditionsByType\"]],[26,\"action\",[[21,0,[]],[26,\"if\",[[21,6,[]],[21,6,[]],\"filterByAnyMatch\"],null]],null],[22,[\"filterByAnyWord\"]],[22,[\"filterByAllWords\"]],[21,5,[]],[21,4,[]],[22,[\"confirmDeleteRow\"]],[22,[\"beforeDeleteRecord\"]],[26,\"action\",[[21,0,[]],\"objectListViewRowClick\"],null],[22,[\"beforeDeleteAllRecords\"]],[22,[\"componentName\"]],[22,[\"allowColumnResize\"]],[22,[\"selectedRecord\"]],[22,[\"notUseUserSettings\"]],[22,[\"hierarchicalIndent\"]],[22,[\"confirmDeleteRows\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[26,\"if\",[[22,[\"hierarchyByAttribute\"]],true,[22,[\"disableHierarchicalMode\"]]],null],[26,\"action\",[[21,0,[]],\"loadRecords\"],null],[26,\"action\",[[21,0,[]],\"availableHierarchicalMode\"],null],[22,[\"hierarchyAttribute\"]],[22,[\"useRowByRowLoading\"]],[22,[\"useRowByRowLoadingProgress\"]],[22,[\"eventsBus\"]],[22,[\"onEditForm\"]],\"customButtonInRowAction\",[22,[\"customButtonsInRow\"]],[22,[\"defaultSortingButton\"]],[22,[\"defaultLeftPadding\"]],[22,[\"overflowedComponents\"]],[22,[\"fixedHeader\"]],[22,[\"recordsTotalCount\"]]]]],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/flexberry-objectlistview.hbs" } });
});
define("ember-app/templates/mobile/components/flexberry-sitemap-guideline", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OmZPUQH/", "block": "{\"symbols\":[\"node\",\"child\"],\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"link\"]]],null,{\"statements\":[[4,\"link-to\",[[22,[\"sitemap\",\"link\"]]],[[\"title\"],[[22,[\"sitemap\",\"title\"]]]],{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[8],[0,\"\\n      \"],[6,\"i\"],[11,\"class\",[27,[\"icon \",[22,[\"sitemap\",\"icon\"]]]]],[8],[9],[0,\"\\n      \"],[1,[22,[\"sitemap\",\"caption\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"caption\"]]],null,{\"statements\":[[0,\"  \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[8],[0,\"\\n    \"],[6,\"i\"],[11,\"class\",[27,[\"icon \",[22,[\"sitemap\",\"icon\"]]]]],[8],[9],[0,\"\\n    \"],[1,[22,[\"sitemap\",\"caption\"]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"sitemap\",\"children\",\"length\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"menu slide left\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"item menu-back\"],[3,\"action\",[[21,0,[]],\"menuBack\"]],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"icon-guideline-arrow-long-left icon\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"title-item-menu\"],[8],[0,\"\\n          \"],[1,[20,\"parent\"],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"sitemap\",\"children\"]]],null,{\"statements\":[[0,\"        \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"isDropDown\",\"classNames\",\"parent\"],[[21,2,[]],false,\"item\",[22,[\"sitemap\",\"caption\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[4,\"each\",[[22,[\"sitemap\",\"nodes\"]]],null,{\"statements\":[[4,\"if\",[[21,1,[\"children\",\"length\"]]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"isDropDown\"],[[21,1,[]],true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-sitemap-guideline\",null,[[\"sitemap\",\"classNames\",\"isDropDown\"],[[21,1,[]],\"item\",false]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/flexberry-sitemap-guideline.hbs" } });
});
define("ember-app/templates/mobile/components/object-list-view-row", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OS401F4p", "block": "{\"symbols\":[\"record\"],\"statements\":[[6,\"tr\"],[11,\"class\",[27,[[22,[\"record\",\"rowConfig\",\"customClass\"]],[26,\"if\",[[22,[\"record\",\"selected\"]],\" active\"],null],[26,\"if\",[[22,[\"record\",\"data\",\"hasDirtyAttributes\"]],\" groupedit-new-row\"],null]]]],[8],[0,\"\\n  \"],[6,\"td\"],[11,\"class\",[27,[\"object-list-view-helper-column \",[26,\"unless\",[[22,[\"showHelperColumn\"]],\"hidden\"],null]]]],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"hidden\"],[8],[1,[22,[\"record\",\"key\"]],false],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"object-list-view-helper-column-cell\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"showAsteriskInRow\"]],[22,[\"record\",\"data\",\"hasDirtyAttributes\"]]],null]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"cell asterisk-cell\"],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"asterisk small red icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showCheckBoxInRow\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"cell\"],[8],[0,\"\\n            \"],[1,[26,\"flexberry-checkbox\",null,[[\"readonly\",\"onChange\",\"value\"],[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeSelected\"]]],null],[22,[\"allSelect\"]]],null],[26,\"action\",[[21,0,[]],[22,[\"selectRow\"]],[22,[\"record\"]]],null],[22,[\"record\",\"selected\"]]]]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[6,\"td\"],[11,\"style\",[27,[\"padding-left:\",[20,\"hierarchicalIndent\"],\"px;\"]]],[3,\"action\",[[21,0,[]],\"onRowClick\",[22,[\"record\"]],[26,\"hash\",null,[[\"column\"],[[22,[\"columns\"]]]]]],[[\"preventDefault\"],[false]]],[8],[0,\"\\n    \"],[1,[26,\"component\",[[22,[\"singleColumnCellComponent\",\"componentName\"]]],[[\"model\",\"columns\",\"showValidationMessages\",\"hasEditableValues\",\"dynamicProperties\",\"readonly\"],[[22,[\"record\",\"data\"]],[22,[\"columns\"]],[22,[\"showValidationMessages\"]],[22,[\"hasEditableValues\"]],[22,[\"singleColumnCellComponent\",\"componentProperties\"]],[22,[\"readonly\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"or\",[[26,\"and\",[[22,[\"inHierarchicalMode\"]],[22,[\"hasRecords\"]]],null],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"showDeleteButtonInRow\"]]],null]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"row-controls\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"inHierarchicalMode\"]],[22,[\"hasRecords\"]]],null]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[11,\"class\",[27,[\"ui button icon mini \",[20,\"buttonClass\"]]]],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"expand\"],[[\"bubbles\"],[false]]],[8],[0,\"\\n            \"],[6,\"i\"],[11,\"class\",[27,[[26,\"if\",[[22,[\"_expanded\"]],\"minus\",\"plus\"],null],\" hierarchy-expand icon\"]]],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showEditButtonInRow\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-edit-button mobile \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null],\" button\"]]],[11,\"disabled\",[20,\"readonly\"],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"onRowClick\",[22,[\"record\"]],[26,\"hash\",null,[[\"column\",\"columnIndex\",\"rowEdit\"],[null,null,true]]]],[[\"bubbles\"],[false]]],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showPrototypeButtonInRow\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-prototype-button mobile \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null],\" button\"]]],[11,\"disabled\",[20,\"readonly\"],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"createNewByPrototype\"]],[26,\"get\",[[22,[\"record\"]],\"data.id\"],null]],[[\"bubbles\"],[false]]],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"copy icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showDeleteButtonInRow\"]]],null,{\"statements\":[[0,\"          \"],[6,\"button\"],[11,\"class\",[27,[\"ui ui-edit object-list-view-row-delete-button mobile \",[20,\"buttonClass\"],\" \",[26,\"if\",[[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeDeleted\"]]],null]],null],\"disabled\"],null],\" button\"]]],[11,\"disabled\",[26,\"or\",[[22,[\"readonly\"]],[26,\"not\",[[22,[\"record\",\"rowConfig\",\"canBeDeleted\"]]],null]],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],[22,[\"deleteRow\"]],[22,[\"record\"]]],[[\"bubbles\"],[false]]],[8],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"minus icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"    \"],[6,\"td\"],[10,\"class\",\"object-list-view-menu\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"right pointing ui icon dropdown button\"],[8],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"list layout icon\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"left menu\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showEditMenuItemInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"item\"],[3,\"action\",[[21,0,[]],[22,[\"rowClick\"]],[22,[\"record\"]]]],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"edit icon\"],[8],[9],[0,\"\\n              \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.edit-menu-item-title\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"showDeleteMenuItemInRow\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"item\"],[3,\"action\",[[21,0,[]],[22,[\"deleteRow\"]],[22,[\"record\"]]]],[8],[0,\"\\n              \"],[6,\"i\"],[10,\"class\",\"trash icon\"],[8],[9],[0,\"\\n              \"],[6,\"span\"],[8],[1,[26,\"t\",[\"components.object-list-view.menu-in-row.delete-menu-item-title\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"_expanded\"]],[22,[\"inHierarchicalMode\"]]],null]],null,{\"statements\":[[4,\"each\",[[22,[\"records\"]]],[[\"key\"],[\"key\"]],{\"statements\":[[0,\"    \"],[1,[26,\"object-list-view-row\",null,[[\"record\",\"columns\",\"readonly\",\"required\",\"showMenuColumn\",\"showHelperColumn\",\"defaultRowConfig\",\"showValidationMessages\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showDeleteButtonInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"isParentRecordPropertyName\",\"inHierarchicalMode\",\"inExpandMode\",\"singleColumnCellComponent\",\"loadRecords\",\"rowClick\",\"selectRow\",\"deleteRow\",\"createNewByPrototype\",\"_currentLevel\",\"hierarchicalIndent\",\"configurateRow\"],[[21,1,[]],[22,[\"columns\"]],[22,[\"readonly\"]],[22,[\"required\"]],[22,[\"showMenuColumn\"]],[22,[\"showHelperColumn\"]],[22,[\"defaultRowConfig\"]],[22,[\"showValidationMessages\"]],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"isParentRecordPropertyName\"]],[22,[\"inHierarchicalMode\"]],[22,[\"inExpandMode\"]],[22,[\"singleColumnCellComponent\"]],[22,[\"loadRecords\"]],[22,[\"rowClick\"]],[22,[\"selectRow\"]],[22,[\"deleteRow\"]],[22,[\"createNewByPrototype\"]],[22,[\"_currentLevel\"]],[22,[\"_hierarchicalIndent\"]],[22,[\"configurateRow\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/object-list-view-row.hbs" } });
});
define("ember-app/templates/mobile/components/object-list-view", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "A8IIGplu", "block": "{\"symbols\":[\"record\",\"column\"],\"statements\":[[6,\"table\"],[11,\"class\",[27,[\"object-list-view ui unstackable celled \",[26,\"if\",[[22,[\"readonly\"]],\"readonly\"],null],\" \",[20,\"tableClass\"],\" table\"]]],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"singleColumnHeaderTitle\"]]],null,{\"statements\":[[0,\"    \"],[6,\"thead\"],[8],[0,\"\\n      \"],[6,\"tr\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"th\"],[10,\"class\",\"object-list-view-operations collapsing\"],[10,\"data-olv-header-property-name\",\"OlvRowToolbar\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"th\"],[10,\"class\",\"dt-head-left me class\"],[10,\"data-olv-header-property-name\",\"OlvHeader\"],[8],[1,[20,\"singleColumnHeaderTitle\"],false],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"th\"],[10,\"class\",\"object-list-view-menu collapsing\"],[10,\"data-olv-header-property-name\",\"OlvRowMenu\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"tbody\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showFilters\"]]],null,{\"statements\":[[0,\"      \"],[6,\"tr\"],[10,\"class\",\"object-list-view-filters\"],[11,\"onkeydown\",[26,\"action\",[[21,0,[]],\"applyFiltersByEnter\"],null],null],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"showHelperColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[11,\"class\",[27,[\"object-list-view-helper-column \",[26,\"unless\",[[22,[\"showHelperColumn\"]],\"hidden\"],null]]]],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"object-list-view-helper-column-cell\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"td\"],[10,\"class\",\"overflowed-cell\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"columns\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"inline fields filter\"],[8],[0,\"\\n              \"],[6,\"label\"],[8],[1,[26,\"if\",[[21,2,[\"keyLocale\"]],[26,\"t\",[[21,2,[\"keyLocale\"]]],null],[21,2,[\"header\"]]],null],false],[0,\":\"],[9],[0,\"\\n\"],[4,\"if\",[[21,2,[\"filter\",\"conditions\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"filter-operation\"],[8],[0,\"\\n                  \"],[1,[26,\"flexberry-dropdown\",null,[[\"displayCaptions\",\"value\",\"items\",\"class\",\"placeholder\",\"needChecksOnValue\",\"onChange\"],[[26,\"not\",[[26,\"is-array\",[[21,2,[\"filter\",\"conditions\"]]],null]],null],[21,2,[\"filter\",\"condition\"]],[21,2,[\"filter\",\"conditions\"]],\"compact fluid\",[26,\"t\",[\"components.object-list-view.filter-condition\"],null],false,[26,\"action\",[[21,0,[]],\"filterConditionChanged\",[21,2,[\"filter\"]]],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[21,2,[\"filter\",\"component\",\"name\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"fluid action input ui filter-value\"],[8],[0,\"\\n                  \"],[1,[26,\"component\",[[21,2,[\"filter\",\"component\",\"name\"]]],[[\"value\",\"readonly\",\"dynamicProperties\"],[[21,2,[\"filter\",\"pattern\"]],[26,\"or\",[[26,\"eq\",[[21,2,[\"filter\",\"condition\"]],\"empty\"],null],[26,\"eq\",[[21,2,[\"filter\",\"condition\"]],\"nempty\"],null]],null],[21,2,[\"filter\",\"component\",\"properties\"]]]]],false],[0,\"\\n                  \"],[6,\"button\"],[10,\"class\",\"ui clear-filter button\"],[11,\"title\",[26,\"t\",[\"components.object-list-view.clear-filter-in-column\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearFilterForColumn\",[21,2,[\"filter\"]]]],[8],[0,\"\\n                    \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"showMenuColumn\"]]],null,{\"statements\":[[0,\"          \"],[6,\"td\"],[10,\"class\",\"object-list-view-menu\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"unless\",[[22,[\"content\"]]],null,{\"statements\":[[0,\"      \"],[6,\"tr\"],[8],[0,\"\\n        \"],[6,\"td\"],[11,\"colspan\",[27,[[20,\"colspan\"]]]],[10,\"style\",\"text-align:center;\"],[8],[0,\"\\n            \"],[1,[20,\"placeholder\"],false],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[22,[\"contentWithKeys\"]]],[[\"key\"],[\"key\"]],{\"statements\":[[0,\"        \"],[1,[26,\"object-list-view-row\",null,[[\"record\",\"columns\",\"readonly\",\"required\",\"showMenuColumn\",\"showHelperColumn\",\"defaultRowConfig\",\"showValidationMessages\",\"showDeleteMenuItemInRow\",\"showEditMenuItemInRow\",\"showAsteriskInRow\",\"showCheckBoxInRow\",\"showDeleteButtonInRow\",\"showEditButtonInRow\",\"showPrototypeButtonInRow\",\"inExpandMode\",\"isParentRecordPropertyName\",\"hierarchicalIndent\",\"inHierarchicalMode\",\"singleColumnCellComponent\",\"loadRecords\",\"doRenderData\",\"rowClick\",\"selectRow\",\"deleteRow\",\"createNewByPrototype\",\"hierarchyPaging\",\"fixedHeader\",\"configurateRow\",\"allSelect\"],[[21,1,[]],[22,[\"columns\"]],[22,[\"readonly\"]],[22,[\"required\"]],[22,[\"showMenuColumn\"]],[22,[\"showHelperColumn\"]],[22,[\"defaultRowConfig\"]],[22,[\"showValidationMessagesInRow\"]],[22,[\"showDeleteMenuItemInRow\"]],[22,[\"showEditMenuItemInRow\"]],[22,[\"showAsteriskInRow\"]],[22,[\"showCheckBoxInRow\"]],[22,[\"showDeleteButtonInRow\"]],[22,[\"showEditButtonInRow\"]],[22,[\"showPrototypeButtonInRow\"]],[22,[\"inExpandMode\"]],[22,[\"isParentRecordPropertyName\"]],[22,[\"hierarchicalIndent\"]],[22,[\"inHierarchicalMode\"]],[22,[\"singleColumnCellComponent\"]],[22,[\"loadRecords\"]],[21,1,[\"doRenderData\"]],[26,\"action\",[[21,0,[]],\"rowClick\"],null],[26,\"action\",[[21,0,[]],\"selectRow\"],null],[26,\"action\",[[21,0,[]],\"deleteRow\"],null],[22,[\"createNewByPrototype\"]],[22,[\"hierarchyPaging\"]],[22,[\"fixedHeader\"]],[22,[\"configurateRow\"]],[22,[\"allSelect\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[22,[\"rowByRowLoadingProgress\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[8],[0,\"\\n          \"],[6,\"td\"],[11,\"colspan\",[27,[[20,\"colspan\"]]]],[10,\"style\",\"text-align:center;\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui active centered inline loader\"],[8],[9],[0,\"\\n            \"],[1,[26,\"t\",[\"components.object-list-view.loading-text\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"_selectedMobileMenu\"]],[22,[\"showCheckBoxInRow\"]]],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"check-rows-container\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"not-eq\",[[22,[\"class\"]],\"groupedit-container\"],null]],null,{\"statements\":[[0,\"      \"],[1,[26,\"flexberry-menu\",null,[[\"_skipDropdownInit\",\"onlyClickHandler\",\"items\",\"settings\",\"onItemClick\"],[true,true,[22,[\"_checkRowsSettingsItems\"]],[26,\"hash\",null,[[\"direction\"],[\"upward\"]]],[26,\"action\",[[21,0,[]],\"onCheckRowMenuItemClick\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"button\"],[11,\"class\",[27,[\"ui check-all-at-page-button icon \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.check-all-at-page-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"checkAllAtPage\"]],[8],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"check-square-o icon\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[6,\"label\"],[10,\"class\",\"count-selected-rows\"],[8],[1,[20,\"_selectedCountMobileMenu\"],false],[9],[0,\"\\n\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui delete-button \",[20,\"buttonClass\"],\" \",[26,\"if\",[[22,[\"readonly\"]],\"disabled\"],null],\" button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],null],[11,\"disabled\",[20,\"readonly\"],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"deleteSelectedRow\"]],[8],[0,\"\\n        \"],[1,[26,\"t\",[\"components.olv-toolbar.delete-button-text\"],null],false],[0,\"\\n        \"],[6,\"i\"],[10,\"class\",\"delete icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"button\"],[11,\"class\",[27,[\"ui clear-select-button \",[20,\"buttonClass\"],\" circular icon button\"]]],[11,\"title\",[26,\"t\",[\"components.olv-toolbar.clear-select-button-text\"],null],null],[10,\"type\",\"button\"],[3,\"action\",[[21,0,[]],\"clearSelectedRecords\"]],[8],[0,\"\\n      \"],[6,\"i\"],[10,\"class\",\"remove icon\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/mobile/components/object-list-view.hbs" } });
});
define("ember-app/templates/new-platform-flexberry-services-lock-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bMSSmbW6", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"flexberry-error\",null,[[\"error\"],[[22,[\"error\"]]]]],false],[0,\"\\n\"],[6,\"h3\"],[8],[1,[26,\"t\",[\"forms.new-platform-flexberry-services-lock-list.caption\"],null],false],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[1,[26,\"flexberry-objectlistview\",null,[[\"content\",\"modelName\",\"modelProjection\",\"editFormRoute\",\"refreshButton\",\"createNewButton\",\"deleteButton\",\"showCheckBoxInRow\",\"showDeleteButtonInRow\",\"pages\",\"perPageValue\",\"perPageValues\",\"recordsTotalCount\",\"hasPreviousPage\",\"hasNextPage\",\"gotoPage\",\"nextPage\",\"previousPage\",\"orderable\",\"sorting\",\"sortByColumn\",\"addColumnToSorting\",\"componentName\",\"beforeDeleteAllRecords\"],[[22,[\"model\"]],[22,[\"modelName\"]],[22,[\"modelProjection\"]],[22,[\"editFormRoute\"]],true,false,true,true,true,[22,[\"pages\"]],[22,[\"perPageValue\"]],[22,[\"perPageValues\"]],[22,[\"recordsTotalCount\"]],[22,[\"hasPreviousPage\"]],[22,[\"hasNextPage\"]],[26,\"action\",[[21,0,[]],\"gotoPage\"],null],[26,\"action\",[[21,0,[]],\"nextPage\"],null],[26,\"action\",[[21,0,[]],\"previousPage\"],null],true,[22,[\"computedSorting\"]],[26,\"action\",[[21,0,[]],\"sortByColumn\"],null],[26,\"action\",[[21,0,[]],\"addColumnToSorting\"],null],\"LockObjectListView\",[26,\"action\",[[21,0,[]],\"beforeDeleteAllRecords\"],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/new-platform-flexberry-services-lock-list.hbs" } });
});
define('ember-app/transforms/decimal', ['exports', 'ember-flexberry-data/transforms/decimal'], function (exports, _decimal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _decimal.default;
    }
  });
});
define('ember-app/transforms/file', ['exports', 'ember-flexberry-data/transforms/file'], function (exports, _file) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _file.default;
});
define('ember-app/transforms/flexberry-enum', ['exports', 'ember-flexberry-data/transforms/flexberry-enum'], function (exports, _flexberryEnum) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexberryEnum.default;
    }
  });
});
define('ember-app/transforms/guid', ['exports', 'ember-flexberry-data/transforms/guid'], function (exports, _guid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _guid.default;
    }
  });
});
define('ember-app/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant', ['exports', 'ember-flexberry-data/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsTExecutionVariant) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsTExecutionVariant.default;
    }
  });
});
define('ember-app/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation', ['exports', 'ember-flexberry-data/transforms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation'], function (exports, _iCSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _iCSSoftSTORMNETBusinessAuditObjectsTTypeOfAuditOperation.default;
    }
  });
});
define('ember-app/transforms/i-i-s-otdel-kadrov-2-\u0437\u0430\u043D\u044F\u0442\u043E\u0441\u0442\u044C', ['exports', 'ember-flexberry-data/transforms/flexberry-enum', 'ember-app/enums/i-i-s-otdel-kadrov-2-\u0437\u0430\u043D\u044F\u0442\u043E\u0441\u0442\u044C'], function (exports, _flexberryEnum, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryEnum.default.extend({
    enum: _iISOtdelKadrov.default,
    sourceType: 'IIS.Otdel_kadrov_2.Занятость'
  });
});
define('ember-app/transforms/i-i-s-otdel-kadrov-2-\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435', ['exports', 'ember-flexberry-data/transforms/flexberry-enum', 'ember-app/enums/i-i-s-otdel-kadrov-2-\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435'], function (exports, _flexberryEnum, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryEnum.default.extend({
    enum: _iISOtdelKadrov.default,
    sourceType: 'IIS.Otdel_kadrov_2.Образование'
  });
});
define('ember-app/transforms/i-i-s-otdel-kadrov-2-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435', ['exports', 'ember-flexberry-data/transforms/flexberry-enum', 'ember-app/enums/i-i-s-otdel-kadrov-2-\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435'], function (exports, _flexberryEnum, _iISOtdelKadrov) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _flexberryEnum.default.extend({
    enum: _iISOtdelKadrov.default,
    sourceType: 'IIS.Otdel_kadrov_2.Подразделение'
  });
});
define('ember-app/utils/batch-queries', ['exports', 'ember-flexberry-data/utils/batch-queries'], function (exports, _batchQueries) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _batchQueries.default;
    }
  });
});
define('ember-app/utils/cut-string-by-length', ['exports', 'ember-flexberry/utils/cut-string-by-length'], function (exports, _cutStringByLength) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cutStringByLength.default;
    }
  });
});
define('ember-app/utils/deserialize-sorting-param', ['exports', 'ember-flexberry/utils/deserialize-sorting-param'], function (exports, _deserializeSortingParam) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _deserializeSortingParam.default;
    }
  });
});
define('ember-app/utils/get-attr-locale-key', ['exports', 'ember-flexberry/utils/get-attr-locale-key'], function (exports, _getAttrLocaleKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getAttrLocaleKey.default;
    }
  });
});
define('ember-app/utils/get-current-agregator', ['exports', 'ember-flexberry/utils/get-current-agregator'], function (exports, _getCurrentAgregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getCurrentAgregator.default;
    }
  });
});
define('ember-app/utils/get-projection-by-name', ['exports', 'ember-flexberry/utils/get-projection-by-name'], function (exports, _getProjectionByName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getProjectionByName.default;
    }
  });
});
define('ember-app/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _compileTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compileTemplate.default;
    }
  });
});
define('ember-app/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
define('ember-app/utils/need-save-current-agregator', ['exports', 'ember-flexberry/utils/need-save-current-agregator'], function (exports, _needSaveCurrentAgregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _needSaveCurrentAgregator.default;
    }
  });
});
define('ember-app/utils/run-after', ['exports', 'ember-flexberry/utils/run-after'], function (exports, _runAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _runAfter.default;
    }
  });
});
define('ember-app/utils/serialize-sorting-param', ['exports', 'ember-flexberry/utils/serialize-sorting-param'], function (exports, _serializeSortingParam) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _serializeSortingParam.default;
    }
  });
});
define('ember-app/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
define('ember-app/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
define('ember-app/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('ember-app/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
define('ember-app/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
define('ember-app/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
define('ember-app/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
define('ember-app/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
define('ember-app/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
define('ember-app/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
define('ember-app/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
define('ember-app/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
define('ember-app/validators/messages', ['exports', 'ember-i18n-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
define('ember-app/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
define('ember-app/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
  });
});


define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-app/app")["default"].create({"name":"ember-app","backendUrl":"http://localhost:80","backendUrls":{"root":"http://localhost:80","api":"http://localhost:80/odata"},"log":{"enabled":true,"storeErrorMessages":true,"storeWarnMessages":false,"storeLogMessages":true,"storeInfoMessages":false,"storeDebugMessages":false,"storeDeprecationMessages":false,"storePromiseErrors":true,"showPromiseErrors":true,"errorMessageFilterActive":false},"perf":{"enabled":false},"lock":{"enabled":true,"openReadOnly":true,"unlockObject":true},"useUserSettingsService":true,"useAdvLimitService":true,"offline":{"offlineEnabled":true,"modeSwitchOnErrorsEnabled":false,"syncDownWhenOnlineEnabled":false},"components":{"flexberryFile":{"uploadUrl":"http://localhost:80/api/File","maxUploadFileSize":null,"uploadOnModelPreSave":true,"showUploadButton":true,"showModalDialogOnUploadError":true,"showModalDialogOnDownloadError":true},"flexberryObjectlistview":{"defaultPerPage":5,"useSidePageMode":true},"flexberryLookup":{"useSidePageMode":true},"flexberryGroupedit":{"useSidePageMode":true},"flexberrySimpledatetime":{}},"version":"0.0.0+e92a7a5f"});
}
//# sourceMappingURL=ember-app.map
