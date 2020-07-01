const getContinents = (callback) => {
  // callback = getCountries()
  setTimeout(() => {
    // code to get all continents
    let continent = 'Asia';
    console.log(continent);
    callback(continent);
  }, 1000);
};

const getCountries = (continent, callback) => {
  // callback = getStates()
  setTimeout(() => {
    // code to get all countries
    let country = 'India';
    console.log(country);
    callback(country);
  }, 1000);
};

const getStates = (country, callback) => {
  // callback = getCities()
  setTimeout(() => {
    // code to get all states
    let state = 'Rajasthan';
    console.log(state);
    callback(state);
  }, 1000);
};

const getCities = (state, callback) => {
  // callback = done()
  setTimeout(() => {
    // code to get all cities
    let city = 'Jaipur';
    console.log(city);
    callback();
  }, 1000);
};

const done = () => {
  console.log('DONE!');
};

const getAddress = () => {
  getContinents((continent) => {
    getCountries(continent, (country) => {
      getStates(country, (state) => {
        getCities(state, () => {
          done();
        });
      });
    });
  });
};

getAddress();
