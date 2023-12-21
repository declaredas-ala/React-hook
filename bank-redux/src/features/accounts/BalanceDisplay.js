import { useSelector } from "react-redux";




function BalanceDisplay() {
  const balance=useSelector(state=>state.account.balance);
  return <div className="balance">{balance}$</div>;
}

export default BalanceDisplay;
