"use client";
import Link from "next/link";
import * as runtime from "react/jsx-runtime";
import React from "react";

interface Props {
  code: string;
  components?: Record<string, React.ComponentType>;
  [key: string]: any;
}

function TableParser({ data }): React.ReactElement {
  const headers: React.ReactElement[] = data.headers.map(
    (header: string, index: number) => <th key={index}>{header}</th>
  );

  const rows: React.ReactElement[] = data.rows.map(
    (row: string[], index: number) => (
      <td key={index}>
        {row.map((cell, cellIndex: number) => (
          <td key={cellIndex}>{cell}</td>
        ))}
      </td>
    )
  );

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function slugify(str): string {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace space with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^w\-]+/g, "") // Replace all non-word characters except for -;
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function parseHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    const slug = slugify(children);
    let textSize = "text-4xl";
    if (level === 2) textSize = "text-2xl md:text-3xl";
    if (level === 3) textSize = "text-xl md:text-2xl";
    if (level === 4) textSize = "text-lg md:text-xl";

    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: `${textSize} text-text-primary font-medium leading-8 mb-6 ${
          level === 2 ? "mt-8" : "mt-3"
        } text-balance`,
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor ",
        }),
      ],
      children
    );
  };
}

function paragraph({ children }: { children: React.ReactNode }) {
  // check if it contains any block-level elements
  const blockElementExists = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      typeof child.type == "string" &&
      /^(div|p|ul|ol|h[1-6])$/i.test(child.type)
  );

  //   If there are block element render with p tag
  if (blockElementExists) {
    return <>{children}</>;
  }

  return (
    <p className="mb-6 text-base text-muted-foreground leading-8">{children}</p>
  );
}

function _Link(props) {
  let href = props.href;

  const styles = `font-medium border-b border-indigo-400 hover:border-b-2 text-slate-900 transition-all duration-75`;

  if (href.startsWith("/")) {
    return (
      <Link className={styles} href={href} {...props}>
        {props.children}
      </Link>
    );
  }
}

function OList({ children }: { children: React.ReactNode }) {
  return <ol className="mb-8 list-decimal pl-8">{children}</ol>;
}

function UnoList({ children }: { children: React.ReactNode }) {
  return <ul className="mb-8 list-disc pl-8">{children}</ul>;
}

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="mb-4 text-base leading-8">{children}</li>;
}

const parserComponents = {
  h1: parseHeading(1),
  h2: parseHeading(2),
  h3: parseHeading(3),
  h4: parseHeading(4),
  h5: parseHeading(5),
  h6: parseHeading(6),
  p: paragraph,
  ol: OList,
  ul: UnoList,
  li: ListItem,
  a: _Link,
  Table: TableParser,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

export const MDXContent = ({ code, components, ...props }: Props) => {
  const Component = useMDXComponent(code);

  return (
    <Component component={{ ...parserComponents, ...components }} {...props} />
  );
};
