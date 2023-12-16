import { useEffect, useState } from "react";

const Fetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("clean up");
    };
  }, [url]);

  return { data };
};

export default Fetch;
