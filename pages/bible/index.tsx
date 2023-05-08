import React from "react";
import styled from "styled-components";
import Link from "next/link";
import repository, { Bible } from "../../utils/repository";
import Header from "../../components/header";

interface HomeProps {
  bibles: Bible[];
}

export async function getServerSideProps() {
  const bibles: Bible[] = repository.getBibles();
  return {
    props: {
      bibles,
    },
  };
}

export default function Home({ bibles }: HomeProps) {
  return (
    <Container>
      <Header
        title="The Books - Bible"
        bradcrumbs={[{ name: "Home", paths: "/" }]}
      ></Header>
      <Languages>
        <h2>Versions:</h2>
        <div className="grid">
          {bibles.map((bible, _index) => (
            <li key={_index}>
              <strong>{bible.language}</strong>
              <ul>
                {bible.versions.map((version, _index2) => (
                  <li key={`${_index}_${_index2}`}>
                    <Link href={`/bible/${version.abbreviation}`}>
                      {version.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </div>
      </Languages>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const Languages = styled.ul`
  list-style: none;

  h2 {
    font-size: 1.5em;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    margin-bottom: 16px;
  }

  .grid {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
