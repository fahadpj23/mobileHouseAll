const MainLayout = ({ children }: any) => {
  return (
    <div>
      <h1>header</h1>
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;
