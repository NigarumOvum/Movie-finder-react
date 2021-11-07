import React from 'react';
import './SearchBox.css'

const SearchBox = (props) => {
	return (
		<div className='col col-sm-12'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;