import MainPortal from "./MainPortal";
import { ModalBG, ModalContainer, CloseIcon } from "../../styles/components";

export const VideoModal = ({ video, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <MainPortal>
          <ModalBG onClick={onClose}>
            <ModalContainer>
              <CloseIcon size="2em" onClick={onClose} />
              <iframe
                frameBorder="0"
                title="trailer"
                allowFullScreen="allowfullscreen"
                src={`https://www.youtube.com/embed/${video}`}
              />
            </ModalContainer>
          </ModalBG>
        </MainPortal>
      )}
    </>
  );
};
