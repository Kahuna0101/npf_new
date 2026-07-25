"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select"

import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

import { Button } from "@/components/ui/button"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import { multiFundSchema } from "@/lib/form-validation"
import { SendMultiFundFormMail } from "@/lib/actions/sendMail"
import Image from "next/image"


const MultiFundForm = () => {

    const form = useForm<z.infer<typeof multiFundSchema>>({
        resolver: zodResolver(multiFundSchema),
        defaultValues: {
            applicationType: "",
            penNo: "",
            title: "",
            surname: "",
            firstName: "",
            middleName: "",
            ippisNo: "",
            phoneNo1: "",
            phoneNo2: "",
            dateOfBirth: "",
            email: "",
            employerName: "",
            preferredFund: "",
            consent: false,
        },
    })


    async function onSubmit(
        values: z.infer<typeof multiFundSchema>
    ) {
        console.log(values)

        const response = await SendMultiFundFormMail(values)

        if (response.success) {
            toast(
                "Your Multi-Fund consent form has been submitted successfully!",
                {
                    position: "bottom-center"
                }
            )

            form.reset()
        } else {
            toast.error("Error submitting Multi-Fund Form")
        }
    }


    const isSubmitting = form.formState.isSubmitting


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="w-full max-w-4xl mx-auto px-4 py-10">
                    <div className="w-full bg-white rounded-[20px] shadow-lg border border-gray-100 overflow-hidden">
                        <div className="flex flex-col p-7.5 md:p-10 gap-7.5">
                            <div className="flex flex-col items-center gap-2.5">
                                <div className="flex flex-col md:flex-row w-full gap-2.5 items-center justify-center">
                                    <Image
                                        src="/images/logo.png"
                                        width={40}
                                        height={40}
                                        alt="NPF Pensions"
                                    />
                                    <h1 className="text-2xl text-black-100 font-semibold text-center">Multi-Fund Structure Consent Form </h1>
                                </div>

                            </div>

                            <div className="flex max-lg:flex-col gap-5"> <FormField
                                control={form.control}
                                name="applicationType"
                                render={({ field }) => (
                                    <FormItem className="w-full">

                                        <FormLabel className="form-label">
                                            Application Type
                                        </FormLabel>

                                        <FormControl>

                                            <NativeSelect
                                                value={field.value}
                                                onChange={field.onChange}
                                                className="form-input"
                                            >
                                                <NativeSelectOption value="">
                                                    Select Application Type
                                                </NativeSelectOption>
                                                <NativeSelectOption value="Consent">
                                                    Consent
                                                </NativeSelectOption>
                                                <NativeSelectOption value="Transfer">
                                                    Transfer
                                                </NativeSelectOption>
                                            </NativeSelect>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                                <FormField
                                    control={form.control}
                                    name="penNo"
                                    render={({ field }) => (
                                        <FormItem className="w-full">

                                            <FormLabel className="form-label">
                                                PEN
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="PEN Number"
                                                    className="form-input"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />

                                        </FormItem>
                                    )}
                                />



                            </div>

                            <div className="flex max-lg:flex-col gap-5">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="form-label">
                                                Title
                                            </FormLabel>

                                            <FormControl>
                                                <NativeSelect
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    className="form-input"
                                                >
                                                    <NativeSelectOption value="">
                                                        Select Title
                                                    </NativeSelectOption>
                                                    <NativeSelectOption value="Mr">
                                                        Mr
                                                    </NativeSelectOption>
                                                    <NativeSelectOption value="Mrs">
                                                        Mrs
                                                    </NativeSelectOption>
                                                    <NativeSelectOption value="Miss">
                                                        Miss
                                                    </NativeSelectOption>
                                                    <NativeSelectOption value="Ms">
                                                        Ms
                                                    </NativeSelectOption>
                                                </NativeSelect>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="surname"
                                    render={({ field }) => (
                                        <FormItem className="w-full">

                                            <FormLabel className="form-label">
                                                Surname
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Surname"
                                                    className="form-input"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />

                                        </FormItem>
                                    )}
                                />

                            </div>

                            <div className="flex max-lg:flex-col gap-5">

                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="w-full">

                                            <FormLabel className="form-label">
                                                First Name
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="First Name"
                                                    className="form-input"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />

                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="middleName"
                                    render={({ field }) => (
                                        <FormItem className="w-full">

                                            <FormLabel className="form-label">
                                                Middle Name
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Middle Name"
                                                    className="form-input"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />

                                        </FormItem>
                                    )}
                                />

                            </div>

                            <div className="flex max-lg:flex-col gap-5">

                                <FormField
                                    control={form.control}
                                    name="ippisNo"
                                    render={({ field }) => (
                                        <FormItem className="w-full">

                                            <FormLabel className="form-label">
                                                IPPIS No.
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="IPPIS Number"
                                                    className="form-input"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />

                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="dateOfBirth"
                                    render={({ field }) => (
                                        <FormItem className="w-full">

                                            <FormLabel className="form-label">
                                                Date of Birth
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    type="date"
                                                    className="form-input"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />

                                        </FormItem>
                                    )}
                                />

                            </div>

                            <div className="flex max-lg:flex-col gap-5">

                                <FormField
                                    control={form.control}
                                    name="phoneNo1"
                                    render={({ field }) => (
                                        <FormItem className="w-full">

                                            <FormLabel className="form-label">
                                                Phone No. 1
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    className="form-input"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />

                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phoneNo2"
                                    render={({ field }) => (
                                        <FormItem className="w-full">

                                            <FormLabel className="form-label">
                                                Phone No. 2
                                                <span className="text-grey-100 font-normal">
                                                    {" "}(Optional)
                                                </span>
                                            </FormLabel>

                                            <FormControl>
                                                <Input
                                                    type="tel"
                                                    placeholder="Alternative Phone Number"
                                                    className="form-input"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />

                                        </FormItem>
                                    )}
                                />

                            </div>

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel className="form-label">
                                            Email Address
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Email Address"
                                                className="form-input"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage />

                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="employerName"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel className="form-label">
                                            Name of Employer
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Name of Employer"
                                                className="form-input"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage />

                                    </FormItem>
                                )}
                            />

                            <div className="flex flex-col gap-2">

                                <h3 className="text-2xl font-bold text-black-100">
                                    MULTI-FUND STRUCTURE
                                </h3>

                                <Separator className="border-2" />

                                <p className="text-base font-normal text-black-100">
                                    Please select your preferred Fund class. Your funds
                                    will be invested in line with the applicable portfolio.
                                </p>

                            </div>

                            <div className="flex flex-col gap-4">

                                <div className="p-4 rounded-[10px] bg-gray-50 border border-gray-100">
                                    <p className="text-sm font-normal text-black-100">
                                        <strong>Fund I:</strong> Optional fund with the highest
                                        risk/return profile. Requires 20%–75% exposure to
                                        variable income instruments and is available to
                                        contributors aged 49 years and below through formal request.
                                    </p>
                                </div>

                                <div className="p-4 rounded-[10px] bg-gray-50 border border-gray-100">
                                    <p className="text-sm font-normal text-black-100">
                                        <strong>Fund II:</strong> Medium risk/return profile with
                                        10%–55% exposure to variable income instruments.
                                        Designed for contributors aged 49 years and below.
                                    </p>
                                </div>

                                <div className="p-4 rounded-[10px] bg-gray-50 border border-gray-100">
                                    <p className="text-sm font-normal text-black-100">
                                        <strong>Fund III:</strong> Moderate risk/return profile
                                        designed for contributors aged 50 years and above,
                                        with 5%–20% exposure to variable income instruments.
                                    </p>
                                </div>

                                <div className="p-4 rounded-[10px] bg-gray-50 border border-gray-100">
                                    <p className="text-sm font-normal text-black-100">
                                        <strong>Fund IV:</strong> Low risk/return profile strictly
                                        for retirees, with up to 10% exposure to variable
                                        income instruments at the Fund Manager's discretion.
                                    </p>
                                </div>

                            </div>

                                                        <FormField
                                control={form.control}
                                name="preferredFund"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel className="form-label">
                                            Multi-Fund Structure (MFS) Type
                                        </FormLabel>

                                        <FormControl>
                                            <NativeSelect
                                                value={field.value}
                                                onChange={field.onChange}
                                                className="form-input"
                                            >

                                                <NativeSelectOption value="">
                                                    Select Preferred Fund
                                                </NativeSelectOption>

                                                <NativeSelectOption value="Fund I">
                                                    Fund I – High Risk / High Return
                                                </NativeSelectOption>

                                                <NativeSelectOption value="Fund II">
                                                    Fund II – Medium Risk / Medium Return
                                                </NativeSelectOption>

                                                <NativeSelectOption value="Fund III">
                                                    Fund III – Moderate Risk / Moderate Return
                                                </NativeSelectOption>

                                                <NativeSelectOption value="Fund IV">
                                                    Fund IV – Low Risk / Low Return
                                                </NativeSelectOption>

                                            </NativeSelect>
                                        </FormControl>

                                        <FormMessage />

                                    </FormItem>
                                )}
                            />

                            <div className="flex flex-col gap-2">

                                <h3 className="text-2xl font-bold text-black-100">
                                    ATTESTATION / INDEMNITY
                                </h3>

                                <Separator className="border-2" />

                                <p className="text-base font-normal text-black-100">
                                    I hereby confirm that I have read and understood the
                                    information regarding the Multi-Fund Structure. I have
                                    selected my preferred Fund class and I am aware that my
                                    funds will be invested in line with the applicable portfolio.
                                    By this, I indemnify NPF Pensions Ltd from any liability
                                    directly or indirectly resulting from the performance of
                                    the investment which I have opted for.
                                </p>

                            </div>

                            <FormField
                                control={form.control}
                                name="consent"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-3.5 bg-white rounded-[10px] border border-gray-100">

                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={(checked) =>
                                                    field.onChange(checked === true)
                                                }
                                            />
                                        </FormControl>

                                        <div className="space-y-1 leading-none">

                                            <FormLabel className="text-sm font-medium text-black-100 cursor-pointer">
                                                I confirm that I have read and understood the
                                                information above and agree to the terms of the
                                                Multi-Fund Structure and the attestation/indemnity
                                                statement.
                                            </FormLabel>

                                            <FormMessage />

                                        </div>

                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="h-15 bg-blue-100 hover:bg-yellow-100 text-base cursor-pointer font-semibold border hover:border-none border-blue-100 text-white rounded-[8px]"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </Button>

                        </div>

                    </div>

                </div>

            </form>
        </Form>
    )
}

export default MultiFundForm