import { AfterContentInit, Component, ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectContentComponent } from './project-content/project-content.component';

export interface Address {
  street: String;
  city: String;
  zipCode: String;
}

@Component({
  selector: 'app-address',
  standalone: true,
  template: `<p>{{ address.street }}</p>
             <p>{{ address.city }}</p>
             <p>{{ address.zipCode }}</p>`
})
export class AddressComponent {
  @Input() address: Address = {
    street: '',
    city: '',
    zipCode: ''
  };
  constructor() { }
}

@Component({
  selector: 'tab',
  template: `
    <p>{{ title }}</p>
  `,
  standalone: true
})
export class TabComponent {
  @Input() title: string | undefined;
}

@Directive({
  standalone: true,
  selector: '[appFreshCourse]'
})
export class FreshCourseDirective implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  ngAfterContentInit(): void {
    // debugger; // tabs doesn't exist here
  }
}

@Component({
  selector: 'tabs',
  template: `
    <div appFreshCourse>
      <ng-content></ng-content>
    </div>
  `,
  imports: [
    FreshCourseDirective
  ],
  standalone: true
})
export class TabsComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    // debugger; // tabs exists here
  }
}

@Component({
  selector: 'app-component-composition',
  standalone: true,
  imports: [CommonModule, ProjectContentComponent, AddressComponent, FreshCourseDirective, TabsComponent, TabComponent],
  templateUrl: './component-composition.component.html',
  styleUrl: './component-composition.component.sass' 
})
export class ComponentCompositionComponent {
  divName = 'A';
  @Input() addresses: Address[] = [{ street: "Third Avenue", city: "New York", zipCode: "10001" },
                                   { street: "Constitution Avenue", city: "Washington", zipCode: "20001" }];
  
     
  updateDiv(event: Event): void {
    const divName = (event.target as HTMLInputElement).value;
    this.divName = divName; 
  } 
}
