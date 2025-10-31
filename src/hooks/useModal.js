import { useState } from "react"

export const useModal = () => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState("i'm a modal");

    const handleModal = (content = false) => {
        setModal(!modal);

        if(content) {
          setModalContent(content)
        }
    } 
    return { modal, modalContent, handleModal };
}

