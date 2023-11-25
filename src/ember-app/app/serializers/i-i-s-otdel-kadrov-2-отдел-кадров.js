import { Serializer as ОтделКадровSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel-kadrov-2-отдел-кадров';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтделКадровSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
