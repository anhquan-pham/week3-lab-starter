// TODO: Create a type for student ids, which should be strings

// TODO: Create a type for student statuses, which can either be "Full-time", or "Part-time"

// TODO: Create an interface for students
// The interface should include the following properties:
// an id (hint: use the StudentId type created above)
// a name
// a year
// a status (hint: use the StudentStatus type created above)
// an array of interests
// an optional github username
// an optional fun fact

// once all group members have completed their sections, add the following fields:
// an optional program id
// an optional array of current course ids

export interface Student {}
// import { CourseId } from "./course";
// import { ProgramId } from "./program";

export type StudentId = string;
export type StudentStatus = "Full-time" | "Part-time";

export interface Student {
  id: StudentId;
  name: string;
  year: number;
  status: StudentStatus;
  interests: string[];
  githubUsername?: string;
  funFact?: string;
  // programId?: ProgramId;
  // currentCourseIds?: CourseId[];
}
