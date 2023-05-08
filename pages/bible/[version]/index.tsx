import React from "react";
import styled from "styled-components";
import Link from "next/link";
import repository, { Book } from "../../../utils/repository";
import { version } from "os";
import Header from "../../../components/header";

interface BooksProps {
  version: string;
  books: Book[];
}

export async function getStaticPaths() {
  const versions = repository
    .getVersions()
    .flatMap((version) => ({ params: { version: version.abbreviation } }));

  return {
    paths: versions,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const books = repository.getBooks(context.params.version);

  return {
    props: {
      version: context.params.version,
      books: books.map(book => ({
        name: book.name,
        abbrev: book.abbrev
      })),
    },
  };
}

export default function Books({ version, books }: BooksProps) {
  return (
    <Container>
      <Header
        title="The Books - Bible"
        bradcrumbs={[
          { name: "Home", paths: "/" },
          { name: "Bible", paths: "/bible" },
        ]}
      ></Header>
      <BooksContainer>
        <h2>Books:</h2>
        <div className="grid">
          {books.map((book, _index) => (
            <li key={_index}>
              <Link href={`/bible/${version}/${book.abbrev}`}>{book.name}</Link>
            </li>
          ))}
        </div>
      </BooksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const BooksContainer = styled.ul`
  list-style: none;

  h2 {
    font-size: 1.5em;
    margin-bottom: 16px;
  }

  li {
    a {
      text-decoration: none;
      color: #222;
      padding: 10px;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.05);
      display: inline-block;
      width: 100%;
      white-space: nowrap;
      overflow: auto;
      text-overflow: ellipsis;
      &:hover {
        background-color: rgba(0, 0, 255, 0.5);
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 8px;
  }
`;
