import {
  defineNamespace,
  defineProjections,
  Model as ТабУчРВMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-таб-уч-р-в';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТабУчРВMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
