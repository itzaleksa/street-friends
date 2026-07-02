const portraits = `
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/Alek.png" alt="Portrait">
    <h1 class="portrait-title">[SFT] Alek</h1>
    <div class="socials-container-portrait">
        <a id="youtube-button" class="social-button" href="https://www.youtube.com/@Aleksa_2021">
            <img class="social-icon" src="assets/images/socials/youtube.png" alt="YouTube">
        </a>
    </div>
    <p class="portrait-line"><b>FOUNDER of SFT</b></p>
    <p class="portrait-line"><b>DIRECTOR of Street Friends</b></p>
    <p class="portrait-line">Animator, Main Writer, Artist, Storyboard, Animatics, Voice Actor of Alek, Editor.</p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/Target.png" alt="Portrait">
    <h1 class="portrait-title">targetbuldoser</h1>
    <p class="portrait-line"><b>CO-FOUNDER of SFT</b></p>
    <p class="portrait-line"><b>CO-DIRECTOR of Street Friends</b></p>
    <p class="portrait-line">Lead Animator, Artist, Animatics, Musician, Voice Actor of Mike and Awren.</p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/QD.png" alt="Portrait">
    <h1 class="portrait-title">[SFT] Nick</h1>
    <p class="portrait-line"><b>CO-FOUNDER of SFT</b></p>
    <p class="portrait-line"><b>CO-DIRECTOR of Street Friends</b></p>
    <p class="portrait-line">Lead Writer, Voice Actor of QD.</p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/Mystery.png" alt="Portrait">
    <h1 class="portrait-title">Mystery</h1>
    <p class="portrait-line"><b>"It's a Mystery what she's planning!"</b></p>
    <p class="portrait-line">Site Coder, Musician, Game Developer, </p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/TenThousandBees.png" alt="Portrait">
    <h1 class="portrait-title">TenThousandBees</h1>
    <p class="portrait-line">Musician, Editor, Audio Mixing, Side Voice Actor.</p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/SmolEthan.png" alt="Portrait">
    <h1 class="portrait-title">SmolEthan</h1>
    <p class="portrait-line">3D Modeler, Animatics, Artist, Side Voice Actor.</p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/PieseleQ.png" alt="Portrait">
    <h1 class="portrait-title">PieseleQ</h1>
    <p class="portrait-line">3D Modeler.</p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/UTX.png" alt="Portrait">
    <h1 class="portrait-title">UTX</h1>
    <p class="portrait-line">Animator, Artist, Animatics.</p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/Meko.png" alt="Portrait">
    <h1 class="portrait-title">Meko</h1>
    <p class="portrait-line">Animator, Artist, Animatics.</p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/Mika.png" alt="Portrait">
    <h1 class="portrait-title">Mika</h1>
    <p class="portrait-line">Side Voice Actor, Editor.</p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/Judi.png" alt="Portrait">
    <h1 class="portrait-title">Judi</h1>
    <p class="portrait-line">Voice Actor, Side Voice Actor.</p>
</div>
<div class="separator-invis"></div>
<div class="portrait-container">
    <img class="portrait" src="assets/images/portraits/Kat.png" alt="Portrait">
    <h1 class="portrait-title">Kat</h1>
    <p class="portrait-line">Voice Actor.</p>
</div>



<div id="kev-container">
    <img id="kev" src="assets/images/portraits/Kev_Secret.png" alt="Kev">
</div>
<audio id="kev-complaint">
    <source src="assets/audio/kev-site.mp3" type="audio/mpeg">
</audio>
<audio id="kev-ow">
    <source src="assets/audio/kev-ow.mp3" type="audio/mpeg">
</audio>
<audio id="kev-stop-that">
    <source src="assets/audio/kev-stop-that.mp3" type="audio/mpeg">
</audio>
`;

var kev_clicked = false
var kev_debounce = false

$(function() {
    $(".content-container").append(portraits)
    $("#kev").on("click", function() {
        if (kev_debounce) {
            return
        }
        kev_debounce = true
        console.log("Clicked Kev!")
        $(this).attr("src", "assets/images/portraits/Kev_Secret_Talking.png")
        if (kev_clicked == false) {
            kev_clicked = true
            $("#kev-complaint")[0].play()
            $("#kev-complaint").on("ended", function() {
                $("#kev").attr("src", "assets/images/portraits/Kev_Secret.png");
                kev_debounce = false
            });
        }
        else {
            var rand_number = Math.round(Math.random());
            if (rand_number == 0) {
                $("#kev-ow")[0].play();
                $("#kev-ow").on("ended", function() {
                    $("#kev").attr("src", "assets/images/portraits/Kev_Secret.png");
                    kev_debounce = false
                });
            }
            else {
                $("#kev-stop-that")[0].play();
                $("#kev-stop-that").on("ended", function() {
                    $("#kev").attr("src", "assets/images/portraits/Kev_Secret.png");
                    kev_debounce = false
                });
            };
        };
    })
});
