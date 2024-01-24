import React from "react";

function GateWayIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            className="w-6 h-6"
        >
            <defs>
                <linearGradient
                    id="Arch_Amazon-API-Gateway_32_svg__a"
                    x1="0%"
                    x2="100%"
                    y1="100%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#4D27A8"></stop>
                    <stop offset="100%" stopColor="#A166FF"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path
                    fill="url(#Arch_Amazon-API-Gateway_32_svg__a)"
                    d="M0 0h40v40H0z"
                ></path>
                <path
                    fill="#FFF"
                    d="M19 28h2v-1h-2v1zM14 7.262l-7 3.04v20.055l7 2.439V7.262zM15 13v14h2v1h-2v5.5a.5.5 0 01-.664.472l-8-2.787A.5.5 0 016 30.713V9.974c0-.199.118-.379.301-.458l8-3.474A.5.5 0 0115 6.5V12h2v1h-2zm18-2.698l-7-3.04v25.534l7-2.439V10.302zm1-.328v20.739a.5.5 0 01-.336.472l-8 2.787a.507.507 0 01-.454-.064.5.5 0 01-.21-.408V28h-2v-1h2V13h-2v-1h2V6.5a.5.5 0 01.699-.458l8 3.474a.499.499 0 01.301.458zM19 13h2v-1h-2v1zm4.975 2.658l-.95-.316-3 9 .95.316 3-9zm-4.829 7.196l-3-3a.502.502 0 010-.708l3-3 .708.708-2.647 2.646 2.647 2.646-.708.708z"
                ></path>
            </g>
        </svg>
    );
}

export default React.memo(GateWayIcon);