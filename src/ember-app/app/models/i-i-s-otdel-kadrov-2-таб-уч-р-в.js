import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТабУчРВMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-таб-уч-р-в';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТабУчРВMixin, Validations, {
});

defineProjections(Model);

export default Model;
