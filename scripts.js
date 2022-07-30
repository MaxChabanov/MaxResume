let level = 0;

$(".dive-in-btn").click(function () {
  $("body").css({
    overflowY: "visible",
  });
  setTimeout(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#anchor-about").offset().top,
      },
      2000,
      function () {
        $(".arrow-nav").css("opacity", "1");
      }
    );
    level = 1;
  }, 1000);
});

console.log($(".arrow-up"));
$(".arrow-up").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(document).scrollTop() - 1000,
    },
    2000
  );
});

$(".arrow-down").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(document).scrollTop() + 1000,
    },
    2000
  );
});
