import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class PlayerService {
  private _videoDuration$: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);
  private _currentVideoTime$: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);

  private _stickPosition$: BehaviorSubject<string> = new BehaviorSubject<
    string
  >("0%");

  constructor() {}

  get videoDuration$(): Observable<number> {
    return this._videoDuration$.asObservable();
  }

  get videoDuration(): number {
    return this._videoDuration$.getValue();
  }

  set videoDuration(value: number) {
    this._videoDuration$.next(value);
  }

  get currentVideoTime$(): Observable<number> {
    return this._currentVideoTime$.asObservable();
  }

  set currentVideoTime(value: number) {
    this._currentVideoTime$.next(value);
    this.stickPosition = (value / this._videoDuration$.getValue()) * 100 + "%";
  }

  get stickPosition$(): Observable<string> {
    return this._stickPosition$.asObservable();
  }

  set stickPosition(value) {
    this._stickPosition$.next(value);
  }
}
