import Head from 'next/head';
import { Box, Card } from '@mui/material';

const Header = () => {
  return (
    <>
      <Head>
        <title>LeetCode Global Ranking</title>
        <link rel="icon" type="image/x-icon" href="https://bharatrawat.com/favicon.ico"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="leetcode, leetcode ranking, top leetcode coder, top coder, coding"/>
      </Head>

      <Box
        height="50px"
        width="100%"
        px={2}
        component={Card}
        sx={{ borderRadius: 0 }}
        display="flex"
        alignItems="center"
      >
        <svg height="40px" viewBox="0 0 458 111">
          <defs></defs>
          <g id="LeetCode’s-new-logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-812.000000, -3714.000000)" id="logo_english_dark">
              <g transform="translate(812.000000, 3714.000000)">
                <g id="Logo_English">
                  <g id="Group-10">
                    <path
                      d="M67.5068339,83.0664138 C70.0005384,80.5763786 74.0371402,80.5828822 76.5228362,83.0809398 C79.0085322,85.5789975 79.00204,89.6226456 76.5083355,92.1126808 L65.4351451,103.169577 C55.2192332,113.370744 38.5604663,113.518673 28.1722578,103.513204 C28.112217,103.455678 23.486583,98.9201326 8.22702585,83.9570195 C-1.92478479,74.0028895 -2.93614945,58.0748736 6.61697549,47.8463644 L24.4286944,28.7745461 C33.9100043,18.6218594 51.3874487,17.5122246 62.2279907,26.2789232 L78.4052912,39.3620235 C81.1448956,41.5776292 81.5728103,45.5984975 79.3610655,48.3428842 C77.1493207,51.0872709 73.1354592,51.5159327 70.3958548,49.300327 L54.2186634,36.2173149 C48.5492813,31.6325105 38.631911,32.2621597 33.7398535,37.5006265 L15.9279056,56.5726899 C11.2772073,61.552182 11.7865613,69.5740156 17.1461283,74.8292186 C28.3515339,85.8169393 36.9874071,94.2846214 36.9973988,94.294225 C42.3981571,99.4959838 51.130862,99.418438 56.43358,94.1233737 L67.5068339,83.0664138 Z"
                      id="Combined-Shape"
                      fill="#FFA116"
                      fillRule="nonzero"
                    ></path>
                    <path
                      d="M40.6069914,72.0014117 C37.086019,72.0014117 34.2317068,69.142117 34.2317068,65.6149982 C34.2317068,62.0878794 37.086019,59.2285847 40.6069914,59.2285847 L87.6247154,59.2285847 C91.1456879,59.2285847 94,62.0878794 94,65.6149982 C94,69.142117 91.1456879,72.0014117 87.6247154,72.0014117 L40.6069914,72.0014117 Z"
                      id="Path-2"
                      fill="#B3B3B3"
                    ></path>
                    <path
                      d="M49.4124315,2.02335002 C51.8178981,-0.552320454 55.852269,-0.686893945 58.4234511,1.72277172 C60.9946333,4.13243738 61.1289722,8.17385083 58.7235056,10.7495213 L15.9282277,56.5728697 C11.2773659,61.551984 11.7867168,69.5737689 17.1459309,74.8291832 L36.9094236,94.2091099 C39.4255514,96.6764051 39.4686234,100.719828 37.0056277,103.240348 C34.5426319,105.760868 30.5062548,105.804016 27.990127,103.33672 L8.22654289,83.9567041 C-1.92467414,74.0021005 -2.93603527,58.0741402 6.61751533,47.846311 L49.4124315,2.02335002 Z"
                      id="Stroke-3"
                      fill="#000000"
                    ></path>
                  </g>
                  <path
                    d="M131.914062,38.8828125 L131.914062,80.9140625 C131.914062,82.5286539 132.486973,83.9088484 133.632812,85.0546875 C134.778652,86.2005266 136.158846,86.7734375 137.773438,86.7734375 L149.140625,86.7734375 C150.130213,86.7734375 150.976559,87.1249965 151.679688,87.828125 C152.382816,88.5312535 152.734375,89.3775992 152.734375,90.3671875 L152.734375,90.4453125 C152.734375,91.4349008 152.382816,92.2682258 151.679688,92.9453125 C150.976559,93.648441 150.130213,94 149.140625,94 L137.773438,94 C134.153628,94 131.067721,92.7239711 128.515625,90.171875 C125.963529,87.6197789 124.6875,84.5338723 124.6875,80.9140625 L124.6875,38.8828125 C124.6875,37.8932242 125.039059,37.0468785 125.742188,36.34375 C126.445316,35.6666633 127.278641,35.328125 128.242188,35.328125 L128.359375,35.328125 C129.322921,35.328125 130.156246,35.6666633 130.859375,36.34375 C131.562504,37.0468785 131.914062,37.8932242 131.914062,38.8828125 Z M177.1875,58.6484375 C173.28123,58.6484375 169.94793,60.028632 167.1875,62.7890625 C164.453111,65.549493 163.085938,68.882793 163.085938,72.7890625 C163.085938,73.492191 163.13802,74.1822883 163.242188,74.859375 L187.96875,63.6875 C185.156236,60.3281082 181.562522,58.6484375 177.1875,58.6484375 Z M196.5625,63.8046875 C196.979169,64.6901086 197.018231,65.6015578 196.679688,66.5390625 C196.341144,67.4505254 195.71615,68.1145812 194.804688,68.53125 C191.158836,70.1718832 186.367217,72.3333199 180.429688,75.015625 C173.059859,78.348975 168.281261,80.5104117 166.09375,81.5 C168.906264,85.093768 172.604144,86.890625 177.1875,86.890625 C180.23439,86.890625 182.994779,85.9921965 185.46875,84.1953125 C187.864595,82.4505121 189.544266,80.1849098 190.507812,77.3984375 C191.080732,75.7838461 192.226554,74.9765625 193.945312,74.9765625 C195.169277,74.9765625 196.14583,75.4843699 196.875,76.5 C197.578129,77.4895883 197.721356,78.5703066 197.304688,79.7421875 C195.846347,83.9609586 193.294289,87.3723828 189.648438,89.9765625 C185.924461,92.6588676 181.770856,94 177.1875,94 C171.302054,94 166.276063,91.9166875 162.109375,87.75 C157.942687,83.5833125 155.859375,78.5573211 155.859375,72.671875 C155.859375,66.7864289 157.942687,61.7604375 162.109375,57.59375 C166.276063,53.4270625 171.302054,51.34375 177.1875,51.34375 C181.432313,51.34375 185.312482,52.5025926 188.828125,54.8203125 C192.291684,57.0859488 194.869783,60.0807105 196.5625,63.8046875 Z M224.726562,58.6484375 C220.820293,58.6484375 217.486993,60.028632 214.726562,62.7890625 C211.992174,65.549493 210.625,68.882793 210.625,72.7890625 C210.625,73.492191 210.677083,74.1822883 210.78125,74.859375 L235.507812,63.6875 C232.695298,60.3281082 229.101584,58.6484375 224.726562,58.6484375 Z M244.101562,63.8046875 C244.518231,64.6901086 244.557293,65.6015578 244.21875,66.5390625 C243.880207,67.4505254 243.255213,68.1145812 242.34375,68.53125 C238.697898,70.1718832 233.90628,72.3333199 227.96875,75.015625 C220.598921,78.348975 215.820323,80.5104117 213.632812,81.5 C216.445327,85.093768 220.143206,86.890625 224.726562,86.890625 C227.773453,86.890625 230.533842,85.9921965 233.007812,84.1953125 C235.403658,82.4505121 237.083329,80.1849098 238.046875,77.3984375 C238.619795,75.7838461 239.765616,74.9765625 241.484375,74.9765625 C242.708339,74.9765625 243.684892,75.4843699 244.414062,76.5 C245.117191,77.4895883 245.260419,78.5703066 244.84375,79.7421875 C243.385409,83.9609586 240.833352,87.3723828 237.1875,89.9765625 C233.463523,92.6588676 229.309919,94 224.726562,94 C218.841116,94 213.815125,91.9166875 209.648438,87.75 C205.48175,83.5833125 203.398438,78.5573211 203.398438,72.671875 C203.398438,66.7864289 205.48175,61.7604375 209.648438,57.59375 C213.815125,53.4270625 218.841116,51.34375 224.726562,51.34375 C228.971375,51.34375 232.851545,52.5025926 236.367188,54.8203125 C239.830746,57.0859488 242.408846,60.0807105 244.101562,63.8046875 Z M255.78125,35.328125 C256.744796,35.328125 257.578121,35.6666633 258.28125,36.34375 C258.984379,37.0468785 259.335938,37.8932242 259.335938,38.8828125 L259.335938,51.34375 L266.367188,51.34375 C267.330734,51.34375 268.164059,51.695309 268.867188,52.3984375 C269.570316,53.101566 269.921875,53.9479117 269.921875,54.9375 L269.921875,55.015625 C269.921875,56.0052133 269.570316,56.8385383 268.867188,57.515625 C268.164059,58.2187535 267.330734,58.5703125 266.367188,58.5703125 L259.335938,58.5703125 L259.335938,82.90625 C259.335938,83.9739637 259.713538,84.8854129 260.46875,85.640625 C261.223962,86.3958371 262.148432,86.7734375 263.242188,86.7734375 L266.367188,86.7734375 C267.330734,86.7734375 268.164059,87.1249965 268.867188,87.828125 C269.570316,88.5312535 269.921875,89.3775992 269.921875,90.3671875 L269.921875,90.4453125 C269.921875,91.4349008 269.570316,92.2682258 268.867188,92.9453125 C268.164059,93.648441 267.330734,94 266.367188,94 L263.242188,94 C260.169255,94 257.539073,92.9192816 255.351563,90.7578125 C253.190093,88.5703016 252.109375,85.9531402 252.109375,82.90625 L252.109375,38.8828125 C252.109375,37.8932242 252.460934,37.0468785 253.164063,36.34375 C253.867191,35.6666633 254.700516,35.328125 255.664063,35.328125 L255.78125,35.328125 Z M303.75,35.328125 C306.223971,35.328125 308.658842,35.6276012 311.054688,36.2265625 C312.851571,36.6953148 313.75,37.8411367 313.75,39.6640625 L313.75,39.78125 C313.75,40.9270891 313.281255,41.8645797 312.34375,42.59375 C311.432287,43.2968785 310.416672,43.5052098 309.296875,43.21875 C307.473949,42.7499977 305.625009,42.515625 303.75,42.515625 C297.65622,42.515625 292.447938,44.6770617 288.125,49 C283.802062,53.3229383 281.640625,58.5442402 281.640625,64.6640625 C281.640625,70.7838848 283.802062,76.0051867 288.125,80.328125 C292.447938,84.6250215 297.65622,86.7734375 303.75,86.7734375 C305.625009,86.7734375 307.473949,86.5520855 309.296875,86.109375 C310.416672,85.8229152 311.432287,86.0312465 312.34375,86.734375 C313.281255,87.4375035 313.75,88.3749941 313.75,89.546875 L313.75,89.625 C313.75,91.4739676 312.851571,92.6328102 311.054688,93.1015625 C308.658842,93.7005238 306.223971,94 303.75,94 C295.651001,94 288.737008,91.1354453 283.007812,85.40625 C277.278617,79.6770547 274.414062,72.7630613 274.414062,64.6640625 C274.414062,56.5650637 277.278617,49.6510703 283.007812,43.921875 C288.737008,38.1926797 295.651001,35.328125 303.75,35.328125 Z M340.15625,58.6484375 C336.24998,58.6484375 332.91668,60.028632 330.15625,62.7890625 C327.421861,65.549493 326.054688,68.882793 326.054688,72.7890625 C326.054688,76.6692902 327.421861,79.9895695 330.15625,82.75 C332.91668,85.5104305 336.24998,86.890625 340.15625,86.890625 C344.06252,86.890625 347.382799,85.5104305 350.117188,82.75 C352.877618,79.9895695 354.257812,76.6692902 354.257812,72.7890625 C354.257812,68.882793 352.877618,65.549493 350.117188,62.7890625 C347.382799,60.028632 344.06252,58.6484375 340.15625,58.6484375 Z M340.15625,51.34375 C346.041696,51.34375 351.067687,53.4270625 355.234375,57.59375 C359.401063,61.7604375 361.484375,66.7864289 361.484375,72.671875 C361.484375,78.5573211 359.401063,83.5833125 355.234375,87.75 C351.067687,91.9166875 346.041696,94 340.15625,94 C334.270804,94 329.244813,91.9166875 325.078125,87.75 C320.911437,83.5833125 318.828125,78.5573211 318.828125,72.671875 C318.828125,66.7864289 320.911437,61.7604375 325.078125,57.59375 C329.244813,53.4270625 334.270804,51.34375 340.15625,51.34375 Z M388.28125,58.6484375 C384.37498,58.6484375 381.04168,60.028632 378.28125,62.7890625 C375.546861,65.549493 374.179688,68.882793 374.179688,72.7890625 C374.179688,76.6692902 375.546861,79.9895695 378.28125,82.75 C381.04168,85.5104305 384.37498,86.890625 388.28125,86.890625 C392.18752,86.890625 395.507799,85.5104305 398.242188,82.75 C401.002618,79.9895695 402.382812,76.6692902 402.382812,72.7890625 C402.382812,68.882793 401.002618,65.549493 398.242188,62.7890625 C395.507799,60.028632 392.18752,58.6484375 388.28125,58.6484375 Z M406.054688,35.328125 C407.018234,35.328125 407.851559,35.6666633 408.554688,36.34375 C409.257816,37.0468785 409.609375,37.8932242 409.609375,38.8828125 L409.609375,72.7890625 C409.583333,78.6484668 407.487,83.6484168 403.320313,87.7890625 C399.153625,91.9297082 394.140654,94 388.28125,94 C382.395804,94 377.369813,91.9166875 373.203125,87.75 C369.036437,83.5833125 366.953125,78.5573211 366.953125,72.671875 C366.953125,66.7864289 369.036437,61.7604375 373.203125,57.59375 C377.369813,53.4270625 382.395804,51.34375 388.28125,51.34375 C393.64586,51.34375 398.346334,53.1275863 402.382813,56.6953125 L402.382813,38.8828125 C402.382813,37.8932242 402.734371,37.0468785 403.4375,36.34375 C404.140629,35.6666633 404.973954,35.328125 405.9375,35.328125 L406.054688,35.328125 Z M437.578125,58.6484375 C433.671855,58.6484375 430.338555,60.028632 427.578125,62.7890625 C424.843736,65.549493 423.476562,68.882793 423.476562,72.7890625 C423.476562,73.492191 423.528645,74.1822883 423.632812,74.859375 L448.359375,63.6875 C445.546861,60.3281082 441.953147,58.6484375 437.578125,58.6484375 Z M456.953125,63.8046875 C457.369794,64.6901086 457.408856,65.6015578 457.070312,66.5390625 C456.731769,67.4505254 456.106775,68.1145812 455.195312,68.53125 C451.549461,70.1718832 446.757842,72.3333199 440.820312,75.015625 C433.450484,78.348975 428.671886,80.5104117 426.484375,81.5 C429.296889,85.093768 432.994769,86.890625 437.578125,86.890625 C440.625015,86.890625 443.385404,85.9921965 445.859375,84.1953125 C448.25522,82.4505121 449.934891,80.1849098 450.898438,77.3984375 C451.471357,75.7838461 452.617179,74.9765625 454.335938,74.9765625 C455.559902,74.9765625 456.536455,75.4843699 457.265625,76.5 C457.968754,77.4895883 458.111981,78.5703066 457.695312,79.7421875 C456.236972,83.9609586 453.684914,87.3723828 450.039062,89.9765625 C446.315086,92.6588676 442.161481,94 437.578125,94 C431.692679,94 426.666688,91.9166875 422.5,87.75 C418.333312,83.5833125 416.25,78.5573211 416.25,72.671875 C416.25,66.7864289 418.333312,61.7604375 422.5,57.59375 C426.666688,53.4270625 431.692679,51.34375 437.578125,51.34375 C441.822938,51.34375 445.703107,52.5025926 449.21875,54.8203125 C452.682309,57.0859488 455.260408,60.0807105 456.953125,63.8046875 Z"
                    id="LeetCode"
                    fill="#000000"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Box>
    </>
  );
};

export default Header;