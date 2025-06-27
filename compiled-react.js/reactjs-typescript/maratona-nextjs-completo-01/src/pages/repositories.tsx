import { GetServerSideProps } from "next";

type Repo = {
  id: string;
  name: string;
  description: string;
};

type RespositoriesProps = {
  repos: Repo[];
};

export default function Repositories({ repos }: RespositoriesProps) {
  return (
    <div>
      <h1>Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

//? SSR
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/LuisMarchio03/repos"
  );
  const data = await response.json();

  return {
    props: {
      repos: data,
    },
  };
};
