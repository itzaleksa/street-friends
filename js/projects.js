
var disc_inserted = false

function isTouching(el1, el2) {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();
    const cx = r1.left + r1.width / 4;
    const cy = r1.top + r1.height / 4;

    return cx >= r2.left && cx <= r2.right && cy >= r2.top && cy <= r2.bottom;
};

function onDrop($el) {
    disc_inserted = true
    const disc_data = $el.data("disc");
    var target_page = ""
    
    $("#cd-sfx")[0].play()

    $("#cd-sfx").on("ended", function() {
        $("#tv").addClass("tv-fullscreen");
        $("#screen").addClass("tv-fullscreen");
        $("#bootup-video").addClass("tv-fullscreen");
        switch (disc_data) {
            case "street-friends":
                console.log("Street Friends Data Found!");
                target_page = "sf_home.html"
                break;
            default:
                console.log("Data found but not listed!");
        };
        setTimeout(() => {
            const gifduration = 8000;
            $("#screen").addClass("hidden");
            $("#bootup-video").removeClass("hidden");
            $("#bootup-video")[0].currentTime = 0;
            $("#bootup-video")[0].play()
            setTimeout(() => {
                $("#screen").addClass("hidden");
                window.location.href = "sf_about.html"
            }, 8000);
        }, 1000);
    });
};

$(function() {
    $(".disc").each(function() {
        const $disc = $(this);
        let offsetX = 0, offsetY = 0;

        $disc.on("pointerdown", function(e) {
            if (disc_inserted) return;
            e.preventDefault();

            const r = this.getBoundingClientRect();
            offsetX = e.clientX - r.left;
            offsetY = e.clientY - r.top;
            
            this.setPointerCapture(e.pointerId);
            $disc.css({
                cursor: "grabbing"
            });

            function move(ev) {
                $disc.css({
                    left: (ev.clientX - offsetX) + "px",
                    top: (ev.clientY - offsetY) + "px"
                });
            };

            function up(ev) {
                $disc[0].releasePointerCapture(ev.pointerId);
                $disc.off("pointermove", move);
                $disc.off("pointerup", up);
                $disc.css({
                    cursor: "grab"
                });
                const tv = $("#tv")[0]
                if (isTouching(this, tv)) {
                    // This is the part where he touches you-
                    $(".disc").addClass("hidden");
                    onDrop($disc);
                };
            };
            
            $disc.on("pointermove", move);
            $disc.on("pointerup", up);
        });
    });

});