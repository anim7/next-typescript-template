interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
