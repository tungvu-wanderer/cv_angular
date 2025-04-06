import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { LanguageComponent } from './language/language.component';

@Component({
  selector: 'sidebar',
  imports: [
    ProfileComponent,
    ContactComponent,
    EducationComponent,
    LanguageComponent,
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
