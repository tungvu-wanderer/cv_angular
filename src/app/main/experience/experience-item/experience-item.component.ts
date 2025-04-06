import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Company {
  title: string;
  name: string;
  date: string;
  details: Detail[];
}

export interface Detail {
  content: string;
  details?: Detail[];
}

@Component({
  selector: 'app-experience-item',
  imports: [NgFor, NgIf],
  templateUrl: './experience-item.component.html',
})
export class ExperienceItemComponent {
  @Input() company!: Company;
}
