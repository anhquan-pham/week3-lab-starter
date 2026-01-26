import { StyleSheet, View } from "react-native";
import { students } from "../../data/students";
import StudentCard from "./StudentCard";

export default function StudentList() {
  // Optional TODO: Sort students by name before rendering by copying the students array and sorting the copy

  // TODO: Write the tsx code to render a list of StudentCard components
  // The root component should be a View for the list, and inside of the view we should map over the students array
  // For each student, render a StudentCard component, passing the student as a prop
  // Remember to set a key prop on each StudentCard, using the student id (this allows React to track each component efficiently)
  const sortedStudents = [...students].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <View style={styles.list}>
      {sortedStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
});
