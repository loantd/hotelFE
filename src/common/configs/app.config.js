import developmentConfigs from "./env/dev.json";

class AppConfigs {
  constructor() {
    this.config = developmentConfigs;
  }

  getConfig() {
    this.config = developmentConfigs;

    return this.config;
  }
  getApiEndpoint() {
    return this.config.apiEndpoint;
  }
}

export default new AppConfigs();
