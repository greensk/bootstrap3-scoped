# Scoped Bootstrap 3

A scoped version of Bootstrap 3 CSS framework, tailored for use within isolated contexts to avoid global style conflicts.

## Overview

This project provides a customized Bootstrap 3 stylesheet that is scoped to a specific parent selector (e.g., `.bootstrap`) to prevent Bootstrap styles from leaking into other areas of a larger project or conflicting with other CSS frameworks or custom styles.

## Features

- Full suite of Bootstrap 3 styles scoped under a custom root selector.
- Compatible with all Bootstrap 3 components and utilities.
- Easy integration into existing projects without global CSS interference.
- Maintains Bootstrap 3 responsive grid and utilities within scope.

## Installation

Download the Distribution Zip file. Unarchive it into your www root directory.
Include the scoped Bootstrap CSS in your project:

```
<link rel="stylesheet" href="/bootstrap3-scoped.css">

```

## Customizing the parent selector

1. Clone the project:

```
git clone https://github.com/greensk/bootstrap3-scoped.git
```

2. Install Node.js 20+.
3. Run `npm install` to download dependencies.
4. Copy `node_modules/bootstrap3/dist/css` directory to `./bootstrap`
5. Run the following script to generate scoped CSS using your desired scope:

```
node index.js .my-scope
```

6. Use a generated `bootstrap3-scoped.css` file.
