const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full flex items-center justify-center bg-[url('/pictures/playing-keyboard.jpg')] bg-cover">
      {children}
    </div>
  );
};

export default AuthLayout;
