import { Injectable } from "@nestjs/common";
import * as Pusher from "pusher";

@Injectable()
export class PusherService {
  pusher: Pusher;

  constructor() {
    this.pusher = new Pusher({
      appId: "1367858",
      key: "6df6fdad525defc5cb76",
      secret: "f6d2508442f09997c691",
      cluster: "ap2",
      useTLS: true
    });
  }

  async trigger(channel: string, event: string, data: any) {
    await this.pusher.trigger(channel, event, data);
  }
}
