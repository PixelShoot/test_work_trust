import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PlayerService } from "../services/player.service";
import { IMatchEvent } from "./../models/IMatchEvent.model";

@Component({
  selector: "app-player-timeline",
  templateUrl: "./player-timeline.component.html",
  styleUrls: ["./player-timeline.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerTimelineComponent implements OnInit {
  @Input() matchEvents: IMatchEvent[];

  @Output() onMatchEventSelect: EventEmitter<number> = new EventEmitter();

  public stickTime$: BehaviorSubject<string> = new BehaviorSubject("0%");

  constructor(public playerService: PlayerService) {}

  ngOnInit() {}

  _onMatchEventSelect(event) {
    this.onMatchEventSelect.emit(event);
  }
}
