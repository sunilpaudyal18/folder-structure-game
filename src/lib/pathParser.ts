/**
 * PATH PARSER
 *
 * Resolves user-entered paths (absolute or relative) against the file tree.
 * Returns step-by-step traversal for animation and validation.
 *
 * Conventions:
 *  - Root node path: "/rootName"
 *  - Child path:     "/rootName/childName"
 *  - Absolute input:  starts with "/"
 *  - Relative input:  starts with "..", ".", or a folder name
 */

import type { TreeNode, PathResult } from '@/types';

/**
 * Split an absolute path string into its segment array.
 * "/root/src/app" -> ["root", "src", "app"]
 */
export function pathToSegments(path: string): string[] {
  return path.split('/').filter(Boolean);
}

/**
 * Join segments back into an absolute path string.
 * ["root", "src", "app"] -> "/root/src/app"
 */
export function segmentsToPath(segments: string[]): string {
  return '/' + segments.join('/');
}

/**
 * Look up a node in the tree by its absolute path.
 * Returns null if the path is invalid.
 */
export function getNodeByPath(root: TreeNode, path: string): TreeNode | null {
  const segments = pathToSegments(path);
  if (segments.length === 0 || segments[0] !== root.name) return null;

  let current = root;
  for (let i = 1; i < segments.length; i++) {
    const child = current.children.find((c) => c.name === segments[i]);
    if (!child) return null;
    current = child;
  }
  return current;
}

/**
 * Compute the absolute path of a node by traversing from root.
 * Uses DFS to find the node reference.
 */
export function findNodePath(root: TreeNode, target: TreeNode): string | null {
  function dfs(node: TreeNode, path: string): string | null {
    if (node === target) return path;
    for (const child of node.children) {
      const result = dfs(child, path + '/' + child.name);
      if (result) return result;
    }
    return null;
  }
  return dfs(root, '/' + root.name);
}

/**
 * Get all absolute paths in the tree.
 */
export function getAllPaths(root: TreeNode): string[] {
  const paths: string[] = [];
  function dfs(node: TreeNode, path: string) {
    paths.push(path);
    for (const child of node.children) {
      dfs(child, path + '/' + child.name);
    }
  }
  dfs(root, '/' + root.name);
  return paths;
}

/**
 * Resolve a user-entered path against the current position in the tree.
 *
 * Returns a PathResult with:
 *  - steps: intermediate absolute paths traversed (for animation)
 *  - finalPath: the destination absolute path
 *  - error: description if the path is invalid
 */
export function resolvePath(
  root: TreeNode,
  currentPath: string,
  inputPath: string
): PathResult {
  const trimmed = inputPath.trim();
  if (!trimmed) {
    return { success: false, steps: [], finalPath: currentPath, error: 'Empty path' };
  }

  const isAbsolute = trimmed.startsWith('/');
  const inputSegments = trimmed.split('/').filter(Boolean);

  if (inputSegments.length === 0) {
    return { success: false, steps: [], finalPath: currentPath, error: 'Empty path' };
  }

  let workingSegments: string[];
  const steps: string[] = [];

  if (isAbsolute) {
    /* Absolute path: start from root */
    if (inputSegments[0] !== root.name) {
      return {
        success: false,
        steps: [],
        finalPath: currentPath,
        error: `Root "${inputSegments[0]}" does not exist. Tree root is "${root.name}"`,
        errorSegment: inputSegments[0],
      };
    }
    workingSegments = [root.name];
    steps.push(segmentsToPath(workingSegments));

    for (let i = 1; i < inputSegments.length; i++) {
      const seg = inputSegments[i];
      const parentNode = getNodeByPath(root, segmentsToPath(workingSegments));
      if (!parentNode) {
        return {
          success: false,
          steps,
          finalPath: segmentsToPath(workingSegments),
          error: `Path "${segmentsToPath(workingSegments)}" is invalid`,
          errorSegment: seg,
        };
      }
      const child = parentNode.children.find((c) => c.name === seg);
      if (!child) {
        return {
          success: false,
          steps,
          finalPath: segmentsToPath(workingSegments),
          error: `Folder "${seg}" does not exist in ${segmentsToPath(workingSegments)}`,
          errorSegment: seg,
        };
      }
      workingSegments.push(seg);
      steps.push(segmentsToPath(workingSegments));
    }
  } else {
    /* Relative path: start from current position */
    workingSegments = pathToSegments(currentPath);

    for (let i = 0; i < inputSegments.length; i++) {
      const seg = inputSegments[i];

      if (seg === '.') {
        /* Current directory - no movement */
        continue;
      }

      if (seg === '..') {
        /* Go up to parent. If already at root, just stay at root (Unix behavior) */
        if (workingSegments.length > 1) {
          workingSegments.pop();
        }
        steps.push(segmentsToPath(workingSegments));
        continue;
      }

      /* Go into child folder */
      const parentNode = getNodeByPath(root, segmentsToPath(workingSegments));
      if (!parentNode) {
        return {
          success: false,
          steps,
          finalPath: segmentsToPath(workingSegments),
          error: `Current path "${segmentsToPath(workingSegments)}" is invalid`,
          errorSegment: seg,
        };
      }

      const child = parentNode.children.find((c) => c.name === seg);
      if (!child) {
        return {
          success: false,
          steps,
          finalPath: segmentsToPath(workingSegments),
          error: `Folder "${seg}" does not exist in ${segmentsToPath(workingSegments)}`,
          errorSegment: seg,
        };
      }

      workingSegments.push(seg);
      steps.push(segmentsToPath(workingSegments));
    }
  }

  return {
    success: true,
    steps,
    finalPath: segmentsToPath(workingSegments),
  };
}
