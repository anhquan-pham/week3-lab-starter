import type { CourseId } from "../types/course";
import type { ProgramId } from "../types/program";
import type { Student, StudentId } from "../types/student";

export type StudentId = string;
export type StudentStatus = "Full-time" | "Part-time";
export const students: Student[] = [
  // add students here
  {
    id: "student-001" as StudentId,
    name: "Alex",
    year: 2,
    status: "Full-time",
    interests: ["Web Development", "Cloud Computing", "DevOps"],
    githubUsername: "alexmorrison",
    funFact: "Maintains a popular open-source project on GitHub",
    programId: "prog-001" as ProgramId,
    currentCourseIds: ["course-001" as CourseId, "course-003" as CourseId],
  },
  {
    id: "student-002" as StudentId,
    name: "Sagar Kumbhar",
    year: 3,
    status: "Full-time",
    interests: ["Mobile Apps", "UI/UX Design", "React"],
    githubUsername: "jlee2024",
    programId: "prog-001" as ProgramId,
    currentCourseIds: ["course-001" as CourseId, "course-002" as CourseId],
  },
  {
    id: "student-003" as StudentId,
    name: "Siddhi Patel",
    year: 1,
    status: "Full-time",
    interests: ["Mobile Apps", "UI/UX Design", "React"],
    githubUsername: "Siddhi14322",
    programId: "prog-001" as ProgramId,
    currentCourseIds: ["course-001" as CourseId, "course-002" as CourseId],
  },
  {
    id: "student-004" as StudentId,
    name: "Indar macwana",
    year: 4,
    status: "Full-time",
    interests: ["Mobile Apps", "UI/UX Design", "React"],
    githubUsername: "indar14322",
    programId: "prog-001" as ProgramId,
    currentCourseIds: ["course-001" as CourseId, "course-002" as CourseId],
  },
];
