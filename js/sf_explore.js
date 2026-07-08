$(function() {
    const $placeholder = $(".tooltip")
    $(".interactable").each(function() {
        const $interactable = $(this);
        $interactable.on("mousemove", function(e) {
            const data = $interactable.data("hover")
            switch (data) {
                case "larg":
                    console.log("larg")
                    break;
                case "candy-store":
                    console.log("candy store")
                    break;
                case "campfire":
                    console.log("campfire")
                    break;
                case "hospital":
                    console.log("hospital")
                    break;
                case "gated-playground":
                    console.log("gated playground")
                    break;
                case "mall":
                    console.log("mall")
                    break;
                default:
                    break;
            }
            $placeholder.css({
                display: "block",
                left: (e.clientX) + "px",
                top: (e.clientY) + "px",
            });
        });
        $interactable.on("mouseleave", function() {
            $placeholder.css({
                display: "none",
            })
        });
    });
});