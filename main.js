function removeAllElements(col) {
	for (i in col){
		col[i].parentNode.removeChild(col[i]);
	}
}

setInterval(() => {
	removeAllElements(document.getElementsByClassName("css-1dbjc4n r-1uaug3w r-1uhd6vh r-t23y2h r-1phboty r-rs99b7 r-ku1wi2 r-1bro5k0 r-1udh08x"));
},100);
