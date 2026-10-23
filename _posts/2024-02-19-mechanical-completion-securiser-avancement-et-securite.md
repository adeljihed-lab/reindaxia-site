---
title: "Mechanical completion: the phase where an industrial project is won or lost"
description: "Lessons from the mechanical completion of a large gas processing plant: systemisation, ITRs, punch list categories, MC dossiers, earthing and hazardous areas. What delays the signature of completion certificates, and how to avoid it."
category: Mechanical completion
lang: en
keywords: [mechanical completion, MC, completion management, systemisation, subsystem, ITR, inspection and test records, punch list, category A B C punch items, MCC, mechanical completion certificate, ready for commissioning, RFC, RFSU, pre-commissioning, commissioning, earthing, bonding, IEC 60079-14, IEC 60079-17, hazardous areas, ATEX, EPC contract, oil and gas, Tunisia, North Africa]
---

> **In short.** On a gas processing plant split into just over seven hundred subsystems, it took on average two months between the handover of a mechanical completion dossier and the signature of the matching certificate. The construction work itself was finished. The gap came neither from incompetence nor from bad faith, but from rules of the game that had not been settled early enough. This article looks back at what happened, at what the standards actually require, and at what we would do differently.

## A Friday, a spreadsheet

The weekly completion meeting always opened the same way. The planner projected the curve of subsystems declared mechanically complete, and the curve was flat. The erection crews had moved to other areas, the dossiers were compiled, the check sheets signed by the contractor's quality control. But the mechanical completion certificates, the MCCs, were still waiting for the owner's signature.

A few weeks later someone finally pulled the numbers. Out of roughly 750 subsystems tracked:

- the **median** time between dossier submission and MCC signature was **60 days**;
- **more than seven dossiers in ten** took longer than 30 days, the period the contractor considered reasonable to clear the last punch items and finalise red-line drawings;
- **one in two** took more than 60 days, and some waited over nine months.

On a project of that size, two months of slippage per subsystem means a start-up date that moves, commissioning teams on standby, and contractual arguments that begin long before the end.

## What mechanical completion is, and what it is not

Large plants are not accepted in one block. They are divided into **systems** (fuel gas, instrument air, firewater, power generation and so on) and then into **subsystems**, units that are as independent from each other as possible. Completion is then managed subsystem by subsystem, in the order dictated by the start-up sequence. The owner's completion specification on this project recommended keeping the number of subsystems below about two hundred for a plant of this type. The breakdown actually adopted had more than three times as many, which multiplied dossiers, walkdowns and signatures accordingly.

The milestones follow one another:

| Milestone | What it confirms | Document |
|---|---|---|
| Mechanical Completion | Construction is finished, conforms to drawings, has been inspected and tested cold | MCC, supported by A-type ITRs |
| Ready for Commissioning | Pre-commissioning is complete (continuity, insulation, loop checks, flushing…) | RFC certificate, supported by B-type ITRs |
| Ready for Start-Up | Functional commissioning is complete | RFSU certificate |

**ITRs** (Inspection and Test Records) are the check sheets by item and discipline: a pump, a junction box, a cable, an instrument loop. The A-ITR records construction checks, the B-ITR pre-commissioning tests. A subsystem's MC dossier gathers these sheets, the piping test packs, the boundary drawings and the list of outstanding punch items.

One point is often forgotten in meetings: **mechanical completion does not require zero punch items.** It requires that the remaining items do not prevent the next phase. That is the whole purpose of categorising them.

![Mechanical completion milestones and punch categories](/assets/blog/mc-milestones-punch-categories.svg)
*Figure 1. Milestones from construction to start-up, punch categories as gates for the next step, and the dossier cycle observed on the project.*

## Three categories, and plenty of misunderstanding

The contract defined three categories, as most completion specifications do:

- **A**: if left open, the item prevents the next phase from starting;
- **B**: it prevents commissioning completion of the subsystem and blocks start-up;
- **C**: it relates to a specification requirement but affects neither performance nor safe operation.

The definition is clear. Its application is not. On this project, the extract of punch items related to hazardous areas listed **more than 2,200 items classified A**: missing earthing tags, bonding of galvanised conduits, barrier glands incorrectly fitted, missing heat-shrink sleeves, missing stoppers on unused cable entries. Their median clearance time was about a month.

Some of these items were entirely justified. A badly fitted barrier gland on Zone 1 equipment compromises its type of protection; equipment that is not earthed must not be energised. But a missing identification tag on an earth braid, or a request to reopen a gland already accepted at the previous inspection, does not prevent pre-commissioning. Classified C, those items would have been cleared just as surely, without flattening the curve.

A punch item's category measures its **effect on the next phase**, not its importance in absolute terms. When that distinction is not shared, each inspector applies his own scale, and the same anomaly is blocking on one subsystem and minor on the next. That is exactly what happened with manual fire alarm call points: rejected on one site for a "missing earth tag", accepted a few weeks earlier on another, identical installation.

## What the standards say about hazardous areas

Hazardous areas deserve a closer look, because they combine real safety stakes with a large share of the blockages.

**IEC 60079-14** sets the rules for the design, selection and erection of electrical installations in explosive atmospheres: selection of the type of protection by zone, glands and cable entries, equipotential bonding, earthing. **IEC 60079-17** covers inspection and maintenance of these installations and requires, before first energisation, an **initial inspection of the "detailed" grade**, with check tables by type of protection.

Two practical consequences follow:

1. hazardous-area checks are **mandatory before energisation**, whatever the contract calls them, so it is legitimate for the owner to require them;
2. their place in the dossier must be **decided before mechanical completion starts**. On this project, the requirement to include hazardous-area inspection sheets in the MC dossiers arrived midway, although the procedure did not mention them, and the first dossiers had to be reworked.

Earthing followed the same path. The earthing network (rods, buried conductors, earth bars) formed separate subsystems, installed by another subcontractor. When equipment was inspected before the nearby earth bar was in place, its connection was necessarily open. Should the equipment ITR be refused, or should the item be recorded and dealt with under the earthing subsystem? It took several rounds of formal correspondence to fix the boundary: the equipment ITR covers the connection up to its own earth plate, the network covers the connection up to the bar. Meanwhile, the owner had suspended all energisation until a progressive earthing strategy, compliant with the project philosophy, was presented. On substance the owner was right: you do not energise equipment whose fault protection has not been demonstrated. On form, that strategy should have existed before the first cable was pulled.

## The other half of the problem: what is presented for inspection

It would be unfair to blame the owner alone. The same correspondence shows the other side: subcontractors notifying inspections on obviously incomplete work, with wiring unfinished, cables not terminated or not tested, and no internal walkdown beforehand. Owner inspectors spent their days writing endless punch lists on installations that were not ready to be inspected.

The answer was a simple agreement, which we now recommend on every project:

- the contractor carries out **its own internal walkdown** before any notification and attaches its own punch list;
- a refusal to inspect is decided **before** the inspection, at notification, with written reasons;
- once the inspection has taken place, **the ITR is signed within 24 hours**, with disputed points entered on the punch list as "disputed" and settled by the two quality leads.

That agreement unblocked a large share of the dossiers. It could have been in the procedure from day one.

## What we take from it

None of this is specific to one project. We have met the same issues, in other forms, on most industrial sites.

**Define systems and subsystems carefully, and early.** The breakdown drives everything: number of dossiers, start-up sequence, interfaces between packages. Too fine a breakdown multiplies signatures; a breakdown that separates equipment from its earthing manufactures conflict.

**Write a punch categorisation matrix.** For each discipline, a list of typical items with their category, agreed by both parties before the first inspection. It does not replace the inspector's judgement; it makes it consistent.

**Fix the content of the MC dossier before compiling the first one.** List of documents, forms, boundary drawings, treatment of red-lines, hazardous-area records. Any requirement added along the way is paid for on every dossier already submitted.

**Prepare energisation as a project in its own right.** Progressive earthing strategy, minimum conditions per switchboard, lock-out and isolation: it is often the first critical commissioning milestone.

**Measure the dossier cycle.** Time from compilation to submission, walkdown and signature; open A items per subsystem; first-time acceptance rate. These indicators reveal a blockage weeks before it shows on the progress curve.

**Treat inspection as shared work.** Serious internal walkdowns on the contractor's side, early and reasoned refusals on the owner's side, quick signature and arbitration of disagreements. Mechanical completion is one of the rare phases where both parties want exactly the same thing: a safe plant, delivered quickly.

## Why it matters

Mechanical completion is the moment a construction project becomes a plant. It is the last filter before energy, pressure and hydrocarbons are introduced. Done well, it guarantees that what is commissioned is compliant, checked and documented. Prepared poorly, it becomes a bottleneck, and the temptation then grows to let through items that should have been cleared.

An experienced quality engineer is there precisely to hold both requirements together: let nothing through that touches safety, and block nothing that does not prevent the next step.

## References

- IEC 60079-14, *Explosive atmospheres — Part 14: Electrical installations design, selection and erection*.
- IEC 60079-17, *Explosive atmospheres — Part 17: Electrical installations inspection and maintenance*.
- IEC 60364-5-54, *Low-voltage electrical installations — Earthing arrangements and protective conductors*.
- IEC 62305 (Parts 1 to 4), *Protection against lightning*.
- ASME B31.3, *Process Piping*, Chapter VI (inspection, examination and testing).
- Directive 1999/92/EC (protection of workers potentially at risk from explosive atmospheres), commonly referenced in European owners' specifications.

---

Reindaxia organises and manages mechanical completion for owners and contractors: systemisation, punch categorisation matrices, dossier content, walkdowns and follow-up to certificate signature. [Talk to us](/en.html#contact).
