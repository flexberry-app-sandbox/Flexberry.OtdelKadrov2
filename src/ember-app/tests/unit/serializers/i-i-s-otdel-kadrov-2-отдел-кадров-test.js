import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otdel-kadrov-2-отдел-кадров', 'Unit | Serializer | i-i-s-otdel-kadrov-2-отдел-кадров', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-otdel-kadrov-2-отдел-кадров',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-otdel-kadrov-2-занятость',
    'transform:i-i-s-otdel-kadrov-2-образование',
    'transform:i-i-s-otdel-kadrov-2-подразделение',

    'model:i-i-s-otdel-kadrov-2-график-отпуск',
    'model:i-i-s-otdel-kadrov-2-должность',
    'model:i-i-s-otdel-kadrov-2-отдел-кадров',
    'model:i-i-s-otdel-kadrov-2-приказ-о-приеме',
    'model:i-i-s-otdel-kadrov-2-сост-штат-рас',
    'model:i-i-s-otdel-kadrov-2-сотрудники',
    'model:i-i-s-otdel-kadrov-2-таб-уч-р-в',
    'model:i-i-s-otdel-kadrov-2-табл-часть-г-о',
    'model:i-i-s-otdel-kadrov-2-табл-часть-с-ш-р',
    'model:i-i-s-otdel-kadrov-2-табл-часть-сотруд',
    'model:i-i-s-otdel-kadrov-2-табл-часть-т-у',
    'model:i-i-s-otdel-kadrov-2-увольнение',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
