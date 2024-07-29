
export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <div className="flex justify-center items-center h-auto overflow-hidden px-40 py-60">
      {children}
    </div>
    </>
    
  );
}