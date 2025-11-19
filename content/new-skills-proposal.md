# Proposal: The Weaver and The Alchemist

A proposal for two new agentic skills to evolve the Wine Dark vault from a collection of atomic notes into a networked intelligence.

## 1. The Weaver (The Linking Skill)

**Goal:** Reveal invisible threads between ideas that weren't born in the same source.

**The Insight:** Most "auto-linkers" are boring because they link based on *nouns* (e.g., linking "Apple" to "Fruit"). We will link based on *verbs* (mechanisms) and *tensions*.

**Process Strategy:**
Instead of just adding wikilinks to the bottom of files, we create **"Bridge Notes"** (or "Structures").

*   **Input:** Reads all files in `content/Ideas/`.
*   **Analysis:** It looks for three specific patterns:
    1.  **Causality:** Does Idea A look like the *cause* of Idea B?
    2.  **Contradiction:** Do Idea A and Idea B claim opposite things?
    3.  **Analogy:** Is Idea A in Context X the same mechanism as Idea B in Context Y?
*   **Output:** A **Bridge Note**.
    *   **Filename:** `content/Ideas/<Relationship Name>.md` (or a dedicated `Structures` folder).
    *   **Content:** A 280-char blurb explaining *only the relationship*.
    *   **Links:** Backlinks to the two parents.

**Insight Maximizer:**
Force the AI to label the edge. Link A to B via "enables", "contradicts", "retrieves", or "accelerates".

## 2. The Alchemist (The Synthesizing Skill)

**Goal:** Create new knowledge (Thesis) from existing atomic observations.

**The Problem:** The `atomize-article` skill relies on a **Quote** as the source of truth. A synthesis has no external quote—*you* (or the collective logic) are the source of truth.

**Process Strategy:**
This skill acts as a dialectic engine.

*   **Input:** Pick 2–3 disparate Ideas that "rub against each other."
*   **The Prompt:** "If Idea A (Thesis) and Idea B (Antithesis/Catalyst) are both true, what new prediction or principle (Synthesis) must also be true?"
*   **Output:** A **Thesis Note**.
    *   **Location:** `content/Ideas/` (or `content/Theses/`).
    *   **Structure:**
        *   **Title:** A new, provocative claim.
        *   **Blurb:** The synthesized insight.
        *   **The "Quote":** Instead of an external author, the "Quote" section becomes a **Reference Block** citing the parent Ideas as evidence.

**Insight Maximizer:**
Focus on **"The Unforeseen"**.
*   *Prompt constraint:* "Generate a synthesis that predicts a future behavior or explains a current confusion."
*   Example:
    *   Idea A: `Texting Retrieves Speech-Behavior`
    *   Idea B: `Oral cultures favor charismatic leaders`
    *   **Synthesis:** `The Digital dictator will rule via meme-magick, not policy.`

## Workflow

These act as "batch jobs" or periodic rituals.

### Skill 2: `connect-ideas` (The Weaver)
1.  **Scan:** Read all `content/Ideas/*.md`.
2.  **Cluster:** Identify a cluster of 3–5 notes sharing a latent theme.
3.  **Propose:** "I found a cluster around 'The loss of privacy'. It connects [Note A], [Note B], and [Note C]. Should I create a Connection Note called `Privacy is a Literacy Artefact`?"
4.  **Action:** Create the note linking the others and explaining the glue.

### Skill 3: `synthesize-thesis` (The Alchemist)
1.  **Select:** Pick 2 notes that seem unrelated or contradictory.
2.  **Hypothesize:** Generate 3 possible synthesized truths.
3.  **Propose:** "Combining `War Made Literacy` and `China's Firewall`...
    *   *Synthesis 1:* 'Firewalls are the new Borders for the Digital Nation-State.'
    *   *Synthesis 2:* 'Information control is a military, not cultural, strategy.'
    *   Which one should we solidify?"
4.  **Action:** Create the note.

## File Type Ecosystem

| Type | Role | Content | Source of Truth |
| :--- | :--- | :--- | :--- |
| **Source** | The Raw Material | Summary + Metadata | URL |
| **Idea** | The Atom | Single Concept | Quote (from Source) |
| **Structure** | The Thread | Relationship Description | 2+ Ideas |
| **Thesis** | The Alloy | New Prediction/Principle | Logic (derived from Ideas) |

