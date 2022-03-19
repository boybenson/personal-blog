import { useQuery } from "@apollo/client";
import { FETCH_POSTS } from "../../graphql/queries";
import HomeComponent from "./home-component";

const HomeContainer = () => {
  const { data, loading } = useQuery(FETCH_POSTS, {
    pollInterval: 1000,
  });

  const posts = data?.blogPostCollection?.items;

  return <HomeComponent posts={posts} loading={loading} />;
};

export default HomeContainer;
