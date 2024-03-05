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
    return (
        <Card className="mb-4">
            <CardContent className="flex flex-col max-w-screen-sm m-4">
                <p>Initial balance</p>
                <p>{props.data.initialBalance}</p>
                <Separator />
                <p>Additional deposits</p>
                <p>{props.data.additionalDeposits}</p>
                <Separator />
                <p>Total interest earned</p>
                <p>{props.data.totalInterestEarned}</p>
                <Separator />
                <p>Future investment value</p>
                <p>{props.data.futureInvestmentValue}</p>
                <Separator />
            </CardContent>
        </Card>
    )
}

export { CalcSummary };