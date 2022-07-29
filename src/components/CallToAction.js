export default function CallToAction({ title, text }) {
  return (
    <div className="mt-4 ">
      <h1 className="text-4xl font-sans font-bold">{title}</h1>
      <p className=" text-2xl font-sans">{text}</p>
    </div>
  );
}
