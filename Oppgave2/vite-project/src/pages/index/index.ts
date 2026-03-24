 console.log('Hello from index.ts!');
async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();

async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/api/rooms');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();


async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/api/bookings');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();