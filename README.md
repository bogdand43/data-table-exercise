# Data table exercise

React table component with smart selection and status indicators.

## Quick Start

### Prerequisites

- Node.js 20+ and npm/yarn

The project requires at least node version 20. I used 20.20 on my machine to avoid potential devDependency warnings related to certain eslint plugins.

### Installation

```bash
npm install
# or
yarn install
```

### Running the Application

```
npm run dev
# or
yarn dev
```

The app will run on port `5173` by default. Open
[http://localhost:5173](localhost:5173).

## Features

- Row selection (checkbox)
- Select-all (based on criteria) with "indeterminate" state
- Status indicator (available vs scheduled)
- Keyboard handling (space/enter to toggle row)
- TypeScript, CSS Modules
- Performance optimized (memo, useCallback)

## Usage

```tsx
import { DataTable } from './components/DataTable';

<DataTable data={[
  { name: 'doc1.pdf', device: 'Michael', path: '/docs', status: 'available' },
  { name: 'report.docx', device: 'Dwight', path: '/reports', status: 'scheduled' },
  { name: 'spreadsheet.xlsx', device: 'Jim', path: '/sheets', status: 'available' },
  { name: 'memo.txt', device: 'Pam', path: '/memos', status: 'scheduled' },
  { name: 'budget.csv', device: 'Angela', path: '/budgets', status: 'available' },
]}
/>;
```

## Tech stack

React + TypeScript + Vite + SCSS

---
