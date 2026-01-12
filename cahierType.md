Spécification Détaillé Du Projet : Plateforme

Festival marsAI

Projet : Hackathon de 10 semaines (Co-création La Plateforme x
Mobile Film Festival)
1. Présentation du projet et Objectifs
Le festival marsAI est un concours international de courts-métrages de 1 minute dont la
particularité est d'être intégralement générés par Intelligence Artificielle. Le thème de cette
première édition est "Imaginez des futurs souhaitables".
• Objectifs : Mettre l’humain au cœur de la création assistée par IA, challenger la créativité via
un format court et diffuser ces visions à l'échelle mondiale.
• Enjeux : Représenter plus de 120 pays, recueillir plus de 600 films et accueillir 3 000
visiteurs à Marseille lors de l'événement physique.
• Durée : 10 semaines (Conception, Design Figma, puis développement continu).
2. Environnement Technique
Le développement doit respecter les standards professionnels suivants :
• Stack imposée : MariaDb, MySQL, React.js, Node.js (MERN) et Tailwind CSS.
• Qualité du code : Séparation logique (modèles, contrôleurs, vues), code commenté et
implémentation de tests unitaires sur les fonctions critiques.
• Accessibilité : Respect rigoureux des normes WCAG et design Responsive (Mobile First).
3. Système d'Authentification et Rôles
L'application doit gérer quatre types d'utilisateurs avec des permissions sécurisées :
• Méthodes d'accès : Inscription/Connexion classique
• Réalisateur : Soumission de films, gestion d'un profil complet (bio, école, réseaux sociaux) et
historique des œuvres.
• Public : Consultation du catalogue, partage social, compteur de vues et inscription à la
newsletter.
• Jury : Interface privée pour noter (1 à 10) et commenter les 50 films de la sélection officielle.
• Administrateur : Modération des contenus, gestion des partenaires et accès à un tableau de
bord statistique (provenance des films, outils IA les plus utilisés).
4. Gestion des Médias et Workflow
• Processus de soumission : Formulaire actif pendant 2 mois (verrouillage automatique par le
serveur après la date limite).
• Fiche technique IA : Champs obligatoires détaillant les outils utilisés pour le scénario, la
génération d'images/vidéos et la post-production.
• Contrôle Copyright (YouTube API) : Intégration de l'API YouTube pour vérifier les droits
d'auteur (musique/images) avant toute publication officielle.

• Affichage : Grille de miniatures avec pagination de 20 médias par page et filtres par
catégorie ou type d'IA.
• Posters : Upload d'images (JPG/PNG/GIF, max 2 Mo) avec redimensionnement automatique
pour les miniatures.
5. Fonctionnalités Avancées
• Internationalisation (i18n) : Interface intégralement disponible en Français et en Anglais.

6. Sécurité et Performance
• Sécurité : Requêtes préparées obligatoires, hashage sécurisé des mots de passe et validation
systématique des données côté serveur.
• Performance : Analyse du déploiement et optimisation du score Lighthouse.
7. Module "Aller plus loin" (Optionnel)
• Authentification : Mise en place d’une authentification via le protocole Google Oauth.
• Notifications Temps Réel : Utilisation des WebSockets (sans API externe) pour informer les
utilisateurs du statut de validation de leur film.
• Social Proof : Affichage des compteurs de vues et intégration des boutons de partage sur les
réseaux sociaux.
• Agenda interactif : Planning des conférences, tables rondes et workshops prévus à Marseille.
• Système de réservation : Module simple pour s'inscrire aux ateliers ou à la cérémonie de
clôture du 13 juin.

Réponses FAQ étudiants
Pour ce projet concevoir cette plateforme avec toutes ces spécificités, c'est comme bâtir un
cinéma futuriste : il faut que les fondations soient solides (sécurité), que l'accueil soit
multilingue, et que le projecteur soit capable de vérifier instantanément si le film projeté
respecte les droits d'auteur avant que la salle ne se remplisse.

I. Identité, Vision et Concept
● Nom et Logo : Le nom officiel est marsAI. Le projet est une co-création entre La
Plateforme et le Mobile Film Festival ; leurs deux logos doivent figurer sur
l'interface.
● Le Concept : Un concours international de courts-métrages de 1 minute
intégralement générés par IA sur le thème "Imaginez des futurs souhaitables".
● Objectif Humain : Mettre l'humain au cœur de la création assistée par IA en utilisant
le format court pour challenger la créativité.
● Chiffres clés (Objectifs de victoire) : Représenter plus de 120 pays, recueillir plus
de 600 films et accueillir 3 000 visiteurs à Marseille.
● Langues : L'interface doit être intégralement bilingue (Français et Anglais) via le
système i18n.
II. Règlement et Inscriptions
● Durée des vidéos : La règle d'or est "1 Minute, 1 Film". Toutefois, le client accepte
et conseille une tolérance allant jusqu'à 1min30 ou 2min.
● Candidatures : Un réalisateur peut soumettre plusieurs films. Les groupes sont
autorisés, mais un seul réalisateur référent doit être inscrit pour des raisons légales
de droits d'auteur ; les autres membres sont détaillés dans le formulaire.
● Éligibilité : Le concours est ouvert à l'international sans restriction de pays.
● Champs obligatoires (Fiche d'identité IA) : Lors de la soumission, le réalisateur
doit détailler les outils IA utilisés pour le scénario, la génération d'images/vidéos et
la post-production.
III. Modalités de Sélection et de Vote
● Processus de sélection : Le jury effectue une première présélection, puis une
seconde par thématique pour isoler les 50 films de la compétition officielle.
● Système de notation : Le jury utilise une interface privée pour noter les films de 1 à
10 et ajouter des commentaires.
● Prix et Récompenses : Le festival suit un modèle type "Cannes" (Grand Prix, Prix
du Jury, Prix du Public, etc.) avec des bourses.

● Vote du Public : Un prix du public est prévu ; les visiteurs peuvent consulter le
catalogue et s'inscrire à la newsletter, mais le vote du jury reste l'élément central de
la compétition officielle.
IV. Spécifications Techniques et Workflow
● Stack Technologique Imposée : MariaDB/MySQL, React.js, Node.js (MERN) et
Tailwind CSS.
● Hébergement et Vidéo : L'utilisation de l'API YouTube est obligatoire pour vérifier
automatiquement le copyright avant toute publication "Embed" sur le site.
● Affichage (UX) : Le catalogue doit utiliser une pagination de 20 médias par page
(pas d'infinite scroll privilégié dans le CDC) avec des filtres par catégorie ou type
d'IA.
● Gestion des Images (Posters) : Upload de fichiers JPG/PNG/GIF, max 2 Mo, avec
un système de redimensionnement automatique.
● Verrouillage Temporel : Le formulaire de soumission doit être automatiquement
désactivé par le serveur après la période d'appel à projet de 2 mois.
V. Rôles et Sécurité
● Les 4 Profils Utilisateurs :
1. Réalisateur : Gestion de profil (bio, école, réseaux) et soumission d'œuvres.
2. Public : Consultation, partage social, newsletter.
3. Jury : Interface privée de notation sécurisée.
4. Administrateur : Modération, gestion des partenaires et tableau de bord
statistique (pays d'origine, outils IA utilisés).

● Sécurité : Les requêtes préparées sont obligatoires. Les mots de passe doivent être
hachés et comporter au minimum 8 caractères, 1 majuscule et 1 chiffre.
● Performance : Le déploiement doit viser un score Lighthouse optimal.
VI. Événement Physique et Options (Modules "Aller plus loin")
● Lieu et Date : L'événement physique se tient à Marseille (La Plateforme) avec une
date de clôture à revoir avec le client
● Modules Optionnels :
○ Authentification via Google OAuth.
○ Notifications en temps réel via WebSockets pour le statut des films.
○ Agenda interactif et système de réservation pour les workshops et la
cérémonie.