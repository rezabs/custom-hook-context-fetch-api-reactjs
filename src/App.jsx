import './App.css';
import { API_URL } from './hooks/config';
import { useGetData } from './hooks/useGetData';
import ShowData from './components/ShowData';

function App() {
  const { data, loading, error, GetDataProvider } = useGetData(API_URL);

  // Render the data, loading, or error based on the state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data) {  
    return (
      <GetDataProvider>
        <ShowData />
      </GetDataProvider>
    )
  }
};

export default App;
