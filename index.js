// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };

//   fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

//Post request. Sending data 
  function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    })
    })
    .then(function (response) {
    return response.json();
     })
    .then(function (object) {
    console.log(object.id);
    let obj = document.createElement("li");
    obj.textContent = object.id;
    console.log(obj.textContent);
    document.body.appendChild(obj);
    
     })
    .catch(function (error) {
        alert("Error!");
        console.log(error.message);
        let e = document.createElement("p");
        e.textContent = error.message;
        document.body.appendChild(e);
    })
}

