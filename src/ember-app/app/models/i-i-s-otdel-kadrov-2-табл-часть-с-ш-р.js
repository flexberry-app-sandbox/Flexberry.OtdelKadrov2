import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТаблЧастьСШРMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-2-табл-часть-с-ш-р';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТаблЧастьСШРMixin, Validations, {
});

defineProjections(Model);

export default Model;
