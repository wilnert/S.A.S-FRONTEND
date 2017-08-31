
(function(){
	'use strict';

	class UserCreateComponent{
		constructor(userService,typeDocumentService,$state,rolService){
		this.userService = userService;
		this.typeDocumentService = typeDocumentService;
		this.$state = $state;
		this.rolService=rolService;
	}
	//SERVICES REQUIRED FOR SELECT CITIES AND TYPE DOCUMENTS ON THE REGISTER OF USERS.
		$onInit(){



			this.typeDocumentService.query().$promise
			.then(response => {
				this.typeDocument = response;
				console.log(this.typeDocument);
			})
			.catch(err => console.log("ERROR"));


						this.rolService.query().$promise
						.then(response => {
							this.roles = response;
							console.log(this.roles);
						})
						.catch(err => console.log("ERROR"));
}

		createUser(){


      console.log(this.user);
			console.log("rol",this.rol);
			this.userService.save({id:this.rol},this.user).$promise
			.then(response => {
				console.log(alert="Registro exitoso",response);
				// this.$state.go('main');
			})
			.catch(err => console.log("ERROR",err));
		}
}
UserCreateComponent.$inject =  ['userService','typeDocumentService','$state','rolService'];
angular.module('eventosSasApp')
	.component('userCreate',{
		templateUrl:"app/user/user-create/user-create.html",
		controller:UserCreateComponent,
		controllerAs:'vm'
	});

})();
