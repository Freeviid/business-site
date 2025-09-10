export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C9E4F7] to-[#E0C3FC] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-foreground font-medium">Loading...</p>
      </div>
    </div>
  )
}
