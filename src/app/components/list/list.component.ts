import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public items?: any[];
  @Input()
  public height?: number;
  @ContentChild('template', { static: false })
  templateRef?: TemplateRef<any>;
}
