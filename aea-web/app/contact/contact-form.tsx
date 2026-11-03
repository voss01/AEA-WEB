"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Computer, ScreenShare, Share, Smile } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight } from "react-icons/pi";

const FormSchema = z.object({
  first_name: z.string().trim().min(1),
  last_name: z.string().trim().min(1),
  email: z.string().trim().min(1).email(),
  company_name: z.string().trim().min(1),
  help: z.enum([
    "Conoscici",
    "Workshop",
    "Visita in azienda",
    "Partnership",
    "Altro",]),
  info: z.string().refine(
    (value) => value.trim().split(/\s+/).filter(Boolean).length<=100,
    {message: "Puoi inserire al massimo 100 parole."}),
  terms: z.boolean(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      company_name: "",
      help: undefined,
      info: "",
      terms: false,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    setSubmitted(true);
    } catch (error) {
    console.error("Errore durante l'invio:", error);
    } finally {
    setLoading(false);
    }
}

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className="md:flex  justify-center pt-20 px-8"
    >
      <div>
        <div className="text-5xl font-medium w-2/3">Contattaci</div>
        <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-lg my-4">

          <div className="flex gap-4 border-b ">
            <PiCheckLight className="text-2xl " />
            <div className=" font-normal pb-4 w-80">
              Organizzazione Workshop
            </div>
          </div>

          <div className="flex gap-4 border-b ">
            <PiCheckLight className="text-2xl " />
            <div className=" font-normal pb-4 w-80">Visite in azienda</div>
          </div>

          <div className="flex gap-4  ">
            <PiCheckLight className="text-2xl " />
            <div className=" font-normal pb-4 w-80">Partnership</div>
          </div>
        </div>
      </div>

      <Form {...form}>
        {!submitted ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4">
            <div className="md:flex items-center gap-6 ">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field, fieldState }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm ">Nome*</FormLabel>
                    <FormControl>
                      <Input {...field} 
                      className={fieldState.invalid ? "border-red-500 focus-visible:ring-red-500" : ""} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field, fieldState }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="w-60 text-sm ">Cognome*</FormLabel>
                    <FormControl>
                      <Input {...field} 
                       className={fieldState.invalid ? "border-red-500 focus-visible:ring-red-500" : ""} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className=" text-sm   ">
                    E-mail aziendale*
                  </FormLabel>
                  <FormControl>
                    <Input {...field} 
                     className={fieldState.invalid ? "border-red-500 focus-visible:ring-red-500" : ""} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company_name"
              render={({ field, fieldState }) => (
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="w-60 text-sm">Nome azienda*</FormLabel>
                  <FormControl>
                    <Input {...field} 
                    className={fieldState.invalid ? "border-red-500 focus-visible:ring-red-500" : ""} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="help"
              render={({ field }) => (
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="w-60 text-sm   ">
                    Come possiamo aiutarti?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona un'opzione"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <div className="flex gap-4">
                        <SelectItem value="Conoscici">Conoscici</SelectItem>
                      </div>
                      <SelectItem value="Workshop">Workshop</SelectItem>
                      <SelectItem value="Visita in azienda">Visita in azienda</SelectItem>
                      <SelectItem value="Partnership">Partnership</SelectItem>
                      <SelectItem value="Altro">Altro</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="info"
              render={({ field }) => {
                const wordCount=field.value
                .trim()
                .split(/\s+/)
                .filter(Boolean).length;
                return(
                  <FormItem className="w-full">
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm">
                        Raccontaci qualcosa in più
                      </FormLabel>
                      <span className="text-xs text-gray-500">
                      {wordCount}/100 parole
                      </span>
                    </div>
                    <FormControl>
                    <Textarea
                    style={{height: "120px"}}
                    placeholder="Scrivi qui..."
                    {...field}
                    />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-4 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="text-[#6c6684]"
                  />
                </FormControl>
              <FormLabel className="text-xs font-light md:w-3/4 mb-1">
                Accetto di ricevere da AEA email per eventuali comunicazioni
              </FormLabel>
              </FormItem>
            )}
          />

            <div className="flex items-center gap-4">
              <Button
                type="submit"
                className="text-sm font-light"
                disabled={loading}>
                {loading ? "Invio in corso..." : "Submit"}
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div
              className="text-xl md:text-2xl flex items-center justify-center flex-col px-8">
              <div className="w-80">
                <Image
                  src="/assets/MeditatingDoodle.svg"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="mx-auto"
                />

                <div className="text-gray-500 font-light  text-center justify-center mx-auto py-10">
                  La tua richiesta è stata inviata correttamente!
                </div>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}