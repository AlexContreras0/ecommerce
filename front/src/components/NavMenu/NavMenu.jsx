import React from "react";
import Link from "next/link";
import styles from "./NavMenu.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href="/">
            <svg
              className={styles.logoAgrooe}
              width="3595"
              height="831"
              viewBox="0 0 3595 831"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M405.805 0C182.049 0 0 186.242 0 415.151C0 644.061 182.049 830.32 405.805 830.32C629.563 830.32 811.607 644.069 811.607 415.151C811.607 186.231 629.563 0 405.805 0ZM405.805 796.635C200.201 796.635 32.9227 625.494 32.9227 415.139C32.9227 204.782 200.19 33.6779 405.805 33.6779C611.422 33.6779 778.687 204.806 778.687 415.151C778.687 625.494 611.41 796.643 405.805 796.643V796.635Z"
                fill="white"
              />
              <path
                d="M319.705 578.69C279.996 614.335 252.636 656.853 237.625 702C261.866 716.075 288.289 727.409 316.38 735.382C316.552 735.438 316.689 735.462 316.86 735.51C320.938 736.673 325.074 737.732 329.22 738.76C330.066 738.959 330.911 739.142 331.745 739.349C335.241 740.17 338.783 740.942 342.346 741.691C343.672 741.93 344.997 742.193 346.322 742.44C349.441 743.037 352.594 743.595 355.735 744.12C357.369 744.383 358.991 744.622 360.613 744.861C363.538 745.307 366.462 745.721 369.398 746.072C371.192 746.311 372.985 746.51 374.756 746.701C377.588 747.02 380.434 747.322 383.289 747.561C385.151 747.705 387.014 747.856 388.887 747.983C391.697 748.175 394.507 748.35 397.329 748.485C399.271 748.565 401.213 748.668 403.132 748.724C405.852 748.804 408.581 748.852 411.312 748.883C413.711 748.899 416.121 748.939 418.52 748.899C419.708 748.883 420.885 748.884 422.073 748.852C425.934 748.772 429.818 748.676 433.691 748.453C433.839 748.453 433.999 748.453 434.159 748.453C511.269 744.351 587.078 715.883 645.99 663.002C685.779 627.31 713.149 584.704 728.148 539.485C601.472 466.077 430.641 479.133 319.693 578.706L319.705 578.69Z"
                fill="white"
              />
              <path
                d="M202.726 683.425C224.327 640.803 254.601 600.865 293.659 565.81C325.713 537.032 361.459 513.614 399.488 495.381C356.774 479.395 309.892 470.546 260.713 470.546C198.624 470.546 140.226 484.62 89.1963 509.384C105.646 577.973 146.303 638.509 202.737 683.417L202.726 683.425Z"
                fill="white"
              />
              <path
                d="M447.342 197.963C447.342 160.31 402.435 129.797 402.435 129.797C402.435 129.797 357.529 160.31 357.529 197.963C357.529 235.615 402.435 266.151 402.435 266.151C402.435 266.151 447.342 235.615 447.342 197.963Z"
                fill="white"
              />
              <path
                d="M298.239 245.382C298.239 245.382 287.581 299.451 313.604 326.069C339.617 352.686 392.474 341.776 392.474 341.776C392.474 341.776 403.132 287.707 377.109 261.09C351.109 234.461 298.239 245.382 298.239 245.382Z"
                fill="white"
              />
              <path
                d="M298.239 350.984C298.239 350.984 287.581 405.075 313.604 431.681C339.617 458.288 392.474 447.399 392.474 447.399C392.474 447.399 403.132 393.32 377.109 366.702C351.109 340.063 298.239 350.972 298.239 350.972V350.984Z"
                fill="white"
              />
              <path
                d="M412.42 341.776C412.42 341.776 465.278 352.686 491.278 326.069C517.312 299.44 506.643 245.382 506.643 245.382C506.643 245.382 453.797 234.473 427.785 261.091C401.761 287.707 412.409 341.776 412.409 341.776H412.42Z"
                fill="white"
              />
              <path
                d="M427.785 366.714C401.761 393.32 412.409 447.415 412.409 447.415C412.409 447.415 465.266 458.296 491.267 431.693C517.301 405.086 506.632 350.995 506.632 350.995C506.632 350.995 453.786 340.086 427.773 366.726L427.785 366.714Z"
                fill="white"
              />
              <path
                d="M625.164 286.188C625.164 264.437 599.233 246.822 599.233 246.822C599.233 246.822 573.3 264.437 573.3 286.188C573.3 307.939 599.233 325.543 599.233 325.543C599.233 325.543 625.164 307.916 625.164 286.188Z"
                fill="white"
              />
              <path
                d="M539.064 313.559C539.064 313.559 532.906 344.769 547.952 360.157C562.962 375.522 593.487 369.216 593.487 369.216C593.487 369.216 599.644 338.006 584.621 322.653C569.588 307.276 539.075 313.559 539.075 313.559H539.064Z"
                fill="white"
              />
              <path
                d="M539.064 374.539C539.064 374.539 532.906 405.761 547.952 421.126C562.962 436.502 593.487 430.207 593.487 430.207C593.487 430.207 599.644 398.974 584.621 383.621C569.588 368.268 539.075 374.551 539.075 374.551L539.064 374.539Z"
                fill="white"
              />
              <path
                d="M604.99 369.204C604.99 369.204 635.492 375.522 650.525 360.145C665.548 344.769 659.39 313.548 659.39 313.548C659.39 313.548 628.877 307.265 613.856 322.641C598.844 337.995 605.002 369.204 605.002 369.204H604.99Z"
                fill="white"
              />
              <path
                d="M613.856 383.609C598.844 398.963 605.002 430.196 605.002 430.196C605.002 430.196 635.504 436.502 650.537 421.114C665.559 405.749 659.402 374.528 659.402 374.528C659.402 374.528 628.889 368.245 613.867 383.598L613.856 383.609Z"
                fill="white"
              />
              <path
                d="M226.84 286.188C226.84 264.437 200.921 246.822 200.921 246.822C200.921 246.822 174.988 264.437 174.988 286.188C174.988 307.939 200.921 325.543 200.921 325.543C200.921 325.543 226.84 307.916 226.84 286.188Z"
                fill="white"
              />
              <path
                d="M140.751 313.559C140.751 313.559 134.605 344.769 149.617 360.157C164.638 375.522 195.174 369.216 195.174 369.216C195.174 369.216 201.32 338.006 186.298 322.653C171.276 307.276 140.763 313.559 140.763 313.559H140.751Z"
                fill="white"
              />
              <path
                d="M140.751 374.539C140.751 374.539 134.605 405.761 149.617 421.126C164.638 436.502 195.174 430.207 195.174 430.207C195.174 430.207 201.32 398.974 186.298 383.621C171.276 368.268 140.763 374.551 140.763 374.551L140.751 374.539Z"
                fill="white"
              />
              <path
                d="M206.678 369.204C206.678 369.204 237.191 375.522 252.213 360.145C267.236 344.769 261.078 313.548 261.078 313.548C261.078 313.548 230.565 307.265 215.543 322.641C200.521 337.995 206.678 369.204 206.678 369.204Z"
                fill="white"
              />
              <path
                d="M215.543 383.609C200.521 398.963 206.678 430.196 206.678 430.196C206.678 430.196 237.191 436.502 252.213 421.114C267.236 405.749 261.078 374.528 261.078 374.528C261.078 374.528 230.565 368.245 215.543 383.598V383.609Z"
                fill="white"
              />
              <path
                d="M3473.3 494.96V495.9H3470.64V502.85H3469.56V495.9H3466.9V494.96H3473.3Z"
                fill="white"
              />
              <path
                d="M3475.33 496.97C3475.74 496.97 3476.13 497.07 3476.52 497.26C3476.9 497.45 3477.19 497.7 3477.39 498C3477.58 498.29 3477.71 498.63 3477.78 499.02C3477.84 499.28 3477.86 499.7 3477.86 500.28H3473.65C3473.67 500.87 3473.8 501.34 3474.06 501.69C3474.32 502.04 3474.72 502.22 3475.26 502.22C3475.76 502.22 3476.17 502.05 3476.47 501.72C3476.64 501.53 3476.76 501.3 3476.83 501.05H3477.78C3477.76 501.26 3477.67 501.49 3477.53 501.75C3477.39 502.01 3477.23 502.23 3477.06 502.39C3476.76 502.68 3476.4 502.87 3475.97 502.97C3475.73 503.03 3475.47 503.06 3475.18 503.06C3474.46 503.06 3473.86 502.8 3473.36 502.27C3472.86 501.75 3472.61 501.02 3472.61 500.09C3472.61 499.16 3472.86 498.41 3473.36 497.84C3473.86 497.26 3474.52 496.97 3475.33 496.97ZM3476.87 499.52C3476.83 499.1 3476.74 498.76 3476.6 498.51C3476.33 498.05 3475.89 497.81 3475.27 497.81C3474.83 497.81 3474.45 497.97 3474.15 498.29C3473.85 498.62 3473.69 499.02 3473.67 499.52H3476.87Z"
                fill="white"
              />
              <path
                d="M3478.5 497.1H3479.75L3481.08 499.12L3482.41 497.1L3483.59 497.13L3481.65 499.9L3483.68 502.85H3482.44L3481.01 500.69L3479.63 502.85H3478.4L3480.43 499.9L3478.5 497.1Z"
                fill="white"
              />
              <path
                d="M3484.74 495.49H3485.72V497.1H3486.64V497.89H3485.72V501.64C3485.72 501.84 3485.79 501.98 3485.93 502.05C3486 502.09 3486.13 502.11 3486.3 502.11C3486.35 502.11 3486.4 502.1 3486.45 502.1C3486.51 502.1 3486.57 502.1 3486.64 502.09V502.85C3486.53 502.88 3486.41 502.91 3486.29 502.92C3486.17 502.94 3486.04 502.94 3485.9 502.94C3485.45 502.94 3485.15 502.83 3484.99 502.6C3484.82 502.37 3484.74 502.07 3484.74 501.7V497.89H3483.97V497.1H3484.74V495.49Z"
                fill="white"
              />
              <path
                d="M3489.89 502.23C3490.53 502.23 3490.97 501.99 3491.21 501.5C3491.45 501.02 3491.57 500.48 3491.57 499.88C3491.57 499.34 3491.48 498.91 3491.31 498.57C3491.04 498.04 3490.57 497.78 3489.9 497.78C3489.31 497.78 3488.88 498 3488.61 498.45C3488.34 498.9 3488.21 499.45 3488.21 500.09C3488.21 500.7 3488.34 501.21 3488.61 501.62C3488.88 502.02 3489.31 502.23 3489.89 502.23ZM3489.93 496.93C3490.67 496.93 3491.3 497.18 3491.81 497.67C3492.32 498.17 3492.58 498.9 3492.58 499.85C3492.58 500.78 3492.35 501.55 3491.9 502.15C3491.45 502.76 3490.75 503.06 3489.8 503.06C3489.01 503.06 3488.38 502.79 3487.91 502.26C3487.45 501.72 3487.21 501 3487.21 500.1C3487.21 499.14 3487.46 498.37 3487.95 497.79C3488.44 497.22 3489.1 496.93 3489.93 496.93Z"
                fill="white"
              />
              <path
                d="M1288.82 553.56H1128.96C1122.98 573.14 1117.41 592.44 1112.24 611.47C1107.08 630.5 1102.59 647.36 1098.79 662.04C1091.72 664.21 1084.38 666.11 1076.77 667.75C1069.15 669.38 1059.91 670.19 1049.03 670.19C1025.11 670.19 1007.03 665.98 994.8 657.55C982.56 649.12 976.45 637.02 976.45 621.26C976.45 613.64 977.53 606.3 979.71 599.24C981.88 592.17 984.33 584.01 987.05 574.77C990.86 560.09 996.29 541.87 1003.36 520.12C1010.43 498.37 1018.18 474.857 1026.61 449.574C1035.03 424.29 1043.87 398.327 1053.11 371.684C1062.36 345.041 1071.33 319.622 1080.03 295.426C1088.73 271.23 1096.61 249.073 1103.68 228.955C1110.75 208.837 1116.73 192.797 1121.62 180.835C1129.78 175.941 1142.42 171.319 1159.55 166.97C1176.68 162.62 1193.67 160.445 1210.52 160.445C1234.99 160.445 1256.6 163.843 1275.36 170.64C1294.12 177.436 1306.22 188.719 1311.66 204.487C1321.99 233.305 1333.13 266.744 1345.1 304.805C1357.06 342.866 1369.16 382.015 1381.39 422.251C1393.62 462.487 1405.45 502.18 1416.87 541.33C1428.29 580.48 1438.35 615.55 1447.05 646.54C1441.06 653.61 1432.23 659.32 1420.54 663.67C1408.85 668.02 1394.85 670.19 1378.54 670.19C1355.16 670.19 1338.71 666.11 1329.19 657.96C1319.68 649.8 1312.74 637.02 1308.39 619.63L1288.82 553.56ZM1209.71 274.628C1202.1 299.096 1192.72 326.962 1181.57 358.227C1170.42 389.491 1159.96 421.436 1150.17 454.059H1266.8C1257.56 419.804 1248.18 387.045 1238.66 355.78C1229.15 324.516 1221.13 297.465 1214.6 274.628H1209.71Z"
                fill="white"
              />
              <path
                d="M1750.45 630.23C1739.57 635.12 1727.34 639.06 1713.75 642.05C1700.15 645.04 1684.66 646.54 1667.26 646.54C1642.79 646.54 1619.54 643.14 1597.52 636.35C1575.5 629.55 1556.34 618.54 1540.02 603.31C1523.71 588.09 1510.66 568.24 1500.88 543.78C1491.09 519.31 1486.19 489.4 1486.19 454.059C1486.19 421.979 1491.09 393.705 1500.88 369.237C1510.66 344.77 1524.66 324.244 1542.88 307.66C1561.09 291.076 1582.84 278.57 1608.13 270.142C1633.41 261.715 1661.55 257.501 1692.54 257.501C1722.99 257.501 1750.86 261.443 1776.14 269.327C1801.42 277.211 1821.13 285.775 1835.27 295.018C1845.6 302.087 1853.76 310.107 1859.74 319.078C1865.72 328.05 1868.71 339.332 1868.71 352.925V660.41C1868.71 688.68 1863.54 713.15 1853.21 733.81C1842.88 754.47 1828.61 771.46 1810.39 784.78C1792.18 798.11 1770.84 808.03 1746.37 814.55C1721.9 821.08 1695.53 824.34 1667.26 824.34C1637.9 824.34 1612.48 821.89 1591 817C1569.52 812.11 1552.53 805.85 1540.02 798.24C1521.54 785.19 1512.29 767.79 1512.29 746.04C1512.29 734.62 1514.74 724.16 1519.63 714.64C1524.53 705.13 1529.96 698.19 1535.95 693.84C1551.17 702.54 1568.71 710.02 1588.55 716.27C1608.4 722.53 1629.47 725.65 1651.76 725.65C1682.21 725.65 1706.27 720.35 1723.94 709.75C1741.61 699.15 1750.45 681.61 1750.45 657.14V630.23ZM1689.28 552.75C1702.33 552.75 1713.61 551.12 1723.13 547.85C1732.64 544.59 1741.2 540.24 1748.82 534.8V367.606C1742.29 364.888 1735.09 362.169 1727.2 359.45C1719.32 356.732 1709.4 355.372 1697.43 355.372C1671.33 355.372 1650.27 363.392 1634.23 379.432C1618.19 395.472 1610.17 420.62 1610.17 454.875C1610.17 473.362 1612.2 488.86 1616.28 501.36C1620.36 513.87 1625.93 523.93 1633 531.54C1640.07 539.15 1648.36 544.59 1657.88 547.85C1667.39 551.12 1677.86 552.75 1689.28 552.75Z"
                fill="white"
              />
              <path
                d="M2085.66 661.22C2080.22 662.85 2072.61 664.35 2062.82 665.71C2053.03 667.07 2042.16 667.75 2030.2 667.75C2005.73 667.75 1988.06 663.8 1977.18 655.92C1966.31 648.04 1960.87 632.68 1960.87 609.84V361.081C1960.87 345.857 1964.68 332.807 1972.29 321.933C1979.9 311.058 1990.5 301.543 2004.1 293.387C2022.04 282.512 2043.65 273.949 2068.94 267.696C2094.22 261.443 2120.73 258.316 2148.46 258.316C2205.01 258.316 2233.28 277.347 2233.28 315.408C2233.28 324.651 2231.92 333.079 2229.2 340.692C2226.48 348.304 2223.49 354.829 2220.23 360.266C2207.73 357.547 2192.5 356.188 2174.56 356.188C2158.79 356.188 2143.02 358.091 2127.25 361.897C2111.49 365.703 2097.62 370.869 2085.66 377.393V661.22Z"
                fill="white"
              />
              <path
                d="M2676.15 465.478C2676.15 497.56 2671.26 526.51 2661.47 552.34C2651.68 578.17 2637.68 600.05 2619.47 617.99C2601.25 635.94 2579.37 649.8 2553.81 659.59C2528.25 669.38 2499.71 674.27 2468.17 674.27C2436.64 674.27 2407.95 669.51 2382.13 660C2356.3 650.48 2334.28 636.75 2316.06 618.81C2297.85 600.87 2283.85 578.98 2274.06 553.15C2264.27 527.33 2259.38 498.1 2259.38 465.478C2259.38 433.941 2264.41 405.26 2274.47 379.432C2284.53 353.605 2298.66 331.72 2316.88 313.777C2335.09 295.834 2357.12 281.969 2382.94 272.181C2408.77 262.394 2437.18 257.501 2468.17 257.501C2499.17 257.501 2527.44 262.394 2552.99 272.181C2578.55 281.969 2600.44 295.97 2618.65 314.185C2636.87 332.4 2651 354.285 2661.06 379.84C2671.12 405.396 2676.15 433.941 2676.15 465.478ZM2468.17 355.372C2442.62 355.372 2422.77 364.888 2408.63 383.918C2394.5 402.949 2387.43 430.135 2387.43 465.478C2387.43 501.91 2394.36 529.5 2408.23 548.26C2422.09 567.02 2442.07 576.4 2468.17 576.4C2494.27 576.4 2514.25 566.88 2528.12 547.85C2541.98 528.82 2548.92 501.36 2548.92 465.478C2548.92 430.679 2541.85 403.628 2527.71 384.326C2513.57 365.024 2493.73 355.372 2468.17 355.372Z"
                fill="white"
              />
              <path
                d="M3149.2 465.478C3149.2 497.56 3144.3 526.51 3134.51 552.34C3124.73 578.17 3110.73 600.05 3092.51 617.99C3074.3 635.94 3052.41 649.8 3026.86 659.59C3001.3 669.38 2972.75 674.27 2941.22 674.27C2909.68 674.27 2881 669.51 2855.17 660C2829.35 650.48 2807.32 636.75 2789.11 618.81C2770.89 600.87 2756.89 578.98 2747.11 553.15C2737.32 527.33 2732.43 498.1 2732.43 465.478C2732.43 433.941 2737.46 405.26 2747.51 379.432C2757.57 353.605 2771.71 331.72 2789.93 313.777C2808.14 295.834 2830.16 281.969 2855.99 272.181C2881.82 262.394 2910.23 257.501 2941.22 257.501C2972.21 257.501 3000.49 262.394 3026.04 272.181C3051.6 281.969 3073.48 295.97 3091.7 314.185C3109.91 332.4 3124.05 354.285 3134.11 379.84C3144.17 405.396 3149.2 433.941 3149.2 465.478ZM2941.22 355.372C2915.66 355.372 2895.82 364.888 2881.68 383.918C2867.54 402.949 2860.47 430.135 2860.47 465.478C2860.47 501.91 2867.41 529.5 2881.27 548.26C2895.14 567.02 2915.12 576.4 2941.22 576.4C2967.32 576.4 2987.3 566.88 3001.16 547.85C3015.03 528.82 3021.96 501.36 3021.96 465.478C3021.96 430.679 3014.89 403.628 3000.76 384.326C2986.62 365.024 2966.77 355.372 2941.22 355.372Z"
                fill="white"
              />
              <path
                d="M3329.44 517.68C3337.05 540.51 3350.38 556.69 3369.41 566.2C3388.44 575.72 3410.46 580.48 3435.47 580.48C3458.31 580.48 3479.78 577.35 3499.9 571.1C3520.02 564.84 3536.33 557.91 3548.84 550.3C3556.99 555.74 3563.79 562.81 3569.23 571.51C3574.67 580.21 3577.38 589.72 3577.38 600.05C3577.38 612.56 3573.58 623.43 3565.97 632.68C3558.35 641.92 3547.89 649.67 3534.56 655.92C3521.24 662.17 3505.48 666.79 3487.26 669.78C3469.05 672.78 3449.06 674.27 3427.31 674.27C3395.23 674.27 3365.6 669.78 3338.41 660.81C3311.23 651.84 3287.85 638.52 3268.27 620.85C3248.7 603.18 3233.34 581.02 3222.19 554.38C3211.05 527.73 3205.47 496.47 3205.47 460.584C3205.47 425.785 3211.05 395.608 3222.19 370.053C3233.34 344.498 3248.29 323.292 3267.05 306.436C3285.81 289.581 3307.29 277.211 3331.48 269.327C3355.68 261.443 3380.55 257.501 3406.11 257.501C3433.84 257.501 3459.26 261.715 3482.37 270.142C3505.48 278.57 3525.32 290.396 3541.91 305.621C3558.49 320.845 3571.4 339.06 3580.65 360.266C3589.89 381.471 3594.51 404.58 3594.51 429.592C3594.51 446.991 3589.89 460.04 3580.65 468.74C3571.4 477.44 3558.35 483.15 3541.5 485.87L3329.44 517.68ZM3406.92 349.663C3383.54 349.663 3364.11 356.868 3348.61 371.276C3333.11 385.685 3324.01 406.483 3321.29 433.67L3477.07 408.386C3475.98 394.249 3469.73 380.928 3458.31 368.422C3446.89 355.916 3429.76 349.663 3406.92 349.663Z"
                fill="white"
              />
            </svg>
          </Link>
        </li>
        <div className={styles.menu}>
          <li className={styles.linkContainer}>
            <Link className={styles.link} href="/sobre-nosotros">
              Conocenos
              <svg
                className={styles.arrow}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </Link>
            <ul>
              <li>
                <Link className={styles.subLink} href="/sobre-nosotros/equipo">
                  Equipo
                </Link>
              </li>
              <li>
                <Link
                  className={styles.subLink}
                  href="/sobre-nosotros/proveedores"
                >
                  Proveedores
                </Link>
              </li>
              <li>
                <Link
                  className={styles.subLink}
                  href="/sobre-nosotros/voluntarios"
                >
                  Voluntarios
                </Link>
              </li>
              <li>
                <Link
                  className={styles.subLink}
                  href="/sobre-nosotros/contacto"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className={styles.link} href="/tienda">
              Tienda
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/blog">
              Blog
              <svg
                className={styles.arrow}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </Link>
            <ul>
              <li>
                <Link className={styles.subLink} href="/blog/novedades">
                  Novedades
                </Link>
              </li>
              <li>
                <Link className={styles.subLink} href="/blog/actualizaciones">
                  Actualizaciones
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className={styles.link} href="/login-usuario">
              Login
            </Link>
          </li>
        </div>

        {/* <li>
          <SearchBar />
        </li> */}

        <li>
          <Link className={styles.link} href="/carrito">
            <svg
              className={styles.cartIcon}
              xmlns="http://www.w3.org/2000/svg"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
