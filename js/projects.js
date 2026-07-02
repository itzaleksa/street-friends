function isTouching(el1, el2) {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();
    const cx = r1.left + r1.width / 4;
    const cy = r1.top + r1.height / 4;

    return cx >= r2.left && cx <= r2.right && cy >= r2.top && cy <= r2.bottom;
}

$(function() {
    $(".disc").each(function() {
        const $disc = $(this);
        let offsetX = 0, offsetY = 0;

        $disc.on("pointerdown", function(e) {
            e.preventDefault()

            const r = this.getBoundingClientRect();
            offsetX = e.clientX - r.left;
            offsetY = e.clientY - r.top;
            
            this.setPointerCapture(e.pointerId);
            
            function move(ev) {
                $disc.css({
                    left: (ev.clientX - offsetX) + "px",
                    top: (ev.clientY - offsetY) + "px"
                })
            };

            function up(ev) {
                $disc[0].releasePointerCapture(ev.pointerId);
                $disc.off("pointermove", move);
                $disc.off("pointerup", up);
                const tv = $("#tv")[0]
                if (isTouching(this, tv)) {
                    // This is the part where he touches you-
                    $disc.addClass("hidden")
                };
            };
            
            $disc.on("pointermove", move);
            $disc.on("pointerup", up);
        });
    });

});