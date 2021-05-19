import * as React from "react";

export const LeftChevron = ({
    height = "12px",
    width = "7px",
    ...props
  }: React.SVGProps<SVGSVGElement>) =>  (
    <svg width={width} height={height} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Rounded" transform="translate(-142.000000, -3438.000000)">
                <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                    <g id="-Round-/-Navigation-/-chevron_left" transform="translate(34.000000, 54.000000)">
                        <g>
                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                            <path d="M14.71,6.71 C14.32,6.32 13.69,6.32 13.3,6.71 L8.71,11.3 C8.32,11.69 8.32,12.32 8.71,12.71 L13.3,17.3 C13.69,17.69 14.32,17.69 14.71,17.3 C15.1,16.91 15.1,16.28 14.71,15.89 L10.83,12 L14.71,8.12 C15.1,7.73 15.09,7.09 14.71,6.71 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);


export const RightChevron = ({
    height = "12px",
    width = "7px",
    ...props
  }: React.SVGProps<SVGSVGElement>) =>  (
    <svg width={width} height={height} viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>chevron_right</title>
        <desc>Created with Sketch.</desc>
        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Rounded" transform="translate(-619.000000, -3438.000000)">
                <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                    <g id="-Round-/-Navigation-/-chevron_right" transform="translate(510.000000, 54.000000)">
                        <g>
                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                            <path d="M9.29,6.71 C8.9,7.1 8.9,7.73 9.29,8.12 L13.17,12 L9.29,15.88 C8.9,16.27 8.9,16.9 9.29,17.29 C9.68,17.68 10.31,17.68 10.7,17.29 L15.29,12.7 C15.68,12.31 15.68,11.68 15.29,11.29 L10.7,6.7 C10.32,6.32 9.68,6.32 9.29,6.71 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
    );