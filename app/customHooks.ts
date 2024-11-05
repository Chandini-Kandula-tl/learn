import { useEffect, useState } from "react";

const useFetchUsersData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error on each fetch attempt
      try {
        // Simulate an API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Mock data to return
        const mockData = [
          { id: 1, name: "John Doe", age: 30 },
          { id: 2, name: "Jane Smith", age: 25 },
        ];

        setData(mockData);
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchUsersData;
