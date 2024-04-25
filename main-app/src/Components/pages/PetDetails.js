import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import ShelterLogo from "../images/Shelterlogo.svg";
import "./PetDetails.css";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { items } from "./items";
import Navbar from "../Navbar";

export const PetDetails = () => {
  let { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const petId = Number(id);
    const petDetails = items.find((item) => item.id === petId);
    setPet(petDetails);
    setLoading(false);
  }, [id]);

  if (loading || !pet) {
    return;
    <div>
      <Navbar />
      Loading or pet not found...
    </div>;
  }
  <style>{(document.body.style.backgroundColor = "rgb(227, 234, 231)")}</style>;
  return (
    <div className="body">
      <Navbar />
      <div className="displayImages">
        <img src={pet.image} alt="Jak Jax" className="pet-image"></img>
      </div>

      <div className="bubble-container">
        <div className="bubble-text-container"></div>

        {/* <img src={Bubble} alt=""></img> */}
      </div>

      <div className="categories-container">
        <div className="type-of-pet">{pet.category}</div>

        <div className="breed-type">{pet.breed}</div>

        <div className="distance">10.5 miles away</div>
      </div>

      <div className="bubble-container">
        <div className="pet-category1">{pet.category}</div>
        <div className="introduction">Hello, My name is {pet.name}!</div>

        <div className="pet-details1">
          {pet.sex}, {pet.age}
        </div>
      </div>

      <div className="pet-details-container">
        <div className="heading-two">My Story</div>

        <div className="details2">
          My name is {pet.name} and I am very cute.
        </div>

        <div className="heading-three">Fun Facts About Me</div>

        <div className="details-container">
          <div className="name-title">
            Name: <b>{pet.name}</b>
          </div>

          <div className="age-title">
            Age: <b>{pet.age}</b>
          </div>

          <div className="color-title">
            Color: <b>{pet.color}</b>
          </div>

          <div className="type-title">
            Type: <b>{pet.category}</b>
          </div>
        </div>

        <div className="details-container2">
          <div className="sex-title">
            Sex: <b>{pet.sex}</b>
          </div>

          <div className="breed-title">
            Breed: <b>{pet.breed}</b>
          </div>

          <div className="health-title">
            Health: <b>Vaccinated</b>
          </div>
        </div>
      </div>
      <Link to="/userboard">
        <div className="div">
          <div className="column-2">
            <div className="div-5">
              <div className="div-6">
                <img
                  loading="lazy"
                  srcSet={ShelterLogo}
                  className="img-2"
                  alt=""
                />
                <div className="div-7">
                  <div className="div-8">Pulaski County Shelter</div>
                  <i>
                    <IoIosCheckmarkCircle />
                  </i>
                </div>
              </div>
              <div className="div-9">
                <div className="div-10">Email:</div>
                <div className="div-11">hello@pcs.com</div>
              </div>
              <div className="div-12">
                <div className="div-13">Phone:</div>
                <div className="div-14">+1 (315) 766 9933</div>
              </div>
              <div className="div-15">
                <div className="div-16">Address:</div>
                <div className="div-17">
                  235 Adopt Me Ln, Somerset, KY 42501
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div>
        <Link to="/ExplorePets">
          <button className="back-arrow">
            <FiArrowLeft /> Back
          </button>
        </Link>
      </div>

      {/* <div className="accordian-container">
            <div className="dropdown1">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    How do I know which pet is the right fit for me?
                    </AccordionSummary>
                    <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className="dropdown2">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    >
                    What kind of pets can I adopt through Paws 'n Claws?
                    </AccordionSummary>
                    <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className="dropdown3">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    What are the adoption fees and what do you cover?
                    </AccordionSummary>
                    <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className="dropdown4">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    What is the adoption process like?
                    </AccordionSummary>
                    <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </div>
        </div> */}

      <div className="pet-about-meet-teamss">
        <h1>Furr-Ever friends near you</h1>
        <div>
          <Link to="/ExplorePets">
            <button className="see-more-arrow">
              See more
              <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="pet-about-team-sections">
          <Slider>
            {[0, 3, 6].map((startIndex, groupIndex) => (
              <div className="pet-work-section-info-container" key={groupIndex}>
                {/* Map over each group of three items */}
                {items.slice(startIndex, startIndex + 5).map((item, index) => (
                  <a key={index} href={`/PetDetails/${item.id}`}>
                    <div className="work-section-info">
                      <div className="info-boxes-img-container">
                        <img
                          src={item.image}
                          alt=""
                          style={{ maxWidth: "80%", height: "70%" }}
                        />
                      </div>
                      <h2>{item.name}</h2>
                      <p>{item.breed}</p>
                      <span>{item.age}</span>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
