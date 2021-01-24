import { ComnUserService } from "./comn-user";
import { ENV, EnvConfig } from "./config";
const autoBind = require("auto-bind");

export class SDK {
  UserService: ComnUserService;

  constructor(private env: EnvConfig) {
    if (!this.env) {
      this.env = ENV;
    }

    this.UserService = new ComnUserService(this.env);

    autoBind(this.UserService);
  }

  configure(env: EnvConfig) {
    Object.assign(this.env, env);
  }
}
