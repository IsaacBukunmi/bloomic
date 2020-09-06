import React from "react"
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeSeriesSlider from "../components/HomeSeriesSlider/HomeSeriesSlider"
import HomeStripSlide from "../components/HomeStripSlide/HomeStripSlide"
import HomeArtsGallery from "../components/HomeArtsGallery/HomeArtsGallery";
import NewsLetterForm from "../components/NewsletterForm/NewsletterForm";
import HomeVideoCollections from "../components/HomeVideoCollections/HomeVideoCollections";

const IndexPage = () => {
  return(
    <Layout>
        <HomeHero />
        <HomeSeriesSlider />
        <HomeStripSlide />
        <HomeArtsGallery />
        <HomeVideoCollections />
    </Layout>
  )
}

export default IndexPage;