import { Button } from "@/lib/fluid";
import { FaTrashAlt } from "react-icons/fa";
import { DeleteButtonProps } from "@/lib/types";
import { useTranslations } from 'next-intl';

const DeleteButton = ({ onClick, id }: DeleteButtonProps) => {
   const t = useTranslations('buttons');

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
      title={t('DeleteButton')}
    >
      <FaTrashAlt />
      <span className="sr-only">{t('DeleteButton')}</span>
    </Button>
  );
};

export default DeleteButton;
