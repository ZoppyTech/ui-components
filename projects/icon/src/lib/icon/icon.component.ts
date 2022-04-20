import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ps-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() public icon: string = '';

  public constructor() { }
}
