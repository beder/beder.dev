# beder.dev

Source of <https://beder.dev>, the professional site of Beder Acosta Borges.

## Stack

Static HTML with a single hand-written stylesheet (`css/main.css`). No build
step, no dependencies, no third-party requests: fonts are self-hosted woff2
subsets, and the page carries zero scripts.

## Local preview

Open `index.html` directly, or serve the folder:

```sh
docker compose up
```

and browse to <http://localhost>.

## Deployment

GitHub Pages serves the `master` branch at the `CNAME` domain. Merging to
`master` is the deploy.
