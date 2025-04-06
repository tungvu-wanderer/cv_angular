import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Certification {
  name: string;
  url: string;
  issuer: string;
  dateIssued: string;
  dateExpired?: string;
}

@Component({
  selector: 'app-certification-item',
  imports: [NgIf],
  templateUrl: './certification-item.component.html',
})
export class CertificationItemComponent {
  @Input() certification!: Certification;
}
