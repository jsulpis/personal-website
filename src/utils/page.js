export function makePageTitle(title) {
  return title + " - Julien Sulpis";
}

export function makePageMetadata(pageTitle, pageUrl, pageDescription) {
  return {
    title: pageTitle,
    meta: [
      { name: "title", property: "og:title", content: pageTitle },
      { name: "url", property: "og:url", content: pageUrl },
      {
        name: "description",
        property: "og:description",
        content: pageDescription
      }
    ]
  };
}
