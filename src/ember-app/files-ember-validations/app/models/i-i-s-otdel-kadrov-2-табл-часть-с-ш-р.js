import {
  defineNamespace,
  defineProjections,
  Model as ТаблЧастьСШРMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-табл-часть-с-ш-р';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТаблЧастьСШРMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
