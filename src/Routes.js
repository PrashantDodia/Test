import React from "react";
import License from "pages/License";
import PrivacyPolicy from "pages/PrivacyPolicy";
import FAQ from "pages/FAQ";
import Error from "pages/Error";
import BlogDetails from "pages/BlogDetails";
import BlogPage from "pages/BlogPage";
import ContactPage from "pages/ContactPage";
import AgentProfile from "pages/AgentProfile";
import AgentList from "pages/AgentList";
import PropertyDetails from "pages/PropertyDetails";
import ListingMapView from "pages/ListingMapView";
import Listing from "pages/Listing";
import AboutUs from "pages/AboutUs";
import LandingPageOne from "pages/LandingPageOne";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/landingpageone" element={<LandingPageOne />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listingmapview" element={<ListingMapView />} />
        <Route path="/propertydetails" element={<PropertyDetails />} />
        <Route path="/agentlist" element={<AgentList />} />
        <Route path="/agentprofile" element={<AgentProfile />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/error" element={<Error />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/license" element={<License />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
