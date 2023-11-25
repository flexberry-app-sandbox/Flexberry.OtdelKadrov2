import {
  defineNamespace,
  defineProjections,
  Model as ТаблЧастьТУMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-табл-часть-т-у';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТаблЧастьТУMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
