import React from "react"
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeSeriesSlider from "../components/HomeSeriesSlider/HomeSeriesSlider"
import HomeStripSlide from "../components/HomeStripSlide/HomeStripSlide"
import HomeArtsGallery from "../components/HomeArtsGallery/HomeArtsGallery";
import HomeVideoCollections from "../components/HomeVideoCollections/HomeVideoCollections";
import Head from "../components/head";


const IndexPage = () => {
  return(
    <Layout>
        <Head title="Home" />
        <HomeHero />
        <HomeSeriesSlider />
        <HomeStripSlide />
        <HomeArtsGallery />
        <HomeVideoCollections />
    </Layout>
  )
}

export default IndexPage;