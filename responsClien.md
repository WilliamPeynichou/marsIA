# Notes client (remises au propre)

## 1) Communication Jury ↔ Réalisateur
- **Messagerie Jury → Réalisateur** : permettre au jury de contacter un réalisateur (ex : problème détecté sur la vidéo).
- **Gestion des problèmes vidéo** :
  - En cas de souci, envoi d’un message au réalisateur avec explication (“soucis ici, corrigez…”).
  - **Option** : autoriser une **nouvelle soumission** / re-upload de la vidéo si nécessaire.
  - **Piste technique** : automatisation via **n8n** (API YouTube ?) + scripts de réponse.

## 2) Règles de soumission / formats
- **Tolérance durée** : 2 minutes.
- **Affichage** : vignette YouTube (thumbnail) sur les listings.
- **Fichiers complémentaires** :
  - Upload **SRT** (sous-titres).
  - **Galerie photo**.
  - Possibilité d’uploader des fichiers d’accompagnement (dossier, PDF, images, etc.).
- **Déclaration IA** : possibilité d’indiquer “100% IA” (ou non).

## 3) Sélection, phases & calendrier éditorial
- **3 phases (site / expérience)** :
  1. **BA** des éditions précédentes + teasing / ouverture.
  2. **Affichage de la sélection officielle**.
  3. **Palmarès** mis en avant.
- **Échelonnage de sélection pour le vote** : définir comment la sélection se fait par étapes (à préciser).

## 4) Prix, nominations & palmarès
- **Prix à gérer** : prendre en compte différents styles/types de prix.
- **Mise en avant des prix** : page “Prix” mise en avant dès le début.
- **Partenaires par prix** : associer un partenaire à chaque prix (quoi + qui soutient).
- **Nominations / volume** : “50 nominations” (à clarifier : 50 films finalistes ? 50 nommés ?).
- **Participation** : participation à un **prix** plutôt qu’à une “catégorie” (à clarifier selon modèle).
- **Page palmarès** : mise en avant des meilleures notes / meilleurs films (ex : page “Lauréats”).

## 5) Jury, rôles & administration
- **Rôle Jury** : un seul rôle jury pour l’instant, mais à rendre **dynamique** (évolutif).
- **Super Admin** : existence d’un rôle super-admin (droits à définir).
- **Page présentation jury** : pages de présentation des différents jurys avec **photo + bio**.

## 6) Vote & notation
- **Process de vote** :
  - Le vote des **50 dernières vidéos** se fait **hors du site** (à confirmer / cadrer).
  - Notation à donner et **répartition** entre membres du jury (par listes : 2 jurys peuvent avoir la même liste).
- **Statuts / tri de décision** :
  - Non / À discuter / Oui
  - + une **zone de commentaire** (notes internes / discussions).
- **Visibilité** :
  - Les commentaires ne sont **pas visibles** avant dévoilement du film.
  - La **moyenne de note** n’est pas visible tant que le film n’est pas sélectionné parmi les **50 finalistes**.

## 7) Critères d’évaluation
- **Critères cinéma** : artistique, narratif (basés sur les critères usuels du cinéma).

## 8) Découverte, filtres & pages spécifiques
- **Filtres** : prix, pays, genre, participation (solo/groupe), etc.
- **Hors compétition** : page dédiée “hors compétition”.

## 9) Partage & communication
- **Partage réseaux** : TikTok, Instagram (à prévoir).
- **Notifications email** :
  - Mail si sélection (oui).
  - Informer aussi ceux non sélectionnés (non), avec possibilité de discussion avec les réalisateurs.

## 10) Données & tracking
- **Google Analytics** (à intégrer).

## 11) Stockage
- **Stockage éphémère** : trouver une solution pour stocker tous les films de façon temporaire (à définir : durée, coût, outils).

---

## Points à clarifier (questions ouvertes)
- “50 nominations” = finalistes, nommés, ou autre ?
- “Participation à un prix et pas à une catégorie” : modèle exact (prix vs catégories) ?
- “Vote des 50 dernières vidéos hors du site” : pourquoi / comment / outil / traçabilité ?
- Réupload vidéo : quelles règles (nombre, délai, validation) ?

