var ViewModel = function() {
	//Create and set count to zero
	this.clickCount = ko.observable(0);
	//Create Dal name
	this.name = ko.observable('Gatsby');
	//Add image
	this.imgSrc= jo.observable('img/dalmatian.jpg');
	this.incrementCounter = function() {

	}
}