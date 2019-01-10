export function dateFrShort(date) {
  // input : yyyy-mm-dd or yyyy/mm/dd
  // output: jan. 2019 for example
  if (!!date) {
    return new Date(date).toLocaleDateString("fr-FR", {
      month: "short",
      year: "numeric"
    });
  }
  return "Aujourd'hui"; // default value
}
