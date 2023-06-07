import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Learn with the Best Resources",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Access curated, high-quality learning materials for effective skill
        development. Learn from the best tutorials, videos, and interactive
        exercises handpicked by experts. Equip yourself with top-notch resources
        to accelerate your learning journey.
      </>
    ),
  },
  {
    title: "Stay Updated with New Technologies",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Stay ahead by exploring the latest tools, frameworks, and trends in
        tech. Discover emerging technologies like blockchain, AI, cloud
        computing, and more. Expand your knowledge and adapt to the
        ever-evolving digital landscape.
      </>
    ),
  },
  {
    title: "Learn in Public",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Engage with a supportive community of learners and share your progress.
        Receive valuable feedback on your projects to enhance your skills.
        Amplify your visibility and networking opportunities in the development
        community.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
