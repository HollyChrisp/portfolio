import { Link } from './Link';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/solid'

export const Contact = () => (
    <div className='flex flex-row justify-center min-w-full min-h-full p-8 text-center'>
        <div className="min-w-96 p-4 flex flex-col justify-center bg-white rounded-sm">
            <div className='mb-12'>
                <h3 className='text-4xl'>HOLLY CHRISP</h3>
            </div>
            <div className='flex flex-col justify-center text-center'>
                <p className='text-lg my-2'>Email: <Link href='mailto:hchrisp6@gmail.com'>hchrisp6@gmail.com</Link></p>
                <p className='text-lg my-2'>Phone: <Link href='tel:00447398 040560'>+44 7398 040560</Link></p>
                <div className='flex flex-row items-center justify-center my-2'>
                    <p className='text-lg mr-2'>Checkout my portfolio: </p>
                    <a href='/HollyChrisp_GD_Portfolio.pdf' download='HollyChrispPortfolio_Compressed.pdf' className='text-indigo-700 hover:text-indigo-950'>
                        <ArrowDownOnSquareIcon />
                    </a>
                </div>
            </div>
        </div>
    </div>
)
