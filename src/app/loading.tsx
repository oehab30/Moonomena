// app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />
      <p className="text-sm text-gray-500">Loading, please wait…</p>
    </div>
  );
}
