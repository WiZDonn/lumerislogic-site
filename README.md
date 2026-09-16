# lumerislogic.com

Site statique du studio Lumeris Logic, servi par GitHub Pages sur `lumerislogic.com`.

## Structure

| Chemin | Rôle |
|---|---|
| `CNAME` | Domaine personnalisé de GitHub Pages. |
| `app-ads.txt` | **Un seul fichier pour toutes les apps** (même compte AdMob). Doit rester à la racine. N'y ajouter une ligne que pour une nouvelle régie publicitaire. |
| `index.html` | Page du studio. |
| `404.html` | Page d'erreur servie par GitHub Pages. |
| `mentions-legales/` | Mentions légales (LCEN). |
| `assets/site.css` | Style partagé par toutes les pages. |
| `assets/lang-switch.js` | Sélecteur FR/EN des pages bilingues. |
| `<app>/` | Une app : présentation (`index.html`), `privacy/`, `support/`. |

Apps : `histocar/` (publiée), `debatevault/` (pages d'attente, `noindex`).

## Règles

- **Une URL déclarée dans une console de store ne change plus jamais** : `/<app>/privacy/`, `/<app>/support/`.
- Le nom du dossier d'une app est définitif. Toujours une barre oblique finale dans les URL.
- `app-ads.txt` : encodage ASCII, sans BOM.
- La source de la politique HistoCar vit dans le repo de l'app (`docs/privacy-policy.html`) :
  la recopier ici dans `histocar/privacy/index.html` à chaque modification.

## Page bilingue

Une `<section lang="fr" data-title="…">` par langue, un bouton `data-lang` par langue dans
`.lang-switch`, la ligne `document.documentElement.classList.add('js')` dans le `<head>`,
et `<script src="/assets/lang-switch.js"></script>` en fin de `<body>`.

## Ajouter une app

1. Copier `histocar/` vers `<app>/`, adapter les trois pages.
2. Écrire une politique de confidentialité propre à cette app.
3. L'ajouter à `index.html`.
4. Créer les alias `privacy.<app>@` et `support.<app>@`.
5. Renseigner les URL dans la console du store (site web : `https://lumerislogic.com`).
