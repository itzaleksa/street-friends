const navigation_bar = `
<div class="title-container">
    <div class="logo-container">
        <img class="logo" src="assets/images/navigation/SFT_Logo.png" alt="Street Friends Logo">
    </div>
    <div class="separator"></div>
    <nav class="nav-container">
        <a class="nav-button" href="sft_credits.html">
            <img class="nav-icon" src="assets/images/navigation/credits.png" alt="Credits">
        </a>
        <a class="nav-button" href="index.html">
            <img class="nav-icon" src="assets/images/navigation/about.png" alt="About">
        </a>
        <a class="nav-button" href="sft_projects.html">
            <img class="nav-icon" src="assets/images/navigation/projects.png" alt="Shows">
        </a>
    </nav>
</div>
`;

const support_bar = `
<div class="support-container">
    <div class="separator"></div>
    <h1 class="support-title">SUPPORT US!</h1>
    <div class="socials-container">
        <a id="discord-button" class="social-button" href="https://discord.gg/PCBxQrbmub">
            <img class="social-icon" src="assets/images/socials/discord.png" alt="Discord">
        </a>
        <a id="youtube-button" class="social-button" href="https://www.youtube.com/@street_friends">
            <img class="social-icon" src="assets/images/socials/youtube.png" alt="YouTube">
        </a>
        <a id="twitter-button" class="social-button" href="https://x.com/street_friends_">
            <img class="social-icon" src="assets/images/socials/twitter.png" alt="Twitter">
        </a>
        <a id="tiktok-button" class="social-button" href="https://www.tiktok.com/@street__friends">
            <img class="social-icon" src="assets/images/socials/tiktok.png" alt="TikTok">
        </a>
        <a id="instagram-button" class="social-button" href="https://www.instagram.com/sf.street_friends/">
            <img class="social-icon" src="assets/images/socials/instagram.png" alt="Instagram">
        </a>
    </div>
    <div class="copyright-container">
        <p>Copyright &copy; 2026 Street Friends Team. All rights reserved.</p>
    </div>
</div>
`;

$(function() {
    $(".middle-container").prepend(navigation_bar);
    $(".middle-container").append(support_bar);
});