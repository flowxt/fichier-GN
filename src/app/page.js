'use client';

import { useState } from 'react';
import Link from 'next/link';
import { rechercherPersonne, rechercherVehicule, rechercherPermis } from '@/data/database';

export default function Home() {
  const [ongletActif, setOngletActif] = useState('personnes');
  const [critereRecherche, setCritereRecherche] = useState('');
  const [valeurRecherche, setValeurRecherche] = useState('');
  const [resultats, setResultats] = useState([]);
  const [chargement, setChargement] = useState(false);

  const executerRecherche = async () => {
    if (!valeurRecherche.trim()) {
      setResultats([]);
      return;
    }

    setChargement(true);
    // Simulation d'un délai de recherche réaliste
    await new Promise(resolve => setTimeout(resolve, 500));

    let resultatsRecherche = [];
    
    switch (ongletActif) {
      case 'personnes':
        resultatsRecherche = rechercherPersonne(critereRecherche, valeurRecherche);
        break;
      case 'vehicules':
        resultatsRecherche = rechercherVehicule(critereRecherche, valeurRecherche);
        break;
      case 'permis':
        resultatsRecherche = rechercherPermis(critereRecherche, valeurRecherche);
        break;
    }

    setResultats(resultatsRecherche);
    setChargement(false);
  };

  const onglets = [
    { id: 'personnes', label: '👤 Personnes Recherchées', couleur: 'bg-red-500' },
    { id: 'vehicules', label: '🚗 Véhicules Volés', couleur: 'bg-orange-500' },
    { id: 'permis', label: '🆔 Permis de Conduire', couleur: 'bg-blue-500' }
  ];

  const criteres = {
    personnes: [
      { value: '', label: 'Recherche générale' },
      { value: 'nom', label: 'Nom' },
      { value: 'prenom', label: 'Prénom' },
      { value: 'numeroFiche', label: 'N° de fiche' },
      { value: 'adresse', label: 'Adresse' }
    ],
    vehicules: [
      { value: '', label: 'Recherche générale' },
      { value: 'plaque', label: 'Plaque d&apos;immatriculation' },
      { value: 'marque', label: 'Marque' },
      { value: 'modele', label: 'Modèle' },
      { value: 'proprietaire', label: 'Propriétaire' }
    ],
    permis: [
      { value: '', label: 'Recherche générale' },
      { value: 'numero', label: 'N° de permis' },
      { value: 'nom', label: 'Nom' },
      { value: 'prenom', label: 'Prénom' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3v-8h6v8h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Système de Fichiers Police</h1>
                <p className="text-lg text-gray-600">Formation - Simulation pédagogique</p>
              </div>
            </div>
            <Link 
              href="/aide"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Guide d&apos;aide
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Instructions */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-center">
            <div className="text-yellow-400 mr-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Instructions pour les élèves</h3>
              <p className="text-yellow-700">
                Utilisez les onglets ci-dessous pour rechercher dans les différents fichiers. 
                Toutes les données sont fictives et créées uniquement à des fins pédagogiques.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation par onglets */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {onglets.map((onglet) => (
                <button
                  key={onglet.id}
                  onClick={() => {
                    setOngletActif(onglet.id);
                    setResultats([]);
                    setValeurRecherche('');
                    setCritereRecherche('');
                  }}
                  className={`${
                    ongletActif === onglet.id
                      ? 'border-blue-500 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-3 px-6 border-b-2 font-medium text-lg rounded-t-lg transition-all duration-200`}
                >
                  {onglet.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Zone de recherche */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Recherche dans le fichier : {onglets.find(o => o.id === ongletActif)?.label}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Critère de recherche
              </label>
              <select
                value={critereRecherche}
                onChange={(e) => setCritereRecherche(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {criteres[ongletActif]?.map((critere) => (
                  <option key={critere.value} value={critere.value}>
                    {critere.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valeur recherchée
              </label>
              <input
                type="text"
                value={valeurRecherche}
                onChange={(e) => setValeurRecherche(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && executerRecherche()}
                placeholder="Saisissez votre recherche..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div className="flex items-end">
              <button
                onClick={executerRecherche}
                disabled={chargement}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {chargement ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Recherche...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Rechercher
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Résultats */}
        {resultats.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Résultats de la recherche ({resultats.length} trouvé{resultats.length > 1 ? 's' : ''})
            </h3>
            
            <div className="space-y-4">
              {resultats.map((resultat) => (
                <div key={resultat.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  {ongletActif === 'personnes' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            resultat.dangerosité === 'Très élevée' ? 'bg-red-100 text-red-800' :
                            resultat.dangerosité === 'Élevée' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            ⚠️ {resultat.dangerosité}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {resultat.prenom} {resultat.nom}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">N° Fiche:</span> {resultat.numeroFiche}</p>
                          <p><span className="font-medium">Né(e) le:</span> {resultat.dateNaissance}</p>
                          <p><span className="font-medium">Adresse:</span> {resultat.adresse}</p>
                          <p><span className="font-medium">Motif:</span> <span className="text-red-600 font-medium">{resultat.motifRecherche}</span></p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Informations complémentaires</h5>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Description:</span> {resultat.description}</p>
                          <p><span className="font-medium">Dernière localisation:</span> {resultat.derniereLieu}</p>
                          <p><span className="font-medium">Date d&apos;émission:</span> {resultat.dateEmission}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {ongletActif === 'vehicules' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            resultat.statut === 'Recherché' ? 'bg-red-100 text-red-800' :
                            resultat.statut === 'Retrouvé accidenté' ? 'bg-gray-100 text-gray-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {resultat.statut}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {resultat.marque} {resultat.modele}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Plaque:</span> <span className="font-mono text-lg">{resultat.plaque}</span></p>
                          <p><span className="font-medium">Couleur:</span> {resultat.couleur}</p>
                          <p><span className="font-medium">VIN:</span> {resultat.vin}</p>
                          <p><span className="font-medium">Propriétaire:</span> {resultat.proprietaire}</p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Détails du vol</h5>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Date du vol:</span> {resultat.dateVol}</p>
                          <p><span className="font-medium">Lieu du vol:</span> {resultat.lieuVol}</p>
                          <p><span className="font-medium">Caractéristiques:</span> {resultat.caracteristiques}</p>
                          <p><span className="font-medium">Dangerosité:</span> <span className="text-red-600">{resultat.dangerosité}</span></p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {ongletActif === 'permis' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            resultat.statut === 'Valide' ? 'bg-green-100 text-green-800' :
                            resultat.statut === 'Suspendu' ? 'bg-orange-100 text-orange-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {resultat.statut}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {resultat.prenom} {resultat.nom}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">N° Permis:</span> <span className="font-mono">{resultat.numero}</span></p>
                          <p><span className="font-medium">Né(e) le:</span> {resultat.dateNaissance}</p>
                          <p><span className="font-medium">Catégories:</span> {resultat.categories?.join(', ')}</p>
                          <p><span className="font-medium">Points:</span> <span className={resultat.points <= 6 ? 'text-red-600 font-bold' : 'text-green-600'}>{resultat.points}/12</span></p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Informations complémentaires</h5>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Validité:</span> {resultat.validiteJusqu}</p>
                          {resultat.motifSuspension && (
                            <p><span className="font-medium">Motif suspension:</span> <span className="text-red-600">{resultat.motifSuspension}</span></p>
                          )}
                          {resultat.motifAnnulation && (
                            <p><span className="font-medium">Motif annulation:</span> <span className="text-red-600">{resultat.motifAnnulation}</span></p>
                          )}
                          {resultat.infractions && resultat.infractions.length > 0 && (
                            <div>
                              <span className="font-medium">Dernières infractions:</span>
                              <ul className="mt-1 ml-4 space-y-1">
                                {resultat.infractions.map((infraction, idx) => (
                                  <li key={idx} className="text-xs">
                                    • {infraction.date} - {infraction.type} ({infraction.points} pts)
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {valeurRecherche && resultats.length === 0 && !chargement && (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0120 12a8 8 0 10-16 0 7.962 7.962 0 006 7.291z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun résultat trouvé</h3>
            <p className="text-gray-500">Essayez avec d&apos;autres critères de recherche.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            🎓 Application de formation - École de Police | Toutes les données sont fictives
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Développé pour l&apos;apprentissage des systèmes de fichiers policiers
          </p>
        </div>
      </footer>
    </div>
  );
}
