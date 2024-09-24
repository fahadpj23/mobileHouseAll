import SideBar from "./sideBar";

const MainLayout = ({ children }: any) => {
  return (
    <div className="flex h-screen w-screen">
      <SideBar />
      <div className="bg-grayBackground p-5 rounded-sm">
        <main>{children}</main>
      </div>
    </div>
  );
};
export default MainLayout;
