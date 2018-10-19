import { Component, OnInit } from '@angular/core';
import { trigger,state,transition,style,animate,keyframes,query,stagger} from '@angular/animations';
@Component({
  selector: 'app-staggeranimation',
  templateUrl: './staggeranimation.component.html',
  styleUrls: ['./staggeranimation.component.css'],

  animations:[

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75px)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ]),

    trigger('movingX', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateX(-40px)'})),

        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)'})),
        ])),

        
        
      ])
    ])

  ]
  
})
export class StaggeranimationComponent implements OnInit {

 items=[];
  constructor() {
  	this.items=['First Item','Second Item','Third Item'];
   }
pushItem(){
	this.items.push('New Item');
}
popItem(){
	this.items.pop();
}
  ngOnInit() {
  }

}