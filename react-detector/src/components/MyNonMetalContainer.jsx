import "./table.css";
const MyNonMetalContainer = ({ notmetalSave }) => {
  return (
    <div className="not-metal-container">
      <h1>Not- Metal</h1>
      {notmetalSave.map((metal, index) => (
        <div className="not-metal-button" key={index}>
          <p>{metal.id} </p>
          <div className="delete"> Delete</div>
        </div>
      ))}
    </div>
  );
};

export default MyNonMetalContainer;
