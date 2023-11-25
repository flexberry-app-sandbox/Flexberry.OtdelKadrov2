import { Serializer as ГрафикОтпускSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-график-отпуск';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГрафикОтпускSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
