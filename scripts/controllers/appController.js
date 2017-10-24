
 angular.module('botApp').controller('appCtrl',["$scope", "botService","toastr",
 function($scope, botService, toastr){

    $scope.listaMsgs = [];

    $scope.teste = function(){
        console.log("ojjjjj")
    }

    $scope.conectarBot = function(){
        console.log("oks")
        botService.retornarPrimeiraMensagem()
        .then(function(retorno){
            console.log(retorno)
            var msg = {"Texto": retorno.data, "Send": 2};
            $scope.listaMsgs.push(msg);
        }).catch(function(){
            toastr.error('erro ao conectar...');
        });
    };    

 }]);