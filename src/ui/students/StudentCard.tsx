import { Pressable, StyleSheet, Text, View } from "react-native";
import { Student } from "../../types/student";

interface Props {
  student: Student;
}

function FunFact({ text }: { text?: string }) {
  if (!text || !text.trim()) {
    return null;
  }
  return <Text style={styles.funFact}>Fun fact: {text}</Text>;
}
export default function StudentCard({ student }: Props) {
  const githubDisplay = student.githubUsername
    ? `github.com/${student.githubUsername}`
    : "N/A";
  const interestsDisplay = student.interests.slice(0, 4).join(", ");
  const programDisplay = student.programId || "Not assigned";
  const coursesDisplay =
    student.currentCourseIds && student.currentCourseIds.length > 0
      ? student.currentCourseIds.join(", ")
      : "N/A";

  const logStudentInfo = () => {
    let message = `Student: ${student.name} | Year ${student.year} | ${student.status} | Program: ${programDisplay} | GitHub: ${githubDisplay}`;
    message += `\nInterests: ${interestsDisplay}`;
    message += `\nCourses: ${coursesDisplay}`;
    if (student.funFact) {
      message += `\nFun fact: ${student.funFact}`;
    }
    console.log(message);
  };

  return (
    <Pressable onPress={logStudentInfo} style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.badge}>Year {student.year}</Text>
      </View>
      <Text style={styles.meta}>{student.status}</Text>
      <Text style={styles.meta}>Program: {programDisplay}</Text>
      <Text style={styles.meta}>GitHub: {githubDisplay}</Text>
      <Text style={styles.meta}>Interests: {interestsDisplay}</Text>
      <Text style={styles.meta}>Courses: {coursesDisplay}</Text>
      <FunFact text={student.funFact} />
    </Pressable>
  );
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
    gap: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
  },
  badge: {
    fontSize: 12,
    opacity: 0.75,
  },
  meta: {
    fontSize: 12,
    opacity: 0.75,
  },
  funFact: {
    marginTop: 2,
    fontSize: 12,
    opacity: 0.65,
  },
});
