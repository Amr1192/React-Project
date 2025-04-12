import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { getTVDetails } from "../apis/config";

export default function TVDetails() {
  const params = useParams();
  const [tvDetails, setTVDetails] = useState();

  useEffect(() => {
    // api
    //   .get(`/tv/${params.id}`)
    getTVDetails(params.id)
      .then((res) => {
        setTVDetails(res.data);
        console.log(res.data);
      })

      .catch((err) => console.log(err));
  }, [params.id]);

  return <div>TVDetails</div>;
}
