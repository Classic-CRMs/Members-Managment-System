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
