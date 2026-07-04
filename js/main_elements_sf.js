const navigation_bar = `
<div class="title-container">
    <div class="logo-container">
        <img class="logo" src="assets/images/navigation/SF_Logo.png" alt="Street Friends Logo">
    </div>
    <div class="separator"></div>
    <nav class="nav-container">
        <a class="nav-button" href="sf_episodes.html">
            <img class="nav-icon" src="assets/images/navigation/episodes.png" alt="Episodes">
        </a>
        <a class="nav-button" href="sf_about.html">
            <img class="nav-icon" src="assets/images/navigation/about.png" alt="About">
        </a>
        <a class="nav-button" href="sf_explore.html">
            <img class="nav-icon" src="assets/images/navigation/explore.png" alt="Explore">
        </a>
    </nav>
</div>
`;

const chibi_bar = `
<div class="support-container">
    <div class="chibi-section">
        <img class="chibi" src="assets/images/splashes/doggie_chibi_splash.png" alt="Doggie Chibi">
        <img class="chibi" src="assets/images/splashes/alek_chibi_splash.png" alt="Alek Chibi">
    </div>
    <a id="home-button" href="index.html">
        <img id="home-image" class="nav-icon" src="assets/images/navigation/home-button.png" alt="Home">
    </a>
    <div class="chibi-section">
        <img class="chibi" src="assets/images/splashes/qd_chibi_splash.png" alt="QD Chibi">
        <img class="chibi" src="assets/images/splashes/squiddo_chibi_splash.png" alt="Squiddo Chibi">
    </div>
</div>
`;

$(function() {
    $(".middle-container").prepend(navigation_bar);
    $(".middle-container").append(chibi_bar);
});