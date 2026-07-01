const portraits = `
<div class="portrait-container">
    <div class="portrait">
        <img class="portrait-image" src="assets/images/placeholder.jpg" alt="Portrait">
        <img class="portrait-frame" src="assets/images/placeholder_portrait.png" alt="Portrait Frame">
    </div>
    <h1 class="portrait-title">[SFT] Alek</h1>
    <p class="portrait-line"><b>FOUNDER of SFT</b></p>
    <p class="portrait-line"><b>DIRECTOR of Street Friends</b></p>
    <p class="portrait-line">Animator, Main Writer, Artist, Storyboard, Animatics, Voice Actor of Alek, Editor</p>
</div>
`;

$(function() {
    console.log("Placeholder");
    $(".content-container").append(portraits)
});