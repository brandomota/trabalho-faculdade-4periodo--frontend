(function () {
    'use strict';
}());

angular.module('botApp').service('botService',['$http', function ($http) {

    return {
        retornarPrimeiraMensagem: function () {
            return $http({
                url: 'http://localhost:3000',
                method: 'GET'
            })
        }
    }

}]);