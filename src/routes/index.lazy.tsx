import { CalcForm, CompoundInterestForm } from "@/components/calculator/CalcForm";
import { CalcSummary } from "@/components/calculator/CalcSummary";
import { CalcYearlyTable } from "@/components/calculator/CalcYearlyTable";
import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from "react";

export type CalcSummaryData = {
    initialBalance: string,
    additionalDeposits: string,
    totalInterestEarned: string,
    futureInvestmentValue: string
}

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    const [ciForm, setCIForm] = useState<CompoundInterestForm>()
    const [summaryData, setSummaryData] = useState<CalcSummaryData>();
    const onFormSubmit = (formData: CompoundInterestForm) => {
        console.log(formData);
        setCIForm(formData);
        //ToDo: Don't save to state, calculate then save actual results data to state.
        //ready to be passed into CalcSummary and CalcYearlyTable
    }
    return (
        <>
            <section className='container flex items-center justify-center'>
                <CalcForm onFormSubmit={onFormSubmit} />
            </section>
            {summaryData &&
                <section className="container flex items-center justify-center">
                    <CalcSummary data={summaryData!} />
                </section>
            }
            {ciForm &&
                <section className="container flex items-center justify-center">
                    <CalcYearlyTable />
                </section>
            }
        </>
    )
}