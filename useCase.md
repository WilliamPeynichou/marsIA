# Use Cases - Plateforme marsAI

## Introduction
Ce document décrit les cas d'utilisation principaux de la plateforme marsAI, organisés par acteur.

---

## Diagramme de Contexte

```
                    ┌─────────────────┐
                    │    marsAI       │
                    │   Plateforme    │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   ┌────▼────┐         ┌─────▼─────┐        ┌────▼────┐
   │Réalisateur│       │   Public   │        │  Jury   │
   └─────────┘         └───────────┘        └─────────┘
        │                    │                    │
        │              ┌─────▼─────┐              │
        └──────────────►   Admin   ◄──────────────┘
                       └───────────┘
                             │
                    ┌────────▼────────┐
                    │  YouTube API    │
                    └─────────────────┘
```

---

## Acteurs du Système

| Acteur | Description |
|--------|-------------|
| **Visiteur** | Utilisateur non connecté |
| **Réalisateur** | Utilisateur inscrit souhaitant soumettre des films |
| **Public** | Utilisateur inscrit souhaitant consulter le catalogue |
| **Jury** | Membre du jury avec accès à l'interface de notation |
| **Administrateur** | Gestionnaire de la plateforme |
| **Système** | Actions automatiques (verrouillage, notifications) |
| **YouTube API** | Service externe de vérification copyright |

---

## UC01 - Gestion de l'Authentification

### UC01.1 - S'inscrire sur la plateforme

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Visiteur |
| **Préconditions** | L'utilisateur n'a pas de compte |
| **Déclencheur** | Clic sur "S'inscrire" |

**Scénario principal :**
1. Le visiteur accède au formulaire d'inscription
2. Il saisit son email, mot de passe et informations personnelles
3. Le système valide le mot de passe (8 car., 1 maj., 1 chiffre)
4. Le système vérifie l'unicité de l'email
5. Le système crée le compte et envoie un email de confirmation
6. L'utilisateur est redirigé vers la page de connexion

**Scénarios alternatifs :**
- 3a. Mot de passe non conforme → Message d'erreur avec règles
- 4a. Email déjà utilisé → Message "Compte existant"

**Postconditions :** Compte créé avec rôle "Public" par défaut

---

### UC01.2 - Se connecter

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Utilisateur inscrit |
| **Préconditions** | L'utilisateur possède un compte |
| **Déclencheur** | Clic sur "Se connecter" |

**Scénario principal :**
1. L'utilisateur saisit son email et mot de passe
2. Le système vérifie les identifiants
3. Le système génère un token JWT
4. L'utilisateur est redirigé vers son dashboard selon son rôle

**Scénarios alternatifs :**
- 2a. Identifiants incorrects → Message d'erreur générique
- 2b. Compte non vérifié → Invitation à vérifier l'email

---

### UC01.3 - Se connecter via Google OAuth (Optionnel)

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Visiteur / Utilisateur |
| **Préconditions** | Compte Google valide |
| **Déclencheur** | Clic sur "Connexion Google" |

**Scénario principal :**
1. L'utilisateur clique sur le bouton Google
2. Redirection vers Google pour authentification
3. Google renvoie les informations de l'utilisateur
4. Le système crée ou connecte le compte associé
5. L'utilisateur est connecté automatiquement

---

## UC02 - Gestion du Profil Réalisateur

### UC02.1 - Compléter son profil

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Réalisateur |
| **Préconditions** | Utilisateur connecté avec rôle Réalisateur |
| **Déclencheur** | Accès à "Mon profil" |

**Scénario principal :**
1. Le réalisateur accède à son profil
2. Il complète/modifie les informations :
   - Biographie
   - École/Formation
   - Réseaux sociaux (liens)
   - Photo de profil
3. Le système valide et sauvegarde les modifications
4. Message de confirmation affiché

**Règles métier :**
- Tous les champs sont optionnels sauf le nom
- Les liens réseaux sociaux doivent être des URLs valides

---

## UC03 - Soumission de Films

### UC03.1 - Soumettre un film

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Réalisateur |
| **Préconditions** | Connecté + Période de soumission ouverte |
| **Déclencheur** | Clic sur "Soumettre un film" |

**Scénario principal :**
1. Le réalisateur accède au formulaire de soumission
2. Il renseigne les informations générales :
   - Titre du film
   - Description
   - Type de participation (Solo/Groupe)
   - Membres du groupe (si applicable)
   - Lien YouTube de la vidéo
3. Il complète la fiche technique IA obligatoire :
   - IA pour le scénario
   - IA pour la génération images/vidéos
   - IA pour la post-production
4. Il uploade le poster (JPG/PNG/GIF, max 2 Mo)
5. Le système vérifie le copyright via YouTube API
6. Le système enregistre la soumission avec statut "En attente"
7. Email de confirmation envoyé au réalisateur

**Scénarios alternatifs :**
- 5a. Problème de copyright détecté → Soumission bloquée + notification
- 4a. Fichier trop volumineux → Message d'erreur
- 1a. Période de soumission fermée → Formulaire inaccessible

**Postconditions :** Film enregistré en base, miniature générée automatiquement

---

### UC03.2 - Consulter l'historique de ses soumissions

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Réalisateur |
| **Préconditions** | Connecté avec au moins une soumission |
| **Déclencheur** | Accès à "Mes films" |

**Scénario principal :**
1. Le réalisateur accède à son espace "Mes films"
2. Le système affiche la liste de ses soumissions
3. Pour chaque film : titre, date, statut, miniature
4. Possibilité de cliquer pour voir les détails

**Statuts possibles :**
- En attente de validation
- Validé
- Sélectionné (50 films officiels)
- Refusé

---

## UC04 - Consultation du Catalogue (Public)

### UC04.1 - Parcourir le catalogue

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Public / Visiteur |
| **Préconditions** | Aucune |
| **Déclencheur** | Accès à la page catalogue |

**Scénario principal :**
1. L'utilisateur accède au catalogue
2. Le système affiche une grille de miniatures (20 par page)
3. L'utilisateur peut naviguer via la pagination
4. Chaque miniature affiche : titre, réalisateur, compteur de vues
5. Clic sur une miniature → Page détail du film

---

### UC04.2 - Filtrer les films

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Public / Visiteur |
| **Préconditions** | Sur la page catalogue |
| **Déclencheur** | Utilisation des filtres |

**Scénario principal :**
1. L'utilisateur sélectionne un ou plusieurs filtres :
   - Catégorie/thématique
   - Type d'IA utilisée
   - Pays d'origine
2. Le système met à jour la grille avec les films correspondants
3. La pagination se réinitialise à la page 1

---

### UC04.3 - Regarder un film

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Public / Visiteur |
| **Préconditions** | Film sélectionné |
| **Déclencheur** | Clic sur un film |

**Scénario principal :**
1. L'utilisateur clique sur une miniature
2. Le système affiche la page détail avec :
   - Lecteur vidéo YouTube embedé
   - Titre, description, réalisateur
   - Fiche technique IA
   - Compteur de vues (incrémenté)
   - Boutons de partage social
3. L'utilisateur peut regarder le film
4. Le compteur de vues s'incrémente

---

### UC04.4 - Partager un film

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Public / Visiteur |
| **Préconditions** | Sur la page d'un film |
| **Déclencheur** | Clic sur un bouton de partage |

**Scénario principal :**
1. L'utilisateur clique sur un bouton de partage (Facebook, Twitter, LinkedIn)
2. Une fenêtre de partage s'ouvre avec le lien pré-rempli
3. L'utilisateur publie sur son réseau

---

### UC04.5 - S'inscrire à la newsletter

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Public / Visiteur |
| **Préconditions** | Aucune |
| **Déclencheur** | Remplissage du formulaire newsletter |

**Scénario principal :**
1. L'utilisateur saisit son email dans le champ newsletter
2. Le système valide le format de l'email
3. Le système enregistre l'inscription
4. Message de confirmation affiché

---

## UC05 - Interface Jury

### UC05.1 - Accéder à l'interface de visionnage

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Jury |
| **Préconditions** | Connecté avec rôle Jury |
| **Déclencheur** | Accès à "Espace Jury" |

**Scénario principal :**
1. Le jury accède à son espace dédié
2. Le système charge l'interface TikTok-style en mode paysage
3. Le premier film de la sélection officielle s'affiche
4. Le jury peut commencer à visionner et noter

---

### UC05.2 - Naviguer entre les vidéos (Mode TikTok)

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Jury |
| **Préconditions** | Dans l'interface de visionnage |
| **Déclencheur** | Geste de swipe vertical |

**Scénario principal :**
1. Le jury effectue un swipe :
   - **Swipe vers le bas** → Film suivant
   - **Swipe vers le haut** → Film précédent
2. La vidéo se charge et démarre automatiquement
3. Les informations du film s'affichent en overlay

---

### UC05.3 - Liker et noter un film

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Jury |
| **Préconditions** | Film en cours de visionnage |
| **Déclencheur** | Swipe vers la droite |

**Scénario principal :**
1. Le jury effectue un swipe vers la droite (LIKE)
2. Une pop-up de notation apparaît
3. Le jury sélectionne une note de 1 à 10
4. Le jury peut ajouter un commentaire (optionnel)
5. Clic sur "Valider"
6. Le système enregistre le vote
7. Passage automatique au film suivant

---

### UC05.4 - Disliker un film

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Jury |
| **Préconditions** | Film en cours de visionnage |
| **Déclencheur** | Swipe vers la gauche |

**Scénario principal :**
1. Le jury effectue un swipe vers la gauche (DISLIKE)
2. Le système enregistre le film comme "non souhaité"
3. Le film est ajouté à la corbeille temporaire (5 derniers)
4. Passage automatique au film suivant

---

### UC05.5 - Récupérer un film disliké par erreur

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Jury |
| **Préconditions** | Film disliké dans les 5 derniers |
| **Déclencheur** | Clic sur le bouton corbeille |

**Scénario principal :**
1. Le jury clique sur l'icône corbeille
2. Le système affiche les 5 derniers films dislikés
3. Le jury sélectionne un film à récupérer
4. Le système supprime le dislike
5. Le film est de nouveau disponible pour notation

---

### UC05.6 - Ajouter un film en signet

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Jury |
| **Préconditions** | Film en cours de visionnage |
| **Déclencheur** | Clic sur le bouton signet |

**Scénario principal :**
1. Le jury clique sur l'icône signet (bookmark)
2. Le système enregistre le film dans les favoris du jury
3. Confirmation visuelle (icône remplie)
4. Le film est accessible dans "Mes signets"

---

### UC05.7 - Consulter ses signets

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Jury |
| **Préconditions** | Au moins un signet enregistré |
| **Déclencheur** | Accès à "Mes signets" |

**Scénario principal :**
1. Le jury accède à sa page de signets
2. Le système affiche la liste des films marqués
3. Le jury peut cliquer pour revoir un film
4. Possibilité de retirer un signet

---

## UC06 - Administration

### UC06.1 - Modérer les soumissions

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Administrateur |
| **Préconditions** | Connecté avec rôle Admin |
| **Déclencheur** | Accès au backoffice modération |

**Scénario principal :**
1. L'admin accède à la liste des soumissions en attente
2. Il visualise les détails d'un film (vidéo, infos, fiche IA)
3. Il peut :
   - **Valider** → Le film passe en "Validé"
   - **Refuser** → Le film passe en "Refusé" + motif
   - **Sélectionner** → Le film intègre les 50 officiels
4. Le réalisateur est notifié par email

---

### UC06.2 - Consulter le dashboard statistiques

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Administrateur |
| **Préconditions** | Connecté avec rôle Admin |
| **Déclencheur** | Accès au dashboard |

**Scénario principal :**
1. L'admin accède au tableau de bord
2. Le système affiche :
   - Nombre total de soumissions
   - Répartition par pays (carte/graphique)
   - Outils IA les plus utilisés
   - Évolution des inscriptions
   - Nombre de visiteurs uniques
3. Possibilité d'exporter les données (CSV)

---

### UC06.3 - Gérer les partenaires

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Administrateur |
| **Préconditions** | Connecté avec rôle Admin |
| **Déclencheur** | Accès à "Gestion partenaires" |

**Scénario principal :**
1. L'admin accède à la gestion des partenaires
2. Il peut ajouter un partenaire (nom, logo, lien)
3. Il peut modifier ou supprimer un partenaire existant
4. Les logos apparaissent sur le site public

---

### UC06.4 - Gérer les utilisateurs

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Administrateur |
| **Préconditions** | Connecté avec rôle Admin |
| **Déclencheur** | Accès à "Gestion utilisateurs" |

**Scénario principal :**
1. L'admin accède à la liste des utilisateurs
2. Il peut filtrer par rôle (Réalisateur, Public, Jury)
3. Il peut :
   - Modifier le rôle d'un utilisateur
   - Désactiver un compte
   - Supprimer un compte
4. Les changements sont effectifs immédiatement

---

## UC07 - Fonctionnalités Système

### UC07.1 - Verrouillage automatique des soumissions

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Système |
| **Préconditions** | Date limite atteinte |
| **Déclencheur** | Cron job / Timer serveur |

**Scénario principal :**
1. Le système vérifie la date courante
2. Si date > date_limite_soumission :
   - Le formulaire de soumission est désactivé
   - Un message "Soumissions closes" s'affiche
3. Aucune nouvelle soumission n'est acceptée

---

### UC07.2 - Vérification copyright YouTube

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Système + YouTube API |
| **Préconditions** | Nouvelle soumission avec lien YouTube |
| **Déclencheur** | Soumission d'un film |

**Scénario principal :**
1. Le système extrait l'ID de la vidéo YouTube
2. Appel à l'API YouTube pour vérification
3. Si OK → Soumission acceptée
4. Si problème copyright → Soumission bloquée + notification

---

### UC07.3 - Envoyer une notification temps réel (Optionnel)

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Système |
| **Préconditions** | WebSockets activés + utilisateur connecté |
| **Déclencheur** | Changement de statut d'un film |

**Scénario principal :**
1. Un admin change le statut d'un film
2. Le système envoie une notification WebSocket
3. Le réalisateur connecté voit une notification en temps réel
4. Clic sur la notification → Redirection vers le film

---

## UC08 - Internationalisation

### UC08.1 - Changer la langue de l'interface

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Tout utilisateur |
| **Préconditions** | Aucune |
| **Déclencheur** | Clic sur sélecteur de langue |

**Scénario principal :**
1. L'utilisateur clique sur FR/EN
2. L'interface se recharge dans la langue sélectionnée
3. La préférence est sauvegardée (cookie/localStorage)
4. Les prochaines visites utilisent cette langue

---

## UC09 - Événement Physique (Optionnel)

### UC09.1 - Consulter l'agenda interactif

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Public / Visiteur |
| **Préconditions** | Module agenda activé |
| **Déclencheur** | Accès à "Programme" |

**Scénario principal :**
1. L'utilisateur accède à la page programme
2. Le système affiche le planning :
   - Conférences
   - Tables rondes
   - Workshops
3. Filtrage par date/type possible

---

### UC09.2 - Réserver une place

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Utilisateur inscrit |
| **Préconditions** | Connecté + Places disponibles |
| **Déclencheur** | Clic sur "Réserver" |

**Scénario principal :**
1. L'utilisateur sélectionne un événement
2. Il clique sur "Réserver ma place"
3. Le système vérifie la disponibilité
4. La réservation est confirmée
5. Email de confirmation avec QR code

---

## UC10 - Page After (Post-Festival)

### UC10.1 - Consulter le palmarès

| Élément | Description |
|---------|-------------|
| **Acteur principal** | Visiteur |
| **Préconditions** | Festival terminé + Page After activée |
| **Déclencheur** | Accès au site post-festival |

**Scénario principal :**
1. Le visiteur accède au site
2. La page d'accueil affiche le palmarès :
   - Grand Prix
   - Prix du Jury
   - Prix du Public
   - Autres récompenses
3. Chaque film primé est mis en avant avec replay

---

## Matrice de Traçabilité

| Use Case | Réalisateur | Public | Jury | Admin | Système |
|----------|:-----------:|:------:|:----:|:-----:|:-------:|
| UC01.1 - S'inscrire | ✓ | ✓ | - | - | - |
| UC01.2 - Se connecter | ✓ | ✓ | ✓ | ✓ | - |
| UC02.1 - Compléter profil | ✓ | - | - | - | - |
| UC03.1 - Soumettre film | ✓ | - | - | - | - |
| UC04.1 - Parcourir catalogue | ✓ | ✓ | - | - | - |
| UC05.1-5.7 - Interface jury | - | - | ✓ | - | - |
| UC06.1-6.4 - Administration | - | - | - | ✓ | - |
| UC07.1-7.3 - Système | - | - | - | - | ✓ |

---

**Document créé pour l'équipe marsAI - 5 développeurs**

