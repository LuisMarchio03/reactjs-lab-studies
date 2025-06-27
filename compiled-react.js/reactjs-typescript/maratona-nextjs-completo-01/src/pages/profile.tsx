import { GetStaticPaths, GetStaticProps } from "next";

type Profile = {
  id: string;
  name: string;
  bio: string;
};

type RespositoriesProfile = {
  profile: Profile;
};

export default function Profile({ profile }: RespositoriesProfile) {
  return (
    <div>
      <h1>Perfil</h1>
      <p>Name: {profile.name}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
}

//? SSG

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/LuisMarchio03");
  const data = await response.json();

  return {
    props: {
      profile: data,
    },
    revalidate: 10,
  };
};
