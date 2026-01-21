import { staff } from "@/src/data/staff";
import { StyleSheet, View } from "react-native";
import StaffCard from "./StaffCard";

export default function StaffList() {
  // Optional TODO: Sort staff by name before rendering by copying the staff array and sorting the copy
const sorted = [...staff]
  // TODO: Write the tsx code to render a list of StaffCard components
  // The root component should be a View for the list, and inside of the view we should map over the staff array
  // For each person, render a StaffCard component, passing the person as a prop
  // Remember to set a key prop on each StaffCard, using the person's id (this allows React to track each component efficiently)
  return <View style={styles.list}>
    {sorted.map((person) => (
      <StaffCard key={person.id} person={person} />
    ))}
    </View>
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
});
