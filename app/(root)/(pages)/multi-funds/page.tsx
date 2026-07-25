import MultifundForm from '@/components/MultifundForm';
import { MultifundTable } from '@/components/MultifundTable';
import { howItWorksData, multifundData } from '@/data';

export type MultiFundsProps = {
    title?: string,
    criteria?: string[],
    eligibility?: string[],
}

const MultiFunds = () => {

    return (
        <section className="w-full">
            <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/vc-bg.jpg')] bg-cover bg-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
                <div aria-hidden="true" className="ellipse-top" />
                <div aria-hidden="true" className="ellipse-bottom" />

                <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">Multi Funds</h1>
                    <p className="text-base md:text-lg font-medium text-white text-center">Explore flexible investment options designed to match your risk profile, age, and retirement goals. <br/> Choose the Multi-Fund structure that best suits your financial needs and secure your future with confidence.</p>
                </div>
            </div>

            <div className="flex flex-col justify-center bg-white-100 p-12 gap-12.5 sm:p-25">
                <h1 className="section-header italic">Select your preferred Fund type</h1>
                <p className="text-base font-normal text-grey-100 text-center">The Multi-Fund Structure allows contributors to choose a fund that aligns with their risk appetite, age, and retirement goals. <br/>Each fund has a defined investment strategy and eligibility criteria.</p>
                <div className="flex flex-wrap gap-8 justify-center">
                {multifundData?.map((item, index) => {
                    return (
                        <div key={index} className="md:w-80 lg:w-96 xl:w-[590px] flex flex-col gap-7.5 p-7.5 rounded-[10px] border border-gray-100">
                            <div className="flex flex-col gap-5">
                                <h3 className="text-xl text-black-100 font-medium"> {item.title}</h3>

                                <ul className="flex flex-col gap-2.5 list-disc pl-6">
                                    {item.criteria?.map((criterion, index) => {
                                        if (criterion.includes(":")) {
                                            const [label, ...details] = criterion.split(":");

                                            return (
                                                <li
                                                    key={index}
                                                    className="text-base font-normal text-grey-100"
                                                >
                                                    <span className="font-bold">{label}:</span>
                                                    {details.join(":")}
                                                </li>
                                            );
                                        }

                                        return (
                                            <li
                                                key={index}
                                                className="text-base font-normal text-grey-100"
                                            >
                                                {criterion}
                                            </li>
                                        );
                                    })}

                                    {item.eligibility && (
                                        <li className="text-base font-normal text-grey-100">
                                            <span className="font-bold">Eligibility:</span>

                                            <ul className="mt-2 flex flex-col gap-2 list-disc pl-6">
                                                {item.eligibility.map((eligibilityItem, index) => (
                                                    <li key={index}>
                                                        {eligibilityItem}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
                <MultifundTable />
            </div>

            <div className="flex flex-col justify-center items-center bg-white-100 p-2 gap-12.5 sm:p-25">
                <MultifundForm />
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

export default MultiFunds