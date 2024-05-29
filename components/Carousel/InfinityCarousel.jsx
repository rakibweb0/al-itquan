import { motion } from 'framer-motion'
import './style.css'
import Image from 'next/image'

const InfinityCarousel = ({data}) => {
    const carouselVariants = {
        hidden: {
          x: '5%',
        },
        visible: {
          x: '-98%',
          transition: {
            duration: 100,
            delay: 0.8,
            ease: 'linear',
            repeat: Infinity
          }
        }
      }

    return (
        <div id='carouselInfinity' className='flex cursor-grab overflow-hidden'>
            <motion.div
                variants={carouselVariants}
                initial='hidden'
                animate='visible'
                className='flex lg:min-w-full justify-between'
            >
                {
                    data?.map((item, indx) => (
                        <div key={indx} className='min-w-[150px] min-h-[40px] px-4'>
                            <Image className='h-full w-full' src={item.img} alt='img1' width={500} height={500} />
                        </div>
                    ))
                }
            </motion.div>
            <motion.div
                variants={carouselVariants}
                initial='hidden'
                animate='visible'
                className='flex lg:min-w-full justify-between'
            >
                {
                    data?.map((item, indx) => (
                        <div key={indx} className='min-w-[150px] min-h-[40px] px-4'>
                            <Image className='h-full w-full' src={item.img} alt='img1' width={500} height={500} />
                        </div>
                    ))
                }
            </motion.div>

        </div>
    )
}

export default InfinityCarousel