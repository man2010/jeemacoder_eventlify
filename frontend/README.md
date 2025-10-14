# Tëranga Jobs Étudiants (Frontend mocké)

Application web qui connecte des étudiant·e·s au Sénégal avec des petits boulots courts et flexibles (nounou, restauration, ménage, cours, réception, livraison), réservables sur des créneaux précis en fonction de leurs disponibilités.

## Concept et objectifs
- **Flexibilité totale**: l’étudiant choisit des missions ponctuelles selon ses créneaux libres (matin, après-midi, soir, nuit) et ses jours disponibles.
- **Offres locales**: ciblage par ville/quartier (ex: Dakar – Mermoz) avec rémunération horaire en XOF.
- **Process simple**: parcours rapide pour filtrer, voir les créneaux exacts, et postuler en 2 clics.
- **Cas d’usage**: babysitting, ménage ponctuel, service événementiel, cours particuliers, réception, livraison.

Ce dépôt ne contient que le **frontend** en React avec **données mockées**. Aucune API n’est branchée; les candidatures sont simulées via `localStorage`.

## Fonctionnalités incluses
- **Liste d’offres mockées** avec titre, employeur, ville, catégorie, description, rémunération horaire (XOF) et **créneaux** datés (jour + heure).
- **Filtres**: recherche texte, catégorie, ville, moments de la journée, jours de la semaine, rémunération minimale.
- **Candidature**: sélection d’un créneau puis confirmation via un modal, sauvegarde locale de la candidature et **toast** de succès.
- **UI responsive** et thème sombre agréable.

## Lancer le projet
Prérequis: Node 18+ (Node 22 OK) et npm.

```bash
cd frontend
npm install
npm run dev
```

Ouvrez `http://localhost:5173`.

## Structure du code
- `src/types.ts`: modèles TypeScript (Job, Timeslot, filtres) + constantes Sénégal.
- `src/mockData.ts`: offres d’exemple réalistes (Dakar, Thiès, Pikine, etc.).
- `src/storage.ts`: persistance simple des candidatures dans `localStorage`.
- `src/components/Filters.tsx`: barre de filtres (texte, sélecteurs, chips).
- `src/components/JobCard.tsx`: carte d’offre + boutons de créneaux.
- `src/components/ApplyModal.tsx`: modal de confirmation de candidature.
- `src/components/Toast.tsx`: notification de succès.
- `src/App.tsx`: logique de filtrage, sélection et flux de candidature.
- `src/index.css`: styles globaux, responsive et thème.

## Idées prochaines étapes (Backend & Produit)
- **Comptes** étudiants et employeurs (authentification, profils, KYC basique pour employeurs).
- **Offres dynamiques**: création/édition côté employeur, nombre de places par créneau, gestion des doublons.
- **Matching intelligent**: suggestions en fonction de disponibilités récurrentes, distance, compétences.
- **Paiement**: intégration mobile money (Wave, Orange Money) pour paiement sécurisé.
- **Modération**: signalement d’offres, vérification des employeurs, règles anti-abus.
- **Internationalisation**: FR/Wolof/EN; accessibilité.

## Licence
Projet éducatif de démonstration (mock frontend). Utilisation libre; pas de garantie.
