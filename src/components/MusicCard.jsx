import Tooltip from "@mui/material/Tooltip";

const MusicCard = ({ id, image, title, likes, follows, toolTipValue }) => {
  console.log(follows);
  return (
    <>
      {toolTipValue ? (
        <Tooltip title={toolTipValue + " Songs"} arrow placement="top">
          <div className="w-[170px] bg-dark text-light">
            <div className="rounded-xl ">
              <img
                src={image}
                alt={title}
                className="rounded-tl-xl rounded-tr-xl h-[180px] w-full"
              />
              <div className="bg-light h-10 flex items-center rounded-bl-xl rounded-br-xl pl-2">
                <div className="py-2 px-4 bg-dark text-light h-6 rounded-xl flex justify-center items-center text-sm">
                  {follows && <p>{follows} Follows</p>}
                  {likes && <p>{likes} Likes</p>}
                </div>
              </div>
            </div>
            <div className="pt-3 px-1">{title}</div>
          </div>
        </Tooltip>
      ) : (
        <div className="w-[170px] bg-dark text-light">
          <div className="rounded-xl ">
            <img
              src={image}
              alt={title}
              className="rounded-tl-xl rounded-tr-xl h-[180px] w-full"
            />
            <div className="bg-light h-10 flex items-center rounded-bl-xl rounded-br-xl pl-2">
              <div className="py-2 px-4 bg-dark text-light h-6 rounded-xl flex justify-center items-center text-sm">
                {follows && <p>{follows} Follows</p>}
                {likes && <p>{likes} Likes</p>}
              </div>
            </div>
          </div>
          <div className="pt-3 px-1">{title}</div>
        </div>
      )}
    </>
  );
};

export default MusicCard;
