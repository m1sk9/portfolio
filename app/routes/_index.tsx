import About from "~/components/organisms/About";
import Skills from "~/components/organisms/Skill";
import Timeline from "~/components/organisms/Timeline";
import Profile from "../components/organisms/Profile";

export default function IndexPage() {
  return (
    <main>
      <Profile />
      <About />
      <Skills />
      <Timeline />
    </main>
  );
}
