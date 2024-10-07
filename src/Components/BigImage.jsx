import bigiImageArray from "./BigiImageArray";

export default function BigiImage() {
  const bigImage = bigiImageArray.map((image) => (
    <div className="big-image" key={image.id}>
      <img src={image.image} alt="big-image" />
    </div>
  ));
  return <div>{bigImage}</div>;
}
