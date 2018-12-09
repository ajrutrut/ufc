const toggle = document.getElementsByClassName('drop_btn');
const name = document.getElementById("name");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const fly_click = document.getElementById("fly_click");
const bantam_click = document.getElementById("bantam_click");
const welter_click = document.getElementById("welter_click");
const middle_click = document.getElementById("middle_click");
const light_click = document.getElementById("light_click");
const thumbnail = document.getElementById("thumbnail");

	//toggle button for dropdown menu
   function toggle_btn() {
       this.parentElement.querySelector(".drop_content").classList.toggle("show");
    };

	for (var i = 0; i < toggle.length; i ++) {
	    toggle[i].addEventListener('click', toggle_btn, false);
	}

			
		//-----Lists Name and Position of fighter in array list --------
		/*
		fetch("/fighters/pettis")
		.then(res => {
			return res.json();
		})
		.then(json => {
			//console.log(json[86]);
			
			for(var i = 0; i < json.length; i++) {
				console.log(`${json[i].last_name} ${i++}`);		
			}
			
		})
		.catch(err => {
			return Error;
		});
		*/

// API CALLS --------

// FLY WEIGHT -----------
fly_click.addEventListener("click", () => {
	fetch("/fighters/pettis")
	.then(res => {
		return res.json();
	})
	.then(json => {
		let fighter = json[320];
		//console.log(json[320]);
		
		name.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
		wins.innerHTML = `${fighter.wins}`;
		losses.innerHTML = `${fighter.losses}`;
		thumbnail.src = `${fighter.thumbnail}`;

	})
	.catch(err => {
		return Error;
	});
}, true);

//BANTAM WEIGHT ---------------
bantam_click.addEventListener("click", () => {
	fetch("/fighters/dillshaw")
	.then(res => {
		return res.json();
	})
	.then(json => {
		let fighter = json[86];
		//console.log(json[86]);
		
		name.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
		wins.innerHTML = `${fighter.wins}`;
		losses.innerHTML = `${fighter.losses}`;
		thumbnail.src = `${fighter.thumbnail}`;

	})
	.catch(err => {
		return Error;
	});
}, true);

//FEATHERWEIGHT------
feather_click.addEventListener("click", () => {
	fetch("/fighters/elkins")
	.then(res => {
		return res.json();
	})
	.then(json => {
		let fighter = json[828];
		//console.log(json[816]);
		
		name.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
		wins.innerHTML = `${fighter.wins}`;
		losses.innerHTML = `${fighter.losses}`;
		thumbnail.src = `${fighter.thumbnail}`;

	})
	.catch(err => {
		return Error;
	});
}, true);

// WELTERWEIGHT ------------
welter_click.addEventListener("click", () => {
	fetch("/fighters/mcgregor")
	.then(res => {
		return res.json();
	})
	.then(json => {
		let fighter = json[362];
		//console.log(json[362]);
		
		name.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
		wins.innerHTML = `${fighter.wins}`;
		losses.innerHTML = `${fighter.losses}`;
		thumbnail.src = `${fighter.thumbnail}`;

	})
	.catch(err => {
		return Error;
	});
}, true);

//LIGHTWEIGHT-----------
light_click.addEventListener("click", () => {
	fetch("/fighters/woodley")
	.then(res => {
		return res.json();
	})
	.then(json => {
		let fighter = json[384];
		//console.log(json[384]);
		
		name.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
		wins.innerHTML = `${fighter.wins}`;
		losses.innerHTML = `${fighter.losses}`;
		thumbnail.src = `${fighter.thumbnail}`;

	})
	.catch(err => {
		return Error;
	});
}, true);

// MIDDLEWEIGHT------------
middle_click.addEventListener("click", () => {
	fetch("/fighters/whittaker")
	.then(res => {
		return res.json();
	})
	.then(json => {
		let fighter = json[766];
		//console.log(json[754]);
		
		name.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
		wins.innerHTML = `${fighter.wins}`;
		losses.innerHTML = `${fighter.losses}`;
		thumbnail.src = `${fighter.thumbnail}`;

	})
	.catch(err => {
		return Error;
	});
}, true);

//Light Heavy Weight
lightheavy_click.addEventListener("click", () => {
	fetch("/fighters/rua")
	.then(res => {
		return res.json();
	})
	.then(json => {
		let fighter = json[764];
		//console.log(json[738]);
		
		name.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
		wins.innerHTML = `${fighter.wins}`;
		losses.innerHTML = `${fighter.losses}`;
		thumbnail.src = `${fighter.thumbnail}`;

	})
	.catch(err => {
		return Error;
	});
}, true);

//Heavy Weight-----------
heavy_click.addEventListener("click", () => {
	fetch("/fighters/overeem")
	.then(res => {
		return res.json();
	})
	.then(json => {
		let fighter = json[20];
		//console.log(json[626]);
		
		name.innerHTML = `${fighter.first_name} ${fighter.last_name}`;
		wins.innerHTML = `${fighter.wins}`;
		losses.innerHTML = `${fighter.losses}`;
		thumbnail.src = `${fighter.thumbnail}`;

	})
	.catch(err => {
		return Error;
	});
}, true);

