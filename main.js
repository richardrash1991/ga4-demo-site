// <!-- main.js -->
document.getElementById("ctaBtn")?.addEventListener("click", function () {
  gtag("event", "cta_click", {
    event_category: "button",
    event_label: "Click Me on Home",
  });
});
