const rssUrl = "https://media.rss.com/historycastfa/feed.xml";

async function loadEpisodes() {
    try {
        const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssUrl)
        );

        const data = await response.json();

        const episodes = data.items;

        if (episodes && episodes.length > 0) {

            const latest = episodes.sort((a, b) => {
    return new Date(b.pubDate) - new Date(a.pubDate);
})[0];document.querySelector(".episode h3").innerHTML =
"قسمت ۱: " + latest.title;

            document.querySelector(".episode p").innerHTML =
                latest.description.substring(0, 300) + "...";
            document.querySelector("#player").src = latest.enclosure.url;

    } catch (error) {
        console.log("RSS Error:", error);
    }
}

loadEpisodes();
