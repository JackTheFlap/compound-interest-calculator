import { CalcYearlyTableData } from "@/routes/index.lazy";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


type CalcYearlyTableProps = {
    data: CalcYearlyTableData[]
}

const CalcYearlyTable = (props: CalcYearlyTableProps) => {
    return (
        <Table className="mb-8 animate-fade-in">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Year</TableHead>
                    <TableHead>Interest</TableHead>
                    <TableHead>Accrued Interest</TableHead>
                    <TableHead className="text-right text-white bg-green-600">Balance</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.data.map((curYear) => {
                    return (
                        <TableRow>
                            <TableCell>{curYear.year}</TableCell>
                            <TableCell>{curYear.interest}</TableCell>
                            <TableCell>{curYear.accruedInterest}</TableCell>
                            <TableCell className="text-right">{curYear.balance}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>

    )
}

export { CalcYearlyTable };