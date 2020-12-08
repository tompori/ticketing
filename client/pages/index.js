const IndexPage = ({ currentUser }) => {
  return <h1>{currentUser ? "You are signed in" : "You are not signed in"}</h1>;
};

IndexPage.getInitialProps = async (context, client, currentUser) => {
  return {};
};

export default IndexPage;
