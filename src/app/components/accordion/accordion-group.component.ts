import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'group',
  template: `
  <div class="mypanel">
    <div class="title" [ngClass]="{'hidden': opened}" (click)="toggle.emit()">
      <div class="qid">
        <h3>Q{{id}}</h3>        
      </div>
      <div class="question">
        <p>{{question}}</p>
      </div>
      <div class="icon" [ngClass]="{'hidden': opened}">
        <svg-icon src="{{svgIcon}}" 
          [svgStyle]="{'width.px':30, 'height.px':30, 'padding.px':1,'margin.px':5}">
        </svg-icon>
      </div>      
    </div>
    <div class="body" [ngClass]="{'hidden': !opened}">
      <ng-content></ng-content>
    </div>
  <div>
  `,
  styleUrls: ['accordion.component.css']
})
export class AccordionGroupComponent {
  /**
   * If the panel is opened or closed
   */
  @Input() opened = false;

  /**
   * Id to display in the group title bar
   */
  @Input() id: string;

  /**
   * Question to display in the group title bar
   */
  @Input() question: string;


  /**
  * SVG Icon file to display in the group title bar
  */
  svgIcon: string = "assets/svg/plus-icon.svg";

  /**
   * Emitted when user clicks on group titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}