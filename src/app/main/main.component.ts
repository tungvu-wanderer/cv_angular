import { Component } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationComponent } from './certification/certification.component';

@Component({
  selector: 'main',
  imports: [SummaryComponent, ExperienceComponent, CertificationComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
