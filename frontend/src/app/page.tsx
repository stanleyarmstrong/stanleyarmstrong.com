"use client";
import { useState, useEffect } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import Image from 'next/image';
import headshot from '../../public/static/images/portfolio.jpg';
import { GitHubCalendar } from 'react-github-calendar';
import { ExperienceCard, NavItems, SocialsCard } from './components/landing_page';
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
    <main className='bg-white text-black min-h-screen dark:bg-[#28303B] dark:text-white px-10'>
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
        <div className='w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 px-6'>
          <div className='flex flex-col flex-1'>
            <div className='relative w-70 h-70 overflow-hidden rounded-full '>
              <Image
                src={headshot}
                alt='Portfolio Headshot'
                fill
                className='object-cover object-center'
              />
            </div>
          </div>
          <div className='w-full lg:flex-1 max-w-4xl mt-10'>
            <GitHubCalendar username="stanleyarmstrong" colorScheme={darkMode ? 'dark' : 'light'} />
          </div>
        </div>
      </section>

      <section id='services' className='mt-8 scroll-mt-20'>
        <h2 className='text-3xl mb-6 hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
          Services Offered
        </h2>
        <div className='lg:flex-row flex flex-col justify-evenly '>
          <div className='shadow-lg rounded-xl flex-1 p-10'>
            <h2 className='text-2xl hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
              Database Development
            </h2>
            <p className='font-light'>
              Does your current data solution need a redesign? Maybe your data architecture is fine, but you need automated pipelines to run? Or just need quick SQL reports built out and put on a dashboard?
            </p>
            <p className='font-light'>
              Good news! You have found the correct person to help you with any of those problems. With experience as a Data Engineer, I have designed and improved data architecture, implemented ETL data pipelines with Apache Airflow and Spark, and have built out custom dashboards modeled from SQL queries and have built out dashboards in Power BI. Data and database engineering is something I am very passionate and I can help take your data project to the next step!
            </p>
            <p>
              Tools I Use:
            </p>
            <p className='font-light'>
              Apache Airflow, PySpark, Pandas, MySQL, PostgreSQL, AWS S3, Google Cloud Storage, BigQuery, Google CloudSQL, and PowerBI
            </p>
          </div>
          <div className='shadow-lg rounded-xl flex-1 p-10'>
            <h2 className='text-2xl hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
              Web and App Development
            </h2>
            <p className='font-light'>
              Do you have a new idea for an app or website? Maybe your existing app has a bug that needs fixing? Or maybe you want to add new features to your app?
            </p>
            <p className='font-light'>
              You are in luck my friend! I can provide you with a quality website or app from the design phase all the way to production. My experience as a Software Engineer has taught me how to utilize modern web frameworks such as React and Django to build applications that will scale for your use case. Backend not in Python? I have experience with Java&apos;s Spring Boot as well and be resource on the backend. Let me help you get your web app to the next level! 
            </p>
            <p>
              Tools I Use:
            </p>
            <p className='font-light'>
              React, React Native, Django, Flask, Spring Boot, and Figma
            </p>
          </div>
        </div>
        <div className='text-l mt-5'>
            <p className='font-light text-center mb-2'>
              I'd love to connect more with you! Feel free to book a time to chat with me!
            </p>
        <div className='text-xl flex justify-center'>
          <button className='bg-teal-700 hover:bg-orange-500 text-white rounded-xl font-semibold dark:bg-teal-400 dark:hover:bg-yellow-300 px-4'>
            <a href='https://calendly.com/stanleyarmstrong31/30min'>
            Book Now
            </a>
          </button>
            </div>
        </div>

      </section>

      <section id='experience' className='mt-8 scroll-mt-20'>
        <h2 className='text-left text-3xl hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
          Previous Experience
        </h2>
        {content?.experience?.map((experience) => (
          <ExperienceCard key={experience.company} company={experience.company} title={experience.role} description={experience.description} />
        ))}
      </section>
      <section id='socials' className='mt-6'>
      </section>
      <footer className=' mt-4 mb-5 dark:text-white'>
        <div className='flex flex-col items-center gap-10'>
        <h2 className='text-xl dark:text-white justify-self-start'>
          Connect With Me!
        </h2>
        <ul className='flex gap-10 text-3xl'>
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
