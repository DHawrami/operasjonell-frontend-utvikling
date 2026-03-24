 console.log('Hello from index.ts!');
async function fetchData() {
  try {
    console.log('Fetching data from API...');
    const response = await fetch('http://localhost:3000/api/meetups');
    const data = await response.json();
    console.log(data[0]);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();