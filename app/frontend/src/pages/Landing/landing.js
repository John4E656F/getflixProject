import React, { useState } from "react";
import "./landing.css";

import NavBar from "../../components/Navbar/navbar";
import LandingPage from "../../assets/images/landingPage.jpg";
import { TextField } from "@material-ui/core";
import Button from "../../components/Button/btn.component";
import DarkComponent from "../../components/Dark/Dark";
import FAQComponent from "../../components/FAQ/faq";
import Footer from "../../components/Footer/footer";
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

	const darkComponents = textualMaterial.darkComponent.map((darkcomp) => (
		<div className="tv-section" key={darkcomp.id}>
			<div className="responsive-tv-inner">
				<DarkComponent
					topText={darkcomp.topText}
					bottomText={darkcomp.bottomText}
					image={darkcomp.image}
				/>
			</div>
		</div>
	));

	const faqComponents = textualMaterial.faqComponent.map((faqcomp) => (
		<FAQComponent
			key={faqcomp.id}
			text={faqcomp.text}
			boxOpen={faqBoxOpen[`box${faqcomp.id}`]}
			faqOpenHandler={() => faqOpenHandler(`box${faqcomp.id}`)}
			boxText={faqcomp.boxText}
		/>
	));

	return (
		<>
			<div className="landingSection" style={{ backgroundImage: `url(${LandingPage})` }}>
				<NavBar loginButton />
				<div className="landingTexts">
					<h1>Unlimited movies, TV shows, and more.</h1>
					<h3>Watch anywhere. Cancel anytime.</h3>
					<h3>Ready to watch? Enter your email to create or restart your membership.</h3>

					<div className="ButtonSticker">
						<TextField
							className="TextField"
							label="Email Address"
							variant="filled"
							color="secondary"
						/>

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
								GET STARTED
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{darkComponents}

			<div className="faq-section">
				<div className="tv-inner">
					<DarkComponent fontSize="2.5rem" topText="Frequently Asked Questions" />

					{faqComponents}

					<div className="GetStartedComponent">
						<h3>Ready to watch? Enter your email to create or restart your membership.</h3>

						<div className="ButtonSticker">
							<TextField
								className="TextField"
								label="Email Address"
								variant="filled"
								color="secondary"
							/>

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
									GET STARTED
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default LandingScreen;
