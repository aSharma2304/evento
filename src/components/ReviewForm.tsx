"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitComment } from "@/actions/submitActions";

type ReviewFormProps = {
  eventId: number;
};

const ReviewForm = ({ eventId }: ReviewFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    comment: "",
  });

  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStatus("");
    setStatusMessage("");
    const { name, value } = e.target;
    if (name === "comment" && value.length > 200) {
      setError("Comment cannot exceed 200 characters.");
      return;
    }
    setError("");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.title || !formData.comment) {
      setError("All fields are required.");
      return;
    }
    const result = await submitComment({
      comment: formData.comment,
      commenterName: formData.name,
      eventId: eventId,
    });
    setStatus(result.status);
    setStatusMessage(result.message);

    console.log("Submitted Review:", formData);
    setFormData({ name: "", title: "", comment: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[435px] my-3 mx-auto space-y-4 p-4 border border-white/20  rounded-md shadow-md bg-gray-800/20 text-gray-400 "
    >
      <h2 className="text-xl font-semibold text-gray-200">Write a comment</h2>

      <div className="space-y-2 ">
        <Label htmlFor="name" className="text-gray-200">
          Your Name
        </Label>
        <Input
          id="name"
          name="name"
          className="border-white/20"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title" className="text-gray-200">
          Review Title
        </Label>
        <Input
          id="title"
          name="title"
          className="border-white/20"
          placeholder="Enter a title for your comment"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="comment" className="text-gray-200">
          Your Comment (max 200 characters)
        </Label>
        <Textarea
          id="comment"
          name="comment"
          placeholder="Share your thoughts..."
          value={formData.comment}
          onChange={handleChange}
          className="border-white/20 resize-none "
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      {status && (
        <div
          className={`${
            status === "success"
              ? " bg-lime-700/50 text-lime-400/80 border border-lime-400/80 "
              : " bg-red-900/50 text-red-400  border border-red-400/80 "
          } w-full flex justify-center items-center rounded-lg p-2 `}
        >
          {statusMessage}
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-sky-900/50 text-sky-600/80 hover:bg-sky-900 hover:text-sky-400"
      >
        Submit Review
      </Button>
    </form>
  );
};

export default ReviewForm;
