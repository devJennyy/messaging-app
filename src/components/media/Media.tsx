import { MdKeyboardArrowDown } from "react-icons/md";
import Files from "./Files";
import { IFileAttachment } from "../../interface/IFileAttachment";
import ImageCard from "./ImageCard";

const Media = () => {
  const fileAttachments: IFileAttachment[] = [
    {
      fileTitle: "The Chainsaw Man",
      fileSize: "313 KB",
      dateReceive: "22 Dec, 2022",
    },
    {
      fileTitle: "The Chainsaw Man",
      fileSize: "313 KB",
      dateReceive: "22 Dec, 2022",
    },
  ];
  const images = [
    {
      mediaImage: "images/power-1.gif",
    },
    {
      mediaImage: "images/power-2.gif",
    },
    {
      mediaImage: "images/power-3.gif",
    },
    {
      mediaImage: "images/power-4.gif",
    },
    {
      mediaImage: "images/power-5.gif",
    },
    {
      mediaImage: "images/power-6.gif",
    },
    {
      mediaImage: "images/power-7.gif",
    },
    {
      mediaImage: "images/power-8.gif",
    },
  ];
  return (
    <div className="flex flex-1 flex-col max-w-[340px] h-full gap-4 pl-4">
      <div className="flex flex-col justify-center items-center gap-3 pt-4">
        <div className="flex justify-center items-center w-28 h-28 bg-[#030812] rounded-full ">
          <img
            src="/images/power.jpg"
            className="object-cover w-24 h-24 rounded-full outline outline-[4px] outline-white"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-medium">Power</p>
          <p className="small-text">Last seen 8 minutes ago</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="medium-text">Attachments</p>
            <MdKeyboardArrowDown className="text-[#545454]" />
          </div>

          <div className="flex flex-col gap-1">
            {fileAttachments?.map((attachment) => {
              return (
                <Files
                  fileTitle={attachment.fileTitle}
                  fileSize={attachment.fileSize}
                  dateReceive={attachment.dateReceive}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="text-[12px] medium-text">Media</p>
            <MdKeyboardArrowDown className="text-[#545454]" />
          </div>

          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-4 gap-1">
              {images?.map((image) => {
                return <ImageCard mediaImage={image.mediaImage} />;
              })}
            </div>
            <ImageCard mediaImage="images/chainsawman.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
