import React from "react";

type Features = {
  id: number;
  icon: string;
  title: string;
  color: string;
};

type FeaturesProps = {
  name: string;
  description: string;
  features: Features[];
};

const FeaturesCard: React.FC<{ data: FeaturesProps; Width?: string }> = ({ data, Width }) => {
  const { name, description, features } = data || {};
  return (
    <div className="bg-gradient-to-b from-[#8e8cff] to-[#5856d6]">
      <div className="container p-5 lg:p-16 relative">
        <h2 className="text-center text-white text-2xl lg:text-[45px] font-bold mb-5">{name}</h2>
        <p className="text-center text-white text-base lg:text-lg">{description}</p>

        <div className="my-10 lg:my-14 flex flex-wrap justify-center gap-7">
          {features?.map((feature, index) => (
            <div
              key={index}
              className={`p-4 flex items-center gap-3 bg-white/5 rounded-[7.20px] border border-[#1ed0c6] ${Width}`}
              style={{ borderColor: feature?.color }}
            >
              <i
                className={`fa-2x fa-solid bg-transparent font-extralight ${feature?.icon}`}
                style={{ color: feature?.color }}
              ></i>
              <span className="text-white text-sm font-semibold">{feature?.title}</span>
            </div>
          ))}
        </div>

        {/* background effect  */}
        <div className="absolute top-2 lg:top-12 w-4 h-4 border opacity-40 bg-white rounded-full" />
        <div className="absolute right-0 bottom-0 w-20 lg:w-[180px] h-20 lg:h-[180px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 127" fill="none">
            <g opacity="0.3">
              <mask
                id="mask0_3331_102120"
                maskUnits="userSpaceOnUse"
                x="-1"
                y="0"
                width="181"
                height="127"
              >
                <path d="M179.999 0.373047H-0.0012207V126.689H179.999V0.373047Z" fill="white" />
              </mask>
              <g mask="url(#mask0_3331_102120)">
                <path
                  d="M111.409 96.8742C129.628 96.8742 144.398 82.1048 144.398 63.8863C144.398 45.6676 129.628 30.8984 111.409 30.8984C93.1899 30.8984 78.4204 45.6676 78.4204 63.8863C78.4204 82.1048 93.1899 96.8742 111.409 96.8742Z"
                  fill="white"
                  stroke="#B8C6FF"
                  stroke-width="2.10526"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M112.631 62.4792V28.8321C126.733 28.0246 145.625 40.4065 144.826 62.4792H112.631Z"
                  fill="#EFEEFF"
                />
                <path
                  d="M111.696 42.7285V63.2548H132.368"
                  stroke="#3B3C4E"
                  stroke-width="2.10526"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M111.053 43.6638C111.053 43.3004 111.347 43.0059 111.711 43.0059C112.074 43.0059 112.369 43.3004 112.369 43.6638V46.5585C112.369 46.9219 112.074 47.2164 111.711 47.2164C111.347 47.2164 111.053 46.9219 111.053 46.5585V43.6638Z"
                  fill="#8276FF"
                />
                <path
                  d="M132.445 62.4766C132.838 62.4766 133.156 62.7945 133.156 63.1871C133.156 63.5792 132.838 63.8971 132.445 63.8971H129.656C129.263 63.8971 128.945 63.5792 128.945 63.1871C128.945 62.7945 129.263 62.4766 129.656 62.4766H132.445Z"
                  fill="#8276FF"
                />
                <path
                  d="M190.577 123.62L189.593 122.867C202.69 105.671 209.615 85.1274 209.615 63.4496C209.615 29.867 192.72 -1.02876 164.418 -19.198L165.09 -20.2402C193.75 -1.85097 210.854 29.4386 210.854 63.4496C210.854 85.3938 203.836 106.203 190.577 123.62Z"
                  fill="url(#paint0_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M111.485 162.82C56.6882 162.82 12.1045 118.236 12.1045 63.4391C12.1045 8.64207 56.6882 -35.9414 111.485 -35.9414V-34.7024C57.3713 -34.7024 13.355 9.32528 13.355 63.4275C13.355 117.542 57.3829 161.558 111.485 161.558C127.836 161.558 144.025 157.458 158.292 149.7L158.882 150.788C144.431 158.674 128.033 162.82 111.485 162.82Z"
                  fill="url(#paint1_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M64.4595 139.936C37.6863 123.446 21.7058 94.8428 21.7058 63.4375H24.1958C24.1958 93.9743 39.7363 121.779 65.7684 137.817L64.4595 139.936Z"
                  fill="url(#paint2_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M111.485 153.23C101.641 153.23 91.972 151.643 82.7314 148.528L83.5304 146.177C92.5167 149.211 101.919 150.751 111.496 150.751C156.462 150.751 193.808 117.065 198.336 72.3887L200.814 72.6434C196.135 118.57 157.736 153.23 111.485 153.23Z"
                  fill="url(#paint3_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M197.663 49.4928C194.41 29.2392 184.011 10.6763 168.366 -2.76826C152.559 -16.3633 132.352 -23.8441 111.484 -23.8441C94.6349 -23.8441 78.2839 -19.0383 64.1907 -9.93637C47.7702 0.67103 35.2407 16.6516 28.9065 35.064L26.5554 34.2534C33.0633 15.3199 45.9523 -1.11233 62.8359 -12.0208C77.3344 -21.3775 94.1486 -26.3223 111.473 -26.3223C132.942 -26.3223 153.717 -18.6215 169.975 -4.64428C186.06 9.18237 196.76 28.2781 200.107 49.1107L197.663 49.4928Z"
                  fill="url(#paint4_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M111.487 128.287C75.7272 128.287 46.6377 99.1976 46.6377 63.4382C46.6377 48.9632 51.3045 35.2754 60.1171 23.8574L62.0856 25.3744C53.6093 36.3639 49.1277 49.519 49.1277 63.4382C49.1277 97.8197 77.1051 125.797 111.487 125.797C117.589 125.797 123.622 124.917 129.401 123.18L130.119 125.566C124.097 127.384 117.821 128.287 111.487 128.287Z"
                  fill="url(#paint5_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M155.284 111.263L153.605 109.434C166.471 97.6456 173.847 80.8887 173.847 63.4492C173.847 51.1744 170.28 39.2931 163.541 29.0911L165.614 27.7246C172.631 38.332 176.337 50.688 176.337 63.4608C176.325 81.584 168.659 99.0119 155.284 111.263Z"
                  fill="url(#paint6_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M150.282 14.6168C139.154 5.75804 125.732 1.07969 111.489 1.07969C98.9936 1.07969 86.9388 4.76218 76.6209 11.7334L75.2314 9.67215C85.9546 2.423 98.4957 -1.39844 111.489 -1.39844C126.311 -1.39844 140.265 3.46522 151.834 12.683L150.282 14.6168Z"
                  fill="url(#paint7_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M111.486 117.147C102.755 117.147 94.0816 115.005 86.4153 110.952L86.9942 109.852C94.4869 113.812 102.952 115.908 111.475 115.908C135.017 115.908 155.815 100.078 162.057 77.4043L163.249 77.7401C156.881 100.946 135.585 117.147 111.486 117.147Z"
                  fill="url(#paint8_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M73.5147 101.431C63.3705 91.2877 57.7773 77.7967 57.7773 63.4488C57.7773 33.8385 81.8637 9.74023 111.486 9.74023C141.096 9.74023 165.194 33.8385 165.194 63.4488H163.955C163.955 34.5217 140.424 10.9909 111.497 10.9909C82.57 10.9909 59.0395 34.5217 59.0395 63.4488C59.0395 77.4609 64.4937 90.6388 74.4179 100.551L73.5147 101.431Z"
                  fill="url(#paint9_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M111.483 96.8446C93.0587 96.8446 78.074 81.8599 78.074 63.4362C78.074 45.012 93.0587 30.0273 111.483 30.0273V32.5171C94.4366 32.5171 80.564 46.3901 80.564 63.4362C80.564 80.482 94.4366 94.3551 111.483 94.3551C128.529 94.3551 142.402 80.482 142.402 63.4362H144.891C144.88 81.8599 129.895 96.8446 111.483 96.8446Z"
                  fill="url(#paint10_linear_3331_102120)"
                  fill-opacity="0.47"
                />
                <path
                  d="M111.487 80.042C102.327 80.042 94.8809 72.5957 94.8809 63.4362H96.1198C96.1198 71.9009 103.01 78.7915 111.475 78.7915C119.94 78.7915 126.83 71.9009 126.83 63.4362C126.83 54.9709 119.94 48.0807 111.475 48.0807C106.774 48.0807 102.396 50.1883 99.4545 53.8709L98.4819 53.0951C101.655 49.1114 106.391 46.8301 111.475 46.8301C120.635 46.8301 128.081 54.2762 128.081 63.4362C128.081 72.5957 120.635 80.042 111.487 80.042Z"
                  fill="url(#paint11_linear_3331_102120)"
                  fill-opacity="0.47"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_3331_102120"
                x1="188.335"
                y1="35.5672"
                x2="207.608"
                y2="39.4755"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3331_102120"
                x1="87.7045"
                y1="41.1639"
                x2="139.894"
                y2="65.3765"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_3331_102120"
                x1="44.4005"
                y1="93.1133"
                x2="61.2358"
                y2="99.2054"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_3331_102120"
                x1="143.551"
                y1="103.749"
                x2="171.25"
                y2="129.167"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_3331_102120"
                x1="115.945"
                y1="3.08862"
                x2="140.386"
                y2="38.2388"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_3331_102120"
                x1="89.6356"
                y1="64.3687"
                x2="118.442"
                y2="78.8361"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_3331_102120"
                x1="165.313"
                y1="60.1319"
                x2="174.857"
                y2="61.7635"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_3331_102120"
                x1="84.473"
                y1="26.4259"
                x2="118.159"
                y2="50.3083"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_3331_102120"
                x1="125.99"
                y1="92.8217"
                x2="139.403"
                y2="109.113"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_3331_102120"
                x1="113.104"
                y1="45.31"
                x2="143.21"
                y2="67.4682"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_3331_102120"
                x1="112.489"
                y1="55.9478"
                x2="133.191"
                y2="68.953"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_3331_102120"
                x1="111.981"
                y1="59.7141"
                x2="122.269"
                y2="66.1751"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
