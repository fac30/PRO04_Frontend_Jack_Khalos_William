import { ReactNode } from 'react';

export interface Subject {
  id: number;
  name: string;
  description: string;
  [x: string]: ReactNode;
}

export interface BaseResponse {
  success: boolean;
  message?: string;
}

export interface SubjectResponse extends BaseResponse {
  data: Subject[];
}

export interface BaseFormField {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BaseFormProps {
  title: string;
  fields: BaseFormField[];
  buttonLabel: string;
  onSubmit: (e: React.FormEvent) => void;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  buttonType: string;
  ariaLabel?: string;
}

export interface NavbarLinkProps {
  label: string;
  href: string;
  className?: string;
}

export interface FormInputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface User {
  name?: string; // Optional in case no name is provided
  email: string;
  role: 'student' | 'tutor'; // Add role property
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}