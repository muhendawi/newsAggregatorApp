import PageContainer from "../ui/PageContainer";
import PageTitle from "../ui/PageTitle";
import CardTitle from "../ui/CardTitle";
import styled from "styled-components";
import { useState } from "react";
import { useGuardianWithSection } from "../hooks/useGuardian";
import Loader from "../ui/Loader";
import { motion } from "framer-motion";
import PageError from "./PageError";

const Ul = styled.ul`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0 0.5rem;
  list-style-type: none;
  z-index: 1;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    overflow: scroll;
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
  const PAGE_TITLE = "The Guardian";
  const [sectionName, setSectionName] = useState("");
  const { data, isLoading, isError } = useGuardianWithSection(sectionName);
  if (isError) {
    return (
      <PageContainer>
        <PageTitle>{PAGE_TITLE}</PageTitle>
        <PageError>Something wrong, Cannot fetching data</PageError>
      </PageContainer>
    );
  }
  if (isLoading) {
    return (
      <PageContainer>
        <PageTitle>{PAGE_TITLE}</PageTitle>
        <Loader />
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <Ul>
        {data?.response?.results.map((article, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                duration: 0.5,
                delay: 0.1 * index,
              }}
              key={article.id}
            >
              <a
                href={article.webUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <CardTitle>{article.webTitle}</CardTitle>
              </a>
              <button onClick={() => setSectionName(article.sectionName)}>
                <span>{article.sectionName}</span>
              </button>
            </motion.li>
          );
        })}
      </Ul>
    </PageContainer>
  );
}

export default TheGuardian;
