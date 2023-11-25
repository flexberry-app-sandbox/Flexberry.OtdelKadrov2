import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтделКадровMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-отдел-кадров';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтделКадровMixin, Validations, {
});

defineProjections(Model);

export default Model;
