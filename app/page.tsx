import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold font-mono">Hello, world!</h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl italic font-pen">
          We are extremely proud and protective of our active & thriving
          community.
        </p>
        <div className="flex flex-row gap-12">
          <Button className="hover-3d bg-lime-100 items-center rounded-md m-2 p-2">
            Ask Me Anything
          </Button>
          <Button className="hover-3d bg-lime-100 items-center rounded-md m-2 p-2">
            Learn More...
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-12">
        <Card
          title="Neo Brutallism"
          description="Neobrutalism is an aesthetic characterized by high contrast
      elements, bright colors, and bold shapes. It is often used to
      make a statement, as it is meant to be eye-catching and stand
      out to the viewer. It is also used in user interface and web
      design, with features such as vibrant colors and bold shapes.
      Neobrutalism can also be used in print design, with an example
      being a bold shape with a vibrant color fill applied to it."
        />
        <Card
          title="Neo Brutallism"
          description="Neobrutalism is an aesthetic characterized by high contrast
      elements, bright colors, and bold shapes. It is often used to
      make a statement, as it is meant to be eye-catching and stand
      out to the viewer. It is also used in user interface and web
      design, with features such as vibrant colors and bold shapes.
      Neobrutalism can also be used in print design, with an example
      being a bold shape with a vibrant color fill applied to it."
        />
        <Card
          title="Neo Brutallism"
          description="Neobrutalism is an aesthetic characterized by high contrast
      elements, bright colors, and bold shapes. It is often used to
      make a statement, as it is meant to be eye-catching and stand
      out to the viewer. It is also used in user interface and web
      design, with features such as vibrant colors and bold shapes.
      Neobrutalism can also be used in print design, with an example
      being a bold shape with a vibrant color fill applied to it."
        />
      </div>
    </main>
  );
}
