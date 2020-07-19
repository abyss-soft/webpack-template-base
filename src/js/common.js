let add = (a, b) => a + b;
console.log(add(1, 2));

export function sumMy(x, y) {
  const one = x;
  return function (y) {
    return one + y;
  };
}
