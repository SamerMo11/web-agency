import { Link } from "react-router-dom"
import "../Css/Layout/home.scss"

import vector from "../Assets/Main/Vector.svg"
import hero from "../Assets/Home/hero.webp"
import doubleWave from "../Assets/Main/doubleWave.svg"
import circle from "../Assets/Home/circle.webp"
import halfStar from "../Assets/Main/side.svg"

import Sec2Comp from "../Components/sec2"
import SmallHead from "../Components/SmallHead"
import VisionComp from "../Components/VisionComp"
import CircleComp from "../Components/CircleComp"
import SpotComp from "../Components/SpotComp"

import circleData from '../Data/Circle';
import spotData from '../Data/Spot';
import visionData from '../Data/Vision';

export default function Home(){
    return(
        <div className="homePage">
        <div className="homeHero">
            <div className="text">
            <p>
                creating
                <img src={vector} alt="vectorImg"/>
                <span>difference</span>
            </p>
            <p>
            Phlox is a group of handpicked, senior level freelancers. As a remote team, we design and develop web-based products for agencies and companies.
            </p>
            </div>
            <img src={hero} alt="heroImg"/>
        </div>



        <Sec2Comp
        direction="row"
        img= "img"
        smallHead="about us"
        text1="You bring the idea, we do the"
        text2="Phlox is a group of handpicked, senior level freelancers. As a remote team, we design and develop web-based products for agencies and companies."
        btn="learn more"
        />    
          
        <img src={doubleWave} alt="wave"/>
        <div className="visions">
            <img className="sideVector" src={halfStar} alt="halfStar" loading="lazy"/>
        <SmallHead smallHead="our vision"/>
        <p className="visionsHead">Who we <span>work</span> for</p>
        <div className="visionsCont">
        {visionData.map((item, index) => (
                  <VisionComp key={index} visionIcon={item.visionIcon} head={item.head} text={item.text}/>))}
        </div>
        </div>

        <div className="circleCont">
            <div className="leftCont">
                <div className="heading">
                    <SmallHead smallHead="our circle"/>
                    <p className="title">Best possible <span>results</span>, ask Google</p>
                    <p className="text">Award-winning agencies and leading companies rely on us for their projects.</p>
                </div>

                <div className="circleComps">
                {circleData.map((item, index) => (
                      <CircleComp key={index} num={item.num} head={item.head} text={item.text}/>
                    ))}
                </div>
            </div>
            <img src={circle} alt="ourCircleImage" loading="lazy"/>
        </div>


        <div className="spotsCont">
            <div className="leftCont">
                    {spotData.map((item, index) => (
                          <SpotComp key={index} spotIcon={item.spotIcon} head={item.head} text={item.text}/> ))}
            </div>
            <div className="rightCont">
                    <SmallHead smallHead="our sweet spots"/>
                    <p className="title">Our <span>sweet</span> spots</p>
                    <p className="text">As a Web Agency in Berlin we are best in designing and developing modern, highly performant websites and web apps built on top of ReactJs.</p>
                    <Link>work with us</Link>

              </div>
        </div>

 





</div>
    )
}