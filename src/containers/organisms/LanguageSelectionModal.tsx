import { Modal } from "antd";
import React from "react";

interface modalProps {
  showModal: boolean;
  setShowModal: Function;
}

function LanguageSelectionModal(props: modalProps) {
  const closeModal = () => {
    props.setShowModal(false);
  };
  return (
    <Modal
      title={
        <span className="text-sm text-center w-full">Select Language</span>
      }
      visible={props.showModal}
      onCancel={closeModal}
      centered={true}
      bodyStyle={{ padding: 0, borderRadius: "5rem" }}
      // style={{ width: "80rem" }}
      okText="Save Changes"
      okButtonProps={{ size: "small", className: "text-xxxs" }}
      cancelButtonProps={{ size: "small", className: "text-xxxs" }}
      className="w-1/2 overflow-hidden rounded-lg"
      // centered
    >
      <div className="px-20 h-64 flex align-middle flex-col justify-center">
        <div className="flex justify-between py-6 ">
          <p className="cursor-pointer hover:bg-gray-200 rounded p-2">
            English
          </p>
          <p className="cursor-not-allowed hover:bg-red-200 rounded p-2">
            Sinhala
          </p>
          <p className="cursor-not-allowed hover:bg-red-200 rounded p-2">
            Tamil
          </p>
          <p className="cursor-not-allowed hover:bg-red-200 rounded p-2">
            Hindi
          </p>
        </div>
        <div className="flex justify-between py-6 ">
          <p className="cursor-not-allowed hover:bg-red-200 rounded p-2">
            Mandarin
          </p>
          <p className="cursor-not-allowed hover:bg-red-200 rounded p-2">
            German
          </p>
          <p className="cursor-not-allowed hover:bg-red-200 rounded p-2">
            Arabic
          </p>
          <p className="cursor-not-allowed hover:bg-red-200 rounded p-2">
            Italian
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default LanguageSelectionModal;
