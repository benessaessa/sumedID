 $(".custom-file-input").on("change", function() {
          var fileName = $(this).val().split("\\").pop();
          $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
        $('.accountC').click(function(){
            $('.mAcount').toggle();
});
$("#color_me").change(function(){
  var color = $("option:selected", this).attr("class");
  $("#color_me").attr("class", color);
});
$("#color_me2").change(function(){
  var color = $("option:selected", this).attr("class");
  $("#color_me2").attr("class", color);
});
$("#color_me3").change(function(){
  var color = $("option:selected", this).attr("class");
  $("#color_me3").attr("class", color);
});
$("#color_me4").change(function(){
  var color = $("option:selected", this).attr("class");
  $("#color_me4").attr("class", color);
});
$("#color_me5").change(function(){
  var color = $("option:selected", this).attr("class");
  $("#color_me5").attr("class", color);
});

$('.thefiles').FancyFileUpload({
    params: {
        action: 'fileuploader'
    },
    edit: false,
    maxfilesize: 1000000,
    added: function (e, data) {
        // It is okay to simulate clicking the start upload button.
        this.find('.ff_fileupload_actions button.ff_fileupload_start_upload').click();
    }
});
// $('.dropDM .dropdown-item').click(function(event){
//   event.preventDefault()
// });

// $('.addSite').click(function(){
//   $('.hideGroup').toggle();
// })