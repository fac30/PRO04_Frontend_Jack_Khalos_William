import { useState, useEffect, ReactNode } from "react";
import Layout from "../components/Layout/Layout";
interface Subject {
  [x: string]: ReactNode;
  id: number;
  name: string;
  description: string;
}

const Subjects: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSubjects = async () => {
    try {
      const response = await fetch("/api/subjects");
      if (!response.ok) {
        throw new Error("Failed to fetch subjects");
      }
      const data = await response.json();
      setSubjects(data);
    } catch (err) {
      setError("Could not fetch subjects");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <Layout>
      <div className="mt-16 p-4 md:p-8 lg:p-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-zubiLogo">Subjects</h1>

        {/* Handle loading and error states */}
        {loading ? (
          <p className="text-lg">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div key={subject.id} className="p-4 border rounded-md shadow-lg bg-zubiGreen text-white">
                <h2 className="text-xl font-bold mb-2">{subject.subject_name}</h2>
                <p className="text-base">{subject.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Subjects;
