import {
  defineNamespace,
  defineProjections,
  Model as УвольнениеMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-увольнение';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УвольнениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
