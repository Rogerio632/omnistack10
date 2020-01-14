export default function StringToArray(strToArr){
  return strToArr.split(',').map(arr => arr.trim());
}
