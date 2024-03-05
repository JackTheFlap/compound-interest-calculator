import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const CompoundInterestForm = z.object({
    currency: z.string({ required_error: "Currency is required", invalid_type_error: "Enter a valid option from the dropdown" }).length(1).refine((val) => val === "£" || val === "$" || val === "€" || val === " ", { message: "Only valid currencies allowed" }),
    initialInvestment: z.number({ required_error: "Initial investment required", invalid_type_error: "Enter a valid number. Please do not include commas." }).positive({ message: "Initial investment must be positive" }).finite({ message: "Initial investment must be finite" }),
    interestRate: z.number({ required_error: "Interest rate required", invalid_type_error: "Enter a valid number. Please do not include symbols or commas." }).positive({ message: "Interest rate must be positive" }).lte(100).gte(0),
    numOfYears: z.number({ required_error: "Number of years is required", invalid_type_error: "Enter a valid number" }).positive({ message: "Number of years must be positive" }).int().finite({ message: "Number of years must be finite" }).lte(200, { message: "Maximum 199 years" }),
    monthlyDeposits: z.number({ invalid_type_error: "Enter a valid monthly deposit" }).gte(0, { message: "Monthly deposits must be positive" }).int().finite({ message: "Monthly deposits must be finite" }),
})

// export type CompoundInterestForm = {
//     currency: string,
//     initialInvestment: number,
//     interestRate: number,
//     numOfYears: number,
//     monthlyDeposits: number
// }

type CalcFormProps = {
    onFormSubmit: (a: z.infer<typeof CompoundInterestForm>) => void,
}

const CalcForm = (props: CalcFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof CompoundInterestForm>>({
        resolver: zodResolver(CompoundInterestForm),
        defaultValues: {
            currency: "£",
            monthlyDeposits: 0
        }
    });
    const onSubmit: SubmitHandler<z.infer<typeof CompoundInterestForm>> = data => {
        if (Number.isNaN(data.monthlyDeposits)) {
            data.monthlyDeposits = 0;
        }
        props.onFormSubmit(data);
    }
    if (Object.keys(errors).length != 0) {
        console.error(errors);
    }
    return (
        <Card className="mx-2">
            <CardContent className="mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Currency</Label>
                    <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1" {...register("currency")}>
                        <option value="£">£</option>
                        <option value="$">$</option>
                        <option value="€">€</option>
                        <option value={" "}>No Currency</option>
                    </select>
                    <p className="text-red-600 text-wrap">{errors.currency?.message}</p>
                    <Label htmlFor="initial">Initial Investment</Label>
                    <Input id="initial" step="0.01" aria-invalid={errors.initialInvestment ? "true" : "false"} placeholder="" type="number" {...register("initialInvestment", { required: true, valueAsNumber: true })} />
                    <p className="text-red-600 text-wrap">{errors.initialInvestment?.message}</p>
                    <Label htmlFor="interestRate">Interest Rate (%)</Label>
                    <Input id="interestRate" step="0.01" aria-invalid={errors.interestRate ? "true" : "false"} placeholder="" type="number" inputMode="decimal" {...register("interestRate", { required: true, valueAsNumber: true })} />
                    <p className="text-red-600 text-wrap">{errors.interestRate?.message}</p>
                    <Label htmlFor="years">Years</Label>
                    <Input id="years" step="1" aria-invalid={errors.numOfYears ? "true" : "false"} placeholder="" type="number" {...register("numOfYears", { required: true, valueAsNumber: true })} />
                    <p className="text-red-600 text-wrap">{errors.numOfYears?.message}</p>
                    <Label htmlFor="months">Monthly Deposits</Label>
                    <Input id="months" step="1" aria-invalid={errors.monthlyDeposits ? "true" : "false"} placeholder="" type="number" {...register("monthlyDeposits", { valueAsNumber: true, setValueAs: (val) => Number.isNaN(val) ? 0 : parseFloat(val) })} />
                    <p className="text-red-600 text-wrap">{errors.monthlyDeposits?.message}</p>
                    <br />
                    <Button className="mt-4" variant={"outline"} type="submit">Calculate</Button>
                </form>
            </CardContent>
        </Card>
    );
}

export { CalcForm, CompoundInterestForm }