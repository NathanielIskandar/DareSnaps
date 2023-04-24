import React, { useState, useEffect } from "react";
import axios from "axios";

const DareOfTheDay = () => {
  const [dare, setDare] = useState(null);

  useEffect(() => {
    const fetchDare = async () => {
      const response = await axios.get("/dares/daily");
      setDare(response.data.dare);
    };

    fetchDare();
  }, []);

  return (
    <div>
      {dare ? (
        <div>
          <h1>{dare.question}</h1>
          <p>{dare.category}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DareOfTheDay;
