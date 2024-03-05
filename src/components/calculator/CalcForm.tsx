import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from 'react-hook-form';

export type CompoundInterestForm = {
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
        <Card className="max-w-screen-md m-4">
            <CardContent className="mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
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