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
async function loadAllEpisodes() {
    try {
        const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssUrl)
        );

        const data = await response.json();

        const list = document.getElementById("episodes-list");

        data.items.forEach(episode => {

            const card = document.createElement("div");
            card.className = "episode-card";

            card.innerHTML = `
                <h3>${episode.title}</h3>
                <p>${episode.description.replace(/<[^>]*>/g, "").substring(0,200)}...</p>
                <audio controls src="${episode.enclosure.link}"></audio>
            `;

            list.appendChild(card);
        });

    } catch(error) {
        console.log("Episodes Error:", error);
    }
}

loadAllEpisodes();
loadEpisodes();
