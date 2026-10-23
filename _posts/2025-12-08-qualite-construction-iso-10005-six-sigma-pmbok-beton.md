---
title: "Massifs en béton menacés de démolition : reprendre la maîtrise avec ISO 10005 et Six Sigma"
description: "Un béton de massifs sans éprouvettes ni vibration : comment plan qualité ISO 10005, AMDEC, capabilité et DMAIC remettent le processus sous contrôle."
category: Qualité
keywords: [qualité construction, ISO 10005, plan qualité, ISO 9001, Six Sigma, DMAIC, Lean, SIPOC, CTQ, AMDEC, FMEA, capabilité, Cpk, carte de contrôle, maîtrise statistique des procédés, coût de la qualité, PMBOK 8e édition, Manage Quality Assurance, béton, EN 206, EN 13670, EN 12390, résistance caractéristique, éprouvettes, vibration, ségrégation, nids de cailloux, massifs de fondation, poteaux, lignes électriques, non-conformité, contrôle qualité, Tunisie, Afrique]
---

La lettre du maître d'œuvre tient en une page. Après plusieurs visites inopinées sur un chantier de ligne moyenne tension, il annonce des contrôles au scléromètre sur les massifs de fondation des poteaux, et la démolition de ceux dont le béton serait jugé insuffisant. Ses constats : pas de vibreur alors que le béton est gâché à la main sur tôle ; partie hors sol des massifs coulée en différé, au lieu de l'être en continuité avec la partie enterrée ; aucune éprouvette ; aucun essai de convenance alors que la carrière a changé ; des équipes et du matériel insuffisants.

L'entreprise doit répondre, et vite. Elle ne sait pas ce que vaut le béton déjà coulé, puisqu'elle ne l'a jamais mesuré. Elle ne peut pas promettre que la suite sera meilleure sans dire ce qui va changer. C'est la situation où les outils de la qualité servent le plus, à condition de les appliquer à un processus concret plutôt qu'au système en général.

## D'abord, savoir ce que vaut le béton en place

Le scléromètre mesure un indice de rebond lié à la dureté de surface. Il permet de comparer des zones entre elles et de repérer les massifs suspects. Il ne suffit pas, seul, à établir une résistance : une surface sèche ou carbonatée rebondit plus qu'un béton sain en profondeur, une surface ségrégée moins. L'évaluation de la résistance en place repose sur la démarche de l'EN 13791, qui s'appuie sur des carottes prélevées et essayées selon l'EN 12504-1, l'indice de rebondissement (EN 12504-2) servant à étendre les résultats après corrélation.

Notre conseil à l'entreprise, dans ce type de situation : proposer elle-même un plan de reconnaissance contradictoire. Indices de rebond sur l'ensemble des massifs, classement en lots homogènes, carottage sur les lots les plus faibles et sur un lot de référence, puis décision massif par massif. Cela évite la démolition sur un seul indice de surface, et cela donne au maître d'œuvre une base qu'il peut accepter.

## Comprendre pourquoi le processus a dérapé

Pris un par un, les constats de la lettre sont des exigences classiques. Pris ensemble, ils montrent un processus dont rien n'était maîtrisé : ni les entrées (les granulats), ni l'exécution (mise en place, vibration, continuité de coulage), ni la vérification (les éprouvettes).

Le **SIPOC** (fournisseurs, entrées, processus, sorties, clients) oblige à regarder ce processus en entier :

| Fournisseurs | Entrées | Processus | Sorties | Clients |
|---|---|---|---|---|
| Carrière, cimenterie, fournisseur d'acier, topographe | Granulats, ciment, eau, adjuvants, armatures ou ancrages, implantation | Fouille, coffrage, ferraillage, fabrication du béton, mise en place, vibration, coulage hors sol, cure, décoffrage | Massif conforme et tracé, éprouvettes, fiche de bétonnage | Équipe de levage des poteaux, maître d'œuvre, exploitant du réseau |

La faiblesse saute aux yeux : la carrière a changé, donc une entrée critique a changé, et rien dans le processus ne l'a détecté.

L'**AMDEC** (analyse des modes de défaillance, de leurs effets et de leur criticité) range ensuite les risques. Une version simplifiée, construite en une réunion avec les chefs d'équipe, l'ingénieur travaux et le responsable qualité, suffit :

| Étape | Mode de défaillance | Effet | Cause | Maîtrise prévue |
|---|---|---|---|---|
| Fabrication du béton | Dosage en eau excessif | Résistance insuffisante | Gâchage manuel, maniabilité recherchée | Formulation écrite, mesure de l'affaissement, bétonnière |
| Approvisionnement | Granulats de nouvelle provenance | Résistance et durabilité inconnues | Changement de carrière non signalé | Essais de convenance obligatoires avant usage |
| Mise en place | Absence de vibration | Nids de cailloux, résistance réduite | Vibreur absent ou en panne | Point d'arrêt : vibreur opérationnel avant coulage, vibreur de secours |
| Séquencement | Reprise entre partie enterrée et hors sol | Joint faible, infiltration | Organisation des équipes | Coulage continu planifié, contrôle du chef de chantier |
| Vérification | Pas d'éprouvettes | Conformité non démontrée, démolition possible | Moules absents, oubli | Plan de prélèvement, moules disponibles, fiche de prélèvement |
| Cure | Dessiccation par chaleur et vent | Fissuration, baisse de résistance en surface | Climat chaud, absence de consigne | Cure humide ou produit de cure |

Le gâchage manuel mérite une remarque. Sur tôle, l'ouvrier ajoute de l'eau jusqu'à ce que le béton soit facile à mettre en place, sans vibreur pour l'aider. Chaque litre d'eau en trop augmente le rapport eau/ciment, donc baisse la résistance et augmente la porosité. La cause première du défaut de résistance est souvent là, avant même l'absence de vibration.

## Écrire un plan qualité qui tient sur le chantier

ISO 9001 dit ce qu'une entreprise doit maîtriser. ISO 10005 dit comment l'organiser pour un projet ou un contrat donné : domaine d'application, éléments d'entrée, objectifs, responsabilités, informations documentées, ressources, maîtrise des prestataires externes, production et surveillance, traçabilité, non-conformités, audits. Elle demande au plan qualité de renvoyer aux procédures existantes quand elles conviennent et de les compléter là où le projet a des exigences propres.

Le point de départ est la liste des **caractéristiques critiques pour la qualité** (CTQ, au sens de Six Sigma) : ce que le client attend, en grandeurs mesurables.

| CTQ | Exigence | Méthode de vérification |
|---|---|---|
| Résistance du béton | Classe de résistance du contrat, par exemple C25/30 | Éprouvettes, essais de compression (EN 12390-3), critères de conformité (EN 206) |
| Compacité | Pas de nids de cailloux ni de ségrégation | Vibration, contrôle visuel au décoffrage |
| Continuité | Partie enterrée et hors sol coulées sans reprise non prévue | Contrôle du séquencement, enregistrement de bétonnage |
| Géométrie | Dimensions, verticalité, implantation | Mesure, piquetage contradictoire |
| Enrobage et durabilité | Enrobage des armatures ou des ancrages, cure | Contrôle avant coulage, consigne de cure |

Sur ce chantier, la première ligne n'avait aucune méthode de vérification. À partir de cette table, le plan qualité du processus de bétonnage tient en quelques pages :

- **les responsabilités** : qui valide la formulation, qui autorise un coulage, qui prélève les éprouvettes, qui libère un massif ;
- **les achats** : carrière et cimenterie qualifiées, et une règle écrite selon laquelle tout changement de provenance déclenche de nouveaux essais de convenance ;
- **les moyens** : vibreurs en nombre suffisant plus un de secours, bétonnière si le contrat l'impose, moules à éprouvettes, matériel de cure ;
- **le plan d'inspection et d'essais**, cohérent avec l'EN 13670 : points d'arrêt avant coulage (fouille, armatures, coffrage), surveillance pendant le coulage, essais sur béton frais et durci ;
- **les non-conformités** : ce qui se passe quand une série d'éprouvettes ne satisfait pas aux critères.

Les chefs d'équipe doivent connaître les points d'arrêt par cœur. Le responsable qualité les vérifie à chaque passage, et la fiche de bétonnage signée en garde la trace.

## Mesurer : ce que dit la capabilité, et ce qu'elle ne dit pas

Une fois les éprouvettes prélevées, le béton devient un cas d'école de maîtrise statistique. L'EN 206 fixe les critères de conformité de la résistance. En production initiale, sur trois résultats, la moyenne doit dépasser la résistance caractéristique d'au moins 4 MPa, et aucun résultat ne doit lui être inférieur de plus de 4 MPa. En production continue, la moyenne est comparée à la résistance caractéristique augmentée d'un multiple de l'écart type mesuré.

Prenons un exemple illustratif. Pour un C25/30, la résistance caractéristique sur cylindre est de 25 MPa. Supposons une moyenne de 33 MPa et un écart type de 3 MPa. L'indice de capabilité par rapport à la limite inférieure vaut :

Cpk = (moyenne − limite) / (3 × écart type) = (33 − 25) / 9 ≈ 0,89

Avec ces valeurs, environ 0,4 % des résultats passent sous 25 MPa, et le critère de conformité d'EN 206 est respecté. Un Cpk inférieur à 1 ne signifie donc pas que le béton est non conforme. L'objectif Cpk ≥ 1,33, couramment retenu, est un objectif interne plus strict que le critère d'EN 206 : il garde une marge si le processus dérive, par exemple au prochain changement de carrière.

Pour l'atteindre, il y a deux moyens. Augmenter la moyenne coûte du ciment sur chaque mètre cube. Réduire la dispersion demande de maîtriser le processus : dosage pondéral, eau mesurée, vibration systématique. Avec la même moyenne et un écart type ramené à 2 MPa, l'indice passe à environ 1,33. C'est la logique de Six Sigma appliquée au béton : réduire la variabilité plutôt que compenser par des marges.

![Capabilité et DMAIC](/assets/blog/qualite-capabilite-dmaic.svg)
*Figure 1. Même résistance moyenne, deux dispersions : réduire la variabilité améliore la capabilité sans ajouter de ciment ; à droite, les cinq phases DMAIC appliquées au béton.*

Les **cartes de contrôle** suivent ensuite la stabilité dans le temps. Une série de résultats qui dérive, ou un point hors des limites de contrôle, signale un changement avant qu'il ne produise une non-conformité. Les limites de contrôle sont calculées sur le processus. Elles ne se confondent pas avec les limites de spécification, fixées par le contrat.

## Améliorer et tenir : DMAIC et Lean

La démarche DMAIC structure l'amélioration en cinq phases :

| Phase | Ce que l'on fait | Exemple |
|---|---|---|
| Définir | Problème, périmètre, CTQ, objectif | « Zéro massif démoli ; Cpk résistance ≥ 1,33 » |
| Mesurer | Données de base fiables | Prélèvement systématique d'éprouvettes, affaissement, températures |
| Analyser | Causes de variabilité | Diagramme d'Ishikawa, comparaison par équipe, par carrière, par mode de gâchage |
| Améliorer | Solutions testées | Bétonnière et dosage pondéral, vibreur de secours, coulage continu, essais de convenance à chaque changement de carrière |
| Contrôler | Pérenniser | Carte de contrôle des résistances, points d'arrêt, audits de chantier |

Le **Lean** s'attaque aux attentes, aux déplacements inutiles et aux reprises. Sur un chantier linéaire comme une ligne électrique, organiser les équipes en séquences régulières (fouilles, ferraillage, coulage, levage) supprime une partie des attentes. Il supprime aussi une cause du défaut de continuité : la partie hors sol coulée plus tard parce que l'équipe de coulage était déjà repartie.

ISO 9001 distingue enfin la correction, qui traite le massif défectueux, de l'action corrective, qui traite la cause. Ici, la correction va de l'acceptation après carottage à la démolition. L'action corrective porte sur les moyens, la formation, les points d'arrêt et la maîtrise des fournisseurs. Son efficacité se lit dans les données : résultats des éprouvettes suivantes et absence de nouveaux écarts aux visites du maître d'œuvre.

## Ce que coûte l'économie de moyens

Le PMBOK reprend la distinction classique entre coûts de conformité (prévention et évaluation : formation, procédures, essais, inspections) et coûts de non-conformité (reprises, démolitions, retards, pénalités, perte de confiance). Sur ce chantier, l'écart est facile à chiffrer en ordre de grandeur. D'un côté, un vibreur de secours, des moules à éprouvettes, une demi-journée d'essais de convenance. De l'autre, une campagne de reconnaissance, des carottages, la démolition et la reconstruction de quelques massifs, et des semaines de retard sur le levage des poteaux.

## Pour la réponse au maître d'œuvre

La réponse qui a le plus de chances d'être acceptée contient trois pièces : un plan de reconnaissance du béton déjà coulé, avec une règle de décision massif par massif ; le plan qualité du processus de bétonnage, avec ses points d'arrêt et son plan de prélèvement ; la liste des moyens mobilisés avant le prochain coulage, vibreur de secours et moules compris. Le maître d'œuvre peut vérifier chacune à sa prochaine visite.

## Références

- ISO 9001:2015, *Systèmes de management de la qualité — Exigences*, notamment 8.1, 8.4, 8.5.1, 8.7, 9.1 et 10.2.
- ISO 10005:2018, *Management de la qualité — Lignes directrices pour les plans qualité*.
- ISO 13053-1 et ISO 13053-2, *Méthodes quantitatives dans l'amélioration de processus — Six Sigma*.
- Project Management Institute, *A Guide to the Project Management Body of Knowledge (PMBOK® Guide)*, septième édition (2021) : principe « intégrer la qualité dans les processus et les livrables », coût de la qualité.
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
