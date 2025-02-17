import React, { useRef, useEffect, useState } from 'react';
import './SearchBar.css'; // Файл для стилей

const SearchBar = () => {
    const [showForm, setShowForm] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const formRef = useRef(null);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setShowForm(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={formRef}>
            {!showForm ? (
                <button className="search-button" onClick={toggleForm}>
                    <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.033 14.617L20.316 18.899L18.901 20.314L14.619 16.031C13.0257 17.3082 11.044 18.0029 9.00195 18C4.03395 18 0.00195312 13.968 0.00195312 9C0.00195312 4.032 4.03395 0 9.00195 0C13.97 0 18.002 4.032 18.002 9C18.0049 11.042 17.3102 13.0237 16.033 14.617ZM14.027 13.875C15.2961 12.5699 16.0048 10.8204 16.002 9C16.002 5.132 12.869 2 9.00195 2C5.13395 2 2.00195 5.132 2.00195 9C2.00195 12.867 5.13395 16 9.00195 16C10.8224 16.0029 12.5718 15.2941 13.877 14.025L14.027 13.875Z"
                            fill="#C0C2D7"
                        />
                    </svg>
                    Поиск по названию
                </button>
            ) : (
                <div className='searchForm'>
                    <input className='searchForm__input' value={searchValue} onChange={handleSearchChange}></input>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_102_4571)">
                            <path d="M15.0271 13.8475L18.5963 17.4158L17.4171 18.595L13.8488 15.0258C12.5211 16.0901 10.8696 16.669 9.16797 16.6666C5.02797 16.6666 1.66797 13.3066 1.66797 9.16663C1.66797 5.02663 5.02797 1.66663 9.16797 1.66663C13.308 1.66663 16.668 5.02663 16.668 9.16663C16.6704 10.8683 16.0915 12.5197 15.0271 13.8475ZM13.3555 13.2291C14.4131 12.1415 15.0037 10.6836 15.0013 9.16663C15.0013 5.94329 12.3905 3.33329 9.16797 3.33329C5.94464 3.33329 3.33464 5.94329 3.33464 9.16663C3.33464 12.3891 5.94464 15 9.16797 15C10.685 15.0023 12.1429 14.4117 13.2305 13.3541L13.3555 13.2291Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_102_4571">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <button className="search-close" onClick={() => setShowForm(false)}>×</button>
                </div>
            )}
        </div>
    );
};

export default SearchBar;