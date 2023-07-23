
import { Component } from 'react'
// import css from './searchbar.module.css'

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
      <header class="searchbar">
        <form onSubmit={this.handleSubmit} class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            name="query"
            class="input"
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autofocus
            value={this.state.query}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}