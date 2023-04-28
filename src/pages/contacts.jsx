import React from 'react';
import ContainerInner from '../components/ui/elements/ContainerInner';
import Layout from '../layouts/Layout';
import PageTitle from '../components/PageTitle';
import Seo from '../components/Seo';

const ContactsPage = () => (
  <Layout>
    <ContainerInner>
      <PageTitle pageTitle="Contacts" />
      Contacts page content
    </ContainerInner>
  </Layout>
);

export const Head = () => <Seo />;

export default ContactsPage;
