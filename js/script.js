"use strict";

window.onload = function () {
	// toggle menu function
	var menu = document.querySelector("#menu");

	menu.onclick = function () {

		var list = document.querySelector(".sideNav");
		var close = document.querySelector("#close")
		var overlay = document.createElement("div");
		overlay.setAttribute("id", "overlay");

		document.body.appendChild(overlay);
		list.classList.add("open");

		overlay.onclick = function () {
			list.classList.remove("open");
			document.body.removeChild(overlay);

		}

		close.onclick = function () {
			list.classList.remove("open");
			document.body.removeChild(overlay);
			
		}


	}

	// collapsible
	var acc = document.querySelectorAll(".accordion");

	acc.forEach(function(e) {
		e.parentElement.addEventListener("click", function () {
			var collapsible = e.nextElementSibling;
			collapsible.classList.toggle("open");
			if (e.lastElementChild.innerHTML != "keyboard_arrow_up") {
				e.lastElementChild.innerHTML = "keyboard_arrow_up";
			} else {
				e.lastElementChild.innerHTML = "keyboard_arrow_down";
			}
		});
	})

	//read all
	var readall = document.querySelector("#btnLeggiTutto");

	readall.onclick = function () {
		this.style.display = "none";
		var leggiTutto = document.querySelectorAll(".leggitutto");
		// var i;
		// for (i=0; i < leggiTutto.length; i++){
		// leggiTutto[i].style.display = "flex";
		//}

		leggiTutto.forEach((e, i) => {
			e.style.display = "flex";
			e.style.animation = "slide-in .3s ease";
		});


	};

}