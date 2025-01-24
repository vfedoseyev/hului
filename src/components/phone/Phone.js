import React from 'react';
import './Phone.css'

const Phone = () => {


    return (
        <div className='phone'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 11.6833V14.63C15.5001 14.841 15.4202 15.0441 15.2763 15.1985C15.1325 15.3528 14.9355 15.4469 14.725 15.4617C14.3608 15.4867 14.0633 15.5 13.8333 15.5C6.46917 15.5 0.5 9.53083 0.5 2.16667C0.5 1.93667 0.5125 1.63917 0.538333 1.275C0.553102 1.06454 0.647151 0.867509 0.801503 0.723674C0.955855 0.579839 1.15902 0.499905 1.37 0.5H4.31667C4.42003 0.499896 4.51975 0.538216 4.59644 0.607517C4.67313 0.676818 4.72133 0.772152 4.73167 0.875C4.75083 1.06667 4.76833 1.21917 4.785 1.335C4.95061 2.49077 5.29 3.61486 5.79167 4.66917C5.87083 4.83583 5.81917 5.035 5.66917 5.14167L3.87083 6.42667C4.97038 8.98871 7.01212 11.0305 9.57417 12.13L10.8575 10.335C10.91 10.2617 10.9865 10.2091 11.0737 10.1864C11.161 10.1637 11.2535 10.1723 11.335 10.2108C12.3892 10.7116 13.513 11.0501 14.6683 11.215C14.7842 11.2317 14.9367 11.25 15.1267 11.2683C15.2294 11.2789 15.3245 11.3271 15.3936 11.4038C15.4628 11.4805 15.501 11.5801 15.5008 11.6833H15.5Z" fill="#C0C2D7" />
            </svg>
            <a href="tel:+1234567890">Позвонить</a>
        </div>
    );
};

export default Phone;