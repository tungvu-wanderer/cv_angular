import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  imports: [NgFor],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  contents: string[] = [
    'Experienced Staff Engineer with a demonstrated history of technical leadership in designing and implementing scalable and reliable software solutions. Expertise in driving major refactoring efforts, establishing CI/CD pipelines, and mentoring junior engineers. Committed to delivering high-quality, impactful solutions that align with business goals.',
  ];
}
