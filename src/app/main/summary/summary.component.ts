import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  imports: [NgFor],
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  contents: string[] = [
    'I’m a fast-learning, flexible, adaptive engineer as well as a caring, supportive, goal-oriented manager.',
    'I thrive in an environment where I can bring the best value to customers as well as to the business, while providing mentoring & coaching to the juniors to help them grow to realize their full potentials.',
  ];
}
