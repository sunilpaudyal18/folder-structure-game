/**
 * LEVELS
 *
 * Pre-built level configurations with increasing difficulty.
 */

import type { LevelConfig, TreeNode } from '@/types';

/* ============================================================
   LEVEL 1: Basics
   Small tree, full visibility, no restrictions.
   ============================================================ */
const level1Tree: TreeNode = {
  name: 'home',
  children: [
    {
      name: 'documents',
      children: [
        { name: 'notes', children: [] },
        { name: 'photos', children: [] },
      ],
    },
    {
      name: 'downloads',
      children: [],
    },
  ],
};

/* ============================================================
   LEVEL 2: Relative Paths
   Must use relative paths. Start not at root.
   ============================================================ */
const level2Tree: TreeNode = {
  name: 'root',
  children: [
    {
      name: 'src',
      children: [
        { name: 'components', children: [] },
        { name: 'utils', children: [] },
      ],
    },
    {
      name: 'docs',
      children: [
        { name: 'api', children: [] },
        { name: 'guides', children: [] },
      ],
    },
    {
      name: 'tests',
      children: [],
    },
  ],
};

/* ============================================================
   LEVEL 3: Hidden Structure
   Only partial tree visible (fog of war).
   ============================================================ */
const level3Tree: TreeNode = {
  name: 'server',
  children: [
    {
      name: 'config',
      children: [
        { name: 'env', children: [] },
        { name: 'keys', children: [] },
      ],
    },
    {
      name: 'data',
      children: [
        { name: 'cache', children: [] },
        {
          name: 'logs',
          children: [
            { name: 'errors', children: [] },
            { name: 'access', children: [] },
          ],
        },
      ],
    },
    {
      name: 'bin',
      children: [],
    },
  ],
};

/* ============================================================
   LEVEL 4: Constraints
   Limited moves, no absolute paths.
   ============================================================ */
const level4Tree: TreeNode = {
  name: 'project',
  children: [
    {
      name: 'frontend',
      children: [
        {
          name: 'src',
          children: [
            { name: 'pages', children: [] },
            { name: 'styles', children: [] },
          ],
        },
        { name: 'public', children: [] },
      ],
    },
    {
      name: 'backend',
      children: [
        {
          name: 'src',
          children: [
            { name: 'routes', children: [] },
            { name: 'models', children: [] },
          ],
        },
      ],
    },
  ],
};

/* ============================================================
   LEVEL 5: Complex Tree
   Deep hierarchy, multiple valid paths.
   ============================================================ */
const level5Tree: TreeNode = {
  name: 'system',
  children: [
    {
      name: 'usr',
      children: [
        {
          name: 'local',
          children: [
            {
              name: 'bin',
              children: [
                { name: 'scripts', children: [] },
              ],
            },
            { name: 'lib', children: [] },
            { name: 'share', children: [] },
          ],
        },
        { name: 'bin', children: [] },
      ],
    },
    {
      name: 'etc',
      children: [
        { name: 'nginx', children: [] },
        {
          name: 'systemd',
          children: [
            { name: 'services', children: [] },
          ],
        },
      ],
    },
    {
      name: 'var',
      children: [
        {
          name: 'log',
          children: [
            { name: 'syslog', children: [] },
            { name: 'auth', children: [] },
          ],
        },
        { name: 'tmp', children: [] },
      ],
    },
  ],
};

const secretLabTree: TreeNode = {
  name: 'lab',
  children: [
    {
      name: 'projects',
      children: [
        {
          name: 'alpha',
          children: [
            { name: 'source', children: [] },
            { name: 'tests', children: [] },
            { name: 'docs', children: [] }
          ]
        },
        {
          name: 'beta',
          children: [
            { name: 'experiments', children: [] },
            { name: 'data', children: [] }
          ]
        },
        {
          name: 'gamma',
          children: [
            { name: 'research', children: [] },
            { name: 'classified', children: [] }
          ]
        }
      ]
    },
    {
      name: 'secure',
      children: [
        {
          name: 'vault',
          children: [
            { name: 'level1', children: [] },
            { name: 'level2', children: [] },
            { name: 'restricted', children: [] }
          ]
        },
        {
          name: 'backup',
          children: [
            { name: 'archive', children: [] }
          ]
        }
      ]
    },
    {
      name: 'shared',
      children: [
        { name: 'public', children: [] },
        { name: 'temp', children: [] }
      ]
    }
  ]
};

const mazeTree: TreeNode = {
  name: 'maze',
  children: [
    {
      name: 'level1',
      children: [
        { name: 'room_a', children: [] },
        { name: 'room_b', children: [] },
        {
          name: 'hub',
          children: [
            { name: 'north', children: [] },
            { name: 'south', children: [] },
            { name: 'east', children: [] },
            { name: 'west', children: [] }
          ]
        }
      ]
    },
    {
      name: 'level2',
      children: [
        {
          name: 'secret',
          children: [
            { name: 'treasure', children: [] },
            { name: 'decoy', children: [] }
          ]
        },
        { name: 'trap', children: [] }
      ]
    },
    {
      name: 'level3',
      children: [
        {
          name: 'warp',
          children: [
            { name: 'zone_a', children: [] },
            { name: 'zone_b', children: [] },
            {
              name: 'portal',
              children: [
                { name: 'exit', children: [] }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const deepSystemTree: TreeNode = {
  name: 'system',
  children: [
    {
      name: 'root',
      children: [
        {
          name: 'bin',
          children: [
            { name: 'core', children: [] },
            { name: 'utils', children: [] }
          ]
        },
        {
          name: 'var',
          children: [
            {
              name: 'log',
              children: [
                { name: 'apache', children: [] },
                { name: 'mysql', children: [] },
                {
                  name: 'system',
                  children: [
                    { name: 'critical', children: [] },
                    { name: 'debug', children: [] }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'usr',
          children: [
            {
              name: 'local',
              children: [
                {
                  name: 'share',
                  children: [
                    { name: 'documents', children: [] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
const spyTree: TreeNode = {
  name: 'agency',
  children: [
    {
      name: 'ops',
      children: [
        { name: 'alpha', children: [] },
        { name: 'bravo', children: [] },
        {
          name: 'charlie',
          children: [
            { name: 'intel', children: [] },
            {
              name: 'classified',
              children: [
                { name: 'top_secret', children: [] },
                { name: 'eyes_only', children: [] }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'safehouse',
      children: [
        {
          name: 'cache',
          children: [
            { name: 'dropbox', children: [] }
          ]
        }
      ]
    },
    {
      name: 'dead_drop',
      children: [
        { name: 'package', children: [] }
      ]
    }
  ]
};

const quantumTree: TreeNode = {
  name: 'quantum',
  children: [
    {
      name: 'dimension_a',
      children: [
        {
          name: 'reality_1',
          children: [
            {
              name: 'timeline_alpha',
              children: [
                { name: 'past', children: [] },
                { name: 'present', children: [] },
                { name: 'future', children: [] }
              ]
            }
          ]
        },
        {
          name: 'reality_2',
          children: [
            { name: 'alternate', children: [] },
            {
              name: 'parallel',
              children: [
                { name: 'universe_x', children: [] }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'dimension_b',
      children: [
        {
          name: 'reality_3',
          children: [
            {
              name: 'timeline_beta',
              children: [
                { name: 'quantum_anchor', children: [] }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'nexus',
      children: [
        { name: 'stabilizer', children: [] }
      ]
    }
  ]
};
// LEVEL 11: The Labyrinth
const labyrinthTree: TreeNode = {
  name: 'labyrinth',
  children: [
    {
      name: 'start',
      children: [
        { name: 'north', children: [{ name: 'trap', children: [] }, { name: 'hall', children: [{ name: 'door', children: [] }] }] },
        { name: 'south', children: [{ name: 'pit', children: [] }, { name: 'corridor', children: [{ name: 'gate', children: [] }] }] },
        { name: 'east', children: [{ name: 'wall', children: [] }, { name: 'path', children: [{ name: 'staircase', children: [] }] }] },
        { name: 'west', children: [{ name: 'dead_end', children: [] }, { name: 'passage', children: [{ name: 'exit', children: [] }] }] }
      ]
    },
    {
      name: 'level2',
      children: [
        { name: 'dungeon', children: [{ name: 'cell', children: [{ name: 'treasure', children: [] }] }] },
        { name: 'tower', children: [{ name: 'top', children: [{ name: 'key', children: [] }] }] }
      ]
    }
  ]
};

// LEVEL 12: Minimum Moves Challenge
const compactTree: TreeNode = {
  name: 'a',
  children: [
    { name: 'b', children: [{ name: 'c', children: [{ name: 'd', children: [{ name: 'target', children: [] }] }] }] },
    { name: 'x', children: [{ name: 'y', children: [{ name: 'z', children: [] }] }] }
  ]
};

// LEVEL 13: Many Siblings
const wideTree: TreeNode = {
  name: 'root',
  children: Array.from({ length: 50 }, (_, i) => ({
    name: `dir_${i}`,
    children: i === 27 ? [{ name: 'needle', children: [{ name: 'target', children: [] }] }] : []
  }))
};

// LEVEL 14: Reverse Navigation
const reverseTree: TreeNode = {
  name: 'deep',
  children: [
    {
      name: 'nested',
      children: [
        {
          name: 'very',
          children: [
            {
              name: 'extremely',
              children: [
                { name: 'deep', children: [{ name: 'start_here', children: [] }] }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'shallow',
      children: [{ name: 'target', children: [] }]
    }
  ]
};

// LEVEL 15: Limited Visibility + Countdown
const countdownTree: TreeNode = {
  name: 'core',
  children: [
    {
      name: 'system',
      children: [
        { name: 'kernel', children: [{ name: 'modules', children: [{ name: 'drivers', children: [{ name: 'target', children: [] }] }] }] },
        { name: 'boot', children: [{ name: 'loader', children: [] }] },
        { name: 'init', children: [{ name: 'scripts', children: [] }] }
      ]
    },
    {
      name: 'user',
      children: [
        { name: 'home', children: [{ name: 'start', children: [] }] },
        { name: 'tmp', children: [] }
      ]
    }
  ]
};

// LEVEL 16: Cyclic References (if supported)
const cyclicTree: TreeNode = {
  name: 'cycle',
  children: [
    { name: 'a', children: [] },
    { name: 'b', children: [] },
    { name: 'c', children: [] }
  ]
};
// Note: Add reference to 'a' in children if cyclic allowed

// LEVEL 17: Deep Fog - Radius 0
const zeroVisibilityTree: TreeNode = {
  name: 'void',
  children: [
    { name: 'abyss', children: [{ name: 'depths', children: [{ name: 'target', children: [] }] }] },
    { name: 'surface', children: [{ name: 'start', children: [] }] }
  ]
};

// LEVEL 18: Multiple Targets - First to reach
const multiTargetTree: TreeNode = {
  name: 'race',
  children: [
    { name: 'fast', children: [{ name: 'path', children: [{ name: 'target1', children: [] }] }] },
    { name: 'slow', children: [{ name: 'long', children: [{ name: 'winding', children: [{ name: 'target2', children: [] }] }] }] },
    { name: 'medium', children: [{ name: 'shortcut', children: [{ name: 'target3', children: [] }] }] }
  ]
};

// LEVEL 19: Dynamic Path Requirements
const dynamicTree: TreeNode = {
  name: 'dynamic',
  children: [
    {
      name: 'phase1',
      children: [
        { name: 'temp', children: [] },
        { name: 'working', children: [{ name: 'start', children: [] }] }
      ]
    },
    {
      name: 'phase2',
      children: [
        { name: 'final', children: [{ name: 'target', children: [] }] },
        { name: 'backup', children: [] }
      ]
    }
  ]
};

// LEVEL 20: Asymmetric Tree
const asymmetricTree: TreeNode = {
  name: 'root',
  children: [
    {
      name: 'left',
      children: [
        { name: 'left_left', children: [{ name: 'left_left_left', children: [{ name: 'deep_target', children: [] }] }] },
        { name: 'left_right', children: [] }
      ]
    },
    {
      name: 'right',
      children: [
        { name: 'right_left', children: [{ name: 'start_point', children: [] }] },
        { name: 'right_right', children: [{ name: 'right_right_right', children: [{ name: 'very_deep', children: [] }] }] }
      ]
    }
  ]
};

// LEVEL 21: Zero Moves Left
const zeroMoveTree: TreeNode = {
  name: 'nowhere',
  children: [
    { name: 'start', children: [{ name: 'target', children: [] }] }
  ]
};

// LEVEL 22: Nested Symlinks (disguised)
const symlinkTree: TreeNode = {
  name: 'root',
  children: [
    { name: 'actual_start', children: [] },
    { name: 'shortcut', children: [{ name: '->', children: [{ name: 'actual_start', children: [] }] }] },
    { name: 'real_target', children: [] },
    { name: 'fake', children: [{ name: '->', children: [{ name: 'real_target', children: [] }] }] }
  ]
};

// LEVEL 23: Maximum Depth
const maxDepthTree: TreeNode = (() => {
  let current: TreeNode = { name: 'level_99', children: [] };
  for (let i = 98; i >= 0; i--) {
    current = { name: `level_${i}`, children: [current] };
  }
  return { name: 'top', children: [current] };
})();

// LEVEL 24: Branching Nightmare
const branchingTree: TreeNode = {
  name: 'start',
  children: Array.from({ length: 10 }, (_, i) => ({
    name: `branch_${i}`,
    children: Array.from({ length: 10 }, (_, j) => ({
      name: `sub_${j}`,
      children: j === 5 ? [{ name: 'target', children: [] }] : []
    }))
  }))
};

// LEVEL 25: Moving Target (Conceptual)
const movingTree: TreeNode = {
  name: 'station',
  children: [
    { name: 'platform_a', children: [{ name: 'train', children: [{ name: 'target_now', children: [] }] }] },
    { name: 'platform_b', children: [{ name: 'schedule', children: [{ name: 'target_next', children: [] }] }] }
  ]
};

// LEVEL 26: Exact Path Length Required
const exactPathTree: TreeNode = {
  name: 'a',
  children: [
    { name: 'b', children: [{ name: 'c', children: [{ name: 'd', children: [{ name: 'e', children: [{ name: 'target', children: [] }] }] }] }] },
    { name: 'x', children: [{ name: 'y', children: [{ name: 'target', children: [] }] }] }
  ]
};

// LEVEL 27: Backtracking Required
const backtrackTree: TreeNode = {
  name: 'root',
  children: [
    {
      name: 'deep',
      children: [
        {
          name: 'in',
          children: [
            {
              name: 'the',
              children: [
                {
                  name: 'woods',
                  children: [
                    { name: 'start', children: [] },
                    { name: 'dead_end', children: [] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'other',
      children: [
        { name: 'path', children: [{ name: 'to', children: [{ name: 'target', children: [] }] }] }
      ]
    }
  ]
};

// LEVEL 28: No . or .. allowed
const noDotTree: TreeNode = {
  name: 'absolute',
  children: [
    { name: 'only', children: [{ name: 'paths', children: [{ name: 'start', children: [] }] }] },
    { name: 'target_dir', children: [{ name: 'goal', children: [] }] }
  ]
};

// LEVEL 29: Time Pressure - 3 Seconds per Move
const timePressureTree: TreeNode = {
  name: 'timer',
  children: [
    { name: 'quick', children: [{ name: 'fast', children: [{ name: 'urgent', children: [{ name: 'target', children: [] }] }] }] },
    { name: 'slow', children: [{ name: 'leisurely', children: [{ name: 'relaxed', children: [] }] }] }
  ]
};

// LEVEL 30: All Constraints Combined
const ultimateTree: TreeNode = {
  name: 'ultimate',
  children: [
    {
      name: 'challenge',
      children: [
        {
          name: 'extreme',
          children: [
            { name: 'difficulty', children: [{ name: 'start_point', children: [] }] },
            { name: 'hard', children: [{ name: 'mode', children: [{ name: 'target_final', children: [] }] }] }
          ]
        }
      ]
    },
    { name: 'distraction', children: [{ name: 'fake', children: [{ name: 'target', children: [] }] }] }
  ]
};

// LEVEL 31: Perfect Path Only
const perfectTree: TreeNode = {
  name: 'perfect',
  children: [
    { name: 'path_a', children: [{ name: 'path_b', children: [{ name: 'path_c', children: [{ name: 'target', children: [] }] }] }] },
    { name: 'wrong', children: [{ name: 'way', children: [{ name: 'target', children: [] }] }] }
  ]
};

// LEVEL 32: Mirror World
const mirrorTree: TreeNode = {
  name: 'mirror',
  children: [
    { name: 'left', children: [{ name: 'right', children: [{ name: 'target', children: [] }] }] },
    { name: 'right', children: [{ name: 'left', children: [{ name: 'start', children: [] }] }] }
  ]
};

// LEVEL 33: Quantum Superposition
const quantumSuperTree: TreeNode = {
  name: 'quantum',
  children: [
    { name: 'state_a', children: [{ name: 'state_b', children: [{ name: 'target', children: [] }] }] },
    { name: 'state_b', children: [{ name: 'state_a', children: [{ name: 'start', children: [] }] }] }
  ]
};

// LEVEL 34: Minimum Visibility - Radius 0, No Absolute
const blindTree: TreeNode = {
  name: 'blind',
  children: [
    { name: 'navigation', children: [{ name: 'required', children: [{ name: 'target', children: [] }] }] },
    { name: 'start_here', children: [] }
  ]
};

// LEVEL 35: Maximum Moves = Exact Moves
const exactMovesTree: TreeNode = {
  name: 'exact',
  children: [
    { name: 'one', children: [{ name: 'two', children: [{ name: 'three', children: [{ name: 'four', children: [{ name: 'five', children: [{ name: 'target', children: [] }] }] }] }] }] },
    { name: 'shortcut', children: [{ name: 'target', children: [] }] }
  ]
};

const doubleBackTree: TreeNode = {
  name: 'root',
  children: [
    { name: 'a', children: [{ name: 'b', children: [{ name: 'start', children: [] }] }] },
    { name: 'target_zone', children: [{ name: 'goal', children: [] }] }
  ]
};

const fakeShortcutTree: TreeNode = {
  name: 'root',
  children: [
    { name: 'shortcut', children: [{ name: 'trap', children: [] }] },
    { name: 'long', children: [{ name: 'way', children: [{ name: 'to', children: [{ name: 'target', children: [] }] }] }] }
  ]
};

const hybridTree: TreeNode = {
  name: 'start',
  children: Array.from({ length: 20 }, (_, i) => ({
    name: `branch_${i}`,
    children: i === 13 ? [{ name: 'deep', children: [{ name: 'target', children: [] }] }] : []
  }))
};

const misleadingTree: TreeNode = {
  name: 'root',
  children: [
    { name: 'target', children: [{ name: 'fake', children: [] }] },
    { name: 'real', children: [{ name: 'target', children: [] }] }
  ]
};

const detourTree: TreeNode = {
  name: 'root',
  children: [
    { name: 'direct', children: [{ name: 'blocked', children: [] }] },
    { name: 'indirect', children: [{ name: 'path', children: [{ name: 'target', children: [] }] }] }
  ]
};

const exactMinimalTree: TreeNode = {
  name: 'a',
  children: [
    { name: 'b', children: [{ name: 'target', children: [] }] },
    { name: 'c', children: [{ name: 'd', children: [{ name: 'target', children: [] }] }] }
  ]
};

const ladderTree: TreeNode = {
  name: 'base',
  children: [{ name: 'step1', children: [{ name: 'step2', children: [{ name: 'step3', children: [{ name: 'target', children: [] }] }] }] }]
};

const deadEndTree: TreeNode = {
  name: 'root',
  children: Array.from({ length: 10 }, (_, i) => ({
    name: `path_${i}`,
    children: i === 7 ? [{ name: 'target', children: [] }] : [{ name: 'dead', children: [] }]
  }))
};

const forcedBacktrackTree: TreeNode = {
  name: 'root',
  children: [
    { name: 'start', children: [{ name: 'wrong', children: [{ name: 'dead', children: [] }] }] },
    { name: 'correct', children: [{ name: 'target', children: [] }] }
  ]
};

const symmetryTree: TreeNode = {
  name: 'root',
  children: [
    { name: 'left', children: [{ name: 'right', children: [] }] },
    { name: 'right', children: [{ name: 'left', children: [{ name: 'target', children: [] }] }] }
  ]
};

const memoryTree: TreeNode = {
  name: 'start',
  children: [{ name: 'a', children: [{ name: 'b', children: [{ name: 'c', children: [{ name: 'd', children: [{ name: 'target', children: [] }] }] }] }] }]
};

const doubleTargetTree: TreeNode = {
  name: 'root',
  children: [
    { name: 'target', children: [] },
    { name: 'real', children: [{ name: 'target', children: [] }] }
  ]
};

const narrowTree: TreeNode = {
  name: 'root',
  children: [
    { name: 'only', children: [{ name: 'one', children: [{ name: 'path', children: [{ name: 'target', children: [] }] }] }] },
    { name: 'trap', children: [] }
  ]
};

const spiralTree: TreeNode = {
  name: 'center',
  children: [{ name: 'layer1', children: [{ name: 'layer2', children: [{ name: 'layer3', children: [{ name: 'target', children: [] }] }] }] }]
};

const finalBossTree: TreeNode = {
  name: 'boss',
  children: [
    { name: 'fake', children: [{ name: 'target', children: [] }] },
    { name: 'real', children: [{ name: 'deep', children: [{ name: 'true_target', children: [] }] }] }
  ]
};

/*

/* ============================================================
   LEVEL CONFIGS
   ============================================================ */
export const LEVELS: LevelConfig[] = [
  {
    id: 1,
    name: 'The Basics',
    description: 'Learn to navigate with simple paths. Use absolute or relative paths to reach the target folder.',
    tree: level1Tree,
    startPath: '/home',
    targetPath: '/home/documents/notes',
    maxMoves: null,
    allowAbsolute: true,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 2,
    name: 'Relative Navigation',
    description: 'Only relative paths allowed. Use .. to go up and folder names to go down.',
    tree: level2Tree,
    startPath: '/root/src/components',
    targetPath: '/root/docs/guides',
    maxMoves: null,
    allowAbsolute: false,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 3,
    name: 'Fog of War',
    description: 'The tree is hidden. Only nearby folders are visible. Explore to find your way.',
    tree: level3Tree,
    startPath: '/server/config',
    targetPath: '/server/data/logs/errors',
    maxMoves: null,
    allowAbsolute: true,
    hiddenMode: true,
    visibilityRadius: 2,
  },
  {
    id: 4,
    name: 'Under Pressure',
    description: 'Limited moves and no absolute paths. Plan your route carefully.',
    tree: level4Tree,
    startPath: '/project/frontend/src/pages',
    targetPath: '/project/backend/src/models',
    maxMoves: 6,
    allowAbsolute: false,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 5,
    name: 'Deep Dive',
    description: 'A complex tree with deep nesting. Multiple valid paths exist. Find the most efficient route.',
    tree: level5Tree,
    startPath: '/system/var/log/syslog',
    targetPath: '/system/usr/local/bin/scripts',
    maxMoves: 10,
    allowAbsolute: true,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 6,
    name: 'Secret Research Lab',
    description: 'Navigate from the alpha source directory to the secure vault level2. You can only see nearby folders!',
    tree: secretLabTree,
    startPath: '/lab/projects/alpha/source',
    targetPath: '/lab/secure/vault/level2',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 2,
  },
  {
    id: 7,
    name: 'The Maze',
    description: 'Find your way from the hub to the treasure. The maze has many dead ends!',
    tree: mazeTree,
    startPath: '/maze/level1/hub',
    targetPath: '/maze/level2/secret/treasure',
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 8,
    name: 'Deep System Recovery',
    description: 'Recover the critical logs starting from the documents folder. Use relative paths only!',
    tree: deepSystemTree,
    startPath: '/system/root/usr/local/share/documents',
    targetPath: '/system/root/var/log/system/critical',
    maxMoves: null,
    allowAbsolute: false,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 9,
    name: 'The Spy Mission',
    description: 'Escape from the classified eyes_only room to the safehouse dropbox. Maximum security - no absolute paths, limited moves!',
    tree: spyTree,
    startPath: '/agency/ops/charlie/classified/eyes_only',
    targetPath: '/agency/safehouse/cache/dropbox',
    maxMoves: 6,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 10,
    name: 'Quantum Leap',
    description: 'Navigate from the past timeline to the quantum anchor. Extreme difficulty - fog of war, limited visibility, and absolute paths disabled!',
    tree: quantumTree,
    startPath: '/quantum/dimension_a/reality_1/timeline_alpha/past',
    targetPath: '/quantum/dimension_b/reality_3/timeline_beta/quantum_anchor',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 11,
    name: 'The Labyrinth of Doom',
    description: 'Find the treasure in the dungeon. Many paths lead to traps! Visibility: 1, Moves: 8, No absolute paths.',
    tree: labyrinthTree,
    startPath: '/labyrinth/start/hall/door',
    targetPath: '/labyrinth/level2/dungeon/cell/treasure',
    maxMoves: 8,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 12,
    name: 'Minimum Viable Path',
    description: 'You must reach the target in exactly 4 moves. No more, no less.',
    tree: compactTree,
    startPath: '/a/b/c/d',
    targetPath: '/a/b/c/d/target',
    maxMoves: 4,
    allowAbsolute: true,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 13,
    name: 'Needle in a Haystack',
    description: '50 directories, only one contains the target. Navigate carefully!',
    tree: wideTree,
    startPath: '/root/dir_0',
    targetPath: '/root/dir_27/needle/target',
    maxMoves: 10,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 2,
  },
  {
    id: 14,
    name: 'Reverse Psychology',
    description: 'Start at the deepest point, target is near the root. Use .. wisely!',
    tree: reverseTree,
    startPath: '/deep/nested/very/extremely/deep/start_here',
    targetPath: '/deep/shallow/target',
    maxMoves: 7,
    allowAbsolute: false,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 15,
    name: 'Countdown Protocol',
    description: 'Only 3 moves allowed! Choose the shortest valid route.',
    tree: countdownTree,
    startPath: '/core/system/kernel/modules',
    targetPath: '/core/system/kernel/modules/drivers/target',
    maxMoves: 3,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 2,
  },
  {
    id: 16,
    name: 'Repetition Trap',
    description: 'Some paths look similar. Don’t get confused.',
    tree: cyclicTree,
    startPath: '/cycle/a',
    targetPath: '/cycle/b',
    maxMoves: 3,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 17,
    name: 'Absolute Darkness',
    description: 'Visibility radius: 0. You can only see current directory. Memory required!',
    tree: zeroVisibilityTree,
    startPath: '/void/surface/start',
    targetPath: '/void/abyss/depths/target',
    maxMoves: 6,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 0,
  },
  {
    id: 18,
    name: 'Race Against Time',
    description: 'Multiple targets exist. Reach any one within 4 moves.',
    tree: multiTargetTree,
    startPath: '/race/fast/path',
    targetPath: '/race/fast/path/target1', // Any target works
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 19,
    name: 'Dynamic Shifting',
    description: 'You must use exactly 2 moves up and 3 moves down. No other sequences work.',
    tree: dynamicTree,
    startPath: '/dynamic/phase1/working/start',
    targetPath: '/dynamic/phase2/final/target',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 20,
    name: 'Asymmetric Warfare',
    description: 'Extremely unbalanced tree. One wrong turn costs you the level.',
    tree: asymmetricTree,
    startPath: '/root/right/right_left/start_point',
    targetPath: '/root/left/left_left/left_left_left/deep_target',
    maxMoves: 6,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 21,
    name: 'Zero Moves',
    description: 'You are already at the target.',
    tree: zeroMoveTree,
    startPath: '/nowhere/start/target',
    targetPath: '/nowhere/start/target',
    maxMoves: 0,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 22,
    name: 'Symbolic Confusion',
    description: 'Symlinks everywhere! The real path is hidden behind shortcuts.',
    tree: symlinkTree,
    startPath: '/root/shortcut/->/actual_start',
    targetPath: '/root/fake/->/real_target',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 23,
    name: 'Descent into Madness',
    description: '100 levels deep. One wrong move and you\'re lost forever.',
    tree: maxDepthTree,
    startPath: '/top/level_0/level_1/level_2',
    targetPath: '/top/level_0/level_1/level_2/level_3/level_4/level_5/level_6/level_7/level_8/level_9/level_10',
    maxMoves: 15,
    allowAbsolute: true,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 24,
    name: 'Branching Pathogenesis',
    description: '100 directories, 10 levels deep. Only one path leads to salvation.',
    tree: branchingTree,
    startPath: '/start/branch_0/sub_0',
    targetPath: '/start/branch_3/sub_5/target',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 25,
    name: 'Moving Target',
    description: 'The target changes every 2 moves! Be adaptable.',
    tree: movingTree,
    startPath: '/station/platform_a/train',
    targetPath: '/station/platform_b/schedule/target_next', // Changes dynamically
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 26,
    name: 'Exact Distance',
    description: 'You must use exactly 6 moves. Shorter or longer paths fail.',
    tree: exactPathTree,
    startPath: '/a/b/c/d/e',
    targetPath: '/a/b/c/d/e/target', // 1 move vs /a/x/y/target is 3 moves
    maxMoves: null, // Special validation
    allowAbsolute: false,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 27,
    name: 'Backtracking Blues',
    description: 'Sometimes you must go backwards to go forwards.',
    tree: backtrackTree,
    startPath: '/root/deep/in/the/woods/start',
    targetPath: '/root/other/path/to/target',
    maxMoves: 8,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 28,
    name: 'Absolute Zero',
    description: 'Absolute paths allowed, but they\'re all wrong! Use relative only.',
    tree: noDotTree,
    startPath: '/absolute/only/paths/start',
    targetPath: '/absolute/target_dir/goal',
    maxMoves: 5,
    allowAbsolute: true, // Trap! Using them fails
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 29,
    name: 'Speed Demon',
    description: '3 second time limit per move! Plan your route before executing.',
    tree: timePressureTree,
    startPath: '/timer/slow/leisurely',
    targetPath: '/timer/quick/fast/urgent/target',
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 30,
    name: 'Ultimate Test',
    description: 'Everything combined: Fog of war, move limit, no absolute paths, hidden structure, radius 1.',
    tree: ultimateTree,
    startPath: '/ultimate/challenge/extreme/difficulty/start_point',
    targetPath: '/ultimate/challenge/extreme/hard/mode/target_final',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 31,
    name: 'Perfect Path Only',
    description: 'Only one specific sequence of moves works. Any deviation fails.',
    tree: perfectTree,
    startPath: '/perfect/path_a/path_b/path_c',
    targetPath: '/perfect/path_a/path_b/path_c/target',
    maxMoves: 1,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 32,
    name: 'Mirror Dimension',
    description: 'Left is right, up is down. Navigate the paradox.',
    tree: mirrorTree,
    startPath: '/mirror/right/left/start',
    targetPath: '/mirror/left/right/target',
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 33,
    name: 'Quantum Superposition',
    description: 'The target exists in multiple states until observed.',
    tree: quantumSuperTree,
    startPath: '/quantum/state_b/state_a/start',
    targetPath: '/quantum/state_a/state_b/target',
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 34,
    name: 'Blind Faith',
    description: 'Visibility radius 0. No absolute paths. 3 moves only. Memorize or die.',
    tree: blindTree,
    startPath: '/blind/start_here',
    targetPath: '/blind/navigation/required/target',
    maxMoves: 3,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 0,
  },
  {
    id: 35,
    name: 'Exact Moves Challenge',
    description: 'You must reach in exactly 5 moves. Not 4, not 6. Perfect planning required.',
    tree: exactMovesTree,
    startPath: '/exact/one/two/three/four',
    targetPath: '/exact/one/two/three/four/five/target',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 36,
    name: 'Double Back',
    description: 'Go back before going forward.',
    tree: doubleBackTree,
    startPath: '/root/a/b/start',
    targetPath: '/root/target_zone/goal',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 37,
    name: 'False Shortcut',
    description: 'Shortcut is a trap.',
    tree: fakeShortcutTree,
    startPath: '/root/shortcut',
    targetPath: '/root/long/way/to/target',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 38,
    name: 'Wide Scan',
    description: 'Many choices, one correct.',
    tree: hybridTree,
    startPath: '/start/branch_0',
    targetPath: '/start/branch_13/deep/target',
    maxMoves: 6,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 2,
  },
  {
    id: 39,
    name: 'Name Trap',
    description: 'Names can lie.',
    tree: misleadingTree,
    startPath: '/root',
    targetPath: '/root/real/target',
    maxMoves: 3,
    allowAbsolute: true,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 40,
    name: 'Blocked Route',
    description: 'Direct path is blocked.',
    tree: detourTree,
    startPath: '/root/direct',
    targetPath: '/root/indirect/path/target',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 41,
    name: 'Shortest Path',
    description: 'Only shortest path works.',
    tree: exactMinimalTree,
    startPath: '/a',
    targetPath: '/a/b/target',
    maxMoves: 2,
    allowAbsolute: false,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 42,
    name: 'Ladder',
    description: 'Climb step by step.',
    tree: ladderTree,
    startPath: '/base',
    targetPath: '/base/step1/step2/step3/target',
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 43,
    name: 'Dead Ends',
    description: 'Avoid wrong paths.',
    tree: deadEndTree,
    startPath: '/root',
    targetPath: '/root/path_7/target',
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 44,
    name: 'Backtrack Required',
    description: 'Wrong first, then right.',
    tree: forcedBacktrackTree,
    startPath: '/root/start',
    targetPath: '/root/correct/target',
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 45,
    name: 'Symmetry Trap',
    description: 'Looks same, behaves different.',
    tree: symmetryTree,
    startPath: '/root/left',
    targetPath: '/root/right/left/target',
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 46,
    name: 'Memory Test',
    description: 'Deep navigation required.',
    tree: memoryTree,
    startPath: '/start',
    targetPath: '/start/a/b/c/d/target',
    maxMoves: 6,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 0,
  },
  {
    id: 47,
    name: 'Double Target',
    description: 'Pick the correct one.',
    tree: doubleTargetTree,
    startPath: '/root',
    targetPath: '/root/real/target',
    maxMoves: 3,
    allowAbsolute: true,
    hiddenMode: false,
    visibilityRadius: Infinity,
  },
  {
    id: 48,
    name: 'One Path',
    description: 'Only one valid route.',
    tree: narrowTree,
    startPath: '/root',
    targetPath: '/root/only/one/path/target',
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 49,
    name: 'Spiral',
    description: 'Go deeper layer by layer.',
    tree: spiralTree,
    startPath: '/center',
    targetPath: '/center/layer1/layer2/layer3/target',
    maxMoves: 4,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  },
  {
    id: 50,
    name: 'Final Boss',
    description: 'Fake vs real target.',
    tree: finalBossTree,
    startPath: '/boss',
    targetPath: '/boss/real/deep/true_target',
    maxMoves: 5,
    allowAbsolute: false,
    hiddenMode: true,
    visibilityRadius: 1,
  }
];
