const rssUrl = "https://media.rss.com/historycastfa/feed.xml";

async function loadEpisodes() {
    try {
        const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssUrl)
        );

        const data = await response.json();

        const latest = data.items[0];
        
        document.querySelector(".episode h3").innerHTML =
            "قسمت ۱: " + latest.title;
document.querySelector(".episode p").textContent =
    latest.description.replace(/<[^>]*>/g, "").substring(0, 300) + "...";

document.getElementById("player").src =
"https://content.rss.com/episodes/396656/3037946/historycastfa/2026_07_31_18_21_48_3f1e56bd-a550-4451-b180-c09b37d2ebe6.mp3";

document.getElementById("player").load();
        
    } catch (error) {
        console.log("RSS Error:", error);
    }
}

loadEpisodes();
