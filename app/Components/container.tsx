const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={'max-w-7xl px-5 mx-auto h-full w-full ' + className}>
      {children}
    </div>
  );
};

export default Container;
