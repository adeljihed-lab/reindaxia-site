---
title: "Analyse de défaillance : quand l'inox 316L fuit aux soudures, la soudure n'est pas toujours coupable"
description: "Fuites aux soudures d'un réseau d'eau en inox 316L : méthode d'analyse de défaillance, corrosion sous dépôts et recommandations pour les équipes qualité."
category: Retour d'expérience
image: /assets/blog/inox-316l-piqures-macro.jpg
image_alt: "Piqûres de corrosion sur la paroi intérieure d'un tube en inox 316L"
keywords: [analyse de défaillance, failure analysis, analyse des causes, root cause analysis, corrosion, acier inoxydable 316L, corrosion par piqûres, chlorures, corrosion caverneuse, MIC, corrosion microbiologique, épreuve hydraulique, préservation, QA/QC, inspection soudage, mise en service, Tunisie, Afrique du Nord]
---

Quelques mois après la mise en service d'une installation industrielle, des fuites apparaissent sur un réseau d'eau en acier inoxydable 316L, toutes au droit de soudures bout à bout. Le diagnostic spontané, « mauvaise soudure », conduit à requalifier les soudeurs et à refaire les joints. Les données racontent autre chose : la position des fuites, la chimie de l'eau et l'historique d'exploitation désignent une corrosion localisée amorcée sous dépôts, dans de l'eau stagnante chargée en chlorures. Nous décrivons ici la démarche suivie, les mécanismes en jeu, les recommandations et les enseignements que nous en avons tirés pour les équipes qualité des projets et des sites industriels. Le cas est présenté de façon anonyme ; il est représentatif de situations que nous avons rencontrées sur des installations de production en Afrique du Nord.

## 1. Introduction : « l'inox ne rouille pas »

L'acier inoxydable austénitique 316L est souvent choisi pour les réseaux d'eau industrielle et d'eau potable parce qu'il « ne rouille pas ». Sa résistance repose pourtant sur un film passif de quelques nanomètres, riche en oxyde de chrome, qui se reforme spontanément tant que le milieu le permet. Lorsque ce film est rompu localement et ne peut pas se reconstituer, la corrosion se concentre en un point et progresse en profondeur, parfois jusqu'au percement d'une paroi de 3 mm en quelques mois.

Le piège, c'est de conclure trop vite : la fuite est à la soudure, donc c'est le soudeur. Refaire la soudure fait disparaître la fuite pour un temps, puis le problème revient ailleurs et le coût s'accumule. L'analyse de défaillance cherche d'abord les données qui permettent de trancher entre les hypothèses.

## 2. Le cas : description de la défaillance

Les observations initiales étaient les suivantes :

- un réseau d'eau d'utilité en tubes 316L de faible épaisseur, alimenté par de l'eau de forage, mis en service puis exploité de façon intermittente ;
- près d'une centaine de joints soudés présentant des suintements ou des fuites, tous des **soudures bout à bout** ;
- des traces de corrosion visibles à l'œil nu, et quelques joints jugés à reprendre après contrôle radiographique et ressuage ;
- un réseau voisin, de même matériau mais véhiculant un autre fluide, quasiment épargné.

Trois hypothèses dominaient les premières réunions : la qualification des soudeurs, une contamination bactérienne, et l'effet des produits injectés dans l'eau (chloration).

## 3. Méthode : de l'intuition à la preuve

La démarche a suivi cinq étapes classiques de l'analyse des causes, adaptées au contexte d'un site en exploitation.

### 3.1 Collecter avant d'interpréter

Les données exploitables existaient déjà dans le dossier qualité du projet : base de données des soudures, qualifications des modes opératoires (WPS/PQR) et des soudeurs, rapports de contrôles non destructifs, isométriques, schémas de procédé, enregistrements des épreuves hydrauliques. Le premier travail a consisté à rattacher chaque fuite à son joint, et chaque joint à son historique.

### 3.2 Stratifier les défaillances

Chaque fuite a ensuite été classée selon une quinzaine de critères. Les résultats les plus parlants :

| Critère de répartition | Constat | Conclusion |
|---|---|---|
| Par soudeur ou équipe | Aucun soudeur au taux de défaillance anormal | La compétence individuelle n'explique pas le phénomène |
| Atelier / chantier | Répartition proportionnelle au volume soudé | Pas de lien avec le lieu de soudage |
| Joints réparés ou ressoudés | Une minorité a fui, sans lien avec un rejet radiographique initial | La réparation n'est pas un facteur déclenchant |
| Joints radiographiés | Les joints radiographiés avant la fuite étaient conformes | Le défaut n'existait pas à la fabrication |
| Orientation de la tuyauterie | Plus de 90 % des fuites sur tronçons horizontaux | Facteur géométrique fort |
| Position sur la circonférence | Toutes en partie basse, autour de 6 heures | Rôle de l'eau et des dépôts au point bas |
| Fluide véhiculé | Presque toutes sur l'eau d'utilité, très peu sur l'autre réseau | Facteur lié au milieu |

Cette simple stratification a déplacé le problème : une défaillance due au soudage se répartirait sur toute la circonférence et suivrait les soudeurs, pas la gravité.

### 3.3 Caractériser le milieu

Les analyses de l'eau de forage, comparées aux valeurs de la base de conception, ont montré une eau modérément minéralisée mais agressive pour un inox en conditions défavorables : **chlorures de l'ordre de 200 à 500 mg/l** selon les campagnes, sulfates du même ordre, conductivité autour de 1 500 µS/cm, et surtout **fer dissous proche de 1 mg/l**, signe d'un apport de produits de corrosion venant d'équipements en acier au carbone en amont. Des essais simples ont aussi montré que l'ajout d'hypochlorite pour la chloration pouvait porter localement le pH au-delà de 9.

### 3.4 Examiner le métal

Les examens de laboratoire sur tronçons prélevés ont confirmé que :

- la composition chimique du tube, de la bride et du métal fondu correspondait bien à un 316L ;
- la microstructure de la soudure était saine : pas de grossissement de grain anormal, pas de corrosion intergranulaire, quelques micro-porosités sans incidence ;
- la majorité des piqûres se trouvait dans le métal de base et en bordure de la zone fondue, **jamais dans le cordon lui-même**, avec une morphologie caverneuse sous la surface (piqûre étroite en surface, cavité élargie en profondeur) ;
- des carbures de chrome apparaissaient localement dans les zones affectées, cohérents avec un appauvrissement local en chrome.

![Piqûres en partie basse de la paroi intérieure](/assets/blog/inox-316l-piqures-macro.jpg)
*Figure 1. Paroi intérieure en partie basse : piqûres dispersées dans le métal de base, à proximité de la soudure.*

![Piqûres en bordure de la zone affectée thermiquement](/assets/blog/inox-316l-piqures-zat.jpg)
*Figure 2. Piqûres dans le métal de base et en bordure de la zone affectée thermiquement ; le cordon lui-même est intact.*

![Micrographie de la zone fondue](/assets/blog/inox-316l-micrographie-soudure.jpg)
*Figure 3. Micrographie de la zone fondue après attaque électrolytique : structure de solidification saine.*

### 3.5 Confronter les hypothèses aux preuves

| Hypothèse | Ce qui l'aurait confirmée | Ce qui a été observé | Verdict |
|---|---|---|---|
| Défaut de soudage ou soudeurs non qualifiés | Défaillances liées aux soudeurs, aux rejets CND, au cordon | Aucune corrélation ; cordons sains | Écartée comme cause première |
| Eau d'épreuve contaminée | Eau d'épreuve chargée en chlorures ou en fer | Eau d'épreuve déminéralisée selon les enregistrements | Peu probable |
| Stagnation et dépôts au point bas | Fuites en partie basse des tronçons horizontaux | Plus de 90 % des cas | **Confirmée** |
| Chlorures et chimie de l'eau | Milieu chloruré, pH perturbé | Chlorures élevés, pH modifié par la chloration | **Facteur aggravant** |
| Corrosion d'origine microbiologique | Dépôts, eau stagnante, fer dissous | Conditions réunies, à confirmer par analyse bactériologique | Plausible comme amorçage |

## 4. Mécanisme retenu

La cause la plus probable est une **corrosion localisée sous dépôts**, en trois temps :

1. **Stagnation.** Après les essais et pendant les arrêts prolongés, l'eau reste dans les points bas. Les particules, dont les oxydes de fer venus de l'amont, sédimentent en partie basse ; la surépaisseur intérieure du cordon de soudure forme un petit barrage qui retient les dépôts juste à côté de la soudure.
2. **Amorçage.** Sous le dépôt, le milieu se confine : l'oxygène s'épuise, les chlorures migrent et s'accumulent, le pH baisse. Le film passif cède localement. Des bactéries peuvent accélérer ce stade (corrosion d'origine microbiologique).
3. **Propagation.** Faute de repassivation, la piqûre s'approfondit en caverne sous la surface jusqu'au percement. La zone voisine de la soudure est plus sensible : la coloration thermique et l'appauvrissement superficiel en chrome dû au soudage réduisent la résistance locale si la surface n'a pas été décapée et repassivée.

Un repère utile : l'indice de résistance aux piqûres (PREN = %Cr + 3,3 × %Mo + 16 × %N) d'un 316L se situe autour de 24. C'est suffisant pour une eau chlorurée en circulation à température modérée, mais la marge devient faible sous dépôt, en eau stagnante et à 40 ou 50 °C en été.

![Schéma du mécanisme de corrosion sous dépôt](/assets/blog/inox-316l-mecanisme-sous-depot.svg)
*Figure 4. Schéma du mécanisme retenu : stagnation, dépôt retenu par le bourrelet de soudure, confinement et piqûre en caverne.*

## 5. Recommandations issues du cas

- **Conception :** donner une pente aux lignes et prévoir des purges aux points bas ; limiter les bras morts.
- **Fabrication :** maîtriser la pénétration intérieure des cordons et la coloration thermique (protection gazeuse envers), puis décaper et passiver les zones soudées lorsque le milieu l'exige.
- **Essais :** utiliser une eau d'épreuve de qualité contrôlée et documentée, puis **vidanger et sécher** sans délai.
- **Préservation et exploitation :** ne jamais laisser un réseau inox plein d'eau à l'arrêt ; rincer et sécher avant tout arrêt prolongé.
- **Traitement de l'eau :** filtrer les particules en amont, maîtriser le dosage de chloration et son effet sur le pH, et envisager une désinfection par UV ou une montée en température si une contamination bactérienne est confirmée.
- **Matériau :** si ces mesures ne suffisent pas, comparer le coût d'une nuance plus résistante (duplex par exemple) à celui des arrêts et réparations répétés.

Aucune modification des modes opératoires de soudage n'était nécessaire. Requalifier les soudeurs et refaire les joints aurait coûté cher sans traiter la cause.

## 6. Ce que ce cas nous a appris

- **Le lieu de la fuite ne désigne pas sa cause.** Toutes les fuites étaient au droit de soudures bout à bout, et tout poussait à accuser le soudage. Pourtant aucune piqûre ne se trouvait dans le cordon, et aucun soudeur ne présentait un taux de défaillance anormal.
- **Les données étaient déjà dans le dossier qualité.** Base de données des soudures, rapports de contrôle, enregistrements d'épreuve, isométriques : il a suffi de répartir les fuites par soudeur, par date, par lieu de soudage, par orientation, par position sur la circonférence et par fluide. Le point bas à 6 heures est apparu ainsi, et l'absence de lien avec les soudeurs a pesé autant que cette corrélation.
- **Le milieu compte autant que le matériau.** On analyse volontiers le métal et on oublie l'eau. Ici, des chlorures de 200 à 500 mg/l, un fer dissous proche de 1 mg/l, un pH porté au-delà de 9 par la chloration et de longues périodes d'arrêt expliquaient l'essentiel.
- **La cause traversait plusieurs phases.** Une conception sans pente, une épreuve suivie d'un séchage insuffisant, une préservation non surveillée, une mise en service intermittente : aucune équipe, prise isolément, n'avait commis de faute grave, mais l'enchaînement a produit les fuites.
- **Refaire les joints n'aurait rien réglé.** Les fuites auraient disparu pour quelques mois. Les enseignements de ce cas doivent remonter dans les spécifications, les plans d'inspection et les procédures de préservation des projets suivants.

## 7. Ce qui se décide avant la mise en service

Ce type de défaillance est presque toujours évitable. Il se prévient en amont, par des décisions qui relèvent de la qualité du projet : exiger une pente et des purges sur les réseaux inox, fixer la qualité de l'eau d'épreuve, faire du séchage un point d'arrêt du plan d'inspection et d'essais, vérifier la préservation pendant les arrêts entre la fin du montage et la mise en service.

Quand l'incident survient malgré tout, une analyse de défaillance demande de savoir quelles données collecter, comment les croiser, quand faire appel au laboratoire et comment conclure sur des preuves. Sans cela, on lance une campagne de réparations sur les joints qui fuient.

## Références utiles

- API RP 571, *Damage Mechanisms Affecting Fixed Equipment in the Refining Industry* (mécanismes de piqûres par chlorures et de corrosion microbiologique).
- ASTM A380/A380M, *Cleaning, Descaling, and Passivation of Stainless Steel Parts, Equipment, and Systems*.
- ASTM A967/A967M, *Chemical Passivation Treatments for Stainless Steel Parts*.
- AWS D18.2, *Guide to Weld Discoloration Levels on Inside of Austenitic Stainless Steel Tube*.
- ASTM G48, *Pitting and Crevice Corrosion Resistance of Stainless Steels and Related Alloys by Use of Ferric Chloride Solution*.

---

Reindaxia accompagne les maîtres d'ouvrage et les entrepreneurs dans l'analyse des non-conformités et des défaillances, la rédaction des plans d'inspection et d'essais, et la préparation des épreuves et de la mise en service. [Parlons de votre projet](/contact.html?besoin=qualite).
