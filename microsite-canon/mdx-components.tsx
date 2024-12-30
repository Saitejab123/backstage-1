import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import { ReactNode, ReactElement } from 'react';
import React from 'react';
import { CodeBlock } from '@/components/CodeBlock';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1
        style={{
          color: 'var(--canon-text-primary)',
          fontSize: '3rem',
          marginTop: '64px',
        }}
      >
        {children as ReactNode}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          color: 'var(--canon-text-primary)',
          fontSize: '1.75rem',
          marginTop: '3rem',
        }}
      >
        {children as ReactNode}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          color: 'var(--canon-text-primary)',
          fontSize: '1.25rem',
          marginTop: '2.5rem',
          marginBottom: '0.5rem',
        }}
      >
        {children as ReactNode}
      </h3>
    ),
    p: ({ children }) => (
      <p
        style={{
          color: 'var(--canon-text-primary)',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          marginTop: '0',
          marginBottom: '1rem',
        }}
      >
        {children as ReactNode}
      </p>
    ),
    pre: ({ children }) => {
      const codeContent = React.isValidElement(children)
        ? (children.props as { children: string }).children
        : '';

      return <CodeBlock lang="tsx" code={codeContent} />;
    },
    img: props => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
