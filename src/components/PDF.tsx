import { ArrowDownOnSquareIcon } from '@heroicons/react/24/solid'
 
export const PDF = () => {
    return (
        <div className='min-w-full flex-col items-center'>
            <div className="w-96 flex-col items-center">
                <h1>Holly Chrisp</h1>
                <div className='flex flex-row items-center justify-center my-2'>
                    <p className='text-lg mr-2'>Checkout my portfolio: </p>
                    <a href='/HollyChrisp_GD_Portfolio_Compressed.pdf' download='HollyChrispPortfolio_Compressed.pdf' className='text-indigo-700 hover:text-indigo-950'>
                        <ArrowDownOnSquareIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}
