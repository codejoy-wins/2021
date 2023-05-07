function cloudland(){
    console.log("welcome to cloudland");
    let k = document.getElementById("passwordx").value;
    console.log(k);
    event.preventDefault();
    if(k=="elam" || k=="Elam"){
        gates();
    }
}

function gates(){
    console.log("gating");
    document.getElementById("show").innerHTML=`
    <img class="nude" src="static/img/heaven.jpg" alt="heaven">
    <p>
        I look at this picture and all I can think of is Heaven.  They say St. Peter is at the gates of heaven, and that the path is narrow.
    </p>
    <p>
        Could this be a reference to a tight vagina as the gates to heaven?  Peter meaning penis?
    </p>
    `
}