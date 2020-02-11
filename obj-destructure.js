const profile = {
    name: "kennie",
    // age: 12,
    complexion: "dark"
}


const displayData = ( {name="Blank", age=15, complexion="brown"} )=>{//default values will be used where
    //absent in the object

    let jsonStr = JSON.stringify({name, age, complexion});
    console.log(jsonStr);
}

displayData(profile);