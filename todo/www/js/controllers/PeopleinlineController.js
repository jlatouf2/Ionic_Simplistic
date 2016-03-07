(function(){
	angular.module('starter')
	.controller('PeopleinlineController', ['$http', '$scope', '$state', 'localStorageService', 'SocketService', PeopleinlineController]);
	
	function PeopleinlineController($http, $scope, $state, localStorageService, SocketService){

			//	$http.post('http://localhost:3001/confirm').success(function( data) { }, function(posts) {});

	
		$scope.login = function(username){
			localStorageService.set('username', username);
			$state.go('rooms');
		};

		$scope.enter = function(){
			$state.go('rooms');
		};
		$scope.testing = function(){
console.log('THIS WORKS!')
				$http.post('http://localhost:3001/confirm').success(function( data) { }, function(posts) {});
		
		};



	}

})();