import React, { useRef, useState, useEffect } from "react";

export default function UserefHook() {
  //eg1
  const inputRef = useRef();

  const focusinput = () => {
    inputRef.current.focus();
  };
  //eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  //eg3
  const [newProductImg, setNewProductImg] = useState(true);
  const [imageURL, setImageURL] = useState("");

  const inputImg = useRef(0);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewProductImg(false);
    }
  };

  return (
    <div>
      <h2>Useref hook</h2>
      {/* /eg1 */}
      <input type="text" placeholder="Name" ref={inputRef} />
      <button onClick={focusinput}>Focus</button>
      {/* eg2 */}

      <p>Timer : {sec}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>

      {/* /eg3 */}
      <input
        type="file"
        accept="image/*"
        ref={inputImg}
        hidden
        onChange={handleImage}
      />
      {newProductImg ? (
        <div className="container-img" onClick={() => inputImg.current.click()}>
          upload image
        </div>
      ) : (
        <img
          className="Image"
          onClick={() => inputImg.current.click()}
          src={imageURL}
        />
      )}
    </div>
  );
}
