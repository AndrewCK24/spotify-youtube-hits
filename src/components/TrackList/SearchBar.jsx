import styled from "@emotion/styled";

const SearchInput = styled.input`
	background-color: var(--gray-secondary);
	border: none;
	border-radius: 1rem;
	padding: 0.75rem;
	color: var(--black-primary);
	&:hover,
	&:focus {
		background-color: var(--white-primary);
		outline: none;
	}
`;

const SearchBar = ({handleChange, setFocus}) => {
	return (
			<SearchInput
				type="text"
				placeholder="Search for an artist"
				onChange={handleChange}
				onFocus={() => setFocus(true)}
        // onBlur={() => setFocus(false)}
			/>
	);
};

export default SearchBar;
