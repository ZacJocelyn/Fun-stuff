// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.
//
// Your task is to return one of the following strings:
//
// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
// your function should return Victoria, Puerto Rico.
//
// Notes:
//
// The input array will always be valid and formatted as in the example above.

// function getFirstPython(list) {
//   var pythonDev = []
//   for (var i = 0; i < list.length; i++) {
//     if (list[i].language === 'Python') {
//       pythonDev.push(list[i].firstName);
//       pythonDev.push(list[i].country);
//       var python = pythonDev.join(', ')
//       console.log(python);
//       break;
//     }else {
//       console.log('There will be no Python developers');
//     }
//   }
// }
function getFirstPython(list) {
  var counter = -1
  var pythonDev = []
  var i
  for (i = 0; i < list.length; i++) {
    if (list[i].language === 'Python'){
      counter = i;
      break;
    }
  }
  if (counter > -1) {
    pythonDev.push(list[counter].firstName);
    pythonDev.push(list[counter].country);
    var python = pythonDev.join(', ')
    return python
  }else {
    return 'There will be no Python developers'
  }

}
