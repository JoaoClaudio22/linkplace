export default function ShowImage({ urlImg }) {
  return (
    <>
      <img
        className="rounded h-1/6 w-10/12 m-auto md:w-5/12 md:h-1/4"
        src={urlImg}
        alt=""
      />
    </>
  );
}
