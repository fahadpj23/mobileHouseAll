import SideBar from "./sideBar";

const MainLayout = ({ children }: any) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;
