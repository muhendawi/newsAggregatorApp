import PageContainer from "../ui/PageContainer";
import PageTitle from "../ui/PageTitle";
import { useNewsAPIWithSearch } from "../hooks/useNewsAPI";
import PageError from "../pages/PageError";
import Loader from "../ui/Loader";

function NewsAPI() {
  const PAGE_TITLE = "News API";
  const { data, isError, isLoading } = useNewsAPIWithSearch();
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
