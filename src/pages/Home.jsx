import Header from "../components/Home/Header";
import ForYou from "../components/Home/ForYou";
import Following from "../components/Home/Following";
import HomeCtxProvider, { HomeCtx } from "../contexts/HomeCtx";
import { useContext } from "react";
const Home = () => {
  return (
    <HomeCtxProvider>
      <Header />
      <Feed />
    </HomeCtxProvider>
  );
};

export default Home;

const Feed = () => {
  const { feed } = useContext(HomeCtx);
  return (
    <>
      {feed === "For you" && <ForYou />}
      {feed === "Following" && <Following />}
    </>
  );
};
