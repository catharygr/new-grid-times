export default function VisuallyHidden({ children, ...delegated }) {
  return <div {...delegated}>{children}</div>;
}
