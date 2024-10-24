import { useState, useEffect } from "react";
import Card from "./Card/Card";

const CardsContainer: React.FC = () => {
  const [tutors, setTutors] = useState([]);

  const getTutors = async () => {
    try {
      const response = await fetch("/api/tutors");
      if (!response.ok) {
        throw new Error(
          `Error is being made~!!!!: ${response.status} ${response.statusText}`
        );
      }
      const tutorData = await response.json();
      setTutors(tutorData);
      // console.log(tutorData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutors();
  }, []);

  return (
    <div className="mt-12 grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {tutors.map((tutor, index) => (
        <Card key={index} tutor={tutor} />
      ))}
    </div>
  );

  // return <h1>{tutors.length > 0 ? tutors[0].full_name : "Loading..."}</h1>; // Handle empty state
};

export default CardsContainer;
