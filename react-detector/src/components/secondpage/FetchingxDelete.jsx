import { useEffect, useState } from "react";

const FetchingxDelete = (url) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setErr(false);
      })
      .catch(() => {
        setErr(true);
      });
  }, [url]);

  const DeleteData = (id) => {
    fetch(`http://localhost:5000/Table/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("deleted");
      setData(data && data.filter((dat) => dat.id !== id));
    });
  };

  return { data, DeleteData, err };
};

export default FetchingxDelete;
