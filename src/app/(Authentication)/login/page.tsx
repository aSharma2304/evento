"use client";

import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { handleLogin } from "@/actions/submitActions";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/(context)/UserContext";
import { toast } from "sonner";

export const LoginformSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginformSchema>>({
    resolver: zodResolver(LoginformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { user, setUser } = useUser();
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

  const handleSubmit = async (formdata: z.infer<typeof LoginformSchema>) => {
    const response = await handleLogin(formdata);

    if (!response?.success) {
      setStatus(response?.status || "Error");
      setStatusMessage(response.message || "Something went wrong");
      console.log("an error while loggin in");
    } else if (response?.success) {
      setStatus(response?.status || "Success");
      setStatusMessage(response.message || "");
      setUser(response.user);

      toast.success("Succesfully Logged in");

      router.push("/");
    }
  };

  return (
    <div className="w-full ">
      <span className="text-zinc-900 text-3xl  w-full text-center font-bold flex justify-center mt-3 mb-4">
        Login
      </span>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-3"
        >
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
                      type="password"
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
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="hover:text-blue-700 hover:underline mx-2"
        >
          Signup
        </Link>
      </span>
    </div>
  );
};

export default page;
