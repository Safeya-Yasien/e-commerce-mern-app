const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className=" px-6">
      <h2 className="text-white text-xl font-semibold mb-4 capitalize">
        {title}
      </h2>
    </div>
  );
};
export default PageTitle;
