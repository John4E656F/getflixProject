import React, { useState } from "react";
import "./landing.css";


import NavBar from "../../components/Navbar/oldnavbar/navbar.component";
import welcomeImg from "../../assets/images/welcome.jpg";
//import { TextField } from "@material-ui/core";
import Button from "../../components/Button/btn.component";
import InfoComponent from "../../components/Info/Info";
import FAQComponent from "../../components/FAQ/faq";
//import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
//import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { textualMaterial } from "./texts";

const LandingScreen = (props) => {
	const [faqBoxOpen, setFaqBoxOpen] = useState({});

	const faqOpenHandler = (boxNumber) => {
		setFaqBoxOpen((prevBoxState) => ({
			[boxNumber]: !prevBoxState[boxNumber],
		}));
	};

	const infoComponents = textualMaterial.infoComponent.map((infocomp) => (
		<div className="tv-section" key={infocomp.id}>
			<div className="responsive-tv-inner">
				<InfoComponent
					topText={infocomp.topText}
					bottomText={infocomp.bottomText}
					image={infocomp.image}
				/>
			</div>
		</div>
	));

	const faqComponents = textualMaterial.faqComponent.map((faqcomp) => (
		<FAQComponent
			key={faqcomp.id}
			text={faqcomp.text}
			boxOpen={faqBoxOpen[`box${faqcomp.id}`]}
			onClick={() => faqOpenHandler(`box${faqcomp.id}`)}
			boxText={faqcomp.boxText}
		/>
	));

	return (
		<>
			<div className="landingSection" style={{ backgroundImage: `url(${welcomeImg})`,
		  		backgroundPosition: 'center',
		  		backgroundSize: 'cover',
		  		backgroundRepeat: 'no-repeat'
			}}>
				<NavBar loginButton />
				<div className="landingTexts">
					<h1>Unlimited movies, TV shows, and more.</h1>
					<h3>Watch anywhere. Cancel anytime.</h3>
					<h3>Ready to watch? Enter your email to create or restart your membership.</h3>

					<div className="ButtonSticker">

						<Link to="/signup">
							<Button
								height="56px"
								width="150px"
								image
								icon={"fas fa-chevron-right"}
								backgroundColor="#e50914"
								textColor="#fff"
								buttonSize="small"
							>
								Join Now!
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{infoComponents}

			<div className="faq-section">
				<div className="tv-inner">
					<InfoComponent fontSize="2.5rem" topText="Frequently Asked Questions" />

					{faqComponents}

					<div className="GetStartedComponent">
						<h3>Ready to watch? Enter your email to create or restart your membership.</h3>

						<div className="ButtonSticker">


							<Link to="/login">
							<Button
								height="56px"
								width="150px"
								image
								icon={"fas fa-chevron-right"}
								backgroundColor="#e50914"
								textColor="#fff"
								buttonSize="small"
							>
								Signup
							</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			 {/*  <Footer />*/}
		</>
	);
};

export default LandingScreen;
