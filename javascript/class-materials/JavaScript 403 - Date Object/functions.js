export default function sumArrays(arr) {
  const sum = arr.reduce((total, current) => {
    return total + current;
  }, 0);

  return sum;
}


export function mulArrays(arr) {
  const mul = arr.reduce((total, current) => {
    return total * current;
  }, 1);

  return mul;
}

export function mulArrays10(arr) {
  const mul = arr.reduce((total, current) => {
    return total * current;
  }, 10);

  return mul;
}
