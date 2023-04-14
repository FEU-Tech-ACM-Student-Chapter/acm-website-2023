# FEU Tech ACM Website 2023

This repository contains the source code of the FEU Tech ACM website.
The website is currently being migrated from php to next.js.

- [FEU Tech ACM Website 2023](#feu-tech-acm-website-2023)
  - [Tech Stack](#tech-stack)
  - [Development](#development)
    - [Pre-requisites](#pre-requisites)
    - [Branches](#branches)
    - [Getting Started](#getting-started)
    - [Dev Deployment](#dev-deployment)
    - [Prod Deployment](#prod-deployment)
  - [Contributors](#contributors)

## Tech Stack

- Next.js
- Typescript
- ESLint + Prettier
- CSS Modules

## Development

### Pre-requisites

- Node.js
- yarn
- git
- VSCode (recommended)

### Branches

- `dev` - development branch
- `prod` - production branch

### Getting Started

Note: install the recommended extensions after opening the project in VSCode.

```bash
# clone the repo
git clone https://github.com/FEU-Tech-ACM-Student-Chapter/acm-website-2023.git

# checkout dev branch
git checkout dev

# check for new package updates
npx npm-check-updates -u

# install dependencies
yarn install

# start the development server on localhost:3000
yarn dev

# Optional: Remove --turbo flag at package.json if errors occur
```

### Dev Deployment

```bash
# Delete _next folder for a fresh build
rm -rf _next

# Debug the code first (format, lint, build)
yarn run debug

# If no warnings or errors, add changes
git add .

# commit changes w/ conventional commits (https://www.conventionalcommits.org/en/v1.0.0/)
git commit -m "<type>[optional scope]: <description>"

# push changes to dev branch
git push origin dev
```

### Prod Deployment

```bash
# checkout prod branch
git checkout prod

# merge dev branch
git merge dev

# replace all local server urls with production server urls
# e.g. http://localhost:3000 -> https://acm.feu.edu.ph
# VS Code: ctrl + shift + f -> replace all

# push changes to prod branch
git push origin prod
```

The website will be deployed to [Vercel](https://vercel.com) where it will be strictly checked with github actions then hosted to the domain [acm.feu.edu.ph](https://acm.feu.edu.ph).

## Contributors

GitHub Organization: [FEU Tech ACM Student Chapter](https://github.com/FEU-Tech-ACM-Student-Chapter)
GitHub Repo: [acm-website-2023](https://github.com/FEU-Tech-ACM-Student-Chapter/acm-website-2023)

1. [Alpha Romer Coma](https://www.linkedin.com/in/alpha-coma/) - Developer
2. [Marc Steven Clemen](https://www.linkedin.com/in/marc-steven-clemen-2ab23a193/) - Developer
3. [Jester Sean Caspillo](https://www.linkedin.com/in/jestersean/) - UI/UX Designer
4. [John Felix Agda](https://www.linkedin.com/in/johnagda/) - Graphic Designer
5. [Micah Sophia Tan](https://www.linkedin.com/in/micahsophiatan/) - Quality Assurance
