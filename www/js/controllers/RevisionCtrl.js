// Contrôleur révision
app.controller('RevisionCtrl', function($scope, $http){

    $scope.titre = "Les tables de conjugaison";
    $scope.verbeActifInfinfinitif = "parl";
    $scope.verbeActifEntier = "parler";
    $scope.verbeActifGroupe = 1;

    $scope.userFirstname = "Jean-Marie";

    var url = "../js/json/conjugaison.json";
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

    var lesVerbes = ["parl","march","ag"];

    $scope.choixVerbe = function(a,b){
      $scope.verbeActifInfinfinitif = b;
      if (a==2){
        $scope.verbeActifGroupe=2;
      }else {
        $scope.verbeActifGroupe=1;
      }
    }

});
