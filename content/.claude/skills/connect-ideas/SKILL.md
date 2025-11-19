---
name: connect-ideas
description: Reveal hidden threads between Ideas by identifying causality, contradiction, or analogy. Creates Link notes that explain relationships. Use when asked to connect ideas, find patterns, or discover relationships in the vault.
---

# Connect Ideas (The Weaver)

Scan existing Idea notes to discover invisible threads—causal chains, contradictions, and analogies across contexts. Create Link notes that explain how seemingly unrelated ideas actually connect.

## Workflow

Follow these steps exactly, pausing for user approval after each.

### Step 0: Scan Ideas

Read all files in `content/Ideas/` to understand the vault's current landscape. Re-read `VAULT_THEME.md` to stay aligned with the vault focus. Look for three relationship patterns:

1. **Causality**: Does Idea A appear to cause or enable Idea B?
2. **Contradiction**: Do Ideas claim opposite things or create tension?
3. **Analogy**: Is the mechanism in Idea A (Context X) the same as Idea B (Context Y)?

### Step 1: Propose Links

**Link proposals should be speculative, high variance, not too obvious**. Look for novel connections and weird ideas. Feel free to ask questions and not propose definite facts—pursue surprising relationships that might exist rather than only connections you're certain about.

Present exactly five distinct connection proposals as **Proposed Links**. Each proposal includes:

- A 2-3 word hyphenated title (e.g., `War-Drives-Literacy`, `Texting-Retrieves-Orality`)
- The two (or more) Idea titles being connected
- One ≤280-character blurb explaining both ideas and the nature of their relationship using wikilinks to reference the Ideas
- The relationship pattern (causality, contradiction, or analogy)

Keep tone plain and eighth-grade reading level. Focus on the mechanism or tension connecting the ideas, not just restating them.

List all five proposals and ask the user to choose which 2-4 to create as Link notes. Confirm their selections and ask: _Create these selected Link notes? (Y/N)_

### Step 2: Create Link Notes

With approval:

1. Save each selected Link note to `content/Links/<Link-Title>.md` using this format:

   ```markdown
   [≤280-character blurb with [[wikilinks]] explaining the relationship]
   ```

2. Double-check every wikilink resolves to an actual Idea note
3. Verify the blurb stays ≤280 characters and uses plain language
4. Use wikilink aliasing `[[Idea Title|display text]]` when needed to make prose flow naturally

## Key Principles

- **Exactly one blurb per Link note** (≤280 characters)
- **No frontmatter**: Link notes have no YAML headers
- **No Ideas section**: Just the blurb—the wikilinks already connect to the Ideas
- **Hyphenated titles**: Use 2-3 words with hyphens (e.g., `Literacy-Enables-Logic`) to distinguish from Idea notes
- **Wikilinks required**: The blurb must use `[[Idea Title]]` wikilinks to reference connected ideas
- **Wikilink aliasing**: Use `[[Idea Title|display text]]` syntax when titles don't fit prose naturally
- **Focus on the bond**: Explain the relationship mechanism, not just the ideas themselves
- **Eighth-grade voice**: Plain language, concrete expressions, avoid academic jargon
- **No duplication**: Skip connections already implied or explicitly stated in existing notes
- **User approval required**: Confirm before creating Link notes
- **File placement**: All Link notes live in `content/Links/`

## Examples

### Causality Link

```markdown
[[War Made Literacy]] because states needed educated soldiers to compete. [[Literacy collapse drives cognitive decline]] reverses this—when military pressure fades, literacy becomes optional and cognition weakens.
```

### Analogy Link

```markdown
[[Texting Retrieves Speech-Behavior]] works like [[Oral Memory Is Homeostatic]]—both prioritize emotional resonance over fixed accuracy. Digital speech-behavior and oral memory both value what feels right now, not archival truth.
```

### Contradiction Link

```markdown
[[Plato Feared Writing]] because it would weaken memory, yet [[Writing Invented Logic]] by enabling the abstract thought writing preserves. The tool Plato feared created the very reasoning that makes his argument possible.
```

### Using Wikilink Aliasing

```markdown
[[War Made Literacy|War forced mass education]] when Prussia's literate soldiers beat France. Now [[Economically Optional Literacy|elites no longer need educated workers]] because AI replaces that function.
```
