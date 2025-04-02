import { Component } from '@angular/core';

import {
  Certification,
  CertificationItemComponent,
} from './certification-item/certification-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-certification',
  imports: [NgFor, CertificationItemComponent],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css',
})
export class CertificationComponent {
  certifications: Certification[] = [
    {
      name: 'Machine Learning',
      url: 'https://www.coursera.org/account/accomplishments/certificate/44SQ9WT4HC32',
      issuer: 'Coursera',
      dateIssued: '11/2021',
    },
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      url: 'https://learn.microsoft.com/en-us/users/vuanhtung-1822/credentials/7c726d0faa067725',
      issuer: 'Microsoft',
      dateIssued: '05/2021',
      dateExpired: '05/2026',
    },
  ];
}
