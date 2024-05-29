'use client'
import InfinityCarousel from './InfinityCarousel'

const Carousel = ({elementType, data }) => {

    return (
        <div
            className='flex w-full overflow-hidden relative'>
            {
                elementType === 'infinite' && (
                    <InfinityCarousel data={data} />
                    
                )
            }
        </div>
    )
}

export default Carousel