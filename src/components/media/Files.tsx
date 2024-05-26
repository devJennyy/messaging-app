import { FaFilePdf } from "react-icons/fa";
import { MdFileDownload, MdDelete } from "react-icons/md";

interface Props {
  fileTitle: string;
  fileSize: string;
  dateReceive: string;
}

const Files = ({ fileTitle, fileSize, dateReceive }: Props) => {
  return (
    <div className="w-full h-12 bg-[#F8F7F7] dark:bg-[#202020] dark:text-white/90 rounded-sm">
      <div className="flex flex-row justify-between items-center w-full h-full px-4">
        <div className="flex flex-row items-center gap-3">
          <FaFilePdf size={18} />
          <div className="flex flex-col text-left gap-1">
            <p className="text-[10px] text-[#272727] dark:text-white/90">{fileTitle}</p>
            <div className="flex flew-row gap-2">
              <p className="text-[9px] text-[#545454]/90 dark:text-white/50">{fileSize}</p>
              <p className="text-[9px] text-[#545454]/90 dark:text-white/50">{dateReceive}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <button>
            <MdFileDownload size={14} />
          </button>
          <button>
            <MdDelete size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Files;
