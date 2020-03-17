import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";
import { KEY_CODE } from "../models/keyKodes";
import { PlayerService } from "../services/player.service";

@Component({
  selector: "app-player-video",
  templateUrl: "./player-video.component.html",
  styleUrls: ["./player-video.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerVideoComponent implements OnInit, AfterViewInit {
  @HostListener("window:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.increaseCurrentTime();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.decreaseCurrentTime();
    }

    if (event.keyCode === KEY_CODE.SPACE) {
      this.switchVideo();
    }
  }

  @ViewChild("videoPlayer", { read: ElementRef, static: false })
  videoPlayerRef: ElementRef;

  videoPlayer: HTMLVideoElement;

  @Input() set playerTime(value) {
    if (value) {
      this.videoPlayer.currentTime = value;
    }
  }

  private timeAmount: number = 5;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.videoPlayer = this.videoPlayerRef.nativeElement;
  }

  onTimeUpdate(event) {
    this.playerService.currentVideoTime = event.target.currentTime;
  }
  onMetadataLoad(event) {
    this.playerService.videoDuration = this.videoPlayer.duration;
  }

  switchVideo() {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
    } else {
      this.videoPlayer.pause();
    }
  }

  increaseCurrentTime() {
    this.videoPlayer.currentTime += this.timeAmount;
  }

  decreaseCurrentTime() {
    this.videoPlayer.currentTime -= this.timeAmount;
  }
}
