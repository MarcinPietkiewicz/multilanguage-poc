import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>This is about page</h1>
      <Link to="Home">Click to view our home page</Link>
      <Link to="contact">Click to view our contact page</Link>
    </div>
  );
}

export default About;
