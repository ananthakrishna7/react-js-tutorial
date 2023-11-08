function ListGroup() {
  const items = ["New York", "Coimbatore", "Ooty", "London", "Tokyo", "Kyoto"];

  return (
    <>
      {" "}
      // fragment
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
