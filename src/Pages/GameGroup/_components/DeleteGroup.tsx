import { Button, Modal, Spin } from "antd";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { baseUrl } from "../../../_functions/getData";
import axios from "axios";

const DeleteGroup = ({group,refetch}: {group: string,refetch:Function}) => {
  const [open, setOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const deleteFunc = async () => {
    let h = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("playerToken")}`,
      },
    };
    let url = `${baseUrl}/api/groups/${group}`;
    setIsSubmit(true);
    let resp = await axios.delete(url, h);
    refetch()
    console.log("🚀 ~ deleteFunc ~ resp:", resp)
    setIsSubmit(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };



  return (
    <>
      <button type="button" onClick={()=> setOpen(true)} className="bg-red-500 h-full text-white p-1 rounded-md ">
        <Trash2 size={15} />
      </button>
      <Modal
        open={open}
        title="مسح المجموعة"
        onCancel={handleCancel}
        footer={false}
      >
          <Button disabled={isSubmit} className="bg-red-500" key="submit" type="primary" onClick={deleteFunc}>
             تأكيد المسح
             {isSubmit && <Spin size="small" />}
          </Button>
      </Modal>
    </>
  );
};

export default DeleteGroup;
