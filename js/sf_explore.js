$(function() {
    const $tooltip = $(".tooltip");

    const hovers = {
        "larg": () => {
            console.log("larg");
            // $tooltip.addClass("candy-store-tooltip");
            $tooltip.attr("src", "assets/images/placeholder.jpg");
        },
        "candy-store": () => {
            console.log("candy store");
            $tooltip.attr("src", "assets/images/tooltips/sweet-tooth.gif");
            $tooltip.addClass("candy-store-tooltip");
        },
        "campfire": () => {
            console.log("campfire");
            $tooltip.attr("src", "assets/images/placeholder.jpg");
            // $tooltip.addClass("candy-store-tooltip");
        },
        "hospital": () => {
            console.log("hospital");
            $tooltip.attr("src", "assets/images/placeholder.jpg");
            // $tooltip.addClass("candy-store-tooltip");
        },
        "gated-playground": () => {
            console.log("gated playground");
            $tooltip.attr("src", "assets/images/placeholder.jpg");
            // $tooltip.addClass("candy-store-tooltip");
        },
        "playground": () => {
            console.log("playground");
            $tooltip.attr("src", "assets/images/placeholder.jpg");
            // $tooltip.addClass("candy-store-tooltip");
        },
        "mall": () => {
            console.log("mall");
            $tooltip.attr("src", "assets/images/placeholder.jpg");
            // $tooltip.addClass("candy-store-tooltip");
        },
        "squiddo-doggie-house": () => {
            console.log("squiddo & doggie house");
            $tooltip.attr("src", "assets/images/placeholder.jpg");
            // $tooltip.addClass("candy-store-tooltip");
        },
        "alek-qd-house": () => {
            console.log("alek & qd house");
            $tooltip.attr("src", "assets/images/placeholder.jpg");
            // $tooltip.addClass("candy-store-tooltip");
        },
    };

    $(".interactable").on({
        mouseenter() {
            const data = $(this).data("hover");
            hovers[data]?.(); // One horrifying line that I don't understand entirely. But I guess it's a way to run the anonymous function
        },
        mousemove(e) {
            $tooltip.css({
                display: "block",
                left: (e.clientX) + "px",
                top: (e.clientY) + "px",
            });
        },
        mouseleave() {
            const data = $(this).data("hover");
            $tooltip.css("display", "none").removeClass(`${data}-tooltip`);
        }
    });
});