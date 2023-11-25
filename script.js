function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

nombre_mystere = randomNumber(0, 100)

nombre = 101

while (nombre != nombre_mystere) {
    nombre = prompt("Devinez le juste prix ! Indiquez un nombre et laissez vous guider !")
    if (nombre < nombre_mystere) {
        alert("C'est plus !")
    } else if (nombre > nombre_mystere) {
        alert("C'est moins !")
    } else if (nombre == nombre_mystere) {
        alert("Bravo tu as trouvé")
    } else {
        alert("Je n'ai pas compris, essaie encore")
    }
}