import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./TransactionItem.scss";

const TransactionItem = (props) => {
  return (
    <>
      <Popup
        trigger={
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
    </>
  );
};

export default TransactionItem;
