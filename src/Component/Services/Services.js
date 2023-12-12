import React from "react";
import img1 from "../../image/1.PNG";
import img2 from "../../image/2.PNG";
import img3 from "../../image/3.PNG";
import { Grid, Paper, Typography } from "@material-ui/core";

const ServiceSection = () => {
  return (
    <section className="services-section-two style-two">
      <div className="section-inner">
        <div className="auto-container">
          <div className="sec-title light centered">
            <h2>Our Services</h2>

            <div className="sub-title">
              a force for activating cities and reenergizing cultures //{" "}
            </div>
            <div className="separator" />
          </div>
          <Grid container spacing={3}>
            {/* Service Block One */}
            <Grid item xs={12} md={6}>
              <Paper className="services-block-two">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src={img1} alt="" />
                  </div>
                  <Typography variant="h5" component="h3">
                    <a href="services-single">Construction</a>
                  </Typography>
                  <div className="text">
                    <ul>
                      <li>Project Planning</li>
                      <li>Supervision</li>
                      <li>Project Management</li>
                      <li>Grey Structure</li>
                      <li>Furniture, Fixtures</li>
                      <li>& Equipment (FF&E)</li>
                      <li>Finishing Works</li>
                      <li>Landscaping Works</li>
                    </ul>
                  </div>
                </div>
              </Paper>
            </Grid>

            {/* Service Block Two (Horizontal) */}
            <Grid item xs={12} md={6}>
              <Paper className="services-block-two">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src={img2} alt="" />
                  </div>
                  <Typography variant="h7" component="h3">
                    <a href="services-single">Design</a>
                  </Typography>
                  <div className="text">
                    <ul className="texts">
                      <li>Design Review</li>
                      <li>Concept Design</li>
                      <li>Design Development</li>
                      <li>Architectural Design</li>
                      <li>Master Planning</li>
                      <li>Landscape Design</li>
                      <li>Interior Design</li>
                      <li>BIM Management</li>
                    </ul>
                  </div>
                </div>
              </Paper>
            </Grid>

            {/* Service Block Three */}
            <Grid item xs={12} md={6}>
              <Paper className="services-block-two">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src={img3} alt="" />
                  </div>
                  <Typography variant="h5" component="h3">
                    <a href="services-single">Engineering</a>
                  </Typography>
                  <div className="text">
                    <ul>
                      <li>Structural Engineering</li>
                      <li>Mechanical Engineering</li>
                      <li>Electrical Engineering</li>
                      <li>Plumbing Engineering</li>
                      <li>Fire & Safety</li>
                      <li>Quantity Surveying</li>
                    </ul>
                  </div>
                </div>
              </Paper>
            </Grid>
            {/* Service Block Two (Horizontal) */}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

// import React from "react";
// import img1 from "../../image/1.PNG";
// const Services = () => {
//   return (
//     <>
//       <section>
//         <div className="section-inner">
//           <div className="auto-container">
//             <div className="sec-title light centered">
//               <h2>Our Services</h2>
//               <div className="sub-title">
//                 a force for activating cities and reenergizing cultures
//               </div>
//               <div className="separator" />
//             </div>
//             <div className="row clearfix">
//               <div className="services-block-two col-4 col-md-6 mb-1 col-xs-5">
//                 <div className="inner-box">
//                   <div className="icon-box">
//                     <img src={img1} alt="" />
//                   </div>
//                   <h3>
//                     <a href="services-single">Construction</a>
//                   </h3>
//                   <div className="text">
//                     <ul>
//                       <li>Project Planning</li>
//                       <li>Supervision</li>
//                       <li>Project Management</li>
//                       <li>Grey Structure</li>
//                       <li>Furniture, Fixtures</li>
//                       <li>& Equipment (FF&E)</li>
//                       <li>Finishing Works</li>
//                       <li>Landscaping Works</li>
//                     </ul>
//                   </div>
//                   <a className="read-more" href="services-single">
//                     read more
//                     <span className="icon fa fa-angle-double-right" />
//                   </a>
//                 </div>
//               </div>

//               <div className="services-block-two col-4 col-md-6 mb-1 col-xs-5">
//                 <div className="inner-box">
//                   <div className="icon-box">
//                     <img src="/images/services/icon-2.svg" alt="" />
//                   </div>
//                   <h3>
//                     <a href="services-single">Consulting &amp; Planning</a>
//                   </h3>
//                   <div className="text">
//                     Our team’s analytical tools and user engagement activities
//                     inspire creativity and collaboration that enhance any
//                     project.
//                   </div>
//                   <a className="read-more" href="services-single">
//                     read more
//                     <span className="icon fa fa-angle-double-right" />
//                   </a>
//                 </div>
//               </div>

//               <div className="services-block-two col-4 col-md-6 mb-1 col-xs-5">
//                 <div className="inner-box">
//                   <div className="icon-box">
//                     <img src="/images/services/icon-3.svg" alt="" />
//                   </div>
//                   <h3>
//                     <a href="services-single">Construction</a>
//                   </h3>
//                   <div className="text">
//                     Across our firm, we employ a diverse range of professionals
//                     with a successful record delivering high-quality projects.
//                   </div>
//                   <a className="read-more" href="services-single">
//                     read more
//                     <span className="icon fa fa-angle-double-right" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Services;
