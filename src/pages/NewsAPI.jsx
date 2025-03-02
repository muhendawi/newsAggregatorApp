import PageContainer from "../ui/PageContainer";
import PageTitle from "../ui/PageTitle";
import { useNewsAPIWithSearch } from "../hooks/useNewsAPI";
import styled from "styled-components";

function NewsAPI() {
  const { data } = useNewsAPIWithSearch("");

  return (
    <PageContainer>
      <PageTitle>News API</PageTitle>

      {data?.articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </PageContainer>
  );
}

export default NewsAPI;
