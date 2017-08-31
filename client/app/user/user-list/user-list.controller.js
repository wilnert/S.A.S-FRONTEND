(function(){
	'use strict';

	class userListComponent{
		constructor(userService){
			this.userService = userService;

		}

		$onInit(){
			this.userService.query().$promise
			.then(response => {
				this.user = response;
				console.log("usuarios",this.user);

			});
		}


	}
angular.module('eventosSasApp')
	.component('userList',{
		templateUrl:"app/user/user-list/user-list.html",
		controller:userListComponent,
		controllerAs:'vm'
	})

})();
