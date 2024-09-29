import { Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import router from "../Routes";

const Branding = () => {
  return (
    <>
      <div className="MuiToolbar-root MuiToolbar-regular css-r6ewbb-MuiToolbar-root">
        <svg
          style={{ width: "100%", height: "auto" }}
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1uzrjc8-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="-174.43575 -69.5 1511.7765 417"
        >
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              gradientTransform="scale(1.0663 .93783)"
              id="a"
              y2="1.019"
              x2="116.889"
              y1="219.859"
              x1="116.889"
            >
              <stop offset="0%" stop-color="#00a1ff" />
              <stop offset="100%" stop-color="#0066ff" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              gradientTransform="scale(1.06066 .9428)"
              id="b"
              y2="99.632"
              x2="226.919"
              y1="282.247"
              x1="226.919"
            >
              <stop offset="0%" stop-color="#0066ff" />
              <stop offset="100%" stop-color="#00a1ff" />
            </linearGradient>
          </defs>
          <g fill-rule="evenodd" fill="none">
            <path
              fill="url(#a)"
              d="M0 103.374c0 31.012 16.907 59.345 43.037 78.105 2.306 1.531 3.458 3.829 3.458 6.892 0 .765-.384 1.914-.384 2.68-1.921 7.657-5.38 20.292-5.764 20.675-.384 1.148-.768 1.914-.768 3.062 0 2.298 1.921 4.212 4.227 4.212.768 0 1.537-.383 2.305-.766l27.283-15.697c1.92-1.149 4.226-1.915 6.532-1.915 1.153 0 2.69 0 3.843.383 12.68 3.829 26.513 5.743 40.731 5.743 68.782 0 124.5-46.327 124.5-103.374S193.282 0 124.5 0 0 46.327 0 103.374"
            />
            <path
              fill="url(#b)"
              d="M240.5 267.585c11.883 0 23.383-1.543 33.733-4.629.767-.386 1.917-.386 3.067-.386 1.917 0 3.833.772 5.367 1.543l22.616 13.116c.767.385 1.15.771 1.917.771a3.447 3.447 0 003.45-3.472c0-.771-.383-1.543-.383-2.7 0-.386-3.067-10.8-4.6-17.358-.384-.772-.384-1.543-.384-2.315 0-2.314 1.15-4.243 3.067-5.786C330.2 230.553 344 207.023 344 180.792 344 132.96 297.617 94 240.5 94S137 132.574 137 180.792c0 47.833 46.383 86.793 103.5 86.793z"
            />
            <path
              fill="#F5F5FF"
              d="M99 70c0 8.93-7.07 16-16 16s-16-7.07-16-16 7.07-16 16-16 16 7.07 16 16m83 0c0 8.93-7.07 16-16 16s-16-7.07-16-16 7.07-16 16-16 16 7.07 16 16"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default Branding;
