// Recettes ajoutées manuellement — compatibles sèche Jeff.
// Les images sont attendues dans /images ; si elles manquent, la recette reste utilisable.
(function(){
  window.RECIPES = window.RECIPES || [];
  const addedRecipes = [
    {
      id: "glace-ananas-coco",
      title: "Glace Ananas Coco",
      titleOriginal: "Pineapple Coconut",
      kcal: 333,
      kcalKnown: true,
      protein: 29,
      carbs: 45.1,
      fat: 7.3,
      fatDisplay: "7,3",
      sugar: null,
      fiber: null,
      macroOriginal: "Estimation : 333 kcal | 29 g prot | 45,1 g glucides | 7,3 g lipides par pot Deluxe",
      image: "images/glace-ananas-coco.jpg",
      recipeImage: "recipe-pages/glace-ananas-coco-fiche.jpg",
      sourcePage: null,
      base: [
        "200 g d’ananas frais ou surgelé décongelé, bien égoutté.",
        "300 g de fromage blanc 0% ou skyr 0% — texture plus dense avec le skyr.",
        "100 ml de lait écrémé.",
        "10 g de noix de coco râpée.",
        "Édulcorant au goût si l’ananas n’est pas assez sucré.",
        "0,5 g de gomme xanthane.",
        "1 petite pincée de sel.",
        "Option parfum : 2 à 3 g d’extrait de vanille."
      ],
      mixins: [
        "10 à 20 g de petits morceaux d’ananas ajoutés après le premier turbinage.",
        "2 à 5 g de coco râpée supplémentaire en topping si tu veux plus de relief.",
        "Version plus sèche : reste sur la base seule, sans topping."
      ],
      instructions: [
        "Mixe ananas, fromage blanc, lait, coco râpée, édulcorant éventuel, xanthane, sel et vanille jusqu’à texture parfaitement lisse.",
        "Goûte la base avant congélation : elle doit paraître légèrement plus sucrée et plus parfumée que le résultat final, car le froid atténue les saveurs.",
        "Verse dans le pot Ninja Creami Deluxe sans dépasser la ligne MAX FILL. Si besoin, retire 20 à 30 ml.",
        "Congèle à plat 16 à 24 h.",
        "Avant de turbiner, passe l’extérieur du pot sous l’eau chaude environ 45 à 60 s.",
        "Lance le programme « Lite Ice Cream ». Si la texture reste sableuse, ajoute 10 à 20 ml de lait écrémé puis fais « Re-Spin ».",
        "Ajoute les morceaux d’ananas en fin de préparation et lance « Mix-In » si tu veux plus de texture. Termine par un peu de coco sur le dessus."
      ],
      tags: ["fruité", "ananas", "coco", "moins de 400 kcal", "compatible sèche"],
      note: "Recette créée pour rester compatible avec ta sèche : volume élevé, texture crémeuse, protéines modérées. Macros estimées sur la base de lait écrémé 32 kcal/100 ml et fromage blanc 0% à environ 45 kcal/100 g."
    },
    {
      id: "creme-glacee-avocat-citron",
      title: "Crème glacée Avocat Citron",
      titleOriginal: "Avocado Lemon",
      kcal: 268,
      kcalKnown: true,
      protein: 25.4,
      carbs: 23.2,
      fat: 10.8,
      fatDisplay: "10,8",
      sugar: null,
      fiber: null,
      macroOriginal: "Estimation : 268 kcal | 25,4 g prot | 23,2 g glucides | 10,8 g lipides par pot Deluxe",
      image: "images/creme-glacee-avocat-citron.jpg",
      recipeImage: "recipe-pages/creme-glacee-avocat-citron-fiche.jpg",
      sourcePage: null,
      base: [
        "70 g d’avocat bien mûr.",
        "250 g de fromage blanc 0% ou skyr 0%.",
        "120 ml de lait écrémé.",
        "10 à 15 ml de jus de citron jaune ou vert.",
        "Un peu de zeste de citron finement râpé.",
        "0,4 à 0,5 g de gomme xanthane.",
        "1 pincée de sel.",
        "Poivre très léger, facultatif, pour rappeler l’esprit salé/original."
      ],
      mixins: [
        "Quelques petits dés d’avocat juste avant de servir, sans les congeler dans la base.",
        "Un filet de citron ou un trait d’huile d’olive de 2 à 3 g maximum si tu assumes un peu plus de lipides.",
        "Version la plus sèche : aucun topping."
      ],
      instructions: [
        "Mixe avocat, fromage blanc, lait, jus de citron, zeste, xanthane et sel jusqu’à obtenir une texture complètement lisse et homogène.",
        "Goûte : l’acidité doit être nette, sinon ajoute 2 à 3 ml de jus de citron. L’avocat atténue beaucoup le goût une fois glacé.",
        "Verse dans le pot Deluxe sans dépasser MAX FILL.",
        "Congèle 16 à 24 h, bien à plat.",
        "Passe le pot sous l’eau chaude 45 à 60 s.",
        "Lance « Lite Ice Cream ». Fais ensuite « Re-Spin » si nécessaire, éventuellement avec 10 ml de lait écrémé.",
        "Ajoute le topping seulement après turbinage. Évite d’ajouter trop d’avocat ou d’huile, sinon la recette perd son intérêt diète."
      ],
      tags: ["salé", "citron", "avocat", "moins de 400 kcal", "compatible sèche"],
      note: "Version allégée de la recette avocat-citron : l’avocat est gardé en petite dose pour l’onctuosité, mais la crème et l’huile ont été fortement réduites. Très bon en accompagnement salé ou en verrine fraîche."
    },
    {
      id: "glace-pomme-cannelle",
      title: "Glace Pomme Cannelle",
      titleOriginal: "Apple Cinnamon",
      kcal: 290,
      kcalKnown: true,
      protein: 35.7,
      carbs: 35.5,
      fat: 0.9,
      fatDisplay: "0,9",
      sugar: null,
      fiber: null,
      macroOriginal: "Estimation : 290 kcal | 35,7 g prot | 35,5 g glucides | 0,9 g lipides par pot Deluxe",
      image: "images/glace-pomme-cannelle.jpg",
      recipeImage: "recipe-pages/glace-pomme-cannelle-fiche.jpg",
      sourcePage: null,
      base: [
        "150 g de pomme rôtie ou poêlée sans beurre — Golden ou Pink Lady par exemple.",
        "400 g de fromage blanc 0% ou skyr 0%.",
        "100 ml de lait écrémé.",
        "Cannelle généreuse, selon goût.",
        "Édulcorant au besoin si la pomme n’est pas très sucrée.",
        "0,5 g de gomme xanthane.",
        "1 pincée de sel.",
        "Option : un peu d’arôme vanille."
      ],
      mixins: [
        "20 à 30 g de petits dés de pomme rôtie réservés pour la fin.",
        "1 à 2 g de cannelle supplémentaires à saupoudrer après turbinage.",
        "Option plaisir : un mini filet de sirop d’érable léger, uniquement si tu l’acceptes dans tes calories."
      ],
      instructions: [
        "Fais rôtir les pommes à sec ou avec un fond d’eau, jusqu’à ce qu’elles soient fondantes. Laisse-les refroidir complètement.",
        "Mixe les pommes avec le fromage blanc, le lait, la cannelle, l’édulcorant éventuel, la xanthane et le sel.",
        "Goûte et rectifie : la cannelle doit être franchement présente avant congélation.",
        "Verse dans le pot Deluxe sans dépasser MAX FILL.",
        "Congèle 16 à 24 h à plat.",
        "Passe le pot sous l’eau chaude 45 à 60 s puis lance « Lite Ice Cream ».",
        "Fais « Re-Spin » avec 10 à 20 ml de lait si la texture est trop sèche.",
        "Ajoute les dés de pomme réservés à la fin et lance « Mix-In », ou garde-les simplement en topping."
      ],
      tags: ["fruité", "pomme", "cannelle", "moins de 400 kcal", "compatible sèche"],
      note: "Adaptation volontairement plus sèche que la version Facebook au yaourt grec, beurre, cassonade et sirop d’érable. Ici, on privilégie la pomme rôtie et la cannelle, avec une base lactée légère mais crémeuse."
    },
    {
      id: "sorbet-orange",
      title: "Sorbet Orange",
      titleOriginal: "Orange Sorbet",
      kcal: 263,
      kcalKnown: true,
      protein: 25.6,
      carbs: 38,
      fat: 0.6,
      fatDisplay: "0,6",
      sugar: null,
      fiber: null,
      macroOriginal: "Estimation : 263 kcal | 25,6 g prot | 38 g glucides | 0,6 g lipides par pot Deluxe",
      image: "images/sorbet-orange.jpg",
      recipeImage: "recipe-pages/sorbet-orange-fiche.jpg",
      sourcePage: null,
      base: [
        "250 g d’orange pelée à vif, sans pépins.",
        "250 g de fromage blanc 0% ou skyr 0%.",
        "100 ml de lait écrémé.",
        "Zeste fin d’une demi-orange.",
        "Édulcorant si nécessaire selon l’acidité des oranges.",
        "0,5 g de gomme xanthane.",
        "1 pincée de sel."
      ],
      mixins: [
        "Quelques suprêmes d’orange ajoutés après turbinage.",
        "Un peu de zeste frais au moment du service.",
        "Version plus sorbet : ne garde que les suprêmes, sans aucun autre topping."
      ],
      instructions: [
        "Pèle les oranges à vif et retire au maximum les membranes épaisses et les pépins. Pèse 250 g de chair prête à mixer.",
        "Mixe oranges, fromage blanc, lait, zeste, édulcorant éventuel, xanthane et sel jusqu’à base parfaitement lisse.",
        "Verse dans le pot Deluxe sans dépasser MAX FILL.",
        "Congèle 16 à 24 h à plat.",
        "Passe le pot sous l’eau chaude 45 à 60 s puis lance « Lite Ice Cream ».",
        "Fais « Re-Spin » si nécessaire avec 10 à 15 ml de lait.",
        "Ajoute les suprêmes d’orange en topping ou via « Mix-In » selon la texture recherchée."
      ],
      tags: ["fruité", "orange", "agrumes", "moins de 400 kcal", "compatible sèche"],
      note: "Le nom reste “sorbet”, mais cette version est volontairement plus crémeuse et plus stable qu’un sorbet pur, afin de rester agréable dans la Creami Deluxe tout en restant légère."
    },
    {
      id: "creme-glacee-parmesan-poivre",
      title: "Crème glacée Parmesan & Poivre",
      titleOriginal: "Parmesan & Pepper",
      kcal: 272,
      kcalKnown: true,
      protein: 31.4,
      carbs: 21.2,
      fat: 7.9,
      fatDisplay: "7,9",
      sugar: null,
      fiber: null,
      macroOriginal: "Estimation : 272 kcal | 31,4 g prot | 21,2 g glucides | 7,9 g lipides par pot Deluxe",
      image: "images/creme-glacee-parmesan-poivre.jpg",
      recipeImage: "recipe-pages/creme-glacee-parmesan-poivre-fiche.jpg",
      sourcePage: null,
      base: [
        "300 ml de lait écrémé.",
        "150 g de fromage blanc 0% ou skyr 0%.",
        "25 g de parmesan râpé finement.",
        "Poivre noir fraîchement moulu, généreux.",
        "Sel très léger, voire inutile si le parmesan est déjà marqué.",
        "0,4 à 0,5 g de gomme xanthane."
      ],
      mixins: [
        "Quelques copeaux de parmesan ajoutés après turbinage.",
        "Tour de moulin à poivre juste avant de servir.",
        "Option salée : 2 à 3 g d’huile d’olive en finition, seulement si tu veux une version plus gastronomique."
      ],
      instructions: [
        "Chauffe légèrement 80 à 100 ml de lait, ajoute le parmesan et mélange pour commencer à le dissoudre. Laisse tiédir.",
        "Ajoute le reste du lait, le fromage blanc, le poivre, la xanthane et très peu de sel, puis mixe jusqu’à texture homogène.",
        "Goûte la base : le poivre doit être net et le parmesan bien présent.",
        "Verse dans le pot Deluxe sans dépasser MAX FILL.",
        "Congèle 16 à 24 h.",
        "Passe le pot sous l’eau chaude 45 à 60 s, puis lance « Lite Ice Cream ».",
        "Si nécessaire, fais « Re-Spin » avec 10 ml de lait écrémé.",
        "Ajoute les copeaux de parmesan et le poivre seulement à la fin, pour garder plus de relief en bouche."
      ],
      tags: ["salé", "parmesan", "poivre", "moins de 400 kcal", "compatible sèche"],
      note: "Version allégée de la recette apéritive originale. On garde le caractère du parmesan et du poivre, mais sans crème liquide. Très bon en accompagnement de carpaccio, jambon cru ou légumes grillés."
    },
    {
      id: "creme-glacee-poivron-rouge",
      title: "Crème glacée Poivron Rouge",
      titleOriginal: "Red Pepper",
      kcal: 216,
      kcalKnown: true,
      protein: 23.5,
      carbs: 30.5,
      fat: 1.4,
      fatDisplay: "1,4",
      sugar: null,
      fiber: null,
      macroOriginal: "Estimation : 216 kcal | 23,5 g prot | 30,5 g glucides | 1,4 g lipides par pot Deluxe",
      image: "images/creme-glacee-poivron-rouge.jpg",
      recipeImage: "recipe-pages/creme-glacee-poivron-rouge-fiche.jpg",
      sourcePage: null,
      base: [
        "250 g de poivrons rouges rôtis et bien égouttés.",
        "200 g de fromage blanc 0% ou skyr 0%.",
        "150 ml de lait écrémé.",
        "1 c. à café de paprika doux ou fumé.",
        "Sel et poivre au goût.",
        "0,4 à 0,5 g de gomme xanthane.",
        "Option aromatique : quelques feuilles de basilic."
      ],
      mixins: [
        "Quelques lanières de poivron rôti ajoutées après turbinage.",
        "Poivre noir et basilic frais en finition.",
        "Option plus gourmande : 3 à 5 g d’huile d’olive juste avant de servir."
      ],
      instructions: [
        "Rôtis les poivrons, retire peau et graines puis laisse-les égoutter si nécessaire. Le poids indiqué est le poids prêt à mixer.",
        "Mixe poivrons, fromage blanc, lait, paprika, sel, poivre, xanthane et basilic éventuel jusqu’à texture très lisse.",
        "Goûte la base : elle doit être bien assaisonnée, car le froid atténue le goût du poivron.",
        "Verse dans le pot Ninja Creami Deluxe sans dépasser MAX FILL.",
        "Congèle 16 à 24 h.",
        "Passe le pot sous l’eau chaude 45 à 60 s puis lance « Lite Ice Cream ».",
        "Fais « Re-Spin » si la texture est encore sableuse, avec 10 à 15 ml de lait écrémé si besoin.",
        "Ajoute les lanières de poivron à la fin et termine avec un peu de poivre noir ou de basilic frais."
      ],
      tags: ["salé", "poivron", "paprika", "moins de 400 kcal", "compatible sèche"],
      note: "Parmi les recettes salées, c’est l’une des plus intéressantes pour ta sèche : très peu de lipides, volume élevé, et goût marqué si les poivrons sont bien rôtis."
    }
  ];

  addedRecipes.forEach(recipe => {
    window.RECIPES = window.RECIPES.filter(existing => existing.id !== recipe.id);
    window.RECIPES.push(recipe);
  });
})();
