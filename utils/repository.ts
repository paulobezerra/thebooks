import bibles from "../bibles/index.json";

export interface Version {
  name: string;
  abbreviation: string;
}

export interface Bible {
  language: string;
  versions: Version[];
}

export interface Book {
  name: string;
  abbrev: string;
  chapters: string[][]
}

const getBibles = (): Bible[] => {
  return bibles;
};


const getVersions = (): Version[] => {
  return bibles.flatMap(bible => bible.versions);
};

const getBible = (version: string): Version => {
  return bibles.flatMap(bible => bible.versions)
    .find(v => v.abbreviation === version)
};


const getBooks = (version: string): Book[] => {
  const books: Book[] = require(`../bibles/${version}.json`);
  return books;
}

const getBook = (version: string, abbrev: string): Book => {
  const books = getBooks(version);

  return books.find(book => book.abbrev === abbrev)
}

const getChapter = (version: string, abbrev: string, chapter: number): string[] => {
  const books = getBooks(version);

  return books.find(book => book.abbrev === abbrev).chapters[chapter-1]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getBibles, getBible, getVersions, getBooks, getBook, getChapter };
