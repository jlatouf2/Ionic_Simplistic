(function(){
	angular.module('starter')
	.controller('StorenamesController', ['$http', '$scope', '$state', 'localStorageService', 'SocketService', StorenamesController]);
	
	function StorenamesController($http, $scope, $state, localStorageService, SocketService){


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