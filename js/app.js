var initialDalmatians = [
	{
		clickCount : 0,
		name : 'Gatsby',
		imgSrc : 'img/dalmatian.jpg',
		imgAttibution : 'https://flic.kr/p/7wAPfh',
		nicknames: ['Dotty']
	},
	{
		clickCount : 0,
		name : 'Nova',
		imgSrc : 'img/dalmatian2.jpg',
		imgAttibution : 'https://flic.kr/p/R2h56f',
		nicknames: ['Old pal']
	},
	{
		clickCount : 0,
		name : 'Lyra',
		imgSrc : 'img/dalmatian3.jpg',
		imgAttribution : 'https://flic.kr/p/cNLRq7',
		nicknames: ['Cutie']
	}

]


var Dalmatian = function(data) {
	//Create and set count to zero
	this.clickCount = ko.observable(data.clickCount);
	//Create Dal name
	this.name = ko.observable(data.name);
	//Add image
	this.imgSrc= ko.observable(data.imgSrc);
	//Add image attribution
	this.imgAttribution = ko.observable(data.imgAttribution);
	//Add increment counter
	this.nicknames = ko.observableArray(data.nicknames);

	this.title = ko.computed(function() {
		var title;
		var clicks = this.clickCount(); 
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


function removeButton() {
	document.getElementById("dalmatianPic").remove();
}

var ViewModel = function() {
	var self = this;

	//Create dalmatians and store them in an array
	this.dalmatianList = ko.observableArray([]);

	initialDalmatians.forEach(function(dalmatianItem){
		self.dalmatianList.push( new Dalmatian(dalmatianItem) );
	})

	this.currentDalmatian = ko.observable( this.dalmatianList() [0] );

	this.incrementCounter = function() {
		self.currentDalmatian().clickCount(self.currentDalmatian().clickCount() + 1);
	};

	this.setDalmatian = function(clickedDalmatian) {
		self.currentDalmatian(clickedDalmatian);
	}

};

ko.applyBindings(new ViewModel());
