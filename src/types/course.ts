import { School } from "./common";
type CourseId = string;
// TODO: Create a type for course ids, which should be strings
type ResourceCategory =
  | "Student Support"
  | "Tech Support"
  | "Academic Help"
  | "Wellness"
  | "Campus Services";
// TODO: Create an interface for courses
// The interface should include the following properties:
// an id (hint: use the CourseId type created above)
// a code (ex "CPRG 303")
// a title
// a description
// an optional number of credits (if missing, we will assume 3)
// an optional term number
// an optional delivery method (hint: use the Delivery type from common.ts)
// an optional array of pre-requisite course ids (hint: use the CourseId type created above)
// an optional note

// once all group members have completed their sections, add the following field:
// an optional array of program ids that this course is part of

export interface Course {
  id: CourseId;
  name: string;
  category: ResourceCategory;
  school?: School;
  location?: string;
  email?: string;
  phone?: string;
  hours?: string;
  websites?: string;
  tags: string[];

  // code: string;
  // title: string;
  // description: string;
  // credits?: number;
  // termNumber?: number;
  // deliveryMethod?: Delivery;
  // preRequisites?: CourseId[];
  // note?: string;
  // programIds?: string[];
}
