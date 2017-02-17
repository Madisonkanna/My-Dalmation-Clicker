var initialDalmatians = [
	{
		clickCount : 0,
		name : 'Gatsby',
		imgSrc : 'img/dalmatian2.jpg',
		imgAttibution : 'https://flic.kr/p/7wAPfh'
	},
	{
		clickCount : 0,
		name : 'Nova'
		imgSrc : 'img/dalmatian3.jpg',
		imgAttibution : 'https://flic.kr/p/cNLRq7'
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

var ViewModel = function() {
	var self = this;

	//Create dalmatians and store them in an array
	this.dalmatianList = ko.observableArray([]);

	initialDalmatians.forEach(function(dalmatianItem){
		self.dalmatianList.push( new Dalmatian(dalmatianItem) );
	})

	this.currentDalmatian = ko.observable( new Dalmatian({
		clickCount: 0,
		name: 'Gatsby',
		imgSrc: 'img/dalmatian/jpg',
		imgAttribution: 'https://flic.kr/p/dP1PF4',
		nickname: ['Cutie', 'Dotty', 'Bug', 'Spots']

	}) );

	this.incrementCounter = function() {
		self.currentDalmatian().clickCount(self.currentDalmatian().clickCount() + 1);
	};

};

ko.applyBindings(new ViewModel());
