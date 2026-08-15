import UncreditedfundsSearch from "@/components/UncreditedfundsSearch"
import Link from "next/link"

const UncreditedFunds = () => {
  return (
    <section className="w-full">
      <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/mortgage-bg.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        <div aria-hidden="true" className="ellipse-top" />
        <div aria-hidden="true" className="ellipse-bottom" />

        <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Uncredited Funds</h1>
          <p className="text-base md:text-lg font-medium text-white text-center">Build your retirement savings with our comprehensive RSA plan designed for <br /> long-term financial security.</p>
        </div>
      </div>

      <div className="bg-white-100 flex flex-col items-center p-12 gap-8 sm:p-25">
        <h1 className="section-header">Transitional Contributions</h1>
        <p className="text-base font-normal text-grey-100 text-center">Transitional Contributions are contributions received for employees who did not register with any PFA while in employment with the paying employer.
          <br />These contributors have been assigned a TCF PIN which is unique to the individual with his/her contributions processed into those accounts.
          <br />If you have ever worked with any employer and pension deductions were made on your behalf, but you cannot trace the fund, click here to search for your name.
        </p>

        <div className="flex flex-col items-center md:w-[70%]">
          <h5 className="font-bold text-blue-100">Steps:</h5>
          <p className="text-base font-normal text-grey-100 text-center mb-7">Search with any of your names. A list containing the employer's name and other fields will be populated as you type. If you identify your name in the generated list below, kindly complete the remaining fields associated with it and submit the form. We will reach out to you as soon as possible.</p>
        
          <UncreditedfundsSearch />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
        <div className="flex flex-col items-center justify-center gap-7.5 md:w-[500px]">
          <h1 className="section-header">Need Assistance?</h1>
          <p className="text-base font-normal text-grey-100 text-center">Our dedicated customer service team is here to help you navigate your benefit options and ensure you get the support you need.</p>

          <div className="flex flex-col md:flex-row gap-5">
            <Link href="/faqs" className="w-29 h-15 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-md flex items-center justify-center">
              View FAQs
            </Link>

            <Link href="/contact" className="w-50 h-15 bg-white-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-gray-100 text-blue-100 hover:text-white mx-auto rounded-md flex items-center justify-center">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UncreditedFunds