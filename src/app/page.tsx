import Link from "next/link";
import "@/app/global.css";

export default function Page() {
  return (
    <html>
      <body className="grid place-content-center h-screen m-0">
        <Link href={"/en-US/docs"}>Docs</Link>
      </body>
    </html>
  );
}
