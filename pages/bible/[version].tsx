import React from "react";
import bibles from "../../bibles/index.json"

export async function getStaticPaths() {
    const paths: any[] = [];
    bibles.forEach(bible => {
        bible.versions.forEach(version => {
            paths.push({
                params: {
                    version: version.abbreviation
                }
            })
        })
    })
    return {
        paths: [...paths],
        fallback: false
    };
}

export async function getStaticProps(context) {
    console.log(context.params);

    const bible = require(`../../bibles/${context.params.version}.json`);
    return {
        props: {
            books: bible
        },
    };
}

export default function BibleVersion({ books }) {
    return (
        <pre>
            {JSON.stringify(books, null, 4)}
        </pre>
    );
}
