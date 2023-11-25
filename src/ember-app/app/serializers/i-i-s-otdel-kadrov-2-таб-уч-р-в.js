import { Serializer as ТабУчРВSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-таб-уч-р-в';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТабУчРВSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
