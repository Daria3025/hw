import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ text, index, onDelete, id, onEdit }) => {
  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleEditClick = () => {
    const newText = prompt('Edit todo');

    onEdit(id, newText);
  };

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{index + 1}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={handleDeleteClick}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
      <EditButton>
        <RiEdit2Line size={24} onClick={handleEditClick} />
      </EditButton>
    </TodoWrapper>
  );
};
