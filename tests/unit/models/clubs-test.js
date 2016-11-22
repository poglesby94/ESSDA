import { moduleForModel, test } from 'ember-qunit';

moduleForModel('clubs', 'Unit | Model | clubs', {
  // Specify the other units that are required for this test.
  needs: ['model:team']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
