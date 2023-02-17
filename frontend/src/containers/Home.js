import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    const [listings, setListings] = useState([]);

    return (
        <>
            {/* <Helmet>
                <title>Real Estate - Home</title>
                <meta name="description" content="sign up page" />
            </Helmet>
            <section className="">
                <ListingForm setListings={setListings} />
            </section>
            <section>
                <ListingHome listings={listings} />
            </section> */}

<Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/house-real-estate-banner-picture-id1135332673?k=6&m=1135332673&s=170667a&w=0&h=Im1S8zVifPBQjL6ou-GcEgEJwrHdWY6xY6hwFNRoN4c="
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn6.f-cdn.com/contestentries/84620/1314386/53acc41d53100_thumb900.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pecora.com/wp-content/uploads/2015/12/LEED-Header-1024x307.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br>
    </br>
            <div>
                <h1 className="text-center text-info mt-5 mb-4" style={{textShadow:"2px 2px black", fontSize:"50px"}}>ALL YOU NEED FOR YOUR REAL ESTATE<br></br> WEBSITE UNDER ONE ROOF  </h1>    
            </div> 
            <div style={{marginLeft:'6%' , marginRight:'6%',fontSize:"20px"}}>
            <p className="text-center">Looking to test our products before you buy? We’ve built two demo sites (one for our base package, one with our suite of add-ons). These sites are populated with sample data for you to learn the functionalities of our platform. If you’d like to try our products with full admin access, contact us for a development area built just for you.<br></br>
            Today’s global real estate market is moving faster than ever. Cost efficiency and swift transaction execution is expected; Technical excellence a must; Innovation essential. We adopt a partnership approach to working with clients and their advisers, focusing not just on what they want, but how they want it – combining excellent technical and legal counsel, a thorough understanding <br></br>
            of the market and market practice, a pragmatic approach and a deep knowledge of each clients’ business.</p>
            <p className="text-center mb-5">We are proud of the diversity and profile of our real estate clients and the challenging and exciting work they present to us. We advise leading global institutional and private investors, developers and wealth managers, REITs, corporate occupiers and family offices. We act for funders, borrowers and developers, sovereign wealth funds, state-owned enterprises, public bodies and utilities from across the globe.</p>
            
            <h1 className="mb-4">We have extensive experience of,</h1>
            <li style={{listStyleType:'square'}}>Corporate Real Estate & Joint Ventures</li>
            <li style={{listStyleType:'square'}}>Real Estate Development</li>
            <li style={{listStyleType:'square'}}>Cross border transactions</li>
            <li style={{listStyleType:'square'}}>Energy and Infrastructure</li>
            <li style={{listStyleType:'square'}}>Real Estate Development</li>
            <li style={{listStyleType:'square'}}>Public and private fundraising</li>
            <li style={{listStyleType:'square'}}>Real Estate Finance</li>
            <li style={{listStyleType:'square',marginBottom:'4%'}}>Tax and deal structuring</li>

            <h4>Whether property is core to your business, the foundation of a new opportunity, or an operational issue to be managed, our team delivers. By choosing KWM, our clients benefit from our responsive, knowledgeable, practical, commercial and creative team, our global network and years of experience assisting clients deliver their real estate and investment strategies.</h4>
           
            </div>
            <div className='my-5'>
					<h5 className='text-center pt-5'>
						Copyright &copy; River Rock Real Estate, 2023 | All Right Reserved
					</h5>
				</div>
            
        </>
    );
};

export default Home;
