import { Button } from "@/lib/fluid";
import { FaTrashAlt } from "react-icons/fa";
import { Labels } from "@/lib/constants";
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
      title={Labels.DeleteButton}
    >
      <FaTrashAlt />
      <span className="sr-only">{Labels.DeleteButton}</span>
    </Button>
  );
};

export default DeleteButton;
