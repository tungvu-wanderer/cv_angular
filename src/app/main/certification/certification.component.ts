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
    {
      name: 'Oracle Certified Professional, Java SE 8 Programmer',
      url: 'https://www.credly.com/badges/7616b1a7-b953-4ad8-8ae6-4fbb3a13bf80',
      issuer: 'Oracle',
      dateIssued: '09/2020',
    },
    {
      name: 'Oracle Certified Associate, Java SE 8 Programmer',
      url: 'https://www.credly.com/badges/19ac83e4-4243-46ad-89ee-a69774d4432f',
      issuer: 'Oracle',
      dateIssued: '08/2019',
    },
  ];
}
