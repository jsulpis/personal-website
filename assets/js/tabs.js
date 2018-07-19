$(function() {
  // STICKY TAB BAR
  const navbar = $("#dynamic-toolbar");
  const firstSection = document.querySelector("#experiences");
  const studies = document.querySelector("#studies");
  const skills = document.querySelector("#skills");
  const certifications = document.querySelector("#certificates");
  const contact = document.querySelector("#contact");

  function convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  // Get the offset position of the navbar
  // 48px is the height of the tabs
  const sticky =
    document.querySelector("#profile").offsetHeight +
    convertRemToPixels(10) -
    48;

  // Add the sticky class to the header when we reach its scroll position. Remove "sticky" when we leave the scroll position.
  window.onscroll = function() {
    const offsetY = window.pageYOffset;
    // Set the sticky tab bar
    if (offsetY >= sticky) {
      navbar.addClass("sticky");
      navbar.addClass("mdc-elevation--z4");
      firstSection.classList.add("push");
    } else {
      navbar.removeClass("sticky");
      navbar.removeClass("mdc-elevation--z4");
      firstSection.classList.remove("push");
    }
    // update the active tab
    // if (offsetY < sticky) {
    //   dynamicTabBar.activeTabIndex = 0;
    // } else if (offsetY < studies.offsetTop) {
    //   dynamicTabBar.activeTabIndex = 1;
    // } else if (offsetY < skills.offsetTop) {
    //   dynamicTabBar.activeTabIndex = 2;
    // } else if (offsetY < certifications.offsetTop) {
    //   dynamicTabBar.activeTabIndex = 3;
    // } else if (offsetY < contact.offsetTop) {
    //   dynamicTabBar.activeTabIndex = 4;
    // } else {
    //   dynamicTabBar.activeTabIndex = 5;
    // }
  };
});
