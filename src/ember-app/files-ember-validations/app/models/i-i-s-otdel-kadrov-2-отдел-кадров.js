import {
  defineNamespace,
  defineProjections,
  Model as ОтделКадровMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-отдел-кадров';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтделКадровMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
