import React from "react";

/**
 * it creates a Footer section
 * @returns a footer section with the stokka logo and some text
 */
export default function Footer() {
  return (
    <div>
      <footer
        className="footer footer-center p-10 text-black"
        style={{ backgroundColor: "#E7E7E7" }}
      >

        <div>
          <svg
            width="99"
            height="31"
            viewBox="0 0 99 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.118164" width="15.166" height="15.166" fill="#FF6201" />
            <rect
              x="15.1279"
              y="15.1042"
              width="15.166"
              height="15.166"
              fill="#50FFB1"
            />
            <rect
              x="0.118164"
              y="15.1042"
              width="15.0429"
              height="15.166"
              fill="#4D4D4D"
            />
            <path
              d="M0.249268 0.107758L15.0571 14.9892"
              stroke="white"
              stroke-width="0.170807"
              stroke-linecap="round"
            />
            <path
              d="M30.332 15.1453L15.166 30.3113"
              stroke="#00272B"
              stroke-width="0.202213"
              stroke-linecap="round"
            />
            <ellipse
              cx="22.7109"
              cy="7.583"
              rx="7.583"
              ry="7.583"
              fill="#00272B"
            />
            <path
              d="M15.166 22.7283C15.166 26.9163 11.771 30.3113 7.583 30.3113C3.39502 30.3113 0 26.9163 0 22.7283C0 18.5403 3.39502 15.1453 7.583 15.1453C11.771 15.1453 15.166 18.5403 15.166 22.7283Z"
              fill="#F3A712"
            />
            <path
              d="M42.6126 18.4593C42.6126 19.1783 42.4328 19.7923 42.0733 20.3012C41.7193 20.8046 41.2214 21.189 40.5798 21.4545C39.9382 21.72 39.1831 21.8527 38.3147 21.8527C37.8556 21.8527 37.4214 21.8306 37.0121 21.7864C36.6028 21.7421 36.2267 21.6785 35.8837 21.5955C35.5408 21.5126 35.2393 21.4102 34.9793 21.2885V19.9361C35.3942 20.1076 35.9003 20.268 36.4977 20.4174C37.0951 20.5612 37.7201 20.6331 38.3728 20.6331C38.9813 20.6331 39.4957 20.5529 39.9161 20.3925C40.3364 20.2265 40.6545 19.9914 40.8702 19.6872C41.0915 19.3775 41.2021 19.0069 41.2021 18.5754C41.2021 18.1606 41.1108 17.8149 40.9283 17.5383C40.7458 17.2562 40.4415 17.0018 40.0156 16.775C39.5952 16.5427 39.02 16.2965 38.2898 16.0365C37.7754 15.854 37.3219 15.6549 36.9291 15.4392C36.5364 15.2179 36.2073 14.969 35.9418 14.6924C35.6763 14.4159 35.4744 14.095 35.3361 13.73C35.2034 13.3649 35.137 12.9473 35.137 12.4771C35.137 11.83 35.3002 11.2768 35.6265 10.8177C35.9584 10.3531 36.4147 9.9991 36.9955 9.75572C37.5818 9.50681 38.2539 9.38235 39.0117 9.38235C39.6588 9.38235 40.2562 9.4432 40.8038 9.56489C41.357 9.68658 41.8631 9.84975 42.3222 10.0544L41.8824 11.2658C41.4455 11.0832 40.9808 10.9311 40.4885 10.8094C40.0018 10.6877 39.4984 10.6269 38.9785 10.6269C38.4585 10.6269 38.0188 10.7043 37.6593 10.8592C37.3053 11.0086 37.0342 11.2215 36.8462 11.4981C36.6581 11.7747 36.5641 12.1038 36.5641 12.4854C36.5641 12.9113 36.6526 13.2653 36.8296 13.5474C37.0121 13.8295 37.2997 14.0812 37.6925 14.3025C38.0907 14.5182 38.6162 14.745 39.2689 14.9828C39.9824 15.2428 40.5881 15.5194 41.0859 15.8125C41.5837 16.1002 41.9626 16.4542 42.2226 16.8745C42.4826 17.2894 42.6126 17.8176 42.6126 18.4593ZM48.8187 21.6868H47.3999V10.8011H43.5833V9.55659H52.6188V10.8011H48.8187V21.6868ZM64.973 15.6051C64.973 16.5399 64.8541 17.3917 64.6162 18.1606C64.3784 18.9239 64.0244 19.5821 63.5542 20.1353C63.0896 20.6829 62.5115 21.106 61.8201 21.4047C61.1287 21.7034 60.3267 21.8527 59.414 21.8527C58.4737 21.8527 57.6523 21.7034 56.9498 21.4047C56.2528 21.106 55.672 20.6801 55.2074 20.127C54.7483 19.5738 54.4026 18.9128 54.1703 18.144C53.9435 17.3751 53.8301 16.5233 53.8301 15.5885C53.8301 14.3495 54.0348 13.2626 54.4441 12.3278C54.8534 11.393 55.4729 10.6656 56.3026 10.1457C57.1378 9.62573 58.1833 9.36576 59.4389 9.36576C60.6392 9.36576 61.6486 9.62297 62.4673 10.1374C63.2915 10.6518 63.9137 11.3764 64.3341 12.3112C64.76 13.2405 64.973 14.3384 64.973 15.6051ZM55.3153 15.6051C55.3153 16.6339 55.4619 17.5245 55.755 18.2767C56.0482 19.029 56.4962 19.6098 57.0991 20.0191C57.7076 20.4284 58.4792 20.6331 59.414 20.6331C60.3543 20.6331 61.1232 20.4284 61.7206 20.0191C62.3235 19.6098 62.7687 19.029 63.0564 18.2767C63.344 17.5245 63.4878 16.6339 63.4878 15.6051C63.4878 14.0397 63.1587 12.8173 62.5005 11.9378C61.8478 11.0528 60.8272 10.6103 59.4389 10.6103C58.4986 10.6103 57.7242 10.8122 57.1157 11.216C56.5073 11.6198 56.0537 12.195 55.755 12.9418C55.4619 13.683 55.3153 14.5707 55.3153 15.6051ZM76.4228 21.6868H74.7551L70.3826 15.7876L69.0883 16.9492V21.6868H67.6778V9.55659H69.0883V15.6051C69.4036 15.2456 69.7272 14.8888 70.059 14.5348C70.3909 14.1753 70.72 13.8129 71.0464 13.4479L74.5892 9.55659H76.2403L71.4114 14.8169L76.4228 21.6868ZM86.8273 21.6868H85.1596L80.787 15.7876L79.4927 16.9492V21.6868H78.0822V9.55659H79.4927V15.6051C79.808 15.2456 80.1316 14.8888 80.4635 14.5348C80.7953 14.1753 81.1245 13.8129 81.4508 13.4479L84.9936 9.55659H86.6447L81.8159 14.8169L86.8273 21.6868ZM96.095 21.6868L94.6015 17.837H89.7395L88.2543 21.6868H86.8273L91.5731 9.50681H92.8426L97.5553 21.6868H96.095ZM94.1784 16.5841L92.7596 12.7592C92.7264 12.6597 92.6711 12.4965 92.5937 12.2697C92.5218 12.0429 92.4471 11.8078 92.3697 11.5645C92.2922 11.3211 92.2286 11.1247 92.1788 10.9754C92.1235 11.2022 92.0627 11.4289 91.9963 11.6557C91.9354 11.877 91.8746 12.0844 91.8138 12.278C91.7529 12.4661 91.7004 12.6265 91.6561 12.7592L90.2124 16.5841H94.1784Z"
              fill="#00272B"
            />
          </svg>


          <p className="font-bold ">
            STOKKA <br />
            Filter to your next adventure with Stokka.
          </p>
          <p>Copyright © 2023 - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
