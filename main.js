function removeAllElements(col) {
	if(col.length < 1) return;
	for (i in col){
		col[i].parentNode.removeChild(col[i]);
	}
}

setInterval(() => {
	removeAllElements(document.getElementsByClassName("css-1dbjc4n r-1ysxnx4 r-k0dy70 r-t23y2h r-1phboty r-rs99b7 r-dr54s0 r-1bro5k0 r-1udh08x"));
},100);

/*
 * TODO: Fix the in-profile Who to follow block removal to
 * avoid the "Something went wrong error".

setInterval(() => {
	var elements = document.getElementsByClassName("css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0");
	for (i in elements){
		if(elements[i].innerText == "Who to follow"){
			setTimeout((el,i) => {
				var block = el[i].parentNode.parentNode.parentNode.parentNode.parentNode;
				block.parentNode.removeChild(block.nextElementSibling);
				block.parentNode.removeChild(block.nextElementSibling);
				block.parentNode.removeChild(block.nextElementSibling);
				block.parentNode.removeChild(block.nextElementSibling);
				block.parentNode.removeChild(block);
			}, 100, elements, i);
		}
	}
},500);

*/
