var ActivePlayer = 0;
var Source = [0,0];
var PlayerSource = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display ="none";

document.querySelector(".btn-roll").addEventListener("click", function()
{
    var diceNumber  = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display ="block";
    document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
    if (diceNumber === 1)
    {
        document.querySelector(".player-" + ActivePlayer  + "-panel").classList.remove("active");
        document.getElementById("current-" + ActivePlayer).textContent = 0;
        ActivePlayer === 0 ? (ActivePlayer = 1) : (ActivePlayer = 0);
        document.querySelector(".player-" + ActivePlayer + "-panel").classList.add("active");
        PlayerSource = 0;
        document.getElementById("current-" + ActivePlayer).textContent = 0;
    }
    else
    {
        PlayerSource = PlayerSource + diceNumber;
        document.getElementById("current-" + ActivePlayer).textContent = PlayerSource;
    }
});
document.querySelector(".btn-new").addEventListener("click", GameNew());
document.querySelector(".btn-hold").addEventListener("click", function()
{
    if (ActivePlayer === 0)
    {

        Source[0] = Source[0] + PlayerSource;
        document.getElementById("score-" + ActivePlayer).textContent = Source[0];
        ActivePlayer = 1;
        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.add("active");
    }
    else
    {
        Source[1] = Source[1] + PlayerSource;
        document.getElementById("score-" + ActivePlayer).textContent = Source[1];
        ActivePlayer = 0;
        document.querySelector(".player-1-panel").classList.remove("active");
        document.querySelector(".player-0-panel").classList.add("active");
        diceDom.style.display = "none";
    }
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    PlayerSource = 0;

    if(Source[0] >= 100)
    {
      alert("Ялагч Тоглогч 1 боллоо.");
      GameNew();
    }
    else if (Source[1] >= 100)
    {
        alert("Ялагч Тоглогч 2 боллоо.")
        GameNew();
    }

});


function GameNew()
{
    ActivePlayer = 0;
    Source[0] = 0;
    Source[1] = 0;
    PlayerSource = 0;
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    diceDom.style.display = "none";
}