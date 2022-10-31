const url = "d1cb154147684011afda58be32a45cf9"
const article = 15
const insertData = document.querySelector("#chooseArticle")

insertData.addEventListener("keyup", (event) => {
    if (event.key == "Enter"){
        getApiKey()
    }
})

function getApiKey() {
        try {
                fetch(`https://newsapi.org/v2/everything?q=${insertData.value}&from=2022-09-30&sortBy=publishedAt&apiKey=${url}`)
                    .then((response) => response.json())
                    .then((data) => {
                            const { title, description, publishedAt, urlToImage } = data.articles[article]
                            const { name } = data.articles[article].source

                            document.querySelector("#title").innerText = title;

                            document.querySelector("#description").innerText = description;

                            const datetime = publishedAt.split("T");
                            document.querySelector("#publishedAt").innerText = datetime[0];

                            document.querySelector("#urltoImage").src = urlToImage;
                            document.querySelector("#urltoImage").style.visibility = "visible";

                            document.querySelector("#sourcename").innerText = name;
                    })
        } catch (err){
                console.log("Error")
        }
}
