---
name: atomize-article
description: Turn any article into a Source note plus 2–4 atomic Ideas. Each note uses one ≤280-character blurb (plain, non-tweetly) backed by a single quote. Keep everything aligned with the vault theme and avoid repeating existing Sources or Ideas.
---

# Atomize Article

Transform articles into structured Source notes and atomic Idea notes for the vault. Every summary and idea stays under 280 characters, keeps an eighth-grade reading level, and is grounded in one verbatim quote. Always pause for explicit user approval between steps.

## Workflow

Follow these steps exactly, pausing for user approval after each.

### Step 0: Get Article

Ask the user for the article. If it lacks URL, author, title, or date, request the missing metadata before moving on. Review `VAULT_THEME.md`, existing Sources, and Ideas so the new material fits the vault focus and doesn’t duplicate earlier work.

### Step 1: Draft Source Note

Create a concise Source draft with frontmatter (no `title` field), one blurb, one quote, and an empty Ideas section. Abbreviate the article title to a few punchy words, add a hyphen, then the author’s last name (abbreviate if needed), and use that string strictly for the filename / conversation shorthand—never write it into the YAML. Before drafting, open an existing Source note’s `## Ideas` section and mirror its formatting conventions so new notes stay consistent. Keep the blurb ≤280 characters, plain in tone, and fully supported by the quote.

```markdown
---
url: <Article URL>
author: <Author Name>
article_title: <Full Article Title>
date: <Publication Date>
---

## Summary

[One ≤280-character blurb capturing the article’s core idea.]

> [Single block quote that best supports the summary.]

## Ideas

<!-- Leave blank until Step 3 -->
```

Confirm saving location (`content/Sources/<Abbrev Title - Lastname>.md`) and ask: _Proceed with drafting Idea notes? (Y/N)_

### Step 2: Draft Idea Notes

Identify five distinct, non-overlapping ideas from the article and present them explicitly as **Proposed Atomic Ideas**. Each proposal is a 2–3 word title that reads well in the sidebar, one ≤280-character blurb describing the idea, and one corroborating quote. Keep tone plain, cite quotes directly, reuse existing proper-noun titles when they already exist in the vault, and skip any Summary header—go straight from the title to the blurb. Write the blurbs at an eighth-grade reading level: prefer concrete language, unpack abstractions into simpler expressions, and lean on concise analogies when they clarify without distorting the original meaning.

```markdown
# <Idea Title>

[One ≤280-character blurb focused on this single idea.]

> [Supporting quote for that idea.]
```

List the five Proposed Atomic Ideas (title, blurb, quote) and ask the user to choose which 2–4 to manifest as actual Idea notes. Confirm their selections and ask: _Create these selected files and link them? (Y/N)_

### Step 3: Create Files & Link Ideas

With approval:

1. Save the Source note to `content/Sources/<Abbrev Title - Lastname>.md` (frontmatter + Summary + blank `## Ideas` if not already written).
2. Save each selected Idea note to `content/Ideas/<Idea Title>.md` using the format from Step 2.
3. Return to the Source note and populate the `## Ideas` section with embedded wiki links, one per Idea. Each embed must sit on its own `### ![[Idea Title]]` line directly under `## Ideas` (never place `##` and an embed on the same line), e.g.:
   ```
   ## Ideas
   ### ![[Idea Title]]
   ```
   (Only the headers + links live here; the blurbs and quotes stay inside the Idea files.)
4. Double-check every link resolves, quotes stay faithful to the article, and wording matches the vault theme.

## Key Principles

- **Exactly one blurb + one quote** in every Source and Idea note section (≤280 characters for blurbs)
- **No YAML title field**: never add `title:` to Source or Idea frontmatter; store article titles under another key (e.g., `article_title`) instead
- **Match precedent**: skim another Source note’s `## Ideas` block before writing so headers, spacing, and wiki links align with the established pattern
- **Ideas layout**: keep the `## Ideas` header, then list each embed as a `### ![[Idea Title]]` line—never use `##` headings for embeds or share a line with the `## Ideas` header
- **Eighth-grade voice**: Ideas stay at an eighth-grade reading level, simplifying abstract concepts, using analogies when useful, and avoiding default academic phrasing while staying faithful to the source
- **Stay on theme** by re-reading `VAULT_THEME.md` and scanning existing notes before writing
- **No duplication**: skip any idea already in the vault or merge it into an existing note
- **Clarity and brevity**: plain tone, eighth-grade reading level, no tweet-speak or promotion
- **User approval required**: confirm before drafting Ideas and before creating/linking files
- **Check placements**: Source notes live in `content/Sources/`, Ideas in `content/Ideas/`, each as short, single-purpose files
