var firsTime = true;

function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const mySentence = str;
    const words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    return words.join(' ');
}

function empty(){
    if(firsTime ==false){
        for (let i = 0; i < 60; i++) {
            const idim = "im" + i
            const im = document.getElementById(idim);
            im.remove();
            const idtx = "tx" + i
            const tx = document.getElementById(idtx);
            tx.remove();
        }
    }
}

function addCode(articles) {
    try {
        let news = articles
        var title
        var imagen
        var url
        var length = 47;
        for (let i = 0; i < 60; i++) {
            title = news[i].title
            url = news[i].url
            imagen = "url('" + news[i].urlToImage + "')" 
    
            var trimmedString = title.substring(0, length) + '...';
            var aidi = "im" + i
            var linke = "parent.open('" + url + "')"
            var imagee = document.createElement("INPUT");
            imagee.setAttribute("type", "button");
            imagee.style.backgroundImage  = imagen
            imagee.id = aidi
            imagee.setAttribute("onclick", linke)
    
            container = "[id='img" + i + "']"
            document.querySelector(container).appendChild(imagee)
            imagee.style.cursor = 'pointer'
    
            const titlee = document.createElement('div')
            let clase = 'tituloNoticia hide'
            titlee.className  = clase
            titlee.id = "tx" + i
            cont = "[id='title" + i + "']"
            document.querySelector(container).appendChild(titlee)
            
            titlee.innerHTML += trimmedString;
          }   
    }
    catch (err) {
        cuteAlert({
            type: "error",
            title: "Error",
            message: "No enough results found",
            buttonText: "Reload"
        }).then(() => {
            location.reload();
        })
    }
}

function news() {
    value = input.value  
    let request = new XMLHttpRequest();
    let url = 'https://newsapi.org/v2/everything?q=' + value + '&apiKey=d429ba86e8de4f62b41b16c9454dbecc'
    request.open("GET",url)
    request.send();
    request.onload = () => {
        let theNews = JSON.parse(request.response)
        addCode(theNews.articles)
    }
}



function show() {
    value = input.value      
    let texto = document.getElementById("texto")
    const result = capitalizeFirstLetter(value)
    texto.innerHTML = 'Noticias relacionadas sobre: ' + result
    texto.style.transition = "opacity 3s"
    texto.style.opacity = '1'

    let article = document.getElementById("article")
    article.style.transition = "margin-top 1s"
    article.style.marginTop = '1vh'

    let news = document.getElementById("news")
    news.style.width = "100%"
    news.style.height = "auto"
    news.style.transition = "opacity 3s"
    news.style.opacity = '1'
}

function check(){
    if(firsTime==true){
        firsTime = false
    }
}

// Get the input field
var input = document.getElementById("myInput");   
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        empty()
        news()
        show()
        check()     
        input.value = ""   
    }

});