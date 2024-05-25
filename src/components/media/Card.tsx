interface Props {
mediaImage: string;
}

const Media = ({mediaImage} : Props) => {
  return (
    <div className="w-full h-[75px] rounded-md">
      <img src={mediaImage} className="object-cover w-full h-full rounded-md"/>
    </div>
  );
};

export default Media;
