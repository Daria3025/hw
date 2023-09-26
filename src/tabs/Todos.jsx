import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  onSubmit = newTodo => {
    this.setState(prev => ({ todos: [...prev.todos, newTodo] }));
  };

  onDelete = idToDelete => {
    this.setState(prev => ({
      todos: prev.todos.filter(({ id }) => id !== idToDelete),
    }));
  };

  onEdit = (idToEdit, newText) => {
    this.setState(prev => ({
      todos: prev.todos.map(item =>
        item.id === idToEdit ? { ...item, text: newText } : item
      ),
    }));
  };

  render() {
    const { onSubmit, state, onDelete, onEdit } = this;
    return (
      <>
        <SearchForm onSubmit={onSubmit} />
        <Grid>
          <GridItem>
            {state.todos.map(({ text, id }, index) => (
              <Todo
                index={index}
                key={id}
                text={text}
                id={id}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </GridItem>
        </Grid>
      </>
    );
  }
}
