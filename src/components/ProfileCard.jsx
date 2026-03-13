import "./ProfileCard.css";

export default function ProfileCard({
  skillsList = [],
  name = "Unknown",
  bio = "not provided",
  img = "",
}) {
  return (
    <section className="card-wrapper ">
      {/* profile img */}
      <div className="profile-img-sec">
        {/* inline styling used here */}
        <img style={{ width: "100%" }} src={img} alt="Profile image" />
      </div>
      {/* Introduction */}
      <div className="intro-sec">
        <h1 className="intro-heading">{name}</h1>
        <p className="intro-paragraph">{bio}</p>
      </div>

      {/* Skills */}
      <div className="skills-sec">
        <h2 className="skills-heading">Skills</h2>
        <ul className="skills-list">
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      {/* contact button */}
      <button className="contact-btn">Contact</button>
    </section>
  );
}
