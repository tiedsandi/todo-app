const Modal = ({ onCancel, onConfirm }) => {
  return (
    <>
      <div className='backdrop' onClick={onCancel} />
      <dialog open className='modal'>
        <p>are you sure?</p>
        <button className='btn btn--alt' onClick={onCancel}>
          Cancel
        </button>
        <button className='btn' onClick={onConfirm}>
          Confirm
        </button>
      </dialog>
    </>
  );
};

export default Modal;
