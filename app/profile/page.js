import sytles from "../page.module.css";
const Page = () => {
  return (
    <div>
      <h1 className="global-text ">This is Profile Page</h1>
      <h1 className={sytles.myHeadline}>This is Profile Page</h1>
      <img src="images/profile.jpg" />
      <img src="images/MR..png" />
    </div>
  );
};

export default Page;
