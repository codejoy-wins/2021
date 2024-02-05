// mewextra

document.getElementById('pokemonInput').addEventListener('keypress', function(event) {
    if (event.key === "Enter") { // Checks if the key pressed is the Enter key
        event.preventDefault(); // Prevents the default action of the enter key (submitting a form, for example)
        getPokemon(); // Calls the same function as clicking the button
    }
});

displayPokemon(getTeamData());



document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for the Enter key within the input field
    document.getElementById('pokemonInput').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents the form from submitting
            getPokemon(); // Triggers the function to get and display the Pokemon
        }
    });

    // Display the team from local storage if it exists
    const teamData = getTeamData();
    console.log("teamdata is ${teamData");
    if (teamData && teamData.length > 0) {
        displayPokemonTeam(teamData);
    }
});
