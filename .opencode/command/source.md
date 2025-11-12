---
description: Summarize and create Source note and a collection of atomic Idea notes based on the pasted source document.
---

Your task is to create a Source note in content/Sources that summarizes the pasted article, and then to create a collection of Idea notes in content/Ideas with small, atomic ideas taken from the article. At each step in the workflow, stop and ask the user for feedback. Proceed only with their go ahead.

0.
Ask the user for the article. If it doesn't have frontmatter, ask the user to provide it.

1. 
For each Source, create markdown with the following fields:
    - Frontmatter with fields taken from the pasted article (needs URL, author, and title at the minimum)
	- one sentence summary of the source
	- a few more details in the form of bullet points
	- A bulleted section of ![[embedded wikilinks]] where each link is a brief explanation of a core idea from the article. They need not be complete sentences, but should be evocative, well-worded articulations. maximum 6 per article.
		- Try to consolidate similar ideas into overarching ideas and remove ones that seem obvious, un-provocative, or easily subsumed by existing others
		- Search the Ideas folder—each idea's title should convey its idea—and make sure you're not duplicating anything that already exists, either

For example:

---
source frontmatter here
---

## Summary
one sentence summary

- complete sentences supporting/clarifying add'l info
- from 2-5 depending on complexity, but try to not repeat things in Ideas

## Ideas
- ![[main point one is this]]
- ![[main point two is this]]
- ![[main point three is this]]

***
The writing should be simple and clear. Aim to write at an eighth grade reading level, in a super legible, easy to skim kind of way.

Think creatively—not as a helpful assistant, but as an independent thinker searching for truth.

Await the user's feedbacking and prompt them (Y/N) for proceeding.

2.
Propose the full text of each of the wikilinks from above. These should distill the Sources into their most essential/indivisible ideas.

 They should have the following format:
	- One sentence declaration of the main point. Simple, clear reasoning.
	- A supplementary text field offering 1-3 additional sentences clarifying the main point.
	- A direct quote from the source backing up the claim of the atomic main point.

Note: sometimes you may want to reference a person or other proper noun. Do so in [[wikilinks]]. However, if you're going to use a wikilink, first search the content folder to see if a close variation of such a page or wikilink already exists, spelled another way. If another close variation exists, use that instead.

Example:
***
Aesthetic choices in technology and infrastructure projects reveal an organization's governance philosophy and ability to build cultural consensus.

- The 1970s space program used consistent futuristic aesthetics to project soft power and build public support for ambitious projects.
- Contemporary tech companies display confused aesthetics mixing dystopian and corporate sanitized elements, revealing limitations in their cultural vision.
- National space programs deliberately choose names and designs that project their governance values - China's "Tiangang" (Heavenly Palace) versus Russia's "Mir" (World/Peace).

> The Cybertruck is the Nolan Batman, it's the aliens troop delivery vehicle... whereas the Tesla robot is from this kind of heavily productized, heavily sanitized, kind of corporate future... that's one of the biggest tells beyond posting stupid tweets - the fact that this person who's in control of so many companies, then could have such a singular effect on culture, doesn't know what he's doing in terms of design.
***
Await the user's feedbacking and prompt them (Y/N) for proceeding.

Again: The writing should be simple and clear. Aim to write at an eighth grade reading level, in a super legible, easy to skim kind of way.

Think creatively—not as a helpful assistant, but as an independent thinker searching for truth.

3.
Once the user approves of these, create the relevant in files in the content/ folder in project root.
