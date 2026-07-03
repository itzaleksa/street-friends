const navigation_bar = `
<div class="title-container">
    <div class="logo-container">
        <img class="logo" src="assets/images/navigation/SFT_Logo.png" alt="Street Friends Logo">
    </div>
    <div class="separator"></div>
    <nav class="nav-container">
        <a class="nav-button" href="sft_credits.html">
            <img class="nav-icon" src="assets/images/navigation/credits.png" alt="Episodes">
        </a>
        <a class="nav-button" href="index.html">
            <img class="nav-icon" src="assets/images/navigation/about.png" alt="About">
        </a>
        <a class="nav-button" href="sft_projects.html">
            <img class="nav-icon" src="assets/images/navigation/projects.png" alt="Explore">
        </a>
    </nav>
</div>
`;

$(function() {
    $(".middle-container").prepend(navigation_bar);
});