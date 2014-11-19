/*var ang=angular.module("myApp",[]);


ang.controller("secondCtrl",function($scope){
	$scope.reverse=function(info){
		return info.split("").reverse().join("");
	};
});*/
var customerInfo=angular.module("myApp",[]);
customerInfo.controller("thirdCtrl",function($scope){
	$scope.toDoList=["Tea","Sugar","Milk","Bread","Eggs"];
	$scope.update=function(){
		$scope.toDoList.pop();
	};
});