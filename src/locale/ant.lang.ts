import English from "antd/es/locale/en_US";
import Tamil from "antd/es/locale/ta_IN";
import { AvailableLanguages } from "./available-languages";

export function getAntLocal(language: AvailableLanguages) {
  if (language === AvailableLanguages.TAMIL) {
    return Tamil;
  }
  return English;
}
