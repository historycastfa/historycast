const rssUrl = "https://media.rss.com/historycastfa/feed.xml";

async function loadEpisodes() {
    try {
        const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssUrl)
        );

        const data = await response.json();

        const latest = data.items[0];

        const title = document.querySelector(".episode h3");
        const description = document.querySelector(".episode p");

        if (latest) {
            title.innerHTML = latest.title;
            description.innerHTML = latest.description;
        }

    } catch (error) {
        console.log("RSS Error:", error);
    }
}

loadEpisodes();
