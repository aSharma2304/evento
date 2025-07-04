"use client";
// import React from "react";
// import EventForm from "@/components/EventForm";

// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Select } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { handleAddEvent } from "@/actions/submitActions";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// export const eventFormSchema = z.object({
//   eventName: z.string().min(3, "Event name must be at least 3 characters"),
//   description: z.string().min(10, "Description must be at least 10 characters"),
//   organizerName: z.string().min(2, "Organizer name is required"),
//   contactEmail: z.string().email("Invalid email address"),
//   contactPhone: z.string().optional(),
//   category: z.string().min(1, "Category is required"),
//   dateTime: z.string(),
//   venueAddress: z.string().min(5, "Address is required"),
//   ticketLink: z.string().url().optional(),
//   image: z.any().optional(),
//   tags: z.string().optional(),
//   notes: z.string().optional(),
//   duration: z.number().optional(),
//   eventType: z.string(),
//   ageRestriction: z.string().optional(),
//   capacity: z.number().optional(),
//   socialLinks: z.string().url().optional(),
// });

// const handleEventSubmit = async (data: z.infer<typeof eventFormSchema>) => {
//   await handleAddEvent(data);
//   console.log("Form submitted:", data);
// };

// const page = () => {
//   const form = useForm({
//     resolver: zodResolver(eventFormSchema),
//     defaultValues: {
//       eventName: "",
//       description: "",
//       organizerName: "",
//       contactEmail: "",
//       category: "",
//       dateTime: "",
//       venueAddress: "",
//       ticketLink: "",
//       image: null,
//       tags: "",
//       notes: "",
//       duration: 0,
//       eventType: "Offline",
//       ageRestriction: "All Ages",
//       capacity: 0,
//       socialLinks: "",
//     },
//   });
//   return (
//     // <form onSubmit={handleSubmit(() => onSubmit)} className="space-y-4">
//     //   <div>
//     //     <label>Event Name</label>
//     //     <Input {...register("eventName")} />
//     //     {errors.eventName && <p>{errors.eventName.message}</p>}
//     //   </div>

//     //   <div>
//     //     <label>Description</label>
//     //     <Textarea {...register("description")} />
//     //     {errors.description && <p>{errors.description.message}</p>}
//     //   </div>

//     //   <div>
//     //     <label>Organizer Name</label>
//     //     <Input {...register("organizerName")} />
//     //     {errors.organizerName && <p>{errors.organizerName.message}</p>}
//     //   </div>

//     //   <div>
//     //     <label>Contact Email</label>
//     //     <Input type="email" {...register("contactEmail")} />
//     //     {errors.contactEmail && <p>{errors.contactEmail.message}</p>}
//     //   </div>

//     //   <div>
//     //     <label>Category</label>
//     //     <Select {...register("category")}>
//     //       <option value="Music">Music</option>
//     //       <option value="Sports">Sports</option>
//     //       <option value="Workshops">Workshops</option>
//     //       <option value="Conferences">Conferences</option>
//     //     </Select>
//     //     {errors.category && <p>{errors.category.message}</p>}
//     //   </div>

//     //   <div>
//     //     <label>Date & Time</label>
//     //     <Input type="datetime-local" {...register("dateTime")} />
//     //   </div>

//     //   <div>
//     //     <label>Venue Address</label>
//     //     <Textarea {...register("venueAddress")} />
//     //   </div>

//     //   <div>
//     //     <label>Ticket/Registration Link</label>
//     //     <Input type="url" {...register("ticketLink")} />
//     //   </div>

//     //   <div>
//     //     <label>Price</label>
//     //     <Input type="number" {...register("price")} />
//     //   </div>

//     //   <div>
//     //     <label>Image Upload</label>
//     //     <Input type="file" {...register("image")} />
//     //   </div>

//     //   <div>
//     //     <label>Tags/Keywords</label>
//     //     <Input {...register("tags")} />
//     //   </div>

//     //   <div>
//     //     <label>Notes</label>
//     //     <Textarea {...register("notes")} />
//     //   </div>

//     //   <div>
//     //     <label>Event Duration (in hours)</label>
//     //     <Input type="number" {...register("duration")} />
//     //   </div>

//     //   <div>
//     //     <label>Event Type</label>
//     //     <Select {...register("eventType")}>
//     //       <option value="Offline">Offline</option>
//     //       <option value="Online">Online</option>
//     //       <option value="Hybrid">Hybrid</option>
//     //     </Select>
//     //   </div>

//     //   <div>
//     //     <label>Age Restriction</label>
//     //     <Select {...register("ageRestriction")}>
//     //       <option value="All Ages">All Ages</option>
//     //       <option value="18+">18+</option>
//     //       <option value="21+">21+</option>
//     //     </Select>
//     //   </div>

//     //   <div>
//     //     <label>Capacity</label>
//     //     <Input type="number" {...register("capacity")} />
//     //   </div>

//     //   <div>
//     //     <label>Social Media Links</label>
//     //     <Input type="url" {...register("socialLinks")} />
//     //   </div>

//     //   <Button type="submit">Submit Event</Button>
//     // </form>
//     <div className="w-full min-h-screen flex justify-center py-5">
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(handleEventSubmit)} className="w-1/3">
//           <FormField
//             name="eventName"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Event Name</FormLabel>
//                 <FormControl>
//                   <Input {...field} placeholder="Enter event name" />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Description */}
//           <FormField
//             name="description"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Description</FormLabel>
//                 <FormControl>
//                   <Textarea {...field} placeholder="Enter event description" />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Organizer Name */}
//           <FormField
//             name="organizerName"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Organizer Name</FormLabel>
//                 <FormControl>
//                   <Input {...field} placeholder="Enter organizer name" />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Contact Email */}
//           <FormField
//             name="contactEmail"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Contact Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     placeholder="Enter contact email"
//                     type="email"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Category */}
//           <FormField
//             name="category"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Category</FormLabel>
//                 <FormControl>
//                   <Input {...field} placeholder="Enter category" />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* DateTime */}
//           <FormField
//             name="dateTime"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Date & Time</FormLabel>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     placeholder="Enter date and time"
//                     type="datetime-local"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Venue Address */}
//           <FormField
//             name="venueAddress"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Venue Address</FormLabel>
//                 <FormControl>
//                   <Input {...field} placeholder="Enter venue address" />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Ticket Link */}
//           <FormField
//             name="ticketLink"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Ticket Link</FormLabel>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     placeholder="Enter ticket link"
//                     type="url"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Event Type */}
//           <FormField
//             name="eventType"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Event Type</FormLabel>
//                 <FormControl>
//                   <Input {...field} placeholder="Online / Offline" />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="flex justify-center text-lg bg-blue-600 text-white hover:bg-blue-700 mt-3 w-1/2"
//           >
//             Submit Event
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default page;

// _______________________________________________________________________
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, MapPin, Tag, Link as LinkIcon } from "lucide-react";
import { addNewEvent } from "@/actions/submitActions";

// Simplified schema based on your Event model
export const eventFormSchema = z.object({
  eventName: z.string().min(3, "Event name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  city: z.string().min(2, "City is required"),
  address: z.string().min(5, "Address is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  link: z.string().url("Must be a valid URL"),
  category: z.string().min(1, "Category is required"),
  organizerName: z.string().min(2, "Organizer name is required"),
  contactNo: z.string().min(5, "Contact number is required"),
  email: z.string().email("Invalid email address"),
});

type EventFormData = z.infer<typeof eventFormSchema>;

function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
  });

  const onSubmit = async (data: EventFormData) => {
    // Generate a slug from event name
    const slug = data.eventName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const formData = {
      ...data,
      slug,
    };

    console.log(formData);
    addNewEvent(formData);
    // Here you would typically send the data to your API
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white  rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Create New Event
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Event Name
              </label>
              <input
                {...register("eventName")}
                className="mt-1 block w-full h-9 rounded-md border-gray-300 text-black p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter event name"
              />
              {errors.eventName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.eventName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register("description")}
                rows={3}
                className="mt-1 block w-full rounded-md p-2 text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Describe your event"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className=" text-sm font-medium text-gray-700 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                City
              </label>
              <input
                {...register("city")}
                className="mt-1 block w-full p-2 rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="City"
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                {...register("address")}
                className="mt-1 block w-full rounded-md p-2 text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Event address"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className=" text-sm font-medium  text-gray-700 flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                Date
              </label>
              <input
                {...register("date")}
                type="date"
                className="mt-1 block w-full rounded-md p-2 text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                {...register("time")}
                type="time"
                className="mt-1 block w-full p-2 rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.time && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.time.message}
                </p>
              )}
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className=" text-sm font-medium text-gray-700 flex items-center gap-1">
                <Tag className="w-4 h-4" />
                Category
              </label>
              <select
                {...register("category")}
                className="mt-1 block w-full rounded-md text-black border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                <option value="Music">Music</option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Arts">Arts</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <label className=" text-sm font-medium text-gray-700 flex items-center gap-1">
                <LinkIcon className="w-4 h-4" />
                Event Link
              </label>
              <input
                {...register("link")}
                type="url"
                className="mt-1 block w-full rounded-md p-2 text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="https://..."
              />
              {errors.link && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.link.message}
                </p>
              )}
            </div>
          </div>

          {/* Organizer Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Organizer Name
              </label>
              <input
                {...register("organizerName")}
                className="mt-1 block w-full rounded-md p-2 text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Who's organizing?"
              />
              {errors.organizerName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.organizerName.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  {...register("contactNo")}
                  className="mt-1 block w-full rounded-md p-2 text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Phone number"
                />
                {errors.contactNo && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.contactNo.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="mt-1 block w-full rounded-md p-2 text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="contact@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventForm;
