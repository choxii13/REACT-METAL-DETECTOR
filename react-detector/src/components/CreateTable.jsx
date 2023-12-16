import { useEffect } from "react";

const CreateTable = ({ metalSave, notMetalSave, id, className, imagelink }) => {
  //   const [obj, setObj] = useState([]);

  //   useEffect(() => {
  //     {
  //       setObj(
  //         metalSave || notMetalSave
  //           ? [...obj, { id: id, className: className }]
  //           : obj
  //       );
  //     }
  //   }, [metalSave, notMetalSave]);

  useEffect(() => {
    const obj = { id, className, imagelink };
    {
      metalSave || notMetalSave
        ? fetch("http://localhost:5000/Table", {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
          }).then(() => {
            console.log("new blog added");
          })
        : metalSave || notMetalSave;
    }
  });
};

export default CreateTable;
