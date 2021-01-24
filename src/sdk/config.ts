export let ENV: EnvConfig = {
  tenantId: "",
  token: "",
  basePath: ""
};

export interface EnvConfig {
  tenantId: string;
  token: string;
  basePath: string;
}
