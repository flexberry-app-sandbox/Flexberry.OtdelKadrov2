import {
  defineNamespace,
  defineProjections,
  Model as ТаблЧастьСотрудMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-табл-часть-сотруд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТаблЧастьСотрудMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
