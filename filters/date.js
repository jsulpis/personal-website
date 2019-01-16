export function dateFrShort(date) {
  // input : yyyy-mm-dd or yyyy/mm/dd
  // output: jan. 2019 for example
  return new Date(date).toLocaleDateString("fr-FR", {
    month: "short",
    year: "numeric"
  });
}
