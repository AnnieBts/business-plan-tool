var app = new Vue({
	el: 'main',
	data: {

	},
	methods: {
		showInstructions() {
			var modal = document.getElementById("myInstructions2");

			var btn = document.getElementById("Instructions2");

			var span = document.getElementsByClassName("close")[0];


			
			modal.style.display = "block";

			span.onclick = function() {
				modal.style.display = "none";
			}

			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
		},
	}

})