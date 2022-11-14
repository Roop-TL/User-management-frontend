import Navbar from "../components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>TLUsers</title>
      </head>
      <body style={{ height: "90vh" }}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
