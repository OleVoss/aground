import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aground';
  initailCount: number = 10;

  team1 = "Die Wundertüten";
  team1_score = 0;
  team2 = "Tupperdosen";
  team2_score = 2;
}
