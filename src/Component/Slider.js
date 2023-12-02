import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../main-slider/image-1.jpg";
import img2 from "../main-slider/image-2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselPage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div>
              <h1
                style={{
                  fontSize: "3rem",
                  marginRight: "45rem",
                  marginBottom: "2rem",
                }}
              >
                We create living, breathing structures that inspire
              </h1>
            </div>
            <div
              className="tp-parrallx-wrap"
              style={{
                position: "absolute",
                display: "block",
                visibility: "visible",
                left: "90px",
                top: "387px",
                Zindex: "5",
              }}
            >
              <div
                className="tp-loop-wrap"
                style={{ position: "absolute", display: "block" }}
              >
                <div
                  className="tp-mask-wrap"
                  style={{
                    position: "absolute",
                    display: "block",
                    overflow: "hidden",
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                  }}
                >
                  <h2 style={{ marginRight: "30rem" }}>
                    Together we ensure that each building fulfills their needs
                    and goals, as unique manifestations of brand, mission and
                    values
                  </h2>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;

// import React from "react";

// const Slider = () => {
//   return (
//     <>
//       <section className="main-slider">
//         <div
//           className="rev_slider_wrapper fullwidthbanner-container"
//           id="rev_slider_one_wrapper"
//           data-source="gallery"
//         >
//           <div
//             className="rev_slider fullwidthabanner"
//             id="rev_slider_one"
//             data-version="5.4.1"
//           >
//             <ul>
//               <li
//                 data-description="Slide Description"
//                 data-easein="default"
//                 data-easeout="default"
//                 data-fsmasterspeed={1500}
//                 data-fsslotamount={7}
//                 data-fstransition="fade"
//                 data-hideafterloop={0}
//                 data-hideslideonmobile="off"
//                 data-index="rs-1687"
//                 data-masterspeed="default"
//                 data-param1=""
//                 data-param10
//                 data-param2
//                 data-param3
//                 data-param4
//                 data-param5
//                 data-param6
//                 data-param7
//                 data-param8
//                 data-param9
//                 data-rotate={0}
//                 data-saveperformance="off"
//                 data-slotamount="default"
//                 data-thumb="../../public/images/main-slider/image-1.jpg"
//                 data-title="Slide Title"
//                 data-transition="parallaxvertical"
//               >
//                 <img
//                   alt=""
//                   className="rev-slidebg"
//                   data-bgfit="cover"
//                   data-bgparallax={10}
//                   data-bgposition="center center"
//                   data-bgrepeat="no-repeat"
//                   data-no-retina
//                   src="../../public/images/main-slider/image-1.jpg"
//                 />
//                 <div
//                   className="tp-caption"
//                   data-paddingbottom="[0,0,0,0]"
//                   data-paddingleft="[0,0,0,0]"
//                   data-paddingright="[0,0,0,0]"
//                   data-paddingtop="[0,0,0,0]"
//                   data-responsive_offset="on"
//                   data-type="text"
//                   data-height="none"
//                   data-width="['650','650','550','420']"
//                   data-whitespace="normal"
//                   data-hoffset="['15','15','15','15']"
//                   data-voffset="['-40','-80','-80','-75']"
//                   data-x="['left','left','left','left']"
//                   data-y="['middle','middle','middle','middle']"
//                   data-textalign="['top','top','top','top']"
//                   data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
//                 >
//                   <h2>We create living, breathing structures that inspire</h2>
//                 </div>
//                 <div
//                   className="tp-caption"
//                   data-paddingbottom="[0,0,0,0]"
//                   data-paddingleft="[0,0,0,0]"
//                   data-paddingright="[0,0,0,0]"
//                   data-paddingtop="[0,0,0,0]"
//                   data-responsive_offset="on"
//                   data-type="text"
//                   data-height="none"
//                   data-width="['600','650','650','450']"
//                   data-whitespace="normal"
//                   data-hoffset="['15','15','15','15']"
//                   data-voffset="['65','20','15','10']"
//                   data-x="['left','left','left','left']"
//                   data-y="['middle','middle','middle','middle']"
//                   data-textalign="['top','top','top','top']"
//                   data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
//                 >
//                   <div className="text">
//                     Together we ensure that each building fulfills their needs
//                     and goals, as unique manifestations of brand, mission and
//                     values
//                   </div>
//                 </div>
//                 <div
//                   className="tp-caption tp-resizeme"
//                   data-paddingbottom="[0,0,0,0]"
//                   data-paddingleft="[0,0,0,0]"
//                   data-paddingright="[0,0,0,0]"
//                   data-paddingtop="[0,0,0,0]"
//                   data-responsive_offset="on"
//                   data-type="text"
//                   data-height="none"
//                   data-width="['750','750','550','420']"
//                   data-whitespace="normal"
//                   data-hoffset="['15','15','15','15']"
//                   data-voffset="['145','110','100','100']"
//                   data-x="['left','left','left','left']"
//                   data-y="['middle','middle','middle','middle']"
//                   data-textalign="['top','top','top','top']"
//                   data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
//                 >
//                   <a href="about.html" className="theme-btn btn-style-three">
//                     learn more
//                   </a>
//                 </div>
//               </li>
//               <li
//                 data-description="Slide Description"
//                 data-easein="default"
//                 data-easeout="default"
//                 data-fsmasterspeed={1500}
//                 data-fsslotamount={7}
//                 data-fstransition="fade"
//                 data-hideafterloop={0}
//                 data-hideslideonmobile="off"
//                 data-index="rs-1688"
//                 data-masterspeed="default"
//                 data-param1
//                 data-param10
//                 data-param2
//                 data-param3
//                 data-param4
//                 data-param5
//                 data-param6
//                 data-param7
//                 data-param8
//                 data-param9
//                 data-rotate={0}
//                 data-saveperformance="off"
//                 data-slotamount="default"
//                 data-thumb="../../public/images/main-slider/image-2.jpg"
//                 data-title="Slide Title"
//                 data-transition="parallaxvertical"
//               >
//                 <img
//                   alt=""
//                   className="rev-slidebg"
//                   data-bgfit="cover"
//                   data-bgparallax={10}
//                   data-bgposition="center center"
//                   data-bgrepeat="no-repeat"
//                   data-no-retina
//                   src="../../public/images/main-slider/image-2.jpg"
//                 />
//                 <div
//                   className="tp-caption"
//                   data-paddingbottom="[0,0,0,0]"
//                   data-paddingleft="[0,0,0,0]"
//                   data-paddingright="[0,0,0,0]"
//                   data-paddingtop="[0,0,0,0]"
//                   data-responsive_offset="on"
//                   data-type="text"
//                   data-height="none"
//                   data-width="['750','750','550','420']"
//                   data-whitespace="normal"
//                   data-hoffset="['15','15','15','15']"
//                   data-voffset="['-40','-80','-80','-75']"
//                   data-x="['left','left','left','left']"
//                   data-y="['middle','middle','middle','middle']"
//                   data-textalign="['top','top','top','top']"
//                   data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
//                 >
//                   <h2 className="alternate">
//                     We design spaces that uplift the people who experience them
//                   </h2>
//                 </div>
//                 <div
//                   className="tp-caption"
//                   data-paddingbottom="[0,0,0,0]"
//                   data-paddingleft="[0,0,0,0]"
//                   data-paddingright="[0,0,0,0]"
//                   data-paddingtop="[0,0,0,0]"
//                   data-responsive_offset="on"
//                   data-type="text"
//                   data-height="none"
//                   data-width="['600','650','650','450']"
//                   data-whitespace="normal"
//                   data-hoffset="['15','15','15','15']"
//                   data-voffset="['65','20','15','10']"
//                   data-x="['left','left','left','left']"
//                   data-y="['middle','middle','middle','middle']"
//                   data-textalign="['top','top','top','top']"
//                   data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
//                 >
//                   <div className="text alternate">
//                     Interiors are the essential settings of life, shaping how
//                     people work, play and learn
//                   </div>
//                 </div>
//                 <div
//                   className="tp-caption tp-resizeme"
//                   data-paddingbottom="[0,0,0,0]"
//                   data-paddingleft="[0,0,0,0]"
//                   data-paddingright="[0,0,0,0]"
//                   data-paddingtop="[0,0,0,0]"
//                   data-responsive_offset="on"
//                   data-type="text"
//                   data-height="none"
//                   data-width="['550','550','550','420']"
//                   data-whitespace="normal"
//                   data-hoffset="['15','15','15','15']"
//                   data-voffset="['145','110','100','100']"
//                   data-x="['left','left','left','left']"
//                   data-y="['middle','middle','middle','middle']"
//                   data-textalign="['top','top','top','top']"
//                   data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
//                 >
//                   <a href="about.html" className="theme-btn btn-style-three">
//                     learn more
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Slider;
