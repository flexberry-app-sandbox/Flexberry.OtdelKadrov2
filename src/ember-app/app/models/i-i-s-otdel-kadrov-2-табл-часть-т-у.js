import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТаблЧастьТУMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-табл-часть-т-у';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТаблЧастьТУMixin, Validations, {
});

defineProjections(Model);

export default Model;
