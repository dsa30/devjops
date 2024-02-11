const Card = ({ companyData }) => {
  return (
    <>
      {companyData.map((company) => (
        <div className="card" key={company.id}>
          <img
            className="card-image"
            src={"." + company.logo}
            alt={company.company}
          />
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
