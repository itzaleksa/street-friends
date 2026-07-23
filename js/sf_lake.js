$(function() {
    window.location.href = "what.html"
    $("#paper").on("click", function() {
        $("#photo").removeClass("hidden");
        $("#paper-audio")[0].play();
    });
    $("#photo").on("click", function() {
        console.log("cutscene");
        $("#photo").addClass("hidden");
    });
});