import Layout from "../components/Layout/Layout";
import CardsContainer from "../components/CardsContainer/CardsContainer";

const Tutors = () => {
  return (
    <>
      <Layout>
        <div className="mt-24">
          <h1 className="text-center text-5xl md:text-4xl lg:text-4xl font-bold mb-4 mt-0 ">
            Tutors
          </h1>
          <CardsContainer />
        </div>
      </Layout>
    </>
  );
};

export default Tutors;
