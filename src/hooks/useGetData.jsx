import React, { createContext, useEffect, useState } from 'react';

const GetData = createContext();

export const useGetData = (url) => {
  // State to store the data received from the authenticated link
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('url', url);

  // Fetch data from the authenticated link
  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      try {
        // Make the authenticated API call here using fetch
        // taking care of promises with async/await
        const response = await fetch(url, { });
        // Check if the response is ok
        if (response.ok) {
          // Use await to parse the response as JSON
          const responseData = await response.json();
          console.log('Response data:', responseData);
          // Set the data to the state
          setData(responseData);
        } else {
          // Throw an error if the response is not ok
          throw new Error(`Something went wrong: ${response.statusText}`);
        }
      } catch (error) {
        // Catch and set the error to the state
        setError(error);

        console.error('Error fetching data:', error);
      } finally {
        // Set the loading to false
        setLoading(false);
      }
    };

    // Call the async fetchData function
    fetchData();
  }, [url]);

  // Return the data and a provider component to share the data using the Context API
  return {
    data, loading, error,
    GetDataProvider: ({ children }) => (
      <GetData.Provider value={data}>
        {children}
      </GetData.Provider>
    ),
  };
};

export default GetData;