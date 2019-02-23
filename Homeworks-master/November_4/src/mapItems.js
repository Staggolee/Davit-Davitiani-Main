export default function mapItems(array, count, callback) {
  const newArr = [];
  count = count > array.length ? array.length : count;
  for (let i = 0; i < count; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
}
