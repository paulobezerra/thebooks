import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBible } from "@fortawesome/free-solid-svg-icons";

interface Link {
  name: string;
  paths: string;
}

interface HaderProps {
  title: string;
  bradcrumbs: Link[];
}

export default function Header({ title, bradcrumbs }: HaderProps) {
  return (
    <Container>
      <FontAwesomeIcon icon={faBookBible} size={"3x"} color="#66F"/>
      <h1>{title}</h1>

      <p className="bradcrumbs">
        {bradcrumbs.map((bradcrumb, _index) => (
          <Link href={bradcrumb.paths} key={_index}>
            {bradcrumb.name}
          </Link>
        ))}
      </p>
    </Container>
  );
}

const Container = styled.header`
  margin: 48px 0;

  h1 {
    font-size: 2em;
  }

  .bradcrumbs {
    display: flex;
    justify-content: center;
    gap: 16px;

    a {
      position: relative;
      &::after {
        content: "/";
        position: absolute;
        right: -10px;
      }

      &:last-child {
        &::after {
          content: "";
        }
      }
    }
  }
`;
