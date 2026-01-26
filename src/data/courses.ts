import type { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: "course-303",
    code: "CPRG 303",
    title: "Mobile Application Development",
    description:
      "Learn to develop mobile applications using modern frameworks.",
    credits: 3,
    termNumber: 3,
    deliveryMethod: "Blended",
    preRequisites: ["course-201"],
    note: "This course includes a major project.",
    programIds: ["program-101"],
  },
  {
    id: "course-201",
    code: "CPRG 201",
    title: "Web Development Fundamentals",
    description: "Introduction to web development technologies and practices.",
    credits: 3,
    termNumber: 2,
    deliveryMethod: "Online",
    preRequisites: [],
    note: "Focuses on HTML, CSS, and JavaScript.",
    programIds: ["program-101"],
  },
  {
    id: "course-201",
    code: "CPRG 201",
    title: "Web Development Fundamentals",
    description: "Introduction to web development technologies and practices.",
    credits: 3,
    termNumber: 2,
    deliveryMethod: "Online",
    preRequisites: [],
    note: "Focuses on HTML, CSS, and JavaScript.",
    programIds: ["program-101"],
  },
];
