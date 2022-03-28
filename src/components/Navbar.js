import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Navbar = () => {
    const amount = useSelector(store => store.cart.amount)
    return (
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <AiOutlineShoppingCart style={{ fontSize: '30px' }} />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar