import { StyleSheet,View } from "react-native";
import ProgramCard from "./ProgramCard";
import { programs } from "../../data/programs";

export default function ProgramList() {
  // Optional TODO: Sort programs by name before rendering by copying the programs array and sorting the copy
const sorted =[...programs]
  // TODO: Write the tsx code to render a list of ProgramCard components
  // The root component should be a View for the list, and inside of the view we should map over the programs array
  // For each program, render a ProgramCard component, passing the program as a prop
  // Remember to set a key prop on each ProgramCard, using the program id (this allows React to track each component efficiently)
  return <View style={styles.list}>
    {sorted.map((program) => (
        <ProgramCard key ={program.id} program={program} />
    ))}
  </View>;
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
});
