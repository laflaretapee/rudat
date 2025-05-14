import React from 'react';
import Hero from '../features/Hero/Hero';
import About from '../features/About/About';
import Advantages from '../features/Advantages/Advantages';
import Cases from '../features/Cases/Cases';
import Testimonials from '../features/Testimonials/Testimonials';
import CallToAction from '../features/CallToAction/CallToAction';
import ContactForm from '../features/ContactForm/ContactForm';
import Footer from '../features/Footer/Footer';
import Header from '../features/Header/Header';
import ServiceList from '../features/Service/ServiceList';

const LandingPage = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Advantages />
    <Cases />
    <ServiceList />
    <Testimonials />
    <CallToAction />
    <ContactForm />
    <Footer />
  </>
);

export default LandingPage;
