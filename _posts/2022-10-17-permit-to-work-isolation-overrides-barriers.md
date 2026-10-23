---
title: "Permit to work, isolation and safety-system overrides: three barriers that fail together"
description: "Why permit-to-work, plant isolation and the control of inhibits, overrides and defeats must be managed as one system. Lessons from Piper Alpha and other documented accidents, UK HSE guidance HSG250 and HSG253, IEC 61511 bypass management, and practical audit points for oil, gas, power and industrial sites."
category: HSE and process safety
lang: en
keywords: [permit to work, PTW, HSG250, isolation, lockout tagout, LOTO, HSG253, positive isolation, double block and bleed, inhibits, overrides, defeats, bypass, IEC 61511, safety instrumented system, shift handover, simultaneous operations, SIMOPS, Piper Alpha, Cullen report, process safety, HSE audit, oil and gas, Tunisia, North Africa]
---

> **In short.** On most industrial sites, three procedures protect people during non-routine work: the permit to work, the isolation of plant and equipment, and the control of inhibits, overrides and defeats on safety systems. They are often written by different people, owned by different departments and audited separately. In serious accidents they tend to fail together, because each one assumes the others are working. This article explains how the three fit together, what the reference guidance says, and what we look for when we audit them on site.

## A pump, a missing valve, a shift change

On the evening of 6 July 1988, on the Piper Alpha platform in the North Sea, a condensate injection pump tripped. The night shift tried to restart the standby pump. They did not know that its pressure safety valve had been removed for maintenance earlier that day and replaced by a blind flange that was not leak-tight. The permit covering that work had not been brought to their attention at shift handover; it sat in a different place from the permit for the pump itself. Condensate escaped, ignited, and the fire escalated through the platform and the connected pipelines. 167 people died.

Lord Cullen's public inquiry identified many contributing factors, from the design of the platform to emergency response. Among the most cited are the weaknesses of the permit-to-work system and of shift handover: work was authorised, isolations were in place, but the information did not travel with the equipment. The inquiry led to the safety case regime for offshore installations in the United Kingdom, and its findings on permit to work still shape guidance today.

## Three procedures, one barrier

The three procedures answer three different questions:

| Procedure | Question it answers | Typical failure |
|---|---|---|
| Permit to work | Who may do which non-routine work, where, when, under which precautions? | Permit issued without visiting the site; work extends beyond its scope; poor handover |
| Isolation | How is the equipment separated from energy and hazardous fluids, and how is that proven? | Single valve relied on; no proof of zero energy; isolation removed too early |
| Inhibits, overrides and defeats | When a safety function is deliberately disabled, who decides, for how long, with what compensation? | Bypass left in place after the work; no register; no compensating measure |

They protect against the same event: energy or hazardous material reaching people who believe it is not there. That is why they must be designed and audited as one barrier.

## Permit to work: what good looks like

The UK Health and Safety Executive's guidance HSG250 remains the most widely used reference. In substance, a robust permit-to-work system:

- covers clearly defined types of non-routine work (hot work, confined space, work on process equipment, electrical work, work at height, excavation) and states which permit applies;
- separates roles: the person who **requests** the work, the person who **authorises** it, the person who **accepts** it on behalf of the work party, and the person responsible for the **area**;
- requires a site visit and a task-specific hazard assessment before authorisation;
- cross-references the isolations and any safety-system overrides the work depends on;
- manages **simultaneous operations**, so that two permits in the same area do not create a hazard neither of them considered;
- defines how permits are handed over at shift change, suspended and cancelled;
- is monitored and audited, not only on paper but at the worksite.

The last two points are where most systems fail. A permit is a communication tool before being an authorisation. If it does not reach the night shift, it protects no one.

## Isolation: proving zero energy

HSG253, the HSE guidance on safe isolation of plant and equipment, sets out a hierarchy. The preferred method for hazardous fluids is **positive isolation**: physical disconnection, spades or blinds, removal of a spool. Below that comes **proven isolation** with valves, typically double block and bleed, where the bleed between two closed valves demonstrates that the barrier holds. A single closed valve is the weakest option and requires specific justification.

For electrical and mechanical energy, the principle is the same: identify every source, isolate it, lock and tag it, then **verify** that there is no residual energy before work starts. The verification step is the one most often skipped. An isolation that has not been tested is an assumption.

Our audits regularly find the same weaknesses: isolation points not shown on the isolation certificate, locks without a personal key control, verification not recorded, isolations removed before all permits depending on them are closed. On a construction site recently audited, electrical lockout rules existed in writing but were not applied effectively, and the analysis of causes pointed to the usual triad: insufficient field training, insufficient supervision, procedure not integrated into daily practice.

## Inhibits, overrides and defeats: the invisible risk

Safety instrumented systems, fire and gas detection, alarms and interlocks are sometimes disabled on purpose: to test them, to maintain a sensor, to start up a unit. IEC 61511, the reference standard for safety instrumented systems in the process industry, requires that such bypasses be controlled: authorised, recorded, compensated by other measures while they are active, and removed as soon as possible.

In practice, a sound system has:

- a **register** of every active inhibit, override or defeat, visible in the control room;
- an **authorisation level** proportionate to the safety function affected;
- a **risk assessment and compensating measures** for each one: a person stationed at the equipment, a temporary alarm, a reduced operating envelope;
- a **time limit**, with escalation if it is exceeded;
- a **review at each shift handover** and a periodic review of long-duration defeats.

The danger of an override is that it is silent. A tripped pump is visible; a disabled trip is not. The wider lesson extends beyond instrumented systems: on the same construction site, the seat belt of a site vehicle had been deliberately disabled by its users. It is the same behaviour, a safety device defeated because it is inconvenient, and it calls for the same answer: make defeats visible, controlled and exceptional.

![Permit, isolation and overrides](/assets/blog/ptw-isolation-overrides.svg)
*Figure 1. Three procedures, one barrier: the interfaces and the shift handover are where information gets lost.*

## Where the three meet

The interfaces are where accidents happen:

- a permit for maintenance on a pump must reference the isolation certificate and any trip that has been inhibited;
- an isolation cannot be removed while a permit that depends on it is still open;
- an override applied for a test must be removed before the permit is closed, and checked at handover;
- every shift handover reviews the three registers together.

We recommend a single walk-through, at least once a month, by the area authority with a supervisor from another area, comparing the three registers with what is actually on the ground: the locks, the tags, the bypass keys, the work in progress. Discrepancies found that way are the most valuable data a site can collect.

## What we look for in an audit

| Area | Field check |
|---|---|
| Permit to work | Permits at the worksite match the work being done; precautions in place; authoriser visited the site |
| Handover | Night shift can explain which permits, isolations and overrides are active in its area |
| Isolation | Isolation points match the certificate; locks and tags in place; zero-energy verification recorded |
| Overrides | Register matches the control system; each active override has an authorisation, compensation and expiry |
| SIMOPS | Overlapping permits identified and coordinated |
| Learning | Near misses involving these systems investigated and shared |

## Our view

Permit to work, isolation and override control are not paperwork. They are the means by which an organisation remembers, from one hour to the next and from one shift to the next, where the energy is and who is exposed to it. They work when they are simple, consistent with each other, used by people who understand why they exist, and checked in the field by experienced supervisors and auditors.

## References

- The Hon. Lord Cullen (1990). *The Public Inquiry into the Piper Alpha Disaster*. HMSO.
- UK Health and Safety Executive, HSG250, *Guidance on permit-to-work systems: A guide for the petroleum, chemical and allied industries*.
- UK Health and Safety Executive, HSG253, *The safe isolation of plant and equipment*.
- IEC 61511 (all parts), *Functional safety — Safety instrumented systems for the process industry sector*.
- ISO 45001:2018, clauses 8.1.2 (eliminating hazards and reducing risks) and 8.1.3 (management of change).

---

Reindaxia audits permit-to-work, isolation and override systems on industrial and construction sites, and supports their improvement with field supervision and training. [Talk to us](/en.html#contact).
