# Scrum Master - Planning Projet marsAI

## Informations Générales du Projet

| Élément | Valeur |
|---------|--------|
| **Projet** | Plateforme marsAI |
| **Durée totale** | 10 semaines |
| **Équipe** | 5 développeurs |
| **Méthodologie** | Scrum |
| **Durée des sprints** | 2 semaines |
| **Nombre de sprints** | 5 sprints + 1 buffer |

---

## Composition de l'Équipe

| Rôle | Responsabilités |
|------|-----------------|
| **Dev 1 - Tech Lead** | Architecture, Backend core, Code review |
| **Dev 2 - Backend** | API REST, Base de données, Services |
| **Dev 3 - Frontend** | UI/UX, Composants React, Responsive |
| **Dev 4 - Fullstack** | Fonctionnalités transverses, Tests |
| **Dev 5 - Fullstack** | Intégrations externes, DevOps |

---

## Vélocité Estimée

| Métrique | Valeur |
|----------|--------|
| Points par développeur/sprint | 5-6 |
| Vélocité équipe/sprint | 25-30 points |
| Capacité totale projet | ~150 points |

---

## Planning des Sprints

### 📅 Sprint 0 - Préparation (Semaine 0)
**Durée : 1 semaine | Points : N/A**

#### Objectifs
- Setup de l'environnement de développement
- Configuration des outils
- Kick-off meeting

#### Tâches

| Tâche | Responsable | Durée |
|-------|-------------|-------|
| Setup repository Git (GitLab/GitHub) | Dev 1 | 2h |
| Configuration branches (main/develop/feature) | Dev 1 | 1h |
| Setup projet React + Tailwind | Dev 3 | 4h |
| Setup projet Node.js + Express | Dev 2 | 4h |
| Configuration MariaDB + migrations | Dev 2 | 4h |
| Setup Docker (dev environment) | Dev 5 | 4h |
| Configuration ESLint + Prettier | Dev 4 | 2h |
| Setup CI/CD pipeline | Dev 5 | 4h |
| Création Figma (maquettes) | Dev 3 | 8h |
| Documentation architecture | Dev 1 | 4h |
| Kick-off meeting équipe | Tous | 2h |

#### Livrables Sprint 0
- [ ] Repository configuré avec branches
- [ ] Environnement dev fonctionnel (Docker)
- [ ] Structure projet frontend/backend
- [ ] Pipeline CI/CD opérationnel
- [ ] Maquettes Figma principales
- [ ] Documentation technique initiale

---

### 📅 Sprint 1 - Fondations (Semaines 1-2)
**Durée : 2 semaines | Points : 27**

#### Objectifs
- Système d'authentification complet
- Structure de base de données
- Design system Tailwind

#### User Stories

| US | Description | Points | Responsable | Statut |
|----|-------------|--------|-------------|--------|
| US-1.1 | Inscription utilisateur | 5 | Dev 2 | ⬜ |
| US-1.2 | Connexion utilisateur | 3 | Dev 2 | ⬜ |
| US-1.3 | Déconnexion | 1 | Dev 2 | ⬜ |
| - | Modèle User (BDD) | 3 | Dev 2 | ⬜ |
| - | Middleware auth JWT | 3 | Dev 1 | ⬜ |
| - | Pages Login/Register (UI) | 5 | Dev 3 | ⬜ |
| - | Design system (composants de base) | 5 | Dev 3 | ⬜ |
| - | Tests unitaires auth | 2 | Dev 4 | ⬜ |

#### Répartition par développeur

| Dev | Tâches | Points |
|-----|--------|--------|
| Dev 1 | Architecture, Middleware JWT, Review | 5 |
| Dev 2 | API Auth, Modèle User, Validation | 9 |
| Dev 3 | UI Login/Register, Design System | 8 |
| Dev 4 | Tests unitaires, Documentation | 3 |
| Dev 5 | Setup i18n, Traductions base | 2 |

#### Cérémonies Sprint 1

| Cérémonie | Date | Durée | Participants |
|-----------|------|-------|--------------|
| Sprint Planning | Jour 1 | 2h | Tous |
| Daily Standup | Quotidien | 15min | Tous |
| Sprint Review | Jour 10 | 1h | Tous + Stakeholders |
| Rétrospective | Jour 10 | 1h | Tous |

#### Définition of Done (Sprint 1)
- [ ] Code review approuvé
- [ ] Tests unitaires passent
- [ ] Documentation à jour
- [ ] Démo fonctionnelle
- [ ] Merge sur develop

---

### 📅 Sprint 2 - Profil & Soumission (Semaines 3-4)
**Durée : 2 semaines | Points : 28**

#### Objectifs
- Profil réalisateur complet
- Formulaire de soumission
- Upload fichiers (posters)

#### User Stories

| US | Description | Points | Responsable | Statut |
|----|-------------|--------|-------------|--------|
| US-1.5 | Mot de passe oublié | 3 | Dev 2 | ⬜ |
| US-2.1 | Compléter profil | 3 | Dev 4 | ⬜ |
| US-2.2 | Photo de profil | 2 | Dev 4 | ⬜ |
| US-3.1 | Soumettre film solo | 8 | Dev 2 + Dev 3 | ⬜ |
| US-3.2 | Soumettre film groupe | 3 | Dev 2 | ⬜ |
| US-3.3 | Fiche technique IA | 3 | Dev 3 | ⬜ |
| - | Upload service (multer + sharp) | 3 | Dev 5 | ⬜ |
| - | Tests soumission | 3 | Dev 4 | ⬜ |

#### Répartition par développeur

| Dev | Tâches | Points |
|-----|--------|--------|
| Dev 1 | Review, Architecture fichiers | 3 |
| Dev 2 | API profil, API soumission, Modèles | 8 |
| Dev 3 | UI Formulaire soumission, UI Profil | 6 |
| Dev 4 | Profil utilisateur, Tests | 6 |
| Dev 5 | Service upload, Resize images | 5 |

#### Tâches techniques

| Tâche | Description | Responsable |
|-------|-------------|-------------|
| Modèle Film | Schéma BDD films + relations | Dev 2 |
| Modèle AITechSheet | Fiche technique IA | Dev 2 |
| Upload Service | Multer + Sharp (resize) | Dev 5 |
| Validation Forms | React Hook Form + Yup | Dev 3 |
| Storage | Configuration stockage fichiers | Dev 5 |

---

### 📅 Sprint 3 - Catalogue & i18n (Semaines 5-6)
**Durée : 2 semaines | Points : 32**

#### Objectifs
- Catalogue public avec filtres
- Internationalisation FR/EN
- Vérification copyright YouTube

#### User Stories

| US | Description | Points | Responsable | Statut |
|----|-------------|--------|-------------|--------|
| US-3.4 | Vérification copyright YouTube | 8 | Dev 5 | ⬜ |
| US-3.5 | Consulter mes soumissions | 3 | Dev 4 | ⬜ |
| US-3.6 | Verrouillage auto soumissions | 2 | Dev 2 | ⬜ |
| US-4.1 | Grille films (catalogue) | 5 | Dev 3 | ⬜ |
| US-4.2 | Filtres catalogue | 5 | Dev 3 | ⬜ |
| US-4.3 | Page détail film | 3 | Dev 3 | ⬜ |
| US-7.1 | Interface FR | 3 | Dev 4 | ⬜ |
| US-7.2 | Interface EN | 2 | Dev 4 | ⬜ |
| US-7.3 | Sélecteur langue | 1 | Dev 4 | ⬜ |

#### Répartition par développeur

| Dev | Tâches | Points |
|-----|--------|--------|
| Dev 1 | Review, Optimisation requêtes | 3 |
| Dev 2 | API catalogue, Pagination, Filtres, Verrouillage | 7 |
| Dev 3 | UI Catalogue, Filtres, Page détail | 10 |
| Dev 4 | i18n complet (FR/EN), Mes soumissions | 7 |
| Dev 5 | Intégration YouTube API, Copyright check | 8 |

#### Tâches techniques

| Tâche | Description | Responsable |
|-------|-------------|-------------|
| YouTube API | Service de vérification copyright | Dev 5 |
| i18n Setup | react-i18next configuration | Dev 4 |
| Traductions | Fichiers FR.json / EN.json | Dev 4 |
| Pagination API | Système de pagination 20/page | Dev 2 |
| Filtres | API filtrage multi-critères | Dev 2 |

---

### 📅 Sprint 4 - Interface Jury (Semaines 7-8)
**Durée : 2 semaines | Points : 30**

#### Objectifs
- Interface TikTok-style pour le jury
- Système de vote (like/dislike)
- Fonctionnalités optionnelles

#### User Stories

| US | Description | Points | Responsable | Statut |
|----|-------------|--------|-------------|--------|
| US-5.1 | Interface visionnage jury | 5 | Dev 3 | ⬜ |
| US-5.2 | Swipe vertical (navigation) | 8 | Dev 3 | ⬜ |
| US-5.3 | Like + notation (1-10) | 5 | Dev 3 + Dev 2 | ⬜ |
| US-5.4 | Dislike | 3 | Dev 3 + Dev 2 | ⬜ |
| US-1.4 | Google OAuth (optionnel) | 5 | Dev 5 | ⬜ |
| US-4.4 | Partage social | 2 | Dev 4 | ⬜ |
| US-4.5 | Newsletter | 2 | Dev 4 | ⬜ |

#### Répartition par développeur

| Dev | Tâches | Points |
|-----|--------|--------|
| Dev 1 | Review, Architecture votes | 3 |
| Dev 2 | API Votes, Modèle Vote, Logic métier | 6 |
| Dev 3 | UI Jury TikTok, Swipe, Animations | 13 |
| Dev 4 | Newsletter, Partage social, Tests | 4 |
| Dev 5 | Google OAuth, Intégration | 5 |

#### Focus Technique : Interface TikTok

```
Composants à développer :
─────────────────────────
• SwipeContainer : Gestion du swipe (react-swipeable)
• VideoPlayer : Lecteur vidéo fullscreen paysage
• VotePopup : Modal notation 1-10 + commentaire
• SwipeIndicator : Feedback visuel swipe L/R
• NavigationHint : Indication swipe up/down
```

#### Librairies suggérées

| Librairie | Usage |
|-----------|-------|
| react-swipeable | Gestion des gestes swipe |
| framer-motion | Animations transitions |
| react-player | Lecteur vidéo YouTube |

---

### 📅 Sprint 5 - Admin & Finitions (Semaines 9-10)
**Durée : 2 semaines | Points : 32**

#### Objectifs
- Interface d'administration
- Système de signets et corbeille jury
- Tests finaux et optimisations

#### User Stories

| US | Description | Points | Responsable | Statut |
|----|-------------|--------|-------------|--------|
| US-5.5 | Récupérer dislike (corbeille) | 3 | Dev 3 | ⬜ |
| US-5.6 | Ajouter signet | 2 | Dev 3 | ⬜ |
| US-5.7 | Page signets | 3 | Dev 3 | ⬜ |
| US-6.1 | Modération soumissions | 5 | Dev 2 + Dev 3 | ⬜ |
| US-6.2 | Dashboard statistiques | 8 | Dev 4 + Dev 3 | ⬜ |
| US-6.3 | Gestion partenaires | 3 | Dev 4 | ⬜ |
| US-6.4 | Gestion utilisateurs | 5 | Dev 2 | ⬜ |
| - | Tests E2E | 3 | Dev 4 | ⬜ |

#### Répartition par développeur

| Dev | Tâches | Points |
|-----|--------|--------|
| Dev 1 | Review final, Optimisation, Documentation | 4 |
| Dev 2 | API Admin, Modération, Gestion users | 8 |
| Dev 3 | UI Admin, Dashboard, Signets, Corbeille | 10 |
| Dev 4 | Dashboard stats, Partenaires, Tests E2E | 8 |
| Dev 5 | Performance, Lighthouse, Déploiement | 5 |

#### Tâches de finalisation

| Tâche | Description | Responsable |
|-------|-------------|-------------|
| Tests E2E | Cypress / Playwright | Dev 4 |
| Lighthouse | Optimisation score > 90 | Dev 5 |
| SEO | Meta tags, sitemap | Dev 5 |
| Documentation | README, API docs | Dev 1 |
| Déploiement | Production setup | Dev 5 |

---

### 📅 Sprint 6 (Buffer) - Optionnels & Bugfix
**Durée : Si temps disponible | Points : Variable**

#### User Stories Optionnelles

| US | Description | Points | Priorité |
|----|-------------|--------|----------|
| US-8.1 | Notifications WebSocket | 8 | COULD |
| US-9.1 | Agenda interactif | 5 | COULD |
| US-9.2 | Système de réservation | 5 | COULD |
| US-10.1 | Page palmarès (After) | 5 | SHOULD |

#### Usage du buffer
1. **Bugs critiques** : Correction des bugs découverts
2. **Technical debt** : Remboursement de la dette technique
3. **Features optionnelles** : Si temps disponible
4. **Documentation** : Compléter la documentation

---

## Product Backlog Priorisé

### 🔴 Must Have (MVP)

| # | User Story | Points | Sprint |
|---|------------|--------|--------|
| 1 | US-1.1 Inscription | 5 | S1 |
| 2 | US-1.2 Connexion | 3 | S1 |
| 3 | US-1.3 Déconnexion | 1 | S1 |
| 4 | US-2.1 Profil réalisateur | 3 | S2 |
| 5 | US-3.1 Soumettre film | 8 | S2 |
| 6 | US-3.2 Film en groupe | 3 | S2 |
| 7 | US-3.3 Fiche technique IA | 3 | S2 |
| 8 | US-3.4 Copyright YouTube | 8 | S3 |
| 9 | US-3.5 Mes soumissions | 3 | S3 |
| 10 | US-3.6 Verrouillage auto | 2 | S3 |
| 11 | US-4.1 Catalogue | 5 | S3 |
| 12 | US-4.3 Page film | 3 | S3 |
| 13 | US-5.1 Interface jury | 5 | S4 |
| 14 | US-5.2 Swipe vertical | 8 | S4 |
| 15 | US-5.3 Like + notation | 5 | S4 |
| 16 | US-5.4 Dislike | 3 | S4 |
| 17 | US-5.5 Corbeille dislike | 3 | S5 |
| 18 | US-5.6 Signets | 2 | S5 |
| 19 | US-5.7 Page signets | 3 | S5 |
| 20 | US-6.1 Modération | 5 | S5 |
| 21 | US-6.4 Gestion users | 5 | S5 |
| 22 | US-7.1 Interface FR | 3 | S3 |
| 23 | US-7.2 Interface EN | 2 | S3 |
| 24 | US-7.3 Sélecteur langue | 1 | S3 |

**Total Must Have : 92 points**

### 🟡 Should Have

| # | User Story | Points | Sprint |
|---|------------|--------|--------|
| 25 | US-1.5 Mot de passe oublié | 3 | S2 |
| 26 | US-2.2 Photo profil | 2 | S2 |
| 27 | US-4.2 Filtres catalogue | 5 | S3 |
| 28 | US-4.4 Partage social | 2 | S4 |
| 29 | US-4.5 Newsletter | 2 | S4 |
| 30 | US-6.2 Dashboard stats | 8 | S5 |
| 31 | US-6.3 Partenaires | 3 | S5 |
| 32 | US-10.1 Page After | 5 | S6 |

**Total Should Have : 30 points**

### 🟢 Could Have

| # | User Story | Points | Sprint |
|---|------------|--------|--------|
| 33 | US-1.4 Google OAuth | 5 | S4 |
| 34 | US-8.1 WebSocket notifs | 8 | S6 |
| 35 | US-9.1 Agenda | 5 | S6 |
| 36 | US-9.2 Réservation | 5 | S6 |

**Total Could Have : 23 points**

---

## Burndown Chart Template

```
Points │
  150  │ ████
       │ ████ ████
  120  │ ████ ████ ████
       │ ████ ████ ████ ████
   90  │ ████ ████ ████ ████ ████
       │ ████ ████ ████ ████ ████ ████
   60  │ ████ ████ ████ ████ ████ ████ ████
       │ ████ ████ ████ ████ ████ ████ ████ ████
   30  │ ████ ████ ████ ████ ████ ████ ████ ████ ████
       │ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████
    0  │─────────────────────────────────────────────────────
       └───────────────────────────────────────────────────────
         S0   S1   S2   S3   S4   S5   S6   S7   S8   S9   S10
                              Semaines
```

---

## Rituels Scrum

### Daily Standup
- **Quand** : Tous les jours, 9h30
- **Durée** : 15 minutes max
- **Format** : Debout, tour de table
- **Questions** :
  1. Qu'ai-je fait hier ?
  2. Que vais-je faire aujourd'hui ?
  3. Ai-je des blocages ?

### Sprint Planning
- **Quand** : Premier jour du sprint
- **Durée** : 2 heures
- **Participants** : Toute l'équipe
- **Output** : Sprint Backlog validé

### Sprint Review (Démo)
- **Quand** : Dernier jour du sprint
- **Durée** : 1 heure
- **Participants** : Équipe + Stakeholders
- **Output** : Feedback, validation des fonctionnalités

### Rétrospective
- **Quand** : Après la Sprint Review
- **Durée** : 1 heure
- **Participants** : Équipe dev uniquement
- **Format** : Start/Stop/Continue

---

## Outils Recommandés

### Gestion de Projet
| Outil | Usage |
|-------|-------|
| **Jira** ou **Trello** | Gestion du backlog et des sprints |
| **Confluence** ou **Notion** | Documentation |
| **Slack** ou **Discord** | Communication équipe |

### Développement
| Outil | Usage |
|-------|-------|
| **Git** (GitHub/GitLab) | Versioning |
| **VS Code** | IDE |
| **Docker** | Environnement dev |
| **Postman** | Tests API |

### CI/CD
| Outil | Usage |
|-------|-------|
| **GitHub Actions** ou **GitLab CI** | Pipeline automatisé |
| **Jest** | Tests unitaires |
| **Cypress** | Tests E2E |

---

## Definition of Ready (DoR)

Une User Story est **Ready** quand :
- [ ] Description claire et complète
- [ ] Critères d'acceptation définis
- [ ] Estimation en points réalisée
- [ ] Dépendances identifiées
- [ ] Maquette disponible (si UI)
- [ ] Pas de question en suspens

---

## Definition of Done (DoD)

Une User Story est **Done** quand :
- [ ] Code développé et fonctionnel
- [ ] Tests unitaires écrits et passent
- [ ] Code review approuvée
- [ ] Documentation mise à jour
- [ ] Déployé sur environnement de staging
- [ ] Validé par le Product Owner
- [ ] Merge sur la branche develop

---

## Gestion des Risques

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Retard sur l'interface jury | Moyenne | Élevé | Commencer tôt, spike technique |
| Problèmes YouTube API | Faible | Élevé | Documentation API, fallback manuel |
| Charge de travail sous-estimée | Moyenne | Moyen | Buffer sprint 6, priorisation MoSCoW |
| Absence d'un développeur | Faible | Moyen | Documentation, pair programming |
| Problèmes de performance | Moyenne | Moyen | Tests Lighthouse réguliers |

---

## Métriques de Suivi

### KPIs Projet

| Métrique | Objectif | Mesure |
|----------|----------|--------|
| Vélocité | 25-30 pts/sprint | Points livrés par sprint |
| Burndown | Linéaire | Graphique de progression |
| Bugs en production | < 5 critiques | Comptage post-déploiement |
| Couverture de tests | > 70% | Coverage report |
| Score Lighthouse | > 90 | Audit automatisé |

### KPIs Équipe

| Métrique | Objectif |
|----------|----------|
| Taux de présence Daily | > 90% |
| Stories livrées vs planifiées | > 80% |
| Satisfaction équipe (rétro) | > 4/5 |

---

## Contacts et Responsabilités

| Rôle | Responsabilités |
|------|-----------------|
| **Scrum Master** | Facilitation, protection équipe, amélioration continue |
| **Product Owner** | Priorisation backlog, validation, vision produit |
| **Équipe Dev** | Développement, tests, estimations |

---

## Calendrier Récapitulatif

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        PLANNING 10 SEMAINES - marsAI                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Sem 0    │  Sem 1-2  │  Sem 3-4  │  Sem 5-6  │  Sem 7-8  │  Sem 9-10 │   │
│           │           │           │           │           │           │   │
│  SPRINT 0 │  SPRINT 1 │  SPRINT 2 │  SPRINT 3 │  SPRINT 4 │  SPRINT 5 │   │
│  Setup    │  Auth     │  Profil   │  Catalogue│  Jury UI  │  Admin    │   │
│           │  Fondations│ Soumission│  i18n     │  Votes    │  Finitions│   │
│           │           │           │           │           │           │   │
│  ────────►│  ────────►│  ────────►│  ────────►│  ────────►│  ────────►│   │
│           │           │           │           │           │           │   │
│  27 pts   │  28 pts   │  32 pts   │  30 pts   │  32 pts   │           │   │
│           │           │           │           │           │  DEPLOY   │   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Checklist de Lancement

### Avant Sprint 1
- [ ] Repository Git créé
- [ ] Environnement dev configuré
- [ ] Équipe formée sur les outils
- [ ] Backlog priorisé et estimé
- [ ] Maquettes principales validées
- [ ] Architecture technique documentée

### Avant chaque Sprint
- [ ] Sprint Planning effectué
- [ ] Sprint Backlog défini
- [ ] Capacité de l'équipe confirmée
- [ ] Dépendances identifiées

### Après chaque Sprint
- [ ] Sprint Review effectuée
- [ ] Rétrospective réalisée
- [ ] Actions d'amélioration documentées
- [ ] Backlog mis à jour
- [ ] Documentation à jour

---

**Document Scrum Master - Projet marsAI**  
**Équipe : 5 développeurs | Durée : 10 semaines | 5 sprints**

