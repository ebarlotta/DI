var misDatos = angular.module('datosApp', []);

misDatos.controller('fiambresController', function($scope, $http) {

    // CONTROLADOR DE TURNOS
    //--------------------------------

    $scope.EnviarDatos = function() {
        $http.get('archivos/prueba.php')
            .then(function(datos) {
                $scope.respuesta = datos.data;
                //console.log(datos.data);
            });
    }

});