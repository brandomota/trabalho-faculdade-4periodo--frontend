angular.module('botApp').directive("app", function(){
    return {
        templateUrl: "/views/app.html",
        restrict: "E",
        controller: "appCtrl"
    }
});