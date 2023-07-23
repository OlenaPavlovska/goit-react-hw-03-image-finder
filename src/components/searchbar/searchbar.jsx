
import { Component } from 'react'
import css from './searchbar.module.css'

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <input 
            name="query"
           className={css.input}
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autofocus
            value={this.state.query}
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit" >
            <span>Search</span>
          </button>
        </form>
      </header>
    );
  }
}