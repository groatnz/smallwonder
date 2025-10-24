# Small Wonder — Placeholder site

Single-file static site for `smallwonder.nz` hosted on GitHub Pages.

## Contents

- `index.html` — minimal accessible page
- `styles.css` — tiny stylesheet with brand palette
- `favicon.svg` — simple icon
- `CNAME` — configured to `smallwonder.nz`

## Brand

- Name: Small Wonder
- Tagline: Baby Massage Coaching
- Contact: `hello@smallwonder.nz`

## Publish on GitHub Pages (manual)

1. Create a public repo named `smallwonder` under your GitHub account.
2. Add these files and push to the `main` branch.
3. In repo Settings → Pages:
   - Source: `main` branch, `/ (root)`
   - Custom domain: `smallwonder.nz`
   - After DNS resolves, tick “Enforce HTTPS”.

### Quickstart commands (optional)

Replace `GITHUB_USER` with your username.

```bash
# from repo root
# git init && git add . && git commit -m "Initial placeholder"
# git remote add origin git@github.com:GITHUB_USER/smallwonder.git
# git branch -M main && git push -u origin main
```

## DNS on cp.sitehost.nz (manual)

Add these records for the zone `smallwonder.nz`:

Apex `smallwonder.nz` (A):

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

`www.smallwonder.nz` (CNAME):

- Target: `smallwonder.nz`

Optional IPv6 (AAAA) — confirm current values in GitHub Pages docs:

- 2606:50c:8000::153
- 2606:50c:8001::153
- 2606:50c:8002::153
- 2606:50c:8003::153

Propagation may take time. Once GitHub verifies the domain, enable HTTPS in Pages settings.

## Local preview

Open `index.html` in a browser. No build steps.

## License

Public domain (CC0) or adapt as you wish.
