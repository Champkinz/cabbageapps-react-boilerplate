import { EventEmitter } from "events";

export class GlobalEvents {
  static emitter = new EventEmitter();
}
