"use client";
import { useState, useEffect } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import Image from 'next/image';
import headshot from '../../public/static/images/portfolio.jpg';
import { GitHubCalendar } from 'react-github-calendar';
import { ExperienceCard, NavItems, SocialsCard, ServiceCard } from './components/landing_page';
import { ContentData } from '@/types/content';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [content, setContent] = useState<ContentData | null>(null);

  const navItems = ['Services', 'Experience'];

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    fetch('/api/content').then(res => res.json()).then(data => setContent(data));
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
    <main className='bg-white text-black min-h-screen dark:bg-[#28303B] dark:text-white px-10 pb-5'>
    <section className='fixed top-0 w-full mt-3'>
      <nav className='flex justify-between items-center'>
          <h1 className='text-2xl bg-white dark:bg-[#28303B] hover:text-teal-700 font-orbitron dark:text-white dark:hover:text-teal-400'>
            <a href='#intro'>
              Stanley Armstrong
            </a>
          </h1>
          <ul className='flex items-center gap-x-10 font-sans mr-20 bg-white dark:bg-[#28303B]'>
            <li className='hover:text-teal-700 dark:text-white dark:hover:text-teal-400 cursor-pointer'> <BsFillMoonFill
            onClick={toggleDarkMode} /></li>
            {navItems.map((item) => (
              <NavItems key={item} name={item} />
            ))}
          </ul>
      </nav>
      </section>
      <section id='intro' className='scroll-mt-32 pt-32 mb-8'>
        <div className='w-full max-w-6xl mx-auto flex flex-col justify-center lg:flex-row items-start lg:items-start gap-20 px-6'>
          <div>
            <div className='relative w-70 h-70 overflow-hidden rounded-full '>
              <Image
                src={headshot}
                alt='Portfolio Headshot'
                fill
                className='object-cover object-center'
              />
            </div>
          </div>
          <div className='w-full lg:flex-1 max-w-4xl'>
            <GitHubCalendar username="stanleyarmstrong" theme={darkMode ? 'dark' : 'light'} />
              {content?.intro?.map((paragraph, index) => (
                <p className='text-md mt-5' key={`intro-${index}`}>{paragraph}</p>
              ))}
          </div>
        </div>
      </section>

      <section id='services' className='mt-8 scroll-mt-20'>
        <h2 className='text-3xl mb-6 hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
          Services Offered
        </h2>
        <div className='lg:flex-row flex flex-col justify-evenly '>
          {content?.services?.map((service, index) => (
            <ServiceCard key={`services-${index}`} title={service.title} reviews={service.reviews} description={service.description} tools={service.tools} />
          ))}
        </div>

      </section>

      <section id='experience' className='mt-8 scroll-mt-20'>
        <h2 className='text-left text-3xl hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
          Previous Professional Experience
        </h2>
        {content?.experience?.map((experience) => (
          <ExperienceCard key={experience.company} company={experience.company} title={experience.role} description={experience.description} />
        ))}
      </section>
      <section id='socials' className='mt-6'>
      </section>
      <footer className=' dark:text-white'>
        <div className='flex flex-col items-center gap-10'>
        <h2 className='text-xl dark:text-white justify-self-start'>
          Connect With Me!
        </h2>
        <ul className='flex gap-5 text-xl'>
          {content?.socials?.map((social) => (
            <SocialsCard key={social.name} name={social.name} url={social.url} hoverColor={social.hoverColor} />
          ))}
        </ul>
        </div>
      </footer>
    </main>
    </>
  )
};
