import React from 'react';
import './Search.css'; // Файл для стилей

const SearchButton = ({ onClick }) => {
    return (
        <button className="search-button" onClick={onClick}>
            <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.033 14.617L20.316 18.899L18.901 20.314L14.619 16.031C13.0257 17.3082 11.044 18.0029 9.00195 18C4.03395 18 0.00195312 13.968 0.00195312 9C0.00195312 4.032 4.03395 0 9.00195 0C13.97 0 18.002 4.032 18.002 9C18.0049 11.042 17.3102 13.0237 16.033 14.617ZM14.027 13.875C15.2961 12.5699 16.0048 10.8204 16.002 9C16.002 5.132 12.869 2 9.00195 2C5.13395 2 2.00195 5.132 2.00195 9C2.00195 12.867 5.13395 16 9.00195 16C10.8224 16.0029 12.5718 15.2941 13.877 14.025L14.027 13.875Z"
                    fill="white"
                />
            </svg>
            <span>Поиск по названию</span>
        </button>
    );
};

export default SearchButton;
