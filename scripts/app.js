console.log('component has loaded');

// var container = document.getElementById('container');
// console.log(container);

window.onload = function () {
var body = document.getElementsByTagName('body')[0];
var jazzImg = 'http://blogs.mcall.com/.a/6a00d8341c4fe353ef01a3fad03914970b-pi';


var component = {

  domElement : null,

  initialize: function(domSelector){
    console.log('starting comp.');
    this.domElement = document.createElement('img');
    domSelector.appendChild(this.domElement);
    console.log(this.domElement);
  },
    render: function(imageSrc) {
      this.domElement.src = imageSrc;
    }
};

var body = document.getElementsByTagName('header')[0];


// greenMill.innerHTML = '';
var jazzImg = 'http://blogs.mcall.com/.a/6a00d8341c4fe353ef01a3fad03914970b-pi';

component.initialize(body);
// component.render(jazzImg);

var button = document.getElementById('jazzButton');
button.addEventListener('click', function(){
  console.log('button pressed');
  component.render(jazzImg);
});




} // end window.onload
