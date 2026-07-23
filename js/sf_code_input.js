const code = "120509"
$(function() {
    $("#submit-button").on("click", function() {
        var inputted_code = $("#code-input").val();
        if (inputted_code == code) {
            // window.location.href = "sf_lake.html"
            $("#code-input").css("border-color", "green");
            $("#submit-button").css("border-color", "green");
            $("#soon").removeClass("hidden");
        }
        else {
            $("#code-input").css("border-color", "red");
            $("#submit-button").css("border-color", "red");
            $(".audio")[0].play()
            setTimeout(() => {
                window.location.href = "sf_about.html";
            }, 3000);
        };
    });
});