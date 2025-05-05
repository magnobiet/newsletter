import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

      </div>
    </header >
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`./index`}
      description="Links, tendências e ferramentas para devs front-end, todo mês!">

      <HomepageHeader />

      <main className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/archive">
          Ver edições anteriores
        </Link>

        <Link
          className="button button--primary button--lg"
          to="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7289953302857801730">
          Assinar no LinkedIn
        </Link>
      </main>
    </Layout>
  );
}
