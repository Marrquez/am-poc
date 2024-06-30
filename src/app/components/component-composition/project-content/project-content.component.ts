import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-content.component.html',
  styleUrl: './project-content.component.sass'
})
export class ProjectContentComponent {
  @HostBinding('style.--color-of-the-title')
  @Input() color: string = 'red';
}  
 