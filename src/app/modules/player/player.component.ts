import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";
import { MatchEventsService } from "../../shared/services/match-events.service";
import { IMatchEvent } from "./models/IMatchEvent.model";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit, OnDestroy {
  matchEvents: IMatchEvent[] = [];
  listenKeyboard: Function;
  setPlayerTime: number;
  timeOffset: number = 40;

  constructor(private matchEventsService: MatchEventsService) {}

  ngOnInit() {
    this.matchEventsService
      .getMatchEvents()
      .subscribe((response: IMatchEvent[]) => {
        this.createEventGroups(response);
      });
  }

  createEventGroups(events: IMatchEvent[]) {
    for (let i = 0; i < events.length; i++) {
      const groupTime = events[i].time + this.timeOffset;
      this.matchEvents.push(events[i]);
      while (i + 1 < events.length - 1 && groupTime > events[i + 1].time) {
        if (!this.matchEvents[this.matchEvents.length - 1].group) {
          this.matchEvents[this.matchEvents.length - 1].group = [];
        }
        this.matchEvents[this.matchEvents.length - 1].group.push(events[i + 1]);
        i++;
      }
    }
  }

  checkTime() {}

  onMatchEventSelect(time: number) {
    this.setPlayerTime = time;
  }

  ngOnDestroy() {
    this.listenKeyboard();
  }
}
