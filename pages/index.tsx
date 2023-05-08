import React from "react";
import styled from "styled-components";
import bibles from "../bibles/index.json"
import Link from "next/link";

export async function getServerSideProps() {
    return {
        props: {
            bibles
        },
    };
}


export default function Home({ bibles }) {
    return (
        <Container>
            <Header>
                <h1>The Books</h1>
                <p>The Holy Bible for All Christians</p>
            </Header>
            <Languages>
                <h2>Versions:</h2>
                {bibles.map((bible, _index) => (<li key={_index}>
                    <strong>{bible.language}</strong>
                    <ul>
                        {bible.versions.map((version, _index2) => (<li key={`${_index}_${_index2}`}>
                            <Link href={`/bible/${version.abbreviation}`}>
                                {version.name}
                            </Link>
                        </li>))}
                    </ul>
                </li>))}
            </Languages>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
`

const Header = styled.header`
    margin: 48px 0;

    h1 {
        font-size: 2em;
    }
`

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
`