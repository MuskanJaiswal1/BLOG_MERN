import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://source.unsplash.com/random/1920x1080/?Id%20blog,flowers,sky,India,party"
          alt="postImg"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consec
          <div className="singlePostEdits">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Muskan</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio cum,
          ullam voluptate quaerat corrupti tempora? Amet laudantium aspernatur
          praesentium libero ea a natus impedit maxime modi aliquid, dolores
          quae temporibus doloremque commodi, tempora, ullam ad asperiores!
          Deserunt ullam facilis architecto?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio cum,
          ullam voluptate quaerat corrupti tempora? Amet laudantium aspernatur
          praesentium libero ea a natus impedit maxime modi aliquid, dolores
          quae temporibus doloremque commodi, tempora, ullam ad asperiores!
          Deserunt ullam facilis architecto?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio cum,
          ullam voluptate quaerat corrupti tempora? Amet laudantium aspernatur
          praesentium libero ea a natus impedit maxime modi aliquid, dolores
          quae temporibus doloremque commodi, tempora, ullam ad asperiores!
          Deserunt ullam facilis architecto?
          ullam voluptate quaerat corrupti tempora? Amet laudantium aspernatur
          praesentium libero ea a natus impedit maxime modi aliquid, dolores
          quae temporibus doloremque commodi, tempora, ullam ad asperiores!
          Deserunt ullam facilis architecto?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio cum,
          ullam voluptate quaerat corrupti tempora? Amet laudantium aspernatur
          praesentium libero ea a natus impedit maxime modi aliquid, dolores
          quae temporibus doloremque commodi, tempora, ullam ad asperiores!
          Deserunt ullam facilis architecto?
        </p>
      </div>
    </div>
  );
}
