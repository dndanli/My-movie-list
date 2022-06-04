import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { statuses } from "./statuses";
import { IoIosClose } from "react-icons/io";

type ListPopupProps = {
  className: string;
  togglePopup: any;
  cardData: {
    cardId: string;
    title: string;
    imagePath: string;
    mediaType: string;
    bannerPath: string;
  };
};

const ListPopup = ({ className, cardData, togglePopup }: ListPopupProps) => {
  const [dropdown, setDropdown] = useState(false);
  const [status, setStatus] = useState<string>("");

  const [user, setUser] = useState<any | undefined>();

  const { cardId, title, bannerPath, mediaType } = cardData;

  const selectStatus = (dropdownStatus: string) => {
    setStatus(dropdownStatus);
    setValue("status", dropdownStatus);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userObj = await axios.get("user/profile");
      setUser(userObj.data.user);
    };
    fetchUser();
  }, []);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    if (user !== undefined) {
      if (data?.score === "") {
        data.score = undefined;
      }
      axios.post("http://localhost:8000/user/list/addList", {
        user: user,
        apiId: cardId,
        title: title,
        listStatus: data?.status,
        mediaType: mediaType,
        score: data?.score,
        notes: data?.notes,
      });
    }
  };
  return (
    <div className={className}>
      <div className="list-form">
        <div className="close-wrapper">
          <IoIosClose className="close-icon" onClick={togglePopup} />
        </div>
        <div className="banner">
          <div className="banner">
            <img
              src={`https://image.tmdb.org/t/p/original/${bannerPath}`}
              alt={title}
            />
          </div>
          <h3 className="title">{title}</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Status</p>
          <input
            {...register("status", { required: true })}
            type="text"
            name="status"
            readOnly={true}
            placeholder="Status"
            value={status}
            onClick={() => {
              setDropdown(!dropdown);
            }}
          />
          {dropdown ? (
            <div className="status-container">
              <ul className="statuses-dropdown">
                {statuses.map((status, index) => {
                  return (
                    <li
                      onClick={() => {
                        selectStatus(status);
                        setDropdown(false);
                      }}
                      key={index}
                    >
                      {status}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          <p>Score</p>
          <input
            {...register("score", { required: false })}
            type="text"
            name="score"
            min={0}
            max={10}
            placeholder="Score"
          />

          <p>Notes</p>
          <textarea
            {...register("notes", { required: false })}
            name="notes"
            rows={2}
          ></textarea>

          <div>
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ListPopup;
