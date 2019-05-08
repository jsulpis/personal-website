import words from "lodash/words";
import upperFirst from "lodash/upperFirst";

export function formatWords(inputString) {
  return words(inputString)
    .map(upperFirst)
    .join(" ");
}
