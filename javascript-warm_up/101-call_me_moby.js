#!/usr/bin/node
export.callMeMoby = function (x, theFunction) {
	let y = 0;
	while(y < x) {
		theFunction()
		y++;
	}
};
