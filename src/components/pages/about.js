import React from "react";
import profilePicture from "../../../static/assets/images/bio/coughing_cat.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: `url(${profilePicture}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right-column">
        <h1 className="about-title-name">Benjamin Anthony Magalhaes Rivera</h1>

        <a
          className="personality-test-link"
          href="https://www.16personalities.com/profiles/ba526543832ba"
        >
          INFP-A
        </a>

        <div className="about-me-content">
          <div className="about-me-introduction">
            <p>
              Welcome to my portfolio, and I sincerely thank you for your
              interest. I was born in Provo, UT and raised in Springville, the
              neighboring southern city. My mother is from Brazil, and my father
              is from Mexico, but was mostly raised in southern Texas. I am
              currently 26 years old, and recently graduated from Bottega.tech
              where I participated in a full-stack course. I've always been
              light hearted and try to make any situation fun and easy for
              everyone to feel invloved or inclued.
            </p>
          </div>

          <div className="about-me-strengths">
            <h2 className="about-me-header">Strengths:</h2>

            <ul>
              <li>
                Outstanding communication skills and above and beyond with
                building relationships
              </li>

              <li>
                Excellent deductive skills built with years of puzzle games and
                near stubborn persistance for finding solutions to any problem
                faced.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
