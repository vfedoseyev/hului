import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import Links from '../links/Links'
import Phone from '../phone/Phone'

const Footer = () => {
    return (
        <footer className="footer">
            <svg width="280" height="38" viewBox="0 0 280 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.7128 18.5212V29.4985C40.7128 34.1696 36.9354 37.9533 32.2718 37.9533H16.9753C15.0633 37.9533 13.5709 36.4118 13.5709 34.5433C13.5709 32.6282 15.1099 31.1334 16.9753 31.1334H30.453C32.3651 31.1334 33.8574 29.5919 33.8574 27.7234V18.3344C33.8574 17.26 33.3444 16.2323 32.505 15.5784L23.2711 8.61832C21.5456 7.31039 19.1206 7.31039 17.3951 8.61832L8.30113 15.485C7.36841 16.1856 6.80879 17.3067 6.80879 18.5212V34.59C6.80879 36.5052 5.26981 38 3.40439 38C1.49234 38 0 36.4585 0 34.59V18.8482C0 15.2981 1.67888 11.9816 4.47701 9.87954L6.85542 8.10449L14.6902 2.21882L15.5296 1.61156C18.421 -0.537185 22.3851 -0.537185 25.2765 1.61156L26.1159 2.21882L33.9507 8.1512L36.5156 10.1131C39.1272 12.0283 40.7128 15.2047 40.7128 18.5212Z" fill="#F4683F" />
                <path d="M20.3785 28.5175C18.4665 28.5175 16.8809 26.9293 16.8809 25.0141V20.81C16.8809 18.8948 18.4665 17.3066 20.3785 17.3066C22.2906 17.3066 23.8762 18.8948 23.8762 20.81V25.0141C23.8762 26.976 22.2906 28.5175 20.3785 28.5175Z" fill="white" />
                <path d="M229.493 30.6663C230.858 30.6663 231.965 29.5579 231.965 28.1906C231.965 26.8233 230.858 25.7148 229.493 25.7148C228.128 25.7148 227.021 26.8233 227.021 28.1906C227.021 29.5579 228.128 30.6663 229.493 30.6663Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M188.033 22.959V10.1133C188.033 8.57176 189.292 7.31055 190.831 7.31055C191.624 7.31055 192.324 7.63752 192.837 8.15135C193.35 8.66518 193.676 9.36587 193.676 10.16V17.6338V21.0438V21.978C193.816 25.2011 195.635 26.6025 197.827 26.6025C200.019 26.6025 201.791 25.2478 201.977 22.1182V20.9037V17.6338V10.16C201.977 8.61848 203.236 7.35726 204.775 7.35726C205.568 7.35726 206.268 7.68424 206.781 8.19807C207.294 8.7119 207.62 9.41257 207.62 10.2067V23.0524V23.4261C207.62 27.2097 203.236 30.7598 197.827 30.7598C192.557 30.7598 188.22 27.3499 188.08 23.6597L188.033 22.959ZM183.603 7.77766H168.213C167.187 7.77766 166.348 8.61848 166.348 9.64613C166.348 10.6738 167.187 11.5146 168.213 11.5146H173.11V27.817C173.11 29.3585 174.369 30.6197 175.908 30.6197C177.447 30.6197 178.706 29.3585 178.706 27.817V11.5146H183.603C184.629 11.5146 185.468 10.6738 185.468 9.64613C185.468 8.61848 184.629 7.77766 183.603 7.77766ZM226.974 7.77766H211.584C210.558 7.77766 209.719 8.61848 209.719 9.64613C209.719 10.6738 210.558 11.5146 211.584 11.5146H216.481V27.817C216.481 29.3585 217.74 30.6197 219.279 30.6197C220.818 30.6197 222.077 29.3585 222.077 27.817V11.5146H226.974C228 11.5146 228.839 10.6738 228.839 9.64613C228.839 8.61848 228 7.77766 226.974 7.77766ZM256.028 13.3364C256.028 15.9055 254.069 18.0542 251.411 18.7082C256.354 19.549 256.074 23.9399 256.028 23.9399V27.817C256.028 29.3585 254.769 30.6197 253.23 30.6197C251.691 30.6197 250.432 29.3585 250.432 27.817V23.9399C250.432 23.9399 250.758 20.8102 246.607 20.8102H243.063V27.817C243.063 29.3585 241.804 30.6197 240.265 30.6197C238.726 30.6197 237.467 29.3585 237.467 27.817V10.5804C237.467 9.03888 238.726 7.77766 240.265 7.77766H249.825C250.338 7.77766 250.898 7.82437 251.411 7.96451C254.069 8.61847 256.028 10.7672 256.028 13.3364ZM243.063 17.5871H245.861H247.493C249.219 17.5871 250.711 16.3726 250.898 14.6443V14.3173C250.898 14.0838 250.898 13.8969 250.851 13.6633C250.525 12.0751 249.079 11.0008 247.493 11.0008H244.136H243.063V17.5871ZM260.412 10.1133V22.959L260.459 23.6597C260.599 27.3499 264.936 30.7598 270.206 30.7598C275.615 30.7598 279.999 27.2097 279.999 23.4261V23.0524V10.2067C279.999 9.41257 279.673 8.7119 279.16 8.19807C278.647 7.68424 277.947 7.35726 277.154 7.35726C275.615 7.35726 274.356 8.61848 274.356 10.16V17.6338V20.9037V22.1182C274.17 25.2478 272.397 26.6025 270.206 26.6025C268.014 26.6025 266.195 25.2011 266.055 21.978V21.0438V17.6338V10.16C266.055 9.36587 265.729 8.66518 265.216 8.15135C264.703 7.63752 264.003 7.31055 263.21 7.31055C261.671 7.31055 260.412 8.57176 260.412 10.1133Z" fill="#F4683F" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M94.7625 11.6079C93.4567 9.73939 91.4514 8.33805 89.1196 7.7775C88.0936 7.45052 86.6479 7.26367 85.1089 7.26367C83.57 7.26367 82.1709 7.45052 81.0983 7.7775C78.7665 8.33805 76.8078 9.73939 75.4554 11.6079C74.3361 13.1493 73.7299 15.0645 73.7299 17.1666V20.7634C73.7299 22.8187 74.3828 24.7339 75.4554 26.3221C76.7145 28.1438 78.58 29.4517 80.7718 30.059C81.8445 30.4327 83.3834 30.713 85.1089 30.713C86.8344 30.713 88.3734 30.4794 89.446 30.059C91.6379 29.4517 93.5033 28.0971 94.7625 26.3221C95.8817 24.7339 96.5346 22.8654 96.5346 20.7634V17.1666C96.5346 15.0645 95.8817 13.1493 94.7625 11.6079ZM90.472 16.7462V21.0904C90.472 22.4917 89.959 23.7996 89.1662 24.8273L88.8864 25.1076C86.8811 27.303 83.3834 27.303 81.3781 25.1076L81.0983 24.8273C80.2588 23.7996 79.7925 22.4917 79.7925 21.0904V16.7462C79.7925 15.3448 80.3055 14.0369 81.0983 13.0092C81.0983 13.0092 81.0983 12.9625 81.1449 12.9625C83.1969 10.4401 87.0676 10.4401 89.1196 12.9625C89.1196 12.9625 89.1196 13.0092 89.1662 13.0092C89.959 14.0369 90.472 15.3448 90.472 16.7462ZM49.9922 10.3933V28.0036C49.9922 29.4517 51.1581 30.6195 52.6038 30.6195H61.3713C66.6877 30.6195 71.0248 26.322 71.0248 20.9502V17.3534C71.0248 12.0282 66.7343 7.68403 61.3713 7.68403H52.6038C51.1581 7.77746 49.9922 8.94526 49.9922 10.3933ZM58.9462 27.3497H55.5885V11.0473H58.9462C62.2573 11.0473 64.9156 13.7098 64.9156 17.0264V21.3706C64.9156 24.6871 62.2573 27.3497 58.9462 27.3497ZM136.688 30.6196C135.149 30.6196 133.89 29.3584 133.89 27.8169V10.5803C133.89 9.03876 135.149 7.77755 136.688 7.77755C138.227 7.77755 139.486 9.03876 139.486 10.5803V27.8169C139.486 29.4051 138.227 30.6196 136.688 30.6196ZM156.135 18.8015L162.664 26.7892C163.457 27.8169 163.41 29.2649 162.431 30.1058C161.452 30.9466 159.959 30.8064 159.12 29.7788L152.404 21.5575L150.819 19.689V27.8169C150.819 29.3584 149.56 30.6196 148.021 30.6196C146.482 30.6196 145.223 29.3584 145.223 27.8169V10.5803C145.223 9.03876 146.482 7.77755 148.021 7.77755C149.56 7.77755 150.819 9.03876 150.819 10.5803V17.9607L151.985 16.5126L158.187 8.66507C158.98 7.63741 160.472 7.49728 161.498 8.29138C162.524 9.08548 162.664 10.5802 161.871 11.6079L156.135 18.8015ZM128.293 10.9539V11.1408V11.4211V28.5176C128.293 29.6854 127.361 30.6196 126.195 30.6196C125.029 30.6196 124.096 29.6854 124.096 28.5176V14.2238V12.6823L123.583 13.9435L123.537 14.0369L117.661 27.4432C117.661 27.4899 117.614 27.5833 117.567 27.63C117.101 28.7511 115.888 29.5452 114.536 29.4518C113.51 29.4051 112.577 28.8445 112.064 28.0504L112.064 28.0504C111.924 27.8635 111.784 27.6767 111.691 27.4432L105.815 14.0369L105.768 13.9435L105.255 12.6823V14.2238V28.5176C105.255 29.6854 104.323 30.6196 103.157 30.6196C101.991 30.6196 101.058 29.6854 101.058 28.5176V11.4211C101.058 11.3439 101.072 11.2809 101.085 11.2243C101.095 11.1781 101.105 11.1361 101.105 11.0941C101.058 11.0474 101.058 11.0007 101.058 10.9539C100.965 9.31903 102.597 7.91768 104.696 7.77755H104.742H105.116H105.302H105.442C106.188 7.82426 106.841 8.05781 107.401 8.38479C108.054 8.75849 108.473 9.22561 108.8 9.83286V9.87958C108.8 9.90293 108.811 9.92629 108.823 9.94964C108.835 9.97299 108.846 9.99635 108.846 10.0197L114.536 23.426L114.676 23.7063L114.816 23.426L120.505 10.0197C120.505 9.97299 120.505 9.92629 120.552 9.87958V9.83286C120.878 9.22561 121.298 8.71178 121.951 8.38479C122.511 8.05781 123.164 7.82426 123.91 7.77755H124.05H124.236H124.609H124.656C126.754 7.91768 128.387 9.31903 128.293 10.9539Z" fill="white" />
            </svg>
            <nav>
                <Link to="/catalog">Каталог</Link>
                <div className='nav__link'>
                    <HashLink to="/#faq">Частые вопросы</HashLink>
                    <HashLink to="/#services">Сотрудничество</HashLink>
                </div>
                <Phone />
                <Links />
            </nav>
        </footer>
    )
}

export default Footer;