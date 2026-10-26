---
title: "Rebouilleur inox percé : prélever quatre tubes avant d'en boucher cent"
description: "Rebouilleur en 316L aux tubes percés : confirmer la corrosion sous contrainte par les chlorures avant de réparer, et éviter les erreurs de bouchage."
category: Retour d'expérience
image: /assets/blog/echangeur-carte-tubes-defectueux.jpg
image_alt: "Carte de la plaque tubulaire montrant les tubes défectueux en partie basse"
keywords: [corrosion sous contrainte, chloride stress corrosion cracking, CSCC, fissuration par les chlorures, acier inoxydable 316L, échangeur de chaleur, rebouilleur, faisceau tubulaire, bouchage de tubes, tube plugging, contrôle par courants de Foucault, métallographie, analyse de défaillance, QA/QC, inspection, Tunisie, Afrique du Nord]
---

Le faisceau est sur des tréteaux, dans l'atelier du réparateur. Sur la plaque tubulaire, des dizaines de marques à la peinture, une par tube qui n'a pas tenu l'essai pneumatique : plus d'une centaine en tout. Les bouchons en inox sortent du tour, le mode opératoire de soudage est qualifié, le bouchage commence le lendemain et doit durer une dizaine de jours. L'unité attend son rebouilleur. L'ingénieur qualité, appelé à ce stade, demande ce qui a percé les tubes. On lui répond « corrosion sous contrainte par les chlorures ». C'est probable. Personne ne l'a vérifié.

![Faisceau tubulaire extrait en atelier](/assets/blog/echangeur-faisceau-atelier.jpg)
*Figure 1. Le faisceau extrait, en atelier, pendant l'inspection.*

## Le programme d'inspection avait été fixé avant la question

Le programme décidé à l'arrêt se limitait à l'examen visuel, au ressuage et à l'essai d'étanchéité tube par tube. Ces contrôles répondent à une seule question : quels tubes fuient ? Ils ne disent rien de ceux qui sont fissurés à mi-épaisseur, et rien de la cause. Aucun échantillon n'était prévu pour un examen métallographique.

Un document disponible donnait pourtant un indice : la carte des tubes défectueux. Presque tous se trouvaient dans la **moitié inférieure** du faisceau. Un défaut de fabrication aurait touché des tubes au hasard. Cette répartition désigne une zone où le fluide séjourne, se concentre ou change de phase.

![Carte de la plaque tubulaire avec les tubes défectueux](/assets/blog/echangeur-carte-tubes-defectueux.jpg)
*Figure 2. Carte de la plaque tubulaire : en rouge, les tubes non étanches, concentrés dans la moitié inférieure.*

## Six façons de percer un tube de 1,65 mm

Le bouchage est une réparation rapide et éprouvée, souvent la bonne décision à court terme. Mais il ne traite pas la cause, il réduit la surface d'échange, et il ne dit rien du faisceau de remplacement. Or plusieurs mécanismes peuvent percer un tube d'inox mince, avec des remèdes différents. Sur un condenseur de centrale, des tubes « corrodés » selon l'exploitant présentaient en coupe une fissure circonférentielle unique au droit d'une chicane : de la fatigue par vibration, que le bouchage ne traite pas puisque les tubes voisins vibrent de la même façon. Sur un refroidisseur d'huile, les fissures partaient de l'extérieur des tubes, sous un calorifuge imbibé d'eau de lavage chlorée ; le fluide procédé n'y était pour rien. Le tableau ci-dessous est celui que nous utilisons pour orienter les prélèvements.

| Mécanisme | Signature à l'examen | Localisation typique | Remède principal |
|---|---|---|---|
| Corrosion sous contrainte par les chlorures | Fissures ramifiées, le plus souvent transgranulaires ; pas de perte d'épaisseur visible | Zones chaudes et contraintes : près de la plaque, cintres, sous dépôts, interface liquide-vapeur | Milieu, température, nuance |
| Piqûres ou corrosion caverneuse | Cavités isolées, ouverture étroite | Sous dépôts, zones mortes, interstices tube-plaque | Milieu, nettoyage, nuance à PREN plus élevé |
| Corrosion sous dépôts | Attaque localisée sous une couche adhérente | Parties basses, zones à faible vitesse | Nettoyage, traitement du fluide |
| Fatigue par vibration | Fissure circonférentielle unique, faciès de fatigue | Au droit des chicanes et supports, tubes en entrée de calandre | Supportage, vitesses côté calandre |
| Érosion | Amincissement lisse | Premiers centimètres côté entrée des tubes | Vitesse, inserts d'entrée |
| Défaut de dudgeonnage | Fuite à la liaison tube-plaque | Extrémités des tubes | Reprise du dudgeonnage, contrôle du taux |

![Tubes bouchés sur la plaque tubulaire](/assets/blog/echangeur-tubes-bouches.jpg)
*Figure 3. Tubes bouchés et soudés sur la plaque tubulaire.*

## Les conditions de la fissuration par les chlorures

La corrosion sous contrainte par les chlorures (*chloride stress corrosion cracking*, CSCC) est une fissuration fragile d'un métal ductile. Pour les inox austénitiques des séries 304 et 316, elle demande trois conditions simultanées.

| Condition | Dans un échangeur |
|---|---|
| **Contrainte de traction** | Contraintes résiduelles de dudgeonnage, de soudage, de cintrage ; contraintes thermiques ; pression |
| **Milieu chloruré** | Chlorures dans l'eau, le fluide procédé ou l'isolation ; quelques ppm suffisent s'ils se concentrent |
| **Température** | Risque marqué au-delà d'environ 60 °C, croissant avec la température |

La concentration est le point dangereux. Un fluide faiblement chloruré devient agressif là où il s'évapore, sous les dépôts, dans les zones mortes, à l'interface entre liquide et vapeur. Un rebouilleur réunit toutes ces situations, et la moitié basse d'un faisceau en concentre plusieurs.

Le molybdène du 316L améliore la résistance aux piqûres, **pas** celle à la corrosion sous contrainte. Un 316L n'est pas sensiblement plus résistant qu'un 304L à la fissuration par les chlorures. Les nuances nettement plus résistantes sont les duplex (2205), les super-duplex, les super-austénitiques à 6 % de molybdène et les alliages à forte teneur en nickel. Commander un faisceau neuf en 316L sans avoir confirmé le mécanisme revient à reproduire les conditions de la première défaillance.

![Les trois conditions de la corrosion sous contrainte](/assets/blog/cscc-trois-conditions-echangeur.svg)
*Figure 4. Les trois conditions simultanées de la corrosion sous contrainte par les chlorures, et la zone critique d'un faisceau près de la plaque tubulaire.*

## Ce qui a été demandé au maître d'ouvrage et au réparateur

**Confirmer le mécanisme.** Prélever quelques tubes représentatifs, dont un tube fuyard et un tube voisin apparemment sain, pour trois examens :

- une coupe métallographique, qui distingue sans ambiguïté une fissure ramifiée de corrosion sous contrainte d'une piqûre, d'une fissure de fatigue ou d'un amincissement par érosion ;
- une analyse chimique du tube, pour vérifier la nuance réellement livrée ;
- une analyse des dépôts internes et externes, pour y doser les chlorures.

Compléter si possible par un **contrôle par courants de Foucault** des tubes restants. L'essai d'étanchéité ne trouve que les tubes déjà percés.

**Vérifier les matériaux de la réparation.** Le mode opératoire proposé par le réparateur associait des bouchons en 304L à des tubes en 316L, avec un métal d'apport de nuance 316. Le soudage était techniquement correct. Mais le bouchon en 304L, sans molybdène, résiste moins bien aux piqûres que le tube qu'il ferme. En milieu chloruré, nous appliquons une règle simple : le matériau de réparation est au moins équivalent au matériau d'origine, et meilleur si possible lorsque le mécanisme est lié au milieu.

![Bouchon usiné présenté devant la plaque tubulaire](/assets/blog/echangeur-bouchon-usine.jpg)
*Figure 5. Bouchon usiné avant soudage : sa nuance doit être au moins équivalente à celle du tube.*

La même documentation appelait les vérifications habituelles d'une réparation : validité des qualifications des soudeurs à la date des travaux selon ASME Section IX, cohérence du mode opératoire avec les épaisseurs réelles, ressuage des soudures de bouchon, épreuve du faisceau après réparation. Chez un réparateur d'échangeurs, nous avons trouvé des bouchons soudés avec un procédé dont la qualification couvrait des épaisseurs bien supérieures à celle de la plaque tubulaire, et des soudeurs dont le renouvellement de qualification datait de la veille de l'audit. La qualification se vérifie à la date de la soudure, pas à la date de la revue.

**Traiter la cause.** Si le mécanisme est confirmé, le bouchage reste une mesure temporaire. La cause se traite sur le milieu (teneur en chlorures, zones de concentration, nettoyage des dépôts), sur la température (régime réel comparé aux hypothèses de conception), sur les contraintes (contrôle du dudgeonnage, absence de sur-dudgeonnage), et sur le matériau du faisceau de remplacement.

## Le seuil de bouchage

Chaque tube bouché retire de la surface d'échange et augmente la vitesse dans les tubes restants. Au-delà d'une certaine proportion, souvent de l'ordre de 10 % selon le dimensionnement, la performance thermique et les vitesses doivent être recalculées. Avec plus d'une centaine de tubes bouchés en une fois, la question se posait dès cette réparation. Elle se pose surtout pour la suivante : si le mécanisme est actif, le nombre de tubes bouchés augmente à chaque arrêt, et l'échangeur atteint sa limite plus vite que prévu. API 579-1 / ASME FFS-1 donne le cadre d'une évaluation d'aptitude au service lorsque l'on veut prolonger un équipement endommagé.

## Négocier les prélèvements

Sur le terrain, la demande de prélèvements destructifs rencontre presque toujours les mêmes objections : le programme est arrêté, l'unité attend, les tubes sont de toute façon à boucher. Elles sont compréhensibles. Leur coût est différé : sans diagnostic, le faisceau de remplacement sera commandé dans la même nuance, et ses tubes pourront fissurer dans la même zone. Nous l'avons vu sur un aéroréfrigérant d'une unité de gaz : deux faisceaux successifs, commandés à l'identique après deux campagnes de bouchage, ont fissuré au même endroit, et c'est au troisième que la question de la nuance a été posée. Le coût de deux faisceaux aurait payé bien des coupes métallographiques.

Notre proposition est de réparer et de comprendre en parallèle. Prélever trois ou quatre tubes ne retarde pas le bouchage des autres. L'examen de laboratoire prend quelques jours, et ses conclusions servent à la décision suivante, celle du faisceau neuf, qui coûte le plus cher. Pour que cette proposition soit acceptée, l'ingénieur qualité doit être associé dès l'arrêt de l'équipement, avant que le programme d'inspection ne soit figé.

## Une carte des tubes bouchés à chaque arrêt

La carte de la plaque tubulaire est l'outil le moins coûteux de toute cette démarche. Tenue à jour à chaque arrêt, avec la position des tubes bouchés et la date, elle montre si le mécanisme est toujours actif, s'il reste localisé et à quelle vitesse l'échangeur approche de sa limite de bouchage. Dans ce cas, elle désignait déjà la moitié inférieure du faisceau avant toute analyse de laboratoire. Sur une raffinerie où nous avons repris l'historique d'un échangeur de tête de colonne, les cartes des arrêts précédents existaient sur des feuilles séparées, sans date ni orientation ; superposées, elles montraient une progression régulière depuis l'entrée côté calandre que personne n'avait vue. Une carte par arrêt, datée, orientée et classée avec le rapport d'inspection, suffit à faire parler l'équipement.

## Références utiles

- API RP 571, *Damage Mechanisms Affecting Fixed Equipment in the Refining Industry* (fissuration par les chlorures, corrosion sous dépôts).
- API RP 579-1 / ASME FFS-1, *Fitness-For-Service*.
- NACE MR0175 / ISO 15156, *Petroleum and natural gas industries — Materials for use in H2S-containing environments* (limites d'emploi des inox en milieu chloruré et soufré).
- ASTM E426, *Electromagnetic (Eddy Current) Examination of Seamless and Welded Tubular Products, Titanium, Austenitic Stainless Steel and Similar Alloys*.
- ASME Section IX, *Welding, Brazing, and Fusing Qualifications*.

---

Reindaxia assiste les maîtres d'ouvrage et les exploitants lors des arrêts, des inspections d'équipements et des réparations : définition des contrôles, revue des dossiers de réparation, analyse des défaillances et spécification des remplacements. [Parlons de votre installation](/contact.html?besoin=inspection).
