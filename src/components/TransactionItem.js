const TransactionItem = (props) => {
  return (
    <div
      className={
        props.item.type === "income"
          ? "history-item income"
          : "history-item expense"
      }
    >
      <span>{props.item.name}</span>
      <span>{props.item.amount}</span>
    </div>
  );
};

export default TransactionItem;
