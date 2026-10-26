---
title: "Mechanical completion: why the certificate curve stays flat when construction is done"
description: "Why mechanical completion certificates stall on large plants: incomplete work, punch categories, generic ITRs, earthing and temporary power."
category: Mechanical completion
lang: en
keywords: [mechanical completion, MC, completion management, systemisation, subsystem, ITR, inspection and test records, punch list, category A B C punch items, MCC, mechanical completion certificate, ready for commissioning, RFC, RFSU, pre-commissioning, commissioning, earthing, bonding, IEC 60079-14, IEC 60079-17, hazardous areas, ATEX, EPC contract, oil and gas, Tunisia, North Africa]
---

The construction curve said the plant was almost built. The erection crews had moved to other areas, the dossiers were compiled and the contractor's quality control had signed the check sheets. Yet the curve of mechanical completion certificates, projected every Friday at the completion meeting, stayed flat. When someone finally measured it, the typical time between handing over a subsystem dossier and the signature of its certificate was about two months, and some dossiers waited most of a year. On a plant split into several hundred subsystems, that delay moves the start-up date, keeps commissioning teams on standby and starts the contractual arguments long before the end. Nobody was careless. The rules for what counted as complete had not been agreed before the dossiers started to arrive.

## What a mechanical completion certificate actually certifies

Large plants are not accepted in one block. They are divided into **systems** (fuel gas, instrument air, firewater, power generation) and then into **subsystems**, units as independent of each other as possible, completed in the order the start-up sequence requires.

| Milestone | What it confirms | Document |
|---|---|---|
| Mechanical Completion | Construction is finished, conforms to drawings, and has been inspected and tested cold | MCC, supported by A-type ITRs |
| Ready for Commissioning | Pre-commissioning is complete (continuity, insulation, loop checks, flushing) | RFC certificate, supported by B-type ITRs |
| Ready for Start-Up | Functional commissioning is complete | RFSU certificate |

**ITRs** (Inspection and Test Records) are the check sheets by item and discipline: a pump, a junction box, a cable, an instrument loop. A-ITRs record construction checks, B-ITRs pre-commissioning tests. A subsystem's MC dossier gathers these sheets, the piping test packs, the boundary drawings, the red-lined drawings and the list of open punch items.

Mechanical completion does not require zero punch items. It requires that the open items do not prevent the next phase. The whole completion system rests on that sentence, and most disputes come from reading it differently.

The breakdown itself matters more than it seems. On that plant, the owner's completion specification called for a far coarser breakdown than the one finally adopted. Every extra subsystem added a dossier and a set of signatures, and every boundary an interface to argue about. On a pumping station we handed over later, the opposite choice had been made: a single subsystem for the whole electrical building, so one unfinished feeder kept the lighting, the UPS and the control room out of commissioning for weeks. A subsystem should be small enough to be finished on its own and large enough to be tested on its own.

![Mechanical completion milestones and punch categories](/assets/blog/mc-milestones-punch-categories.svg)
*Figure 1. Milestones from construction to start-up, punch categories as gates for the next phase, and the dossier cycle.*

## Incomplete work is not a punch item

On a turnkey process unit, the completion team faced the opposite problem. Work was notified for inspection as finished when cables were not terminated, tubing was missing and skid handrails had not been fitted. When the inspector refused, the missing work was sometimes entered on the punch list so that the subsystem could be declared complete and show progress. The final punch volume ended up several times the contractor's own estimate.

A punch list records deviations on work that is otherwise finished. Unbuilt scope does not belong there, whatever its category. The definition has to be in the completion procedure before the first inspection, with examples per discipline. Without it, the progress curve records declarations, and the owner's inspectors spend their days writing punch lists for installations that were never ready to be inspected.

## Three categories, many scales

Most completion specifications use three categories:

- **A**: if left open, the item prevents the next phase from starting;
- **B**: it prevents commissioning completion of the subsystem and blocks start-up;
- **C**: it relates to a specification requirement but affects neither performance nor safe operation.

Applying them on site is another matter. On the plant with the flat certificate curve, the hazardous-area punch items alone ran into the thousands classified A: missing earthing tags, bonding of galvanised conduits, barrier glands incorrectly fitted, missing heat-shrink sleeves, missing stoppers on unused cable entries. Clearing one typically took about a month.

Some were fully justified. A badly fitted barrier gland on Zone 1 equipment compromises its type of protection, and equipment that is not earthed must not be energised. But a missing identification tag on an earth braid does not prevent pre-commissioning. Classified C, it would have been cleared just as surely without flattening the curve. Without a shared scale, the same anomaly blocks one subsystem and is minor on the next: manual fire alarm call points were rejected on one area for a missing earth tag, after an identical installation had been accepted a few weeks earlier elsewhere.

The tool that prevents this is a **punch categorisation matrix**: for each discipline, a list of typical items with their category, signed by both parties before the first walkdown. Inspectors still judge each case, but on the same scale. On a compressor station where such a matrix was agreed before the first walkdown, the arguments moved from "is this an A item" to "is this item cleared", which is the argument a completion meeting should be having.

## Check sheets written for the equipment in front of you

Generic ITRs produce generic inspections. On the turnkey unit, the first A-ITR forms carried items that did not apply to the equipment inspected and checks worded so loosely ("verify mechanical GA") that two inspectors could sign the same sheet with different meanings. The forms had to be rewritten during construction, and every dossier compiled on the old forms was reopened.

A usable ITR set is written per equipment type and per stage, by someone who knows what can go wrong on that equipment. It states what is checked, against which document, and with what acceptance criterion. Where a test is required at construction stage, such as cable continuity or instrument fitting torque, the sheet asks for the measured value. At a vendor's works, we once compared the FAT check sheets of two identical skids: both signed, one with insulation resistance values recorded and one with ticks only. Only the first could be reused at site; the second had to be tested again.

## Hazardous areas and earthing: decide early where they sit

Hazardous areas combine real safety stakes with a large share of the blockages.

**IEC 60079-14** sets the rules for the design, selection and erection of electrical installations in explosive atmospheres, and requires an **initial inspection at the detailed grade** before first energisation, with check tables by type of protection. **IEC 60079-17** then covers periodic inspection and maintenance in service. An owner is entitled to require these checks whatever the contract calls them, but their place in the dossier must be decided before mechanical completion starts. On the plant with the flat curve, hazardous-area inspection sheets were added to the MC dossier content midway, although the procedure did not mention them, and the first dossiers had to be reworked.

Earthing followed the same path. The earthing network was split into separate subsystems installed by another subcontractor. When equipment was inspected before the nearby earth bar existed, its connection was necessarily open. Several rounds of correspondence were needed to fix the boundary: the equipment ITR covers the connection up to its own earth plate, the network covers the connection up to the bar. Meanwhile, all energisation was suspended until a progressive earthing strategy was presented. Stopping energisation was right, since equipment whose fault protection has not been demonstrated must not be energised. But the earthing strategy should have been written before cable pulling started.

## One completion database, used during the work

Completion management systems are often judged heavy by site teams, and parallel spreadsheets appear. On the turnkey unit, the completion database was abandoned in favour of spreadsheets maintained by each discipline. Tags were missed, ITR status differed from one file to the next, and dossiers were compiled from lists that did not match the system breakdown. Rebuilding the data at the end took longer than keeping it up to date would have.

The rule we apply is simple: every tag is in the database before its first inspection, every ITR is entered when it is signed, and the punch list is extracted from the database. Red-lines follow the same logic. They are kept on site as the work progresses, in one register, and nobody calls them "as-built" until the final drawings are issued. Red-lines are almost impossible to reconstruct after the crews have left.

## After the certificate: the weeks nobody owns

A signed MCC changes who is responsible for a subsystem, not its condition. Between the certificate and start-up, equipment sits with open flanges, temporary strainers and a preservation routine that the contractor considers finished. On a gas treatment unit, the first commissioning runs stalled on strainers clogged with debris and on control valves whose seats had been scored because they had stayed in line during flushing. The pre-commissioning procedure we now ask for is explicit: control and tight shut-off valves are removed, capped and stored during flushing and blowing, with a spool in their place, and every impulse line is disconnected at the instrument before any air blowing, with its own line in the flushing check sheet.

Preservation needs its own check sheets and a tracking register, started at erection and continued after the certificate, with the responsible party named for each period. On a compressor station, the preservation file stopped at mechanical completion; months later the commissioning team found rust in a dry gas seal vent section and a water mark inside a bundle casing.

Two lists make the transition visible. A list of temporary gaskets and temporary strainers, kept by the contractor from the first spool and reviewed weekly with commissioning, then closed item by item before RFC: a temporary gasket found at the high-pressure leak test costs a scaffold and a permit, one found after start-up costs a shutdown. And a commissioning spares list (gaskets, bolts, filter elements, relief valve internals, actuator parts) prepared by the commissioning team early enough for the lead times, with arrival at site checked against it.

## A register of what broke last time

The most useful pre-start-up tool we have worked with is not a certificate. Some owners keep a register of the root causes of start-up failures on earlier plants, grouped by key success area: tightness, cleanliness, site testing, operations readiness, instrumentation, static and rotating equipment, electrical, process, civil, HSSE, schedule, interface complexity. Each entry pairs a known failure mode with a mitigation, the project document that carries it (a procedure, a check sheet, an ITP clause) and a champion in the owner's team who confirms it is in place. Reviewed monthly from the start of construction, the register tells the completion team which checks the ITRs must contain and which lists must exist before RFC. Its closure status at start-up says more about readiness than the count of certificates.

## First energisation is a milestone, not a switch

The first time voltage reaches a switchboard changes the site: from then on, every cable behind it is live, and construction crews are working next to energised equipment. On a water treatment plant, a lighting distribution board was energised by an electrician to allow night work, without notice, while cable terminations in the same room were still open. Nobody was hurt. The owner's answer was a full energisation procedure applied to every circuit afterwards.

Our rule is that first energisation of any circuit, permanent or temporary, is a formal step: a written notice, the ITRs of every item behind the breaker completed, the A items cleared, the earthing of the circuit demonstrated and named signatories on both sides. On a substation we handed over, the energisation notice listed the circuits that would be live and the rooms concerned, and the permit-to-work board was updated the same morning. That one page is what allows construction and commissioning to share a building.

## Inspection as shared work

Neither party can unblock completion alone. The agreement that unblocked a large share of the dossiers on the plant with the flat curve could have been written into the procedure from day one:

- the contractor carries out **its own internal walkdown** before any notification and attaches its own punch list;
- a refusal to inspect is decided **at notification**, with written reasons, before the inspector travels;
- once the inspection has taken place, **the ITR is signed within 24 hours**, with disputed points entered on the punch list as "disputed" and settled by the two quality leads.

Measuring the dossier cycle shows a blockage weeks before it appears on the progress curve. We track the time from compilation to submission, walkdown and signature, the number of open A items per subsystem, and the first-time acceptance rate of dossiers.

## Before the first walkdown is notified

Five documents should be signed by both parties before any subsystem is offered for mechanical completion: the system and subsystem breakdown, the definition of incomplete work versus punch item, the punch categorisation matrix, the ITR set per equipment type, and the MC dossier content, including hazardous-area records and red-lines. The earthing strategy, the energisation procedure, the preservation register and the temporary-items list follow shortly after, before cable pulling and before the first switchboard is ready. Every requirement added after the first dossier is paid for again on every dossier already submitted.

## References

- IEC 60079-14, *Explosive atmospheres — Part 14: Electrical installations design, selection and erection*.
- IEC 60079-17, *Explosive atmospheres — Part 17: Electrical installations inspection and maintenance*.
- IEC 60364-5-54, *Low-voltage electrical installations — Earthing arrangements and protective conductors*.
- IEC 62305 (Parts 1 to 4), *Protection against lightning*.
- ASME B31.3, *Process Piping*, Chapter VI (inspection, examination and testing).
- Directive 1999/92/EC (protection of workers potentially at risk from explosive atmospheres), commonly referenced in European owners' specifications.

---

Reindaxia organises and manages mechanical completion for owners and contractors: systemisation, punch categorisation matrices, dossier content, walkdowns and follow-up to certificate signature. [Talk to us](/en.html#contact).
