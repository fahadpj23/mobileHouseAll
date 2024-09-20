import Header from "./header";

const MainLayout = ({ children }: any) => {
  return (
    <div className="p-3">
      <Header />
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;
