import { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";

import { RxCross1 } from "react-icons/rx";

const Container = styled.div`
	font-size: 1.25rem;
	border-radius: 1rem;
	background-color: ${(props) =>
		props.isFocus ? "var(--white-primary)" : "var(--gray-secondary)"};
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	padding: 0 0.5rem;
	&:hover {
		background-color: var(--white-primary);
	}
`;

const SearchInput = styled.input`
	background-color: transparent;
	font-size: 1rem;
	border: none;
	border-radius: 1rem;
	padding: 0.75rem;
	color: var(--black-primary);
	&:focus {
		outline: none;
	}
`;

const SearchBar = ({ handleChange, focus, setFocus }) => {
	const [containerFocus, setContainerFocus] = useState(focus);
	const inputRef = useRef(null);
	useEffect(() => {
		setContainerFocus(focus);
	}, [focus]);
	const handleClearInput = () => {
		setFocus(false);
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	};

	return (
		<Container isFocus={containerFocus}>
			<SearchInput
				ref={inputRef}
				type="text"
				placeholder="Search for an artist"
				onChange={handleChange}
				onFocus={() => setFocus(true)}
			/>
			{focus && <RxCross1 onClick={handleClearInput} />}
		</Container>
	);
};

export default SearchBar;
