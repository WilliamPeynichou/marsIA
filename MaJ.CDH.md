Cahier des Charges
Plateforme Web – Festival marsAI
Co-création La Plateforme × Mobile Film Festival

Version
Version : 1.0


Date : 7 janvier 2026


Équipe : 5 développeurs


Durée estimée : 10 semaines


Conception & design : 2 semaines


Développement : 6 semaines


Finalisation et déploiement : 2 semaines



1. Présentation Générale du Projet
1.1 Contexte
marsAI est un festival international de courts-métrages dont la spécificité est que les films sont générés à l’aide d’outils d’intelligence artificielle.
Durée des films : 1 minute à 2 minutes


Thème de l’édition 1 : « Imaginez des futurs souhaitables »


Cadre : concours international, diffusion en ligne et événement physique à Marseille




La plateforme web constitue :
le point d’entrée officiel du festival,


l’outil de soumission des films,


l’interface de visionnage et de notation du jury,


le site vitrine public de l’événement.



1.2 Identité et contraintes éditoriales
Nom officiel du projet : marsAI


Logos obligatoires :


La Plateforme


Mobile Film Festival


Langues supportées :


Français


Anglais


Internationalisation : système i18n obligatoire (pas de texte en dur)



1.3 Objectifs du projet
Valoriser la création humaine assistée par l’IA


Proposer une expérience simple et fluide pour les réalisateurs, le public et le jury


Offrir une plateforme scalable, accessible et performante


Permettre une sélection et une notation efficaces des films par le jury



1.4 Indicateurs de succès (KPIs)
Indicateur
Objectif
Nombre de pays représentés
> 120
Nombre de films soumis
> 600
Visiteurs à l’événement physique
> 3 000


2. Environnement Technique
2.1 Stack technique imposée
Couche
Technologie
Frontend
React.js
Backend
Node.js
Base de données
MariaDB / MySQL
CSS
Tailwind CSS
Architecture globale
MERN


2.2 Bonnes pratiques et qualité de code
Architecture claire (MVC ou équivalent)


Code lisible, commenté et maintenable


Séparation stricte frontend / backend


Gestion de versions via Git :


main


develop


branches feature/*


Tests unitaires sur les fonctionnalités critiques



2.3 Accessibilité et responsive
Respect strict des normes WCAG 2.1


Approche Mobile First


Objectif Lighthouse élevé (voir section Performance)



2.4 APIs et services externes
YouTube API


Hébergement des vidéos


Vérification des droits d’auteur


API REST


Gestion des films, utilisateurs, votes


WebSockets (optionnel)


Notifications temps réel (validation, statut des films)



3. Authentification et Gestion des Rôles
3.1 Méthodes d’authentification
Email + mot de passe


OAuth Google (optionnel)







3.2 Sécurité des mots de passe
Hashage sécurisé (bcrypt recommandé)


Contraintes minimales :


8 caractères


1 majuscule


1 chiffre



3.3 Rôles utilisateurs
1. Réalisateur
Fonctionnalités :
Création et édition de profil (bio, école, réseaux)


Soumission de films


Accès à l’historique de ses soumissions


Upload réservé exclusivement à ce rôle



2. Public
Fonctionnalités :
Consultation libre du catalogue


Lecture des films


Partage sur les réseaux sociaux


Consultation des statistiques (vues)


Inscription à la newsletter



3. Jury
Fonctionnalités :
Accès à une interface privée sécurisée


Visionnage des films sélectionnés


Notation de 1 à 10 à décimale


Ajout de commentaires


Interface immersive de type TikTok



4. Administrateur
Fonctionnalités :
Validation et modération des films


Gestion des utilisateurs


Gestion des partenaires


Dashboard statistiques (pays, outils IA, volumes)


Paramétrage du festival











4. Lecture Vidéo – Interface Jury
4.1 Mode de lecture
Orientation : paysage obligatoire


Navigation :


Scroll vertical → film suivant / précédent


Scroll horizontal → navigation dans la sélection



4.2 Système de vote par geste
Geste
Action
Swipe droite
Like → ouverture popup note (1–10)
Swipe gauche
Dislike


4.3 Gestion des dislikes
Corbeille temporaire (5 derniers films)


Possibilité d’annuler un dislike


Toutes les actions sont enregistrées en base





4.4 Signets (bookmarks)
Ajout de films favoris


Page dédiée pour les revoir avant délibération



5. Soumission des Films
5.1 Période de soumission
Durée : 2 mois


Fermeture automatique du formulaire à la date limite


Aucun traitement manuel



5.2 Règles des films
Durée cible : 1 minute


Tolérance maximale : 2 minutes


Soumissions multiples autorisées par réalisateur



5.3 Formulaire de soumission
Informations générales
Titre


Description


Participation : solo / groupe


Membres (si groupe)


Référent légal (droits)


Fiche technique IA (obligatoire)
IA scénario


IA images / vidéo


IA post-production


Autres outils



5.4 Médias
Images
JPG / PNG / GIF / WEBP


Max 2 Mo


Redimensionnement automatique


Vidéo
Hébergement YouTube obligatoire


Vérification copyright via API


Lecture par embed sécurisé








6. Catalogue Public
Grille paginée (20 films/page)


Pas d’infinite scroll


Filtres :


Catégorie


Outils IA


Pays



7. Notation et Sélection
7.1 Processus
Présélection


Sélection thématique


Sélection officielle (50 films)



7.2 Système de notation
Note de 1 à 10


Commentaires libres


Historique consultable






7.3 Prix
Grand Prix


Prix du Jury


Prix du Public


Bourses



8. Internationalisation
FR / EN


Interface, emails, messages d’erreur


Concours ouvert à tous les pays



9. Sécurité
Requêtes SQL préparées


Validation backend obligatoire


JWT + refresh tokens


HTTPS obligatoire


Protection CSRF





10. Performance
Objectifs Lighthouse
Critère
Score
Performance
> 90
Accessibilité
> 90
Best Practices
> 90
SEO
> 90

Optimisations :
Lazy loading


Cache navigateur


Compression


CDN



11. Fonctionnalités Optionnelles
Google OAuth


Notifications temps réel


Agenda interactif


Réservation d’événements






12. Mode « After Festival »
Palmarès


Films primés


Archives


Galerie photo


Témoignages



13. Événement Physique
Lieu : La Plateforme, Marseille


Capacité cible : 3 000 personnes


Projections, conférences, workshops, cérémonie



14. Livrables
Phase 1 – Conception
Maquettes Figma


Architecture technique


Modèle BDD


Phase 2 – Core
Auth
Soumission
Catalogue
Jury



Phase 3 – Avancé
YouTube API


Notation


Admin


i18n


Phase 4 – Finalisation
Tests


Optimisation


Déploiement


Documentation



15. Annexes
Glossaire, références, normes WCAG.













Page de changement

Cahier des Charges – Plateforme Web
Festival marsAI
Co-création La Plateforme × Mobile Film Festival
Version : 1.1 (mise à jour suite aux échanges client)
 Date : 7 janvier 2026

1. Présentation Générale du Projet
(inchangé, voir version 1.0)

2. Environnement Technique
(inchangé, voir version 1.0)

3. Authentification et Gestion des Rôles
3.1 Comptes utilisateurs
⚠️ Création de compte public
 → Non autorisée
 Seuls les rôles suivants peuvent créer un compte :
Réalisateurs (candidature)


Jurés (invitation)


Administrateurs


Le public n’a pas de compte utilisateur.

4. Gestion des Rôles
4.1 Réalisateur
Fiche Réalisateur (champs obligatoires)
Nom


Prénom


Email


Pays


Date de naissance (pour contrôle d’âge – à confirmer avec le client)


École (optionnel)


Réseaux sociaux principaux (optionnel)



5. Soumission des Films
5.1 Période de soumission
Durée : 2 mois


Fermeture automatique


Aucune limite de candidatures par réalisateur


Aucune contrainte de volumétrie (pas de surcharge prévue)



5.2 Règles techniques des films
Durée cible : 1 minute


Durée maximale tolérée : 2 minutes


Format vidéo :


Vidéo classique YouTube (pas Shorts)


Ratio 16:9 horizontal


Résolution et poids :
 → s’inspirer des standards du Mobile Film Festival (référence externe)



5.3 Formulaire de soumission – Champs requis
Informations générales (obligatoires)
Titre du film


Synopsis très court


Année de production


Pays de production


Langue du film


Catégorie(s) (gérées dynamiquement par l’admin)


Participation : solo / groupe


Membres du groupe (si applicable)


Fiche technique IA (obligatoire)
IA utilisée pour :


Scénario


Images / vidéo


Montage


Son / musique


Autres outils IA (champ libre)


Droits & conformité
Mention de la musique / banques de sons utilisées


Confirmation du respect des droits :


Image


Musique


Voix


Référent légal (droits)


Consentements
Acceptation du règlement du festival


Acceptation de l’utilisation promotionnelle des extraits


Inscription à la newsletter (optionnelle, non prioritaire)



5.4 Médias associés
Poster du film
Formats : JPG / PNG / GIF


Poids max : 2 Mo


Redimensionnement automatique :


Miniatures


Vignettes catalogue


Vidéo
Hébergement YouTube obligatoire


Lecture via embed sécurisé


Vérification copyright via API YouTube



5.5 Gestion des droits et copyright (YouTube API)
L’API YouTube agit comme gardien de droits avant publication


En cas de signalement ou suppression YouTube :


Le film est dépublié


L’admin est notifié


Le réalisateur est notifié


Politique à définir avec le client :


Re-soumission ?


Remplacement ?


Disqualification ?


⚠️ Règles finales à préciser ultérieurement

6. Catalogue Public
Consultation libre


Pagination obligatoire (20 films/page)


❌ Pas d’infinite scroll pour le public


Filtres :


Catégories


Outils IA


Pays


❌ Pas de likes / dislikes


❌ Pas de commentaires publics


❌ Pas de Prix du Public



7. Interface Jury
7.1 Accès
Interface privée sécurisée


Accès uniquement aux films en compétition



7.2 Lecture des films – Jury
Orientation paysage obligatoire


Mode immersif recommandé


Infinite scroll possible pour le jury (choix UX libre à proposer au client)



7.3 Système de vote
Note de 1 à 10 (décimales autorisées)


Barème :


Identique pour toutes les catégories


Critères d’évaluation :
 ⚠️ à définir avec le client
 → proposition libre autour de la thématique IA


Un vote :


Non définitif par principe


Délai / conditions de rétractation :
 ⚠️ à définir avec le client



7.4 Commentaires Jury
Commentaires privés


Fonctionnent comme prises de notes personnelles


Visibles uniquement par le juré auteur


Non visibles par :


Autres jurés


Réalisateurs


Public



8. Processus de Sélection
Présélection


Sélection thématique


Sélection officielle : 50 films


Pas de films hors compétition



9. Administration
9.1 Fonctionnalités Admin
Validation / dépublication des films


Gestion des utilisateurs


Gestion dynamique des catégories


Gestion des partenaires


Paramétrage du festival


Gestion des contenus de promotion :


Agenda


Planning


Informations événementielles



10. Internationalisation
Langue par défaut : Anglais


Langues supportées :


Anglais


Français


Pas de géolocalisation automatique



11. Sécurité
(inchangé – voir version 1.0)

12. Performance
(inchangé – voir version 1.0)

13. Fonctionnalités Optionnelles
Google OAuth


Notifications temps réel


Agenda interactif


Réservation d’événements (gestion des places limitée – optionnelle)



14. Mode « After Festival »
(inchangé)

15. Points restant à définir avec le client
Critères précis d’évaluation du jury


Barème détaillé par catégorie


Politique de gestion des vidéos signalées YouTube


Gestion du vote (réversibilité, délais)


Vérification de l’âge et de l’identité (date de naissance vs contrôle renforcé)



Si tu veux, je peux maintenant :
te fournir une version PDF prête client


faire un résumé exécutif


transformer ce CDC en user stories


ou créer un backlog MVP / V1 / V2
