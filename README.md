# Data table exercise

React table component with smart selection and status indicators.

## Quick Start

The project requires at least node version 20. I used 20.20 on my machine to avoid potential devDependency warnings related to certain eslint plugins.

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The app will run on `http://localhost:5173` by default.

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
  { id: '1', name: 'file.txt', device: 'Server', path: '/path', status: 'available' }
]}
/>;
```

## Tech stack

React + TypeScript + Vite + SCSS

---
