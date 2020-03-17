import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { IMatchEvent } from "./../models/IMatchEvent.model";

@Component({
  selector: "app-player-event",
  templateUrl: "./player-event.component.html",
  styleUrls: ["./player-event.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerEventComponent implements OnInit {
  @Input() matchEvent: IMatchEvent;

  @Output() onMatchEventSelect: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onMatchEventClick(time: number) {
    this.onMatchEventSelect.emit(time);
  }
}
