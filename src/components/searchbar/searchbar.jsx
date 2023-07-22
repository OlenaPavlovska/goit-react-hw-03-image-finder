import propTypes from 'prop-types'
// import css from './searchbar.module.css'

export const Searchbar = ({ query, onSubmit, onChange })=>{
    
    return (


    <header class="searchbar">
        <form onSubmit={onSubmit} class="form">
            <button  type="submit" class="button">
                <span class="button-label">Search</span>
            </button>

                <input
                    name='query'
                    class="input"
                    onChange={onChange}
                type="text"
                autocomplete="off"
                    autofocus
                    value={query}
                placeholder="Search images and photos"
            />
        </form>
    </header>
    )
}

Searchbar.propTypes = {
query:propTypes.string.isRequired,
onChange:propTypes.func.isRequired,
onSubmit:propTypes.func.isRequired
}