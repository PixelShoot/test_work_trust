export interface IMatchEvent {
  id: number;
  type: "kill" | "death" | "assist";
  time: number;
  group?: IMatchEvent[];
}
