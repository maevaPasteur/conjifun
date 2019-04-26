// Contrôleur profile
app.controller('ProfileCtrl', function($scope, $http){

    $scope.titre = "Profil";

    var url = "../js/json/user.json";
    $http({
        method: 'GET',
        url: url,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .then(
            function (response) {
                $scope.liste = response.data;
            },

            function (error) {
                alert("erreur Ajax");
            }
        )
    ;

});
