"use client";

import Link from "next/link";

export default function Aide() {
  const exemples = [
    {
      titre: "Recherche d&apos;une personne recherchée",
      scenarios: [
        {
          description:
            "Un véhicule est contrôlé, vérifiez si le conducteur est recherché",
          nom: "MARTIN",
          action:
            "Rechercher &apos;MARTIN&apos; dans l&apos;onglet Personnes Recherchées",
          resultatAttendu:
            "Personne dangereuse recherchée pour vol avec violence",
        },
        {
          description: "Contrôle d&apos;identité sur une femme suspecte",
          nom: "MOREAU Sophie",
          action:
            "Rechercher &apos;Sophie MOREAU&apos; dans l&apos;onglet Personnes",
          resultatAttendu: "Recherchée pour homicide - Très dangereuse",
        },
      ],
    },
    {
      titre: "Vérification de véhicules volés",
      scenarios: [
        {
          description:
            "Contrôle routier - vérifier une plaque d&apos;immatriculation",
          plaque: "AB-123-CD",
          action:
            "Rechercher &apos;AB-123-CD&apos; dans l&apos;onglet Véhicules Volés",
          resultatAttendu: "BMW X3 volée, utilisée dans des braquages",
        },
        {
          description: "Véhicule abandonné trouvé",
          plaque: "IJ-789-KL",
          action: "Rechercher la plaque dans les véhicules volés",
          resultatAttendu: "Mercedes retrouvée accidentée",
        },
      ],
    },
    {
      titre: "Contrôle des permis de conduire",
      scenarios: [
        {
          description:
            "Contrôle routier - vérifier la validité d&apos;un permis",
          numero: "074AB123456",
          action: "Rechercher le numéro dans l&apos;onglet Permis de Conduire",
          resultatAttendu:
            "Permis suspendu pour conduite en état d&apos;ivresse",
        },
        {
          description: "Accident - vérifier les points du conducteur",
          nom: "MOREAU Sophie",
          action: "Rechercher &apos;MOREAU&apos; dans les permis",
          resultatAttendu: "8 points restants, plusieurs infractions récentes",
        },
      ],
    },
  ];

  const bonnesPratiques = [
    {
      titre: "Sécurité lors des contrôles",
      conseils: [
        "Toujours vérifier le niveau de dangerosité avant d&apos;approcher",
        "En cas de personne très dangereuse, demander du renfort",
        "Noter l&apos;heure et le lieu du contrôle",
        "Prendre des photos si nécessaire",
      ],
    },
    {
      titre: "Procédures de recherche",
      conseils: [
        "Commencer par une recherche générale si vous n&apos;êtes pas sûr",
        "Utiliser les critères spécifiques pour affiner",
        "Vérifier l&apos;orthographe des noms",
        "Essayer les variantes (nom de jeune fille, pseudonymes)",
      ],
    },
    {
      titre: "Documentation",
      conseils: [
        "Toujours documenter les résultats de recherche",
        "Noter les circonstances du contrôle",
        "Informer la hiérarchie en cas de découverte importante",
        "Mettre à jour les dernières localisations connues",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Guide d&apos;utilisation
                </h1>
                <p className="text-lg text-gray-600">
                  Aide et exemples pour la formation
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Retour aux recherches
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">
            Bienvenue dans le système de fichiers police
          </h2>
          <p className="text-blue-700 mb-4">
            Cette application simule les vrais systèmes utilisés par les forces
            de l&apos;ordre. Vous apprendrez à rechercher efficacement dans les
            bases de données pour :
          </p>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Identifier les personnes recherchées</li>
            <li>Vérifier si un véhicule est volé</li>
            <li>Contrôler la validité des permis de conduire</li>
            <li>Évaluer les niveaux de dangerosité</li>
          </ul>
        </div>

        {/* Exemples pratiques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📚 Exemples pratiques
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {exemples.map((exemple, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {exemple.titre}
                </h3>
                <div className="space-y-4">
                  {exemple.scenarios.map((scenario, scenarioIndex) => (
                    <div
                      key={scenarioIndex}
                      className="border-l-4 border-green-400 pl-4 py-2"
                    >
                      <p className="text-sm text-gray-600 mb-2">
                        {scenario.description}
                      </p>
                      <div className="bg-gray-50 p-3 rounded-md text-sm">
                        <p className="font-medium text-green-600 mb-1">
                          🔍 {scenario.action}
                        </p>
                        {scenario.nom && (
                          <p className="text-gray-700">
                            Nom:{" "}
                            <span className="font-mono">{scenario.nom}</span>
                          </p>
                        )}
                        {scenario.plaque && (
                          <p className="text-gray-700">
                            Plaque:{" "}
                            <span className="font-mono">{scenario.plaque}</span>
                          </p>
                        )}
                        {scenario.numero && (
                          <p className="text-gray-700">
                            N° Permis:{" "}
                            <span className="font-mono">{scenario.numero}</span>
                          </p>
                        )}
                        <p className="text-red-600 font-medium mt-2">
                          ⚠️ {scenario.resultatAttendu}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonnes pratiques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ✅ Bonnes pratiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonnesPratiques.map((pratique, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {pratique.titre}
                </h3>
                <ul className="space-y-3">
                  {pratique.conseils.map((conseil, conseilIndex) => (
                    <li key={conseilIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{conseil}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Niveaux de dangerosité */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🚨 Comprendre les niveaux de dangerosité
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold mb-3">
                ⚠️ Moyenne
              </div>
              <p className="text-sm text-gray-600">
                Personne pouvant présenter un risque limité. Procédure normale
                mais rester vigilant.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold mb-3">
                ⚠️ Élevée
              </div>
              <p className="text-sm text-gray-600">
                Personne dangereuse. Approche prudente, possibilité de demander
                du renfort.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold mb-3">
                ⚠️ Très élevée
              </div>
              <p className="text-sm text-gray-600">
                Personne très dangereuse. Renfort obligatoire, ne pas approcher
                seul.
              </p>
            </div>
          </div>
        </div>

        {/* Conseils de recherche */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🔍 Conseils de recherche avancée
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recherche par nom
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Essayez d&apos;abord le nom complet</li>
                <li>• Si rien, essayez juste le nom de famille</li>
                <li>• Attention aux noms composés (Marie-Christine)</li>
                <li>• Vérifiez l&apos;orthographe (MARTIN vs MARTIN)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recherche de véhicules
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Format des plaques: XX-123-XX</li>
                <li>• Recherche possible par marque/modèle</li>
                <li>• Vérifiez le statut (Recherché/Retrouvé)</li>
                <li>• Notez le niveau de dangerosité</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            🎓 Application de formation - École de Police | Toutes les données
            sont fictives
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Guide d&apos;utilisation pour l&apos;apprentissage des systèmes de
            fichiers policiers
          </p>
        </div>
      </footer>
    </div>
  );
}
