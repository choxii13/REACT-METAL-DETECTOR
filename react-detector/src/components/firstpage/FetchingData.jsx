import { useEffect, useState } from "react";

const FetchingData = (url) => {
  const [content, setContent] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setTimeout(() => {
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
          setIsPending(false);
        })
        .catch((err) => {
          setErr(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

  const DeleteData = (id) => {
    fetch(`http://localhost:5000/Table/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("deleted");
      setContent(content && content.filter((dat) => dat.id !== id));
    });
  };

  return { content, DeleteData, err, isPending };
};

export default FetchingData;
