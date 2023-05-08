import React from "react";
import styled from "styled-components";
import Link from "next/link";
import repository, { Book } from "../../../../utils/repository";
import Header from "../../../../components/header";

interface BookProps {
  version: string;
  book: Book;
}

export async function getStaticPaths() {
  const paths = repository.getVersions().flatMap((version) =>
    repository.getBooks(version.abbreviation).flatMap((book) => ({
      params: {
        version: version.abbreviation,
        book: book.abbrev,
      },
    }))
  );

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const book = repository.getBook(context.params.version, context.params.book);
  return {
    props: {
      version: context.params.version,
      book: book,
    },
  };
}

export default function Book({ version, book }: BookProps) {
  const chapters = book.chapters;
  return (
    <Container>
      <Header
        title="The Books - Bible"
        bradcrumbs={[
          { name: "Home", paths: "/" },
          { name: "Bible", paths: "/bible" },
          { name: "Books", paths: `/bible/${version}` },
        ]}
      ></Header>

      <BooksContainer>
        <h2>{book.name}</h2>
        <div className="grid">
          {chapters.map((_, _index) => (
            <li key={_index}>
              <Link href={`/bible/${version}/${book.abbrev}/${_index + 1}`}>
                {_index + 1}
              </Link>
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
