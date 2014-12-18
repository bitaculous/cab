`import { describeModule, it } from 'ember-mocha'`

# Specify the other units that are required for this test.
needs = [
  # 'controller:foo'
]

describeModule 'view:index', 'IndexView', { needs: needs }, ->
  it 'exists', ->
    view =  do @subject

    expect(view).to.be.ok

    return

  return