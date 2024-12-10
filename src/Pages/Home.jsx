import Banner2 from "../components/Banner/Banner2";
import ClientReview from "../components/ClientReview/ClientReview";
import AdventureExperiences from "../components/Experiences/AdventureExperiences";
import ExploreAdventure from "../components/ExploreAdventure/ExploreAdventure";

const Home = () => {
  return (
    <div className="pb-16">
      <Banner2></Banner2>
      <AdventureExperiences></AdventureExperiences>
      <ClientReview></ClientReview>
      <ExploreAdventure></ExploreAdventure>
    </div>
  );
};

export default Home;
