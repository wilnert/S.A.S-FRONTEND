(function(){
	'use strict';
    class UserViewComponent{
		constructor(userService,$stateParams,$state){
			this.$stateParams = $stateParams;
			this.userService = userService;
			this.$state = $state;
			//this.$auth=$auth;
			}
			$onInit(){
				//this.userService.get({id:this.$auth.getPayload().sub}).$promise
				this.userService.get({id:this.$stateParams.id}).$promise
				.then(response=>{
					this.user=response;
					console.log(this.user);
				});
			}

			update(){
				
				this.userService.update({idUser:this.$stateParams.idUser},this.user).$promise
				.then(response => {
					this.user = response;
					console.log(alert="Actualizacion exitosa",response);
					this.$state.go('user-view');
				})
				.catch(err => console.log("ERROR",err));
			}

		}
		UserViewComponent.$inject=['userService','$stateParams','$state'];
angular.module('startUpApp')
	.component('userView',{
		templateUrl:"app/user/user-view/user-view.html",
		controller:UserViewComponent,
		controllerAs:'vm'
	})

})();
