# Cahier des Charges – Plateforme Web marsAI

Co-création La Plateforme × Mobile Film Festival

**Version : 1.1 (mise à jour)**
**Date : 7 janvier 2026**
**Équipe : 5 développeurs**
**Durée estimée : 10 semaines**

## 1. Présentation Générale du Projet

### 1.1 Contexte
marsAI est un festival international de courts-métrages générés via IA.
- Films de 1 à 2 minutes.
- Thème 1ère édition : « Imaginez des futurs souhaitables »
- Concours international, diffusion en ligne & événement physique (Marseille)

### 1.2 Plateforme Web
Point d’entrée officiel du festival : soumission, interface jury, catalogue public.

### 1.3 Identité & Contraintes éditoriales
- Nom : marsAI
- Logos obligatoires : La Plateforme, Mobile Film Festival
- Langues supportées : Français, Anglais
- Internationalisation : i18n obligatoire, aucun texte en dur

### 1.4 Objectifs
- Valoriser la création humaine assistée par IA
- Expérience fluide pour tous les profils
- Plateforme scalable, accessible, performante
- Sélection & notation efficaces par le jury

#### KPIs
| Indicateur                | Objectif   |
|---------------------------|------------|
| Nombre pays représentés   | > 120      |
| Nombre de films soumis    | > 600      |
| Visiteurs événement réel  | > 3 000    |

---
## 2. Environnement Technique

### 2.1 Stack imposée
| Couche         | Technologie     |
|---------------|----------------|
| Frontend      | React.js       |
| Backend       | Node.js        |
| Base de données| MariaDB/MySQL  |
| CSS           | Tailwind CSS   |
| Architecture  | MERN           |

### 2.2 Bonnes pratiques
- MVC ; séparation stricte frontend/back
- Versioning via Git : main, develop, feature/*
- Code lisible, commenté
- Tests unitaires (fonctions critiques)

### 2.3 Accessibilité & Responsive
- Normes WCAG 2.1
- Mobile First
- Objectif Lighthouse >90

### 2.4 APIs & Services externes
- API YouTube : hébergement & vérification copyright vidéo
- API REST : gestion films, utilisateurs, votes…
- WebSockets (optionnel) : notifications temps réel

### 2.5 Direction Artistique & UI
La direction artistique (DA) de la plateforme s'inspire du studio **Magnetto** (https://magnetto.framer.website/).

- **Esthétique Globale** : Un design "Maverick" qui brise les codes conventionnels. Minimaliste, impactant et immersif.
- **Typographie** : Utilisation de polices sans-serif audacieuses (bold) avec des titrages surdimensionnés pour créer une hiérarchie visuelle forte et une identité marquée.
- **Palette de Couleurs** : Contraste élevé, privilégiant un thème sombre (Dark Mode) premium et futuriste, en accord avec la thématique de l'Intelligence Artificielle.
- **Mise en Page** : Grilles structurées mais dynamiques, utilisant l'espace négatif pour laisser respirer le contenu (films, posters).
- **Expérience Immersive** : Transitions fluides et animations discrètes mais élégantes (inspirées des capacités de Framer) pour captiver l'utilisateur dès l'entrée sur la plateforme.
- **Fusion Créativité/Stratégie** : Le design doit servir la clarté des informations (cahier des charges) tout en offrant une expérience visuelle "Beyond Time".

#### Application aux Maquettes (@assetMaquette/)
- **Home Page** : Une section Hero imposante avec un message fort, suivie d'une grille de films épurée mettant en avant les posters.
- **Mobile First** : Adaptation rigoureuse de la DA Magnetto sur mobile (`MobileHomePage.png`, `MobileHome2.png`), conservant l'impact visuel et la fluidité de navigation malgré la réduction de l'espace.

---
## 3. Authentification & Gestion des Rôles

### 3.1 Comptes utilisateurs
⚠️ Création de compte public non autorisée !
Seuls les rôles suivants peuvent créer un compte :
- Réalisateurs ( via candidature )
- Jurés ( sur invitation )
- Administrateurs
- super admin
**Le public n’a pas de compte utilisateur.**

### 3.2 Sécurité
- Mot de passe : hashage sécurisé (bcrypt)
- Min : 8 caractères, 1 majuscule, 1 chiffre

### 3.3 Rôles et Permissions



#### Réalisateur/Public (no login)
Fiche complète obligatoire :
- Nom, Prénom, Email, Pays, Date de naissance (contrôle âge),
- École (opt.), Réseaux sociaux (opt.)
- Accès : gestion profil, soumissions, historique, upload réservé

#### Partenaire (Optionnel)
- Les partenaires (entreprises, sponsors) disposent d’un rôle dédié leur permettant :
  - D’accéder à une interface de notation des films en tant qu’entreprise. (a verifier)
  - De donner une évaluation sur les films sélectionnés.
  - De laisser un commentaire entreprise visible par l’équipe organisatrice (et/ou éventuellement public, à définir).
  - Leur nom/logo est affiché sur la plateforme selon visibilité convenue (visibilité accrue, options à la discrétion de l’admin/super admin).
  - Peut participer à des votes spécifiques "Prix des partenaires" si ce prix est créé ou validé avec le client.
- Ce rôle est indépendant de celui du jury, avec un accès dédié, sans accès à la délibération ou notes privées du jury.

#### Jury
- Accès via invitation, profil limité.
- Interface privée, visionnage et notation films de la compétition uniquement.
- Système de note de 1 à 10 (décimale autorisée).
- Swipe (like/dislike) et commentaires privés anonymes (notes personnelles).
- Récupération des dislikes possible (corbeille temporaire).
- Votes réversibles jusqu’à la fin de la période de vote (règles à finaliser).
- Infinite scroll en option (à valider avec le client).

#### Administrateur
- Validation, dépublication, gestion dynamique des catégories, partenaires.
- Dashboard statistique (volumes, pays, outils IA…)
- Paramétrage festival et gestion des contenus promotionnels.

#### Super Admin
- Ajoute et retire des administrateurs.
- Dispose de l'intégralité des droits administrateur (voir ci-dessous).
- Bouton superAdmin pour controller le timer "start/pause/delete" en cas de faux depart ou autre

---
## 4. Interface Jury

- Format paysage obligatoire.
- Mode immersif recommandé.
- Navigation verticale : swipe haut/bas (film suivant/précédent)
- Navigation horizontale : dans la section sélection officielle uniquement
- Swipe droite : like → popup note (1–10)
- Swipe gauche : dislike
- Corbeille temporaire (5 derniers dislikes), annulation possible.
- Signets : favoris, page dédiée pour revoir avant délibération.
- Toutes actions persistées (BDD).
- Commentaires du jury strictement privés (notes persos « post-it virtuel »)

---
## 5. Soumission des Films

### 5.1 Période
- 2 mois
- Fermeture automatique du formulaire à échéance (traitement manuel par le superAdmin)
- Pas de limite de candidatures/réalisateur

### 5.2 Règles techniques
- Vidéos : 1 minutes (tolérance max)
- Format : YouTube classique (pas Shorts), ratio 16:9 horizontal
- Résolution/poids : respect standards du Mobile Film Festival

### 5.3 Formulaire (champs obligatoires)
- Titre
- Synopsis très court
- Année de production
- Pays de production
- Langue du film
- Catégories (dynamiques, gérées par l’admin)
- Participation : solo/groupe
- Membres (si groupe)
- Fiche technique IA : outils scénario, images/vidéos, montage, son, autres IA
- Droits (conformité image/musique/voix), mention des banques sons/images, référent légal
- Consentements règlement et promotion

### 5.4 Médias
- Poster : JPG, PNG, GIF, Max 2Mo, redimensionnement auto, miniatures générées
- Vidéo : hébergement via YouTube obligatoire, embed sécurisé, vérification copyright (API)

### 5.5 Gestion des droits (copyright)
- API YouTube : filtre tout film problématique (avant publication)
- Signalement/suppression = dépublication automatique, notification admin/réalisateur
- Politique en cas de suppression à formaliser (re-soumission, remplacement, disqualification)

---
## 6. Catalogue Public
- Grille paginée (20 films/page), pas d’infinite scroll
- Filtres : catégorie (admin), outils IA, pays
- ❌ Pas de likes/dislikes, pas de commentaires publics, prix du public (attente precision client)

---
## 7. Notation et Sélection
- Jury : pré-sélection, sélection thématique, sélection officielle (50 films)
- Système de note 1-10 (décimales autorisées arrondis multiples de 5)
- Barème identique toutes catégories (critères à définir client)
- Votes modifiables
- Prix : Grand Prix, Jury, Bourses (pas de vote public)

---
## 8. Administration
- Validation, dépublication, gestion catégories dynamiques
- Suivi des movies signalés/dépubliés
- Gestion utilisateurs (jury, réalisateurs), gestion partenaires
- Gestion dynamique des contenus promotion/infos/agenda

---
## 9. Internationalisation
- Langue par défaut : EN
- FR supportée
- Interface, emails, messages d’erreur intégralement traduits
- Aucun contenu en dur
- Concours ouvert à tous pays

---
## 10. Sécurité et Performance
- Requêtes SQL préparées
- Validation backend systématique
- JWT + refresh tokens / HTTPS / CSRF
- Optimisation Lighthouse >90 : lazy loading, cache, CDN, compression

---
## 11. Modules OBLIGTAOIRE
- Google OAuth auth
- Notifications temps réel (statut films, websocket)
- Agenda interactif / gestion réservations événements (buffer séances limité)

## 12. Modules Optionnel
-Chat bot IA en RAG avec la bdd

---
## 13. Mode « After Festival »
- Palmarès, films primés, archives, galerie photo, témoignages

---
## 14. Événement physique
- Lieu : La Plateforme, Marseille
- Capacité cible : 3 000 personnes
- Projections, conférences, workshops, cérémonie, planning public dynamique

---
## 15. Livrables
### Phase 1 – Conception
- Maquettes Figma (Intégrant la DA Magnetto)
- Architecture technique
- Modèle BDD
### Phase 2 – Core
- Auth (sans public)
- Soumissions (form consultable sans login)
- Jury (interface privée)
- Catalogue public paginé/+filtres
### Phase 3 – Avancé
- Intégration API YouTube (copyright)
- Système de notation
- Admin (films, users, partenaires)
- i18n
### Phase 4 – Finalisation
- Tests à l’aveugle, optimisation, déploiement, doc.

---
## 16. Annexes
- Glossaire, normes WCAG, liens de référence (Mobile Film Festival),
- Points à préciser avec client : barème détaillé du jury, règles littérature suppression, contrôle âge, durée modifiabilité des votes.

**Document mis à jour d’après la version MaJ.CDH.md et validé par l’équipe marsAI.**
