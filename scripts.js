let currentSection = 0; // 0 = header; 1 = about; 2 = projects

$(".dive-in-btn").click(function () {
  $("body").css({
    overflowY: "visible",
  });

  $(".diver").css(
    "animation",
    "appear 10s 1s, dive 3s 7s, jump 3s 9.8s forwards, swimUp 2s 13.5s forwards"
  );

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
  }, 13000);
});

$(".arrow-up").click(function () {
  if (currentSection == 1) {
    $(".arrow-nav").css("left", "-100%");
  }
  if (!$("body").is(":animated")) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(document).scrollTop() - 1000,
      },
      2000
    );

    currentSection--;
  }
});

$(".arrow-down").click(function () {
  if (!$("body").is(":animated")) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(document).scrollTop() + 1000,
      },
      2000
    );

    currentSection++;
  }
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
