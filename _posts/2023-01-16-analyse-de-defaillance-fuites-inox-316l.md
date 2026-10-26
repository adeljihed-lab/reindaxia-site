---
title: "Fuites aux soudures d'un réseau inox 316L : avant de refaire les joints, lire les données"
description: "Fuites au droit des soudures d'un réseau d'eau en 316L : comment croiser les données qualité écarte le soudage et désigne la corrosion sous dépôts."
category: Retour d'expérience
image: /assets/blog/inox-316l-piqures-macro.jpg
image_alt: "Piqûres de corrosion sur la paroi intérieure d'un tube en inox 316L"
keywords: [analyse de défaillance, failure analysis, analyse des causes, root cause analysis, corrosion, acier inoxydable 316L, corrosion par piqûres, chlorures, corrosion caverneuse, MIC, corrosion microbiologique, épreuve hydraulique, préservation, QA/QC, inspection soudage, mise en service, Tunisie, Afrique du Nord]
---

Le devis était prêt : couper et ressouder plusieurs dizaines de joints sur un réseau d'eau en inox 316L, requalifier les soudeurs, refaire la radiographie. L'installation avait quelques mois de service et les fuites apparaissaient toutes au droit de soudures bout à bout. Le maître d'ouvrage nous a demandé un avis avant de signer la commande. Nous avons proposé de suspendre la décision le temps de croiser les données déjà disponibles. Elles ont désigné un autre coupable : une corrosion localisée sous dépôts, dans de l'eau stagnante chargée en chlorures. Refaire les joints n'aurait réglé la question que pour quelques mois.

## Un inox qui « ne rouille pas » et une paroi de 3 mm percée

Le 316L est choisi pour les réseaux d'eau industrielle parce qu'il résiste bien à la corrosion généralisée. Cette résistance tient à un film passif de quelques nanomètres, riche en oxyde de chrome, qui se reforme tant que le milieu le permet. Si le film cède localement et ne peut pas se reconstituer, la corrosion se concentre en un point et progresse en profondeur. Une paroi de 3 mm peut être percée en quelques mois.

Sur le réseau en cause, les faits de départ étaient simples :

- tubes 316L de faible épaisseur, alimentés en eau de forage, exploitation intermittente depuis la mise en service ;
- fuites et suintements uniquement sur des soudures bout à bout ;
- quelques joints jugés à reprendre après radiographie et ressuage ;
- un réseau voisin, de même matériau mais véhiculant un autre fluide, presque intact.

Trois pistes occupaient les réunions : la qualification des soudeurs, une contamination bactérienne, l'effet de la chloration. La première avait l'avantage d'être visible et de désigner un responsable. Nous retrouvons ce réflexe sur la plupart des installations qui fuient : chez un fabricant de skids, une fuite sur une ligne de refroidissement a d'abord été imputée à un soudeur intérimaire, jusqu'à ce que la coupe montre une piqûre partie du métal de base, sous une trace de calamine. La soudure est l'endroit où l'on regarde, parce qu'on sait où elle est ; ce n'est pas pour autant l'endroit où le métal cède.

## Les données existaient déjà

Aucune mesure nouvelle n'a été nécessaire pour la première étape. La documentation qualité du projet contenait la base de données des soudures, les qualifications des modes opératoires (WPS/PQR) et des soudeurs, les rapports de contrôles non destructifs, les isométriques et les enregistrements d'épreuve. Nous avons rattaché chaque fuite à son joint, puis chaque joint à son historique, et réparti les défaillances selon une quinzaine de critères.

| Critère de répartition | Constat | Ce qu'on en tire |
|---|---|---|
| Par soudeur ou équipe | Aucun soudeur au taux de défaillance anormal | La compétence individuelle n'explique pas le phénomène |
| Atelier / chantier | Répartition proportionnelle au volume soudé | Pas de lien avec le lieu de soudage |
| Joints réparés ou ressoudés | Une minorité a fui, sans lien avec un rejet radiographique initial | La réparation n'est pas un facteur déclenchant |
| Joints radiographiés | Les joints radiographiés avant la fuite étaient conformes | Le défaut n'existait pas à la fabrication |
| Orientation de la tuyauterie | Plus de 90 % des fuites sur tronçons horizontaux | Facteur géométrique fort |
| Position sur la circonférence | Toutes en partie basse, autour de 6 heures | Rôle de l'eau et des dépôts au point bas |
| Fluide véhiculé | Presque toutes sur l'eau d'utilité | Facteur lié au milieu |

Un défaut de soudage se répartit sur toute la circonférence et suit les soudeurs. Ici, les fuites suivaient la gravité. L'absence de corrélation avec les soudeurs a pesé autant que la corrélation avec le point bas : c'est elle qui permettait de dire au maître d'ouvrage que la requalification ne servirait à rien.

## L'eau, que personne n'avait analysée

On examine volontiers le métal et on oublie le fluide. À la mise en service d'une unité de traitement d'eau, nous avons vu un réseau inox rempli d'eau de mer pour l'épreuve parce que l'eau douce manquait sur le site ; les premières piqûres sont apparues avant la fin de la garantie. La qualité de l'eau d'épreuve se spécifie, et elle se contrôle avant le remplissage. Ici, les analyses de l'eau de forage, comparées à la base de conception, montraient une eau modérément minéralisée mais agressive pour un inox placé dans de mauvaises conditions :

- **chlorures de l'ordre de 200 à 500 mg/l** selon les campagnes, sulfates du même ordre, conductivité autour de 1 500 µS/cm ;
- **fer dissous proche de 1 mg/l**, signe d'un apport de produits de corrosion par des équipements en acier au carbone situés en amont ;
- un pH porté localement au-delà de 9 par l'injection d'hypochlorite de la chloration.

Un repère permet de situer le matériau. L'indice de résistance aux piqûres (PREN = %Cr + 3,3 × %Mo + 16 × %N) d'un 316L se situe autour de 24. C'est suffisant pour une eau chlorurée qui circule à température modérée. La marge devient faible sous un dépôt, en eau stagnante, à 40 ou 50 °C en été. L'essai ASTM G48 permet de comparer les nuances sur ce critère quand un changement de matériau est envisagé.

## Ce que le laboratoire a confirmé

Les tronçons prélevés ont été examinés en laboratoire. La composition du tube, de la bride et du métal fondu correspondait à un 316L. La microstructure de la soudure était saine : pas de grossissement de grain anormal, pas de corrosion intergranulaire, quelques micro-porosités sans incidence.

Les piqûres se trouvaient dans le métal de base et en bordure de la zone fondue, **jamais dans le cordon**. Leur forme était caverneuse : ouverture étroite en surface, cavité élargie en profondeur. Des carbures de chrome apparaissaient localement dans les zones affectées, cohérents avec un appauvrissement superficiel en chrome.

![Piqûres en partie basse de la paroi intérieure](/assets/blog/inox-316l-piqures-macro.jpg)
*Figure 1. Paroi intérieure en partie basse : piqûres dispersées dans le métal de base, à proximité de la soudure.*

![Piqûres en bordure de la zone affectée thermiquement](/assets/blog/inox-316l-piqures-zat.jpg)
*Figure 2. Piqûres dans le métal de base et en bordure de la zone affectée thermiquement. Le cordon est intact.*

![Micrographie de la zone fondue](/assets/blog/inox-316l-micrographie-soudure.jpg)
*Figure 3. Micrographie de la zone fondue après attaque électrolytique : structure de solidification saine.*

Le laboratoire intervient à ce stade pour confirmer une hypothèse déjà orientée par les données. Envoyer des échantillons sans question précise produit un rapport de composition chimique conforme, et rien de plus. Lors d'une expertise sur une tuyauterie de condensats, le maître d'ouvrage avait expédié un tronçon au laboratoire avec pour seule consigne « analyser la fuite » ; le rapport confirmait la nuance et concluait à « une corrosion localisée », ce que tout le monde savait déjà. La demande d'essai doit nommer les mécanismes à départager et les examens qui les séparent.

## Hypothèses et preuves, côte à côte

Nous présentons toujours la conclusion sous cette forme au maître d'ouvrage. Chaque hypothèse est écrite avec ce qui l'aurait confirmée, puis confrontée à ce qui a été observé.

| Hypothèse | Ce qui l'aurait confirmée | Ce qui a été observé | Verdict |
|---|---|---|---|
| Défaut de soudage ou soudeurs non qualifiés | Défaillances liées aux soudeurs, aux rejets CND, au cordon | Aucune corrélation ; cordons sains | Écartée comme cause première |
| Eau d'épreuve contaminée | Eau d'épreuve chargée en chlorures ou en fer | Eau déminéralisée selon les enregistrements | Peu probable |
| Stagnation et dépôts au point bas | Fuites en partie basse des tronçons horizontaux | Plus de 90 % des cas | **Confirmée** |
| Chlorures et chimie de l'eau | Milieu chloruré, pH perturbé | Chlorures élevés, pH modifié par la chloration | **Facteur aggravant** |
| Corrosion d'origine microbiologique | Dépôts, eau stagnante, fer dissous | Conditions réunies, analyse bactériologique à faire | Plausible comme amorçage |

Le tableau sert aussi à dire ce qui reste incertain. Ici, l'origine microbiologique n'était pas démontrée. Nous l'avons écrit, et recommandé l'analyse bactériologique avant de choisir un traitement de désinfection.

## Le mécanisme : stagnation, confinement, caverne

Après les essais et pendant les arrêts, l'eau reste dans les points bas. Les particules, dont les oxydes de fer venus de l'amont, sédimentent en partie basse. La surépaisseur intérieure du cordon forme un petit barrage qui retient les dépôts juste à côté de la soudure.

Sous le dépôt, le milieu se confine. L'oxygène s'épuise, les chlorures migrent et s'accumulent, le pH baisse, et le film passif cède. Des bactéries peuvent accélérer cet amorçage. Faute de repassivation, la piqûre s'approfondit sous la surface jusqu'au percement. La zone voisine de la soudure cède en premier parce que la coloration thermique et l'appauvrissement en chrome dû au soudage réduisent sa résistance lorsque la surface n'a pas été décapée et repassivée.

![Schéma du mécanisme de corrosion sous dépôt](/assets/blog/inox-316l-mecanisme-sous-depot.svg)
*Figure 4. Mécanisme retenu : stagnation, dépôt retenu par le bourrelet de soudure, confinement et piqûre en caverne.*

La cause traversait plusieurs phases du projet : une conception sans pente, une épreuve suivie d'un séchage insuffisant, une préservation non surveillée, une mise en service intermittente. Aucune équipe n'avait commis de faute grave prise isolément. Aucune modification des modes opératoires de soudage n'était nécessaire.

La coloration thermique mérite un mot à part. Sur un chantier de tuyauteries pharmaceutiques, l'inspecteur du client refusait les cordons dont l'envers tirait sur le bleu ; l'entreprise jugeait l'exigence excessive pour de l'eau. Le même réseau, rempli d'eau chlorée pour la désinfection, a piqué le long des soudures les plus colorées. Lorsque le fluide contient des chlorures, la référence de coloration acceptée (AWS D18.2) et le traitement de surface après soudage font partie de la spécification, pas de la négociation de chantier.

## Ce que nous avons recommandé

Les mesures ont été classées par phase, pour qu'elles remontent dans les spécifications et les plans d'inspection des projets suivants.

| Phase | Mesure | Preuve à exiger |
|---|---|---|
| Conception | Pente des lignes, purges aux points bas, bras morts limités | Isométriques avec pentes et purges cotées |
| Fabrication | Protection gazeuse envers, maîtrise de la pénétration et de la coloration thermique ; décapage et passivation si le milieu l'exige (ASTM A380, A967) | Enregistrements de soudage, référence de coloration acceptée (AWS D18.2), rapport de passivation |
| Épreuve | Eau de qualité contrôlée, teneur en chlorures fixée par la spécification ; vidange et séchage sans délai | Analyse de l'eau d'épreuve, enregistrement de vidange et de séchage signé |
| Préservation | Réseau inox jamais laissé plein d'eau à l'arrêt ; rinçage et séchage avant tout arrêt prolongé | Rondes de préservation avec date et état constaté |
| Exploitation | Filtration des particules en amont, dosage de chloration maîtrisé et suivi du pH ; désinfection UV ou thermique si la contamination bactérienne est confirmée | Suivi analytique de l'eau |
| Matériau | Si ces mesures ne suffisent pas, comparer une nuance plus résistante (duplex par exemple) au coût des arrêts répétés | Étude coût sur la durée de vie |

Le séchage après épreuve mérite un point d'arrêt à lui seul dans le plan d'inspection et d'essais. C'est l'étape la plus souvent sautée quand le planning se tend, et la seule qui aurait empêché la stagnation dans ce cas. Sur un projet de centrale, un collecteur inox épreuvé en fin d'année est resté plein jusqu'à la reprise des travaux, plusieurs mois plus tard, parce que la vidange n'était inscrite nulle part et que l'équipe d'essais avait été démobilisée. Le point d'arrêt « vidangé et séché » doit être signé par la personne qui reste sur le site, pas par celle qui part.

## Avant la vidange de la prochaine épreuve

Sur un réseau inox en eau chlorurée, nous demandons désormais trois documents avant de signer la fin des essais : l'analyse de l'eau d'épreuve, l'enregistrement de vidange et de séchage, et le programme de préservation jusqu'à la mise en service. Si une fuite apparaît malgré tout, la première étape reste la même : répartir les défaillances par soudeur, par position et par fluide à partir des enregistrements qualité existants, avant de commander la moindre réparation.

## Références utiles

- API RP 571, *Damage Mechanisms Affecting Fixed Equipment in the Refining Industry* (piqûres par chlorures, corrosion microbiologique).
- ASTM A380/A380M, *Cleaning, Descaling, and Passivation of Stainless Steel Parts, Equipment, and Systems*.
- ASTM A967/A967M, *Chemical Passivation Treatments for Stainless Steel Parts*.
- AWS D18.2, *Guide to Weld Discoloration Levels on Inside of Austenitic Stainless Steel Tube*.
- ASTM G48, *Pitting and Crevice Corrosion Resistance of Stainless Steels and Related Alloys by Use of Ferric Chloride Solution*.

---

Reindaxia accompagne les maîtres d'ouvrage et les entrepreneurs dans l'analyse des non-conformités et des défaillances, la rédaction des plans d'inspection et d'essais, et la préparation des épreuves et de la mise en service. [Parlons de votre projet](/contact.html?besoin=qualite).
