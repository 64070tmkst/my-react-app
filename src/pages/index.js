import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Card from "../components/Card";
import Section from "../components/Section";
import Wave from "../components/Wave";
import staticdata from '../../staticdata.json';
import Cell from '../components/Cell';
import styled from 'styled-components';




const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup= styled.div`
  max-width: 800px;
  margin: 0 auto 100px auto;
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap: 20px;
  padding: 0 20px;

  @media(max-width: 800px){
    grid-template-columns: repeat(1, 1fr);
  }
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
         Learn to<br/>
          design and code react apps.
         
        </h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <a href="#">Watch the video</a>
        <div className="Logos">
          <img src={require("../images/logo-sketch.png")} width="50" />
          <img src={require("../images/logo-figma.png")} width="50" />
          <img src={require("../images/logo-framer.png")} width="50" />
          <img src={require("../images/logo-invision.png")} width="50" />
          <img src={require("../images/logo-react.png")} width="50" />
          <img src={require("../images/logo-swift.png")} width="50" />
        </div>
        <Wave/>

      </div>
    </div>

    <div className="Cards">
      <h2>
        6 courses, more coming!
      </h2>
      <div className="CardGroup">
        <Card
          title="Design System with Figma"
          text="10 sections"
          image={require('../images/wallpaper.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')} />
        <Card
          title="Learn ios11 Design"
          text="12 sections"
          image={require('../images/wallpaper3.jpg')} />
        <Card
          title="Vue for Designers"
          text="12 sections"
          image={require('../images/wallpaper4.jpg')} />
                <Card
          title="Design System with Figma"
          text="10 sections"
          image={require('../images/wallpaper.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')} />

      </div>
        
    </div>

    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with compooments, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlifty."
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell =>(
        <Cell 
          title={cell.title}
          image={cell.image}
        />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage;


