import React from 'react';
import ContainerInner from '../components/ui/elements/ContainerInner';
import Layout from '../layouts/Layout';
import PageTitle from '../components/PageTitle';
import Seo from '../components/Seo';

const AboutPage = () => (
  <Layout>
    <ContainerInner>
      <PageTitle pageTitle="About" />
      About page content
    </ContainerInner>
  </Layout>
);

export const Head = () => <Seo />;

export default AboutPage;
