import React from 'react'
import BackgroundRippleEffectDemo from "@/components/ui/BackgroundRippleEffectDemo";
import { CardHoverEffectDemo } from "@/components/Home/Skills/Skillsdata"
import Services from '@/components/Home/services/services';
import Project from '@/components/Home/Project/Project';
import Experience from '@/components/Home/Experience/Experience';
import Contact from '@/components/Home/contact/contact';

const page = () => {
  return (
    <>
      <BackgroundRippleEffectDemo />
      <CardHoverEffectDemo />
      <Services />
      <Project />
      <Experience />
      <Contact />
    </>
  );
};

export default page;

