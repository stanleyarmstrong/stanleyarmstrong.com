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
  hoverColor?: string;
}

export interface ServiceCardProps {
  title: string;
  idealFor?: string;
  cadence?: string;
  reviews: Review[];
  description: string[];
  tools?: string[];
  focusAreas?: string[];
}

export function ServiceCard({ title, idealFor, cadence, reviews, description, tools, focusAreas }: ServiceCardProps) {
    return (
          <div className='shadow-lg rounded-xl flex-1 p-10'>
            <h2 className='text-2xl hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
              {title}
            </h2>
            {cadence && (
                <p className='font-semibold text-xs uppercase tracking-wide text-teal-700 dark:text-teal-400 mt-1'>Project Type: {cadence}</p>
            )}
            {idealFor && (
                <p className='font-light italic text-sm p-2 text-gray-600 dark:text-gray-300'>Ideal for: {idealFor}</p>
            )}

            {description.map((desc, index) => (
                <p className='font-light p-2 text-md' key={`${title}-description-${index}`}>{desc}</p>
            ))}

            {focusAreas && focusAreas.length > 0 && (
                <div className='p-2'>
                    <p className='text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1'>Focus Areas</p>
                    <div className='flex flex-wrap gap-2'>
                        {focusAreas.map((area, index) => (
                            <span className='text-xs font-light px-2 py-1 rounded-full border border-teal-700 text-teal-700 dark:border-teal-400 dark:text-teal-400' key={`${title}-focus-${index}`}>{area}</span>
                        ))}
                    </div>
                </div>
            )}

            {tools && tools.length > 0 && (
                <div className='p-2'>
                    <p className='text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1'>Tools</p>
                    <div className='flex flex-wrap gap-2'>
                        {tools.map((tool, index) => (
                            <span className='text-xs font-light px-2 py-1 rounded-full border border-teal-700 text-teal-700 dark:border-teal-400 dark:text-teal-400' key={`${title}-tool-${index}`}>{tool}</span>
                        ))}
                    </div>
                </div>
            )}

            {reviews.length > 0 && (
                <>
                    <h4 className='text-lg hover:text-teal-700 dark:text-white dark:hover:text-teal-400'>
                        Top Client Reviews:
                    </h4>
                    {reviews.map((review, index) => (
                        <p className='font-light text-md p-2' key={`${title}-reviews-${index}`}>{review.content} - <span className='italic'>{review.author}</span></p>
                    ))}
                </>
            )}
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