// Dado un array de tamaño n y un valor x dado como un entero, que esta dado entre los numeros reales
// (array es numerico), dado el valor x, encontrar si el numero está en la lista
// 1. Array debe ser unico, no repetidos
// 2. Tienen que estar ordenados de menor a mayor

function findNumberBinaryAlgorithm(
  list: number[],
  numberToFind: number,
): number | null {
  const set = new Set(list.sort((a: number, b: number) => a - b));
  const sortedArray = Array.from(set);

  console.log('sortedArray', sortedArray);

  let subArray: number[] = [];
  const x = sortedArray.length / 2;
  const y = Number(x.toFixed(0));

  if (y < numberToFind) {
    subArray = sortedArray.slice(y - 1, sortedArray.length);
  } else  {
    subArray = sortedArray.slice(0, y);
  }

  const foundNumberIndex = subArray.indexOf(numberToFind);

  if (foundNumberIndex <= -1) {
    return null;
  }

  return sortedArray.indexOf(numberToFind);
}

function findNumber(list: number[], numberToFind: number): number | null {
  const set = new Set(list.sort((a: number, b: number) => a - b));
  const array = Array.from(set);

  console.log("Array", array);

  const index = array.indexOf(numberToFind);

  if (index <= -1) {
    return null;
  }

  return index;
}

function main() {
  const nums: number[] = [9, 1, 3, 5, 7, -100];

  const foundNumber: number | null = findNumberBinaryAlgorithm(nums, -100);

  if (foundNumber == null) {
    console.log("Number not found");
    return;
  }

  console.log(`Found Number position: ${foundNumber}`);
}

main();
