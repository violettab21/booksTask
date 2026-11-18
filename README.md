# Books Catalog

## Task

A responsive web application that allows users to search for books by title via an Open API, explore search results and save their favorite books locally.

[Task Description](https://drive.google.com/file/d/1RBRcuH-_oAvtjem5Xs0c4NXZ8I38aYyH/view)

## How to run the app

1. Clone the repository:

```
  git clone https://github.com/violettab21/booksTask.git
```

2. Switch to develop branch:

```
  git checkout develop
```

3. Install dependencies:

```
  npm install
```

4. Start the development server:

```
  npm run dev
```

5. Build for production:

```
  npm run build
```

6. Preview the production build locally:

```
  npm run preview
```

## Project structure

```text
├── index.html              # Main HTML entry point
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and npm scripts
└── src/
    ├── assets/
    │   └── icons/          # Icons
    ├── styles/             # Stylesheets
    └── js/
        ├── api/            # External API requests
        ├── services/       # Business logic, state, and localStorage
        ├── ui/             # DOM rendering and event handlers
        └── utils/          # Reusable helpers
```
