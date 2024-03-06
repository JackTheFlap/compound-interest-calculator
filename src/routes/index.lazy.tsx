import { CalcForm, CompoundInterestForm } from "@/components/calculator/CalcForm";
import { CalcSummary } from "@/components/calculator/CalcSummary";
import { CalcYearlyTable } from "@/components/calculator/CalcYearlyTable";
import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from "react";
import { z } from "zod";

export type CalcSummaryData = {
    initialBalance: string,
    additionalDeposits: string,
    totalInterestEarned: string,
    futureInvestmentValue: string
}

export type CalcYearlyTableData = {
    year: number,
    interest: string,
    accruedInterest: string,
    balance: string
}

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function roundTo(n: number) {
    var negative = false;
    if (n < 0) {
        negative = true;
        n = n * -1;
    }
    var multiplicator = Math.pow(10, 2);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = +(Math.round(n) / multiplicator).toFixed(2);
    if (negative) {
        n = +(n * -1).toFixed(2);
    }
    return n;
}
const ConstructCurrencyString = (currency: string, value: number) => {
    var str = `${currency}${roundTo(value).toLocaleString('en')}`;
    if (!str.includes(".")) {
        str += ".00";
    } else if (str.charAt(str.length - 2) === ".") {
        str += "0";
    }
    return str;
}

//Below formulas: https://www.thecalculatorsite.com/finance/calculators/compound-interest-formula
/*
    Compound Interest Formula:

    A = P(1+r/n)^(nt)

    Where:

        A = the future value of the investment
        P = the principal balance
        r = the annual interest rate (decimal)
        n = number of times interest is compounded per year
        t = the time in years
        ^ = ... to the power of ... 
*/

function Index() {
    const [summaryData, setSummaryData] = useState<CalcSummaryData>();
    const [tableData, setTableData] = useState<CalcYearlyTableData[]>();
    const onFormSubmit = (formData: z.infer<typeof CompoundInterestForm>) => {
        setSummaryData({
            initialBalance: ConstructCurrencyString(formData.currency, formData.initialInvestment),
            additionalDeposits: ConstructCurrencyString(formData.currency, (formData.monthlyDeposits * 12) * formData.numOfYears),
            totalInterestEarned: ConstructCurrencyString(formData.currency, (formData.initialInvestment * Math.pow((1 + (formData.interestRate / 100) / 12), (12 * formData.numOfYears)) - formData.initialInvestment)),
            futureInvestmentValue: ConstructCurrencyString(formData.currency, formData.initialInvestment * Math.pow((1 + (formData.interestRate / 100) / 12), (12 * formData.numOfYears)))
        });
        const localTableData: CalcYearlyTableData[] = [];
        var curTotalBalance = formData.initialInvestment;
        var curTotalInterest = 0;
        localTableData.push({ year: 0, interest: "-", accruedInterest: "-", balance: ConstructCurrencyString(formData.currency, formData.initialInvestment) });
        for (let i = 1; i <= formData.numOfYears; i++) {
            localTableData.push({
                year: i,
                interest: ConstructCurrencyString(formData.currency, curTotalBalance * Math.pow(1 + (formData.interestRate / 100) / 12, 12) - curTotalBalance),
                accruedInterest: ConstructCurrencyString(formData.currency, (curTotalBalance * Math.pow(1 + (formData.interestRate / 100) / 12, 12) - curTotalBalance) + curTotalInterest),
                balance: ConstructCurrencyString(formData.currency, curTotalBalance * Math.pow(1 + (formData.interestRate / 100) / 12, 12))
            })
            curTotalInterest += Math.round((curTotalBalance * Math.pow(1 + (formData.interestRate / 100) / 12, 12) - curTotalBalance) * 100) / 100;
            curTotalBalance = (Math.round(curTotalBalance * Math.pow(1 + (formData.interestRate / 100) / 12, 12) * 100) / 100);
        }
        setTableData(localTableData);
    }
    return (
        <>
            <section className='container flex flex-col justify-center mb-4 md:flex-row'>
                <CalcForm onFormSubmit={onFormSubmit} />
                <CalcSummary data={summaryData} />
            </section>
            <section className="flex items-center justify-center max-w-7xl">
                <CalcYearlyTable data={tableData} />
            </section>
        </>
    )
}