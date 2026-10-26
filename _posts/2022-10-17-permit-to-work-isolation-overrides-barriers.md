---
title: "Permit to work, isolation and overrides: why three registers must be read as one"
description: "Permit to work, isolation and override control fail together. What HSG250, HSG253, IEC 61511 and Piper Alpha teach, and what to check on site."
category: HSE and process safety
lang: en
keywords: [permit to work, PTW, HSG250, isolation, lockout tagout, LOTO, HSG253, positive isolation, double block and bleed, inhibits, overrides, defeats, bypass, IEC 61511, safety instrumented system, shift handover, simultaneous operations, SIMOPS, Piper Alpha, Cullen report, process safety, HSE audit, oil and gas, Tunisia, North Africa]
---

During pre-commissioning on an industrial site, vendor teams connected temporary power to several packages so they could run their tests. They raised no permit and made no entry in the energisation register. Nothing happened. For a few days, however, the isolation certificates for that area described a plant that no longer existed: equipment shown as dead was live, and anyone working under those certificates would have trusted them. Nobody had done anything they thought was unsafe. Each team relied on a different document, and none of the documents knew about the others.

That is the usual shape of the problem. On most sites the permit to work, plant isolation and the control of inhibits, overrides and defeats are written by different people, kept in different places and audited separately. In serious accidents they tend to fail together, because each assumes the others are working.

## The case every process engineer knows

On the evening of 6 July 1988, on the Piper Alpha platform in the North Sea, a condensate injection pump tripped. The night shift tried to restart the standby pump. They did not know that its pressure safety valve had been removed for maintenance earlier that day and replaced by a blind flange that was not leak-tight. The permit for that work had not been brought to their attention at shift handover; it was filed separately from the permit for the pump itself. Condensate escaped and ignited, and the fire escalated through the platform and the connected pipelines. 167 people died.

Lord Cullen's public inquiry identified many contributing factors, from platform design to emergency response. Among the most cited are the weaknesses of the permit-to-work system and of shift handover: the work was authorised and the isolation existed, but the information did not travel with the equipment. The inquiry led to the safety case regime for UK offshore installations, and its findings on permit to work still shape guidance today.

## One hazard, three procedures

| Procedure | Question it answers | Typical failure |
|---|---|---|
| Permit to work | Who may do which non-routine work, where, when, under which precautions? | Permit issued without visiting the site; work extends beyond its scope; poor handover |
| Isolation | How is the equipment separated from energy and hazardous fluids, and how is that proven? | Single valve relied on; no proof of zero energy; isolation removed too early |
| Inhibits, overrides and defeats | When a safety function is deliberately disabled, who decides, for how long, with what compensation? | Bypass left in place after the work; no register; no compensating measure |

All three protect against the same event: energy or hazardous material reaching people who believe it is not there. When we audit them, we treat them as a single barrier and look first at the points where they hand information to each other.

![Permit, isolation and overrides](/assets/blog/ptw-isolation-overrides.svg)
*Figure 1. Three procedures, one barrier: information gets lost at the interfaces and at shift handover.*

## Permit to work under HSG250

The UK Health and Safety Executive's HSG250 remains the most widely used reference. A permit system that meets it:

- covers defined types of non-routine work (hot work, confined space, work on process equipment, electrical work, work at height, excavation) and says which permit applies to each;
- separates roles: the person who **requests** the work, the one who **authorises** it, the one who **accepts** it for the work party, and the person responsible for the **area**;
- requires a site visit and a task-specific hazard assessment before authorisation;
- cross-references the isolations and safety-system overrides the work depends on;
- coordinates **simultaneous operations**, so that two permits in one area do not create a hazard neither considered;
- defines how permits are handed over at shift change, suspended and cancelled;
- is monitored at the worksite, not only in the permit office.

The last two points are where most systems we see are weakest. On Piper Alpha, the permit for the relief valve work existed; it never reached the people who restarted the pump. On a tank farm audit, a hot work permit for a pipe support had been signed in the permit office, from a plan; the authoriser had not seen that the support stood two metres from an open drain sump that smelled of product. The permit was in order on paper and would not have survived a site visit. During a turnaround on a process unit, a scaffold crew's permit was still open when the night shift started a nitrogen purge on the same column; the two permits had been issued by two different area authorities who had not spoken to each other. On a plant under commissioning, air blowing of large-bore lines went on a few metres from crews still terminating cables and from a vendor team testing a package, each under its own permit; the only coordination was a morning meeting that none of the three attended. A matrix of permitted operations, listing which activities may run at the same time in the same area and which may not, is the document that turns SIMOPS from a chapter of the procedure into a question asked at every permit.

The permit system also has to exist before the plant does. On a greenfield project, the permit system was introduced at the start of commissioning, when the construction crews were still on site and had worked for two years without one; the form then changed again at start-up when the operator's format took over. Each change produced a few weeks during which supervisors signed forms they did not fully understand, and at least one permit holder could not read the language the permit was written in. The system belongs in the construction phase from the first day, with one format or a formal, trained transition between formats, and a rule that every permit holder can read the permit he signs.

## Isolation under HSG253

HSG253, the HSE guidance on safe isolation of plant and equipment, sets a hierarchy for hazardous fluids. **Positive isolation** comes first: physical disconnection, spades or blinds, removal of a spool. Next comes **proven isolation** with valves, typically double block and bleed, where the bleed between two closed valves shows that the barrier holds. A single closed valve is the weakest option and needs specific justification, based on the hazard, the duration of the work and the condition of the valve.

For electrical and mechanical energy the logic is the same: identify every source, isolate it, lock and tag it, then verify that no residual energy remains before work starts. Until someone has checked for zero energy, the isolation exists only on paper.

The weaknesses we find most often are practical: isolation points missing from the certificate, locks without personal key control, verification done but not recorded, and isolations removed before every permit that depends on them has been closed. That last one is the most dangerous, because it is invisible to the permit holder. At a pumping station, a fitter opened a strainer under a certificate that listed one closed suction valve on a product line; the valve was passing, and the only thing that saved him was a slow leak that gave him time to step back. The certificate had been written to match what the plant allowed, not what the hazard required, and nobody had asked for a bleed between two valves or a spade.

Spades deserve a register of their own during pre-commissioning, because they are fitted and removed by different crews for different reasons: a flushing boundary, a test pack limit, a protection for an instrument. The register states, for each spade, its location, the reason, and its required status before and after commissioning, and the permit system controls each change. Without it, start-up finds blinds nobody remembers, or finds none where one should still be. Hose connections carry a similar risk: on one site, an air hose was connected to equipment that was to be purged with nitrogen, because the two utilities shared the same coupling. Dedicated, non-interchangeable couplings per utility cost little and remove the question from the permit altogether.

## Overrides under IEC 61511

Safety instrumented systems, fire and gas detection, alarms and interlocks are sometimes disabled on purpose: to test them, to maintain a sensor, to start up a unit. IEC 61511, the reference standard for safety instrumented systems in the process industry, requires such bypasses to be controlled: authorised, recorded, compensated by other measures while active, and removed as soon as possible.

On a site where this works, we expect to find:

- a **register** of every active inhibit, override or defeat, visible in the control room and consistent with what the control system shows;
- an **authorisation level** matched to the safety function affected;
- a **risk assessment and compensating measures** for each entry: a person posted at the equipment, a temporary alarm, a reduced operating envelope;
- a **time limit**, with escalation when it is exceeded;
- a **review at each handover** and a periodic review of long-standing defeats.

Everyone sees a pump that has tripped. Nobody sees a bypassed trip unless they read the register. On a gas treatment unit, a high-level trip on a separator had been inhibited for a transmitter calibration and was still inhibited three weeks later; the technician had left the site, the control system showed a small yellow symbol that the operators had stopped noticing, and the register in the control room had no entry at all. Nothing happened there either, which is how most of these are found: by an auditor comparing the screen with the book, not by an incident. Temporary energisation during commissioning, as in the opening example, carries the same risk and belongs in the same register: visible, authorised and time-limited.

## The interface rules

The links between the three procedures can be written as four rules:

- a maintenance permit on a pump references the isolation certificate and every trip inhibited for the work;
- an isolation cannot be removed while a permit that depends on it is open;
- an override applied for a test is removed before the permit is closed, and its removal is checked at handover;
- every shift handover reviews the three registers together, in the same meeting, with the same people.

To test whether these rules hold, we recommend a monthly walk-through by the area authority together with a supervisor from another area. They compare the three registers with what is physically on the ground: locks, tags, spades, bypass keys, temporary cables, work in progress. Each discrepancy is logged, assigned and closed like an audit finding. The outside supervisor matters, because people who walk the same area every day stop seeing what is missing.

## Field checks for an audit

| Area | Field check |
|---|---|
| Permit to work | Permits at the worksite match the work being done; precautions in place; authoriser visited the site |
| Handover | Night shift can explain which permits, isolations and overrides are active in its area |
| Isolation | Isolation points match the certificate; locks and tags in place; zero-energy verification recorded |
| Overrides | Register matches the control system; each active override has an authorisation, compensation and expiry |
| SIMOPS | Overlapping permits identified and coordinated against the matrix of permitted operations |
| Temporary items | Spade register matches the plant; temporary power and hoses listed and identifiable |
| Learning | Near misses involving these systems investigated and shared |

The handover line is the quickest test. Ask the night shift supervisor, at the start of the shift and without notice, to list what is under permit, what is isolated and what is bypassed in the area. Then compare the answer with the three registers and with the plant. If the supervisor needs more than a few minutes, or the three sources disagree, the barrier is not working as designed, however complete the procedures look.

## References

- The Hon. Lord Cullen (1990). *The Public Inquiry into the Piper Alpha Disaster*. HMSO.
- UK Health and Safety Executive, HSG250, *Guidance on permit-to-work systems: A guide for the petroleum, chemical and allied industries*.
- UK Health and Safety Executive, HSG253, *The safe isolation of plant and equipment*.
- IEC 61511 (all parts), *Functional safety — Safety instrumented systems for the process industry sector*.
- ISO 45001:2018, clauses 8.1.2 (eliminating hazards and reducing risks) and 8.1.3 (management of change).

---

Reindaxia audits permit-to-work, isolation and override systems on industrial and construction sites, and supports their improvement with field supervision and training. [Talk to us](/en.html#contact).
