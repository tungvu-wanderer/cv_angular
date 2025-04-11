import { Component, Input } from '@angular/core';

export interface Degree {
  name: string;
  school: string;
  time: string;
  gpa: number;
}

@Component({
  selector: 'app-education-item',
  imports: [],
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.css',
})
export class EducationItemComponent {
  @Input() degree!: Degree;
}
