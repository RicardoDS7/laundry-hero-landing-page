import Image from "next/image";
import ConvenienceImage from "../images/lying-on-couch.png"
import SavingsImage from "../images/happy-face.png"
import ReliabilityImage from "../images/receiving-laundry.png"

const ValueProposition = () => {
    

    return (
        <div className='relative pb-14 max-w-[1400px] mx-auto px-6'>
            <div className="flex flex-col items-center justify-center gap-6">

            <h2 className="h2-display">Why you will love LaundryHero</h2>

            <div className="flex flex-col lg:flex-row w-full gap-6 text-charcoal">
                <div className="flex flex-col gap-4 w-full lg:w-1/3 bg-white-smoke rounded-3xl">
                    <div className="bg-sunset-yellow rounded-3xl">
                        <Image className="w-full h-full object-cover rounded-3xl" src={ConvenienceImage} alt="image" width={300} height={300} />
                    </div>
                    <div className="flex flex-col px-6 pb-6 pt-3 gap-3">
                        <h2 className="">Convenience</h2>
                        <p>LaundryHero makes your life easier by letting you order and reschedule laundry services with just a few clicks. Whether you&apos;re at home or on the go, we fit into your schedule, not the other way around.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full lg:w-1/3 bg-white-smoke rounded-3xl">
                    <div className="bg-teal rounded-3xl">
                        <Image className="w-full h-full object-cover rounded-3xl" src={SavingsImage} alt="image" width={300} height={300} />
                    </div>
                    <div className="flex flex-col px-6 pb-6 pt-3 gap-3">
                        <h2 className="">Savings</h2>
                        <p>Save precious time and money by letting LaundryHero handle your laundry needs. With competitive pricing, subscription plans, and efficient delivery, we free you from the hassle of washing, drying, and ironing, so you can focus on what matters most.</p>
                    </div>
                </div>


                <div className="flex flex-col gap-4 w-full lg:w-1/3 bg-white-smoke rounded-3xl">
                    <div className="bg-nice-blue rounded-3xl">
                        <Image className="w-full h-full object-cover rounded-3xl" src={ReliabilityImage} alt="image" width={300} height={300} />
                    </div>
                    <div className="flex flex-col px-6 pb-6 pt-3 gap-3">
                        <h2 className="">Reliability</h2>
                        <p>Enjoy peace of mind with our trusted service. LaundryHero works with vetted partners to ensure your clothes are treated with care and returned clean, fresh, and ready to wear. Consistency and reliability are our promises to you.</p>
                    </div>
                </div>


            </div>

            </div>

        </div>
    )
}

export default ValueProposition;