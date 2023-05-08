import React from "react";
import styled from "styled-components";
import Link from "next/link";
import repository, { Book } from "../../../../utils/repository";
import Header from "../../../../components/header";

interface ChapterProps {
  version: string;
  book: string;
  chapter: string;
  bookName: string;
  content: string[];
}

export async function getServerSideProps(context) {
  const book = repository.getBook(context.params.version, context.params.book);
  return {
    props: {
      version: context.params.version,
      book: context.params.book,
      chapter: context.params.chapter,
      bookName: book.name,
      content: book.chapters[context.params.chapter - 1],
    },
  };
}

export default function Chapter({
  version,
  book,
  chapter,
  bookName,
  content,
}: ChapterProps) {
  return (
    <Container>
      <Header
        title="The Books - Bible"
        bradcrumbs={[
          { name: "Home", paths: "/" },
          { name: "Bible", paths: "/bible" },
          { name: "Books", paths: `/bible/${version}` },
          { name: "Chapters", paths: `/bible/${version}/${book}` },
        ]}
      ></Header>

      <ChaptersContainer>
        <h2>
          {bookName} - {chapter}
        </h2>
        <ol>
          {content.map((p, _index) => (
            <li key={_index}>{p}</li>
          ))}
        </ol>
      </ChaptersContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const ChaptersContainer = styled.div`
  list-style: none;

  h2 {
    font-size: 1.5em;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }

  ol {
    text-align: left;
  }
`;
