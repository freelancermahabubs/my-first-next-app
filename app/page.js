"use client";
async function getData() {
  let res = await fetch("https://dummyjson.com/products");
  let json = await res.json();
  return json["products"];
}
import styles from "./page.module.css";

const Page = async () => {
  let products = await getData();
  return (
    <div>
      <button
        onClick={() => {
          alert("Hello");
        }}>
        Click
      </button>
      <h1 className={styles.myText}>This is my Home Page</h1>
      {products?.map((product, i) => {
        return (
          <div key={i}>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
