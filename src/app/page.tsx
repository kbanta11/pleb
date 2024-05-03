import { fetchMetadata } from "frames.js/next";
 
export async function generateMetadata() {
  return {
    title: "My Page",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/frames",
        process.env.NEXT_PUBLIC_HOST
          ? `https://${process.env.NEXT_PUBLIC_HOST}`
          : "http://localhost:3000"
      )
    ),
  };
}
 
export default function Page() {
  return <span>My existing page</span>;
}