import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./TransactionItem.scss";

const TransactionItem = (props) => {
  return (
    <div className="history-item-container">
      <Popup
        trigger={
          <div
            className={
              props.item.type === "income"
                ? "history-item income  form-control"
                : "history-item expense  form-control"
            }
          >
            <span>{props.item.name}</span>
            <span>{props.item.amount}</span>
          </div>
        }
      >
        <div className="popup">
          <p>
            This is your: <strong>{props.item.type}</strong>
          </p>
          <p>
            You have
            <strong>
              {props.item.type === "income"
                ? ` received ${props.item.amount}€ from ${props.item.name}`
                : ` spent ${props.item.amount}€ on ${props.item.name}`}
            </strong>{" "}
          </p>
          <p>
            Your notice:
            <br /> <i> {props.item.notice}</i>
          </p>
        </div>
      </Popup>

      <button onClick={() => props.deleteTransaction(props.item.id)}>❌</button>
    </div>
  );
};

export default TransactionItem;
