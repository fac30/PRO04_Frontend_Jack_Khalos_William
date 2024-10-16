import FooterSection from './FooterSection';

const UsefulInformation = () => {
  const usefulInfoLinks = [
    { name: 'Contact Us', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'Donate', url: '#' },
    { name: 'FAQ', url: '#' },
    { name: 'Partners', url: '#' },
  ];

  return <FooterSection title="Useful Information" links={usefulInfoLinks} />;
};

export default UsefulInformation;
