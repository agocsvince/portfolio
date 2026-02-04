'use client';

import { useState, useCallback } from 'react';

export type TreeNode = {
  title: string;
  id?: string;
  children?: TreeNode[];
};

export type ProjectTreeData = {
  projects: {
    children: TreeNode[];
  };
};

interface ProjectTreeProps {
  data: ProjectTreeData;
  activeProjectId?: string;
  onProjectClick?: (id: string) => void;
  rootLabel?: string;
}

function getPrefix(parentPrefix: string, isLast: boolean): string {
  return parentPrefix + (isLast ? '`--- ' : '|--- ');
}

function getChildPrefix(parentPrefix: string, isLast: boolean): string {
  return parentPrefix + (isLast ? '   ' : '|  ');
}

function TreeNodeItem({
  node,
  prefix,
  childPrefix,
  depth,
  pathFromRoot,
  onProjectClick,
  activeProjectId,
  collapsedFolders,
  toggleFolder,
}: {
  node: TreeNode;
  activeProjectId?: string;
  prefix: string;
  childPrefix: string;
  depth: number;
  pathFromRoot: string;
  onProjectClick?: (id: string) => void;
  collapsedFolders: Set<string>;
  toggleFolder: (path: string) => void;
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isLeaf = !hasChildren;
  const isProjectClickable = isLeaf && node.id !== undefined;
  const isFolder = hasChildren;
  const isExpanded = isFolder ? !collapsedFolders.has(pathFromRoot) : true;

  const content = (
    <span className="text-terminal font-mono whitespace-pre">
      {prefix}
      {node.title}
      {hasChildren ? '/' : ''}
    </span>
  );

  return (
    <div className="font-mono text-terminal">
      {isProjectClickable ? (
        <button
          type="button"
          onClick={() => node.id && onProjectClick?.(node.id)}
          className="text-terminal font-mono text-left w-full whitespace-pre"
        >
          {prefix}
          <span
            className={`hover:opacity-80 cursor-pointer ${activeProjectId === node.id ? 'underline' : ''}`}
          >
            {node.title}
          </span>
        </button>
      ) : isFolder ? (
        <button
          type="button"
          onClick={() => toggleFolder(pathFromRoot)}
          className="text-terminal font-mono text-left w-full whitespace-pre bg-transparent border-none p-0 font-inherit cursor-pointer hover:opacity-80"
        >
          {content}
        </button>
      ) : (
        <div>{content}</div>
      )}
      {hasChildren && isExpanded && (
        <div className="ml-0">
          {node.children!.map((child, i) => {
            const isLast = i === node.children!.length - 1;
            const childPath = pathFromRoot + '/' + child.title;
            const childPrefixStr = getChildPrefix(childPrefix, isLast);
            const nodePrefix = getPrefix(childPrefix, isLast);
            return (
              <TreeNodeItem
                key={child.id ?? child.title + i}
                node={child}
                prefix={nodePrefix}
                childPrefix={childPrefixStr}
                depth={depth + 1}
                pathFromRoot={childPath}
                onProjectClick={onProjectClick}
                activeProjectId={activeProjectId}
                collapsedFolders={collapsedFolders}
                toggleFolder={toggleFolder}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ProjectTree({
  data,
  activeProjectId,
  onProjectClick,
  rootLabel = 'projects',
}: ProjectTreeProps) {
  const [collapsedFolders, setCollapsedFolders] = useState<Set<string>>(
    () => new Set(),
  );

  const toggleFolder = useCallback((path: string) => {
    setCollapsedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  }, []);

  const children = data.projects.children;
  if (!children || children.length === 0) return null;

  return (
    <div className="text-terminal font-mono text-sm lg:text-base">
      <div className="text-terminal font-mono">/{rootLabel}/</div>
      {children.map((node, i) => {
        const isLast = i === children.length - 1;
        const parentPrefix = '';
        const prefix = getPrefix(parentPrefix, isLast);
        const childPrefix = getChildPrefix(parentPrefix, isLast);
        const pathFromRoot = node.title;
        return (
          <TreeNodeItem
            activeProjectId={activeProjectId}
            key={node.id ?? node.title + i}
            node={node}
            prefix={prefix}
            childPrefix={childPrefix}
            depth={0}
            pathFromRoot={pathFromRoot}
            onProjectClick={onProjectClick}
            collapsedFolders={collapsedFolders}
            toggleFolder={toggleFolder}
          />
        );
      })}
    </div>
  );
}
