import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import {Redirect} from '@docusaurus/router';

// Add the lolicode and csharp languages
// -------------------------------------
import { Prism } from 'prism-react-renderer';
(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('../prism-lolicode');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-ini');
require('prismjs/components/prism-json');
// -------------------------------------

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Download instructions
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return <Redirect to="/docs/intro" />;
  /*
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description="OpenBullet 2">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
  */
}
