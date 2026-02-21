function whereAmI(lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then((res) => res.json())
    .then((data) => {
      const { region } = data[0];
      console.log("Country region:", region);
    })
    .catch((err) => {
      console.error("Error fetching location data:", err);
    });
}

whereAmI(52.508, 12.3813);
