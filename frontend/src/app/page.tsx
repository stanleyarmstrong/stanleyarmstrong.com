"use client";
import { useState, useEffect } from 'react';
import { BsFillMoonFill, BsList, BsX } from 'react-icons/bs';
import Image from 'next/image';
import headshot from '../../public/static/images/portfolio.jpg';
import { GitHubCalendar } from 'react-github-calendar';
import { ExperienceCard, NavItems, SocialsCard, ServiceCard } from './components/landing_page';
import { ContentData } from '@/types/content';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <section className='fixed top-0 left-0 z-50 mt-3 w-full px-4 sm:px-10'>
      <nav className='relative flex items-center justify-between'>
          <h1 className='relative z-10 rounded-md bg-white/90 px-3 py-1.5 text-lg backdrop-blur-sm hover:text-teal-700 font-orbitron sm:text-2xl dark:bg-[#28303B]/90 dark:text-white dark:hover:text-teal-400'>
            <a href='#intro'>
              Stanley Armstrong
            </a>
          </h1>
          <ul className='relative z-10 mr-20 hidden items-center gap-x-10 rounded-md bg-white/90 px-3 py-1.5 font-sans backdrop-blur-sm lg:flex dark:bg-[#28303B]/90'>
            <li className='cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
              <button type='button' onClick={toggleDarkMode} aria-label='Toggle dark mode'>
                <BsFillMoonFill />
              </button>
            </li>
            {navItems.map((item) => (
              <NavItems key={item} name={item} />
            ))}
          </ul>
          <button
            type='button'
            className='relative z-10 rounded-md bg-white/90 p-2 text-3xl backdrop-blur-sm hover:text-teal-700 lg:hidden dark:bg-[#28303B]/90 dark:text-white dark:hover:text-teal-400'
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls='mobile-navigation'
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <BsX /> : <BsList />}
          </button>
          {mobileMenuOpen && (
            <ul
              id='mobile-navigation'
              className='absolute right-0 top-full z-10 mt-2 flex min-w-44 flex-col gap-4 rounded-md bg-white/90 p-4 font-sans shadow-lg backdrop-blur-sm lg:hidden dark:bg-[#28303B]/90'
              onClick={() => setMobileMenuOpen(false)}
            >
              {navItems.map((item) => (
                <NavItems key={item} name={item} />
              ))}
              <li>
                <button
                  type='button'
                  className='flex items-center gap-2 hover:text-teal-700 dark:text-white dark:hover:text-teal-400'
                  onClick={toggleDarkMode}
                >
                  <BsFillMoonFill />
                  Toggle theme
                </button>
              </li>
            </ul>
          )}
      </nav>
      </section>
      <section id='intro' className='scroll-mt-32 pt-32 mb-8'>
        <div className='w-full max-w-6xl mx-auto flex flex-col justify-center md:flex-row items-start gap-20 px-6 md:gap-8 lg:gap-20'>
          <div className='shrink-0'>
            <div className='relative z-0 w-70 h-70 overflow-hidden rounded-full md:h-56 md:w-56 lg:h-70 lg:w-70'>
              <Image
                src={headshot}
                alt='Portfolio Headshot'
                fill
                className='object-cover object-center'
              />
            </div>
          </div>
          <div className='w-full min-w-0 max-w-4xl md:flex-1'>
            <div className='w-full overflow-x-auto px-2 pb-2'>
              <GitHubCalendar username="stanleyarmstrong" colorScheme={darkMode ? 'dark' : 'light'} />
            </div>
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
        <div className='md:flex-row flex flex-col justify-evenly '>
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
