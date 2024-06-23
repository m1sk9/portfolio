import About from "~/components/organisms/About";
import Skills from "~/components/organisms/Skill";
import Profile from "../components/organisms/Profile";

export default function IndexPage() {
  return (
    <main>
      <Profile />
      <About />
      <Skills />
    </main>
  );
}
