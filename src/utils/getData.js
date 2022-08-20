const API = process.env.API;


const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl, {method: 'GET', mode:'cors', header:{origin: 'https://63013f05000f7d00087657c1--magenta-sable-90c232.netlify.app/'}});
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;