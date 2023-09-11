const Country = ({country}) => {
    console.log(country);
    const {name, flags} = country;
  return <div className="border-2 border-red-600 m-4 p-4 rounded-xl  container mx-auto max-w-screen-md	">
    <h1>Name: {name?.common}</h1>
    <img src={flags.png} alt="" />
  </div>;
};

export default Country;
