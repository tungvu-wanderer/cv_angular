import { Component } from '@angular/core';
import { SummaryComponent } from "./summary/summary.component";
import { ExperienceComponent } from "./experience/experience.component";
import { CertificationComponent } from "./certification/certification.component";

@Component({
  selector: 'app-left-column',
  imports: [SummaryComponent, ExperienceComponent, CertificationComponent],
  templateUrl: './left-column.component.html',
  styleUrl: './left-column.component.css'
})
export class LeftColumnComponent {

}
