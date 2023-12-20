import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContent } from "./SecondContainer";

const NonMetalContainer = () => {
  const { content: images, DeleteData } = useContext(UserContent);

  const nonmetal =
    images && images.filter((item) => item.className === "non-metal");

  const handleClick = (id) => {
    DeleteData(id);
  };
  return (
    <div className="not-metal-container">
      <h1>Not- Metal</h1>
      <div className="not-metal-button-container">
        {nonmetal.map((nonmetal, index) => (
          <div className="not-metal-button" key={index}>
            <Link
              to={`/Table/${nonmetal.id}`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <div className="mydesign">{nonmetal.id} </div>
            </Link>
            <div className="delete" onClick={() => handleClick(nonmetal.id)}>
              Delete
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonMetalContainer;
