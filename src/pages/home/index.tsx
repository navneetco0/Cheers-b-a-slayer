import { MainLayout } from "../../layout";
import {
  Hero,
  Categories,
  OnlineEvents,
  PopularEvents,
  TrendingEvents,
  CreateEvent,
  NewsLetter,
} from "./sections";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Categories />
        <PopularEvents />
        <OnlineEvents />
        <TrendingEvents />
        <CreateEvent />
        <NewsLetter />
      </div>
    </MainLayout>
  );
};

export default Home;
