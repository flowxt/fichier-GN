// Base de données fictive pour la formation policière
// Toutes les données sont entièrement fictives

export const personnesRecherchees = [
  {
    id: 1,
    nom: "MARTIN",
    prenom: "Jean-Claude",
    dateNaissance: "1985-03-15",
    lieuNaissance: "Annecy (74)",
    adresse: "12 Avenue de Genève, 74000 Annecy",
    motifRecherche: "Vol avec violence",
    dangerosité: "Élevée",
    dateEmission: "2024-01-15",
    numeroFiche: "74-2024-001",
    description:
      "Homme de corpulence moyenne, cicatrice au front, tatouage bras gauche",
    derniereLieu: "Vu aux Houches le 10/09/2024",
  },
  {
    id: 2,
    nom: "BERNARD",
    prenom: "Marie-Christine",
    dateNaissance: "1978-07-22",
    lieuNaissance: "Thonon-les-Bains (74)",
    adresse: "5 Rue du Lac, 74200 Thonon-les-Bains",
    motifRecherche: "Escroquerie en bande organisée",
    dangerosité: "Moyenne",
    dateEmission: "2024-02-03",
    numeroFiche: "74-2024-012",
    description: "Femme blonde, lunettes, environ 1m65",
    derniereLieu: "Évian-les-Bains - 05/09/2024",
  },
  {
    id: 3,
    nom: "DUBOIS",
    prenom: "Pierre-Alexandre",
    dateNaissance: "1992-11-08",
    lieuNaissance: "Chamonix (74)",
    adresse: "78 Route des Pèlerins, 74400 Chamonix",
    motifRecherche: "Trafic de stupéfiants",
    dangerosité: "Très élevée",
    dateEmission: "2024-03-20",
    numeroFiche: "74-2024-027",
    description:
      "Homme grand (1m85), cheveux bruns, barbe, tatouages bras et cou",
    derniereLieu: "Vallée de Chamonix - 12/09/2024",
  },
  {
    id: 4,
    nom: "MOREAU",
    prenom: "Sophie",
    dateNaissance: "1989-12-12",
    lieuNaissance: "Albertville (73)",
    adresse: "23 Impasse des Alpages, 74120 Megève",
    motifRecherche: "Homicide volontaire",
    dangerosité: "Très élevée",
    dateEmission: "2024-01-08",
    numeroFiche: "74-2024-003",
    description: "Femme rousse, yeux verts, piercing oreille droite",
    derniereLieu: "Saint-Gervais-les-Bains - 08/09/2024",
  },
  {
    id: 5,
    nom: "GIRARD",
    prenom: "Antoine",
    dateNaissance: "1995-06-18",
    lieuNaissance: "Cluses (74)",
    adresse: "67 Route des Aravis, 74220 La Clusaz",
    motifRecherche: "Cambriolages en série",
    dangerosité: "Moyenne",
    dateEmission: "2024-08-12",
    numeroFiche: "74-2024-045",
    description: "Homme mince, tatouage serpent avant-bras droit",
    derniereLieu: "Annemasse - 13/09/2024",
  },
  {
    id: 6,
    nom: "LEMOINE",
    prenom: "Valérie",
    dateNaissance: "1983-09-30",
    lieuNaissance: "Bonneville (74)",
    adresse: "14 Chemin du Mont-Blanc, 74700 Sallanches",
    motifRecherche: "Enlèvement parental",
    dangerosité: "Élevée",
    dateEmission: "2024-09-01",
    numeroFiche: "74-2024-052",
    description: "Femme blonde, 1m70, cicatrice menton",
    derniereLieu: "Frontière suisse - 11/09/2024",
  },
];

export const vehiculesVoles = [
  {
    id: 1,
    marque: "BMW",
    modele: "X3",
    couleur: "Noir métallisé",
    plaque: "AB-123-CD",
    vin: "WBAXG71050G123456",
    dateVol: "2024-09-01",
    lieuVol: "Parking Courier - Annecy",
    proprietaire: "LAURENT Michel",
    caracteristiques: "Jantes alliage, toit ouvrant, GPS",
    statut: "Recherché",
    dangerosité: "Véhicule utilisé dans des braquages",
  },
  {
    id: 2,
    marque: "Audi",
    modele: "A4",
    couleur: "Blanc",
    plaque: "EF-456-GH",
    vin: "WAUZZZ8K2DA123789",
    dateVol: "2024-08-28",
    lieuVol: "Rue de la Paix - Thonon-les-Bains",
    proprietaire: "GARCIA Ana",
    caracteristiques: "Boîte automatique, cuir beige",
    statut: "Recherché",
    dangerosité: "Aucune - vol à la roulotte",
  },
  {
    id: 3,
    marque: "Mercedes",
    modele: "Classe C",
    couleur: "Gris anthracite",
    plaque: "IJ-789-KL",
    vin: "WDD2050321A123456",
    dateVol: "2024-09-05",
    lieuVol: "Avenue des Alpes - Chamonix",
    proprietaire: "PETIT François",
    caracteristiques: "Pack AMG, vitres teintées",
    statut: "Retrouvé accidenté",
    dangerosité: "Véhicule détruit",
  },
  {
    id: 4,
    marque: "Renault",
    modele: "Clio",
    couleur: "Rouge",
    plaque: "MN-012-OP",
    vin: "VF1RJ000123456789",
    dateVol: "2024-09-10",
    lieuVol: "Place du Marché - Évian-les-Bains",
    proprietaire: "ROUX Julie",
    caracteristiques: "Véhicule d'école de conduite",
    statut: "Recherché",
    dangerosité: "Possible utilisation pour crimes",
  },
  {
    id: 5,
    marque: "Peugeot",
    modele: "208",
    couleur: "Bleu foncé",
    plaque: "QR-345-ST",
    vin: "VF3CA5FZ0JS123456",
    dateVol: "2024-09-12",
    lieuVol: "Parking Leclerc - Annemasse",
    proprietaire: "BLANC Thomas",
    caracteristiques: "Éthylotest antidémarrage",
    statut: "Recherché",
    dangerosité: "Vol à la roulotte",
  },
  {
    id: 6,
    marque: "Volkswagen",
    modele: "Golf",
    couleur: "Argent",
    plaque: "UV-678-WX",
    vin: "WVWZZZ1KZ3W123456",
    dateVol: "2024-08-25",
    lieuVol: "Rue Carnot - Thonon-les-Bains",
    proprietaire: "FISCHER Klaus",
    caracteristiques: "Autocollants ski, porte-vélos",
    statut: "Retrouvé",
    dangerosité: "Véhicule retrouvé intact",
  },
];

export const permisConduire = [
  {
    id: 1,
    numero: "074AB123456",
    nom: "MARTIN",
    prenom: "Jean-Claude",
    dateNaissance: "1985-03-15",
    adresse: "12 Avenue de Genève, 74000 Annecy",
    dateDelivrance: "2003-05-20",
    validiteJusqu: "2028-05-20",
    categories: ["B"],
    statut: "Suspendu",
    motifSuspension: "Conduite en état d'ivresse - 0,8g/l",
    dateSuspension: "2024-07-15",
    dureeSupsension: "6 mois",
    points: 0,
  },
  {
    id: 2,
    numero: "074CD789012",
    nom: "BERNARD",
    prenom: "Marie-Christine",
    dateNaissance: "1978-07-22",
    adresse: "5 Rue du Lac, 74200 Thonon-les-Bains",
    dateDelivrance: "1996-08-12",
    validiteJusqu: "2026-08-12",
    categories: ["B"],
    statut: "Valide",
    points: 12,
    infractions: [],
  },
  {
    id: 3,
    numero: "074EF345678",
    nom: "DUBOIS",
    prenom: "Pierre-Alexandre",
    dateNaissance: "1992-11-08",
    adresse: "78 Route des Pèlerins, 74400 Chamonix",
    dateDelivrance: "2010-03-15",
    validiteJusqu: "2030-03-15",
    categories: ["A2", "B"],
    statut: "Annulé",
    motifAnnulation: "Récidive grande vitesse (+50km/h en agglomération)",
    dateAnnulation: "2024-02-10",
    points: 0,
  },
  {
    id: 4,
    numero: "074GH901234",
    nom: "MOREAU",
    prenom: "Sophie",
    dateNaissance: "1989-12-12",
    adresse: "23 Impasse des Alpages, 74120 Megève",
    dateDelivrance: "2007-09-25",
    validiteJusqu: "2027-09-25",
    categories: ["B"],
    statut: "Valide",
    points: 8,
    infractions: [
      {
        date: "2024-06-15",
        type: "Excès de vitesse",
        lieu: "A40 - Sallanches",
        points: -2,
      },
      {
        date: "2024-03-10",
        type: "Téléphone au volant",
        lieu: "Megève centre",
        points: -3,
      },
    ],
  },
  {
    id: 5,
    numero: "074IJ567890",
    nom: "SCHNEIDER",
    prenom: "Klaus",
    dateNaissance: "1975-04-03",
    adresse: "15 Chemin des Alpages, 74310 Les Houches",
    dateDelivrance: "2005-11-18",
    validiteJusqu: "2025-11-18",
    categories: ["B", "C1"],
    statut: "Valide",
    points: 12,
    infractions: [],
    observation: "Conducteur exemplaire",
  },
  {
    id: 6,
    numero: "074KL123456",
    nom: "GIRARD",
    prenom: "Antoine",
    dateNaissance: "1995-06-18",
    adresse: "67 Route des Aravis, 74220 La Clusaz",
    dateDelivrance: "2013-08-20",
    validiteJusqu: "2033-08-20",
    categories: ["A2", "B"],
    statut: "Suspendu",
    motifSuspension: "Conduite sans assurance - Récidive",
    dateSuspension: "2024-08-01",
    dureeSupsension: "1 an",
    points: 4,
    infractions: [
      {
        date: "2024-07-20",
        type: "Conduite sans assurance",
        lieu: "La Clusaz",
        points: -6,
      },
      {
        date: "2024-05-15",
        type: "Refus de priorité",
        lieu: "Cluses",
        points: -4,
      },
    ],
  },
];

export const fichierNational = [
  {
    id: 1,
    nom: "MARTIN",
    prenom: "Jean-Claude",
    dateNaissance: "1985-03-15",
    numeroNational: "185037401234567",
    casierJudiciaire: [
      {
        date: "2019-05-12",
        infraction: "Vol simple",
        peine: "3 mois avec sursis",
      },
      {
        date: "2021-08-30",
        infraction: "Violence volontaire",
        peine: "6 mois ferme",
      },
      { date: "2023-12-15", infraction: "Recel", peine: "1 an avec sursis" },
    ],
    adresseConnue: "12 Avenue de Genève, 74000 Annecy",
    profession: "Sans emploi",
    situationFamiliale: "Célibataire",
    notes: "Récidiviste - Surveillance renforcée",
  },
  {
    id: 2,
    nom: "BERNARD",
    prenom: "Marie-Christine",
    dateNaissance: "1978-07-22",
    numeroNational: "278227401234568",
    casierJudiciaire: [
      {
        date: "2020-03-08",
        infraction: "Escroquerie",
        peine: "2 ans avec sursis",
      },
    ],
    adresseConnue: "5 Rue du Lac, 74200 Thonon-les-Bains",
    profession: "Conseillère financière",
    situationFamiliale: "Divorcée, 2 enfants",
    notes: "Spécialisée dans l'escroquerie aux personnes âgées",
  },
];

// Fonction de recherche pour les personnes recherchées
export function rechercherPersonne(critere, valeur) {
  if (!valeur) return [];

  const valeurNormalisee = valeur.toLowerCase().trim();

  return personnesRecherchees.filter((personne) => {
    switch (critere) {
      case "nom":
        return personne.nom.toLowerCase().includes(valeurNormalisee);
      case "prenom":
        return personne.prenom.toLowerCase().includes(valeurNormalisee);
      case "numeroFiche":
        return personne.numeroFiche.toLowerCase().includes(valeurNormalisee);
      case "adresse":
        return personne.adresse.toLowerCase().includes(valeurNormalisee);
      default:
        return (
          personne.nom.toLowerCase().includes(valeurNormalisee) ||
          personne.prenom.toLowerCase().includes(valeurNormalisee) ||
          personne.numeroFiche.toLowerCase().includes(valeurNormalisee)
        );
    }
  });
}

// Fonction de recherche pour les véhicules
export function rechercherVehicule(critere, valeur) {
  if (!valeur) return [];

  const valeurNormalisee = valeur.toLowerCase().trim();

  return vehiculesVoles.filter((vehicule) => {
    switch (critere) {
      case "plaque":
        return vehicule.plaque.toLowerCase().includes(valeurNormalisee);
      case "marque":
        return vehicule.marque.toLowerCase().includes(valeurNormalisee);
      case "modele":
        return vehicule.modele.toLowerCase().includes(valeurNormalisee);
      case "proprietaire":
        return vehicule.proprietaire.toLowerCase().includes(valeurNormalisee);
      default:
        return (
          vehicule.plaque.toLowerCase().includes(valeurNormalisee) ||
          vehicule.marque.toLowerCase().includes(valeurNormalisee) ||
          vehicule.modele.toLowerCase().includes(valeurNormalisee)
        );
    }
  });
}

// Fonction de recherche pour les permis de conduire
export function rechercherPermis(critere, valeur) {
  if (!valeur) return [];

  const valeurNormalisee = valeur.toLowerCase().trim();

  return permisConduire.filter((permis) => {
    switch (critere) {
      case "numero":
        return permis.numero.toLowerCase().includes(valeurNormalisee);
      case "nom":
        return permis.nom.toLowerCase().includes(valeurNormalisee);
      case "prenom":
        return permis.prenom.toLowerCase().includes(valeurNormalisee);
      default:
        return (
          permis.numero.toLowerCase().includes(valeurNormalisee) ||
          permis.nom.toLowerCase().includes(valeurNormalisee) ||
          permis.prenom.toLowerCase().includes(valeurNormalisee)
        );
    }
  });
}
