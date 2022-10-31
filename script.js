const url = "d1cb154147684011afda58be32a45cf9"
const article = 20
function getApiKey() {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-09-30&sortBy=publishedAt&apiKey=${url}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.articles)
            const { title, description, publishedAt, urlToImage } = data.articles[article]
            const { name } = data.articles[article].source

            document.querySelector("#title").innerText = title
            document.querySelector("#description").innerText = description

            const datetime = publishedAt.split("T")
            document.querySelector("#publishedAt").innerText = datetime[0]

            document.querySelector("#urltoImage").src = urlToImage
            document.querySelector("#urltoImage").style.visibility = "visible"

            document.querySelector("#sourcename").innerText = name
        })
}

getApiKey()