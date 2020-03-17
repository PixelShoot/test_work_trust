import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IMatchEvent } from "../../modules/player/models/IMatchEvent.model";

@Injectable()
export class MatchEventsService {
  private _jsonURL = "assets/events-mock.json";
  constructor(private http: HttpClient) {}
  getMatchEvents(): Observable<IMatchEvent[]> {
    return this.http.get<IMatchEvent[]>(this._jsonURL);
  }
}
