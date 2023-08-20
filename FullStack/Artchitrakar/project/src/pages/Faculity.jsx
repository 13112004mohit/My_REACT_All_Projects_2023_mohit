import React from "react";
import "../style/faculity.css";
import { NavLink } from "react-router-dom";
import Cart from "../components/teamCart";
import MetaData from "../components/layout/MetaData";
import { useSelector } from "react-redux";

const Faculity = () => {
  const { teams } = useSelector((state) => state.admin);
  return (
    <>
      <MetaData title="Chitrakar-Faculity" />
      <section className="team_m_con">
        <div className="team_F_con">
          <h1>Our Teams</h1>
          <p>
            <NavLink
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              to={"/"}
            >
              Home{" "}
            </NavLink>
            Our Awesome Team
          </p>
        </div>
      </section>

      <section className="team_S_con">
        <div className="team_Cart_con">
          {teams && teams.teams.map((e, i) => (
            <Cart
              image={e.image}
              name={e.name}
              work={e.position}
              degree={e.degree}
              Whatsapp={e.Whatsapp}
              facebook={e.facebook}
              instagram={e.instagram}
              twitter={e.twitter}
              youtube={e.youtube}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Faculity;
