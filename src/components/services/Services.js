import React from 'react';
import './Services.css';

const Services = ({ isOpen, toggleMenu }) => {
    return (
        <div className='services__container'>
            <div className='services__card'>
                <svg width="45" height="31" viewBox="0 0 45 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4464 0.132664C20.0906 0.489034 18.9316 1.71218 18.6267 3.10842C18.5073 3.65514 18.5655 4.554 18.7544 5.07959C18.8303 5.29115 18.8793 5.47727 18.8632 5.49314C18.8471 5.50901 18.5229 5.59534 18.1428 5.68512C15.5888 6.2879 12.7476 7.69604 10.7352 9.35637C8.65743 11.0706 7.08955 13.0511 5.90543 15.4568C4.97135 17.3548 4.33736 19.5144 4.181 21.3313L4.12463 21.9872H0L0.0474984 23.2594C0.0808614 24.1519 0.150309 24.7374 0.280337 25.2215C1.02486 27.9934 3.23498 30.1156 6.14081 30.8487C6.7014 30.9902 7.76392 31 22.5 31H38.2596L39.0059 30.8049C41.3561 30.1907 43.2361 28.646 44.2455 26.4997C44.7297 25.4703 44.8989 24.6947 44.9525 23.2594L45 21.9872H40.8754L40.819 21.3313C40.5431 18.126 38.912 14.3454 36.6798 11.7379C34.1381 8.76869 30.8394 6.69921 27.1576 5.76369C26.6046 5.6232 26.1421 5.4984 26.1298 5.48632C26.1175 5.47416 26.1697 5.29115 26.2456 5.07959C26.4345 4.554 26.4927 3.65514 26.3733 3.10842C25.8949 0.917075 23.6412 -0.444152 21.4464 0.132664ZM23.1169 2.75542C23.5085 2.95171 23.817 3.44806 23.817 3.88188C23.817 4.51933 23.1488 5.1692 22.4935 5.1692C22.0954 5.1692 21.5845 4.85552 21.369 4.47888C21.136 4.07154 21.1331 3.70603 21.3596 3.26988C21.6841 2.64511 22.4496 2.42104 23.1169 2.75542ZM24.1496 7.84758C28.8029 8.34444 33.0142 10.8398 35.6116 14.6395C36.2515 15.5756 37.1579 17.3851 37.4992 18.408C37.808 19.3336 38.0958 20.6015 38.1794 21.4051L38.24 21.9872C27.7467 21.9847 17.2534 21.9848 6.76005 21.9872L6.82063 21.4051C6.98129 19.8607 7.5043 18.1414 8.30949 16.5106C9.47869 14.1426 11.0367 12.32 13.289 10.6854C14.2413 9.99425 16.3687 8.9229 17.5395 8.5448C19.6368 7.86742 22.0003 7.61816 24.1496 7.84758ZM42.123 24.7687C42.0924 24.8755 41.9254 25.2538 41.7519 25.6096C41.1107 26.9237 39.6697 28.0171 38.1718 28.326C37.2484 28.5164 7.75163 28.5164 6.82818 28.326C5.33027 28.0171 3.88933 26.9237 3.24815 25.6096C3.07458 25.2538 2.90758 24.8755 2.87703 24.7687L2.82154 24.5746H42.1785L42.123 24.7687Z" fill="#F4683F" />
                </svg>
                Кейтеринг
            </div>
            <div className='services__card'>
                <svg width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.387 0.0265636C16.757 0.270607 15.5508 0.630544 14.3863 1.22059C12.7383 2.05556 11.1678 3.42098 10.0674 4.9755L9.76413 5.40408L8.78038 5.44949C6.409 5.55906 4.46636 6.41894 2.78266 8.10449C0.259936 10.6299 -0.643541 14.4706 0.46944 17.9377C0.933112 19.3821 1.59953 20.4789 2.72464 21.6493C3.81644 22.785 4.79597 23.4244 6.19067 23.9116C6.57361 24.0454 7.02254 24.1788 7.1883 24.2082C7.35407 24.2375 7.55014 24.2788 7.62404 24.3C7.75051 24.3362 7.75849 24.7174 7.76087 30.8405C7.76225 34.4168 7.79341 37.5857 7.83009 37.8827C8.00737 39.3177 9.04836 40.5373 10.3743 40.8635C11.1139 41.0455 27.8856 41.0455 28.6253 40.8635C29.9512 40.5373 30.9922 39.3177 31.1695 37.8827C31.2061 37.5857 31.2373 34.4168 31.2387 30.8405C31.2411 24.7174 31.249 24.3362 31.3755 24.3C31.4493 24.2788 31.6455 24.2375 31.8113 24.2082C32.2661 24.1277 33.4463 23.6994 33.9641 23.4269C35.2266 22.7624 36.666 21.4419 37.4346 20.2429C39.9139 16.3749 39.4044 11.2954 36.2169 8.10449C34.5332 6.41894 32.5906 5.55906 30.2192 5.44949L29.2354 5.40408L28.9321 4.9755C27.1973 2.52466 24.6223 0.820444 21.7331 0.211018C21.0239 0.061404 18.9265 -0.0542501 18.387 0.0265636ZM20.7711 2.78841C23.3094 3.15691 25.688 4.73627 27.1213 7.00498C27.8855 8.21454 27.8318 8.18883 29.5913 8.18923C31.2962 8.18971 31.6242 8.25907 32.8144 8.87138C34.8019 9.89369 36.189 11.9913 36.3679 14.2447C36.6318 17.5684 34.7936 20.4281 31.74 21.4443C30.6612 21.8033 28.7106 21.7417 27.7254 21.3174L27.471 21.2078L28.1282 20.4375C29.3109 19.0511 30.0516 17.7303 30.5924 16.0436C30.8254 15.3168 30.851 15.1631 30.7875 14.8682C30.6894 14.4127 30.4938 14.1517 30.0886 13.9356C29.6663 13.7104 29.3878 13.7082 28.9557 13.9265C28.5613 14.1258 28.3815 14.3975 28.168 15.1169C27.6253 16.9467 26.3301 18.7882 24.7678 19.9514C23.225 21.1 21.4595 21.679 19.4998 21.679C17.54 21.679 15.7746 21.1 14.2318 19.9514C12.6695 18.7882 11.3742 16.9467 10.8315 15.1169C10.618 14.3975 10.4383 14.1258 10.0439 13.9265C9.6118 13.7082 9.33323 13.7104 8.911 13.9356C8.50572 14.1517 8.31011 14.4127 8.21204 14.8682C8.14857 15.1631 8.17413 15.3168 8.40711 16.0436C8.94791 17.7303 9.68862 19.0511 10.8714 20.4375L11.5286 21.2078L11.2742 21.3174C10.289 21.7417 8.33835 21.8033 7.25952 21.4443C4.67671 20.5847 2.85357 18.28 2.63393 15.5966C2.51629 14.1587 2.73761 12.9827 3.35837 11.7478C3.99295 10.4857 4.95996 9.50155 6.18514 8.87138C7.37532 8.25907 7.70339 8.18971 9.40828 8.18923C11.1677 8.18883 11.1141 8.21454 11.8783 7.00498C12.4801 6.05243 13.4512 5.0085 14.3026 4.39883C15.3976 3.61472 16.9292 2.97598 18.1568 2.79137C18.8255 2.69077 20.0886 2.68941 20.7711 2.78841ZM14.3561 23.1652C17.4753 24.8148 21.5232 24.8154 24.6408 23.1666L25.0147 22.9688L25.7682 23.3627C26.5465 23.7694 27.4222 24.0893 28.1924 24.2483L28.6354 24.3397L28.6145 31.0681L28.5936 37.7964L28.343 38.0301L28.0924 38.2638H19.4998H10.9072L10.6566 38.0301L10.4059 37.7964L10.385 31.0681L10.3642 24.3397L10.8071 24.2478C11.5942 24.0845 12.4852 23.7573 13.219 23.3621C13.6134 23.1498 13.9458 22.9738 13.9577 22.9711C13.9697 22.9683 14.149 23.0557 14.3561 23.1652Z" fill="#F4683F" />
                </svg>

                Выездной повар
            </div>
            <div className='services__card'>
                <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2997 0.0766653C26.1854 0.227715 24.7456 0.835326 23.7709 1.56586C22.4568 2.55083 21.3957 4.17675 21.0289 5.76748L20.9048 6.30561H11.035H1.1652C1.1652 6.30561 0.577677 6.16074 0.157446 6.82877C-0.262785 7.4968 0.288569 8.09579 0.312101 8.13216C0.335632 8.1686 3.41729 11.9894 7.16021 16.623L13.9656 25.0476L13.9666 29.6353C13.9673 32.9055 13.9418 34.3224 13.8778 34.5692C13.7638 35.0094 13.2257 35.5523 12.7745 35.6825C12.5504 35.7472 11.6116 35.7732 9.50834 35.7732H6.55663C6.55663 35.7732 5.50539 35.7732 5.50539 36.8866C5.50539 38 6.55663 38 6.55663 38H15.0754H23.5942C23.5942 38 24.6822 38 24.6822 36.8866C24.6822 35.7732 23.5942 35.7732 23.5942 35.7732L20.6718 35.7728C18.8474 35.7726 17.6398 35.7428 17.4575 35.6937C17.0846 35.593 16.5811 35.153 16.4022 34.7712C16.2723 34.494 16.2629 34.1601 16.2613 29.7526L16.2596 25.0309L20.6598 19.5836C24.2138 15.184 25.0917 14.139 25.2248 14.1498C25.3154 14.1571 25.6825 14.2642 26.0403 14.3876C26.9464 14.7003 27.655 14.7918 28.8277 14.7475C29.5984 14.7184 29.975 14.6656 30.5085 14.5121C33.1407 13.7545 34.9756 11.9693 35.7936 9.36995C35.9826 8.76946 35.9989 8.61537 36 7.419C36.0013 5.90361 35.8923 5.3916 35.3238 4.24407C34.9004 3.38936 34.6377 3.01563 33.9947 2.35339C32.2471 0.553566 29.8343 -0.266926 27.2997 0.0766653ZM30.0501 2.47542C31.8481 3.0281 33.2393 4.50341 33.6488 6.29173C33.8327 7.09486 33.768 8.23288 33.4939 9.01411C32.7723 11.0719 30.9213 12.4275 28.7021 12.5237C27.8883 12.559 26.7907 12.4044 26.686 12.2397C26.662 12.202 27.383 11.2548 28.2882 10.1349L29.934 8.09876C29.934 8.09876 30.3557 7.31123 30.0501 6.75454C29.7445 6.19785 29.0711 6.30561 29.0711 6.30561H26.1738H23.2764L23.329 6.06438C23.4839 5.35374 24.1028 4.33885 24.7653 3.70898C25.2176 3.27891 26.0004 2.78286 26.5739 2.56278C27.5775 2.1777 28.9679 2.14274 30.0501 2.47542ZM26.4064 8.84785C26.2621 9.02138 25.5327 9.92323 24.7855 10.8519C24.0383 11.7807 23.402 12.5406 23.3713 12.5406C23.3408 12.5406 23.1291 12.443 22.9011 12.3237C21.9462 11.8242 20.6163 11.7013 19.5449 12.0134C18.6869 12.2633 18.0529 12.6644 17.2411 13.4705C16.2985 14.4066 15.827 14.6481 15.0221 14.607C14.2263 14.5664 13.8954 14.3826 12.9188 13.4383C12.2279 12.7703 11.9847 12.587 11.4442 12.3268C10.0713 11.6661 8.64973 11.6661 7.30254 12.3268C7.05699 12.4472 6.8271 12.5283 6.79157 12.5069C6.74405 12.4784 4.36505 9.55626 3.63137 8.62517C3.57292 8.55102 5.88125 8.53239 15.1135 8.53239H26.6687L26.4064 8.84785ZM10.344 14.2908C10.5983 14.4074 11.0193 14.7453 11.5681 15.2735C12.4835 16.1544 13.0773 16.5068 14.0431 16.7423C14.7788 16.9218 15.9755 16.8553 16.6692 16.5964C17.4317 16.3118 18.1563 15.8116 18.7807 15.1387C19.4821 14.3827 20.0589 14.0791 20.7845 14.084C21.2915 14.0873 21.8752 14.2456 21.8752 14.3798C21.8752 14.4972 15.1636 22.7875 15.0883 22.7632C15.0532 22.7518 13.5003 20.8562 11.6375 18.5508L8.25054 14.3591L8.44521 14.2588C8.94159 14.0029 9.74564 14.0164 10.344 14.2908Z" fill="#F4683F" />
                </svg>

                Фуршет
            </div>
            <div className='services__card'>
                <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.3975 0.147989C34.009 0.391363 33.9058 0.623753 33.741 1.62614C33.4143 3.61333 32.7297 5.40524 31.9002 6.44473L31.7156 6.6759L31.5264 6.20062C30.7706 4.30212 29.2894 3.24359 27.389 3.24359C26.1571 3.24359 25.3248 3.59079 24.466 4.46307C22.77 6.18549 22.9396 9.00638 24.8139 10.2509C25.5877 10.7648 26.2315 10.9335 27.4036 10.9299C28.064 10.9278 28.6001 10.8781 29.0138 10.7805C29.3549 10.7 29.6548 10.6556 29.6803 10.6817C29.7344 10.7373 29.5383 11.4928 29.2991 12.1495C29.07 12.7786 28.4195 13.7556 27.9877 14.119C27.5657 14.4743 27.4036 14.7644 27.4036 15.1641C27.4036 15.9509 28.1437 16.5085 28.8639 16.2643C29.2159 16.145 30.1208 15.2475 30.5475 14.5946C31.3953 13.2975 31.9003 11.7881 32.045 10.1193L32.1015 9.46832L32.8418 8.74804C34.0023 7.61896 34.7802 6.31266 35.3697 4.50269C35.7217 3.42171 35.9504 2.32428 36.0049 1.45347C36.0421 0.858584 36.0265 0.726766 35.8934 0.51122C35.591 0.0215413 34.8765 -0.152019 34.3975 0.147989ZM3.84139 0.974616C2.51996 1.24989 1.41603 2.33356 1.0711 3.69397C0.745492 4.9783 1.08575 6.24293 2.01322 7.19584C4.07939 9.31852 7.5656 8.17333 8.08249 5.20214C8.5109 2.73951 6.23919 0.475092 3.84139 0.974616ZM5.23283 3.42862C5.82939 3.84157 6.03381 4.59277 5.72912 5.25243C5.47979 5.79223 4.7211 6.1199 4.16058 5.92982C3.28071 5.63153 2.93237 4.64533 3.41939 3.8314C3.75949 3.26296 4.69385 3.05547 5.23283 3.42862ZM28.4216 5.8081C29.0193 6.14228 29.4113 6.73578 29.6471 7.66331L29.7656 8.12955L29.5108 8.23899C28.6547 8.60646 27.3839 8.76212 26.7031 8.58286C25.8502 8.35844 25.5519 8.01832 25.5523 7.27135C25.5532 5.87824 27.119 5.07968 28.4216 5.8081ZM14.6074 6.98754C14.2161 7.18649 10.8963 10.5942 10.7753 10.921C10.6595 11.2339 10.6708 11.592 10.8046 11.8524C10.8667 11.9733 11.7505 12.9234 12.7687 13.964L14.62 15.8558H15.0875H15.5549L17.4062 13.964C18.4244 12.9235 19.3082 11.9733 19.3703 11.8524C19.5042 11.592 19.5154 11.2339 19.3996 10.921C19.276 10.587 15.9531 7.18071 15.5603 6.98534C15.153 6.78282 15.0093 6.78314 14.6074 6.98754ZM15.9772 10.5044L16.7905 11.337L15.9402 12.2131L15.0901 13.0893L14.2374 12.2159L13.3846 11.3426L14.195 10.5072C14.6408 10.0477 15.0411 9.67174 15.0847 9.67174C15.1282 9.67174 15.5299 10.0464 15.9772 10.5044ZM20.9894 17.0642C20.4315 17.3716 20.2178 18.0015 20.489 18.5393C21.0321 19.6169 22.5854 19.2762 22.5854 18.0795C22.5854 17.6547 22.429 17.3837 22.0185 17.0967C21.7004 16.8742 21.3541 16.8633 20.9894 17.0642ZM2.53533 17.4586C1.49246 18.0134 1.8385 19.5988 3.00247 19.5988C3.87149 19.5988 4.37173 18.7681 3.97904 17.9772C3.69692 17.4086 3.05949 17.1797 2.53533 17.4586ZM9.76508 19.1487C9.42743 19.2996 8.58036 20.1791 8.15947 20.8158C7.39825 21.9674 6.89895 23.4316 6.71639 25.0471L6.61944 25.9049L5.81513 26.7185C5.3727 27.1661 4.8681 27.7519 4.6937 28.0204C3.63063 29.6575 2.76082 32.3498 2.73999 34.0679L2.73175 34.7451L3.02488 35.0215C3.18614 35.1735 3.4091 35.3214 3.52046 35.3501C4.00748 35.4756 4.63952 35.1454 4.81464 34.674C4.86066 34.5501 4.958 34.0645 5.03094 33.5951C5.29255 31.9113 5.77157 30.5669 6.5187 29.4194L6.99099 28.694L7.34724 29.4557C7.63665 30.0745 7.8166 30.3331 8.30655 30.8342C9.18761 31.7353 10.1008 32.1296 11.3065 32.1296C12.9274 32.1296 14.3364 31.2856 15.0062 29.9133C16.0581 27.7584 15.1477 25.3796 12.9886 24.6409C12.0667 24.3256 10.558 24.3483 9.20179 24.6979C9.02619 24.7432 9.02017 24.7305 9.07324 24.4301C9.17517 23.8532 9.59258 22.7818 9.91509 22.2693C10.0902 21.9909 10.4387 21.56 10.6895 21.3116C11.2418 20.7647 11.3253 20.6108 11.3253 20.1392C11.3253 19.711 11.0562 19.3194 10.6385 19.1402C10.3159 19.0017 10.0893 19.0039 9.76508 19.1487ZM33.0666 19.8342C32.9359 19.9185 32.0181 20.8264 31.0271 21.8518L29.2252 23.716V24.1024C29.2252 24.3151 29.2763 24.5878 29.3387 24.7087C29.512 25.0439 32.9563 28.5297 33.2104 28.6268C33.5743 28.7659 33.8463 28.726 34.2193 28.4784C34.413 28.3498 35.3071 27.4802 36.2063 26.5459C37.5436 25.1563 37.8593 24.7846 37.9407 24.5039C38.1236 23.8738 37.9869 23.6716 36.0171 21.6562C35.0478 20.6645 34.1543 19.8142 34.0317 19.7666C33.6974 19.6369 33.3325 19.6625 33.0666 19.8342ZM24.0219 20.8157C23.6561 21.0448 23.4968 21.3386 23.5031 21.772C23.5093 22.1917 23.6713 22.4687 24.0762 22.7518C24.4067 22.9829 24.7438 22.9824 25.1393 22.7505C25.8177 22.3525 25.9099 21.544 25.3433 20.9619C25.0811 20.6925 25.0007 20.6565 24.6606 20.6569C24.4182 20.657 24.181 20.716 24.0219 20.8157ZM18.8454 22.0249C18.4808 22.3996 18.4008 22.6773 18.5301 23.1204C18.7973 24.0367 19.8125 24.2595 20.4297 23.5373C20.6227 23.3115 20.6713 23.1809 20.6713 22.8874C20.6713 22.1616 20.238 21.7152 19.5333 21.7147C19.192 21.7143 19.1131 21.75 18.8454 22.0249ZM0.525228 22.2756C0.0100897 22.6245 -0.151406 23.2903 0.15416 23.8052C0.597382 24.552 1.562 24.5689 2.03714 23.8382C2.13773 23.6836 2.21693 23.4375 2.21693 23.2797C2.21693 22.9221 1.95112 22.4314 1.66259 22.2563C1.36312 22.0745 0.808221 22.0839 0.525228 22.2756ZM34.4329 25.0292L33.5824 25.9029L32.7502 25.0509L31.918 24.1989L32.7686 23.3223L33.6192 22.4458L34.4513 23.3006L35.2833 24.1554L34.4329 25.0292ZM12.4587 26.9067C13.5406 27.3984 13.4175 28.9911 12.2483 29.6285C11.7912 29.8777 10.8725 29.8765 10.4043 29.6261C9.75779 29.2803 9.16931 28.3494 9.05106 27.4853L9.01122 27.1943L9.5601 27.0163C10.6826 26.6524 11.8055 26.6099 12.4587 26.9067ZM21.7801 29.7494C20.3858 30.1383 19.3665 31.3095 19.1455 32.7765C18.7984 35.0802 20.7065 37.1821 22.9683 36.9875C24.383 36.8658 25.6382 35.8599 26.1098 34.47C26.3046 33.8959 26.3031 32.7389 26.1069 32.1489C25.7696 31.1346 24.913 30.2252 23.9441 29.8528C23.317 29.6118 22.4261 29.5691 21.7801 29.7494ZM23.346 32.1075C24.0065 32.4225 24.2364 33.4272 23.8034 34.1061C23.3284 34.8509 22.0648 34.8685 21.598 34.1367C21.2298 33.5593 21.2918 32.7993 21.7454 32.3335C22.1689 31.8983 22.7387 31.8179 23.346 32.1075Z" fill="#F4683F" />
                </svg>

                Шоу программа
            </div>
            <div className='services__card'>
                <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1529 0.0031863C8.54536 0.0246821 4.61121 0.0786373 3.79205 0.131574C3.55235 0.147061 3.50761 0.155469 3.28616 0.226639C2.99371 0.32065 2.72655 0.43065 2.52716 0.539147C1.64846 1.01725 0.797077 1.94014 0.415275 2.82837C0.250803 3.21099 0.117638 3.68692 0.0862274 4.00433C0.0546787 4.32323 0.0333002 5.29617 0.016367 7.18379C-0.00592814 9.67006 -0.0056341 11.9263 0.018408 22.9819L0.0387659 32.3399L0.202062 32.7024C0.374992 33.0864 0.479964 33.2846 0.63565 33.521C0.848223 33.8439 1.15543 34.1846 1.40543 34.3749C1.47378 34.4269 1.67683 34.5513 1.85664 34.6513C2.03646 34.7513 2.19019 34.8397 2.19828 34.8478C2.20636 34.8558 2.22429 35.5224 2.23813 36.3291C2.289 39.2953 2.28961 39.3022 2.54988 39.8752C2.76797 40.3553 3.02272 40.7224 3.3655 41.0504C3.67721 41.3487 3.86597 41.4738 4.4806 41.79L4.88892 42H6.87262H8.85633L9.24903 41.8026C9.46503 41.694 9.7079 41.5652 9.78876 41.5162C10.4162 41.1361 10.8853 40.5935 11.214 39.8673C11.4618 39.32 11.4758 39.1789 11.5178 36.8117C11.5275 36.2704 11.5402 35.6624 11.5461 35.4606L11.5568 35.0937H17.0014H22.446L22.4567 35.4606C22.4626 35.6624 22.4792 36.4374 22.4936 37.1829C22.535 39.3271 22.5338 39.3177 22.855 39.9713C23.1633 40.5984 23.4763 40.9924 23.9439 41.342C24.2165 41.5457 24.6013 41.7589 24.9018 41.8726C25.1909 41.982 25.5527 41.9993 27.5575 41.9997L29.1108 42L29.5034 41.7984C30.1388 41.4721 30.3345 41.3425 30.6458 41.042C31.0299 40.6712 31.3357 40.2021 31.5464 39.6607C31.7035 39.2569 31.7186 39.0294 31.7642 36.3739C31.7784 35.5444 31.7938 34.8597 31.7983 34.8524C31.8028 34.8451 31.937 34.7672 32.0965 34.6793C32.5606 34.4237 32.7197 34.3045 32.9818 34.0163C33.3011 33.6654 33.5395 33.2852 33.7932 32.7226L33.9657 32.3399L33.9875 21.8596C34.0168 7.74107 33.9985 4.34738 33.8903 3.81134C33.7405 3.06891 33.3701 2.29776 32.8759 1.69924C32.5675 1.32581 32.1116 0.927746 31.7034 0.675425C31.5063 0.55365 31.111 0.359843 30.9077 0.285376C30.5756 0.163723 30.3482 0.113997 30.0431 0.0963346C29.6314 0.072508 28.3981 0.0463332 26.7393 0.0262359C25.3809 0.0097645 15.3778 -0.00720763 13.1529 0.0031863ZM24.041 2.65186C26.3385 2.66034 28.4478 2.67532 28.7284 2.68517C29.7996 2.72275 30.0658 2.76461 30.4024 2.94838C30.9838 3.26583 31.3059 3.76919 31.4167 4.53351C31.4638 4.85814 31.478 5.21814 31.4783 6.09173L31.4785 6.9507H16.9989H2.51927L2.52963 5.94498C2.5398 4.95854 2.5509 4.72875 2.60305 4.42584C2.66001 4.09491 2.78996 3.7604 2.9459 3.54329C3.03358 3.4212 3.25029 3.20752 3.38907 3.10631C3.4414 3.06815 3.62289 2.95025 3.79237 2.8443L4.10055 2.65171L6.04091 2.64723C11.0931 2.6356 20.2761 2.63796 24.041 2.65186ZM31.4785 14.0642V18.536H17.0014H2.52425V14.0642V9.59235H17.0014H31.4785V14.0642ZM31.478 25.0667C31.4774 28.9242 31.4625 30.7273 31.4269 31.2521C31.3993 31.6592 31.3699 31.8134 31.288 31.9803C31.1579 32.2452 30.9958 32.3195 30.4494 32.3642C29.5954 32.4341 26.9266 32.4514 17.0014 32.4514C5.79136 32.4514 3.78239 32.4326 3.20186 32.3222C2.81564 32.2487 2.66075 32.0474 2.60236 31.5431C2.54554 31.0521 2.53831 30.4872 2.52944 25.835L2.52058 21.1949H16.9996H31.4785L31.478 25.0667ZM7.83016 25.528C7.3954 25.607 7.07184 25.8698 6.86488 26.3121C6.77622 26.5016 6.74025 26.6482 6.7394 26.8235C6.7363 27.4614 7.36793 28.1313 7.98128 28.1407C8.1588 28.1434 8.2725 28.1158 8.46558 28.0231C9.00556 27.764 9.35464 27.1469 9.25346 26.6304C9.19901 26.3524 9.01874 26.0327 8.80764 25.8396C8.67921 25.7222 8.44827 25.5982 8.27532 25.554C8.14496 25.5207 7.93726 25.5085 7.83016 25.528ZM25.8109 25.5291C25.5885 25.569 25.3591 25.6832 25.1992 25.8338C24.9181 26.0985 24.7334 26.4909 24.7334 26.8235C24.7334 27.2677 25.0558 27.7909 25.4447 27.9781C25.7866 28.1426 26.0456 28.1774 26.2992 28.0931C26.7809 27.9328 27.1817 27.458 27.2575 26.9577C27.3116 26.6011 27.1289 26.1535 26.8034 25.8449C26.5492 25.6039 26.1329 25.4715 25.8109 25.5291ZM8.97016 36.721C8.96497 37.7587 8.95525 38.3914 8.94335 38.4673C8.84635 39.0859 8.61285 39.3033 7.96399 39.3793C7.7011 39.41 6.04851 39.41 5.79038 39.3792C5.44815 39.3384 5.25029 39.2638 5.0948 39.117C4.92713 38.9587 4.84832 38.7485 4.80666 38.3483C4.78588 38.1489 4.7603 35.1684 4.77895 35.1199C4.78786 35.0967 5.02876 35.0937 6.88367 35.0937H8.97832L8.97016 36.721ZM29.2205 36.5958C29.2196 38.1244 29.2106 38.3843 29.1491 38.6591C29.0682 39.0202 28.8519 39.2448 28.5035 39.3293C28.2492 39.391 28.0473 39.4015 27.1198 39.4015C26.1659 39.4015 25.9752 39.3907 25.7194 39.322C25.3664 39.2273 25.1701 39.0136 25.0948 38.6424C25.0375 38.3598 25.0271 38.0383 25.027 36.5483L25.0269 35.0936L27.1241 35.098L29.2213 35.1024L29.2205 36.5958Z" fill="#F4683F" />
                </svg>

                Трансфер
            </div>
            <div className='services__card'>
                <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.74161 0.0825355C4.15075 0.525479 1.99276 2.07942 0.853494 4.32275C-0.89053 7.75671 0.0959637 11.6971 3.2851 14.0357C4.3764 14.836 6.01639 15.4269 7.46598 15.5421L8.13791 15.5955L16.9129 23.0069L25.6879 30.4183L26.7706 29.3856L27.8534 28.3529L29.5523 30.0081C30.7203 31.1459 31.3046 31.7708 31.4219 32.0076C31.9148 33.0018 31.7236 34.1461 30.9277 34.9659C30.2872 35.6256 29.3478 35.9097 28.4325 35.7206C28.1628 35.6649 26.9515 35.0868 24.8513 34.0115C20.9 31.9885 20.4183 31.7563 19.3648 31.3668C17.9657 30.8497 16.8917 30.5729 15.277 30.3135C13.9771 30.1047 10.705 30.1217 9.37512 30.3441C7.56292 30.6472 6.02449 31.0937 4.47103 31.7672C3.52911 32.1756 0.66309 33.6472 0.66309 33.7224C0.66309 33.8049 1.66686 35.6379 1.71205 35.6379C1.73025 35.6379 2.1928 35.4051 2.7398 35.1207C5.38302 33.7462 6.51473 33.2805 8.24819 32.8542C11.3464 32.0923 14.7505 32.2151 17.8219 33.1995C19.0337 33.588 19.8203 33.9547 23.6036 35.8945C25.3413 36.7856 26.9062 37.5737 27.0809 37.6458C27.719 37.9094 28.5593 38.0392 29.3067 37.9896C30.6282 37.902 31.6002 37.4823 32.5201 36.6019C33.5098 35.6549 34.0074 34.4689 33.9999 33.0747C33.9951 32.17 33.759 31.3793 33.2769 30.6544C33.0827 30.3622 32.2831 29.5216 31.2149 28.4864L29.4699 26.7957L30.5353 25.7673L31.6006 24.739L23.8823 16.2491L16.1638 7.75909V7.36786C16.1638 7.1527 16.1114 6.71013 16.0472 6.38442C15.4521 3.36204 13.152 0.985585 10.0874 0.226741C9.15279 -0.00468626 7.63472 -0.0701397 6.74161 0.0825355ZM9.57023 2.38901C10.1189 2.53158 11.0366 2.92675 11.165 3.07579C11.2394 3.16212 10.5371 3.87371 7.29 7.0024C5.10887 9.10397 3.29906 10.8235 3.26829 10.8235C3.16118 10.8235 2.59621 9.59394 2.46611 9.0776C2.27918 8.33554 2.29599 7.09289 2.50313 6.34452C2.99923 4.55239 4.49038 3.05053 6.35155 2.46828C6.57481 2.39844 6.92184 2.31249 7.12273 2.2772C7.64721 2.18522 9.02863 2.2483 9.57023 2.38901ZM13.2986 5.38635C13.594 6.00381 13.8503 6.93873 13.8503 7.39891V7.73955L10.9395 10.5445C8.65028 12.7504 7.98738 13.3493 7.83546 13.3486C7.33504 13.346 6.16585 13.0419 5.54667 12.7532L4.88191 12.4432L8.8804 8.5906C11.6737 5.8992 12.9056 4.75938 12.9675 4.80893C13.0163 4.84793 13.1652 5.10782 13.2986 5.38635ZM16.5015 11.5107L18.0066 13.1638L15.871 15.2256C14.6964 16.3596 13.7105 17.279 13.68 17.2687C13.6192 17.2481 11.9742 15.8815 10.8944 14.9544L10.2109 14.3677L12.5507 12.1127C13.8376 10.8724 14.9143 9.85769 14.9434 9.85769C14.9726 9.85769 15.6737 10.6015 16.5015 11.5107ZM24.0369 19.801L28.4502 24.6552L27.0305 26.0172L25.6108 27.3792L20.5384 23.097L15.4661 18.8148L17.4919 16.8621C18.606 15.7882 19.5415 14.9179 19.5706 14.9281C19.5997 14.9385 21.6096 17.1313 24.0369 19.801Z" fill="#F4683F" />
                </svg>

                Мероприятия под ключ
            </div>
        </div>
    );
};

export default Services;
