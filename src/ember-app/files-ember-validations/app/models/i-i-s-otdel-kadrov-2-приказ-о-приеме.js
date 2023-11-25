import {
  defineNamespace,
  defineProjections,
  Model as ПриказОПриемеMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-приказ-о-приеме';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриказОПриемеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
