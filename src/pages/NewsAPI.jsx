import PageContainer from "../ui/PageContainer";
import PageTitle from "../ui/PageTitle";
import { useNewsAPIWithSearch } from "../hooks/useNewsAPI";

function NewsAPI() {
  const { data } = useNewsAPIWithSearch();
  console.log(data?.sources);
  return (
    <PageContainer>
      <PageTitle>News API</PageTitle>

      {data?.sources?.map((source) => (
        <div key={source.id}>
          <h2>{source.name}</h2>
          <p>{source.description}</p>
        </div>
      ))}
    </PageContainer>
  );
}

export default NewsAPI;
