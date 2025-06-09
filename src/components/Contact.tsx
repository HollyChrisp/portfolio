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
                <p>Graphic Designer at Hearst, working on ELLE and Harper's Bazaar magazines. Experienced in both print and digital design, currently working towards a UI/UX certification to further my design skill set. I am looking for a position with more digital and UX/UI design involvment, to combine my passion for creativity with problem-solving. I’m drawn to crafting intuitive, user-centered experiences and hope to apply my strong visual design skills to digital products. Beyond design, I enjoy other creative hobbies like collage, illustration, and occasional video editing — all of which sharpen my eye for storytelling and composition.</p>
            </div>
            <div className='flex flex-col items-start'>
                <p className='text-lg my-2'>Email: <Link href='mailto:hchrisp6@gmail.com'>hchrisp6@gmail.com</Link></p>
                <p className='text-lg my-2'>Phone: <Link href='tel:00447398 040560'>+44 7398 040560</Link></p>
                <div className='flex flex-row items-baseline justify-center my-2'>
                    <p className='text-lg mr-2 self-center'>Checkout my portfolio: </p>
                    <a href='/portfolio/HollyChrisp_GD_Portfolio.pdf' download className='text-indigo-700 hover:text-indigo-950 p-0'>
                        <ArrowDownOnSquareIcon width={24} />
                    </a>
                </div>
            </div>
        </div>
    </div>
)
