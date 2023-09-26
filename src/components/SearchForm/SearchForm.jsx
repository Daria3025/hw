import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { nanoid } from 'nanoid';

export class SearchForm extends Component {
  initialState = {
    text: '',
  };
  state = this.initialState;

  handleChange = ({ target: { value } }) => {
    this.setState({ text: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      text: this.state.text,
      id: nanoid(),
    };
    this.props.onSubmit(newTodo);
    this.setState(this.initialState);
  };

  render() {
    const {
      state: { text },
      handleChange,
      handleSubmit,
    } = this;
    return (
      <SearchFormStyled onSubmit={handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={text}
          onChange={handleChange}
        />
      </SearchFormStyled>
    );
  }
}
