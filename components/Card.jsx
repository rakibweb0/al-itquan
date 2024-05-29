import Image from "next/image"

const Card = ({data}) => {
    return (
        <div className="bg-white rounded-2xl py-4 px-6 text-center">
            <Image className="rounded-2xl" src={data.image} alt="package" width={500} height={500} />
            <h2 className="text-black text-xl lg:text-2xl font-bold my-2">{data.name}</h2>
            <p>{data.details}</p>
        </div>
    )
}

export default Card