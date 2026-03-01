# Portfolio — Alex Kim

A minimalist portfolio website built with React.

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Install & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── index.js        # React entry point
│   ├── App.js          # Root app component
│   └── Portfolio.jsx   # Main portfolio component (all sections)
├── package.json
└── README.md
```

## Sections

- **Hero** — Intro with CTA buttons
- **About** — Bio, skills, and stats
- **Featured Projects** — 3 highlighted works
- **Career Timeline** — Work & education history
- **Contact / Footer** — Email and social links

## Customization

Edit `src/Portfolio.jsx`:
- Update `PROJECTS` array with your own work
- Update `TIMELINE` array with your career history
- Change name, email, and social links in the footer section
