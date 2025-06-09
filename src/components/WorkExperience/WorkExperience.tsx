import { O } from '../O'
import { Job, JobProps } from './Job'

const jobs: JobProps[] = [
    {title: 'Hearst', position: 'Graphic Designer', location: 'London, England', timeline: 'June 2024 - Present'},
    {title: 'Frövi', position: 'Creative Designer', location: 'Oxfordshire, England', timeline: 'Apr - Oct 2023'},
    {title: 'Bonhams', position: 'Graphic Designer', location: 'London, England', timeline: 'Dec 2021 - Apr 2023'},
    {title: 'Eye Magazines', position: 'Graphic Designer', location: 'Reading, England', timeline: 'Sept 2019 - Dec 2021'},
]

export const WorkExperience = () => (
    <div className='flex flex-col justify-evenly min-w-full min-h-full p-8'>
        <h2 className='text-4xl'>W<O/>RK EXPERIENCE</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {jobs.map((job) => (
                <Job
                    key={job.title}
                    {...job}
                />
            ))}
        </div>
    </div>
)