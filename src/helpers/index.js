import countries from "./country";
import languages from "./language";

export const countryName = code => {
  code = code.toUpperCase();
  return countries[code];
};

export const languageName = code => {
  if (languages[code] === undefined) return "";
  return languages[code].name;
};
