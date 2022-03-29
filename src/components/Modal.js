import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';
const Modal = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(store => store.modal);
    return (
        <aside className={isOpen ? `modal-container` : `modal-container d-none`}>
            <div className="modal">
                <h4>remove all items from your cart?</h4>
                <div className="btn-container">
                    <button onClick={() => {
                        dispatch(clearCart());
                        dispatch(closeModal())
                    }} type='button' className='btn confirm-btn'>confirm</button>
                    <button onClick={() => dispatch(closeModal())} type='button' className='btn clear-btn'>cancel</button>
                </div>
            </div>
        </aside>
    )
}

export default Modal