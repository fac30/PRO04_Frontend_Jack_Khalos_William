import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

interface TutorInterface {
  id: number;
  full_name: string;
  address: string;
  email: string;
  phone_number: string;
  postal_code: string;
  availability: null | string;
  description: string;
  created_at: string;
  fk_subject_id: null | number;
  fk_tutortype_id: null | number;
  img_source: string;
}

export interface CardProps {
  tutor: TutorInterface;
}

const Card = ({ tutor }: CardProps) => {
  const navigate = useNavigate();

  const handleLearnWithMeClick = () => {
    navigate("/tutorprofile", { state: { tutor } });
  };

  return (
    <div className="mb-16 p-6 rounded-lg font-helonik tutor-card bg-zubiGreen w-full sm:w-10/12 m-auto text-white flex flex-col items-center gap-6 transition-all shadow-lg">
      <h3 className="text-xl font-bold text-center w-full h-12 overflow-hidden text-ellipsis whitespace-nowrap">
        {tutor.full_name}
      </h3>
      <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-md">
        <img
          src={tutor.img_source}
          alt={tutor.full_name}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-center font-sans leading-5 line-clamp-4">
        {tutor.description}
      </p>
      <Button
        onClick={handleLearnWithMeClick}
        label="learn with me"
        buttonType="cardButton"
      />
    </div>
  );
};

export default Card;
