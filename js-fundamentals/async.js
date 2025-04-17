async function fetchData() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
