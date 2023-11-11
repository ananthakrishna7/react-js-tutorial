import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Coimbatore", "Ooty", "London", "Tokyo", "Kyoto"];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    // fragment
    <>
      {" "}
      <h1>List Group</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" onClick={handleClick} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
