import ProfileCard from "./components/ProfileCard.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="profile-cards-sec">
        {/* note: I could make array objects for every user and loop throught that array to display them, but i chose this method as for my second assignment  */}
        <ProfileCard
          name="Muhammad Hadeed"
          bio="lorem ipsum dolor sit amet"
          skillsList={["Html", "css", "JS"]}
          img="src/assets/profile1.jpg"
        />
        <ProfileCard
          name="Lian Win"
          bio="lorem ipsum dolor sit amet"
          skillsList={["ruby", "cloud Engeenering", "java"]}
          img="src/assets/profile2.jpg"
        />
        <ProfileCard
          name="John Duckett"
          bio="lorem ipsum dolor sit amet"
          skillsList={["C++", "python"]}
          img="src/assets/profile3.jpg"
        />
      </section>
    </div>
  );
}

export default App;
