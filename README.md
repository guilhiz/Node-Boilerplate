<h1 align="center">My Node Boilerplate with TypeScript</h1>


## :gear: Configs
- :arrows_counterclockwise: [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file) — Automated dependency updates for GitHub repositories.
- :diamond_shape_with_a_dot_inside: [Express](http://expressjs.com/pt-br/) —  Fast, flexible web framework for Node.js
- :card_file_box: [Prisma](https://www.prisma.io/) — A modern database ORM
- :sparkles: [TSX](https://www.npmjs.com/package/tsx) — Node.js library with esbuild to run TypeScript & ESM files
- :zap: [TSUP](https://tsup.egoist.dev/) — A fast and flexible TypeScript building tool
- :file_folder: [Dotenv-cli](https://www.npmjs.com/package/dotenv-cli) — To load multiple environment variables files
- :wrench: [ESLint](https://eslint.org/) — Pluggable JavaScript linter
- :art: [Prettier](https://prettier.io/) — Opinionated Code Formatter
- :pencil: [Commitzen](https://github.com/commitizen/cz-cli) — Git commit message helper
- :dog: [Husky](https://typicode.github.io/husky/#/) — Use git hooks with ease
- :no_entry_sign: [Lint-staged](https://github.com/okonet/lint-staged) — Run linters against staged git files
### Libs
- :lock: [Zod](https://zod.dev/) — TypeScript-first schema validation.
- :key: [JWT](https://jwt.io/) — JSON Web Token implementation.
- :microscope: [Jest](https://jestjs.io/pt-BR/) — A popular JavaScript testing framework
- :closed_lock_with_key: [Bcrypt](https://www.npmjs.com/package/bcrypt) — Library for hashing passwords.
- :shield: [Helmet](https://www.npmjs.com/package/helmet) — Express middleware for securing HTTP headers.
- :scissors: [Saniteze-html](https://www.npmjs.com/package/sanitize-html) — Remove HTML tags from a string.

## :rocket: Getting Started

To use this boilerplate as a template for your own project, follow these steps:

  - Click on the `Use this template` button on this repository page to create a new repository from this template.
  - Choose a name and configure the new repository as desired.
  - Clone the newly created repository to your local machine with the following command in your terminal:

```shel
git clone https://github.com/<YOUR_USERNAME>/<YOUR_PROJECT_NAME>.git
```

After cloning the repository, run the following commands inside the project folder:
- Install the dependencies with `npm install`
- Create an `env.development` file in the `envs folder`
- Configure the environment variables based on the `envs/.env.development.example`
- Run the project with `npm run dev`

## :file_folder: Main File Structure

```ts
├── 📁.github // GitHub workflows
├── 📁.husky // Git hooks
├── 📁.envs // Environment variables
├── 📁.prisma // Prisma ORM configuration
|
├── 📁src
|   ├── 📁configs // Application configurations
|   ├── 📁controllers // Request controllers
|   ├── 📁errors // Custom error classes
|   ├── 📁middlewares // Middleware functions
|   ├── 📁repositories // Data access layer
|   ├── 📁routes  // Application routes
|   ├── 📁schemas // Request schemas
|   ├── 📁services // Business logic layer
|   ├── 📁utils // General utilities
|   |   ├──📁constants // Global constants
|   |   └──📁functions // Utility functions
|   |
|   ├── 📄app.ts // Express app configuration
|   └── 📄server.ts // Server entry point
|
├── 📁tests
|   ├── 📁factories // Test data factories
|   ├── 📁integration // Integration tests
|   └── 📁unit // Unit tests
|
├── 📄.eslintrc.json // ESLint configuration file
├── 📄.prettierrc // Prettier configuration file
├── 📄jest.config.ts // Jest configuration file
├── 📄README.md // Project documentation
├── 📄package.json // NPM package configuration file
└── 📄tsconfig.json // TypeScript configuration file

```

## :octocat: How to use commitzen

1. Run `git add` to stage changes
2. Run `git commit` without providing a message to use Commitzen
3. Use the Commitzen interface to write and confirm the commit message

[commitzen](https://user-images.githubusercontent.com/109693663/227851152-e4332627-9841-4589-8785-65763f4a0abe.mp4)

## :handshake: Contributing

If you want to contribute to this template, follow these steps:

- Fork this repository
- Create a new branch with their feature using `git checkout -b my-feature`.
- Commit their changes using `git commit -m 'Adding new feature'`.
- Push the changes to their branch using `git push origin my-feature`.
- Open a pull request on your repository.

