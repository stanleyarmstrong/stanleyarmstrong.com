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