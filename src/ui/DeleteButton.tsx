import { Button } from "@/lib/fluid";
import { FaTrashAlt } from "react-icons/fa";

import { DeleteButtonProps } from "@/lib/types";

const DeleteButton = ({ onClick, id }: DeleteButtonProps) => {
  return (
    <Button
      onClick={() => onClick(id)}
      btnBackground="danger"
      btnColor="light"
      outline
      outlineColor="light"
      hoverScale
      layout="circle"
      size="md"
      title="Delete this image?"
    >
      <FaTrashAlt />
      <span className="sr-only">Delete Item</span>
    </Button>
  );
};

export default DeleteButton;
