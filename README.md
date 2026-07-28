# Michael FPV

Single-page site for Michael FPV -- drone and FPV cinematography, Charlotte NC.

Repo: https://github.com/michaelsfpv-ctrl/Michael-FPV

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire site. HTML, CSS, and JS in one file. |
| `favicon.svg` | Browser tab icon. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is. |

No build step, no dependencies, no server. Open `index.html` in a browser and it runs.

## Deploying to GitHub Pages

Since this repo is named `Michael-FPV` (not `YOURUSERNAME.github.io`), it deploys as a **project page**, and the live URL will include the repo name:

`https://michaelsfpv-ctrl.github.io/Michael-FPV/`

Steps:

1. On the repo page (https://github.com/michaelsfpv-ctrl/Michael-FPV), click **Add file -> Upload files**.
2. Drag in `index.html`, `favicon.svg`, and `.nojekyll`.
3. Click **Commit changes**.
4. Go to **Settings -> Pages**. Under *Source*, choose **Deploy from a branch**, set branch to `main` (or `master`, whichever this repo uses) and folder to `/ (root)`. Click **Save**.
5. Wait 1-2 minutes. The site is live at `https://michaelsfpv-ctrl.github.io/Michael-FPV/`.

Any time you change `index.html`, upload the new version and commit -- the live site updates within a minute.

### If you'd rather have a clean root URL

To get `https://michaelsfpv-ctrl.github.io` (no `/Michael-FPV/` in the path), you'd need a *second*, separately named repo called exactly `michaelsfpv-ctrl.github.io` and upload the same files there instead. GitHub only gives the root URL to a repo with that exact name. You can keep this repo too -- they don't conflict.

## Custom domain

Once you own a domain (roughly $12/year from Cloudflare or Namecheap):

**At your registrar**, add these DNS records:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `michaelsfpv-ctrl.github.io` |

**In GitHub**, go to Settings -> Pages -> Custom domain, enter your domain, save. Once the check passes, tick **Enforce HTTPS**.

## Before going live

**The contact form does not work yet.** It posts to a placeholder Formspree endpoint, so submissions go nowhere.

To fix it:
1. Sign up free at formspree.io.
2. Create a new form. Point it at michaelfpv06@gmail.com.
3. Copy the form ID from the endpoint Formspree gives you (the part after `/f/`).
4. In `index.html`, find `formspree.io/f/xdkoanab` and replace `xdkoanab` with your real ID.

The free tier covers 50 submissions per month.

**Videos are hosted on Cloudflare Stream.** They play only while that Cloudflare Stream account stays active. Confirm the account is yours and not on a trial before you launch.

## Contact

Michael Yushchenko
(980) 397-9127
michaelfpv06@gmail.com
@michael__fpv -- https://www.instagram.com/michael__fpv/
