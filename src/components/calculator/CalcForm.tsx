import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from 'react-hook-form';

export type CompoundInterestForm = {
    currency: string,
    initialInvestment: number,
    interestRate: number,
    numOfYears: number,
    monthlyDeposits: number
}

type CalcFormProps = {
    onFormSubmit: (a: CompoundInterestForm) => void,
}

const CalcForm = (props: CalcFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<CompoundInterestForm>();
    const onSubmit: SubmitHandler<CompoundInterestForm> = data => props.onFormSubmit(data);
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
                    <Label htmlFor="initial">Initial Investment</Label>
                    <Input id="initial" placeholder="" type="number" {...register("initialInvestment", { required: true })} />
                    <Label htmlFor="interestRate">Interest Rate (%)</Label>
                    <Input id="interestRate" placeholder="" type="number" inputMode="decimal" {...register("interestRate", { required: true })} />
                    <Label htmlFor="years">Years</Label>
                    <Input id="years" placeholder="" type="number" {...register("numOfYears", { required: true })} />
                    <Label htmlFor="months">Monthly Deposits</Label>
                    <Input id="months" placeholder="" type="number" {...register("monthlyDeposits")} />
                    <Button className="mt-4" variant={"outline"} type="submit">Calculate</Button>
                </form>
            </CardContent>
        </Card>
    );
}

export { CalcForm }