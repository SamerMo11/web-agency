import "../Css/Layout/home.scss"
import vector from "../Assets/Main/Vector.svg"
import hero from "../Assets/Home/hero.webp"
import doubleWave from "../Assets/Main/doubleWave.svg"
import circle from "../Assets/Home/circle.webp"
import Sec2Comp from "../Components/sec2"
import SmallHead from "../Components/SmallHead"
import halfStar from "../Assets/Main/side.svg"
import VisionComp from "../Components/VisionComp"
import CircleComp from "../Components/CircleComp"
// import sec2Img from "../Assets/Home/about.webp"
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
        <VisionComp
        head="Agencies"
        text="We support industry leading agencies as a reliable white-label outsourcing partner."
        />
        <VisionComp
        head="Companies"
        text="Get the service of an agency for the hourly rate of a freelancer."
        />
        <VisionComp
        head="Organisation"
        text="We love to support green, sustainable and positive impact organisation."
        />
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
                        <CircleComp
                        num="1"
                        head="performance"
                        text="We deliver blazing fast frontends. Whether it's a ReactJS app or a WordPress theme, we score full marks."
                        />
                        <CircleComp
                        num="2"
                        head="Accessibility"
                        text="We aim to develop products that are accessible to everyone."
                        />
                        <CircleComp
                        num="3"
                        head="Best Practices"
                        text="We use latest and best technologies and standards to ensure our products are on the leading edge."
                        />
                        <CircleComp
                        num="4"
                        head="SEO"
                        text="Our products are technically optimized and prepared for top-notch search engine optimisation."
                        />
                </div>
            </div>
            <img src={circle} alt="ourCircleImage" loading="lazy"/>
        </div>


        <div className="spotsCont">

        </div>

 





</div>
    )
}