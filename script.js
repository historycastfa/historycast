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

        document.querySelector(".episode p").innerHTML =
            latest.description.substring(0, 300) + "...";
document.getElementById("player").src = latest.enclosure.link;
        console.log(latest.enclosure.link);
console.log(document.getElementById("player").src);
        document.getElementById("player").load();
    } catch (error) {
        console.log("RSS Error:", error);
    }
}

loadEpisodes();
