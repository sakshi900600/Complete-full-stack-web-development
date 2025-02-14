function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function

    // Correcting input: 
    if (views.toString().length > 3 && views.toString().length < 7) {
        if (views.toString().length == 4) { var rviews = `${views.toString[0]}${K}` }
        if (views.toString().length == 5) { var rviews = `${views.toString[0]}${views.toString[1]}K` }
        if (views.toString().length == 6) { var rviews = `${String(views).charAt(0)}${String(views).charAt(1)}${String(views).charAt(2)}K` }
    }
    if (views.toString().length > 6) {
        if (views.toString().length == 7) { var rviews = `${String(views).charAt(0)}M` }
        if (views.toString().length == 8) { var rviews = `${String(views).charAt(0)}${String(views).charAt(1)}M` }
        if (views.toString().length == 9) { var rviews = `${String(views).charAt(0)}${String(views).charAt(1)}${String(views).charAt(2)}M` }
    }
    monthsOld = `${monthsOld} months ago`

    // Styling container:
    document.querySelector(".container").setAttribute("style", "background-color: black;  color: white;  height: 188px;  border-radius: 15px;  font-family: 'Segoe UI';")

    // Styling and Making Image:
    let image = document.createElement("div");
    image.innerHTML = `<img src="${thumbnail}"> <div class="duration">${duration}</div>`
    image.setAttribute("class", "card image")
    document.querySelector(".container").append(image)
    document.querySelector("img").setAttribute("style", "position: absolute;  z-index: 0;  width: 250px;  padding: 20px;")
    document.querySelector(".duration").setAttribute("style", "font-weight: 500; padding: 1px; border-radius: 4px; position: absolute; z-index: 2; margin: 134px auto auto 228px; background-color: black;")

    // Styling and Making Title
    let til = document.createElement("div")
    til.innerHTML = title
    til.setAttribute("class", "card title")
    til.setAttribute("style", "margin: 0px 0px 0px 288px; padding-top: 16px; font-weight: 500; font-size: xx-large; overflow: hidden;")
    document.querySelector(".container").append(til)

    // Styling and Making Channel Name:
    let channel = document.createElement("div")
    channel.innerHTML = `${cName} • `
    channel.setAttribute("class", "card cName")
    channel.setAttribute("style", "color: rgba(255, 255, 255, 0.582);margin: 0px 0px 0px 290px;padding-top: 17px;")
    document.querySelector(".container").append(channel)

    // Styling and Making Views
    let viw = document.createElement("div")
    viw.innerHTML = `${rviews} • `
    viw.setAttribute("class", "card views")
    viw.setAttribute("style", "color: rgba(255, 255, 255, 0.582); margin: -21px 0px 0px 415px;")
    document.querySelector(".container").append(viw)

    // Styling and Making months old:
    let month = document.createElement("div")
    month.innerHTML = monthsOld
    month.setAttribute("class", "card time")
    month.setAttribute("style", "color: rgba(255, 255, 255, 0.582); margin: -22px 0px 0px 468px; font-size: medium;")
    document.querySelector(".container").append(month)
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")