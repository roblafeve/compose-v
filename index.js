// composeV :: ((x,y, ...), (x,y, ...)) -> (a, b, ...) -> ((a, b, ...), b...)
module.exports = function composeV() {
  var fns = [].slice.call(arguments)
  return fns.reduce(function(a,b) {
    return function() {
      var args = [].slice.call(arguments)
      return a.apply(this, [b.apply(this, args)].concat(args.slice(1)))
    }
  })
}
