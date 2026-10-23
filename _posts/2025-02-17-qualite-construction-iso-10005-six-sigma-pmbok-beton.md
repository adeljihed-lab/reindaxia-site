---
title: "Qualité en construction : du plan qualité ISO 10005 au DMAIC, le cas des fondations en béton"
description: "Comment ISO 9001, ISO 10005, les méthodes Six Sigma et Lean et le PMBOK se complètent pour prévenir les défauts sur un chantier. Cas détaillé de massifs de fondation en béton : exigences, plan qualité, carte du processus, AMDEC, conformité selon EN 206, capabilité, cartes de contrôle, coût de la qualité et actions correctives."
category: Qualité
keywords: [qualité construction, ISO 10005, plan qualité, ISO 9001, Six Sigma, DMAIC, Lean, SIPOC, CTQ, AMDEC, FMEA, capabilité, Cpk, carte de contrôle, maîtrise statistique des procédés, coût de la qualité, PMBOK 8e édition, Manage Quality Assurance, béton, EN 206, EN 13670, EN 12390, résistance caractéristique, éprouvettes, vibration, ségrégation, nids de cailloux, massifs de fondation, poteaux, lignes électriques, non-conformité, contrôle qualité, Tunisie, Afrique]
---

> **En bref.** Sur un chantier, la qualité se perd rarement par ignorance des règles. Elle se perd parce qu'un processus courant, répété des centaines de fois, n'est ni décrit, ni mesuré, ni maîtrisé. Les référentiels de la qualité offrent pourtant une boîte à outils cohérente : ISO 9001 pour le système, ISO 10005 pour le plan qualité du projet, le PMBOK pour l'intégrer au management de projet, Six Sigma et Lean pour mesurer et réduire la variabilité. Cet article les applique à un cas réel et banal : la réalisation de massifs de fondation en béton pour des poteaux de lignes électriques.

## Une lettre du maître d'œuvre

Quelques semaines après la reprise des travaux d'implantation de poteaux sur une ligne moyenne tension, l'entreprise reçoit une lettre du maître d'œuvre. À la suite de visites inopinées, il relève :

- l'absence de vibreur, alors que le béton des massifs est gâché manuellement sur tôle et non en bétonnière ;
- la réalisation différée de la partie hors sol des massifs, qui doit être coulée en continuité avec la partie enterrée ;
- l'absence d'éprouvettes, et donc de toute mesure de la résistance du béton mis en œuvre ;
- l'absence d'essais de convenance alors que la provenance des granulats a changé ;
- des moyens humains et matériels insuffisants pour tenir les engagements.

Il annonce des contrôles au scléromètre et la démolition des massifs dont le béton serait jugé insuffisant.

Chaque point est une exigence classique du contrat et des normes. Pris ensemble, ils décrivent un processus qui n'était pas maîtrisé : ni ses entrées (les granulats), ni son exécution (la mise en place et la vibration), ni sa vérification (les éprouvettes). C'est ce processus que nous allons reconstruire avec les outils de la qualité.

## Quatre référentiels, un même objectif

| Référentiel | Ce qu'il apporte | Niveau |
|---|---|---|
| ISO 9001 | Les exigences du système : processus maîtrisés, compétences, achats, surveillance, non-conformités, amélioration | Entreprise |
| ISO 10005 | La méthode pour rédiger un plan qualité adapté à un projet, un produit ou un contrat | Projet |
| PMBOK (PMI) | L'intégration de la qualité au management de projet : principe « intégrer la qualité aux processus et aux livrables », processus *Manage Quality Assurance*, coût de la qualité | Projet |
| Six Sigma et Lean | Les méthodes pour mesurer, comprendre et réduire la variabilité et le gaspillage d'un processus | Processus |

Ces référentiels ne sont pas concurrents. ISO 9001 dit ce qu'il faut maîtriser ; ISO 10005 dit comment l'organiser pour un projet donné ; le PMBOK le relie au planning, aux coûts et aux risques ; Six Sigma donne les moyens statistiques de prouver qu'un processus est capable et de l'améliorer.

## Étape 1 : traduire le contrat en exigences mesurables

Six Sigma parle de **caractéristiques critiques pour la qualité** (CTQ) : ce que le client attend, exprimé en grandeurs mesurables. Pour un massif de fondation, elles sont peu nombreuses :

| CTQ | Exigence | Méthode de vérification |
|---|---|---|
| Résistance du béton | Classe de résistance du contrat, par exemple C25/30 | Éprouvettes, essais de compression (EN 12390-3), critères de conformité (EN 206) |
| Compacité | Pas de nids de cailloux ni de ségrégation | Vibration, contrôle visuel au décoffrage |
| Continuité | Partie enterrée et hors sol coulées sans reprise non prévue | Contrôle du séquencement, enregistrement de bétonnage |
| Géométrie | Dimensions, verticalité, implantation | Mesure, piquetage contradictoire |
| Enrobage et durabilité | Enrobage des armatures ou des ancrages, cure | Contrôle avant coulage, consigne de cure |

Cette table est le point de départ du plan qualité. Si une CTQ n'a pas de méthode de vérification, elle ne sera pas maîtrisée.

## Étape 2 : écrire un plan qualité qui sert

ISO 10005 décrit le contenu d'un plan qualité : son domaine d'application, les éléments d'entrée, les objectifs qualité, les responsabilités, la maîtrise des informations documentées, les ressources, la communication, la maîtrise des prestataires externes, la production et sa surveillance, l'identification et la traçabilité, la maîtrise des non-conformités, les audits. Elle insiste sur un point : le plan qualité doit **renvoyer** aux procédures existantes de l'entreprise quand elles conviennent, et **compléter** là où le projet a des exigences propres.

Pour notre processus, les éléments essentiels du plan qualité sont :

- **les responsabilités** : qui valide la formulation, qui autorise un coulage, qui prélève les éprouvettes, qui libère un massif ;
- **la maîtrise des achats** : fournisseurs de granulats et de ciment qualifiés, et règle explicite qu'un changement de provenance déclenche de nouveaux essais de convenance ;
- **les moyens** : vibreurs en nombre suffisant et de rechange, bétonnières si le contrat les impose, moules à éprouvettes, matériel de cure ;
- **le plan d'inspection et d'essais** : points d'arrêt avant coulage (fouille, armatures, coffrage), points de surveillance pendant le coulage, essais sur béton frais et durci ;
- **la maîtrise des non-conformités** : ce qui se passe si une éprouvette ne satisfait pas aux critères.

Un plan qualité de ce type tient en quelques pages pour un processus donné. Il ne vaut que s'il est connu des chefs d'équipe et vérifié sur le terrain.

## Étape 3 : cartographier le processus

L'outil **SIPOC** (fournisseurs, entrées, processus, sorties, clients) oblige à regarder le processus en entier :

| Fournisseurs | Entrées | Processus | Sorties | Clients |
|---|---|---|---|---|
| Carrière, cimenterie, fournisseur d'acier, topographe | Granulats, ciment, eau, adjuvants, armatures ou ancrages, implantation | Fouille, coffrage, ferraillage, fabrication du béton, mise en place, vibration, coulage hors sol, cure, décoffrage | Massif conforme et tracé, éprouvettes, fiche de bétonnage | Équipe de levage des poteaux, maître d'œuvre, exploitant du réseau |

Le SIPOC révèle immédiatement une faiblesse de notre cas : un changement chez un fournisseur (la carrière) modifie une entrée critique sans que le processus ne le détecte.

## Étape 4 : analyser les risques du processus (AMDEC)

L'analyse des modes de défaillance, de leurs effets et de leur criticité (AMDEC) classe les risques selon leur gravité, leur fréquence et leur détectabilité. Une version simplifiée suffit souvent :

| Étape | Mode de défaillance | Effet | Cause | Maîtrise prévue |
|---|---|---|---|---|
| Fabrication du béton | Dosage en eau excessif | Résistance insuffisante | Gâchage manuel, maniabilité recherchée | Formulation écrite, mesure de l'affaissement, bétonnière |
| Approvisionnement | Granulats de nouvelle provenance | Résistance et durabilité inconnues | Changement de carrière non signalé | Essais de convenance obligatoires avant usage |
| Mise en place | Absence de vibration | Nids de cailloux, résistance réduite | Vibreur absent ou en panne | Point d'arrêt : vibreur opérationnel avant coulage, vibreur de secours |
| Séquencement | Reprise entre partie enterrée et hors sol | Joint faible, infiltration | Organisation des équipes | Coulage continu planifié, contrôle du chef de chantier |
| Vérification | Pas d'éprouvettes | Conformité non démontrée, démolition possible | Moules absents, oubli | Plan de prélèvement, moules disponibles, fiche de prélèvement |
| Cure | Dessiccation par chaleur et vent | Fissuration, baisse de résistance en surface | Climat chaud, absence de consigne | Cure humide ou produit de cure |

L'intérêt de l'AMDEC n'est pas le tableau, c'est la discussion qui le produit : elle oblige les chefs d'équipe, l'ingénieur travaux et le responsable qualité à partager leur connaissance du processus.

## Étape 5 : mesurer, puis juger la capabilité

Le béton est un cas d'école pour la maîtrise statistique. La norme EN 206 fixe des critères de conformité de la résistance à partir des résultats d'essais : en production initiale, sur trois résultats, la moyenne doit dépasser la résistance caractéristique d'au moins 4 MPa et aucun résultat ne doit être inférieur à cette résistance de plus de 4 MPa ; en production continue, la moyenne est comparée à la résistance caractéristique augmentée d'un multiple de l'écart type mesuré.

Raisonnons sur un exemple illustratif. Pour un béton C25/30, la résistance caractéristique sur cylindre est de 25 MPa. Supposons des résultats moyens de 33 MPa avec un écart type de 3 MPa. L'indice de capabilité par rapport à la limite inférieure est :

Cpk = (moyenne − limite) / (3 × écart type) = (33 − 25) / 9 ≈ 0,89

Un indice inférieur à 1 signifie qu'une part non négligeable de la production risque de passer sous la limite. Deux leviers existent : augmenter la moyenne, ce qui coûte du ciment, ou réduire la dispersion, ce qui demande de maîtriser le processus. Si la dispersion tombe à 2 MPa avec la même moyenne, l'indice passe à environ 1,33, valeur couramment retenue comme objectif de capabilité. C'est toute la logique Six Sigma : **réduire la variabilité plutôt que de compenser par des marges**.

Les **cartes de contrôle** permettent ensuite de suivre la stabilité dans le temps : une série de résultats qui dérive, ou un point hors des limites de contrôle, signale un changement dans le processus avant qu'il ne produise une non-conformité. Le PMBOK rappelle utilement la différence entre limites de spécification, fixées par le client, et limites de contrôle, calculées à partir du processus.

Dans notre cas, il n'y avait aucune donnée : sans éprouvettes, impossible de calculer quoi que ce soit, et le maître d'œuvre en était réduit au scléromètre. Rappelons que cet appareil mesure un indice de rebond lié à la dureté de surface ; il permet de comparer des zones entre elles, pas d'établir une résistance. En cas de doute, l'évaluation de la résistance en place repose sur des carottages selon les méthodes normalisées, avec leur coût et leurs délais.

![Capabilité et DMAIC](/assets/blog/qualite-capabilite-dmaic.svg)
*Figure 1. Même résistance moyenne, deux dispersions : réduire la variabilité améliore la capabilité sans ajouter de ciment ; à droite, les cinq phases DMAIC appliquées au béton.*

## Étape 6 : améliorer avec DMAIC

La démarche DMAIC structure l'amélioration en cinq phases. Appliquée à notre processus, elle donne :

| Phase | Ce que l'on fait | Exemple |
|---|---|---|
| Définir | Problème, périmètre, CTQ, objectif | « Zéro massif démoli ; Cpk résistance ≥ 1,33 » |
| Mesurer | Données de base fiables | Prélèvement systématique d'éprouvettes, affaissement, températures |
| Analyser | Causes de variabilité | Diagramme d'Ishikawa, comparaison par équipe, par carrière, par mode de gâchage |
| Améliorer | Solutions testées | Bétonnière et dosage pondéral, vibreur de secours, coulage continu, essais de convenance à chaque changement de carrière |
| Contrôler | Pérenniser | Carte de contrôle des résistances, points d'arrêt, audits de chantier |

Le **Lean** complète la démarche en traquant les gaspillages : attentes de matériaux, déplacements inutiles des équipes, reprises. Sur un chantier linéaire comme une ligne électrique, l'organisation des équipes par séquences régulières (fouilles, ferraillage, coulage, levage) réduit les attentes et rend la qualité plus prévisible.

## Étape 7 : traiter les non-conformités et en tirer les leçons

ISO 9001 distingue la correction, qui traite le massif défectueux, de l'action corrective, qui traite la cause. Dans notre cas, la correction peut aller de l'acceptation après carottage à la démolition ; l'action corrective porte sur le processus : moyens, formation, points d'arrêt, maîtrise des fournisseurs. La vérification d'efficacité se lit sur les données : les résultats des éprouvettes suivantes et l'absence de nouveaux écarts aux visites.

## Le coût de la qualité

Le PMBOK reprend une distinction classique : les coûts de **conformité** (prévention et évaluation : formation, procédures, essais, inspections) et les coûts de **non-conformité** (défaillances internes et externes : reprises, démolitions, retards, pénalités, perte de confiance). Un vibreur de secours, une boîte de moules à éprouvettes et une demi-journée d'essais de convenance coûtent très peu au regard d'une campagne de carottage et de la démolition de quelques massifs, sans compter le délai et la relation avec le maître d'œuvre.

## Ce que nous retenons

Aucun des écarts de notre cas ne relevait d'une difficulté technique. Tous relevaient d'un processus non maîtrisé. Les méthodes de la qualité, qu'elles s'appellent plan qualité, AMDEC, DMAIC ou carte de contrôle, ont un point commun : elles obligent à décrire le processus, à mesurer ce qui compte, et à agir sur les causes avant que le défaut n'apparaisse. Elles demandent une organisation qui définit les responsabilités, des moyens adaptés, des ingénieurs et techniciens qui connaissent le métier, et un contrôle qualité présent au moment où le travail se fait. C'est à cette condition que la qualité cesse d'être une inspection après coup pour devenir une propriété du processus.

## Références

- ISO 9001:2015, *Systèmes de management de la qualité — Exigences*, notamment 8.1, 8.4, 8.5.1, 8.7, 9.1 et 10.2.
- ISO 10005:2018, *Management de la qualité — Lignes directrices pour les plans qualité*.
- ISO 13053-1 et ISO 13053-2, *Méthodes quantitatives dans l'amélioration de processus — Six Sigma*.
- Project Management Institute (2025). *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*, huitième édition : principe *Embed Quality Into Processes and Deliverables*, processus *Manage Quality Assurance*, coût de la qualité.
- EN 206, *Béton — Spécification, performances, production et conformité*.
- EN 13670, *Exécution des structures en béton*.
- EN 12390-3, *Essais pour béton durci — Résistance à la compression des éprouvettes*.
- EN 12504-1 et EN 12504-2, *Essais pour béton dans les structures — Carottes ; Indice de rebondissement*.
- EN 13791, *Évaluation de la résistance à la compression en place des structures et des éléments préfabriqués en béton*.
- Montgomery, D. C. *Introduction to Statistical Quality Control*. Wiley.
- Juran, J. M. et De Feo, J. A. *Juran's Quality Handbook*. McGraw-Hill.

*Les valeurs numériques de l'exemple de capabilité sont illustratives.*

---

Reindaxia accompagne les entreprises et les maîtres d'ouvrage dans la maîtrise de la qualité des travaux : plans qualité, plans d'inspection et d'essais, analyse des processus, suivi statistique, surveillance de chantier et traitement des non-conformités. [Parlons de votre projet](/contact.html?besoin=qualite).
