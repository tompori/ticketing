import buildClient from "../api/build-client";

const IndexPage = ({ currentUser }) => {
  return <h1>{currentUser ? "You are signed in" : "You are not signed in"}</h1>;
};

IndexPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default IndexPage;
