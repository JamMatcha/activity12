//console.log ("Hello World");
/*
Create variables to store to the following user details:
        - first name - String
        - last name - String
        - age - Number
        - hobbies - Array
        - work address - Object
The hobbies array should contain at least 3 hobbies as Strings.
The work address object should contain the following key-value pairs:
        - houseNumber: <value>
        - street: <value>
        - city: <value>
        - state: <value>
*/

//first part
let fName = "John";
let lName = "Smith";
let age = 30;
let listOfHobbies = ['Biking', 'Mountain Climbing', 'Swimming'];
let workAddress = {
	houseNumber:'32',
	street: 'Washington',
	city: 'Lincoln',
	state: 'Nebraska'
};


//print output
console.log("First Name: " + fName);
console.log("Last Name: " + lName);
console.log("Age: " + age);
console.log("Hobbies: ");
console.log(listOfHobbies);
console.log("Work Address: " );
console.log(workAddress);


//second part
let fullName = "Steve Rogers";
let currentAge = 40;
let listOfFriends = ["Tony", "Bruce", "Thor", "Natasha", "Clint", "Nick"];
let fullProfile ={
	username: 'captain_america',
	fullName: 'Steve Rogers',
	age: '40',
	isActive: false
}
let bestFriend = "Bucky Barnes";
let wasFrozen = "Arctic Ocean";

// print output
console.log("My full name is: " + fullName);
console.log("My current age is: " + currentAge);
console.log("My Friends are:");
console.log(listOfFriends);
console.log("My Full Profile:\n");
console.log(fullProfile);
console.log("My bestfriend is: " + bestFriend);
console.log("I was found frozen in: " + wasFrozen);