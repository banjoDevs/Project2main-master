const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '584c938872msh5a0e1cf02a5269fp197d03jsna83433d26996',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    }
};

let games2 = [];
let curArr = 0;
let minArr = 0;
let maxArr = 11;

let page = 1; // initialize page to 1
let gamesPerPage = 12; // number of games to display per page
let pageCount = 0;
let curPage = 1;

let searchCounter = 0;


let searchInputValue;

const searchBtn2 = () =>{
    searchInputValue = document.getElementById("searchInput").value
    document.getElementById("searchField").innerHTML = "";
    document.getElementById("searchFieldInfo").innerHTML = "";
    searchCounter = 0;

const searchBtn = () => {

    async function getGames(page, gamesPerPage) {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical&page=${page}&gamesPerPage=${gamesPerPage}`, options);
        const data = await response.json();
        return data;
    }

    async function displayGames() {
        let games = await getGames(page, gamesPerPage);
        pageCount = games.length % 12 > 1 ? (games.length - games.length % 12) / 12 + 1 : false;

        let inputValueOrg = searchInputValue;
        let inputValue = searchInputValue.toLowerCase().split("");

        

        //x assigned for array counter of games (games' value inside games)
     
            
            searchCounter == 0 ? document.getElementById("errorCatcher").innerHTML = `<h4 class="orangeText">Sorry! <span class="text-light">Didnt find anything for</span>  "${inputValue.join("")}"</h4>` : ``
            inputValue.length < 2 ? document.getElementById("errorCatcher").innerHTML = `<h4 class="orangeText">**Please enter at least 2 characters!</h4>`: console.log("See");
            for (let x = 0; x <= games.length; x++) {
                let gameTitle = games[x].title.toLowerCase().split("")
                for(let inputValueAry = 0; inputValueAry < inputValue.length ; inputValueAry++){
                        for(let gameTitleAry = 0; gameTitleAry < gameTitle.length ; gameTitleAry++){
                            if(inputValue[0] == gameTitle[gameTitleAry]){
                                if(gameTitle.length - gameTitleAry >= inputValue.length){
                                    let gameTitleSorted = gameTitle.slice(gameTitleAry).slice(0,inputValue.length).join("");
                                    if(inputValueOrg.toLowerCase() == gameTitleSorted){
                                        inputValueAry = inputValue.length;
                                        searchCounter += 1;

                                        const searchCounterPlural = searchCounter > 1 ? "games" : "game";

                                        if(inputValue.length >= 2 && inputValue.length < 25){
                                            console.log(searchCounter);
                                
                                            const icon = () => {
                                                if (games[x].platform == "PC (Windows)") {
                                                  return `<i class="fa-brands fa-windows"></i>
                                                  `;
                                                } else if (games[x].platform == "Web Browser") {
                                                  return `<i class="fa-regular fa-window-maximize"></i>`;
                                                } else {
                                                  return `<i class="fa-brands fa-windows"></i> <i class="fa-regular fa-window-maximize"></i>`;
                                                }
                                              }
                                            

                                        document.getElementById("errorCatcher").innerText = "";
                                        document.getElementById("searchFieldInfo").innerHTML = `<h3 class="text-light">Found <span class="orangeText">${searchCounter}</span> ${searchCounterPlural} for <span class="orangeText">"${searchInputValue}"</span></h3>`;
                                        document.getElementById("searchField").innerHTML += `
                                        
                                        <small  class="col-lg-3 col-md-6 card-group p-2 rounded-0 text-start">
                                            <div class="card text-bg-dark shadow rounded-0 imgZoom" style="overflow: hidden;">
                                                <img src=${games[x].thumbnail} class="card-img-top rounded-0" alt="Loading...">
                                                <div class="card-img-overlay d-flex align-items-start rounded-0 cardOvrLay" style="
                                                height: 197px;">
                                                <small class="card-text mb-4 orangeBg ps-lg-2 pe-lg-2 p-lg-1 m-0">${games[x].genre}</small>
                                                </div>
                                                <div class="card-body d-grid">
                                                <small class="card-title fw-bold fs-5">${games[x].title}</small>
                                                <small class="card-text mb-4">${icon()} | ${games[x].release_date}</small>
                                                <small class="card-text">${games[x].short_description}</small>
                                                </div>
                                                <div class="card-footer d-flex justify-content-between align-items-center">
                                                <a class="cardLink aLink" href="${games[x].freetogame_profile_url}">See more details</a>
                                                <div class="orangeText text-light rounded-1 border-0 p-lg-1 fw-bold ps-lg-2 pe-lg-2" >Free</div>
                                                </div>
                                            </div>
                                        </small>`
                                        
                                        
                                        ;
                                    }
                                                              
                                }
                            }
                        }
                    }
                    
            }
        games2 = games;
        
        }
        
    }
    displayGames();
}
searchBtn();
}
document.getElementById("searchField").innerHTML = "";