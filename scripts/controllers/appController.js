
 angular.module('botApp').controller('appCtrl',["$scope", "botService","toastr",
 function($scope, botService, toastr){

    $scope.listaMsgs = [];


    $scope.enviarMensagem = function(mensagem){
        var mensagemEnviada = {"Texto": mensagem, "Send": 1}
        $scope.listaMsgs.push(mensagemEnviada)
        botService.enviarMensagem(mensagem)
            .then(function(retorno){
                var msg = {"Texto": retorno.data, "Send": 2}
                $scope.listaMsgs.push(msg)
            })
            .catch(function(erro){
                console.log(erro)
                toastr.error("Deu um erro")
            })
    }

    $scope.conectarBot = function(){
        botService.retornarPrimeiraMensagem()
        .then(function(retorno){
            var msg = {"Texto": retorno.data, "Send": 2};
            $scope.listaMsgs.push(msg);
        }).catch(function(){
            toastr.error('erro ao conectar...');
        });
    };    

 }]);