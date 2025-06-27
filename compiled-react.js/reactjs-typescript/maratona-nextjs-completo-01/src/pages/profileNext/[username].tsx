import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

const ProfileNext: React.FC = ({ profile }: any) => {
  return (
    <div>
      <h1>Profile Next</h1>
      <p>Name: {profile.name}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
};

export default ProfileNext;

//? SSG

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { username: "LuisMarchio03" },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { username } = params;

  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  return {
    props: {
      profile: data,
    },
    revalidate: 10,
  };
};
