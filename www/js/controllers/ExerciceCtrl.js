// Contrôleur exercice
app.controller('ExerciceCtrl', function($scope, $http){

    $scope.question = "Sur quel temps veux-tu t'entraîner ?";
    $scope.userFirstname = "Jean-Marie";

    var url = "../js/json/exercice.json";
    $http({
        method: 'GET',
        url: url,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .then(
            function (response) {
                $scope.liste = response.data;

                $scope.premierRep = 'false';

                // déclaration des variables
                var groupe;
                var verbeRad;       // radical seulement
                var verbeEnt;       // verbe entier
                var suffixte;       // er ou ir
                var terminaison;
                var pronom;
                var numVerbe;
                var nombreVerbe1;   // nombre de verbe du premier groupe
                var nombreVerbe2;   // nombre de verbe du deuxième groupe
                var reponseUser;
                var verdict;
                var nombreReussiteMsg;
                var nombreDefaiteMsg;
                var reussiteMsg;
                var defaiteMsg;

                var nombrePartie = 0;
                var nombreRepJuste = 0;


                // initialisation des variables
                nombreVerbe1 = Object.keys(response.data.verbe[0]).length;
                nombreVerbe2 = Object.keys(response.data.verbe[1]).length;

                nombreReussiteMsg = Object.keys(response.data.felicitation[0]).length;
                nombreDefaiteMsg = Object.keys(response.data.felicitation[1]).length;
                reussiteMsg = Math.floor(Math.random()*( nombreReussiteMsg + 1 )+0);
                defaiteMsg = Math.floor(Math.random()*( nombreDefaiteMsg + 1 )+0);

                $scope.score = 0;

                // Début de l'exercice
                $scope.showExe = function(temps){

                    // afficher l'exercice
                    $scope.exeStart = 'true';
                    $scope.repondu = 0 ;
                    $scope.correction = 0;

                    $('.reponse-user').val("");

                    // définit aléatoirement le pronom, groupe et verbe
                    pronomNum = Math.floor(Math.random()*(6)+0);
                    groupe = Math.floor(Math.random()*(2)+0);

                    // choisir un verbe dans la liste du premier ou deuxième
                    if (groupe==0){
                        numVerbe = Math.floor(Math.random()*( nombreVerbe1 + 1 )+0);
                        suffixte = "er";
                    }else {
                        numVerbe = Math.floor(Math.random()*( nombreVerbe2 + 1 )+0);
                        suffixte = "ir";
                    }

                    verbeRad = response.data.verbe[groupe][numVerbe];
                    verbeEnt = verbeRad + suffixte;
                    pronom = response.data.pronom[pronomNum];
                    terminaison = response.data[temps][groupe][pronomNum];

                    // valeurs renvoyer
                    $scope.verbe = verbeEnt;
                    $scope.verbeInf = verbeRad;
                    $scope.pronom = pronom;

                    if(temps == "present"){
                        $scope.temps = "présent";
                    }else {
                        $scope.temps = temps;
                    }

                    console.log("le temps : " + temps);
                    console.log("le verbe : " + verbeRad);
                    console.log("le verbe entier : " + verbeEnt);
                    console.log("le pronom : " + pronom);
                    console.log("la terminaison : " + terminaison);

                    $scope.submit = function() {

                        nombrePartie += 1;
                        reponseUser = $('.reponse-user').val();
                        console.log("Sa réponse : " + reponseUser);
                        $scope.repondu = 1;

                        if (reponseUser === terminaison){
                            verdict = response.data.felicitation[0][reussiteMsg];
                            nombreRepJuste += 1;
                        }else {
                            verdict = response.data.felicitation[1][reussiteMsg];
                            $scope.correction = pronom + " " + verbeRad + terminaison;
                        }

                        $scope.score = Math.round(((nombreRepJuste/nombrePartie)*100));
                        $scope.verdict = verdict;
                        $scope.premierRep = 'true';

                    };

                }

            },

            function (error) {
                alert("erreur Ajax");
            }
        )
    ;



});
