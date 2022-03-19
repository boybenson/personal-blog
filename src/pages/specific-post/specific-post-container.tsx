import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { FETCH_A_POST } from "../../graphql/queries";
import SpecificPostComponent from "./specific-post-component";

const SpecificPostContainer = () => {
  const params = useParams();

  const { data, loading } = useQuery(FETCH_A_POST, {
    pollInterval: 1000,
    variables: {
      id: params?.postId,
    },
  });

  return <SpecificPostComponent loading={loading} data={data} />;
};

export default SpecificPostContainer;
