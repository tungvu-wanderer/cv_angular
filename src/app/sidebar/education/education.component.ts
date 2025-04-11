import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  Degree,
  EducationItemComponent,
} from './education-item/education-item.component';

@Component({
  selector: 'app-education',
  imports: [NgFor, EducationItemComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  degrees: Degree[] = [
    {
      name: 'Master of Business Administration',
      school: 'HCMC University of Technology',
      time: '2017 - 2020',
      gpa: 8.6,
    },
    {
      name: 'Bachelor of Electrical and Electronic Engineering',
      school: 'HCMC University of Technology',
      time: '2010 - 2015',
      gpa: 8.6,
    },
  ];
}
