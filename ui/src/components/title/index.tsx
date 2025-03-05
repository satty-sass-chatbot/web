interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-4xl font-bold text-center mt-4">{children}</h1>;
};

export default Title;
