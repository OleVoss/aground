import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  @Input()
  state: MatchState = MatchState.Late;

  @Input()
  team1: string = "";

  @Input()
  team1_score: number = 0;

  @Input()
  team2: string = "";

  @Input()
  team2_score: number = 0;

  @Input()
  canEdit: boolean = true;

  matchState = MatchState;
  matchColors: string = this.colorFromState()

  constructor() {
  }


  ngOnInit(): void {
  }

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  toggleMenu() {
    this.trigger.openMenu();
  }

  changeState(state: MatchState) {
    this.state = state;
    this.matchColors = this.colorFromState();
    console.log("changed state to:", state);
  }

  colorFromState(): string {
    switch (this.state) {
      case MatchState.Open:
        return "#F6DA76";
      case MatchState.Fixed:
        return "#7784FD";
      case MatchState.Played:
        return "#80E977";
      case MatchState.Late:
        return "#E97777";
    }
  }
}

export enum MatchState {
  Open,
  Fixed,
  Played,
  Late,
}