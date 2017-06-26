import _ from 'lodash'
import './assets/css/style.css'
// import Icon from './assets/img/loadding.png'

function component(){
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello','webpack'],' ');
	element.classList.add('test');
	// var myIcon = new Image();
 //    myIcon.src = Icon;

 //    element.appendChild(myIcon);
	return element;
}
document.body.appendChild(component());