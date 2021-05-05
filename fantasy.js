console.log("fantasy");
function flex(){
    console.log("flex");
    document.getElementById("playa").innerHTML=`
    <ol>
        <li>Christian McCaffery</li>
        <li>Saquon Barkley</li>
        <li>Dalvin Cook</li>
        <li>Davante Adams</li>
        <li>Tyreek Hill</li>
        <li>Nick Chubb</li>
        <li>Derrick Henry</li>
        <li>Aaron Jones</li>
        <li>DK Metcalf</li>
        <li>Travis Kelce</li>
        <li>Deandre Hopkins</li>
        <li>Michael Thomas</li>
        <p>Flex Ranks in progress</p>
    </ol>
    `
    document.getElementById("flex").classList.add("current");
    document.getElementById("qb").classList.remove("current");
    document.getElementById("rb").classList.remove("current");
    document.getElementById("wr").classList.remove("current");
    document.getElementById("te").classList.remove("current");
    document.getElementById("title").innerHTML=`Flex Rankings - In Progress`

}
function rb(){
    console.log("rb");
    document.getElementById("playa").innerHTML=`
                <ol>
                    <li>Christian McCaffery</li>
                    <li>Saquon Barkley</li>
                    <li>Dalvin Cook</li>
                    <li>Nick Chubb</li>
                    <li>Derrick Henry</li>
                    <li>Alvin Kamara</li>
                    <li>Aaron Jones</li>
                    <li>Kareem Hunt</li>
                    <li>Deandre Swift</li>
                    <li>Joe Mixon</li>
                    <li>Ezekiel Elliot</li>
                    <li>Raheem Mostert</li>
                    <li>JK Dobbins</li>
                    <li>Chris Carson</li>
                    <li>Miles Sanders</li>
                    <li>Cam Akers</li>
                    <li>James Robinson</li>
                    <li>Josh Jacobs</li>
                    <li>Austin Ekeler</li>
                    <li>Antonio Gibson</li>
                    <li>Jonathan Taylor</li>
                    <li>Damien Harris</li>
                    <li>Leonard Fournette</li>
                    <li>David Montgomery</li>
                    <li>David Johnson</li>
                    <li>Devin Singletary</li>
                    <li>Clyde Edwards-Elaire</li>
                    <li>Ronald Jones</li>
                    <li>Giovani Bernard</li>
                    <li>James White</li>
                    <li>Latavius Murray</li>
                    <li>Alexander Mattison</li>
                </ol>
    `
    document.getElementById("rb").classList.add("current");
    document.getElementById("flex").classList.remove("current");
    document.getElementById("qb").classList.remove("current");
    document.getElementById("wr").classList.remove("current");
    document.getElementById("te").classList.remove("current");
    document.getElementById("title").innerHTML=`RB Rankings`
}
function wr(){
    console.log("wr");
    document.getElementById("playa").innerHTML=`
                <ol>
                    <li>Davante Adams</li>
                    <li>Tyreek Hill</li>
                    <li>Michael Thomas</li>
                    <li>DK Metcalf</li>
                    <li>AJ Brown</li>
                    <li>Odell Beckham Jr</li>
                    <li>Deandre Hopkins</li>
                    <li>Julio Jones</li>
                    <li>Antonio Brown</li>
                    <li>Mike Evans</li>
                    <li>Chris Godwin</li>
                    <li>Stefon Diggs</li>
                    <li>Diontae Johnson</li>
                    <li>Calvin Ridley</li>
                    <li>Justin Jefferson</li>
                    <li>Kenny Golladay</li>
                    <li>Adam Thielen</li>
                    <li>Allen Robinson</li>
                    <li>Ceedee Lamb</li>
                    <li>Brandon Aiyuk</li>
                    <li>Tee Higgins</li>
                    <li>Tyler Boyd</li>
                    <li>Will Fuller</li>
                    <li>Jarvis Landry</li>
                    <li>Corey Davis</li>
                    <li>Robert Woods</li>
                    <li>Cooper Kupp</li>
                    <li>Deebo Samuel</li>
                    <li>J'mar Chase</li>
                    <li>DJ Moore</li>
                    <li>Chase Claypool</li>
                    <li>Tyler Lockett</li>
                    <li>Keenan Allen</li>
                    <li>Terry Mclaurin</li>
                    <li>Amari Cooper</li>
                    <li>Davante Parker</li>
                    <li>Courtland Sutton</li>
                </ol>
    `
    document.getElementById("wr").classList.add("current");
    document.getElementById("flex").classList.remove("current");
    document.getElementById("qb").classList.remove("current");
    document.getElementById("rb").classList.remove("current");
    document.getElementById("te").classList.remove("current");
    document.getElementById("title").innerHTML=`WR Rankings`

}
function te(){
    console.log("te");
    document.getElementById("playa").innerHTML=`
                <ol>
                    <li>Travis Kelce</li>
                    <li>George Kittle</li>
                    <li>Darren Waller</li>
                    <li>Mark Andrews</li>
                    <li>Rob Gronkowski</li>
                    <li>Evan Engram</li>
                </ol>
    `
    document.getElementById("te").classList.add("current");
    document.getElementById("flex").classList.remove("current");
    document.getElementById("qb").classList.remove("current");
    document.getElementById("wr").classList.remove("current");
    document.getElementById("rb").classList.remove("current");
    document.getElementById("title").innerHTML=`TE Rankings`

}
function qb(){
    console.log("qb");
    document.getElementById("playa").innerHTML=`
                <ol>
                    <li>Pat Mahomes</li>
                    <li>Aaron Rodgers</li>
                    <li>Tom Brady</li>
                    <li>Russell Wilson</li>
                    <li>Deshaun Watson</li>
                    <li>Lamar Jackson</li>
                    <li>Kyler Murray</li>
                    <li>Josh Allen</li>
                    <li>Dak Prescott</li>
                    <li>Justin Herbert</li>
                    <li>Baker Mayfield</li>
                    <li>Matt Ryan</li>
                    <li>Joe Burrow</li>
                </ol>
    `
    document.getElementById("qb").classList.add("current");
    document.getElementById("flex").classList.remove("current");
    document.getElementById("rb").classList.remove("current");
    document.getElementById("wr").classList.remove("current");
    document.getElementById("te").classList.remove("current");
    document.getElementById("title").innerHTML=`QB Rankings`

}