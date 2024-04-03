"use client";

import Button from "./components/Button";
import Card from "./components/Card";

const cardData = [
  {
    image: "/assets/1.jpeg",
    title: "Neo Brutalism",
    description:
      "Neobrutalism is an aesthetic characterized by high contrast elements, bright colors, and bold shapes. It is often used to make a statement, as it is meant to be eye-catching and stand out to the viewer. It is also used in user interface and web design, with features such as vibrant colors and bold shapes. Neobrutalism can also be used in print design, with an example being a bold shape with a vibrant color fill applied to it.",
  },
  {
    image: "/assets/2.jpeg",
    title: "Neo Brutalism",
    description:
      "It is often used to make a statement, as it is meant to be eye-catching and stand out to the viewer. It is also used in user interface and web design, with features such as vibrant colors and bold shapes. Neobrutalism can also be used in print design, with an example being a bold shape with a vibrant color fill applied to it.",
  },
  {
    image: "/assets/3.jpeg",
    title: "Neo Brutalism",
    description:
      "It is also used in user interface and web design, with features such as vibrant colors and bold shapes. Neobrutalism can also be used in print design, with an example being a bold shape with a vibrant color fill applied to it.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24 gap-12 bg-lime-100">
      <h1 className="text-4xl font-bold font-mono">Neo Brutalism UI ✨</h1>
      <div className="flex flex-col justify-center items-left">
        <p className="text-4xl font-mono">Button</p>
        <div className="flex flex-row gap-2">
          <Button>Click Me!</Button>
          <Button>Satisfying!</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-mono">Card</p>
        <div className="flex flex-row items-center gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
