import Section from "../components/Section";
import StudentList from "./StudentList";

export default function StudentsSection() {
  // TODO: Write the tsx code to render a Section component
  // Inside the Section, render the StudentList component
  return (
    <Section title="Students" subtitle="Student directory">
      <StudentList />
    </Section>
  );
}
