import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";
import { MdePopoverModule } from "@material-extended/mde";
import { MatchEventsService } from "./services/match-events.service";

@NgModule({
  exports: [
    RouterModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTooltipModule,
    MdePopoverModule
  ],
  providers: [MatchEventsService]
})
export class SharedModule {}
