// Share.jsx
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@material-ui/icons";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [showEmotionPicker, setShowEmotionPicker] = useState(false);

  const emojiList = ["😄", "😍", "😂", "😊", "😎", "😢", "😜", "😇", "🥰", "🤔", "😴", "🥳", "🤣", "😋", "🥺", "😌", "🙌", "❤️", "👍", "👏", "👀", "🙏", "🎉", "🎶", "🍀"];

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmotionClick = (selectedEmotion) => {
    desc.current.value += selectedEmotion;
    setShowEmotionPicker(false);
  };

  return (
    <div className="share-container"> {/* Adicione este contêiner */}
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src={user.profilePicture ? `${PF}${user.profilePicture}` : `${PF}person/noAvatar.jpg`} alt="" />
            <input placeholder="Escreva o que seu animalzinho está pensando" className="shareInput" ref={desc} />
          </div>
          <hr className="shareHr" />
          {file && (
            <div className="shareImgContainer">
              <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
              <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
            </div>
          )}

          <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Foto ou Video</span>
                <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
              </label>
              <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Room htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Localização</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                <span className="shareOptionText" onClick={() => setShowEmotionPicker(!showEmotionPicker)}>
                  Sentimentos
                </span>
                {showEmotionPicker && (
                  <div className="emotionPicker">
                    <h3>Escolha um sentimento:</h3>
                    <div className="emojiList">
                      {emojiList.map((emoji, index) => (
                        <span key={index} onClick={() => handleEmotionClick(emoji)}>
                          {emoji}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button className="shareButton" type="submit">
                Compartilhar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Share;
