# PathPilot Level Creation Guide

This document is intended for AI agents and developers who want to generate new custom levels for **PathPilot**, an interactive educational game that teaches file system navigation.

## Overview
PathPilot uses a custom game engine that simulates a directory tree. Players must navigate from a `startPath` to a `targetPath` using absolute (e.g., `/home/user`) or relative (e.g., `../../docs`) paths. 

All built-in levels are defined in `src/lib/levels.ts`.

## Step 1: Understand the Data Structures
Before creating a level, you must understand the two core interfaces defined in `src/types/index.ts`.

### 1. `TreeNode`
This represents the folder structure of your level.
```typescript
export interface TreeNode {
  name: string; // The name of the folder (e.g., 'home')
  children: TreeNode[]; // Sub-folders inside this directory
}
```
*Note: The root node of the tree is the absolute root path. For example, if the root node is named `"root"`, all absolute paths start with `/root`.*

### 2. `LevelConfig`
This is the configuration object for your level.
```typescript
export interface LevelConfig {
  id: number; // Unique numerical identifier for the level
  name: string; // Display name of the level
  description: string; // Short instructions/context for the player
  tree: TreeNode; // The folder structure 
  startPath: string; // Absolute path where the robot spawns (e.g., '/home/documents')
  targetPath: string; // Absolute path the player must reach to win
  maxMoves: number | null; // Maximum allowed moves (null = unlimited)
  allowAbsolute: boolean; // If false, player can ONLY use relative paths (../)
  hiddenMode: boolean; // If true, enables "Fog of War" (hides distant folders)
  visibilityRadius: number; // If hiddenMode is true, how deep the player can see
}
```

## Step 2: Define a `TreeNode` Structure
Create a clear, logical, or tricky folder structure depending on the difficulty you want to achieve.

Example:
```typescript
const myCustomTree: TreeNode = {
  name: 'server',
  children: [
    {
      name: 'www',
      children: [
        { name: 'public', children: [] },
        { name: 'src', children: [] }
      ]
    },
    {
      name: 'logs',
      children: [
        { name: 'nginx', children: [] }
      ]
    }
  ]
};
```

## Step 3: Define the `LevelConfig`
Map the tree to a LevelConfig. 

**Critical Rules for Paths:**
- `startPath` and `targetPath` **MUST** be valid, existing absolute paths within your `TreeNode` structure.
- Absolute paths **MUST** start with a forward slash `/` followed by the root node name.
- In the example above, the root is `server`. So the path to `nginx` is `/server/logs/nginx`.

Example Level:
```typescript
export const customLevel: LevelConfig = {
  id: 6, // Make sure to increment from the last level ID
  name: 'Server Administration',
  description: 'Navigate from the public directory to the nginx logs using relative paths.',
  tree: myCustomTree,
  startPath: '/server/www/public',
  targetPath: '/server/logs/nginx',
  maxMoves: 3, // Constrain the player to make it a puzzle
  allowAbsolute: false, // Force them to use ../../logs/nginx
  hiddenMode: false,
  visibilityRadius: Infinity,
};
```

## Step 4: Add the Level to `src/lib/levels.ts`
1. Open `src/lib/levels.ts`.
2. Define your `TreeNode` and `LevelConfig` objects.
3. Scroll to the bottom of the file and append your `LevelConfig` to the `LEVELS` array.

```typescript
export const LEVELS: LevelConfig[] = [
  level1,
  level2,
  level3,
  level4,
  level5,
  customLevel // <--- Add your newly generated level here
];
```

## AI Generation Prompt Example
If you are an AI generating levels, ensure you:
1. Come up with a creative theme (e.g., "Hacking a Mainframe", "Organizing a Desktop", "Navigating a Space Ship").
2. Build a `TreeNode` that fits the theme.
3. Choose `startPath` and `targetPath` carefully to test specific traversal concepts (e.g., going up three levels and down two).
4. Apply modifiers like `hiddenMode: true` or `allowAbsolute: false` to create interesting mechanics.
5. Provide the exact code block to be injected into `src/lib/levels.ts`.
