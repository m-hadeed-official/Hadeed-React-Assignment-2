import ProfileCard from "./components/ProfileCard.jsx";
import "./App.css";

import profileImg1 from "./assets/profile1.jpg";
import profileImg2 from "./assets/profile2.jpg";
import profileImg3 from "./assets/profile3.jpg";

function App() {
  return (
    <div className="app">
      <section className="profile-cards-sec">
        {/* note: I could make array objects for every user and loop throught that array to display them, but i chose this method as for my second assignment  */}
        <ProfileCard
          name="Muhammad Hadeed"
          bio="lorem ipsum dolor sit amet"
          skillsList={["Html", "css", "JS"]}
          img={profileImg1}
        />
        <ProfileCard
          name="Lian Win"
          bio="lorem ipsum dolor sit amet"
          skillsList={["ruby", "cloud Engeenering", "java"]}
          img={profileImg2}
        />
        <ProfileCard
          name="John Duckett"
          bio="lorem ipsum dolor sit amet"
          skillsList={["C++", "python"]}
          img={profileImg3}
        />
      </section>
    </div>
  );
}

export default App;
