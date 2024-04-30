import { Box } from "@mui/material";
import { createPortal } from "react-dom";

const modalRootElement = document.getElementById('modal');

const Modal = ({ children, visible, onCloseModal }) => {

    const onContentClick = (e) => {
        e.stopPropagation();
    };

    const content = (
        <Box
            onClick={onCloseModal}
            sx={{
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(26, 26, 26, 80%)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box onClick={onContentClick}
                sx={{
                width: '200px',
                padding: '30px',
                backgroundColor: 'white'
            }}>
                { children }
            </Box>
        </Box>
    );

    return visible ? createPortal(content, modalRootElement) : null;
};

export default Modal;
