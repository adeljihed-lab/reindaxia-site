# Publier un article sur le blog Reindaxia

1. Sur GitHub, ouvrir le dépôt adeljihed-lab/reindaxia-site, puis le dossier `_posts`.
2. « Add file » → « Create new file ».
3. Nom du fichier : `AAAA-MM-JJ-titre-court-sans-accents.md` (ex. `2026-11-05-audit-fournisseur-iso-9001.md`).
   La date du nom est la date de publication ; le reste devient l'adresse de l'article.
4. Copier le contenu de `_drafts/modele-article.md`, remplacer le titre, le résumé, la catégorie, les mots-clés et le texte.
5. « Commit changes ». L'article est en ligne 1 à 2 minutes plus tard sur www.reindaxia.tn/blog.html,
   ajouté automatiquement au plan du site (sitemap.xml) et au flux /blog/feed.xml.

Images : les déposer dans `assets/blog/` (JPG ou PNG, moins de 300 Ko), puis ajouter dans l'en-tête de l'article
`image: /assets/blog/nom.jpg`, ou dans le texte `![description](/assets/blog/nom.jpg)`.

Mise en forme : `## Intertitre`, `**gras**`, `- liste`, `[lien](/contact.html)`, tableaux avec `| col | col |`.
Pour modifier ou retirer un article : ouvrir le fichier dans `_posts`, crayon pour modifier, ou « Delete file ».
