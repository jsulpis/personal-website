import words from "lodash/words";

export function dateUsToEu(date) {
  // input : yyyy-mm-dd or yyyy/mm/dd
  // output: mm/yyyy
  return words(date)
    .reverse()
    .slice(1)
    .join("/");
}
