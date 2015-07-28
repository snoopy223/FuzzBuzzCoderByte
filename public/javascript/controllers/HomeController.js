(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);
//HomeFactory injected into HomeController for access of methods on that page
HomeController.$inject = ['HomeFactory'];
//HomeFactory method function passed in as a callback to HomeController so colorChange can be accessed and executed
//or any HomeFactory method we want
function HomeController(HomeFactory) {
	//1.When we say "this" we are referring to the HomeController 
	//function itself (which also includes all the functions on HomeFactory
	//since it's passed in as a callback parameter. 

	//2. Think of vm as a stretch of highway that take us from the viewmodel(Home.html) to
	//the controller(HomeController.js). The highway starts and stops right here!

	//3. When we say "vm.something = HomeFactory.something" we are starting a new highway 
	//that goes from the HomeController.js(vm.something) to the HomeFactory.js (HomeFactory.something)
	var vm = this;
	
	vm.title = 'Welcome to our App!';
//Recieves user input from ng-click on Home.html and calls the colorChange function 
//via callback due to HomeFactory being passed in as a parameter to the overarching function HomeController


vm.division = function (){

	HomeFactory.division(vm.num);
	
	vm.result = HomeFactory.result;
};
}
})();