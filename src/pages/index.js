import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Lets Learn ⏱️
            </Link>
          </div>
        </div>
      </header>
      <FeaturesSection />
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

function FeaturesSection() {
  return (
    <div className={clsx("margin-vert--lg", "padding-vert--lg")}>
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h2
              className={clsx(
                "text--center",
                "margin-bottom--xl",
                styles.sectionTitle
              )}
            >
              Why Front End Interview Handbook?
            </h2>
            <div className={clsx("row", styles.featuresRow)}>
              <div className={clsx("col", "col--4", styles.featuresRowItem)}>
                <h3>🔍 Front end interviews demystified</h3>
                <p>
                  Front end interview preparation resources are scarce but no
                  fret, we tell you what to expect and everything else you need
                  to know!
                </p>
                <a href={useBaseUrl("introduction")}>
                  <strong>Learn more</strong>
                </a>
              </div>
              <div className={clsx("col", "col--4", styles.featuresRowItem)}>
                <h3>👩‍🎨 System design</h3>
                <p>
                  What even is Front end system design?! Learn more about them
                  and how to ace these interviews.
                </p>
                <a href={useBaseUrl("front-end-system-design")}>
                  <strong>Learn more</strong>
                </a>
              </div>
              <div className={clsx("col", "col--4", styles.featuresRowItem)}>
                <h3>👩‍💻 Coding questions</h3>
                <p>
                  Coding questions are an entirely different ball game for Front
                  End interviews. We tell you how to prepare for them (hint: not
                  just LeetCode).
                </p>
                <a href={useBaseUrl("coding/build-front-end-user-interfaces")}>
                  <strong>Learn more</strong>
                </a>
              </div>
              <div className={clsx("col", "col--4", styles.featuresRowItem)}>
                <h3>💯 From zero to hero</h3>
                <p>
                  Go from zero to front end interview hero with this handbook.
                  No prior interview experience needed.
                </p>
              </div>
              <div className={clsx("col", "col--4", styles.featuresRowItem)}>
                <h3>🍼 Back to basics</h3>
                <p>
                  Learn to walk before you learn to fly. While React, Vue and
                  Angular are cool, make sure you also know your fundamentals.
                </p>
              </div>
              <div className={clsx("col", "col--4", styles.featuresRowItem)}>
                <h3>👨‍👩‍👦‍👦 Community effort</h3>
                <p>
                  The best thing about Open Source is that the community vets
                  the contents, so you can be sure the answers here have been
                  proofread by many.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
