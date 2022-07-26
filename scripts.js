$(".dive-in-btn").click(function () {
  $("body").css({
    overflow: "visible",
  });
  setTimeout(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#anchor-about").offset().top,
      },
      2000
    );
  }, 1000);
});
