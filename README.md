# portfolio-niko

`portfolio-niko` is Niko Jekkonen's independent frontend CV site for `showcasing.fi/niko/`.

The site stays intentionally simple:

- React + Vite frontend
- static build output
- no backend
- no database
- no authentication
- deployment handled by GitHub Actions over FTPS

## Current manifest

```json
{
  "username": "niko",
  "deployPath": "/niko/",
  "siteTitle": "Niko Jekkonen | CV",
  "outputDir": "dist"
}
```

This manifest is the build and deployment contract for the repo:

- `username` is the source of truth for the remote directory
- `deployPath` must exactly match `/${username}/`
- `outputDir` is shared by the Vite build and the deployment workflow
- the workflow computes the FTP target as `/${username}/`

For this repository, the expected deploy target is `/niko/`.

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Notes:

- local development runs from `/`
- production builds use the manifest `deployPath`
- `npm run preview` is the easiest way to check the built site with production-like asset paths

## Production build

Build command:

```bash
npm run build
```

The build output goes to `dist/`.

Vite reads `portfolio.manifest.json` through `vite.config.js`, so production assets are generated for `/niko/`.

## Deployment workflow

Workflow file:

- `.github/workflows/deploy-plesk.yml`

The workflow:

- validates `portfolio.manifest.json`
- installs dependencies with `npm ci`
- runs `npm run build`
- computes the remote deploy directory from `username`
- deploys only the build output folder

Expected repository secrets:

- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`

Deployment note:

- the workflow uses FTPS by default
- this repo assumes the FTP user is already rooted at `httpdocs`
- the same host, username, and password can be reused across portfolio repos
- each repo still deploys only to its computed `/<username>/` target
- for this repo, that means `/niko/`
- if deployment issues continue, confirm FTPS and passive FTP support on the hosting side

The deployment safety model remains intact:

- `portfolio.manifest.json` must contain a real username
- `deployPath` must exactly match `/${username}/`
- the computed FTP target must be a valid `/<username>/` path and must not resolve to `/`

## Subpath behavior

This site is meant to live at `https://showcasing.fi/niko/`.

Subpath handling is kept lightweight:

- Vite prefixes production assets with `/niko/`
- internal navigation uses section anchors
- `public/.htaccess` keeps future client-side routes compatible with subdirectory deployment

## Project structure

```text
.
|-- .github/
|   `-- workflows/
|       `-- deploy-plesk.yml
|-- public/
|   `-- .htaccess
|-- scripts/
|   `-- portfolio-manifest.mjs
|-- src/
|   |-- components/
|   |-- data/
|   |-- sections/
|   `-- styles/
|-- index.html
|-- package.json
|-- portfolio.manifest.json
`-- vite.config.js
```

## Next updates

Likely follow-up work for this repo:

- refine any CV copy after proofreading against the latest PDF
- add any future portfolio or project pages only if they are needed later
- expand metadata and social preview assets if needed
