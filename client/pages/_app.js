import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser} />
      <Component currentUser={currentUser} {...pageProps} />
    </>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  const pageGetInitialProps = appContext.Component.getInitialProps;
  const pageProps = pageGetInitialProps
    ? await pageGetInitialProps(appContext.ctx, client, data.currentUser)
    : {};

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
