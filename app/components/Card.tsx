const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-pink-100 w-80 h-full border-black border-2 rounded-md bg-white shadow-[8px_8px_0px_-1px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_-1px_rgba(0,0,0,1)] hover:transition-all active:translate-x-2 active:translate-y-2 active:shadow-[0px_0px_0px_-1px_rgba(0,0,0,0)] active:transition-all">
    <a className="block cursor-pointer">
      <article className="w-full h-full">
        <div className="px-6 py-5 text-left h-full">
          <h1 className="text-3xl mb-4 font-mono">{title}</h1>
          <p className="text-2xl mb-4 line-clamp-4 font-pen">{description}</p>
        </div>
      </article>
    </a>
  </div>
);

export default Card;
