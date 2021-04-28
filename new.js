console.log("new");

let being = "god";
let world = "";
let heaven = "";
let adversary = "";

function reset(){
    console.log("resetting");
    being = "god";
    world = "";
    heaven = "";
    adversary = "";
    document.getElementById("last").innerHTML=`<p>You Exist.</p>`;
    document.getElementById("log").innerHTML=`<p>You Exist.</p>`;
    document.getElementById("choices").innerHTML=`
            <div class="choice" onclick="worldbuilder()">
                Create the world
            </div>
            <div class="choice" onclick="human()">
                Become human
            </div>
            <div class="choice" onclick="lucifer()">
                Create an adversary
            </div>
            <div class="choice" onclick="heavenbuilder()">
                Create Heaven
            </div>
    `
}

function human(){
    console.log("human");
    being = "human";
    document.getElementById("log").innerHTML+=`
    <p>You became human</p>
    `;
    document.getElementById("last").innerHTML=`
    <p>You became human</p>
    `;
    
    if(world){
        console.log("there is a world");
        document.getElementById("choices").innerHTML=`
            <div class="choice">
                Fall in Love
            </div>
            <div class="choice" onclick="satan()">
                Talk to Satan
            </div>
            <div class="choice">
                Speak in Parables
            </div>
            <div class="choice" onclick="heavenbuilder()">
                Create Heaven
            </div>
    `
    }else{
        console.log("there is no world yet");
    document.getElementById("last").innerHTML=`
    <p>There was no air to breath, and nothing to stand on, so you died</p>
    `;
    document.getElementById("log").innerHTML+=`
    <p>There was no air to breath, and nothing to stand on, so you died</p>
    `;
    document.getElementById("choices").innerHTML=`
            <div class="choice" onclick="reset()">
                Try Again?
            </div>
    `;
    

    }
}

function worldbuilder(){
    console.log("world");
    if(world){
        console.log("WORLD IS ALREADY HERE");
        document.getElementById("log").innerHTML+=`
            <p>You tried to create the world</p>
            <p>Earth already exists.</p>
            `;
            document.getElementById("last").innerHTML=`
            <p>You tried to create the world</p>
            <p>Earth already exists.</p>
            `;
    }else{
        console.log("world is being created");
        if(being=="god"){
            console.log("you are currently god");
            document.getElementById("log").innerHTML+=`
            <p>You created Earth</p>
            `;
            document.getElementById("last").innerHTML=`
            <p>You created Earth</p>
            `;
            world = "earth";
            document.getElementById("choices").innerHTML=`
                    <div class="choice" onclick="human()">
                        Become Human
                    </div>
                    <div class="choice" onclick="lucifer()">
                        Create an adversary
                    </div>
                    <div class="choice" onclick="heavenbuilder()">
                        Create Heaven
                    </div>
            `;
        }else{
            console.log("you are not god right now");
            document.getElementById("last").innerHTML=`
            <p>You could not create the world because you were not god</p>
            <p>You were driven mad trying to do so.</p>
            `;
            document.getElementById("log").innerHTML+=`
            <p>You could not create the world because you were not god</p>
            <p>You were driven mad trying to do so.</p>
            `;
            document.getElementById("choices").innerHTML=`
                    <div class="choice" onclick="reset()">
                        Try Again?
                    </div>
            `;
        }
    }
}

function heavenbuilder(){
    console.log("heaven");
    if(heaven){
        if(being=="human"){
            console.log("win");
            document.getElementById("log").innerHTML+=`
            <p>Heaven is already there.</p>
            <p>You decide to create heaven within your own life.</p>
            <p>You win.</p>
            `;
            document.getElementById("last").innerHTML=`
            <p>Heaven is already there.</p>
            <p>You decide to create heaven within your own life.</p>
            <p>You win.</p>
            `;
            document.getElementById("choices").innerHTML=`
                    <div class="choice" onclick="reset()">
                        Play Again?
                    </div>
            `;
        }else{
            console.log("heaven already exists");
            document.getElementById("log").innerHTML+=`
            <p>Heaven is already there.</p>
            `;
            document.getElementById("last").innerHTML=`
            <p>Heaven is already there.</p>
            `;
        }
        
    }else{
        console.log("heaven is being created");
        if(being=="god"){
            console.log("you are currently god");
            document.getElementById("log").innerHTML+=`
            <p>You created Heaven</p>
            `;
            document.getElementById("last").innerHTML=`
            <p>You created Heaven</p>
            `;
            heaven = "heaven";
            document.getElementById("choices").innerHTML=`
                    <div class="choice" onclick="human()">
                        Become Human
                    </div>
                    <div class="choice" onclick="lucifer()">
                        Create an adversary
                    </div>
                    <div class="choice" onclick="worldbuilder()">
                        Create the world
                    </div>
            `;
        }else{
            console.log("you are not god right now");
    
            document.getElementById("last").innerHTML=`
            <p>You could not create heaven because you were not god</p>
            <p>You were driven mad trying to do so.</p>
            `;
            document.getElementById("log").innerHTML+=`
            <p>You could not create heaven because you were not god</p>
            <p>You were driven mad trying to do so.</p>
            `;
            document.getElementById("choices").innerHTML=`
                    <div class="choice" onclick="reset()">
                        Try Again?
                    </div>
            `;
        }
    }
}

function lucifer(){
    console.log("lucifer is being created");
    if(adversary=="lucifer"){
        console.log("lucifer already created");
        document.getElementById("last").innerHTML=`
            <p>You created another devil</p>
            <p>You were overpowered</p>
            `;
            document.getElementById("log").innerHTML+=`
            <p>You created another devil</p>
            <p>You were overpowered</p>
            `;
            document.getElementById("choices").innerHTML=`
                    <div class="choice" onclick="reset()">
                        Try Again?
                    </div>
            `;
    }else{
        console.log("creating lucifer");
        if(being!="god"){
            console.log("currently not a god");
            document.getElementById("last").innerHTML=`
            <p>You could not create lucifer because you were not god</p>
            <p>You were driven mad trying to do so.</p>
            `;
            document.getElementById("log").innerHTML+=`
            <p>You could not create lucifer because you were not god</p>
            <p>You were driven mad trying to do so.</p>
            `;
        }else{
            console.log("currently god");
            adversary="lucifer";
            document.getElementById("last").innerHTML=`
            <p>You created the wicked one, Lucifer</p>
            `;
            document.getElementById("log").innerHTML+=`
            <p>You created the wicked one, Lucifer</p>
            `;
        }
    }
}

function satan(){
    if(adversary=="lucifer"){
        console.log("satan tricks you with lies");
        document.getElementById("last").innerHTML=`
        <p>Satan tricks you with lies</p>
        `;
        document.getElementById("log").innerHTML+=`
        <p>Satan tricks you with lies</p>
        `;
    }else{
        console.log("satan doesn't answer you");
        document.getElementById("last").innerHTML=`
        <p>Satan doesn't answer you</p>
        <p>You are driven mad</p>
        `;
        document.getElementById("log").innerHTML+=`
        <p>Satan doesn't answer you</p>
        <p>You are driven mad</p>
        `;
    }
    document.getElementById("choices").innerHTML=`
                    <div class="choice" onclick="reset()">
                        Try Again?
                    </div>
            `;
}