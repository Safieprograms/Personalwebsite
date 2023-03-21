import { motion, useInView, Variants} from "framer-motion";
import { useRef } from "react";


  const pathVarient = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition:{
        default: { duration: 2, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
      }
    }
  };

  /*
  const cardVariants: Variants = {
    offscreen: {
      x: 50,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };*/



const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return ( 
    <section className="projects" id="projects">
      <div className="container relative">
        <div className="title">
          <h1>projects :</h1>
        </div>
        <div className="arrow">
          <motion.svg ref={ref} initial="hidden" animate={isInView ? "visible" : ""}  className="desktop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1596 2876" fill="none">
            <circle cx="22" cy="22" r="22" transform="matrix(-1 0 0 1 44 946)" fill="#FFC815"/>
            <circle cx="22" cy="22" r="22" transform="matrix(-1 0 0 1 44 2232)" fill="#FFC815"/>
            <circle variants={pathVarient} cx="1572" cy="1614" r="22" fill="#FFC815"/>
            <motion.line variants={pathVarient} y1="-3.5" x2="909" y2="-3.5" transform="matrix(-1 0 0 1 1249 1936)" stroke="white" stroke-width="7"/>
            <motion.line variants={pathVarient} x1="378" y1="3.5" x2="1247" y2="3.50008" stroke="white" stroke-width="7"/>
            <motion.path variants={pathVarient} d="M1244 650C1286.68 650 1328.94 641.594 1368.37 625.261C1407.8 608.928 1443.63 584.989 1473.81 554.81C1503.99 524.631 1527.93 488.803 1544.26 449.372C1560.59 409.941 1569 367.68 1569 325C1569 282.32 1560.59 240.059 1544.26 200.628C1527.93 161.197 1503.99 125.369 1473.81 95.1903C1443.63 65.0113 1407.8 41.0719 1368.37 24.7391C1328.94 8.40637 1286.68 -1.86558e-06 1244 0V6.98749C1285.76 6.98749 1327.12 15.2131 1365.7 31.1947C1404.28 47.1764 1439.34 70.601 1468.87 100.131C1498.4 129.661 1521.82 164.719 1537.81 203.302C1553.79 241.885 1562.01 283.238 1562.01 325C1562.01 366.762 1553.79 408.115 1537.81 446.698C1521.82 485.281 1498.4 520.339 1468.87 549.869C1439.34 579.399 1404.28 602.824 1365.7 618.805C1327.12 634.787 1285.76 643.013 1244 643.013V650Z" fill="white"/>
            <motion.line variants={pathVarient} y1="-3.5" x2="909" y2="-3.5" transform="matrix(-1 0 0 1 1249 650)" stroke="white" stroke-width="7"/>
            <motion.path variants={pathVarient} d="M344 1293C301.32 1293 259.059 1284.59 219.628 1268.26C180.197 1251.93 144.369 1227.99 114.19 1197.81C84.0112 1167.63 60.072 1131.8 43.7391 1092.37C27.4064 1052.94 19 1010.68 19 968C19 925.32 27.4064 883.059 43.7391 843.628C60.072 804.197 84.0112 768.369 114.19 738.19C144.369 708.011 180.197 684.072 219.628 667.739C259.059 651.406 301.32 643 344 643V649.987C302.238 649.987 260.885 658.213 222.302 674.195C183.719 690.176 148.661 713.601 119.131 743.131C89.601 772.661 66.1764 807.719 50.1948 846.302C34.2131 884.885 25.9875 926.238 25.9875 968C25.9875 1009.76 34.2131 1051.12 50.1948 1089.7C66.1764 1128.28 89.601 1163.34 119.131 1192.87C148.661 1222.4 183.719 1245.82 222.302 1261.81C260.885 1277.79 302.238 1286.01 344 1286.01V1293Z" fill="white"/>
            <motion.line variants={pathVarient} x1="773.005" y1="2575.5" x2="340.005" y2="2575.5" stroke="white" stroke-width="7"/>
            <motion.path variants={pathVarient} d="M343.005 2579C300.325 2579 258.064 2570.59 218.633 2554.26C179.202 2537.93 143.374 2513.99 113.195 2483.81C83.0161 2453.63 59.0768 2417.8 42.744 2378.37C26.4113 2338.94 18.0049 2296.68 18.0049 2254C18.0049 2211.32 26.4113 2169.06 42.744 2129.63C59.0768 2090.2 83.0161 2054.37 113.195 2024.19C143.374 1994.01 179.202 1970.07 218.633 1953.74C258.064 1937.41 300.325 1929 343.005 1929V1935.99C301.243 1935.99 259.89 1944.21 221.307 1960.19C182.724 1976.18 147.666 1999.6 118.136 2029.13C88.6059 2058.66 65.1813 2093.72 49.1996 2132.3C33.218 2170.88 24.9924 2212.24 24.9924 2254C24.9924 2295.76 33.218 2337.12 49.1996 2375.7C65.1813 2414.28 88.6059 2449.34 118.136 2478.87C147.666 2508.4 182.724 2531.82 221.307 2547.81C259.89 2563.79 301.243 2572.01 343.005 2572.01V2579Z" fill="white"/>
            <motion.path variants={pathVarient} d="M771 2572C790.961 2572 810.726 2575.93 829.168 2583.57C847.609 2591.21 864.366 2602.41 878.48 2616.52C892.595 2630.63 903.791 2647.39 911.43 2665.83C919.068 2684.27 923 2704.04 923 2724L915.904 2724C915.904 2704.97 912.156 2686.13 904.874 2668.55C897.592 2650.97 886.918 2634.99 873.463 2621.54C860.007 2608.08 844.033 2597.41 826.452 2590.13C808.872 2582.84 790.029 2579.1 771 2579.1L771 2572Z" fill="white"/>
            <motion.line variants={pathVarient} x1="343" y1="1289.5" x2="1252" y2="1289.5" stroke="white" stroke-width="7"/>
            <motion.path variants={pathVarient} d="M1249 1936C1291.68 1936 1333.94 1927.59 1373.37 1911.26C1412.8 1894.93 1448.63 1870.99 1478.81 1840.81C1508.99 1810.63 1532.93 1774.8 1549.26 1735.37C1565.59 1695.94 1574 1653.68 1574 1611C1574 1568.32 1565.59 1526.06 1549.26 1486.63C1532.93 1447.2 1508.99 1411.37 1478.81 1381.19C1448.63 1351.01 1412.8 1327.07 1373.37 1310.74C1333.94 1294.41 1291.68 1286 1249 1286V1292.99C1290.76 1292.99 1332.12 1301.21 1370.7 1317.19C1409.28 1333.18 1444.34 1356.6 1473.87 1386.13C1503.4 1415.66 1526.82 1450.72 1542.81 1489.3C1558.79 1527.88 1567.01 1569.24 1567.01 1611C1567.01 1652.76 1558.79 1694.12 1542.81 1732.7C1526.82 1771.28 1503.4 1806.34 1473.87 1835.87C1444.34 1865.4 1409.28 1888.82 1370.7 1904.81C1332.12 1920.79 1290.76 1929.01 1249 1929.01V1936Z" fill="white"/>
            <motion.path variants={pathVarient} d="M883 2715C883 2715 904.5 2756 919.5 2756C934.5 2756 955 2715 955 2715" stroke="white" stroke-width="5" stroke-linecap="round"/>
            <circle cx="1574" cy="319" r="22" fill="#FFC815"/>
          </motion.svg>
          <svg className="phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 684 2876" fill="none">
            <path d="M337 650C379.68 650 421.941 641.594 461.372 625.261C500.803 608.928 536.631 584.989 566.81 554.81C596.989 524.631 620.928 488.803 637.261 449.372C653.594 409.941 662 367.68 662 325C662 282.32 653.594 240.059 637.261 200.628C620.928 161.197 596.989 125.369 566.81 95.1903C536.631 65.0113 500.803 41.0719 461.372 24.7391C421.941 8.40637 379.68 -1.86558e-06 337 0V6.98749C378.762 6.98749 420.115 15.2131 458.698 31.1947C497.281 47.1764 532.339 70.601 561.869 100.131C591.399 129.661 614.824 164.719 630.805 203.302C646.787 241.885 655.013 283.238 655.013 325C655.013 366.762 646.787 408.115 630.805 446.698C614.824 485.281 591.399 520.339 561.869 549.869C532.339 579.399 497.281 602.824 458.698 618.805C420.115 634.787 378.762 643.013 337 643.013V650Z" fill="white"/>
            <path d="M343 1293C300.32 1293 258.059 1284.59 218.628 1268.26C179.197 1251.93 143.369 1227.99 113.19 1197.81C83.0112 1167.63 59.072 1131.8 42.7391 1092.37C26.4064 1052.94 18 1010.68 18 968C18 925.32 26.4064 883.059 42.7391 843.628C59.072 804.197 83.0112 768.369 113.19 738.19C143.369 708.011 179.197 684.072 218.628 667.739C258.059 651.406 300.32 643 343 643V649.987C301.238 649.987 259.885 658.213 221.302 674.195C182.719 690.176 147.661 713.601 118.131 743.131C88.601 772.661 65.1764 807.719 49.1948 846.302C33.2131 884.885 24.9875 926.238 24.9875 968C24.9875 1009.76 33.2131 1051.12 49.1948 1089.7C65.1764 1128.28 88.601 1163.34 118.131 1192.87C147.661 1222.4 182.719 1245.82 221.302 1261.81C259.885 1277.79 301.238 1286.01 343 1286.01V1293Z" fill="white"/>
            <circle cx="22" cy="22" r="22" transform="matrix(-1 0 0 1 44 946)" fill="#FFC815"/>
            <path d="M343.005 2579C300.325 2579 258.064 2570.59 218.633 2554.26C179.202 2537.93 143.374 2513.99 113.195 2483.81C83.0161 2453.63 59.0768 2417.8 42.744 2378.37C26.4113 2338.94 18.0049 2296.68 18.0049 2254C18.0049 2211.32 26.4113 2169.06 42.744 2129.63C59.0768 2090.2 83.0161 2054.37 113.195 2024.19C143.374 1994.01 179.202 1970.07 218.633 1953.74C258.064 1937.41 300.325 1929 343.005 1929V1935.99C301.243 1935.99 259.89 1944.21 221.307 1960.19C182.724 1976.18 147.666 1999.6 118.136 2029.13C88.6059 2058.66 65.1813 2093.72 49.1996 2132.3C33.218 2170.88 24.9924 2212.24 24.9924 2254C24.9924 2295.76 33.218 2337.12 49.1996 2375.7C65.1813 2414.28 88.6059 2449.34 118.136 2478.87C147.666 2508.4 182.724 2531.82 221.307 2547.81C259.89 2563.79 301.243 2572.01 343.005 2572.01V2579Z" fill="white"/>
            <path d="M338 2572C357.961 2572 377.726 2575.93 396.168 2583.57C414.609 2591.21 431.366 2602.41 445.48 2616.52C459.595 2630.63 470.791 2647.39 478.43 2665.83C486.068 2684.27 490 2704.04 490 2724L482.904 2724C482.904 2704.97 479.156 2686.13 471.874 2668.55C464.592 2650.97 453.918 2634.99 440.463 2621.54C427.007 2608.08 411.033 2597.41 393.452 2590.13C375.872 2582.84 357.029 2579.1 338 2579.1L338 2572Z" fill="white"/>
            <circle cx="22" cy="22" r="22" transform="matrix(-1 0 0 1 44 2232)" fill="#FFC815"/>
            <path d="M340 1936C382.68 1936 424.941 1927.59 464.372 1911.26C503.803 1894.93 539.631 1870.99 569.81 1840.81C599.989 1810.63 623.928 1774.8 640.261 1735.37C656.594 1695.94 665 1653.68 665 1611C665 1568.32 656.594 1526.06 640.261 1486.63C623.928 1447.2 599.989 1411.37 569.81 1381.19C539.631 1351.01 503.803 1327.07 464.372 1310.74C424.941 1294.41 382.68 1286 340 1286V1292.99C381.762 1292.99 423.115 1301.21 461.698 1317.19C500.281 1333.18 535.339 1356.6 564.869 1386.13C594.399 1415.66 617.824 1450.72 633.805 1489.3C649.787 1527.88 658.013 1569.24 658.013 1611C658.013 1652.76 649.787 1694.12 633.805 1732.7C617.824 1771.28 594.399 1806.34 564.869 1835.87C535.339 1865.4 500.281 1888.82 461.698 1904.81C423.115 1920.79 381.762 1929.01 340 1929.01V1936Z" fill="white"/>
            <circle cx="659" cy="1612" r="22" fill="#FFC815"/>
            <path d="M450 2715C450 2715 471.5 2756 486.5 2756C501.5 2756 522 2715 522 2715" stroke="white" stroke-width="5" stroke-linecap="round"/>
            <circle cx="662" cy="319" r="22" fill="#FFC815"/>
          </svg>
        </div>
        <motion.div className="boxes">
          <div className="box grid gap-4 grid-cols-7">
            <div className="logo col-span-2">
              <img src={require("./../elements/21.png")} alt="" />
            </div>
            <div className="prog col-span-5">
              <h1>zeejin</h1>
              <span>06/12/2022</span>
              <p>brand identity for a freelance cyber security team specialized in solving problems associated with cyber security</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">thumb_up</span>
                  <span>2k</span>
                </div>
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">done</span>
                  <span>801</span>
                </div>
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">star</span>
                  <span>85</span>
                </div>
              </div>
            </div>
          </div>
          <div className="box grid gap-4 grid-cols-7">
            <div className="logo col-span-2">
              <img src={require("./../elements/frame.png")} alt="" />
            </div>
            <div className="prog col-span-5">
              <h1>ideathech 02</h1>
              <span>06/12/2022</span>
              <p>event visual identity for an ideathon that took place at the higher school of computer science -bejaia-</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">thumb_up</span>
                  <span>2k</span>
                </div>
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">done</span>
                  <span>801</span>
                </div>
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">star</span>
                  <span>85</span>
                </div>
              </div>
            </div>
          </div>
          <div className="box grid gap-4 grid-cols-7">
            <div className="logo col-span-2">
              <img src={require("./../elements/Group.png")} alt="" />
            </div>
            <div className="prog col-span-5">
              <h1>typography</h1>
              <span>06/12/2022</span>
              <p>a set of arabic typographies, made for artistic needs </p>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">thumb_up</span>
                  <span>2k</span>
                </div>
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">done</span>
                  <span>801</span>
                </div>
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">star</span>
                  <span>85</span>
                </div>
              </div>
            </div>
          </div>
          <div className="box grid gap-4 grid-cols-7">
            <div className="logo col-span-2">
              <img src={require("./../elements/31.png")} alt="" />
            </div>
            <div className="prog col-span-5">
              <h1>polly</h1>
              <span>06/12/2022</span>
              <p>1st winner place in BrAIn On ideathon, it’s a branding for a tech start-up that implement a virtual assistant assistant in a AR technology </p>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">thumb_up</span>
                  <span>2k</span>
                </div>
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">done</span>
                  <span>801</span>
                </div>
                <div className="flex items-center mr-5">
                  <span className="material-symbols-rounded mr-2">star</span>
                  <span>85</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 
export default Projects;