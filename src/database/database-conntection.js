export const databaseConnection = () => {
  const url = "http://localhost:3000";
  fetch(`${url}/rooms`)
    .then(response => response.json())
    .then(dataBase => console.log(dataBase))
    .catch(error => console.log("Error: ", error));

  fetch(`${url}/users`)
    .then(response => response.json())
    .then(dataBase => console.log(dataBase))
    .catch(error => console.log("Error", error));
};
