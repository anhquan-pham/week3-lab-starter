import { Pressable, StyleSheet, View, Text} from "react-native";
import {Program} from "../../types/program";

// TODO: Make a Props type for the props of our ProgramCard component
type Props = {
    program: Program;
}
export default function ProgramCard({program}: Props) {
  // TODO: Use descructuring to extract values from the program
  // If values need to be modified or altered for display (ex: a default value added if no delivery method is specified),
  // you can do that directly in the tsx code below, or create new variables here
  // if the values will be used in the log function as well, create variables for them here
const{ id, name, credential, school, lengthInYears, numberOfCredits, deliveryMethod, careerPaths, note } = program;
const ProgramSummary = `Credential: ${credential} | School: ${school} | Length: ${lengthInYears} years | Credits: ${numberOfCredits} | Delivery: ${deliveryMethod} | Carrer Path: ${careerPaths?.join(",")}`;

  // TODO: Create a function called logProgramInfo that logs a formatted summary of the program to the console
  // Example output:
  // Program: Diploma in Software Development | Credential: Diploma | School: School of Technology | Length: 2 years | Credits: 60 | Delivery: In-person
  // Career Paths: Software Developer, Web Developer, Mobile Application Developer
 const logProgramInfo = () => {
    console.log(ProgramSummary);
 }
  // TODO: Create the TSX for the program card layout
  // There should be a Pressable as the root element, with onPress set to the logProgramInfo function created above
  // Inside the Pressable, create the following elements:
  // A View for the top row, containing:
  //   A Text for the program name
  //   A Text for the credential type (this will act as a badge)
  // A Text for the school name
  // A Text for the length, credits, and delivery method
  // (The two text components above should use the meta style)
  // A View containing Text elements for each career path (if any exist) (use lines style for the view, and line style for each text)
  // If there is a note, a Text for the note

  return <Pressable onPress={logProgramInfo} style={styles.card}>
    <View style={styles.topRow}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.badge}>{credential}</Text>
    </View>
    <Text style={styles.meta}>{school}</Text>
    <Text style={styles.meta}>Length: {lengthInYears} years | Credits: {numberOfCredits} | Delivery: {deliveryMethod ?? "N/A"}</Text>
    <View style={styles.lines}>
      <Text style={styles.lines}>Career Path: {careerPaths?.join(", ")}</Text>
    </View>
    <Text style={styles.note}>{note}</Text>
  </Pressable>
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
    fontSize: 13,
    opacity: 0.85,
  },
  lines: {
    gap: 2,
    marginTop: 2,
  },
  line: {
    fontSize: 13,
    opacity: 0.85,
  },
  note: {
    marginTop: 4,
    fontSize: 12,
    opacity: 0.65,
  },
});
