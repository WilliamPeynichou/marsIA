# User Stories - Plateforme marsAI

## Introduction
Ce document contient les user stories organisées par Epic et priorisées selon la méthode MoSCoW (Must, Should, Could, Won't).

---

## Légende

| Priorité | Description |
|----------|-------------|
| **MUST** | Indispensable pour le MVP |
| **SHOULD** | Important mais pas bloquant |
| **COULD** | Souhaitable si temps disponible |
| **WON'T** | Hors scope pour cette version |

| Points | Complexité |
|--------|------------|
| 1 | Trivial (< 2h) |
| 2 | Simple (2-4h) |
| 3 | Moyen (4-8h) |
| 5 | Complexe (1-2 jours) |
| 8 | Très complexe (2-3 jours) |
| 13 | Épique (> 3 jours, à découper) |

---

## Epic 1 : Authentification et Gestion des Utilisateurs

### US-1.1 : Inscription classique
**En tant que** visiteur  
**Je veux** pouvoir m'inscrire avec mon email et un mot de passe  
**Afin de** créer un compte et accéder aux fonctionnalités de la plateforme

**Critères d'acceptation :**
- [ ] Formulaire avec email, mot de passe, confirmation mot de passe
- [ ] Validation mot de passe : 8 caractères min, 1 majuscule, 1 chiffre
- [ ] Vérification unicité de l'email
- [ ] Message d'erreur explicite si validation échoue
- [ ] Email de confirmation envoyé
- [ ] Redirection vers page de connexion après inscription

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 5 | 1 |

---

### US-1.2 : Connexion classique
**En tant que** utilisateur inscrit  
**Je veux** pouvoir me connecter avec mes identifiants  
**Afin d'** accéder à mon espace personnel

**Critères d'acceptation :**
- [ ] Formulaire email + mot de passe
- [ ] Génération token JWT à la connexion
- [ ] Redirection vers dashboard selon le rôle
- [ ] Message d'erreur générique si échec (sécurité)
- [ ] Option "Se souvenir de moi"

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 3 | 1 |

---

### US-1.3 : Déconnexion
**En tant que** utilisateur connecté  
**Je veux** pouvoir me déconnecter  
**Afin de** sécuriser mon compte

**Critères d'acceptation :**
- [ ] Bouton de déconnexion visible
- [ ] Suppression du token côté client
- [ ] Redirection vers page d'accueil
- [ ] Invalidation de la session

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 1 | 1 |

---

### US-1.4 : Connexion Google OAuth
**En tant que** visiteur  
**Je veux** pouvoir me connecter avec mon compte Google  
**Afin de** simplifier mon inscription/connexion

**Critères d'acceptation :**
- [ ] Bouton "Connexion avec Google"
- [ ] Redirection vers Google pour authentification
- [ ] Création automatique de compte si premier login
- [ ] Récupération email et nom depuis Google

| Priorité | Points | Sprint |
|----------|--------|--------|
| COULD | 5 | 4 |

---

### US-1.5 : Mot de passe oublié
**En tant que** utilisateur  
**Je veux** pouvoir réinitialiser mon mot de passe  
**Afin de** récupérer l'accès à mon compte

**Critères d'acceptation :**
- [ ] Lien "Mot de passe oublié" sur la page de connexion
- [ ] Envoi d'un email avec lien de réinitialisation
- [ ] Lien valide 24h
- [ ] Formulaire de nouveau mot de passe

| Priorité | Points | Sprint |
|----------|--------|--------|
| SHOULD | 3 | 2 |

---

## Epic 2 : Profil Réalisateur

### US-2.1 : Compléter mon profil
**En tant que** réalisateur  
**Je veux** pouvoir remplir ma biographie, mon école et mes réseaux sociaux  
**Afin de** me présenter aux visiteurs et au jury

**Critères d'acceptation :**
- [ ] Champs : bio (textarea), école (texte), photo de profil
- [ ] Liens réseaux sociaux : Twitter, Instagram, LinkedIn, Site web
- [ ] Validation des URLs
- [ ] Aperçu du profil public
- [ ] Sauvegarde avec message de confirmation

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 3 | 2 |

---

### US-2.2 : Modifier ma photo de profil
**En tant que** réalisateur  
**Je veux** pouvoir uploader une photo de profil  
**Afin d'** avoir une identité visuelle sur la plateforme

**Critères d'acceptation :**
- [ ] Upload d'image (JPG, PNG)
- [ ] Taille max : 2 Mo
- [ ] Redimensionnement automatique
- [ ] Prévisualisation avant validation

| Priorité | Points | Sprint |
|----------|--------|--------|
| SHOULD | 2 | 2 |

---

## Epic 3 : Soumission de Films

### US-3.1 : Soumettre un film solo
**En tant que** réalisateur  
**Je veux** pouvoir soumettre mon court-métrage avec toutes les informations requises  
**Afin de** participer au festival marsAI

**Critères d'acceptation :**
- [ ] Formulaire avec : titre, description, lien YouTube
- [ ] Type de participation : Solo sélectionné
- [ ] Fiche technique IA obligatoire (scénario, images/vidéos, post-prod)
- [ ] Upload du poster (JPG/PNG/GIF, max 2 Mo)
- [ ] Génération automatique de miniature
- [ ] Message de confirmation après soumission

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 8 | 2 |

---

### US-3.2 : Soumettre un film en groupe
**En tant que** réalisateur référent d'un groupe  
**Je veux** pouvoir soumettre un film au nom de mon équipe  
**Afin que** tous les membres soient crédités

**Critères d'acceptation :**
- [ ] Type de participation : Groupe sélectionné
- [ ] Champ "Membres du groupe" affiché (noms, rôles)
- [ ] Participant référent identifié (pour droits d'auteur)
- [ ] Tous les membres affichés sur la page du film

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 3 | 2 |

---

### US-3.3 : Remplir la fiche technique IA
**En tant que** réalisateur  
**Je veux** détailler les outils IA utilisés pour mon film  
**Afin de** respecter les règles du festival et informer le public

**Critères d'acceptation :**
- [ ] Champs obligatoires : IA scénario, IA images/vidéos, IA post-prod
- [ ] Champ optionnel : autres outils
- [ ] Auto-complétion avec liste d'outils connus
- [ ] Validation : au moins un outil renseigné par catégorie

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 3 | 2 |

---

### US-3.4 : Vérification copyright YouTube
**En tant que** système  
**Je veux** vérifier automatiquement les droits d'auteur via YouTube API  
**Afin de** bloquer les soumissions avec contenu protégé

**Critères d'acceptation :**
- [ ] Extraction de l'ID vidéo depuis l'URL YouTube
- [ ] Appel à l'API YouTube Content ID
- [ ] Si problème détecté : soumission bloquée + notification
- [ ] Si OK : soumission acceptée
- [ ] Log de toutes les vérifications

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 8 | 3 |

---

### US-3.5 : Consulter mes soumissions
**En tant que** réalisateur  
**Je veux** voir l'historique de tous mes films soumis  
**Afin de** suivre leur statut

**Critères d'acceptation :**
- [ ] Liste avec : miniature, titre, date, statut
- [ ] Statuts : En attente, Validé, Sélectionné, Refusé
- [ ] Clic pour voir les détails
- [ ] Tri par date (plus récent en premier)

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 3 | 3 |

---

### US-3.6 : Verrouillage automatique des soumissions
**En tant que** système  
**Je veux** désactiver automatiquement le formulaire après la date limite  
**Afin de** respecter la période d'appel à projet de 2 mois

**Critères d'acceptation :**
- [ ] Date limite configurable en base
- [ ] Vérification côté serveur à chaque accès
- [ ] Message "Soumissions closes" si date dépassée
- [ ] Formulaire inaccessible (pas juste masqué)

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 2 | 3 |

---

## Epic 4 : Catalogue Public

### US-4.1 : Afficher la grille de films
**En tant que** visiteur  
**Je veux** voir une grille de miniatures des films  
**Afin de** parcourir le catalogue

**Critères d'acceptation :**
- [ ] Grille responsive (mobile first)
- [ ] 20 films par page
- [ ] Pagination (pas d'infinite scroll)
- [ ] Affichage : miniature, titre, réalisateur, vues

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 5 | 3 |

---

### US-4.2 : Filtrer les films
**En tant que** visiteur  
**Je veux** pouvoir filtrer les films par catégorie, type d'IA ou pays  
**Afin de** trouver des films qui m'intéressent

**Critères d'acceptation :**
- [ ] Filtres : catégorie, type d'IA, pays d'origine
- [ ] Filtres combinables
- [ ] Mise à jour de la grille sans rechargement
- [ ] Réinitialisation des filtres possible
- [ ] Compteur de résultats

| Priorité | Points | Sprint |
|----------|--------|--------|
| SHOULD | 5 | 3 |

---

### US-4.3 : Regarder un film
**En tant que** visiteur  
**Je veux** pouvoir regarder un film en cliquant sur sa miniature  
**Afin de** découvrir les créations

**Critères d'acceptation :**
- [ ] Page détail avec lecteur YouTube embedé
- [ ] Informations : titre, description, réalisateur, fiche IA
- [ ] Compteur de vues incrémenté à chaque visionnage
- [ ] Boutons de partage social visibles

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 3 | 3 |

---

### US-4.4 : Partager un film
**En tant que** visiteur  
**Je veux** partager un film sur les réseaux sociaux  
**Afin de** faire découvrir mes coups de cœur

**Critères d'acceptation :**
- [ ] Boutons : Facebook, Twitter/X, LinkedIn
- [ ] Lien pré-rempli avec titre et URL
- [ ] Ouverture dans nouvelle fenêtre
- [ ] Compteur de partages (optionnel)

| Priorité | Points | Sprint |
|----------|--------|--------|
| SHOULD | 2 | 4 |

---

### US-4.5 : S'inscrire à la newsletter
**En tant que** visiteur  
**Je veux** m'inscrire à la newsletter  
**Afin de** recevoir les actualités du festival

**Critères d'acceptation :**
- [ ] Champ email dans le footer
- [ ] Validation du format email
- [ ] Message de confirmation
- [ ] Protection anti-spam (captcha optionnel)

| Priorité | Points | Sprint |
|----------|--------|--------|
| SHOULD | 2 | 4 |

---

## Epic 5 : Interface Jury (Mode TikTok)

### US-5.1 : Accéder à l'interface de visionnage
**En tant que** membre du jury  
**Je veux** accéder à une interface dédiée de visionnage  
**Afin de** évaluer les films de la sélection officielle

**Critères d'acceptation :**
- [ ] Accès réservé au rôle Jury
- [ ] Interface en mode paysage
- [ ] Chargement des 50 films de la sélection
- [ ] Premier film affiché automatiquement

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 5 | 4 |

---

### US-5.2 : Naviguer avec le swipe vertical
**En tant que** membre du jury  
**Je veux** naviguer entre les vidéos en swipant verticalement  
**Afin de** parcourir rapidement les films

**Critères d'acceptation :**
- [ ] Swipe vers le bas → film suivant
- [ ] Swipe vers le haut → film précédent
- [ ] Animation fluide de transition
- [ ] Préchargement du film suivant
- [ ] Lecture automatique

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 8 | 4 |

---

### US-5.3 : Liker et noter un film
**En tant que** membre du jury  
**Je veux** swiper à droite pour liker et noter un film  
**Afin d'** enregistrer mon évaluation

**Critères d'acceptation :**
- [ ] Swipe droite déclenche pop-up de notation
- [ ] Échelle de 1 à 10 (similaire Letterboxd)
- [ ] Champ commentaire optionnel
- [ ] Bouton valider pour enregistrer
- [ ] Passage automatique au film suivant

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 5 | 4 |

---

### US-5.4 : Disliker un film
**En tant que** membre du jury  
**Je veux** swiper à gauche pour marquer un film comme non souhaité  
**Afin de** l'écarter de ma sélection

**Critères d'acceptation :**
- [ ] Swipe gauche = dislike enregistré
- [ ] Feedback visuel (animation)
- [ ] Film ajouté à la corbeille temporaire
- [ ] Passage automatique au film suivant

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 3 | 4 |

---

### US-5.5 : Récupérer un film disliké
**En tant que** membre du jury  
**Je veux** pouvoir annuler un dislike accidentel  
**Afin de** corriger une erreur de manipulation

**Critères d'acceptation :**
- [ ] Bouton corbeille visible dans l'interface
- [ ] Affichage des 5 derniers films dislikés
- [ ] Clic pour restaurer un film
- [ ] Film de nouveau disponible pour notation

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 3 | 5 |

---

### US-5.6 : Ajouter un film en signet
**En tant que** membre du jury  
**Je veux** pouvoir mettre un film en signet  
**Afin de** le retrouver facilement plus tard

**Critères d'acceptation :**
- [ ] Bouton signet (bookmark) sur chaque film
- [ ] Toggle : ajout/retrait du signet
- [ ] Feedback visuel (icône remplie/vide)
- [ ] Enregistrement immédiat en base

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 2 | 5 |

---

### US-5.7 : Consulter mes signets
**En tant que** membre du jury  
**Je veux** accéder à une page listant mes films en signet  
**Afin de** les revoir avant délibération

**Critères d'acceptation :**
- [ ] Page dédiée "Mes signets"
- [ ] Liste des films marqués
- [ ] Clic pour revoir le film
- [ ] Possibilité de retirer un signet

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 3 | 5 |

---

## Epic 6 : Administration

### US-6.1 : Modérer les soumissions
**En tant qu'** administrateur  
**Je veux** valider ou refuser les films soumis  
**Afin de** contrôler le contenu de la plateforme

**Critères d'acceptation :**
- [ ] Liste des soumissions en attente
- [ ] Visualisation : vidéo, infos, fiche technique IA
- [ ] Actions : Valider, Refuser (avec motif), Sélectionner
- [ ] Notification email au réalisateur

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 5 | 5 |

---

### US-6.2 : Consulter le dashboard statistiques
**En tant qu'** administrateur  
**Je veux** voir un tableau de bord avec les KPIs du festival  
**Afin de** piloter l'événement

**Critères d'acceptation :**
- [ ] Nombre total de soumissions
- [ ] Répartition par pays (carte ou graphique)
- [ ] Top 10 des outils IA utilisés
- [ ] Évolution des inscriptions (courbe)
- [ ] Export CSV possible

| Priorité | Points | Sprint |
|----------|--------|--------|
| SHOULD | 8 | 5 |

---

### US-6.3 : Gérer les partenaires
**En tant qu'** administrateur  
**Je veux** ajouter/modifier/supprimer des partenaires  
**Afin de** les afficher sur le site

**Critères d'acceptation :**
- [ ] CRUD partenaires (nom, logo, URL)
- [ ] Upload de logo (image)
- [ ] Ordre d'affichage configurable
- [ ] Affichage sur le site public

| Priorité | Points | Sprint |
|----------|--------|--------|
| SHOULD | 3 | 5 |

---

### US-6.4 : Gérer les utilisateurs
**En tant qu'** administrateur  
**Je veux** voir et gérer les comptes utilisateurs  
**Afin d'** administrer la plateforme

**Critères d'acceptation :**
- [ ] Liste des utilisateurs avec filtres par rôle
- [ ] Modification du rôle
- [ ] Désactivation/suppression de compte
- [ ] Recherche par email/nom

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 5 | 5 |

---

## Epic 7 : Internationalisation (i18n)

### US-7.1 : Afficher l'interface en français
**En tant que** utilisateur francophone  
**Je veux** voir l'interface en français  
**Afin de** naviguer dans ma langue

**Critères d'acceptation :**
- [ ] Tous les textes UI traduits en français
- [ ] Messages d'erreur en français
- [ ] Français comme langue par défaut

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 5 | 3 |

---

### US-7.2 : Afficher l'interface en anglais
**En tant que** utilisateur anglophone  
**Je veux** voir l'interface en anglais  
**Afin de** participer au festival international

**Critères d'acceptation :**
- [ ] Tous les textes UI traduits en anglais
- [ ] Messages d'erreur en anglais
- [ ] Sélecteur de langue visible

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 5 | 3 |

---

### US-7.3 : Changer la langue
**En tant que** utilisateur  
**Je veux** pouvoir changer la langue de l'interface  
**Afin de** choisir ma préférence

**Critères d'acceptation :**
- [ ] Sélecteur FR/EN visible (header)
- [ ] Changement sans rechargement de page
- [ ] Préférence sauvegardée (localStorage)
- [ ] Persistance entre les sessions

| Priorité | Points | Sprint |
|----------|--------|--------|
| MUST | 2 | 3 |

---

## Epic 8 : Notifications Temps Réel (Optionnel)

### US-8.1 : Recevoir une notification de statut
**En tant que** réalisateur connecté  
**Je veux** être notifié en temps réel du changement de statut de mon film  
**Afin de** suivre ma candidature sans rafraîchir

**Critères d'acceptation :**
- [ ] Connexion WebSocket établie à la connexion
- [ ] Notification push in-app lors du changement de statut
- [ ] Toast avec message et lien vers le film
- [ ] Enregistrement de la notification en base

| Priorité | Points | Sprint |
|----------|--------|--------|
| COULD | 8 | 6 |

---

## Epic 9 : Événement Physique (Optionnel)

### US-9.1 : Consulter l'agenda
**En tant que** visiteur  
**Je veux** voir le programme des événements à Marseille  
**Afin de** planifier ma visite

**Critères d'acceptation :**
- [ ] Page programme avec liste des événements
- [ ] Informations : titre, date, heure, lieu, description
- [ ] Filtres par date et type (conférence, workshop, etc.)
- [ ] Vue calendrier optionnelle

| Priorité | Points | Sprint |
|----------|--------|--------|
| COULD | 5 | 6 |

---

### US-9.2 : Réserver une place
**En tant qu'** utilisateur inscrit  
**Je veux** réserver une place pour un atelier ou la cérémonie  
**Afin de** m'assurer une place

**Critères d'acceptation :**
- [ ] Bouton "Réserver" sur chaque événement
- [ ] Vérification des places disponibles
- [ ] Confirmation de réservation
- [ ] Email avec QR code

| Priorité | Points | Sprint |
|----------|--------|--------|
| COULD | 5 | 6 |

---

## Epic 10 : Page After (Post-Festival)

### US-10.1 : Afficher le palmarès
**En tant que** visiteur  
**Je veux** voir les films gagnants après le festival  
**Afin de** découvrir les lauréats

**Critères d'acceptation :**
- [ ] Page palmarès avec les prix
- [ ] Grand Prix, Prix du Jury, Prix du Public
- [ ] Vidéo de chaque lauréat accessible
- [ ] Infos sur les gagnants

| Priorité | Points | Sprint |
|----------|--------|--------|
| SHOULD | 5 | 6 |

---

## Récapitulatif par Sprint

### Sprint 1 - Fondations (2 semaines)
| User Story | Points |
|------------|--------|
| US-1.1 : Inscription | 5 |
| US-1.2 : Connexion | 3 |
| US-1.3 : Déconnexion | 1 |
| **Total** | **9** |

### Sprint 2 - Profil & Soumission (2 semaines)
| User Story | Points |
|------------|--------|
| US-1.5 : Mot de passe oublié | 3 |
| US-2.1 : Compléter profil | 3 |
| US-2.2 : Photo de profil | 2 |
| US-3.1 : Soumettre film solo | 8 |
| US-3.2 : Soumettre film groupe | 3 |
| US-3.3 : Fiche technique IA | 3 |
| **Total** | **22** |

### Sprint 3 - Catalogue & i18n (2 semaines)
| User Story | Points |
|------------|--------|
| US-3.4 : Vérification copyright | 8 |
| US-3.5 : Consulter soumissions | 3 |
| US-3.6 : Verrouillage automatique | 2 |
| US-4.1 : Grille de films | 5 |
| US-4.2 : Filtres | 5 |
| US-4.3 : Regarder un film | 3 |
| US-7.1 : Interface FR | 5 |
| US-7.2 : Interface EN | 5 |
| US-7.3 : Changer langue | 2 |
| **Total** | **38** |

### Sprint 4 - Interface Jury (2 semaines)
| User Story | Points |
|------------|--------|
| US-1.4 : Google OAuth | 5 |
| US-4.4 : Partager film | 2 |
| US-4.5 : Newsletter | 2 |
| US-5.1 : Interface visionnage | 5 |
| US-5.2 : Swipe vertical | 8 |
| US-5.3 : Liker/noter | 5 |
| US-5.4 : Disliker | 3 |
| **Total** | **30** |

### Sprint 5 - Admin & Finitions (2 semaines)
| User Story | Points |
|------------|--------|
| US-5.5 : Récupérer dislike | 3 |
| US-5.6 : Signets ajout | 2 |
| US-5.7 : Signets page | 3 |
| US-6.1 : Modérer soumissions | 5 |
| US-6.2 : Dashboard stats | 8 |
| US-6.3 : Gérer partenaires | 3 |
| US-6.4 : Gérer utilisateurs | 5 |
| **Total** | **29** |

### Sprint 6 - Optionnels & After (Bonus)
| User Story | Points |
|------------|--------|
| US-8.1 : Notifications WebSocket | 8 |
| US-9.1 : Agenda | 5 |
| US-9.2 : Réservation | 5 |
| US-10.1 : Palmarès | 5 |
| **Total** | **23** |

---

## Vélocité Estimée

| Équipe | Capacité Sprint |
|--------|-----------------|
| 5 développeurs | ~25-30 points/sprint |

---

**Document créé pour l'équipe marsAI - Méthodologie Agile Scrum**

