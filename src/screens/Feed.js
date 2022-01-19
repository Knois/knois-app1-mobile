import React from "react";
import { useQuery } from "@apollo/client";
import LoadingIndicator from "../components/LoadingIndicator";
import NoteFeed from "../components/NoteFeed";
import { GET_NOTES } from "../API/Query";
import ErrorQuery from "../components/ErrorQuery";

const Feed = () => {
  const { loading, error, data } = useQuery(GET_NOTES);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorQuery error={error} />;

  return (
    <>
      <NoteFeed notes={data.notes} />
    </>
  );
};

export default Feed;
