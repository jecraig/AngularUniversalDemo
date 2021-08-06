import { Component } from '@angular/core';
import spacetime from 'spacetime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  spaceNow = spacetime.now();
}
