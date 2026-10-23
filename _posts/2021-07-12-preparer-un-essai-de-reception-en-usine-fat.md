---
title: "Essai de réception en usine (FAT) : ce qui se joue avant de signer le procès-verbal"
description: "Préparer, témoigner et clôturer une FAT : procédure approuvée, critères chiffrés, instruments étalonnés, interfaces, réserves et dossier avant libération."
category: Inspection et FAT
keywords: [FAT, essai de réception en usine, factory acceptance test, SAT, essai de réception sur site, IEC 62381, essais individuels, routine tests, IEC 62271-200, IEC 60076-1, ISO 9906, API 610, inspection d'équipements, inspection tierce partie, ISO/IEC 17020, ITP, plan d'inspection et d'essais, étalonnage, ISO/IEC 17025, liste de réserves, note de libération, release note, SCADA, relais de protection, IEC 61850, postes préfabriqués, réception d'équipements, Tunisie, Afrique du Nord, Afrique]
---

L'essai de réception en usine (FAT, *Factory Acceptance Test*) est la dernière occasion de corriger un défaut à moindre coût. Après l'expédition, chaque reprise se fait sur site, loin de l'atelier, des pièces de rechange et des spécialistes du fournisseur. Beaucoup de FAT se résument pourtant à une visite et à une signature. Voici ce que nous vérifions pour le compte de l'acheteur, et les défauts que nous avons vus quitter l'usine faute de l'avoir fait.

## Dix-huit postes, deux technologies

Un lot de postes de transformation préfabriqués venait de passer sa FAT. Le procès-verbal était signé, les réserves mineures notées, l'expédition programmée. C'est en relisant le rapport, quelques jours plus tard, qu'un ingénieur de l'acheteur a remarqué un détail : la moitié des postes étaient équipés de cellules moyenne tension à isolement dans l'air, comme le prévoyait le dossier technique ; l'autre moitié, de cellules à isolement au SF6.

Le fournisseur avait proposé cette variante en cours de fabrication, pour des raisons d'approvisionnement. Personne ne l'avait formellement acceptée. Personne, non plus, ne l'avait vue pendant l'essai : la délégation qui s'était rendue à l'usine ne comptait aucun spécialiste de l'appareillage moyenne tension. Le client final a émis des observations, l'acceptation a été retardée de plusieurs semaines, et la discussion contractuelle a duré bien plus longtemps.

La variante était peut-être acceptable. Mais personne ne l'avait demandée ni acceptée par écrit, et le témoin n'a pas vu que les cellules présentées n'étaient pas celles de la commande.

## Ce qu'est une FAT, et ce qu'elle n'est pas

La FAT est un ensemble d'essais réalisés chez le fabricant, en présence de l'acheteur ou de son représentant, pour démontrer que l'équipement est conforme au contrat avant son expédition. Elle s'inscrit dans une chaîne plus longue :

| Étape | Lieu | Objet |
|---|---|---|
| Essais de type | Laboratoire ou usine | Qualification d'un modèle, une fois pour toutes, selon la norme de produit |
| Essais individuels (*routine tests*) | Usine | Contrôles exigés par la norme sur chaque unité produite |
| FAT | Usine | Démonstration de la conformité au contrat de l'unité livrée, dans sa configuration réelle |
| Essais d'intégration (SIT) | Site | Fonctionnement avec les autres systèmes |
| Essais de réception sur site (SAT) | Site | Fonctionnement dans l'installation définitive |

La norme IEC 62381, consacrée aux systèmes d'automatisme des industries de procédé, décrit cette articulation entre FAT, essais d'intégration et SAT. Les normes de produit fixent les essais individuels : IEC 62271-200 pour l'appareillage moyenne tension sous enveloppe métallique, IEC 60076-1 pour les transformateurs de puissance, ISO 9906 ou API 610 pour les pompes centrifuges, par exemple.

La FAT ne remplace aucune de ces étapes. Elle ne qualifie pas un modèle et ne rattrape pas une fabrication mal contrôlée. Elle vérifie le matériel commandé contre la spécification du contrat, pas contre le catalogue du fabricant.

![Croquis de la chaîne d'essais et de la libération](/assets/blog/fat-chaine-essais.svg)
*Figure 1. Où se place la FAT entre les essais de type et la réception sur site, et ce qui doit être réuni avant de libérer l'équipement.*

## Avant l'essai

### Une procédure approuvée

La procédure de FAT est soumise par le fournisseur et approuvée par l'acheteur **avant** la date de l'essai. Elle décrit chaque essai, sa séquence, les instruments, les conditions (charge, fluide, température), les critères d'acceptation et les formulaires d'enregistrement. Un essai mené sur une procédure non approuvée se termine presque toujours par une discussion sur ce qui aurait dû être testé.

### Des critères chiffrés

« Fonctionnement correct » n'est pas un critère. Chaque essai renvoie à une valeur ou à une tolérance tirée de la spécification, de la fiche technique ou de la norme : débit et hauteur aux points garantis avec leurs tolérances, niveau vibratoire, résistance d'isolement, tenue diélectrique, temps de manœuvre, temps de réponse d'une boucle. Quand le contrat est muet, la norme de produit fournit souvent la référence.

### Un plan d'inspection et d'essais respecté

La FAT est l'aboutissement d'un plan d'inspection et d'essais (ITP). Les points d'arrêt et de témoin en amont, contrôle des matières, soudage, contrôles non destructifs, épreuves, doivent avoir été réalisés et documentés. Une FAT réussie sur un équipement dont la fabrication n'a pas été suivie ne prouve que ce qu'elle a mesuré.

### Les modifications closes

Toute variante proposée par le fournisseur, matériau, composant, configuration, doit avoir fait l'objet d'une demande écrite et d'une acceptation formelle avant l'essai. Pendant la FAT, on vérifie alors que la configuration testée est bien celle qui a été acceptée.

### Les bonnes personnes

C'est la leçon de nos dix-huit postes. La délégation de l'acheteur doit compter au moins une personne compétente pour **chaque technologie critique** de l'équipement : appareillage, protection, automatisme, mécanique tournante. Les représentants sont désignés à l'avance, leur disponibilité est confirmée, et ils ont lu la procédure.

## Pendant l'essai

### Des instruments étalonnés

Chaque instrument de mesure utilisé pendant l'essai doit être couvert par un certificat d'étalonnage en cours de validité, dont le numéro de série correspond à l'appareil présent sur le banc. Les étalonnages réalisés par un laboratoire accrédité selon ISO/IEC 17025 offrent la meilleure traçabilité. Un résultat obtenu avec un instrument non étalonné n'a pas de valeur contractuelle.

### La configuration réelle

L'équipement testé est celui qui sera livré : bonnes plaques signalétiques, bons composants, bonne version de logiciel, bon paramétrage des protections. Pour un skid ou un package, les essais couvrent les séquences de commande et les sécurités, pas seulement les composants isolés.

### Les interfaces et les communications

Les défauts les plus coûteux que nous voyons se trouvent aux interfaces. Sur un projet de réseau électrique, un relais de protection ne communiquait pas avec le système de supervision ; le défaut n'a été découvert qu'à la mise en service, et l'intégration du poste a été bloquée. Sur un autre, le câblage de l'armoire de régulation de deux batteries de condensateurs était erroné, rendant la compensation inopérante ; l'assistance du fournisseur avait été faite à distance, sans essai fonctionnel complet en usine.

Dans les deux cas, la vérification aurait pris quelques heures sur le banc. Nous demandons désormais que la FAT inclue, chaque fois que c'est possible, un essai de communication avec une maquette ou un simulateur du système de supervision, dans le protocole retenu pour le projet (IEC 61850, Modbus ou autre), et un essai fonctionnel de chaque séquence de régulation sur des scénarios définis à l'avance.

### Les observations consignées sur place

Chaque écart est noté au moment où il est constaté, avec photo et référence de l'essai, et relu avec le fournisseur avant la fin de la journée. Un écart signalé de mémoire après le départ de l'usine se discute sans photo ni référence d'essai.

## Après l'essai

### Des réserves classées

Chaque écart entre dans une liste de réserves, avec un responsable et une échéance, et un classement selon son effet :

- **à lever avant expédition** : l'équipement ne part pas tant que la réserve n'est pas levée et, si nécessaire, l'essai repris ;
- **à lever sur site** : la correction peut attendre l'installation sans risque pour la sécurité ni la performance, et la responsabilité de la levée est clairement attribuée.

### La documentation, les logiciels et les licences

Nous avons vu une mise en service bloquée parce que les manuels d'installation et les logiciels nécessaires au raccordement des équipements de communication n'avaient été ni demandés au fournisseur, ni transmis à l'équipe de site. Le contrat de fourniture doit exiger la livraison des manuels, des logiciels de configuration, des licences et des fichiers de paramétrage ; la FAT est le moment de vérifier qu'ils existent et qu'ils correspondent à la version testée.

### La formation

Les équipements spécifiques, onduleurs, enregistreurs de données, automates, relais numériques, demandent une prise en main. Organiser la formation pendant la FAT, sur l'équipement réel et avec les spécialistes du fabricant, coûte peu. La repousser à la mise en service, et la faire à distance, expose à des erreurs d'exploitation dès les premiers jours.

### L'emballage et l'expédition

Un équipement conforme en usine peut arriver endommagé : portes de cellules déformées, afficheurs cassés, humidité dans les armoires. Les exigences d'emballage, de protection et de manutention doivent figurer dans le contrat, et leur respect être vérifié avant le départ, au même titre que les essais.

### Un dossier complet avant la libération

Le procès-verbal signé ne suffit pas. Avant d'émettre la note de libération, l'acheteur doit disposer du dossier de fabrication : certificats matière, rapports de contrôle et d'essais, certificats d'étalonnage, liste des réserves à jour, déclarations de conformité réglementaire le cas échéant. Une fois la note de libération signée, les réserves non levées partent avec le matériel.

## Et les équipements qui n'ont pas de FAT ?

Beaucoup d'entreprises ne prévoient de FAT que pour les équipements où le client l'exige. Pour le reste, l'équipement arrive sur site sans contrôle préalable. Nous avons vu des câbles souples livrés à la place de câbles armés, découverts à la réception des travaux, et des batteries défectueuses découvertes une fois posées.

Plutôt que de multiplier les FAT, nous proposons un **plan de contrôle fournisseur** proportionné au risque : FAT témoignée pour les équipements critiques, revue documentaire et rapports d'essais du fabricant pour les autres, vérification des fiches techniques contre le contrat avant commande, contrôle à réception avant toute pose. Le contrôle final sur site est le maillon le plus tardif, et donc le plus cher.

## Liste de contrôle d'une FAT

| Avant l'essai | Pendant l'essai | Après l'essai |
|---|---|---|
| Procédure approuvée, critères chiffrés | Instruments étalonnés et tracés | Réserves classées et suivies |
| ITP réalisé, modifications acceptées par écrit | Configuration réelle, logiciel et paramétrage | Documentation, logiciels et licences vérifiés |
| Témoins compétents pour chaque technologie | Interfaces et communications testées | Formation réalisée sur l'équipement réel |
| Plan de contrôle pour les équipements sans FAT | Écarts consignés sur place | Emballage contrôlé, dossier complet avant libération |

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
