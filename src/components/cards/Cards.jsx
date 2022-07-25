import "./Card.css";

const Cards = ({ props }) => {
  const { searchCharacter } = props;

  return (
    <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center">
      {searchCharacter?.map((item, index) => {
        return (
          <div key={index}  className="card m-2 p-2">
            <div className="row">
              <div className="col name fw-bold fs-4">{item.name}</div>
            </div>
            <div className="row">
              <div className="col">
                <img src={item.image} alt="imgCharacter" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="fw-bold">Origin: </span>
                <span>{item.origin.name}</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="fw-bold">Location: </span>
                <span>{item.location.name}</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="fw-bold">Specie: </span>
                <span>{item.species}</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="fw-bold">Status: </span>
                <span>{item.status}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
