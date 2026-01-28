import { Review } from '@/types/content';
import { SiUpwork, SiX, SiBluesky, SiLinkedin, SiYoutube, SiGithub } from 'react-icons/si';
interface ExperienceCardProps {
  company: string;
  title: string;
  description: string[];
}

export interface SocialsCardProps {
  name: string;
  url: string;
  hoverColor: string;
}

export interface ServiceCardProps {
  title: string;
  reviews: Review[];
  description: string[];
  tools: string[];
}

export function ServiceCard({ title, reviews, description, tools }: ServiceCardProps) {
    return (
          <div className='shadow-lg rounded-xl flex-1 p-10'>
            <h2 className='text-2xl hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
              {title}
            </h2>

            {description.map((desc, index) => (
                <p className='font-light p-2 text-md' key={`${title}-description-${index}`}>{desc}</p>
            ))}

            <h4 className='text-lg hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
              Top Client Reviews:
            </h4>
            {reviews.map((review, index) => (
                <p className='font-light text-md p-2' key={`${title}-reviews-${index}`}>{review.content} - <span className='italic'>{review.author}</span></p>
            ))}
            <div className='text-l mt-5'>
              <div className='text-xl flex justify-center'>
                <button className='bg-teal-700 hover:bg-orange-500 text-white rounded-xl font-semibold dark:bg-teal-400 dark:hover:bg-yellow-300 px-4'>
                  <a href='https://calendly.com/stanleyarmstrong31/30min'>
                    Let's Chat
                  </a>
                </button>
              </div>
            </div>
          </div>
    )
}

export function ExperienceCard({ company, title, description }: ExperienceCardProps) {
    return (
        <div className='p-5'>
            <h3 className='text-2xl mt-3 hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>{company}</h3>
            <h3 className='text-md text-gray-500 hover:text-orange-500 dark:text-white dark:hover:text-yellow-300'>{title}</h3>
            {description.map((desc, index) => (
                <p className='font-light' key={`${company}-${index}`}>{desc}</p>
            ))}
        </div>
    )
}

export function SocialsCard({ name, url, hoverColor }: SocialsCardProps) {
    const Icons: Record<string, React.ReactNode> = {
        "Upwork": <SiUpwork />,
        "BlueSky": <SiBluesky />,
        "Twitter": <SiX />,
        "GitHub": <SiGithub />,
        "LinkedIn": <SiLinkedin />,
        "YouTube": <SiYoutube />,
    }
    return (
        <a href={url} className={hoverColor}>
            {Icons[name]}
        </a>

    )
}

interface NavItemsProps {
  name: string;
}

export function NavItems({ name }: NavItemsProps) {
    const link = `#${name.toLowerCase()}`;
    return (
        <li className='hover:text-teal-700 dark:text-white dark:hover:text-teal-400 cursor-pointer'><a href={link}>{name}</a></li>
    );
}