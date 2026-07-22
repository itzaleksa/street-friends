const code = "120509"
$(function() {
    $("#submit-button").on("click", function() {
        var inputted_code = $("#code-input").val();
        if (inputted_code == code) {
            console.log("correct");
        }
        else {
            setTimeout(() => {
                window.location.href = "sf_about.html"
            }, 3000);
        };
    });
});