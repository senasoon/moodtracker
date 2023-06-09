interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-[420px] m-auto flex flex-col justify-center items-center mt-32">
      {children}
    </div>
  );
};

export default Layout;
