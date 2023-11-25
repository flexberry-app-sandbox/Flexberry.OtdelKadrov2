import { Serializer as ПриказОПриемеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-приказ-о-приеме';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПриказОПриемеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
