import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СостШтатРасMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-сост-штат-рас';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СостШтатРасMixin, Validations, {
});

defineProjections(Model);

export default Model;
