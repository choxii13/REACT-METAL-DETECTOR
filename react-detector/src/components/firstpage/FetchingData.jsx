import { useEffect, useState } from "react";

const FetchingData = (url) => {
  const [content, setContent] = useState(null);
  const [err, setErr] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setContent(data);
        setErr(null);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, [url]);

  const DeleteData = (id) => {
    fetch(`http://localhost:5000/Table/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("deleted");
      setContent(content && content.filter((dat) => dat.id !== id));
    });
  };

  return { content, DeleteData, err };
};

export default FetchingData;
