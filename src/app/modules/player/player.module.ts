import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MinuteSecondsPipe } from "../../shared/pipes/secondsToMinutes.pipe";
import { SharedModule } from "../../shared/shared.module";
import { PlayerEventComponent } from "./player-event/player-event.component";
import { PlayerRoutingModule } from "./player-routing.module";
import { PlayerTimelineComponent } from "./player-timeline/player-timeline.component";
import { PlayerVideoComponent } from "./player-video/player-video.component";
import { PlayerComponent } from "./player.component";
import { PlayerService } from "./services/player.service";

@NgModule({
  imports: [CommonModule, SharedModule, PlayerRoutingModule],
  declarations: [
    PlayerComponent,
    PlayerTimelineComponent,
    PlayerVideoComponent,
    MinuteSecondsPipe,
    PlayerEventComponent
  ],
  providers: [PlayerService],
  exports: [PlayerComponent, PlayerTimelineComponent, PlayerVideoComponent]
})
export class PlayerModule {}
