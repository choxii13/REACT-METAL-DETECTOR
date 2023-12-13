import { useEffect, useState } from "react";

const Fetch = (url) => {
  const [images, setImages] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => setImages(data))
      .catch((err) => {
        console.log(err);
      });
    return () => {
      console.log("clean up");
    };
  }, [url]);
  return {
    images,
  };
};

export default Fetch;
