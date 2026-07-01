const navigation_bar = `
<div class="title-container">
    <div class="logo-container">
        <img class="logo" src="assets/images/SFT_Logo.png" alt="Street Friends Logo">
    </div>
    <div class="separator"></div>
    <nav class="nav-container">
        <a id="credits-button" class="nav-button" href="sft_credits.html">
            <img class="nav-icon" src="assets/images/credits.png" alt="Credits">
        </a>
        <a onclick="" id="about-button" class="nav-button" href="index.html">
            <img class="nav-icon" src="assets/images/about.png" alt="About">
        </a>
        <a id="shows-button" class="nav-button" href="sft_shows.html">
            <img class="nav-icon" src="assets/images/shows.png" alt="Shows">
        </a>
    </nav>
</div>
`;

const support_bar = `
<div class="support-container">
    <div class="separator"></div>
    <h1 class="content-title">SUPPORT US!</h1>
    <div class="socials-container">
        <a id="discord-button" class="social-button" href="https://discord.gg/PCBxQrbmub">
            <img class="social-icon" src="assets/images/discord.png" alt="Discord">
        </a>
        <a id="youtube-button" class="social-button" href="https://www.youtube.com/@street_friends">
            <img class="social-icon" src="assets/images/youtube.png" alt="YouTube">
        </a>
        <a id="twitter-button" class="social-button" href="https://x.com/street_friends_">
            <img class="social-icon" src="assets/images/twitter.png" alt="Twitter">
        </a>
        <a id="tiktok-button" class="social-button" href="https://www.tiktok.com/@street__friends">
            <img class="social-icon" src="assets/images/tiktok.png" alt="TikTok">
        </a>
        <a id="instagram-button" class="social-button" href="https://www.instagram.com/sf.street_friends/">
            <img class="social-icon" src="assets/images/instagram.png" alt="Instagram">
        </a>
    </div>
</div>
`;

$(function() {
    $(".middle-container").prepend(navigation_bar)
    $(".middle-container").append(support_bar)
    console.log("Added navigation_bar!")
});