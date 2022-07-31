let currentSection = 0; // 0 = header; 1 = about; 2 = projects

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
        $(".arrow-nav").css("left", "0");
      }
    );
    currentSection = 1;
  }, 1000);
});

$(".arrow-up").click(function () {
  $(this).unbind("toggle").unbind("click");

  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(document).scrollTop() - 1000,
    },
    2000,
    function () {
      console.log(".arrow-up");
      $(".arrow-up").bind("toggle").bind("click");
    }
  );

  currentSection--;
});

$(".arrow-down").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(document).scrollTop() + 1000,
    },
    2000
  );

  currentSection++;
});

$(".arrow-right").click(function () {
  let oldMargin = parseInt($(".projects").css("margin-left"));

  if (oldMargin >= -1400) {
    $(".projects").css("margin-left", oldMargin - 280);
  }
});

$(".arrow-left").click(function () {
  let oldMargin = parseInt($(".projects").css("margin-left"));
  if (oldMargin <= 500) {
    $(".projects").css("margin-left", oldMargin + 280);
  }
});
