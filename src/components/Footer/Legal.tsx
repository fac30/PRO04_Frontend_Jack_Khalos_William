import FooterSection from "./FooterSection";

const Legal = () => {
  const legalLinks = [
    { name: "Privacy Policy", url: "/privacypolicy" },

    { name: "Terms and Conditions", url: "/termsconditions" },
  ];

  return <FooterSection title="Legal" links={legalLinks} />;
};

export default Legal;
