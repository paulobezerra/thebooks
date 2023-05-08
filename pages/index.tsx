import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBible } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Container>
      <Header>
        <h1>The Books</h1>
        <p>Sacred books for you to read for free and online.</p>
      </Header>
      <Content>
        <Link href={"/bible"}>Bible</Link>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.header`
  margin: 48px 0;

  h1 {
    font-size: 2em;
  }
`;

const Content = styled.div``;
