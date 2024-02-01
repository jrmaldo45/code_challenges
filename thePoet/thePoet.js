import fetch from 'node-fetch';

async function makeRequest(endpoint, query) {
  try {
      const response = await fetch(`https://poetrydb.org/${endpoint}/${query}`);

      // Check if the response status is 200 OK
      if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const headers = response.headers;
      const status = response.status;
      const data = await response.json();

      console.log(`Response for ${endpoint} "${query}":`);
      console.log('Headers:', headers);
      console.log('Status:', status);
      console.log('Data:', data);
  } catch (error) {
      console.error(`Error fetching ${endpoint} "${query}":`, error.message);
  }
}

// Make requests to the author and title endpoints
makeRequest('author', 'Shakespeare');
makeRequest('title', 'Ozymandias');