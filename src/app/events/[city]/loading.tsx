import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
  return (
    <div className="flex justify-around space-x-3   w-4/6">
      <div className="flex-col space-y-4">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-white/[0.06] " />
        <Skeleton className="h-4 w-[250px] bg-white/[0.06]" />
        <Skeleton className="h-4 w-[200px] bg-white/[0.06]" />
      </div>
      <div className="flex-col space-y-4">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-white/[0.06] " />
        <Skeleton className="h-4 w-[250px] bg-white/[0.06]" />
        <Skeleton className="h-4 w-[200px] bg-white/[0.06]" />
      </div>
      <div className="flex-col space-y-4">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-white/[0.06] " />
        <Skeleton className="h-4 w-[250px] bg-white/[0.06]" />
        <Skeleton className="h-4 w-[200px] bg-white/[0.06]" />
      </div>
    </div>
  );
};

export default Loading;
