import smallImageArray from "./SmallImageArray";
import SmallImageOnClick from "./SmallOnlick";
export default function SmallImage() {
  const smallImage = smallImageArray.map((images) => {
    return (
      <div className="small-image" key={images.id} onClick={SmallImageOnClick}>
        <img src={images.image} alt="small-image" />;
      </div>
    );
  });

  return <div>{smallImage}</div>;
}
