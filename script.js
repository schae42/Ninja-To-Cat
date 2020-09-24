$(document).ready(function () {
  $("img").click(function () {
    var src1 = $(this).attr("src1");
    var alt1 = $(this).attr("alt1");
    $(this).attr({
      src: src1,
      alt: alt1,
    });
  });
});
