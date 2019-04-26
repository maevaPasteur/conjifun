app.config(function($stateProvider){

	$stateProvider
		.state(
			'appli', {
				url : '/',
				templateUrl : 'templates/general.html',
				controller : 'GeneralCtrl'
		})
		.state(
			'appli.home', {
				url : '/video/home',
				templateUrl : 'templates/home.html',
				controller : 'HomeCtrl'
		})
		.state(
			'appli.revision', {
				url : '/appli/revision',
				templateUrl : 'templates/revision.html',
				controller : 'RevisionCtrl'
		})
		.state(
			'appli.profile', {
				url : '/appli/profile',
				templateUrl : 'templates/profile.html',
				controller : 'ProfileCtrl'
		})
		.state(
			'appli.exercice', {
				url : '/appli/exercice',
				templateUrl : 'templates/exercice.html',
				controller : 'ExerciceCtrl'
		})

});
