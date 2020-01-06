// Variables de départ rattacher au code html 
const intro = document.querySelector(".intro");
const general = document.querySelector(".general");
const boutonok = document.getElementById("ok");
const game = document.querySelector(".game");
const choix = document.querySelector(".choix");
const body = document.getElementById("body");

// Evenement qui démarre le jeu en cliquant sur le bouton
boutonok.addEventListener("click", startGame);

function startGame() {

    // Variable pour lesquelles nous allons récupérer leurs valeurs
    let input = document.getElementById("pseudo").value;
    let genre = document.querySelector(".genre").value;
    let role = document.querySelector(".role").value;

    // Permet de faire le design de la div
    choix.style.display = "block";
    body.style.background = "black";
    body.style.color = "white";

    // Affichage dans des paragraphes des variables ci-dessus
    intro.innerHTML = `<p>Nom : ${input}</p><p>Genre : ${genre}</p><p>Role : ${role}</p>`;
    
    // Permet de faire le design de la div
    intro.style.border = "solid 2px";
    intro.style.borderRadius = "10px";
    intro.style.borderColor = "white";
    intro.style.width = "150px";
    intro.style.textAlign = "center";

    intro.style.background = "black";
    
    // Lance la fonction choice
    choice();
}

// Function qui régit tout le jeu (choix)
function choice() {
    //A//
    let oneA = new Room("Enceinte du chateau");
    oneA.description = "L Impératrice vous à convoqué. Vous êtes actuellement devant elle, à attendre quelle vous explique votre venu au château.</br>Impératrice : Nous sommes en situation de crise nous avons besoin de vous. Une pandémie se propage, un champignon pour être plus exacte. Il aspire toute forme de vie et de magie. Ses spores se diffusent de plus en plus dans ce monde, nous devons arreter ça. Seule vous pouvez retrouver le seul être doté de la plus pur des magie, l'enfant de la nature. A l'aide d un objet spécial. Acceptez vous cette quête ? ";

    let twoA = new Room("Enceinte du chateau");
    twoA.description = "Impératrice : Vous avez accepté ! Bravo votre périple commence. Vous devez dès a présent trouver l'objet qui vous conduira à l enfant. Seul vous pouvez le faire marcher. Malheureusement cette objet est perdu depuis des lustres et nous ne savons pas où il se trouve. La seule indication que je puis vous donner c est que la dernière fois qu il a été aperçu c était au sud ouest de l empire. Bonne chance, nous comptons sur vous pour nous sauver.";

    let threeA = new Room("Dehors");
    threeA.description = "Vous sortez. L air est frais et pur. Vous vous demandez comment bien débuter cette quête. Avant tout vous devez trouver des informations sur cet objet. Ou dénicher le plus d informations ?";

    let fourA = new Room("Taverne de la fée pompette");
    fourA.description = "Vous décidez d'aller dans la taverne. Et quel bon choix, vous pouvez trouver tous les ragots, toutes les histoires et toutes les informations que vous voulez ici.";
    
    let fiveA = new Room("Terre inconnue");
    fiveA.description = "Vous êtes à l endroit souhaiter, mais rien à l horizon. Vous restez quand même. Que faire maintenant ?";

    //B//
    let oneB = new Room("Rencontre avec Caliban");
    oneB.description = "? : Bonjour ! Je me présente Caliban D al Salan, blabla. Si vous voulez plus d informations sur ce mystérieux objet, retrouvons nous à la taverne dans 2 heures. Alors intérressé ?";

    let twoB = new Room("Enceinte du chateau");
    twoB.description = " Vous : Je préfére décliner, je ne me sens pas de taille à porter se fardeau.</br> Le jeu est perdu, si j avais pu mettre la chanson de la loose je l aurai mise XP Voulez vous recommencer ?";

    let threeB = new Room("Enceinte du chateau");
    threeB.description = "Vous avez décidé de rester dans le chateau, cela pourrait vous permettre d en apprendre plus de cette histoire et de ce fameux objet que seul vous pouvez faire marcher. Il y a plusieurs personnes qui vous interpellent! Laquelle allez vous voir ?";

    let fourB = new Room("Dans les rues D Antemeta");
    fourB.description = "Vous essayer de trouver des informations sur cet objet mysterieux mais personne ne sait de quoi vous parlez. Vous décidez donc d aller glaner des informations la ou il y a le plus de chance d en avoir.";
    
    let fiveB = new Room("Terre inconnue");
    fiveB.description = "Après avoir questionner tout le monde, vous avez réussi à connaitre l endroit exacte de l objet. Vous êtes à l endroit souhaiter, mais rien à l horizon. Vous restez quand même. Que faire maintenant ?";
    
    //C//
    let oneC = new Room("Enceinte du chateau");
    oneC.description = "Vous décidez de marcher en direction de la courtisane.</br>Vous : Bonjour ma Dame pourrai je vous poser une question ?</br>Courtisane : Bien evidemment, je vous en prie !</br>Vous : Pouvez vous m en dire plus sur cette histoire de l enfant de la nature ?</br>Courtisane : Malheureusement je n en sais pas plus. Oh ! mais dites moi ou avez vous eu cette écharpe ? Elle est de toute beauté.</br>... La courtisane continue dans ses échanges de banalitées. Vous vous demandez quoi faire ?";

    let twoC = new Room("Enceinte du chateau");
    twoC.description = "Vous déclinez sa proposition et décidez de partir du chateau pour avoir plus d'information au sujet de la quête.";

    let threeC = new Room("Dans les rues d Antemeta");
    threeC.description = "En flanant dans une certaine rue vous trouvez un oeuf bien étrange et décidez de le mettre dans votre sac. Vous vous rendez compte que l heure du rendez vous approche et vous ne voulez surtout pas etre en retard. Vous vous hatez donc.";

    let fourC = new Room("Taverne de la fée pompette");
    fourC.description = "Vous apprenez quelle est orpheline et a été vendu au gérant de la taverne très jeune par des mercenaires qui l ont retrouvé seule dans la forêt. Après lui avoir expliqué la quête, la jeune fille accepta sans hésiter et rejoint votre groupe.</br>Vous avez un compagnon désormais, elle se nomme Ellie. Au loin vous voyez l homme arriver.";

    let fiveC = new Room("Taverne de la fée pompette");
    fiveC.description = "Caliban s assoit tout en regardant avec curiosité Ellie. Vous remarquez son regard, vous lui présentez la nouvelle venue, en insistant sur le fait qu elle est votre apprenti.";
    
    //D//
    let oneD = new Room("Enceinte du chateau");
    oneD.description = "L Impératrice vous propose de vous aider comme elle peut dans cette quête en vous apportant tout le soutien dont elle dispose. En voulez vous ? (de son aide bien sur XD)";

    let twoD = new Room("Enceinte du chateau");
    twoD.description = "Vous acceptez sa proposition avec plaisir, puis vous vous dirigez vers la sortie.";

    let threeD = new Room("Taverne de la fée pompette");
    threeD.description = "Sur le chemin de la taverne vous avez ramassé un drole d'oeuf. Vous arrivez un peu en avance et décidez de prendre un repas. Vous commencez à converser avec la charmante serveuse, qui se nomme Ellie.";

    let fourD = new Room("Taverne de la fée pompette");
    fourD.description = "Vous mangez votre repas tranquillement sans faire attention ce qui vous entoure et l heure du rendez vous approche. Au loin vous voyez l homme arriver.";

    let fiveD = new Room("Taverne de la fée pompette");
    fiveD.description = "Vous préférez être direct et demander à l'homme ce qu il sait exactement sur cet objet. Il vous révèle qu il connait l endroit exacte où est situé la boussole. Et oui, l objet est une boussole qui donne la direction vers laquelle son maitre veut vraiment aller. Si vous cherchez un objet particulier, la boussole tournera son aiguille vers la chose voulue.";
    
    //E//
    let oneE = new Room("Enceinte du chateau");
    oneE.description = "Vous décidez de partir. La courtisane ne peut pas vous en apprendre plus.";

    let twoE = new Room("Enceinte du chateau");
    twoE.description = "Vous en avait assez appris sur la vie de chateau mais peu sur la quête. Vous décidez de feindre l ennui pour vous échapper.";

    let threeE = new Room("Enceinte du chateau");
    threeE.description = "L Impératrice vous fait deux propositions dans toutes sa bonté. Laquelle choisissez vous ?";

    let fourE = new Room("Enceinte du chateau");
    fourE.description = "Vous preferez avoir des compagnons pour pouvoir parler.";

    let fiveE = new Room("Taverne de la fée pompette");
    fiveE.description = "Caliban : Toi seul peut l utiliser car c est un de tes ancêtre qui a fabriqué la boussole. Ton ancêtre la faite pour que sa descendance puisse toujours trouver un but dans leurs vies et surtout trouver ce qu il cherchaient. Comme tu es le dernier de ta famille, cette boussole te revient de droit. Comment je suis au courant de tout ça ? Tout d abord puis je te faire confiance ?";
    
    //F//
    let oneF = new Room("Enceinte du chateau");
    oneF.description = "Vous continuez d écouter la courtisane. On ne sait jamais nous pouvons apprendre pleins de choses grace aux ragots. Mais malheureusement vous n'arrivez à apprendre qu'une seule chose : Les nombreux vols qui ont eu lieu dernierement dans le chateau.";

    let twoF = new Room("Enceinte du chateau");
    twoF.description = "Vous essayer de vous échapper discrètement de la conversation, pour ne pas froisser la courtisane. Mais avant de sortir quelqu un attire votre regard.";

    let threeF = new Room("Enceinte du chateau");
    threeF.description = "Que faire maintenant ?";

    let fourF = new Room("Enceinte du chateau");
    fourF.description = "Vous preferez avoir une monture magique pour aller plus vite dans cette quête, et puis vous êtes un loup solitaire, pas besoin de compagnons de sa majesté.";

    let fiveF = new Room("Taverne de la fée pompette");
    fiveF.description = "Caliban : Je vais d'abord répondre à la question la plus importante.Toi seul peut l utiliser car c est un de tes ancêtre qui a fabriqué la boussole. Ton ancêtre la faite pour que sa descendance puisse toujours trouver un but dans leurs vies et surtout trouver ce qu il cherchaient. Comme tu es le dernier de ta famille, cette boussole te revient de droit. Comment je suis au courant de tout ça ? Tout d abord puis je te faire confiance ?";
    
    //G//
    let oneG = new Room("Enceinte du chateau");
    oneG.description = "Vous remerciez l'impératrice de vouloir vous aider, puis vous décidez de partir. Mais avant de partir vous voyez un curieux personnage partir à toute vitesse vers la taverne. Le suivre ?";

    let twoG = new Room("Taverne de la fée pompette");
    twoG.description = "Caliban : Pendant que je volais au chateau j'ai entendu les souverains en parler, tout simplement ! Maintenant a toi de voir si tu veux de mon aide ou pas. Mais sache que si tu ne l accepte pas la quête sera impossible a terminer.";

    let threeG = new Room("Taverne de la fée pompette");
    threeG.description = "Caliban : Tu ne le regretteras pas ! </br> Grace à l'aide du petit voleur nous arrivons à peine 5 jours plus tard au lieu où est censé être la fameuse boussole. Sauf qu'il y a un problème qui s'impose : Elle se trouve dans un donjon.";

    let fourG = new Room("Taverne de la fée pompette");
    fourG.description = "Mauvais choix ! Voulez vous recommencer ?";
    
    let fiveG = new Room("Devant le donjon");
    fiveG.description = "Vous cherchez dans les buissons et trouvez une clé. Miracle, elle ouvre la porte du donjon. Vous entrez et avancer, mais vous rencontrez plusieurs portes. Laquelle prendre ?";
    
    //H//
    let oneH = new Room("Devant le donjon");
    oneH.description = "Vous faites le tour du donjon, mais ne trouver rien.";

    let twoH = new Room("Donjon");
    twoH.description = "Vous empruntez la porte violette. Vous sentez quelque chose bouger dans votre sac, vous sortez un oeuf. L oeuf commence a se fissurer et un dragon en sort. Grace a lui vous pouvez aller directement a la salle ou se trouve la boussole. Que faire ?";

    let threeH = new Room("Donjon");
    threeH.description = "Vous empruntez la porte rouge. Vous sentez quelque chose bouger dans votre sac, vous sortez un oeuf. L oeuf commence a se fissurer et un phoenix en sort. Vous taversez la salle et atterrissez devant trois enigmes.";

    let fourH = new Room("Donjon");
    fourH.description = "Vous empruntez la porte bleu. Vous sentez quelque chose bouger dans votre sac, vous sortez un oeuf. L oeuf commence a se fissurer et un cheval des mers en sort. Vous taversez la salle et atterrissez devant trois enigmes.";
    
    let fiveH = new Room("Donjon");
    fiveH.description = "Vous empruntez la porte verte. Vous sentez quelque chose bouger dans votre sac, vous sortez un oeuf. L oeuf commence a se fissurer et un naga en sort. Vous taversez la salle et atterrissez devant trois enigmes.";
    
    //I//
    let oneI = new Room("Donjon");
    oneI.description = "Vous empruntez la porte blanche. Vous sentez quelque chose bouger dans votre sac, vous sortez un oeuf. L oeuf commence a se fissurer et un griffon en sort. Grace a lui vous pouvez sauter l etape des enigmes.";

    let twoI = new Room("Donjon");
    twoI.description = "Vous tombez dans un piège et mourrez. voulez vous recommencer ?";

    let threeI = new Room("Donjon");
    threeI.description = "Vous regardez si il y a des pièges et bien evidemment il y en a et vous les desactivez. Pour enfin prendre la boussole";

    let fourI = new Room("Donjon");
    fourI.description = "Si cela cache, ce n'est que pour mieux révéler.Cela bloque autant que cela permet de passer. La réponse est dans la question. Que suis-je ?";
    
    let fiveI = new Room("Devant le donjon");
    fiveI.description = "Je suis vague en bord de mer. Je descends des montagnes en hiver. Sans moi vous n'aurez plus une larme.";
    
    //J//
    let oneJ = new Room("Donjon");
    oneJ.description = "Celui qui le fabrique le vend, celui qui l'achète ne s'en sert pas, celui qui s'en sert ne le sais pas. Qu'est-ce ?";

    let twoJ = new Room("Donjon");
    twoJ.description = "Bonne reponse ! Vous pouvez continuer.";

    let threeJ = new Room("Donjon");
    threeJ.description = "Mauvaise réponse ! Vous mourrez. Voulez vous recommencer ?";
    
    //K//
    
    let fiveK = new Room("Devant le donjon");
    fiveK.description = "Vous cherchez dans les buissons et trouvez une clé. Miracle, elle ouvre la porte du donjon. Vous entrez et avancer, mais vous rencontrez plusieurs portes. Laquelle prendre ?";
    
    //L//
    let oneL = new Room("Donjon");
    oneL.description = "Vous choisissez le pont lugubre qui malgré les apparence et tres solide. Vous arrivez désormais dans la piece ou se trouve la boussole. La ! vous la voyez. Que faire ?";
    
    let twoL = new Room("Terre inconnue");
    twoL.description = "Vous suivez votre instinct qui vous dicte que l objet se trouve dans la terre.";
    
    let threeL = new Room("Terre inconnue");
    threeL.description = "Vous preferez utiliser vos talents de traqueur, qui vous permettent de voir des traces effacé par le temps. Vous voyez à un endroit que la terre à été retourné, vous en déduisez que l objet se trouve dans la terre.";
    
    let fourL = new Room("Terre inconnue");
    twoL.description = "Vous utilisez la magie pour le déterrer et vous avez bien fait car beaucoup de cordyceps, le champignon de la pandémie, ont poussé dessus avec le temps. Vous extrayez une boussole. Que faire maintenant ?";
    
    let fiveL = new Room("Terre inconnue");
    fiveL.description = "Vous êtes infecté et êtes mort. Voulez vous recommencer ?";
    
    //M//
    let oneM = new Room("Terre inconnue");
    oneM.description = "Vous essayez de faire marcher la boussole. Mais rien ne marche ! Que faire ?";
    
    let twoM = new Room("Enceinte du chateau");
    twoM.description = "Limpératrice vous explique comment faire marcher la boussole. Vous n avez qu a vouloir du plu profond de votre coeur, retouver l enfant. Vous arrivez a la faire marcher, maintenant elle pointe une direction. que faire ?";
    
    let threeM = new Room("Quelque part dans la clairiere");
    twoM.description = "Vous suivez la direction que la boussole vous donne et arrivez dans une clairiere. Vous entendez un chant. C est une jeune fille qui se trouve un peu plus loin. Vous lui parlez, en évitant de lui faire peur et commencez a lui expliquer les enjeux de sa venue. La fille desempare vous dit quelle n a jamais utilise ses pouvoirs, on le lui interdisait. Vous décidez de lui montrer le seul sort d annihilation que vous connaissez et lui dites de se concentrer sur l image du champignon (que vous lui avez apporté dans un bocal plus tot). Elle recite l incantation et vous voyez le champignon se desintegrer dans le bocal, pour finalement disparaitre. La jeune fille avait réussi. Elle avait sauvé tout le monde. Vous la ramenez avec vous au chateau, pour la presenter a l imperatrice. En l interrogeant vous apprenez quelle est orpheline et a vecu une enfance tres dure. l Imperatrice decide de l adopter et elle fut nommée princesse et future souveraine du royaume quelle avait sauvé.";
    
    let fourM = new Room("Antemeta");
    oneM.description = "Vous essayez de trouver le mysterieux homme que vous avez vu au chateau mais sans succes. Apres avoir chercher pratiquement partout, il ne vous reste que deux endroits.";

    // connect the rooms
    //1
    oneA.addExit("J accepte la quête", twoA).addExit("Décliner", twoB);
    oneB.addExit("Décliner l invitation", twoC).addExit("Accepter le rendez vous", twoD);
    oneC.addExit("Partir", oneE).addExit("Continuer à l écouter", oneF);
    oneD.addExit("Oui", threeE).addExit("Non", threeF);
    oneE.addExit("Voir l homme étrange", oneB);
    oneF.addExit("Montrer des signes d ennui", twoE).addExit("S en aller discretement", twoF);
    oneG.addExit("Suivre", oneB).addExit("Ne pas suivre", fiveL);
    oneH.addExit("Regarder dans les buissons", fiveG);
    oneI.addExit("Pont dorée", fiveK).addExit("Pont lugubre", oneL);
    oneJ.addExit("ecume", threeJ).addExit("sel", threeJ);
    oneL.addExit("Prendre la boussole", twoI).addExit("Voir si il y a des pièges", threeI);
    oneM.addExit("Aller voir l Impératrice", twoM).addExit("Retrouver l Homme étrange", fourM);
    //2    
    twoA.addExit("Sortir", threeA).addExit("Rester", threeB);
    twoB.addExit("Oui", oneA);
    twoC.addExit("Sortir", threeA);
    twoD.addExit("Flaner dans les rues", threeC).addExit("Aller au rdv en avance", threeD);
    twoE.addExit("Se diriger vers l homme étrange", oneB);
    twoF.addExit("Se diriger vers l homme étrange", oneB);
    twoG.addExit("Le prendre dans l equipe", threeG).addExit("Ne pas l accepter", fourG);
    twoH.addExit("Récupérer la boussole", twoI).addExit("Regarder si il y a des pièges autour de la boussole", threeI);
    twoI.addExit("Recommencer", fourG);
    twoL.addExit("Utiliser la magie", fourL).addExit("Utiliser ses mains", fiveL);
    twoM.addExit("suivre les indications de la boussole", threeM);
    //3    
    threeA.addExit("Aller à la taverne", fourA).addExit("Chercher des informations sur la boussole", fourB);
    threeB.addExit("Homme étrange", oneB).addExit("Courtisane", oneC).addExit("Impératrice", oneD);
    threeC.addExit("Aller au rdv", threeD);
    threeD.addExit("Proposer de venir avec moi", fourC).addExit("Ne rien faire", fourD);
    threeE.addExit("Partir avec des chevaux et 5 personnes", fourE).addExit("Partir seul avec une monture magique", fourF);
    threeF.addExit("Partir en la remerciant", oneG);
    threeG.addExit("Chercher dans les buissons", fiveG).addExit("Faire le tour du donjon", oneH);
    threeH.addExit("Enigme 1", fourI).addExit("Enigme 2", fiveI).addExit("Enigme 3", oneJ);
    threeI.addExit("Récupérer la boussole", twoL);
    threeL.addExit("Utiliser la magie", fourL).addExit("Utiliser ses mains", fiveL);
    //4
    fourA.addExit("Aller vérifier les informations", fiveA).addExit("Rester pour questionner un peu plus", fiveB);
    fourB.addExit("Direction la taverne de la fée pompette", fourA);
    fourC.addExit("Présenter la fille", fiveC).addExit("Parler avec lhomme", fiveD);
    fourD.addExit("Parler avec l homme", fiveD);
    fourG.addExit("Oui", oneA);
    fourH.addExit("Enigme 1", fourI).addExit("Enigme 2", fiveI).addExit("Enigme 3", oneJ);
    fourI.addExit("Une enigme", twoJ).addExit("une porte", threeJ).addExit("Un trou", threeJ).addExit("Une vitre", threeJ);
    fourL.addExit("Essayer de la faire marcher ?", oneM).addExit("Retourner au chateau", twoM);
    fourM.addExit("Aller sans presser au chateau", twoM).addExit("Tenter de le trouver dans la taverne", fiveL);
    //5 
    fiveA.addExit("Se fier à son instinct", twoL).addExit("Utiliser son talent de traqueur", threeL);
    fiveB.addExit("Se fier à son instinct", twoL).addExit("Utiliser son talent de traqueur", threeL);
    fiveD.addExit("Pourquoi suis je l unique personne a faire marcher cette boussole ?", fiveE).addExit("Comment savez vous tout ça ?", fiveE);
    fiveE.addExit("Oui", twoG).addExit("A toi de voir", twoG);
    fiveF.addExit("Oui", twoG).addExit("A toi de voir", twoG);
    fiveG.addExit("Porte violette", twoH).addExit("Porte rouge", threeH).addExit("Porte bleu", fourH).addExit("Porte verte", fiveH).addExit("Porte blanche", oneI);
    fiveH.addExit("Enigme 1", fourI).addExit("Enigme 2", fiveI).addExit("Enigme 3", oneJ);
    fiveI.addExit("Une ombre", threeJ).addExit("Lettre e", twoJ);
    fiveK.addExit("recommencer", fourG);
    fiveL.addExit("Oui", oneA);

    goTo(oneA);
};


// print
let print = function (message) {
    document.querySelector('#output').innerHTML += "<br/>" + message + "<br/><br/><br/>";
};

// Room class
function Room(name) {
    this.name = name;
    this.description = "Test, si on le voit y a un pb !";
    this.exits = [];
}

Room.prototype.addExit = function (link, room) {
    this.exits.push({
        link: link,
        room: room
    });
    return this;
};

Room.prototype.getRoom = function (link) {
    if (this.exits.length === 0) return false;
    for (let i = 0; i < this.exits.length; i++) {
        if (this.exits[i].link === link) return this.exits[i].room;
    }
    return false;
};

let current_room;

// move player to next room, update title, links, print description
let goTo = function (room) {
    current_room = room;
    document.querySelector("#roomname").innerHTML = room.name;
    print(room.description);
    // show exit links
    let exits = "";
    for (let i = 0; i < room.exits.length; i++) {
        exits += "<button class=\"boutonchoix\" href=\"javascript:void();\" onclick=\"exit('";
        exits += room.exits[i].link + "');\">" + room.exits[i].link + "</button>";
    }
    $('html, body').animate({
        scrollTop: ($("#sink").offset().top)
    }, 'slow');
    document.querySelector("#sink").innerHTML = exits;
};

let exit = function (link) {
    goTo(current_room.getRoom(link));
};


//Header//
let fixmeTop = $('.fixme').offset().top;
$(window).scroll(function () {
    let currentScroll = $(window).scrollTop();
});
//Back to Top//

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
