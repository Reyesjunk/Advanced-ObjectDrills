//ADVANCED DRILLS 
var scratchData = [
  {name: 'Billy Boy', grade: 'D'},
  {name: 'Serious Sara', grade: 'B'},
  {name: 'Tepid Tom', grade: 'C'}
];

function makeStudentReport(data){
	let sArray = [];
	data.forEach(function(student){
		sArray.push(`${student.name}: ${student.grade}`);
	});
	return sArray;
	

}

console.log(makeStudentReport(scratchData));

//Enrol

let studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];
console.log(studentData);

function enrollInSummerShool(students){
	return students.map(function(student){
		return{ 
			name: student.name,
			status: 'In Summer School',
	    course: student.course
		}

	});
}
// function enrollInSummerShool(students) {
//   return students.map(function(student) {
//           student.status =  'In Summer school';
   
//   });
// }

console.log(enrollInSummerShool(studentData));

//Find by ID

function findById(item, idNum){
	item.map(function(find){
		if (find.id  === idNum){
			console.log(find);
			return find;
		}
	});

}

//Validate Keys
var objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
  }
var objectC = {
  id: 9,
  name: 'Billy Bear',
  age: 62,
  city: 'Milwaukee',
  status: 'paused'
}


var expectedKeys = [
  'id', 'name', 'age', 'city'
];

function validateKeys(object, expectedKeys) {
	let keys = Object.keys(object);

	//console.log(keys.length, expectedKeys.length)
	if (keys.length !== expectedKeys.length){
		return false;
	}


	for(var i = 0; i<expectedKeys.length; i++){
		if(!keys.find((key)=>{
			return key === expectedKeys[i]})) {
			return false;
		} 

	}
	return true;

}

console.log(validateKeys(objectA, expectedKeys));



//Todo list Factory
function makeToDos(owner, toDos){
	return{
		owner: owner,
		toDos: toDos,
		generateHtml: function(){
			var html = '<ul>';
			this.toDos.forEach(function(item){
				html+= '<li>' + item + '</li>';
			});
			return html + '</ul>';
		}
	}

}
console.log(makeToDos('Teddy', ['wake', 'eat', 'drink', 'work', 'sleep']));
