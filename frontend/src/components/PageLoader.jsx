const PageLoader = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">

        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

        <p className="text-sm text-gray-500">
          Loading...
        </p>

      </div>
    </div>
  );
};

export default PageLoader;