angular.module('ResourceService', []).factory('Resource', ['$http', function($http) {

    return {
        get : function() {
            return $http.get('/api/resources');
        },

        create : function(resourceData) {
            return $http.post('/api/resources', JSON.stringify(resourceData));
        },

        delete : function(id) {
            return $http.delete('/api/resources/' + id);
        }
    }       

}]);