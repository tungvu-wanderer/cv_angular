import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { LanguageComponent } from './language/language.component';

@Component({
  selector: 'app-right-column',
  imports: [
    ProfileComponent,
    ContactComponent,
    EducationComponent,
    LanguageComponent,
  ],
  templateUrl: './right-column.component.html',
  styleUrl: './right-column.component.css',
})
export class RightColumnComponent {}
