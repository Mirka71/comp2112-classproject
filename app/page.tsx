import Image from "next/image";

export default function Home() {
  // every react component must have 1 return to send the JSX to the DOM
  return (
    // can only include one parent element, if you have multiple DOM elements you have to wrap it with some sort of html element to show that it's inside. (here i wrapped it with a main element) and now there's only one parent element.
    <main className="p-10">
  <h1 className="text-3xl">COMP2112 Class Site</h1>
  <p>This site is built with Next.js</p>
  </main>
  );
}