import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-[400px] w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-1/4" />
        </div>
      ))}
    </div>
  );
}
