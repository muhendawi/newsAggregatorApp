// function PageContent() {
//   return <div></div>;
// }

import { useQuery } from "@tanstack/react-query";
import { fetchGuardian, fetchNewsAPI } from "../services/apiFetching";

// export default PageContent;

function useRepos() {
  return useQuery({
    queryKey: ["repos"],
    queryFn: fetchGuardian,
  });
}
function useMembers() {
  return useQuery({
    queryKey: ["members"],
    queryFn: fetchNewsAPI,
  });
}
export default function App() {
  const repos = useRepos();
  const members = useMembers();
  return (
    <div>
      <h1>TanStack Dashboard</h1>
      <h2>Repos</h2>
      {repos.isPending ? <p>Loading repos...</p> : null}
      {repos.isError ? <p>Error loading repos: {repos.error.message}</p> : null}
      {repos.isSuccess ? (
        <ul>
          {repos.data.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      ) : null}
      <hr />
      <h2>Members</h2>
      {members.isPending ? <p>Loading members...</p> : null}
      {members.isError ? (
        <p>Error loading members: {members.error.message}</p>
      ) : null}
      {members.isSuccess ? (
        <ul>
          {members.data.map((member) => (
            <li key={member.id}>{member.login}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
