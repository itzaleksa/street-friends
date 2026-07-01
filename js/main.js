const navigation_bar = `
<div class="title-container">
    <div class="logo-container">
        <img class="logo" src="assets/images/SFT_Logo.png" alt="Street Friends Logo">
    </div>
    <div class="separator"></div>
    <nav class="nav-container">
        <a id="credits-button" class="nav-button" href="html/sft_credits.html">
            <img class="nav-icon" src="assets/images/credits.png" alt="Credits">
        </a>
        <a onclick="" id="about-button" class="nav-button" href="#">
            <img class="nav-icon" src="assets/images/about.png" alt="About">
        </a>
        <a id="shows-button" class="nav-button" href="html/sft_shows.html">
            <img class="nav-icon" src="assets/images/shows.png" alt="Shows">
        </a>
    </nav>
</div>
`;

$(function() {
    $(".middle-container").prepend(navigation_bar)
    console.log("Added navigation_bar!")
});