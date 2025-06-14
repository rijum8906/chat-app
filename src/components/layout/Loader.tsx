const Loader = () => {
  return (
    <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center p-4">
      <div className="h-9 w-9 animate-spin rounded-full border-4 border-t-transparent border-blue-500" />
    </div>
  );
};

export default Loader;
