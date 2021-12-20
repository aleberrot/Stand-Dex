var imagenes = [];
imagenes["Star Platinum"] = "StarPlatinum.png";
imagenes["Za Warudo"] = "ZaWarudo.png";
imagenes["Gold Experience"] = "GoldExperience.png";
imagenes["King Crimson"] = "KingCrimson.png";
imagenes["Crazy Diamond"] = "CrazyDiamond.png";
imagenes["Stone Free"] = "Stonefree.png";
imagenes["White Snake"] = "WhiteSnake.png";
imagenes["Killer Queen"] = "Killerqueen.png";

console.log(imagenes);

var conjunto = [];
conjunto.push(new Stand("Za Warudo", "C", "A", "A", "A", "B", "B", "MUDA MUDA MUDA MUDA MUDA MUDAAAAAA WRYYYYYY!"));
conjunto.push(new Stand("Star Platinum", "C", "A", "A", "A", "A", "A", "ORA ORA ORA ORA ORA ORA ORAAAAA!"));
conjunto.push(new Stand("Gold Experience", "C", "C", "A", "D", "C", "A", "MUDA MUDA MUDA MUDA MUDA MUDA MUDAAAAAAA WRYYYYYY!"));
conjunto.push(new Stand("King Crimson", "E", "A", "A", "E", "?", "?", "UOOOOOOOOO!"));
conjunto.push(new Stand("Crazy Diamond", "D", "A", "A", "A", "B", "B", "C", "DORA DORA DORA DORA DORA DORA DORAAAAAA!"));
conjunto.push(new Stand("White Snake", "?", "?", "D", "A", "?", "?", "UAAAAAAAAA!"));
conjunto.push(new Stand("Killer Queen", "D", "A", "B", "B", "B", "A", "KILLER QUEEEEEEEN!"));
conjunto.push( new Stand("Stone Free", "C", "A", "B", "A", "C", "A", "ORA ORA ORA ORA ORA ORA ORAAAAAAA!"));

for(var stand of conjunto)
{
    stand.mostrar();
}