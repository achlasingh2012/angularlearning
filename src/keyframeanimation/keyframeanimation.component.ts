import { Component, OnInit } from '@angular/core';
import { trigger,state,transition,style,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-keyframeanimation',
  templateUrl: './keyframeanimation.component.html',
  styleUrls: ['./keyframeanimation.component.css'],
  animations: [
            trigger('myAnimation', [
            	state('small', style({transform: 'scale(1)'})),
            	state('large', style({transform: 'scale(1.5)'})),
            	transition('* <=> *', animate('500ms ease-in'))
            	]),

            trigger('myHoverAnimation', [
            	state('off', style({transform: 'scale(1)'})),
            	state('on', style({transform: 'scale(1.5)'})),

            	transition('off <=> on', animate('500ms ease-in-out')),
                //transition('on => off', animate('500ms ease-out'),
            	]),

            trigger('myTopAnimation', [
            	transition('* <=> *', animate('1000ms ease-in',
            				keyframes([
            				style({opacity:0, transform: 'translateY(-75px)', offset: 0}),
            				style({opacity:1, transform: 'translateY(35px)', offset: 0.5}),
            				style({opacity:1, transform: 'translateY(0)', offset: 1})]),												
            		)),

            	]),
   ]
})
export class KeyframeanimationComponent implements OnInit {
iconimg="./assets/iconimg.png";
state: string='small';
animateMe(){
	this.state=(this.state==='small' ? 'large' : 'small');
}
states: string='off';
animateOn(){
	this.states=(this.states==='on' ? 'off' : 'on');
}
animateOff(){
  this.states=(this.states==='off' ? 'on' : 'off');
}

  constructor() { }

  ngOnInit() {
  }

}
