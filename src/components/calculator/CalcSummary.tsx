import { Separator } from "@/components/ui/separator";
import { CalcSummaryData } from "@/routes/index.lazy";

type CalcSummaryProps = {
    data: CalcSummaryData | undefined
}

const CalcSummary = (props: CalcSummaryProps) => {
    if (props.data === undefined) {
        return (<></>);
    }
    return (
        <div className="h-auto mx-2 border rounded-lg shadow-sm bg-card text-card-foreground animate-smooth-fade-in">
            <div className="flex flex-col justify-between py-8 pt-0 pb-6 m-4 h-[96%]">
                <p className="text-xl font-black">Initial balance</p>
                <p className="">{props.data.initialBalance}</p>
                <Separator />
                <p className="text-xl font-black">Additional deposits</p>
                <p className="">{props.data.additionalDeposits}</p>
                <Separator />
                <p className="text-xl font-black text-amber-600">Total interest earned</p>
                <p className="">{props.data.totalInterestEarned}</p>
                <Separator />
                <p className="text-xl font-black text-green-600">Future investment value</p>
                <p className="">{props.data.futureInvestmentValue}</p>
            </div>
        </div>
    )
}

export { CalcSummary };