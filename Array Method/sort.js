// TITLE : SORT

// W3school explain
// Method sort() sorts an array alphabetically
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings,
// "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.

const sortArr = ["a", "c", "b", "e", "d"]
sortArr.sort()
console.log(sortArr)

const sortArrNum = [2, 1, 5, 200]
sortArrNum.sort()
// Because at 200 and 5, first index 5 > 2 so array = [ 1, 2, 200, 5 ]
console.log(sortArrNum)