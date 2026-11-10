This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Updating the resume

The resume section displays `public/resume.tex` alongside the precompiled
`public/resume.pdf`. After editing the LaTeX source, regenerate the PDF with
pdfLaTeX (a TeX distribution with the packages used by the source is required).
Run it twice in a temporary directory, then copy the PDF into `public` and
regenerate the scrollable first-page preview with Poppler's `pdftoppm`:

```bash
mkdir -p /tmp/my-website-resume
cd /tmp/my-website-resume
pdflatex -interaction=nonstopmode -halt-on-error /path/to/my-website/public/resume.tex
pdflatex -interaction=nonstopmode -halt-on-error /path/to/my-website/public/resume.tex
cp resume.pdf /path/to/my-website/public/resume.pdf
pdftoppm -f 1 -l 1 -singlefile -png -r 150 resume.pdf /path/to/my-website/public/resume-preview
```

Commit the source, PDF, and preview image together so they stay in sync. The
preview shows the first page; the complete PDF remains available to open or
download. The assets are precompiled so the static site build and deployment do
not need LaTeX or Poppler installed.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
