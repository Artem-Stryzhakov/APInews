const date = new Date();
const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
let articleNumber = 0;

const insertData = document.querySelector("#chooseArticle");

const btnBack = document.querySelector("#back");
const btnForward = document.querySelector("#forward");

[btnBack.disabled, btnForward.disabled] = [true, true];

const urlAPI = "d1cb154147684011afda58be32a45cf9"

insertData.addEventListener("keyup", (event) => {
    if (event.key == "Enter"){
        btnForward.disabled = false;
        printNews(currentDate, urlAPI, articleNumber)
    }
})

btnBack.addEventListener("click", () => {
    if (articleNumber > 0){
        articleNumber--;
    }

    if (articleNumber > 0){
        btnBack.disabled = false;
    } else {
        btnBack.disabled = true;
    }

    if (articleNumber > 4){
        btnForward.disabled = true;
    } else {
        btnForward.disabled = false;
    }
    printNews(currentDate, urlAPI, articleNumber)
})



btnForward.addEventListener("click", () => {
    if (articleNumber < 4){
        articleNumber++
    }

    if (articleNumber > 0){
        btnBack.disabled = false;
    } else {
        btnBack.disabled = true;
    }

    if (articleNumber < 4){
        btnForward.disabled = false;
    } else {
        btnForward.disabled = true;
    }
    printNews(currentDate, urlAPI, articleNumber)
})

async function printNews(currentDate, url, articleNumb) {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${insertData.value}&from=${currentDate}&sortBy=publishedAt&apiKey=${url}`)
    const data = await response.json()

    const { title, description, urlToImage } = data.articles[articleNumb]
    const { name } = data.articles[articleNumb].source

    document.querySelector("#title").innerText = title;

    document.querySelector("#description").innerText = description;

    document.querySelector("#urltoImage").src = urlToImage;
    document.querySelector("#urltoImage").style.visibility = "visible";

    document.querySelector("#sourcename").innerText = name;
}

/*fetch(`https://newsapi.org/v2/everything?q=${insertData.value}&from=2022-09-30&sortBy=publishedAt&apiKey=${url}`)
    .then((response) => response.json())
    .then((data) => {}
    */