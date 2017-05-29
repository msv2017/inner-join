# inner-join

inner-join is a node.js module that simply join arrays of objects by defined key property

## Installation
`npm install inner-join`

## Usage
Following code shows how to use it:

	var innerjoin = require("inner-join");

	var arr1=[
		{id:1, name:'Sam'},
		{id:2, name:'Bob'}];
		
	var arr2=[
		{id:1, age:25},
		{id:2, age:30}];
		
		
	var arr3=[
		{id:1, height:175},
		{id:2, height:180}];

	var r = innerjoin(arr1, arr2, arr3, x => x.id);
	console.log(r);

Result:

	[ { id: '1', name: 'Sam', age: 25, height: 175 },
	  { id: '2', name: 'Bob', age: 30, height: 180 } ]
