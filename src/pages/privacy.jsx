import React from 'react';
import ContainerInner from '../components/ui/elements/ContainerInner';
import Layout from '../layouts/Layout';
import PageTitle from '../components/PageTitle';
import Seo from '../components/Seo';

const PrivacyPage = () => (
  <Layout>
    <ContainerInner>
      <PageTitle pageTitle="Privacy Policy" />
      Privacy Policy page content
    </ContainerInner>
  </Layout>
);

export const Head = () => <Seo />;

export default PrivacyPage;
