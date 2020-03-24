 $(".custom-file-input").on("change", function() {
          var fileName = $(this).val().split("\\").pop();
          $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
        $('.accountC').click(function(){
            $('.mAcount').toggle();
});
// $('.addSite').click(function(){
//   $('.hideGroup').toggle();
// })