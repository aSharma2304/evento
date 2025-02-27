"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleSignUp } from "@/actions/submitActions";
import { useUser } from "@/app/(context)/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const formSchema = z
  .object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  );

const page = () => {
  const router = useRouter();
  const { user, setUser } = useUser();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
    },
  });

  const [status, setStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  // 🛠️ Watch form fields for changes
  const watchedFields = form.watch();
  useEffect(() => {
    if (status || statusMessage) {
      setStatus("");
      setStatusMessage("");
    }
  }, [watchedFields.email, watchedFields.password]); // Depend on form fields

  const handleSubmit = async (formdata: z.infer<typeof formSchema>) => {
    // console.log(formdata);

    // handleSignUp(formdata);
    // setUser(formdata);
    // router.push("/");
    const response = await handleSignUp(formdata);

    if (!response?.success) {
      setStatus(response?.status || "Error");
      setStatusMessage(response.message || "Something went wrong");
      console.log("an error while signing in ");
    } else if (response?.success) {
      setStatus(response?.status || "Success");
      setStatusMessage(response.message || "");
      setUser(response.user);

      toast.success("Succesfully Registered");

      router.push("/");
    }
  };

  return (
    <div>
      <span className="text-zinc-900 text-3xl  w-full text-center font-bold flex justify-center mb-4 mt-3  ">
        Create new account
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-3"
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-lg">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      type="text"
                    ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              );
            }}
          ></FormField>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-lg">User Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="johnDoe@gmail.com"
                      type="email"
                    ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              );
            }}
          ></FormField>
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-lg">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Password"
                      type="text"
                    ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              );
            }}
          ></FormField>
          <FormField
            name="passwordConfirm"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-lg">Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Confirm Password"
                      type="text"
                    ></Input>
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              );
            }}
          ></FormField>
          {status && (
            <div
              className={`${
                status === "success"
                  ? "bg-lime-500 text-lime-100"
                  : "bg-red-500  text-red-100"
              } w-full flex justify-center items-center rounded-lg p-3 font-semibold shadow-lg transition-all my-2`}
            >
              {statusMessage}
            </div>
          )}
          <Button
            type="submit"
            className="w-full text-lg bg-sky-600/30 text-blue-700  hover:bg-sky-600/50"
          >
            Submit
          </Button>
        </form>
      </Form>
      <span className="text-zinc-900  w-full text-center font-medium flex justify-center mt-6 ">
        Already have an account?{" "}
        <Link
          href="/login"
          className="hover:text-blue-700 hover:underline mx-2"
        >
          Login
        </Link>
      </span>
    </div>
  );
};

export default page;
