var ViewModel = function() {

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

}

ko.applyBindings(new ViewModel());


var Dalmatian = function() {
	//Create and set count to zero
	this.clickCount = ko.observable(0);
	//Create Dal name
	this.name = ko.observable('Gatsby');
	//Add image
	this.imgSrc= ko.observable('img/dalmatian.jpg');
	//Add image attribution
	this.imgAttribution = ko.observable('https://flic.kr/p/dP1PF4');
	//Add increment counter
	this.nicknames = ko.observableArray(['Cutie', 'Dotty', 'Bug', 'Spots']);

	this.title = ko.computed(function() {
		var tite;
		var clicks = this.clickCount() {
			if (clicks < 10) {
				title = 'Newborn';
			} else if (clicks < 50) {
				title = 'Infant';
			} else if (clicks < 100) {
				title = 'Child';
			} else if (clicks < 500) {
				title = 'Adult';
			} else {
				title = 'Ninja';
			}
			return title;
		}, this);

}