`import { describeModule, it } from 'ember-mocha'`

# Specify the other units that are required for this test.
needs = [
  # 'controller:foo'
]

describeModule 'route:index', 'IndexRoute', { needs: needs }, ->
  it 'exists', ->
    route = do @subject

    expect(route).to.be.ok

    return

  return