// 1. Your data
const data = {
  name: "Tanvi",
  age: 20
};

// 2. Make the POST request
fetch('https://example.com/api/users', {  // Replace with your actual URL
  method: 'POST',                         // You're sending data to the server
  headers: {
    'Content-Type': 'application/json'   // Telling the server "I'm sending JSON"
  },
  body: JSON.stringify(data)             // Convert your object into JSON format
})
.then(response => response.json())       // When server replies, convert it to a JS object
.then(result => {
  console.log('Success:', result);       // Print the server response
})
.catch(error => {
  console.error('Error:', error);        // Print errors if anything goes wrong
});
