function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * items.length)];
}
console.log(computerPlay());