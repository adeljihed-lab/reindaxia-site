---
title: "FAT : ce que l'acheteur doit avoir vérifié avant de signer la note de libération"
description: "Préparer et témoigner une FAT : procédure approuvée, critères chiffrés, témoins compétents, interfaces testées, réserves classées, dossier complet."
category: Inspection et FAT
keywords: [FAT, essai de réception en usine, factory acceptance test, SAT, essai de réception sur site, IEC 62381, essais individuels, routine tests, IEC 62271-200, IEC 60076-1, ISO 9906, API 610, inspection d'équipements, inspection tierce partie, ISO/IEC 17020, ITP, plan d'inspection et d'essais, étalonnage, ISO/IEC 17025, liste de réserves, note de libération, release note, SCADA, relais de protection, IEC 61850, postes préfabriqués, réception d'équipements, Tunisie, Afrique du Nord, Afrique]
---

Il est dix-sept heures, dernier jour de FAT. Le fournisseur pose le procès-verbal sur la table, le transporteur est réservé pour le lendemain matin et le planning du site attend le matériel. Signer coûte une minute. Refuser coûte un camion, une discussion commerciale et parfois une semaine de retard. La question que se pose alors le représentant de l'acheteur est simple : si un défaut apparaît sur site dans trois mois, pourra-t-il dire qu'il ne pouvait pas le voir ici ?

Cette question se prépare des semaines avant l'essai. Nous la posons à chaque FAT que nous témoignons, et la plupart des défauts que nous avons vus quitter une usine auraient été repérés si l'on y avait répondu à temps.

## Une signature sur des cellules que personne n'avait commandées

Un lot de postes de transformation préfabriqués venait de passer sa FAT, procès-verbal signé, expédition programmée. En relisant le rapport, un ingénieur de l'acheteur a remarqué que la moitié des postes portaient des cellules moyenne tension à isolement au SF6, alors que le dossier technique prévoyait l'isolement dans l'air. Le fournisseur avait proposé cette variante en cours de fabrication pour des raisons d'approvisionnement, sans acceptation écrite. La délégation venue à l'usine ne comptait aucun spécialiste de l'appareillage moyenne tension.

La variante était peut-être acceptable. Mais personne ne l'avait demandée ni acceptée par écrit, et le témoin n'a pas vu que les cellules présentées n'étaient pas celles de la commande. Le client final a émis des observations, l'acceptation a pris plusieurs semaines de retard et la discussion contractuelle a duré bien plus longtemps.

## Ce que la FAT démontre, et ce qu'elle ne démontre pas

La FAT est un ensemble d'essais réalisés chez le fabricant, en présence de l'acheteur ou de son représentant, pour démontrer que l'unité livrée est conforme au contrat avant expédition. Elle occupe une place précise dans une chaîne d'essais :

| Étape | Lieu | Objet |
|---|---|---|
| Essais de type | Laboratoire ou usine | Qualification d'un modèle, une fois pour toutes, selon la norme de produit |
| Essais individuels (*routine tests*) | Usine | Contrôles exigés par la norme sur chaque unité produite |
| FAT | Usine | Démonstration de la conformité au contrat de l'unité livrée, dans sa configuration réelle |
| Essais d'intégration (SIT) | Site | Fonctionnement avec les autres systèmes |
| Essais de réception sur site (SAT) | Site | Fonctionnement dans l'installation définitive |

IEC 62381, consacrée aux systèmes d'automatisme des industries de procédé, décrit l'articulation entre FAT, essais d'intégration et SAT. Les essais individuels viennent des normes de produit : IEC 62271-200 pour l'appareillage moyenne tension sous enveloppe métallique, IEC 60076-1 pour les transformateurs de puissance, ISO 9906 ou API 610 pour les pompes centrifuges.

Un fournisseur qui présente ses rapports d'essais de type à la place d'une FAT confond deux choses. L'essai de type qualifie un modèle. La FAT vérifie le matériel commandé contre la spécification du contrat, pas contre le catalogue du fabricant. Elle ne rattrape pas non plus une fabrication mal suivie : un débit conforme sur le banc ne dit rien d'une soudure qui n'a pas été radiographiée.

![Croquis de la chaîne d'essais et de la libération](/assets/blog/fat-chaine-essais.svg)
*Figure 1. La FAT entre les essais de type et la réception sur site, et ce qu'il faut réunir avant de libérer l'équipement.*

## Les quatre semaines qui précèdent l'essai

La qualité d'une FAT se décide avant le voyage. Nous vérifions cinq points, dans cet ordre.

**La procédure est approuvée.** Le fournisseur la soumet, l'acheteur l'approuve avant la date de l'essai. Elle décrit chaque essai, sa séquence, les instruments, les conditions (charge, fluide, température), les critères d'acceptation et les formulaires. Un essai conduit sur une procédure non approuvée finit presque toujours en discussion sur ce qui aurait dû être testé.

**Les critères sont chiffrés.** « Fonctionnement correct » ne permet ni d'accepter ni de refuser. Chaque essai renvoie à une valeur et à une tolérance : débit et hauteur aux points garantis, niveau vibratoire, résistance d'isolement, tenue diélectrique, temps de manœuvre, temps de réponse d'une boucle. Quand le contrat est muet, la norme de produit fournit souvent la référence.

**L'ITP est soldé en amont.** La FAT est le dernier point d'un plan d'inspection et d'essais. Contrôle des matières, soudage, contrôles non destructifs, épreuves : les points d'arrêt et de témoin doivent être réalisés et documentés avant. Sinon, l'essai ne prouve que ce qu'il a mesuré.

**Les modifications sont closes.** Toute variante du fournisseur (matériau, composant, configuration) passe par une demande écrite et une acceptation formelle avant l'essai. Le jour J, le témoin vérifie que la configuration présentée est celle qui a été acceptée. C'est ce qui a manqué sur les postes préfabriqués.

**La délégation couvre chaque technologie critique.** Appareillage, protection, automatisme, mécanique tournante : il faut au moins une personne compétente par domaine. Les représentants sont désignés à l'avance, leur disponibilité est confirmée et ils ont lu la procédure. Envoyer un seul généraliste sur un package électromécanique revient à témoigner la moitié de l'essai.

## Sur le banc : où se cachent les défauts coûteux

### Instruments et configuration

Chaque instrument du banc est couvert par un certificat d'étalonnage en cours de validité, et son numéro de série correspond à l'appareil présent. Un étalonnage par un laboratoire accrédité selon ISO/IEC 17025 offre la meilleure traçabilité. Un résultat obtenu avec un instrument non étalonné n'a pas de valeur contractuelle.

L'équipement testé est celui qui sera livré : plaques signalétiques, composants, version de logiciel, paramétrage des protections. Pour un skid ou un package, on teste les séquences de commande et les sécurités, pas seulement les composants pris un par un.

### Les interfaces

Les défauts les plus chers que nous voyons sont aux interfaces. Sur un projet de réseau électrique, un relais de protection ne communiquait pas avec le système de supervision ; le défaut est apparu à la mise en service et a bloqué l'intégration du poste. Sur un autre, le câblage de l'armoire de régulation de deux batteries de condensateurs était erroné et la compensation ne fonctionnait pas ; l'assistance du fournisseur avait été faite à distance, sans essai fonctionnel complet en usine.

Dans les deux cas, la vérification aurait pris quelques heures sur le banc, contre plusieurs semaines d'immobilisation sur site. Nous demandons désormais que la FAT comprenne, chaque fois que c'est possible :

- un essai de communication avec une maquette ou un simulateur du système de supervision, dans le protocole retenu pour le projet (IEC 61850, Modbus ou autre) ;
- un essai fonctionnel de chaque séquence de régulation, sur des scénarios écrits à l'avance et joints à la procédure.

### Les écarts consignés le jour même

Chaque écart est noté au moment où il est constaté, avec photo et référence de l'essai, puis relu avec le fournisseur avant la fin de la journée. Un écart signalé de mémoire après le départ de l'usine se discute sans photo ni référence d'essai, et le fournisseur a alors beau jeu de le contester.

## Avant de signer la note de libération

### Classer les réserves

Chaque écart entre dans une liste de réserves, avec un responsable, une échéance et un classement selon son effet :

- **à lever avant expédition** : l'équipement ne part pas tant que la réserve n'est pas levée et, si nécessaire, l'essai repris ;
- **à lever sur site** : la correction peut attendre l'installation sans effet sur la sécurité ni la performance, et la responsabilité de la levée est attribuée par écrit.

Le classement se négocie souvent à dix-sept heures, le dernier jour. Il vaut mieux avoir fixé les critères dans la procédure.

### Vérifier ce qui n'est pas du matériel

Nous avons vu une mise en service bloquée parce que les manuels d'installation et les logiciels de raccordement des équipements de communication n'avaient été ni demandés au fournisseur, ni transmis au site. Le contrat de fourniture doit exiger les manuels, les logiciels de configuration, les licences et les fichiers de paramétrage. La FAT permet de vérifier qu'ils existent et qu'ils correspondent à la version testée.

La formation suit la même logique. Onduleurs, enregistreurs, automates et relais numériques demandent une prise en main. La faire pendant la FAT, sur l'équipement réel avec les spécialistes du fabricant, coûte peu. La renvoyer à la mise en service, à distance, expose à des erreurs d'exploitation dès les premiers jours.

### Contrôler l'emballage

Un équipement conforme en usine peut arriver avec des portes de cellules déformées, des afficheurs cassés ou de l'humidité dans les armoires. Les exigences d'emballage, de protection et de manutention figurent au contrat et se vérifient avant le départ, comme les essais.

### Réunir le dossier

Le procès-verbal signé ne suffit pas. Avant la note de libération, l'acheteur dispose du dossier de fabrication : certificats matière, rapports de contrôle et d'essais, certificats d'étalonnage, liste de réserves à jour, déclarations de conformité réglementaire le cas échéant. Une fois la note de libération signée, les réserves non levées partent avec le matériel.

## Les équipements qui n'ont pas de FAT

Beaucoup d'entreprises ne prévoient de FAT que lorsque le client l'exige. Le reste arrive sur site sans contrôle préalable. Nous avons vu des câbles souples livrés à la place de câbles armés, découverts à la réception des travaux, et des batteries défectueuses découvertes une fois posées.

Plutôt que de multiplier les FAT, nous proposons un **plan de contrôle fournisseur** proportionné au risque : FAT témoignée pour les équipements critiques, revue documentaire et rapports d'essais du fabricant pour les autres, vérification des fiches techniques contre le contrat avant commande, contrôle à réception avant toute pose. Le contrôle final sur site est le plus tardif, donc le plus cher.

## Liste de contrôle à emporter

| Avant l'essai | Pendant l'essai | Avant libération |
|---|---|---|
| Procédure approuvée, critères chiffrés | Instruments étalonnés et tracés | Réserves classées et suivies |
| ITP réalisé, modifications acceptées par écrit | Configuration réelle, logiciel et paramétrage | Documentation, logiciels et licences vérifiés |
| Témoins compétents pour chaque technologie | Interfaces et communications testées | Formation réalisée sur l'équipement réel |
| Plan de contrôle pour les équipements sans FAT | Écarts consignés sur place | Emballage contrôlé, dossier complet |

Si l'un des points de la première colonne manque quinze jours avant la date prévue, nous recommandons de décaler l'essai plutôt que d'y aller : un report d'une semaine coûte moins qu'une FAT à refaire ou qu'une reprise sur site.

## Références

- IEC 62381, *Automation systems in the process industry — Factory acceptance test (FAT), site acceptance test (SAT), and site integration test (SIT)*.
- IEC 62271-200, *High-voltage switchgear and controlgear — AC metal-enclosed switchgear and controlgear for rated voltages above 1 kV and up to and including 52 kV*.
- IEC 60076-1, *Power transformers — General*.
- ISO 9906, *Rotodynamic pumps — Hydraulic performance acceptance tests*, et API 610, *Centrifugal Pumps for Petroleum, Petrochemical and Natural Gas Industries*.
- IEC 61850 (série), *Communication networks and systems for power utility automation*.
- ISO/IEC 17025, *Exigences générales concernant la compétence des laboratoires d'étalonnages et d'essais*.
- ISO/IEC 17020, *Exigences pour le fonctionnement de différents types d'organismes procédant à l'inspection*.

---

Reindaxia témoigne les essais de réception en usine et sur site pour le compte de l'acheteur, prépare les procédures et les plans de contrôle fournisseurs, en Tunisie, en Afrique du Nord et à l'étranger. [Décrivez-nous votre besoin](/contact.html?besoin=inspection).
