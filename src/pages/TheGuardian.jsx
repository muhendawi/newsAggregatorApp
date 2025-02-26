import PageContainer from "../ui/PageContainer";
import PageTitle from "../ui/PageTitle";
import CardTitle from "../ui/CardTitle";
import styled from "styled-components";
import { useState } from "react";
import { useGuardianWithSection } from "../hooks/useGuardian";
import Loader from "../ui/Loader";

const Ul = styled.ul`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0 0.5rem;
  list-style-type: none;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    > a {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      > li {
        margin: 0;
        padding: 0;
        > a {
          color: var(--color-text-green-light);
        }
      }
    }
    > button {
      padding: 0.2rem 0.5rem 0.1rem 0.5rem;
      margin: 0;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      width: fit-content;
      background-color: var(--color-background-green-light);
      border: none;
      color: var(--color-text-green);
      border-radius: 0.3rem;
    }
  }
`;

function TheGuardian() {
  const [sectionName, setSectionName] = useState("");
  const { data, isLoading } = useGuardianWithSection(sectionName);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <PageContainer>
      <PageTitle>The Guardian</PageTitle>
      <Ul>
        {data?.response?.results.map((article) => {
          return (
            <div key={article.id}>
              <a
                href={article.webUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <li>
                  <CardTitle>{article.webTitle}</CardTitle>
                </li>
              </a>
              <button onClick={() => setSectionName(article.sectionName)}>
                <span>{article.sectionName}</span>
              </button>
            </div>
          );
        })}
      </Ul>
    </PageContainer>
  );
}

export default TheGuardian;
