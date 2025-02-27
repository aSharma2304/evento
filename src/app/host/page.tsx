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
import {
  CalendarDays,
  MapPin,
  Tag,
  Clock,
  Users,
  Link as LinkIcon,
} from "lucide-react";

export const eventFormSchema = z.object({
  eventName: z.string().min(3, "Event name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  organizerName: z.string().min(2, "Organizer name is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  dateTime: z.string(),
  venueAddress: z.string().min(5, "Address is required"),
  ticketLink: z.string().url().optional(),
  image: z.any().optional(),
  tags: z.string().optional(),
  notes: z.string().optional(),
  duration: z.number().optional(),
  eventType: z.string(),
  ageRestriction: z.string().optional(),
  capacity: z.number().optional(),
  socialLinks: z.string().url().optional(),
});

type EventFormData = z.infer<typeof eventFormSchema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      eventType: "Offline",
      ageRestriction: "All Ages",
    },
  });

  const onSubmit = (data: EventFormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white/5 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Create New Event
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Information Section */}
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-600">
                  Event Name
                </label>
                <input
                  {...register("eventName")}
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter event name"
                />
                {errors.eventName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.eventName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-600">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  rows={4}
                  className="mt-1 text-black  block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Describe your event"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Date and Location Section */}
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Date & Location
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  Date & Time
                </label>
                <input
                  {...register("dateTime")}
                  type="datetime-local"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Venue Address
                </label>
                <input
                  {...register("venueAddress")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Event location"
                />
                {errors.venueAddress && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.venueAddress.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Organizer Information */}
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Organizer Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Organizer Name
                </label>
                <input
                  {...register("organizerName")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Who's organizing?"
                />
                {errors.organizerName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.organizerName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Email
                </label>
                <input
                  {...register("contactEmail")}
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="contact@example.com"
                />
                {errors.contactEmail && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.contactEmail.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Additional Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Category
                </label>
                <select
                  {...register("category")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Duration (hours)
                </label>
                <input
                  {...register("duration", { valueAsNumber: true })}
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="2"
                />
              </div>

              <div>
                <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Capacity
                </label>
                <input
                  {...register("capacity", { valueAsNumber: true })}
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="100"
                />
              </div>

              <div>
                <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  Ticket Link
                </label>
                <input
                  {...register("ticketLink")}
                  type="url"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="https://..."
                />
                {errors.ticketLink && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.ticketLink.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
