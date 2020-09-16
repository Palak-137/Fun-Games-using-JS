var emoji = document.getElementById("icon")

function change(){
    list = [ '😊' , '🥰' ,'😣' ,'😏' ,'🙄' ,'😫' ,'😴' ,'🥱' ,'😤' ,'😭' ,'😲' ,'😨' ,'🤪' ,'😵' ,'🥴' ,'🥵' ,'🥶' ,'😱' ,'😡' ,'🤬' ,'🥳' ,'👻' , '👽' ,'💩' ,'💩' ,'💩' ,'😺' ,'🙈' ,'🤷‍♂️' ,'🤷‍♀️' ,'🙇‍♂️' ,'👧' ,'👩‍🦰' ,'👼' ]
    console.log("kam ho rha h");
    emoji.innerHTML = list[Math.floor(Math.random()* list.length)]
}

emoji.addEventListener("click",change)