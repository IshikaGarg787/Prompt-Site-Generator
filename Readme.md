# Prompt-Site-Generator

## Project Description

This is a Node.js command-line interface (CLI) tool that generates
static websites (HTML, CSS, and JavaScript files) based on a user
prompt. For example, running
`gen-site --prompt "generate a marketing site for a solar startup"` uses
the Google Gemini API to scaffold a ready-to-deploy site in an `output/`
folder. The tool is built using pure AI assistance (e.g., Grok or Gemini
for code generation) without manual coding, making it ideal for
beginners or rapid prototyping.

### Key Features

-   Takes a natural language prompt as input.
-   Uses Gemini API (an LLM) to generate professional, responsive site
    templates.
-   Outputs static files: `index.html`, `style.css`, `script.js`.
-   Deployable to platforms like Netlify or GitHub Pages.

**Difficulty:** Intermediate (involves terminal commands and API setup).

------------------------------------------------------------------------

## Tools Used

-   Node.js (runtime for the CLI).
-   VS Code (editor for viewing/editing files).
-   Gemini API (for generating site content).

------------------------------------------------------------------------

## Prerequisites

Before running the project: - A computer with macOS, Windows, or Linux
(instructions assume macOS with zsh shell; adjust for other OS). -
Internet access for downloads and API calls. - A Google account for the
Gemini API key (free tier available). - If using Conda/Anaconda (for
Python environments), note that it may interfere with Node.js
PATH---deactivate if issues arise.

------------------------------------------------------------------------

## Installation: Step-by-Step Guide

### Step 1: Install Node.js

1.  Go to [nodejs.org](https://nodejs.org).
2.  Download the LTS version (e.g., 22.x or latest stable).
3.  Run the installer and follow prompts (accept defaults).
4.  Verify in Terminal:

``` bash
node -v
npm -v
```

Should show versions like `v22.5.1` and `10.x.x`.

### Step 2: Install VS Code

1.  Go to [code.visualstudio.com](https://code.visualstudio.com).
2.  Download and install.
3.  Open VS Code and install extensions: "Node.js Extension Pack" and
    "Live Server".

### Step 3: Get a Gemini API Key

1.  Go to
    [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey).
2.  Sign in with your Google account.
3.  Create API key and copy it.
4.  Store securely as environment variable.

### Step 4: Create the Project Folder

``` bash
mkdir prompt-site-generator
cd prompt-site-generator
npm init -y
```

### Step 5: Install Dependencies

``` bash
npm install @google/generative-ai commander
```

### Step 6: Create the Main Script (index.js)

Create `index.js` file and paste the given code.

### Step 7: Configure CLI

Update `package.json` with:

``` json
"bin": { "gen-site": "./index.js" }
```

### Step 8: Set the Gemini API Key

1.  In the root of your project folder, you will find a file named `.env`.
2.  Open this file and replace `YOUR_API_KEY` with the actual Gemini API key you obtained.

```
GEMINI_API_KEY="YOUR_API_KEY"
```

This file is already in your `.gitignore`, so your API key will not be committed to GitHub.


### Step 9: Link CLI Globally

``` bash
sudo npm link
```

### Step 10: Run the Project

``` bash
gen-site --prompt "your prompt"
```

Files will appear in `output/`.

------------------------------------------------------------------------
## Some Examples of Prompt

- For weddings:
    gen-site --prompt "Create a modern minimalist wedding website with clean typography, white space, and subtle animations"

- For restaurants:
    gen-site --prompt "Design a rustic Italian restaurant website with warm colors, wooden textures, and appetizing food galleries"

- For photographers:
    gen-site --prompt "Build a photographer portfolio website with full-screen images, minimal text, and smooth transitions"

- For fitness studios:
    gen-site --prompt "Design an energetic fitness studio website with bold typography, action photos, and class schedule integration"

- For personal blogs:
    gen-site --prompt "Create a minimalist personal blog with serif fonts, plenty of whitespace, and elegant reading experience"

- For tech startups:
    gen-site --prompt "Design a modern tech startup website with gradient colors, geometric patterns, and innovative animations"

- For coffee shops:
    gen-site --prompt "Build a cozy coffee shop website with earth tones, handwritten fonts, and Instagram feed integration"

- For art galleries:
    gen-site --prompt "Create an elegant art gallery website with black background, minimal design, and focus on artwork display"

- For real estate:
    gen-site --prompt "Design a luxury real estate website with large property images, virtual tours, and sophisticated layout"

- For medical practices:
    gen-site --prompt "Build a trustworthy medical practice website with calming colors, clear information hierarchy, and easy scheduling"

- For yoga studios:
    gen-site --prompt "Create a zen yoga studio website with peaceful imagery, soft colors, and class booking functionality"

- For music bands:
    gen-site --prompt "Design an edgy band website with dark theme, video backgrounds, and tour date listings"

- For bakeries:
    gen-site --prompt "Build a charming bakery website with pastel colors, product galleries, and online ordering system"

- For law firms:
    gen-site --prompt "Create a professional law firm website with navy and gold colors, serif fonts, and attorney profiles"

- For travel blogs:
    gen-site --prompt "Design an inspiring travel blog with full-width images, map integration, and destination guides"

- For educational platforms:
    gen-site --prompt "Build an engaging educational platform with friendly colors, clear navigation, and course listings"

- For interior designers:
    gen-site --prompt "Create an elegant interior design portfolio with large project images, before/after comparisons, and minimal text"

- For nonprofit organizations:
    gen-site --prompt "Design an impactful nonprofit website with emotional imagery, clear call-to-actions, and donation integration"

- For fashion boutiques:
    gen-site --prompt "Build a chic fashion boutique website with lookbook galleries, shop functionality, and trendy typography"
    
- For event planners:
    gen-site --prompt "Create a sophisticated event planning website with portfolio galleries, service packages, and contact forms"
------------------------------------------------------------------------
## Troubleshooting

-   Permission errors: Use `sudo` or fix file permissions.
-   Conda PATH interference: `conda deactivate`.
-   Invalid API key: Regenerate at AI Studio.
-   CLI not found: Ensure `npm link` and PATH are correct.

------------------------------------------------------------------------

## Knowledge Enhancement for QA Round

### Project Overview

-   A CLI tool in Node.js that uses Gemini API to generate static sites.
-   Input: natural language prompt.
-   Output: ready-to-deploy static site.

### Key Concepts

-   **Node.js CLI Tools:** Run JS in terminal, use
    `#!/usr/bin/env node`.
-   **Environment Variables:** Store API keys securely.
-   **LLM Integration:** Craft structured prompts for Gemini API.
-   **Static Sites:** HTML/CSS/JS with no backend.
-   **Error Handling:** Catch API or parsing issues.

### FAQs

-   **API quota issues:** Retry or upgrade.
-   **Invalid JSON:** Refine prompt, add error handling.
-   **Scaling:** Add themes, deployment integration.

------------------------------------------------------------------------

## Potential Improvements

-   Add themes (`--theme dark`).
-   Auto-deploy to Netlify.
-   Error logging to file.

------------------------------------------------------------------------

## License

ISC License -- free to use and modify.
