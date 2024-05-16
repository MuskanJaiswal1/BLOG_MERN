import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="PostImg"
        src="https://source.unsplash.com/random/1920x1080/?Id%20flowers,scenery,garden,leaves"
        alt="PostImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit title</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        voluptatum molestiae saepe, porro corporis impedit cum, consequatur
        voluptas mollitia similique harum quod nihil deleniti ullam placeat sint
        dolore delectus suscipit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        voluptatum molestiae saepe, porro corporis impedit cum, consequatur
        voluptas mollitia similique harum quod nihil deleniti ullam placeat sint
        dolore delectus suscipit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        voluptatum molestiae saepe, porro corporis impedit cum, consequatur
        voluptas mollitia similique harum quod nihil deleniti ullam placeat sint
        dolore delectus suscipit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        voluptatum molestiae saepe, porro corporis impedit cum, consequatur
        voluptas mollitia similique harum quod nihil deleniti ullam placeat sint
        dolore delectus suscipit.
      </p>
    </div>
  );
}
