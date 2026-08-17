import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";
import { ScrollProgress } from "../components/ScrollProgress";
import ProjectSlider from "../components/ProjectSlider";

// const LazyBannerQuote = lazy(() => import("../components/BannerQuote"));
const LazySiteBarRight = lazy(() => import("../components/SideBarRight"));
const LazySiteBarLeft = lazy(() => import("../components/SiteBarLeft"));
const LazyTechStack = lazy(() => import("../components/TechStack"));
const LazyContact = lazy(() => import("../components/Contact"));
const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));

const Home: React.FC = () => {

  return (
    <>
      <Layout>
        <ThemeSwitch />
        <header className="h-auto">
          <ScrollProgress
            position={"left"}
            color={"orange"}
            height={10}
            smoothness={true}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <LazySiteBarLeft />
            <LazyHeaderIntro />
            <LazySiteBarRight />
          </Suspense>
        </header>
        <main className="relative">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyTechStack />
            <ProjectSlider />
            <div className="relative -mb-24 pb-32 -mt-10">
              <LazyContact />
            </div>
          </Suspense>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
