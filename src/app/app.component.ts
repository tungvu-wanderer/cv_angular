import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftColumnComponent } from "./left-column/left-column.component";
import { RightColumnComponent } from './right-column/right-column.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftColumnComponent, RightColumnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
