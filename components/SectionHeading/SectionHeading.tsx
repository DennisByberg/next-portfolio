import "./SectionHeading.scss";

type SectionHeadingProps = {
  children: React.ReactNode;
};

function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="section-heading-text">{children}</h2>;
}

export default SectionHeading;
