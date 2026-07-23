var paper_debounce = false

$(function() {
    $("#paper-1").on("click", function() {
        if (paper_debounce == true) {
            console.log("paper debounce!!");
            return;
        };
        paper_debounce = true;
        $("#paper-audio")[0].play();
        $("#paper-full-1").removeClass("hidden");
        setTimeout(() => {
            $("#paper-full-1").addClass("hidden");
            paper_debounce = false;
        }, 3000);
    });
    $("#clickable-1").on("click", function() {
        // Hide previous images & interactables
        $("#clickable-1").addClass("hidden");
        $("#a-house-1").addClass("hidden");
        $("#paper-1").addClass("hidden");
        
        // Unhide upcoming images & interactables
        $("#paper-2").removeClass("hidden");
        $("#clickable-2").removeClass("hidden");
        $("#clickable-outside").removeClass("hidden");
    });
    $("#paper-2").on("click", function() {
        if (paper_debounce == true) {
            console.log("paper debounce!!");
            return
        };
        paper_debounce = true;
        $("#paper-audio")[0].play();
        $("#paper-full-2").removeClass("hidden");
        setTimeout(() => {
            $("#paper-full-2").addClass("hidden");
            paper_debounce = false;
        }, 3000);
    });
    $("#clickable-outside").on("click", function() {
        // Unhide upcoming images & interactables
        $("#clickable-1").removeClass("hidden");
        $("#a-house-1").removeClass("hidden");
        $("#paper-1").removeClass("hidden");
        
        // Hide previous images & interactables
        $("#paper-2").addClass("hidden");
        $("#clickable-2").addClass("hidden");
        $("#clickable-outside").addClass("hidden");
    });
    $("#clickable-2").on("click", function() {
        // Hide upcoming images & interactables
        $("#paper-2").addClass("hidden");
        $("#clickable-2").addClass("hidden");
        $("#clickable-outside").addClass("hidden");
        $("#a-house-2").addClass("hidden");

        // Unhide upcoming images & interactables
        $("#paper-3").removeClass("hidden");
    });
    $("#paper-3").on("click", function() {
        if (paper_debounce == true) {
            console.log("paper debounce!!");
            return
        };
        paper_debounce = true;
        $("#paper-audio")[0].play();
        $("#paper-full-3").removeClass("hidden");
        setTimeout(() => {
            $("#paper-full-3").addClass("hidden");
            paper_debounce = false;
        }, 3000);
    });
});