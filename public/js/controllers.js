angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Resource', '$location', '$window', 
	function($scope, Resource, $location, $window) {
	    Resource.get().then(function (data) {
	    	$scope.resources =  data.data;
	    	console.log($scope.resources);
	    });
	    $scope.deleteResource = function (id) {
    		Resource.delete(id);
    		$window.location.reload();
    	}
}]);

angular.module('ResourceCtrl', []).controller('ResourceController', ['$scope', 'Resource', '$location',
	function($scope, Resource, $location) {

		var resource = {};

	    $scope.addNewResource = function () {
		   	console.log($scope.resourceName);
		   	resource = {"name" : $scope.resourceName};
		   	Resource.create(resource);
		   	$location.path('/home');
		}

		$scope.grid = [["Line of Business","Project","Resource"],["Reports","File Upload","Finance Report"]];
}]);