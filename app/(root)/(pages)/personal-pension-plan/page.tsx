import BenefitsBox from '@/components/BenefitsBox'
import PensionFeaturesBox from '@/components/PensionFeatures'
import { howItWorksData, pensionPageData } from '@/data'
import Image from 'next/image'

const PersonalPensionPlan = () => {
  const { title, description, features, benefits } = pensionPageData[3];

  const howData = ["Open a Retirement Savings Account (RSA)", "Make flexible, voluntary contributions at your convenience", "Contributions can be made through approved banking platforms and digital channels"]
  const participant = ["Individuals seeking additional retirement savings", "Self-employed professionals and business owners", "Freelancers and artisans"]

  return (
    <section className="w-full">
      <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/vc-bg.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
          <p className="text-base md:text-lg font-medium text-white text-center">Build a secure financial future with a flexible and voluntary pension plan designed to help you <br /> save consistently and enjoy financial security in retirement.</p>
        </div>
      </div>

      <div className="bg-white-100 p-12 gap-12.5 sm:p-25">
        <div className='flex flex-col md:flex-row items-start justify-center gap-7.5'>
          <div>
            <PensionFeaturesBox title={title} description={description} features={features} />
            <div className="flex flex-col mt-5">
              <h3 className="text-xl text-black-100 font-medium mb-5">Who Can Participate?</h3>
              <p className="text-base font-normal text-grey-100">The PPP is ideal for:</p>
              <ul className="flex flex-col gap-2.5 list-disc pl-6">
                {participant?.map((item, index) => {
                  if (item.includes(":")) {
                    const [label, detail] = item.split(":");
                    return (
                      <li key={index} className="text-base font-normal text-grey-100">
                        <span className="font-bold">{label}:</span>{detail}
                      </li>
                    );
                  }
                  return (
                    <li key={index} className="text-base font-normal text-grey-100">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-7.5">
            <div className="md:w-80 lg:w-96 xl:w-[590px] flex flex-col gap-7.5 p-7.5 rounded-[10px] border border-gray-100">
              <div className="flex flex-col gap-5">
                <h3 className="text-xl text-black-100 font-medium">How It Works</h3>
                <ul className="flex flex-col gap-2.5 list-disc pl-6">
                  {howData?.map((item, index) => {
                    if (item.includes(":")) {
                      const [label, detail] = item.split(":");
                      return (
                        <li key={index} className="text-base font-normal text-grey-100">
                          <span className="font-bold">{label}:</span>{detail}
                        </li>
                      );
                    }
                    return (
                      <li key={index} className="text-base font-normal text-grey-100">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <BenefitsBox benefits={benefits} />
            <div className="md:w-80  lg:w-96 xl:w-[590px] flex flex-col gap-7.5 p-7.5 rounded-[10px] border border-gray-100">
              <div className="flex gap-2.5">
                <Image src="/icons/guard.svg" width={24} height={24} alt='guard' />
                <h3 className="text-xl text-black-100 font-medium">Security Guarantee</h3>
              </div>
              <p className="text-base font-normal text-grey-100">Your funds are protected by robust security measures and professional investment management. We're fully licensed by PenCom and follow strict regulatory guidelines.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
        <div className="flex flex-col gap-5">
          <h1 className="section-header">How It Works</h1>
          <p className="text-base font-normal text-grey-100 text-center">Getting started is simple and straightforward.</p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-7.5">
          {howItWorksData.map((item, index) => (
            <div key={index} className="w-72 p-5 gap-5 flex flex-col justify-center items-center bg-white-100 rounded-[20px] border border-gray-100">
              <div className="w-12.5 h-12.5 bg-blue-100 rounded-[70px] flex justify-center items-center p-2.5 text-white text-xl">{index + 1}</div>
              <h4 className="text-lg font-medium text-black-100 text-center">{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonalPensionPlan