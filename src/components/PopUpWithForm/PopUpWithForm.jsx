import "./PopUpWithForm.css";
import PropTypes from "prop-types";
import { modalCloseBtn } from "../../Utils/constants";

const PopUpWithForm = ({ children, titleText, onClose, isOpen, onSubmit }) => {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{titleText}</h2>
        <button
          style={{
            backgroundImage: `url(${modalCloseBtn})`,
          }}
          type="button"
          className="modal__close-button"
          onClick={onClose}
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
};
PopUpWithForm.propTypes = {
  children: PropTypes.node.isRequired,
  titleText: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PopUpWithForm;
