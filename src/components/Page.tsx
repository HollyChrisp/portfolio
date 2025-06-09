import { WorkExperience } from './WorkExperience/WorkExperience'
import { Contact } from './Contact'
import { Header } from './Header'
import { Section } from './Section'
import { About } from './About'

export const Page = () => {
    return (
        <div className='h-screen w-full overflow-y-scroll snap-mandatory snap-y' id='page'>
            {/* <Section color='bg-default' id='header'>
                <Header />
            </Section>
            <Section color='bg-secondary' id='about' textColor='text-white'>
                <About />
            </Section>
            <Section color='bg-default' id='work experience'>
                <WorkExperience />
            </Section> */}
            <Section color='bg-slate-200' id='contact'>
                <Contact />
            </Section>
        </div>
    )
}