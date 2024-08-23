// Define types and interfaces here

export type genderType = "Male" | "Female";

export type titleType =
  | ""
  | "Mr."
  | "Mrs."
  | "Ms."
  | "Miss"
  | "Dr."
  | "Prof."
  | "Sir"
  | "Madam"
  | "Rev.";

export interface utilPropType {
  children: React.ReactNode;
  href: any;
  className: string;
}

export interface memberType {
  title: string;
  fullname: string;
  sex: "Male" | "Female";
  address: {
    subcity: string;
    district: string;
    homeno?: string;
    neighborhood?: string;
  };
  contact: {
    homephone?: string;
    personalphone: string;
    email?: string;
  };
  image: string | undefined;
  handicap: {
    has_handicap: boolean;
    handicap_type?: string;
  };
  birthdate: string;
}

export interface childType {
  fullname: string;
  sex: "Male" | "Female";
  birthdate: string;
  handicap: {
    has_handicap: boolean;
    handicap_type?: string;
  };
  family_id: string;
  sunday_school_class: string;
  dvbs_class: string;
  grade: string;
  image: string | undefined;
}
