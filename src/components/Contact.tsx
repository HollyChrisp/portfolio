import Image from 'next/image';
import { Link } from './Link';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/solid'
import HolPic from "../images/HollyChrisp.jpg";

export const Contact = () => (
    <div className='flex flex-row justify-center min-w-full min-h-full p-8 text-center font-extralight'>
        <div className="min-w-96 lg:min-w-[600px] p-4 flex flex-col justify-center bg-white rounded-sm px-12">
            <div className='flex flex-row justify-center mb-8'>
            <Image
                src={HolPic}
                alt="A picture of Holly Chrisp"
                width={100}
                height={50}
                aria-hidden
                className='rounded-full'
                />
                </div>
            <div className='mb-12'>
                <h3 className='text-4xl'>Holly Chrisp</h3>
            </div>
            <div className='text-sm text-left md:text-justify  mb-12 max-w-[600px]'>
                <p className='flex flex-col gap-2'>
                    <span>
                        Graphic Designer at Hearst, working on ELLE and Harper's Bazaar magazines. 
                        I have professional experience in both print and digital design.
                        My work often incorporates illustration, collage, and video editing. 
                        I'm passionate about creating visually striking designs that remain clear, functional, and user-friendly.
                    </span>
                    <span>
                        I'm currently looking for new and exciting opportunities to grow my skillset and further my career, where I can bring my creative approach to new challenges and formats.
                    </span>
                </p>
            </div>
            <div className='flex flex-col items-start'>
                <p className='text-lg my-2'>Email: <Link href='mailto:hchrisp6@gmail.com'>hchrisp6@gmail.com</Link></p>
                <p className='text-lg my-2'>Phone: <Link href='tel:00447398 040560'>+44 7398 040560</Link></p>
                <div className='flex flex-row items-baseline justify-center my-2'>
                    <p className='text-lg mr-2 self-center'>Download my portfolio: </p>
                    <a href='/portfolio/HollyChrisp_GD_Portfolio.pdf' download className='text-indigo-700 hover:text-indigo-950 p-0'>
                        <ArrowDownOnSquareIcon width={24} />
                    </a>
                </div>
            </div>
        </div>
    </div>
)
