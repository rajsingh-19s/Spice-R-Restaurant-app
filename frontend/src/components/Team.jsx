import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
           "The only thing we're serious about is food — and the people who make it." Our team isn’t just a group of chefs and staff — we’re a family bound by our shared love for flavor, creativity, and hospitality. Each member brings their own unique talent and passion to the table, working together to craft dishes that delight and service that feels personal. From the kitchen to your table, it’s our team’s dedication that turns every visit into an experience. We believe great food starts with great people — and we’re proud to have a team that’s as committed as we are.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
