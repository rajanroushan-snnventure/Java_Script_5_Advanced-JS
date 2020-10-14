console.log('Start');

/*********************************
 * Objects & Function.
 */
/*
 var temple = {

     firstName:'Krishna',
     birthOfYear:1980,
     married: false

 }
//constructor function
 var Person = function(firstName, birthOfYear, married){

    this.firstName = firstName;
    this.birthOfYear = birthOfYear;
    this.married = married;

 }
 Person.prototype.calculateAge  = function() {
    console.log(2020 - this.birthOfYear);
};

 temple.lastName = 'Sarkar';
 var raja = new Person('Raja', 1990, false);
 var rajan = new Person('Rajan', 1992, false);
 console.log(raja.calculateAge);
 console.log(rajan.calculateAge);
*/

//Object.create()
/*
var personPrototype = {
    calculateAge : function(){
        console.log(2020 - birthOfYear);
    }
}

var obj = Object.create(personPrototype);
obj.name = 'Raja',
obj.age = 28;

var obj1 = Object.create(personPrototype , {
    name:{values:'Rajan'},
    age:{values:'30'}
})
obj1.name = 'Rajan',
obj1.age = 28;

console.log(obj1);
*/

//Premitive and Objects

/*
var age = 30;
var obj = {
    name:'Rajan',
    age:28,
    city:'Bangalore'
}

var obj1 = obj;

console.log(obj , obj1);

obj.age = age;

function change(a,b){
    a.name = 'Raja',
    b.city = 'Bangalore Rural'
}

var a = change('Rajan' , 'Bangalore Urban');

console.log(a.name);
console(obj.city);
*/

/*
var years = [1990, 1995, 2000, 2010, 1950];

function arrayCalc(arr , fn){
    var arrRes = [];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020-el;
}

function fullAge(el){
    return el>=18;
}

function maxHeartRate(el){
    if(el>=18 && el<=81){
        return Math.round(206.9-(0.67*el));
    }else{
        return -1;
    }

}



var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, fullAge);
var maxHeartAges = arrayCalc(ages , maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(maxHeartAges);
*/

//returning the function

/*
function jobRelatedQuestion(job){
    if(job === 'teacher'){
            return function(name){
                console.log('In which subject you are expert '+name);
            }
    }else if(job === 'designer'){
            return function(name){
                console.log('how much you can reate your self in desing '+ name);
            }
    }else if(job === 'engineer'){
            return function(name){
                console.log('HI '+name);
            }
    }
}
var teacherRelatedQues = jobRelatedQuestion('teacher');
var teacherQues = teacherRelatedQues('Rajan');


var designerRelatedQues = jobRelatedQuestion('designer');
var designerQues = designerRelatedQues('Rajan');


var engineerQues = jobRelatedQuestion('engineer')('Rajan');
*/

//Invoke the function expression

(function(name){
    console.log('Hi '+name+' how are you?')
})('Rajan');

function question(){
    console.log('Hi, how are you?')
}
question();
















