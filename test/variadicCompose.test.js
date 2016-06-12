var composeV = require('../index.js')

describe('composeV()', function() {
  it('exists', function() {
    expect(composeV(function(){})).to.be.ok
  })
  it('composes right to left', function() {
    function x(x) { return x + ' composition' }
    function y(x) { return x + ' is' }
    function z(x) { return x + ' great!' }
    var actual = composeV(z, y, x)('Variadic')
    var wanted = 'Variadic composition is great!'
    expect(actual).to.equal(wanted)
  })
  it('composes unary functions', function() {
    function x(x) { return x + x }
    function y(x) { return x * x }
    var actual = composeV(y, x)(5)
    var wanted = 100
    expect(actual).to.equal(wanted)
  })
  it('composes variadic functions', function() {
    function x(x, y) { return x + y }
    function y(x, y) { return x * y }
    var actual = composeV(y, x)(5, 5) // (a, b) -> y(x(a, b), b) OR 5 + 5 * 5
    var wanted = 50
    expect(actual).to.equal(wanted)
  })
  it('composes functions with differing arity', function() {
    function x(x) { return x + 1 }
    function y(x, y) { return x * y }
    var actual = composeV(y, x)(5, 5) // (a, b) -> y(x(a, b), b) OR 5 + 5 * 5
    var wanted = 30
    expect(actual).to.equal(wanted)
  })
})
