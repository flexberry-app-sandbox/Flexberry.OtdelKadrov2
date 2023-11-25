import {
  defineNamespace,
  defineProjections,
  Model as СостШтатРасMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-сост-штат-рас';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СостШтатРасMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
