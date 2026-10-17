# Mayank R. Deo — Portfolio Website

A responsive, two-page personal portfolio for recruiter-focused storytelling and project discovery. It is a plain static website: HTML, CSS, and browser JavaScript only. There is no backend, database, build step, or paid hosting requirement.

## What's included

- `index.html` — professional profile, impact metrics, experience, capabilities, skills, education, certifications, awards, and contact links.
- `projects.html` — vertical project cards, category filters, typo-tolerant fuzzy search, and detailed case-study dialogs.
- `assets/css/styles.css` — responsive design, typography, layout, and component styling.
- `assets/js/projects-data.js` — project content and editable external-link configuration.
- `assets/js/projects.js` — rendering, search/ranking, category filters, details dialogs, and missing-link messages.
- `.nojekyll` — tells GitHub Pages not to run Jekyll processing for this static site.

## Preview it on your computer

1. Extract the ZIP to a folder.
2. Open `index.html` in Chrome, Edge, Firefox, or Safari.
3. Select **Projects** in the top navigation to check the project library.

The Google Fonts import improves typography when online; if those fonts are unavailable, the site falls back to system fonts. All content and functionality otherwise run locally.

## Publish for free with GitHub Pages

You do not need to install Git or write any code for the simplest route.

1. Sign in to [GitHub](https://github.com/) or create a free account.
2. Create a **new repository**. A simple name is `mayank-portfolio`. For a public portfolio, set the repository to **Public**.
3. Download and extract this portfolio ZIP on your computer.
4. Open the repository page on GitHub. Choose **Add file → Upload files**.
5. Upload the *contents* of the extracted `mayank-portfolio` folder—not the ZIP itself. Make sure `index.html`, `projects.html`, `.nojekyll`, `README.md`, and the `assets` folder are at the repository root, not inside another nested folder.
6. Commit the upload to the `main` branch.
7. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Choose branch `main` and folder `/(root)`, then click **Save**.
8. Reopen **Settings → Pages** after the deployment finishes. GitHub will show the published address there. It usually follows this pattern:

   `https://YOUR-GITHUB-USERNAME.github.io/mayank-portfolio/`

   The exact URL depends on your GitHub username and repository name. The URL shown in GitHub Pages settings is the one to share.

### Optional: use the shorter root address

If you create a repository named exactly `YOUR-GITHUB-USERNAME.github.io`, GitHub Pages can publish it at `https://YOUR-GITHUB-USERNAME.github.io/`. The repository name must exactly match the account username. Otherwise, use the project address shown by GitHub Pages.

## How to share the live site

- Copy the published address from **Settings → Pages** and open it in a private/incognito window to verify it works for people who are not signed in.
- Add it to the **Featured** section of your LinkedIn profile and to the portfolio/website field on your profile.
- Put it near your LinkedIn and email address on your résumé, for example: `Portfolio: https://YOUR-GITHUB-USERNAME.github.io/mayank-portfolio/`.
- Share that same URL with recruiters and hiring managers. It is public while the published site/repository remain configured for public access.

## Add real project website or source-code links

I did not invent public project URLs, because none were included in the information provided. The project cards already show all three actions. **Documentation** opens the built-in case study (or an external documentation URL if you add one). **Project website** and **Source code** explain that a link has not been configured yet, rather than sending visitors to a fake destination.

To add a genuine public URL:

1. Open `assets/js/projects-data.js`.
2. Find the relevant project by its title.
3. Edit its `links` object. For example:

   ```js
   links: {
     documentation: "",
     website: "https://your-real-demo.example",
     source: "https://github.com/your-username/your-project"
   },
   ```

4. Save the file, upload the edited file to the same path in your GitHub repository, and commit the change.

Only add links you have permission to share. Several projects describe work done in employer environments; do not publish proprietary code, credentials, internal diagrams, customer information, or production data. A sanitized case study is safer than publishing internal artifacts.

## Customize your contact details

Your provided email and LinkedIn URL are already included. Your phone number, email address, and LinkedIn URL are included in the contact area. Because the phone number is public on this site, consider whether you are comfortable receiving unsolicited calls before publishing.

## Change the content later

- Professional profile and work-history text: edit `index.html`.
- Project text, outcomes, technology tags, and URLs: edit `assets/js/projects-data.js`.
- Site appearance: edit `assets/css/styles.css`.

## Technical notes

- Search supports partial matches, ranking, and common typing errors (for example, `kubernets` can still match `Kubernetes`).
- Category filters can be combined with search.
- The site is responsive and has keyboard-focus states, a skip link, reduced-motion support, and keyboard shortcut `Ctrl+K` / `Cmd+K` for project search.
- No analytics, forms that collect data, third-party database, or server code is included.
