"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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

import { claimFormSchema } from "@/lib/form-validation"
import { SendUncreditedFundFormMail } from "@/lib/actions/sendMail"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"

interface ClaimFormProps {

    person: {
        IPPISNO: string | null;
        RSAPIN: string | null;
        NAME: string | null;
        EE: number;
        ER: number;
        EMPLOYERNAME: string | null;
    };

    onClose: () => void;
    onSuccess: () => void;
}

const ClaimForm = ({ person, onClose, onSuccess }: ClaimFormProps) => {
    const { IPPISNO, RSAPIN, NAME, EMPLOYERNAME } = person;

    const form = useForm<z.infer<typeof claimFormSchema>>({
        resolver: zodResolver(claimFormSchema),
        defaultValues: {
            phone: "",
            email: "",
            pfa: "",
        },
    })

    async function onSubmit(
        values: z.infer<typeof claimFormSchema>
    ) {

        const response = await SendUncreditedFundFormMail(values)

        if (response.success) {
            toast(
                "Your Uncredited Funds Claim Form has been submitted successfully!",
                {
                    position: "bottom-center"
                }
            )

            form.reset();

            setTimeout(() => {
                onSuccess();
            }, 1000);
            
        } else {
            toast.error("Error submitting Uncredited Funds Claim Form")
        }
    }


    const isSubmitting = form.formState.isSubmitting


    return (
        <Dialog open onOpenChange={onClose}>
            <Form {...form}>
                <DialogContent className="w-full sm:max-w-2xl bg-white rounded-[20px] p-0 shadow overflow-hidden">
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col p-6 gap-4">
                            <DialogHeader className="flex flex-col items-center gap-2.5">
                                <DialogTitle className="text-2xl text-black-100 font-semibold">Uncredited Contributions/Funds</DialogTitle>
                                <DialogDescription className="text-base text-center font-normal text-grey-100">These are funds received from various employers and have remained unprocessed due to diverse reasons. There are three (3) categories of uncredited contributions: Transitional Contributions Fund (TCF), Partially Processed Contributions, Fully Unprocessed Contributions</DialogDescription>
                            </DialogHeader>

                            <div className="flex max-lg:flex-col gap-5">
                                <p className="flex flex-1 flex-col gap-1 text-base font-medium"><span className="text-xs font-light">Type</span>Transactional Contributions</p>
                                <p className="flex flex-1 flex-col gap-1 text-base font-medium"><span className="text-xs font-light">Employee Code</span>{IPPISNO}</p>
                            </div>

                            <div className="flex max-lg:flex-col gap-5">
                                <p className="flex flex-1 flex-col gap-1 text-base font-medium"><span className="text-xs font-light">Employee Name</span>{NAME}</p>
                                <p className="flex flex-1 flex-col gap-1 text-base font-medium"><span className="text-xs font-light">Employer Name</span>{EMPLOYERNAME}</p>
                            </div>

                            <p className="text-sm font-light">For further details, kindly fill the form below to contact us:</p>
        
                            <div className="flex max-lg:flex-col gap-5">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel className="form-label">Phone Number</FormLabel>
                                            <FormControl>
                                                <Input type="tel" placeholder="Phone Number" className="form-input" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel className="form-label">Email Address</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="Email Address" className="form-input" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex max-lg:flex-col gap-5">
                                <p className="flex flex-1 flex-col gap-1 text-base font-medium"><span className="text-xs font-light">RSA PIN</span>{RSAPIN}</p>
                                <FormField
                                    control={form.control}
                                    name="pfa"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel className="form-label">Pension Fund Administarator</FormLabel>
                                            <FormControl>
                                                <Input placeholder="PFA Name" className="form-input" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>


                            <Button type="submit" disabled={isSubmitting} className="h-12 bg-blue-100 hover:bg-yellow-100 text-base cursor-pointer font-semibold border hover:border-none border-blue-100 text-white rounded-[8px]">{isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Submitting...</>) : ("Submit")}</Button>
                        </div>
                    </form>
                </DialogContent>

            </Form>
        </Dialog>
    )
}

export default ClaimForm