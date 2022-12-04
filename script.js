
function citat(){
    let citations=[["Dash nzita","Vivre sans risque c'est mourire sans histoire"],["Sele Shabani","La meilleur de formation se fait seul"],["Tony nimi","Si le css etais une fille donc l'htmml serai l'homme"],["Meddy","Le js est comme le foot plus tu y jouer plus tu prend gout sur tous avec react"],["Grace Ruhana","La beauté d'un site se resumer par sa maquette"],["Tiatania","Si le coeur de l'homme etais un systeme informatique je serais le premier a hacker celle de mon pere"],["cyclope","Si le css n'exister la beauté n'aura pas de sence"],["Maluta","Le web et rien que le web"]];
    let num=Math.floor(Math.random()*(8-0)+0) ;
    let auteur=citations[num][0];
    let citation=citations[num][1];
    let header=document.getElementsByClassName("header");
    let h3=document.getElementById("h3");
    let cit=document.getElementById("citation");
    let p=document.getElementById("p");
    h3.textContent="Par "+auteur;
    p.textContent=citation;
    // cit.append(p);
        
}