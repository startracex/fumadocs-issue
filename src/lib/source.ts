import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

export const i18nConfig = {
  defaultLanguage: "en-US",
  languages: {
    "zh-CN": "简体中文",
    "en-US": "English",
  },
} as const;

export const source = loader({
  i18n: {
    defaultLanguage: i18nConfig.defaultLanguage,
    languages: Object.keys(i18nConfig.languages),
    hideLocale: "never",
    parser: "dir",
  },
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
