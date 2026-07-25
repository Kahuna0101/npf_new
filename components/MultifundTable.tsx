import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const fundComparison = [
    {
        feature: "Risk Profile",
        fundI: "High Risk / High Return",
        fundII: "Medium Risk / Medium Return",
        fundIII: "Moderate Risk",
        fundIV: "Low Risk",
    },
    {
        feature: "Target Investors",
        fundI: "Younger contributors with high risk appetite",
        fundII: "General contributors seeking balance",
        fundIII: "Pre-retirement contributors",
        fundIV: "Retirees",
    },
    {
        feature: "Age Eligibility",
        fundI: "49 years and below (optional)",
        fundII: "49 years and below (default)",
        fundIII: "50 years and above",
        fundIV: "Retirees only",
    },
    {
        feature: "Entry Requirement",
        fundI: "Formal request required",
        fundII: "Default fund",
        fundIII: "Mandatory for eligible age group",
        fundIV: "Mandatory for retirees",
    },
    {
        feature: "Equity (Variable Income) Exposure",
        fundI: "20% – 75%",
        fundII: "10% – 55%",
        fundIII: "5% – 20%",
        fundIV: "0% – 10% (at manager's discretion)",
    },
    {
        feature: "Investment Objective",
        fundI: "Maximize long-term growth",
        fundII: "Balanced growth and stability",
        fundIII: "Preserve capital with moderate growth",
        fundIV: "Preserve capital and ensure stable income",
    },
    {
        feature: "Volatility Level",
        fundI: "High",
        fundII: "Moderate",
        fundIII: "Low to Moderate",
        fundIV: "Very Low",
    },
    {
        feature: "Switching Option",
        fundI: "Allowed",
        fundII: "Allowed",
        fundIII: "Can switch to Fund II (with request)",
        fundIV: "Not applicable (retirees)",
    },
];

export function MultifundTable() {
    return (
        <div className="w-full overflow-x-auto">
        <Table className="min-w-[900px]">
            <TableHeader>
                <TableRow className="bg-blue-100 hover:bg-yellow-100 transition-colors">
                    <TableHead className="sm:sticky left-0 w-[180px] min-w-[180px] bg-blue-100 text-base font-bold text-white">
                        Feature
                    </TableHead>
                    <TableHead className="text-base font-bold text-white-100">
                        Fund I
                    </TableHead>
                    <TableHead className="text-base font-bold text-white-100">
                        Fund II
                    </TableHead>
                    <TableHead className="text-base font-bold text-white-100">
                        Fund III
                    </TableHead>
                    <TableHead className="text-base font-bold text-white-100">
                        Fund IV
                    </TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {fundComparison.map((fund) => (
                    <TableRow
                        key={fund.feature}
                        className="hover:bg-yellow-50 transition-colors"
                    >
                        <TableCell className="sm:sticky left-0 z-10 min-w-[180px] bg-white text-base font-bold text-black-100 py-5">
                            {fund.feature}
                        </TableCell>

                        <TableCell className="text-base text-grey-100 py-5 leading-relaxed">
                            {fund.fundI}
                        </TableCell>

                        <TableCell className="text-base text-grey-100 py-5 leading-relaxed">
                            {fund.fundII}
                        </TableCell>

                        <TableCell className="text-base text-grey-100 py-5 leading-relaxed">
                            {fund.fundIII}
                        </TableCell>

                        <TableCell className="text-base text-grey-100 py-5 leading-relaxed">
                            {fund.fundIV}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
    )
}
