import {
  defineNamespace,
  defineProjections,
  Model as ТаблЧастьГОMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-табл-часть-г-о';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТаблЧастьГОMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
