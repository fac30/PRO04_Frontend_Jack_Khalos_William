import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="mt-16 p-4 md:p-8 lg:p-12 text-zubiText"> 
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4"> 
          About Us
        </h1>
        <p className="text-base md:text-lg leading-relaxed">
          Welcome to our platform! We are committed to connecting tutors with students 
          to facilitate effective learning experiences. Our goal is to provide a space 
          where knowledge sharing and learning can happen easily, with the right tools 
          and people to guide you along the way.
        </p>
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          Whether you're looking to gain new skills or share your expertise, 
          our platform is here to help. Our community of dedicated tutors 
          ensures that every learner finds the support they need to succeed.
        </p>
      </div>
    </Layout>
  );
};

export default About;
