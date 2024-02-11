import companyData from "../data/data.json";
const Card = () => {
  companyData.map((company) => {
    console.log(typeof company.logo);
  });
  return (
    <>
      {companyData.map((company) => (
        <div className="card" key={company.id}>
          <div
            className="card-image-content"
            style={{
              backgroundColor: `${company.logoBackground}`,
            }}
          >
            <img className="card-image" src={company.logo} />
          </div>
          <ul className="card-time">
            <li>{company.postedAt}</li>
            <li>.</li>
            <li>{company.contract}</li>
          </ul>
          <h2 className="card-title">{company.position}</h2>
          <p className="card-logo-title">{company.company}</p>
          <p className="card-country">{company.location}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
