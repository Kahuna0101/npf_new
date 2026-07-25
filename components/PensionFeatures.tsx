export type PensionPageProps = {
    title?: string,
    description?: string,
    features?: string[],
    benefits?: string[],
}

const PensionFeatures = ({ title, description, features }: PensionPageProps) => {
    return (
        <div className="md:w-[620px] flex flex-col gap-7.5 justify-start">
            <h1 className="text-[40px] leading-13 font-bold text-black-100">Why Choose Our {title}?</h1>
            <p className="text-base font-normal text-grey-100 whitespace-pre-line">{description}</p>
            <div className="flex flex-col gap-5">
                <h3 className="text-xl text-black-100 font-medium">Key Features</h3>
                <ul className="flex flex-col gap-2.5 list-disc pl-6">
                    {features?.map((item, index) => {
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
    )
}

export default PensionFeatures