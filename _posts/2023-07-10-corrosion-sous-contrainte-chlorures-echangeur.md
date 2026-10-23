---
title: "Corrosion sous contrainte par les chlorures : réparer un échangeur sans savoir ce qui l'a tué"
description: "Rebouilleur en 316L dont plus d'une centaine de tubes ont fui : corrosion sous contrainte par les chlorures et erreurs à éviter en réparation."
category: Retour d'expérience
image: /assets/blog/echangeur-carte-tubes-defectueux.jpg
image_alt: "Carte de la plaque tubulaire montrant les tubes défectueux en partie basse"
keywords: [corrosion sous contrainte, chloride stress corrosion cracking, CSCC, fissuration par les chlorures, acier inoxydable 316L, échangeur de chaleur, rebouilleur, faisceau tubulaire, bouchage de tubes, tube plugging, contrôle par courants de Foucault, métallographie, analyse de défaillance, QA/QC, inspection, Tunisie, Afrique du Nord]
---

Un rebouilleur à faisceau tubulaire en acier inoxydable 316L est arrêté après des fuites répétées. En atelier, les essais d'étanchéité tube par tube trouvent plus d'une centaine de tubes percés. On retient d'emblée une corrosion sous contrainte par les chlorures et l'on commence à boucher les tubes. Ce retour d'expérience anonyme décrit ce que l'équipe qualité a demandé avant de réparer : confirmer le mécanisme, utiliser des matériaux de réparation au moins équivalents, traiter la cause. Il rappelle aussi les conditions de la fissuration par les chlorures.

## 1. Un atelier, un faisceau, cent tubes

L'échangeur est arrivé à l'atelier sur une remorque, faisceau extrait. Sur la plaque tubulaire, des dizaines de repères à la peinture : chaque marque est un tube qui n'a pas tenu l'essai pneumatique. Au total, plus d'une centaine. Dans un coin de l'atelier, un tour usine déjà des bouchons en inox ; un mode opératoire de soudage a été qualifié pour les fixer, et la réparation doit durer une dizaine de jours. L'installation attend son équipement.

![Faisceau tubulaire extrait en atelier](/assets/blog/echangeur-faisceau-atelier.jpg)
*Figure 1. Le faisceau extrait, en atelier, pendant l'inspection.*

L'ingénieur qualité qui arrive à ce stade pose une question simple : **qu'est-ce qui a percé ces tubes ?** On lui répond « corrosion sous contrainte par les chlorures ». C'est probable. Mais personne ne l'a vérifié : le programme d'inspection, décidé avant son intervention, se limitait à l'examen visuel, au ressuage et à l'essai d'étanchéité. Aucun échantillon n'a été prélevé pour un examen métallographique. Le diagnostic est une hypothèse, et la réparation est déjà en cours.

Un document disponible donnait pourtant un indice précieux : la carte des tubes défectueux. Presque tous se trouvent dans la **moitié inférieure** du faisceau. Un défaut de fabrication aurait touché des tubes au hasard. Cette répartition désigne une zone où le fluide séjourne, se concentre ou change de phase.

![Carte de la plaque tubulaire avec les tubes défectueux](/assets/blog/echangeur-carte-tubes-defectueux.jpg)
*Figure 2. Carte de la plaque tubulaire : en rouge, les tubes non étanches, concentrés dans la moitié inférieure.*

## 2. Pourquoi la question compte

Boucher un tube, c'est le retirer du service. La réparation est rapide, éprouvée, et souvent la bonne décision à court terme. Elle a cependant trois limites :

- **elle ne traite pas la cause.** Si le mécanisme est toujours actif, d'autres tubes suivront, et le nombre de tubes bouchés augmentera à chaque arrêt ;
- **elle réduit la surface d'échange.** Au-delà d'une certaine proportion de tubes bouchés, souvent de l'ordre de 10 % selon le dimensionnement, la performance thermique et les vitesses dans les tubes restants doivent être recalculées ;
- **elle engage les choix suivants.** Remplacer le faisceau à l'identique, changer de nuance, modifier l'exploitation : chacune de ces décisions suppose de connaître le mécanisme.

Or plusieurs mécanismes peuvent percer un tube d'inox de 1,65 mm : corrosion par piqûres ou caverneuse, corrosion sous contrainte, fatigue par vibration, érosion en entrée de tube, défaut de dudgeonnage, corrosion sous dépôts. Leurs remèdes sont différents.

![Tubes bouchés sur la plaque tubulaire](/assets/blog/echangeur-tubes-bouches.jpg)
*Figure 3. Tubes bouchés et soudés sur la plaque tubulaire.*

## 3. La corrosion sous contrainte par les chlorures

La corrosion sous contrainte (en anglais *chloride stress corrosion cracking*, CSCC) est une fissuration fragile d'un métal pourtant ductile. Pour les aciers inoxydables austénitiques des séries 304 et 316, elle exige la réunion simultanée de trois conditions :

| Condition | Dans un échangeur |
|---|---|
| **Contrainte de traction** | Contraintes résiduelles de dudgeonnage des tubes dans la plaque, de soudage, de cintrage ; contraintes thermiques ; pression |
| **Milieu chloruré** | Chlorures dans l'eau, le fluide procédé ou l'isolation ; quelques ppm suffisent s'ils se concentrent |
| **Température** | Risque marqué au-delà d'environ 60 °C, d'autant plus que la température monte |

Le point dangereux est la **concentration**. Une eau ou un fluide faiblement chloruré peut devenir agressif là où il s'évapore, sous les dépôts, dans les zones mortes, aux interfaces entre phase liquide et phase vapeur. Un rebouilleur réunit toutes ces conditions.

Trois caractéristiques permettent de la reconnaître :

- des fissures **ramifiées**, en « branches d'arbre », le plus souvent **transgranulaires**, visibles en coupe métallographique ;
- une propagation sans perte d'épaisseur visible : le tube semble sain, puis fuit ;
- une localisation dans les zones chaudes et contraintes : près de la plaque tubulaire, aux cintres, sous les dépôts.

Un point souvent mal compris : le molybdène du 316L améliore la résistance aux piqûres, **pas** la résistance à la corrosion sous contrainte. Un 316L n'est pas sensiblement plus résistant qu'un 304L à la fissuration par les chlorures. Les nuances réellement plus résistantes sont les duplex (2205), les super-duplex, les super-austénitiques à 6 % de molybdène et les alliages à forte teneur en nickel.

## 4. Ce que l'équipe qualité a demandé

À partir de ces éléments, trois demandes ont été formulées au maître d'ouvrage et au réparateur.

### 4.1 Confirmer le mécanisme

Prélever quelques tubes représentatifs, dont un tube fuyard et un tube voisin apparemment sain, pour :

- un **examen métallographique** en coupe, qui distingue sans ambiguïté une fissure ramifiée de corrosion sous contrainte d'une piqûre, d'une fissure de fatigue ou d'un amincissement par érosion ;
- une **analyse chimique** du tube, pour vérifier la nuance réellement livrée ;
- une **analyse des dépôts** internes et externes, pour y doser les chlorures.

Compléter, si possible, par un **contrôle par courants de Foucault** de l'ensemble des tubes restants : l'essai d'étanchéité ne détecte que les tubes déjà percés, pas ceux qui sont fissurés à mi-épaisseur.

### 4.2 Vérifier les matériaux de la réparation

Le dossier de soudage associait des bouchons en 304L à des tubes en 316L, avec un métal d'apport de nuance 316. Le soudage est techniquement correct, mais le bouchon en 304L, sans molybdène, est moins résistant à la corrosion par piqûres que le tube qu'il ferme.

![Bouchon usiné présenté devant la plaque tubulaire](/assets/blog/echangeur-bouchon-usine.jpg)
*Figure 4. Bouchon usiné avant soudage : sa nuance doit être au moins équivalente à celle du tube.*
 Dans un milieu chloruré, la règle prudente est simple : **le matériau de réparation doit être au moins équivalent au matériau d'origine**, et si possible meilleur lorsque le mécanisme est lié au milieu.

Le même dossier mérite d'autres vérifications de routine : validité des qualifications des soudeurs à la date des travaux, cohérence entre le mode opératoire et les épaisseurs réelles, contrôle par ressuage des soudures de bouchon, épreuve du faisceau après réparation.

![Les trois conditions de la corrosion sous contrainte](/assets/blog/cscc-trois-conditions-echangeur.svg)
*Figure 5. Les trois conditions simultanées de la corrosion sous contrainte par les chlorures, et la zone critique d'un faisceau près de la plaque tubulaire.*

### 4.3 Traiter la cause

Si le mécanisme est confirmé, le bouchage n'est qu'une mesure temporaire. La cause se traite d'un ou plusieurs côtés :

- **le milieu** : réduire la teneur en chlorures du fluide, éviter les zones d'évaporation et de concentration, nettoyer les dépôts ;
- **la température** : vérifier si le régime réel dépasse les hypothèses de conception ;
- **les contraintes** : contrôler le dudgeonnage, éviter le sur-dudgeonnage ;
- **le matériau** : pour le faisceau de remplacement, comparer une nuance duplex ou super-austénitique au coût des arrêts répétés.

## 5. Pourquoi ces demandes sont souvent difficiles à obtenir

Sur le terrain, l'ingénieur qualité qui demande des prélèvements destructifs se heurte presque toujours aux mêmes objections : le programme d'inspection est déjà arrêté, l'installation attend l'équipement, les tubes sont de toute façon à boucher. Ces objections sont compréhensibles. Elles ont pourtant un coût caché : sans diagnostic confirmé, le faisceau de remplacement sera commandé dans la même nuance, et rien n'empêchera ses tubes de fissurer dans la même zone.

La réponse tient en une proposition pragmatique : **réparer et comprendre en parallèle**. Prélever trois ou quatre tubes ne retarde pas le bouchage des autres ; l'examen de laboratoire prend quelques jours ; ses conclusions servent à la décision suivante, qui est la plus coûteuse.

## 6. Avant de boucher le prochain faisceau

« Corrosion sous contrainte » restait ici une hypothèse plausible, que seule une coupe métallographique pouvait confirmer. Tant que ce n'est pas fait, tout ce qui suit, du choix du bouchon à la nuance du faisceau de remplacement, repose sur une supposition.

Les objectifs d'une inspection se fixent avant son programme. Dans ce dossier, la liste des contrôles avait été arrêtée avant que quiconque ait formulé la question à laquelle ils devaient répondre. Un essai d'étanchéité trouve les tubes percés ; il ne dit rien de ceux qui sont fissurés à mi-épaisseur, ni de la cause. Les courants de Foucault et le laboratoire répondent à d'autres questions, qu'il faut poser au bon moment.

L'ingénieur qualité doit être associé dès l'arrêt de l'équipement, avant que le programme soit figé. Il peut alors proposer de **réparer et comprendre en parallèle** : prélever quelques tubes représentatifs avant de tout boucher, contrôler le dossier de réparation avec la même rigueur qu'un dossier de fabrication, vérifier que le matériau de réparation vaut au moins celui d'origine.

Il faut enfin compter. Le nombre de tubes bouchés, leur position et leur évolution d'un arrêt à l'autre disent si le mécanisme est toujours actif et si l'échangeur approche de ses limites de dimensionnement. Ici, la carte montrait déjà les tubes défectueux groupés dans la moitié inférieure du faisceau.

## 7. Le prix d’une question non posée

Dans cette histoire, la réparation était nécessaire et bien exécutée. La question *qu'est-ce qui a tué ces tubes ?* n'a été posée qu'après l'arrêt du programme d'inspection. Pour y répondre, il fallait prélever quelques tubes et attendre quelques jours de laboratoire. Sans réponse, le choix de la nuance du prochain faisceau se fait à l'aveugle, et un second faisceau peut fuir comme le premier.

## Références utiles

- API RP 571, *Damage Mechanisms Affecting Fixed Equipment in the Refining Industry* (fissuration par les chlorures, corrosion sous dépôts).
- API RP 579-1 / ASME FFS-1, *Fitness-For-Service*.
- NACE MR0175 / ISO 15156, *Petroleum and natural gas industries — Materials for use in H2S-containing environments* (limites d'emploi des inox en milieu chloruré et soufré).
- ASTM E426, *Electromagnetic (Eddy Current) Examination of Seamless and Welded Tubular Products, Titanium, Austenitic Stainless Steel and Similar Alloys*.
- ASME Section IX, *Welding, Brazing, and Fusing Qualifications*.

---

Reindaxia assiste les maîtres d'ouvrage et les exploitants lors des arrêts, des inspections d'équipements et des réparations : définition des contrôles, revue des dossiers de réparation, analyse des défaillances et spécification des remplacements. [Parlons de votre installation](/contact.html?besoin=inspection).
