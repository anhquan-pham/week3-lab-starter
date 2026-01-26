import { Pressable, StyleSheet, View } from "react-native";
import { Course } from "../../types/course";

// TODO: Make a Props type for the props of our CourseCard component
type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  // TODO: Use descructuring to extract values from the course
  // If values need to be modified or altered for display (ex: term number to "Term X"),
  // you can do that directly in the tsx code below, or create new variables here
  // if the values will be used in the log function as well, create variables for them here
  const {
    code,
    title,
    credits,
    description,
    termNumber,
    deliveryMethod,
    preRequisites,
    programIds,
    note,
  } = course;

  // TODO: Create a function called logCourseInfo that logs a formatted summary of the course to the console
  // Example output:
  // Course: CPRG 303 | Mobile Application Development | credits: 3 | Term 2 | In-person
  // Prereqs: CPRG 202, CPRG 101 (displaying the ids initially is fine)
  // Programs: Diploma in Software Development, Degree in Computer Science (once that field has been added)
  // Note: This course is required for the Software Development program.

  // TODO: Create the TSX for the course card layout
  // There should be a Pressable as the root element, with onPress set to the logCourseInfo function created above
  // Inside the Pressable, create the following elements:
  // A View for the top row, containing:
  //   A Text for the course code
  //   A Text for the number of credits
  // A Text for the course title
  // A Text for the course description
  // A Text for the term and delivery method
  // A Text for the pre-requisite labels
  // A Text for the program labels (once that field has been added to the Course interface)
  // (The three text components above should use the meta style)
  // If there is a note, a Text for the note

  return (
    <Pressable style={styles.card} onPress={() => logCourseInfo(course)}>
      <View style={styles.topRow}></View>
    </Pressable>
  );
}

export function logCourseInfo(course: Course) {
  console.log(
    `Course: ${course.code} | ${course.title} | credits: ${course.credits || 3} | Term ${course.termNumber || "N/A"} | ${course.deliveryMethod || "N/A"}`,
  );
  console.log(`Prereqs: ${course.preRequisites?.join(", ") || "None"}`);
  console.log(`Programs: ${course.programIds?.join(", ") || "None"} `);
  if (course.note) {
    console.log(`Note: ${course.note}`);
  }
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    gap: 6,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  code: {
    fontSize: 14,
    fontWeight: "800",
  },
  credits: {
    fontSize: 12,
    opacity: 0.75,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
  },
  desc: {
    fontSize: 13,
    opacity: 0.85,
    lineHeight: 18,
  },
  meta: {
    fontSize: 12,
    opacity: 0.7,
  },
  note: {
    marginTop: 2,
    fontSize: 12,
    opacity: 0.65,
  },
});
