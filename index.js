// Add your code here

function submitData (name, email) {
    const data = {
      name: name,
      email: email
    };

    const error = {
      message: 'Unauthorized Access',
      code: '401',
    };
    // create the configuration object
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    };
    return fetch('http://localhost:3000/users', configurationObject
    )
      .then(response => response.json())
      .then(result => {
        //console.log('Success:', data);
        const main = document.querySelector('main');
        const h2 = document.createElement('h2');
        h2.innerText = result.id;
        main.appendChild(h2);
      })
      .catch((error) => {
        const main = document.querySelector('main');
        const h2 = document.createElement('h2');
        h2.innerHTML = error.message;
        main.appendChild(h2);
      });
  }
document.addEventListener('DOMContentLoaded', function() {
//submitData("steve", "steve@steve.com");
//submitData("sam", "sam@sam.com");
//submitData("jim", "jim@jim.com");
});