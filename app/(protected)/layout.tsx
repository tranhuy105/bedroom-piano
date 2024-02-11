import DashboardNavbar from "@/components/auth/DashboardNavbar";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full relative w-full">
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
