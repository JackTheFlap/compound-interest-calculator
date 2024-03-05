import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { CalcSummaryData } from "@/routes/index.lazy";

type CalcSummaryProps = {
    data: CalcSummaryData
}

const CalcSummary = (props: CalcSummaryProps) => {
    // return (
    //     <Card className="mx-2 mb-4">
    //         <CardContent className="flex flex-col max-w-screen-sm m-4">
    //             <p>Initial balance</p>
    //             <p>{props.data.initialBalance}</p>
    //             <Separator />
    //             <p>Additional deposits</p>
    //             <p>{props.data.additionalDeposits}</p>
    //             <Separator />
    //             <p>Total interest earned</p>
    //             <p>{props.data.totalInterestEarned}</p>
    //             <Separator />
    //             <p>Future investment value</p>
    //             <p>{props.data.futureInvestmentValue}</p>
    //             <Separator />
    //         </CardContent>
    //     </Card>
    // )
    return (
        <div className="h-auto mx-2 border rounded-lg shadow-sm bg-card text-card-foreground">
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