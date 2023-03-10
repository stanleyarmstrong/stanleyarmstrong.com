"use client";
import React, { useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { SiUpwork, SiInstagram, SiMedium, SiYoutube } from 'react-icons/si';
import Image from 'next/image';
import headshot from '../../public/portfolio.jpg';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className='bg-white text-black min-h-screen dark:bg-slate-800 dark:text-white px-10'>
    <section className='h-16 fixed top-0 w-full z-50 bg-opacity-100 bg-white dark:bg-slate-800'>
      <nav className='mr-10 py-10 flex justify-between'>
          <h1 className='text-2xl hover:text-teal-700 font-orbitron dark:hover:text-teal-400'>
            <a href='#intro'>
              StanleyCodes
            </a>
          </h1>
          <ul className='flex items-center space-x-3 mr-16 font-sans'>
            <li className='hover:text-teal-700 dark:hover:text-teal-400'> <BsFillMoonFill
            onClick={() => setDarkMode(!darkMode)} /></li>
            <li className='hover:text-teal-700 dark:hover:text-teal-400'><a href='#services'> Services </a></li>
            <li className='hover:text-teal-700 dark:hover:text-teal-400'><a href='#experience'> Experience </a></li>
            <li className='hover:text-teal-700 dark:hover:text-teal-400'><a href='#socials'> Socials </a></li>
          </ul>
      </nav>
      </section>
      <section id='intro' className='scroll-mt-20 pt-20 mb-8'>
          <div className='relative mx-auto w-80 h-80'>
            <Image
              src={headshot}
              alt='Portfolio Headshot'
              fill
              className='rounded-full object-cover'
            />
          </div>
        <div className='text-center'>
          <h2 className='text-3xl hover:text-teal-700 dark:hover:text-teal-400'>
            Stanley Armstrong
          </h2>
          <h3 className='text-md text-gray-500 dark:text-white dark:hover:text-yellow-300 hover:text-orange-500'>
            Software and Data Engineer
          </h3>
          <p className='px-6 font-light'>
            Data and Software Engineering freelancer looking to provide value to clients by providing programming solutions to problems they have.
          </p>
          <p className='px-6 font-light'>
            See the services and my previous work experience below!

          </p>
          <p className='font-light'>
            P.S. Also available for full-time Data and Software Engineering positions as well!
          </p>
        </div>
      </section>

      <section id='services' className='mt-8 scroll-mt-20'>
        <h2 className='text-3xl mb-6 hover:text-teal-700 dark:hover:text-teal-400'>
          Services Offered
        </h2>
        <div className='lg:flex-row flex flex-col justify-evenly '>
          <div className='shadow-lg rounded-xl flex-1 p-10'>
            <h2 className='text-2xl hover:text-teal-700 dark:hover:text-teal-400'>
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
            <h2 className='text-2xl hover:text-teal-700 dark:hover:text-teal-400'>
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
              If interested, feel free to book a <span className='font-normal'> free </span> session with me!
            </p>
        <div className='text-xl flex justify-center'>
          <button className='bg-teal-700 text-white rounded-full px-4 dark:bg-teal-400'>
            <a href='https://calendly.com/stanleyarmstrong31/30min'>
            Book Now
            </a>

          </button>
            </div>
        </div>

      </section>

      <section id='experience' className='mt-8 scroll-mt-20'>
        <h2 className='text-left text-3xl hover:text-teal-700 dark:hover:text-teal-400'>
          Previous Experience
        </h2>
        <div className='p-10'>
        <h3 className='text-2xl mt-3 hover:text-teal-700 dark:hover:text-teal-400'>
          Advana
        </h3>
        <h3 className='text-md text-gray-500 hover:text-orange-500 dark:text-white dark:hover:text-yellow-300'>
          Data Engineer
        </h3>
        <p className='font-light'>
          During my time at Advana, I decided to embark on a different path of Software Engineering and enter the world of Data Engineering. At Advana, I was able to grow my understanding of database modeling and learn ETL and ELT best practices. Advana allowed me a large space to grow as a developer and develop the confidence needed to become a free-lancer data engineer.
        </p>
        </div>
        <div className='p-10'>
        <h3 className='text-2xl hover:text-teal-700 dark:hover:text-teal-400'>
          Promaxo
        </h3>
        <h3 className='text-md text-gray-500 hover:text-orange-500 dark:text-white dark:hover:text-yellow-300'>
          Software Engineer
        </h3>
        <p className='font-light'>
          During my stint at the startup in Oakland, I was able to grow my skills in Python and React and learn more about cloud services and embedded systems. My team and I focused on improving the UI and UX of the MRI, features of an accompanying web app, and improvements to manufacturing processes. This role was a great opportunity to see how successful startups operate.
        </p>
        </div>
      </section>
      <section id='socials' className='mt-6'>
        <div className=''>
        <h2 className='flex justify-center text-xl mb-4 '>
          Find Me On:
        </h2>
        <ul className='flex justify-center space-x-10 text-4xl'>
          <li><a className='hover:text-green-500' href="https://www.upwork.com/freelancers/~0182030bc23ec9dbf8" ><SiUpwork /></a></li>
          <li><a className='' href="https://medium.com/@stanleyarmstrong31"><SiMedium /></a></li>
          <li><a className='hover:text-orange-500' href="https://www.instagram.com/stanleycodes"><SiInstagram /></a></li>
          <li><a className='hover:text-red-600' href='https://www.youtube.com/@stanleycodes4340'><SiYoutube /></a></li>
        </ul>
        </div>
      </section>
      <footer className='text-center mt-4'>
        <p> Designed and Created By <span className='font-orbitron'> StanleyCodes</span></p>
      </footer>
    </main>
    </div>
  )
};
