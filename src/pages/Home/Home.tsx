import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import MetaTags from "../../components/MetaTags/MetaTags";
import img from "../../../public/heroPhoto.png";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <MetaTags
        title="Home Page"
        description="LernLingo helps people find the best teacher for learning languages based on their needs and goals. It connects learners with qualified instructors and makes the learning process more effective and personalized."
        image={img}
      />
    </>
  );
};

export default Home;
