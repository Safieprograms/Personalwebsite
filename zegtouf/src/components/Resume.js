import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Resume = () => {
  return ( 
    <section className="resume" id="resume">
      <div className="container content">
        
        <div className="title">
          <div className="yellow-line top-4 left-[calc(-50%-20px)] w-[50%]"></div>
          <h1>content :</h1>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={80}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="firstslider"
        >
          
          <SwiperSlide>
            <div className="img-txt">
              <img src={require("./../elements/pic1.png")} alt="" />
              <div className="txt">
                <p>Content to be added here</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-txt">
              <img src={require("./../elements/pic1.png")} alt="" />
              <div className="txt">
                <p>Content to be added here</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-txt">
              <img src={require("./../elements/pic1.png")} alt="" />
              <div className="txt">
                <p>Content to be added here</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-txt">
              <img src={require("./../elements/pic1.png")} alt="" />
              <div className="txt">
                <p>Content to be added here</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      <div className="container services">
        <div className="title">
          <h1>services :</h1>
          <div className="yellow-line top-4 ml-36 w-[150%]"></div>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="firstslider"
        >
          <SwiperSlide>
            <div className="img-txt">
              <img src={require("./../elements/group69.png")} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-txt">
              <img src={require("./../elements/group69.png")} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-txt">
              <img src={require("./../elements/group69.png")} alt="" />
            </div>
          </SwiperSlide>
          
        </Swiper>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="firstslider"
        >
          <SwiperSlide>
            <div className="img-txt">
              <img src={require("./../elements/group69.png")} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-txt">
              <img src={require("./../elements/group69.png")} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-txt">
              <img src={require("./../elements/group69.png")} alt="" />
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>


      <div className="container social">
        <div className="title">
          <div className="yellow-line top-4 left-[calc(-50%-20px)] w-[50%]"></div>
          <h1>social media links :</h1>
        </div>
        <div className="blured"></div>
        <div className="slinks">
          <div className="scl">
            <a href="https://youtube.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 111" fill="none">
                <path d="M1.51705 104.814V87.3599H5.20739V101.772H12.6903V104.814H1.51705ZM15.0661 104.814V91.7235H18.6967V104.814H15.0661ZM16.8899 90.036C16.3501 90.036 15.8871 89.8571 15.5007 89.4991C15.12 89.1355 14.9297 88.7008 14.9297 88.1951C14.9297 87.6951 15.12 87.2662 15.5007 86.9082C15.8871 86.5446 16.3501 86.3627 16.8899 86.3627C17.4297 86.3627 17.8899 86.5446 18.2706 86.9082C18.657 87.2662 18.8501 87.6951 18.8501 88.1951C18.8501 88.7008 18.657 89.1355 18.2706 89.4991C17.8899 89.8571 17.4297 90.036 16.8899 90.036ZM25.2358 97.2463V104.814H21.6051V91.7235H25.0653V94.0332H25.2188C25.5085 93.2718 25.9943 92.6696 26.6761 92.2264C27.358 91.7775 28.1847 91.5531 29.1562 91.5531C30.0653 91.5531 30.858 91.752 31.5341 92.1497C32.2102 92.5474 32.7358 93.1156 33.1108 93.8542C33.4858 94.5872 33.6733 95.4622 33.6733 96.4792V104.814H30.0426V97.127C30.0483 96.3258 29.8438 95.7008 29.429 95.252C29.0142 94.7974 28.4432 94.5701 27.7159 94.5701C27.2273 94.5701 26.7955 94.6752 26.4205 94.8855C26.0511 95.0957 25.7614 95.4025 25.5511 95.8059C25.3466 96.2037 25.2415 96.6838 25.2358 97.2463ZM39.8246 101.047L39.8331 96.6923H40.3615L44.5547 91.7235H48.7223L43.0888 98.3031H42.228L39.8246 101.047ZM36.5348 104.814V87.3599H40.1655V104.814H36.5348ZM44.7166 104.814L40.8643 99.1127L43.2848 96.5474L48.9695 104.814H44.7166ZM55.9304 105.07C54.5838 105.07 53.4247 104.797 52.4531 104.252C51.4872 103.701 50.7429 102.922 50.2202 101.917C49.6974 100.905 49.4361 99.7093 49.4361 98.3287C49.4361 96.9821 49.6974 95.8002 50.2202 94.7832C50.7429 93.7662 51.4787 92.9735 52.4276 92.4054C53.3821 91.8372 54.5014 91.5531 55.7855 91.5531C56.6491 91.5531 57.4531 91.6923 58.1974 91.9707C58.9474 92.2434 59.6009 92.6554 60.1577 93.2065C60.7202 93.7576 61.1577 94.4508 61.4702 95.286C61.7827 96.1156 61.9389 97.0872 61.9389 98.2008V99.198H50.8849V96.948H58.5213C58.5213 96.4252 58.4077 95.9622 58.1804 95.5588C57.9531 95.1554 57.6378 94.84 57.2344 94.6127C56.8366 94.3798 56.3736 94.2633 55.8452 94.2633C55.294 94.2633 54.8054 94.3912 54.3793 94.6468C53.9588 94.8968 53.6293 95.2349 53.3906 95.661C53.152 96.0815 53.0298 96.5502 53.0241 97.0673V99.2065C53.0241 99.8542 53.1435 100.414 53.3821 100.885C53.6264 101.357 53.9702 101.721 54.4134 101.976C54.8565 102.232 55.3821 102.36 55.9901 102.36C56.3935 102.36 56.7628 102.303 57.098 102.189C57.4332 102.076 57.7202 101.905 57.9588 101.678C58.1974 101.451 58.3793 101.172 58.5043 100.843L61.8622 101.064C61.6918 101.871 61.3423 102.576 60.8139 103.178C60.2912 103.775 59.6151 104.241 58.7855 104.576C57.9616 104.905 57.0099 105.07 55.9304 105.07ZM69.1321 105.028C68.1378 105.028 67.2372 104.772 66.4304 104.26C65.6293 103.743 64.9929 102.985 64.5213 101.985C64.0554 100.979 63.8224 99.7463 63.8224 98.286C63.8224 96.786 64.0639 95.5389 64.5469 94.5446C65.0298 93.5446 65.6719 92.7974 66.473 92.3031C67.2798 91.8031 68.1634 91.5531 69.1236 91.5531C69.8565 91.5531 70.4673 91.6781 70.956 91.9281C71.4503 92.1724 71.848 92.4792 72.1491 92.8485C72.456 93.2122 72.6889 93.5701 72.848 93.9224H72.9588V87.3599H76.581V104.814H73.0014V102.718H72.848C72.6776 103.081 72.4361 103.442 72.1236 103.8C71.8168 104.153 71.4162 104.445 70.9219 104.678C70.4332 104.911 69.8366 105.028 69.1321 105.028ZM70.2827 102.138C70.8679 102.138 71.3622 101.979 71.7656 101.661C72.1747 101.337 72.4872 100.885 72.7031 100.306C72.9247 99.7264 73.0355 99.0474 73.0355 98.269C73.0355 97.4906 72.9276 96.8145 72.7116 96.2406C72.4957 95.6667 72.1832 95.2235 71.7741 94.911C71.3651 94.5985 70.8679 94.4423 70.2827 94.4423C69.6861 94.4423 69.1832 94.6042 68.7741 94.9281C68.3651 95.252 68.0554 95.7008 67.8452 96.2747C67.6349 96.8485 67.5298 97.5133 67.5298 98.269C67.5298 99.0304 67.6349 99.7037 67.8452 100.289C68.0611 100.868 68.3707 101.323 68.7741 101.653C69.1832 101.976 69.6861 102.138 70.2827 102.138ZM85.1207 104.814V91.7235H88.7514V104.814H85.1207ZM86.9446 90.036C86.4048 90.036 85.9418 89.8571 85.5554 89.4991C85.1747 89.1355 84.9844 88.7008 84.9844 88.1951C84.9844 87.6951 85.1747 87.2662 85.5554 86.9082C85.9418 86.5446 86.4048 86.3627 86.9446 86.3627C87.4844 86.3627 87.9446 86.5446 88.3253 86.9082C88.7116 87.2662 88.9048 87.6951 88.9048 88.1951C88.9048 88.7008 88.7116 89.1355 88.3253 89.4991C87.9446 89.8571 87.4844 90.036 86.9446 90.036ZM95.2905 97.2463V104.814H91.6598V91.7235H95.12V94.0332H95.2734C95.5632 93.2718 96.049 92.6696 96.7308 92.2264C97.4126 91.7775 98.2393 91.5531 99.2109 91.5531C100.12 91.5531 100.913 91.752 101.589 92.1497C102.265 92.5474 102.79 93.1156 103.165 93.8542C103.54 94.5872 103.728 95.4622 103.728 96.4792V104.814H100.097V97.127C100.103 96.3258 99.8984 95.7008 99.4837 95.252C99.0689 94.7974 98.4979 94.5701 97.7706 94.5701C97.282 94.5701 96.8501 94.6752 96.4751 94.8855C96.1058 95.0957 95.8161 95.4025 95.6058 95.8059C95.4013 96.2037 95.2962 96.6838 95.2905 97.2463Z" fill="white"/>
                <path d="M29.0503 0.814481C27.1773 0.82509 25.3852 1.47049 24.0651 2.60983C22.7451 3.74917 22.0042 5.28995 22.0043 6.8959C22.0043 8.5088 22.7515 10.0556 24.0817 11.1961C25.4119 12.3366 27.216 12.9773 29.0972 12.9773C30.9779 12.9768 32.7815 12.3359 34.1112 11.1955C35.4409 10.055 36.1879 8.50848 36.1879 6.8959C36.1879 5.28301 35.4406 3.73618 34.1105 2.59569C32.7803 1.4552 30.9762 0.814481 29.095 0.814481C29.0808 0.814444 29.0645 0.814444 29.0503 0.814481ZM25.3824 17.8388C23.508 17.8388 22 19.1318 22 20.7389V55.9162C22 57.5233 23.508 58.8145 25.3824 58.8145H32.5052C34.3796 58.8145 35.8855 57.5215 35.8855 55.9162V20.7371C35.8855 19.13 34.3774 17.837 32.5052 17.837H25.3803L25.3824 17.8388ZM46.1116 17.8388C44.2372 17.8388 42.7291 19.1318 42.7291 20.7389V55.9162C42.7291 57.5233 44.2372 58.8145 46.1116 58.8145H53.2343C55.1087 58.8145 56.6146 57.5215 56.6146 55.9162V35.9005C61.0386 30.8582 70.1145 32.3466 70.1145 38.8042V55.9125C70.1145 57.5196 71.6226 58.8108 73.497 58.8108H80.6197C82.4941 58.8108 84 57.5178 84 55.9125V32.4634C84 20.843 63.2283 17.7986 56.6146 23.6043V20.7352C56.6146 19.1281 55.1066 17.8352 53.2343 17.8352H46.1073L46.1116 17.8388Z" fill="white"/>
              </svg>
            </a>
          </div>
          <div className="scl">
            <a href="https://youtube.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="113" height="94" viewBox="0 0 113 94" fill="none">
                <path d="M1.51705 83.3381V65.8836H8.50568C9.78977 65.8836 10.8608 66.0739 11.7188 66.4546C12.5767 66.8353 13.2216 67.3637 13.6534 68.0398C14.0852 68.7103 14.3011 69.483 14.3011 70.358C14.3011 71.0398 14.1648 71.6393 13.892 72.1563C13.6193 72.6677 13.2443 73.0881 12.767 73.4177C12.2955 73.7415 11.7557 73.9717 11.1477 74.108V74.2785C11.8125 74.3069 12.4347 74.4944 13.0142 74.841C13.5994 75.1876 14.0739 75.6734 14.4375 76.2984C14.8011 76.9177 14.983 77.6563 14.983 78.5143C14.983 79.4404 14.7528 80.2671 14.2926 80.9944C13.8381 81.716 13.1648 82.287 12.2727 82.7075C11.3807 83.1279 10.2813 83.3381 8.97443 83.3381H1.51705ZM5.20739 80.3211H8.21591C9.24432 80.3211 9.99432 80.1251 10.4659 79.733C10.9375 79.3353 11.1733 78.8069 11.1733 78.1478C11.1733 77.6648 11.0568 77.2387 10.8239 76.8694C10.5909 76.5001 10.2585 76.2103 9.8267 76.0001C9.40057 75.7898 8.89205 75.6847 8.30114 75.6847H5.20739V80.3211ZM5.20739 73.1876H7.94318C8.44886 73.1876 8.89773 73.0995 9.28977 72.9234C9.6875 72.7415 10 72.4859 10.2273 72.1563C10.4602 71.8268 10.5767 71.4319 10.5767 70.9717C10.5767 70.341 10.3523 69.8325 9.90341 69.4461C9.46023 69.0597 8.82955 68.8665 8.01136 68.8665H5.20739V73.1876ZM23.282 83.5938C21.9354 83.5938 20.7763 83.3211 19.8047 82.7756C18.8388 82.2245 18.0945 81.4461 17.5717 80.4404C17.049 79.429 16.7876 78.233 16.7876 76.8523C16.7876 75.5057 17.049 74.3239 17.5717 73.3069C18.0945 72.2898 18.8303 71.4972 19.7791 70.929C20.7337 70.3609 21.853 70.0768 23.1371 70.0768C24.0007 70.0768 24.8047 70.216 25.549 70.4944C26.299 70.7671 26.9524 71.179 27.5092 71.7302C28.0717 72.2813 28.5092 72.9745 28.8217 73.8097C29.1342 74.6393 29.2905 75.6109 29.2905 76.7245V77.7217H18.2365V75.4717H25.8729C25.8729 74.9489 25.7592 74.4859 25.532 74.0825C25.3047 73.679 24.9893 73.3637 24.5859 73.1364C24.1882 72.9035 23.7251 72.787 23.1967 72.787C22.6456 72.787 22.157 72.9148 21.7308 73.1705C21.3104 73.4205 20.9808 73.7586 20.7422 74.1847C20.5036 74.6052 20.3814 75.0739 20.3757 75.591V77.7302C20.3757 78.3779 20.495 78.9376 20.7337 79.4092C20.978 79.8807 21.3217 80.2444 21.7649 80.5001C22.2081 80.7557 22.7337 80.8836 23.3416 80.8836C23.745 80.8836 24.1143 80.8268 24.4496 80.7131C24.7848 80.5995 25.0717 80.429 25.3104 80.2018C25.549 79.9745 25.7308 79.6961 25.8558 79.3665L29.2138 79.5881C29.0433 80.395 28.6939 81.0995 28.1655 81.7018C27.6428 82.2984 26.9666 82.7643 26.1371 83.0995C25.3132 83.429 24.3615 83.5938 23.282 83.5938ZM35.2905 75.77V83.3381H31.6598V65.8836H35.1882V72.5569H35.3416C35.6371 71.7842 36.1143 71.179 36.7734 70.7415C37.4325 70.2984 38.2592 70.0768 39.2536 70.0768C40.1626 70.0768 40.9553 70.2756 41.6314 70.6734C42.3132 71.0654 42.8416 71.6307 43.2166 72.3694C43.5973 73.1023 43.7848 73.9802 43.7791 75.0029V83.3381H40.1484V75.6506C40.1541 74.8438 39.9496 74.216 39.5348 73.7671C39.1257 73.3182 38.5518 73.0938 37.8132 73.0938C37.3189 73.0938 36.8814 73.1989 36.5007 73.4092C36.1257 73.6194 35.8303 73.9262 35.6143 74.3296C35.4041 74.7273 35.2962 75.2075 35.2905 75.77ZM50.3693 83.5853C49.5341 83.5853 48.7898 83.4404 48.1364 83.1506C47.483 82.8552 46.9659 82.4205 46.5852 81.8467C46.2102 81.2671 46.0227 80.5455 46.0227 79.6819C46.0227 78.9546 46.1563 78.3438 46.4233 77.8495C46.6903 77.3552 47.054 76.9575 47.5142 76.6563C47.9744 76.3552 48.4972 76.1279 49.0824 75.9745C49.6733 75.8211 50.2926 75.7131 50.9403 75.6506C51.7017 75.5711 52.3153 75.4972 52.7812 75.429C53.2472 75.3552 53.5852 75.2472 53.7955 75.1052C54.0057 74.9631 54.1108 74.7529 54.1108 74.4745V74.4234C54.1108 73.8836 53.9403 73.466 53.5994 73.1705C53.2642 72.8751 52.7869 72.7273 52.1676 72.7273C51.5142 72.7273 50.9943 72.8722 50.608 73.162C50.2216 73.4461 49.9659 73.804 49.8409 74.2359L46.483 73.9631C46.6534 73.1677 46.9886 72.4802 47.4886 71.9006C47.9886 71.3154 48.6335 70.8665 49.4233 70.554C50.2188 70.2359 51.1392 70.0768 52.1847 70.0768C52.9119 70.0768 53.608 70.162 54.2727 70.3325C54.9432 70.5029 55.5369 70.7671 56.054 71.1251C56.5767 71.483 56.9886 71.9432 57.2898 72.5057C57.5909 73.0626 57.7415 73.7302 57.7415 74.5086V83.3381H54.2983V81.5228H54.196C53.9858 81.9319 53.7045 82.2927 53.3523 82.6052C53 82.912 52.5767 83.1535 52.0824 83.3296C51.5881 83.5001 51.017 83.5853 50.3693 83.5853ZM51.4091 81.0796C51.9432 81.0796 52.4148 80.9745 52.8239 80.7643C53.233 80.5484 53.554 80.2586 53.7869 79.895C54.0199 79.5313 54.1364 79.1194 54.1364 78.6592V77.27C54.0227 77.3438 53.8665 77.412 53.6676 77.4745C53.4744 77.5313 53.2557 77.5853 53.0114 77.6364C52.767 77.6819 52.5227 77.7245 52.2784 77.7643C52.0341 77.7984 51.8125 77.8296 51.6136 77.858C51.1875 77.9205 50.8153 78.02 50.4972 78.1563C50.179 78.2927 49.9318 78.4773 49.7557 78.7103C49.5795 78.9376 49.4915 79.2217 49.4915 79.5626C49.4915 80.0569 49.6705 80.4347 50.0284 80.6961C50.392 80.9518 50.8523 81.0796 51.4091 81.0796ZM64.1889 75.77V83.3381H60.5582V70.2472H64.0185V72.5569H64.1719C64.4616 71.7955 64.9474 71.1932 65.6293 70.7501C66.3111 70.3012 67.1378 70.0768 68.1094 70.0768C69.0185 70.0768 69.8111 70.2756 70.4872 70.6734C71.1634 71.0711 71.6889 71.6393 72.0639 72.3779C72.4389 73.1109 72.6264 73.9859 72.6264 75.0029V83.3381H68.9957V75.6506C69.0014 74.8495 68.7969 74.2245 68.3821 73.7756C67.9673 73.3211 67.3963 73.0938 66.669 73.0938C66.1804 73.0938 65.7486 73.1989 65.3736 73.4092C65.0043 73.6194 64.7145 73.9262 64.5043 74.3296C64.2997 74.7273 64.1946 75.2075 64.1889 75.77ZM81.4027 83.5938C80.0618 83.5938 78.9084 83.3097 77.9425 82.7415C76.9822 82.1677 76.2436 81.3722 75.7266 80.3552C75.2152 79.3381 74.9595 78.1677 74.9595 76.8438C74.9595 75.5029 75.218 74.3268 75.7351 73.3154C76.2578 72.2984 76.9993 71.5057 77.9595 70.9376C78.9197 70.3637 80.0618 70.0768 81.3857 70.0768C82.5277 70.0768 83.5277 70.2842 84.3857 70.6989C85.2436 71.1137 85.9226 71.6961 86.4226 72.4461C86.9226 73.1961 87.1982 74.0768 87.2493 75.0881H83.8232C83.7266 74.4347 83.4709 73.9092 83.0561 73.5114C82.647 73.108 82.1101 72.9063 81.4453 72.9063C80.8828 72.9063 80.3913 73.0597 79.9709 73.3665C79.5561 73.6677 79.2322 74.108 78.9993 74.6876C78.7663 75.2671 78.6499 75.9688 78.6499 76.7927C78.6499 77.6279 78.7635 78.3381 78.9908 78.9234C79.2237 79.5086 79.5504 79.9546 79.9709 80.2614C80.3913 80.5682 80.8828 80.7217 81.4453 80.7217C81.8601 80.7217 82.2322 80.6364 82.5618 80.466C82.897 80.2955 83.1726 80.0484 83.3885 79.7245C83.6101 79.395 83.755 79.0001 83.8232 78.5398H87.2493C87.1925 79.5398 86.9197 80.4205 86.4311 81.1819C85.9482 81.9376 85.2805 82.5285 84.4283 82.9546C83.576 83.3807 82.5675 83.5938 81.4027 83.5938ZM95.5398 83.5938C94.1932 83.5938 93.0341 83.3211 92.0625 82.7756C91.0966 82.2245 90.3523 81.4461 89.8295 80.4404C89.3068 79.429 89.0455 78.233 89.0455 76.8523C89.0455 75.5057 89.3068 74.3239 89.8295 73.3069C90.3523 72.2898 91.0881 71.4972 92.0369 70.929C92.9915 70.3609 94.1108 70.0768 95.3949 70.0768C96.2585 70.0768 97.0625 70.216 97.8068 70.4944C98.5568 70.7671 99.2102 71.179 99.767 71.7302C100.33 72.2813 100.767 72.9745 101.08 73.8097C101.392 74.6393 101.548 75.6109 101.548 76.7245V77.7217H90.4943V75.4717H98.1307C98.1307 74.9489 98.017 74.4859 97.7898 74.0825C97.5625 73.679 97.2472 73.3637 96.8438 73.1364C96.446 72.9035 95.983 72.787 95.4545 72.787C94.9034 72.787 94.4148 72.9148 93.9886 73.1705C93.5682 73.4205 93.2386 73.7586 93 74.1847C92.7614 74.6052 92.6392 75.0739 92.6335 75.591V77.7302C92.6335 78.3779 92.7528 78.9376 92.9915 79.4092C93.2358 79.8807 93.5795 80.2444 94.0227 80.5001C94.4659 80.7557 94.9915 80.8836 95.5994 80.8836C96.0028 80.8836 96.3722 80.8268 96.7074 80.7131C97.0426 80.5995 97.3295 80.429 97.5682 80.2018C97.8068 79.9745 97.9886 79.6961 98.1136 79.3665L101.472 79.5881C101.301 80.395 100.952 81.0995 100.423 81.7018C99.9006 82.2984 99.2244 82.7643 98.3949 83.0995C97.571 83.429 96.6193 83.5938 95.5398 83.5938Z" fill="white"/>
                <path d="M56.0384 26.6855C57.1961 28.7745 57.7671 31.1557 57.6873 33.5616C57.7322 36.158 57.0895 38.7178 55.8285 40.9642C55.0645 42.3693 54.0468 43.61 52.8305 44.6191C51.4526 45.7713 49.8288 46.5677 48.0936 46.9421C46.1229 47.3747 44.1121 47.5824 42.0975 47.5616H23.21V1.03944H43.5366C45.6057 0.872413 47.6826 1.23762 49.5817 2.10241C51.4807 2.96721 53.1429 4.30465 54.4194 5.99519C55.7401 8.10391 56.4093 10.5775 56.3382 13.0881C56.4548 15.5316 55.768 17.9441 54.3894 19.9332C53.5072 21.0299 52.415 21.9262 51.1816 22.566C53.2082 23.3261 54.9221 24.7798 56.0384 26.6855Z" fill="white" stroke="#303C42" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.2039 19.6235H41.1979C42.7418 19.692 44.2749 19.3281 45.635 18.5704C46.1775 18.1658 46.6073 17.6207 46.8809 16.99C47.1546 16.3592 47.2626 15.6651 47.194 14.9775C47.2775 14.1673 47.1031 13.3512 46.6974 12.6526C46.2917 11.9539 45.6767 11.411 44.9455 11.1058C43.3452 10.5849 41.6765 10.3237 39.9987 10.3315H32.2039V19.6235ZM47.194 32.4155C47.2679 31.5071 47.0649 30.5975 46.6133 29.8143C46.1616 29.0312 45.4841 28.4136 44.6756 28.0483C43.4147 27.5468 42.0684 27.315 40.7183 27.3669H32.2039V38.2076H40.5684C41.9419 38.2781 43.3136 38.0349 44.5857 37.4952C45.4636 37.0166 46.1818 36.2762 46.6469 35.3703C47.1121 34.4644 47.3027 33.4349 47.194 32.4155Z" fill="#292929" stroke="#303C42" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M92.1046 32.0128V30.4641C92.2921 26.1544 90.8206 21.9432 88.0117 18.7511C85.2028 15.5589 81.285 13.6454 77.1145 13.4287C72.944 13.6454 69.0262 15.5589 66.2173 18.7511C63.4084 21.9432 61.9368 26.1544 62.1244 30.4641C61.9368 34.7738 63.4084 38.985 66.2173 42.1771C69.0262 45.3693 72.944 47.2828 77.1145 47.4995C79.9632 47.421 82.7312 46.5052 85.0941 44.8595C87.457 43.2137 89.3168 40.9062 90.4557 38.2075H82.391C81.8216 39.1142 81.0516 39.8679 80.1445 40.4065C79.2375 40.945 78.2194 41.253 77.1745 41.3048C73.3969 41.3048 70.309 37.2473 69.7993 32.0128H92.1046ZM77.1145 19.6234C78.7219 19.8055 80.2347 20.4996 81.4433 21.6095C82.6519 22.7194 83.4965 24.1902 83.8601 25.8181H70.3689C70.7359 24.1811 71.5894 22.7037 72.8098 21.5928C74.0302 20.482 75.5563 19.7933 77.1745 19.6234H77.1145Z" fill="white" stroke="#303C42" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M68.1807 1.03931H86.1688V7.234H68.1807V1.03931Z" fill="white" stroke="#303C42" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="scl">
            <a href="https://youtube.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 106" fill="none">
                <path d="M1.51705 82.3599H6.06818L10.875 94.0872H11.0795L15.8864 82.3599H20.4375V99.8145H16.858V88.4537H16.7131L12.196 99.7292H9.75852L5.24148 88.411H5.09659V99.8145H1.51705V82.3599ZM27.1428 100.062C26.3075 100.062 25.5632 99.9167 24.9098 99.627C24.2564 99.3315 23.7393 98.8968 23.3587 98.323C22.9837 97.7434 22.7962 97.0218 22.7962 96.1582C22.7962 95.4309 22.9297 94.8201 23.1967 94.3258C23.4638 93.8315 23.8274 93.4338 24.2876 93.1326C24.7479 92.8315 25.2706 92.6042 25.8558 92.4508C26.4467 92.2974 27.0661 92.1895 27.7138 92.127C28.4751 92.0474 29.0888 91.9735 29.5547 91.9054C30.0206 91.8315 30.3587 91.7235 30.5689 91.5815C30.7791 91.4395 30.8842 91.2292 30.8842 90.9508V90.8997C30.8842 90.3599 30.7138 89.9423 30.3729 89.6468C30.0376 89.3514 29.5604 89.2037 28.9411 89.2037C28.2876 89.2037 27.7678 89.3485 27.3814 89.6383C26.995 89.9224 26.7393 90.2804 26.6143 90.7122L23.2564 90.4395C23.4268 89.644 23.7621 88.9565 24.2621 88.377C24.7621 87.7917 25.407 87.3429 26.1967 87.0304C26.9922 86.7122 27.9126 86.5531 28.9581 86.5531C29.6854 86.5531 30.3814 86.6383 31.0462 86.8088C31.7166 86.9792 32.3104 87.2434 32.8274 87.6014C33.3501 87.9593 33.7621 88.4196 34.0632 88.9821C34.3643 89.5389 34.5149 90.2065 34.5149 90.9849V99.8145H31.0717V97.9991H30.9695C30.7592 98.4082 30.478 98.769 30.1257 99.0815C29.7734 99.3883 29.3501 99.6298 28.8558 99.8059C28.3615 99.9764 27.7905 100.062 27.1428 100.062ZM28.1825 97.5559C28.7166 97.5559 29.1882 97.4508 29.5973 97.2406C30.0064 97.0247 30.3274 96.7349 30.5604 96.3713C30.7933 96.0076 30.9098 95.5957 30.9098 95.1355V93.7463C30.7962 93.8201 30.6399 93.8883 30.4411 93.9508C30.2479 94.0076 30.0291 94.0616 29.7848 94.1127C29.5405 94.1582 29.2962 94.2008 29.0518 94.2406C28.8075 94.2747 28.5859 94.3059 28.3871 94.3343C27.9609 94.3968 27.5888 94.4963 27.2706 94.6326C26.9524 94.769 26.7053 94.9537 26.5291 95.1866C26.353 95.4139 26.2649 95.698 26.2649 96.0389C26.2649 96.5332 26.4439 96.911 26.8018 97.1724C27.1655 97.4281 27.6257 97.5559 28.1825 97.5559ZM37.3317 99.8145V86.7235H40.9624V99.8145H37.3317ZM39.1555 85.036C38.6158 85.036 38.1527 84.8571 37.7663 84.4991C37.3857 84.1355 37.1953 83.7008 37.1953 83.1951C37.1953 82.6951 37.3857 82.2662 37.7663 81.9082C38.1527 81.5446 38.6158 81.3627 39.1555 81.3627C39.6953 81.3627 40.1555 81.5446 40.5362 81.9082C40.9226 82.2662 41.1158 82.6951 41.1158 83.1951C41.1158 83.7008 40.9226 84.1355 40.5362 84.4991C40.1555 84.8571 39.6953 85.036 39.1555 85.036ZM47.5014 82.3599V99.8145H43.8707V82.3599H47.5014ZM55.9645 99.8145V86.7235H59.4247V89.0332H59.5781C59.8509 88.2662 60.3054 87.661 60.9418 87.2179C61.5781 86.7747 62.3395 86.5531 63.2259 86.5531C64.1236 86.5531 64.8878 86.7775 65.5185 87.2264C66.1491 87.6696 66.5696 88.2718 66.7798 89.0332H66.9162C67.1832 88.2832 67.6662 87.6838 68.3651 87.2349C69.0696 86.7804 69.902 86.5531 70.8622 86.5531C72.0838 86.5531 73.0753 86.9423 73.8366 87.7207C74.6037 88.4934 74.9872 89.59 74.9872 91.0105V99.8145H71.3651V91.7264C71.3651 90.9991 71.1719 90.4537 70.7855 90.09C70.3991 89.7264 69.9162 89.5446 69.3366 89.5446C68.6776 89.5446 68.1634 89.7548 67.794 90.1752C67.4247 90.59 67.2401 91.1383 67.2401 91.8201V99.8145H63.7202V91.6497C63.7202 91.0076 63.5355 90.4963 63.1662 90.1156C62.8026 89.7349 62.3224 89.5446 61.7259 89.5446C61.3224 89.5446 60.9588 89.6468 60.6349 89.8514C60.3168 90.0502 60.0639 90.3315 59.8764 90.6951C59.6889 91.0531 59.5952 91.4735 59.5952 91.9565V99.8145H55.9645ZM83.821 100.07C82.4744 100.07 81.3153 99.7974 80.3438 99.252C79.3778 98.7008 78.6335 97.9224 78.1108 96.9167C77.5881 95.9054 77.3267 94.7093 77.3267 93.3287C77.3267 91.9821 77.5881 90.8002 78.1108 89.7832C78.6335 88.7662 79.3693 87.9735 80.3182 87.4054C81.2727 86.8372 82.392 86.5531 83.6761 86.5531C84.5398 86.5531 85.3438 86.6923 86.0881 86.9707C86.8381 87.2434 87.4915 87.6554 88.0483 88.2065C88.6108 88.7576 89.0483 89.4508 89.3608 90.286C89.6733 91.1156 89.8295 92.0872 89.8295 93.2008V94.198H78.7756V91.948H86.4119C86.4119 91.4252 86.2983 90.9622 86.071 90.5588C85.8438 90.1554 85.5284 89.84 85.125 89.6127C84.7273 89.3798 84.2642 89.2633 83.7358 89.2633C83.1847 89.2633 82.696 89.3912 82.2699 89.6468C81.8494 89.8968 81.5199 90.2349 81.2812 90.661C81.0426 91.0815 80.9205 91.5502 80.9148 92.0673V94.2065C80.9148 94.8542 81.0341 95.4139 81.2727 95.8855C81.517 96.3571 81.8608 96.7207 82.304 96.9764C82.7472 97.2321 83.2727 97.3599 83.8807 97.3599C84.2841 97.3599 84.6534 97.3031 84.9886 97.1895C85.3239 97.0758 85.6108 96.9054 85.8494 96.6781C86.0881 96.4508 86.2699 96.1724 86.3949 95.8429L89.7528 96.0645C89.5824 96.8713 89.233 97.5758 88.7045 98.1781C88.1818 98.7747 87.5057 99.2406 86.6761 99.5758C85.8523 99.9054 84.9006 100.07 83.821 100.07Z" fill="white"/>
                <path d="M74.1 0.814453H18.9C15.105 0.814453 12.0345 3.9082 12.0345 7.68945L12 48.9395C12 52.7207 15.105 55.8145 18.9 55.8145H74.1C77.895 55.8145 81 52.7207 81 48.9395V7.68945C81 3.9082 77.895 0.814453 74.1 0.814453ZM72.72 15.4238L48.3285 30.6176C47.2245 31.3051 45.7755 31.3051 44.6715 30.6176L20.28 15.4238C19.4175 14.8738 18.9 13.9457 18.9 12.9488C18.9 10.6457 21.4185 9.2707 23.385 10.4738L46.5 24.877L69.615 10.4738C71.5815 9.2707 74.1 10.6457 74.1 12.9488C74.1 13.9457 73.5825 14.8738 72.72 15.4238Z" fill="white"/>
              </svg>
            </a>
          </div>
          <div className="scl">
            <a href="https://youtube.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 111" fill="none">
                <path d="M0.852273 90.4025V87.3599H15.1875V90.4025H9.84375V104.814H6.19602V90.4025H0.852273ZM18.5625 104.814L15 91.7235H18.6733L20.7017 100.519H20.821L22.9347 91.7235H26.5398L28.6875 100.468H28.7983L30.7926 91.7235H34.4574L30.9034 104.814H27.0597L24.8097 96.5815H24.6477L22.3977 104.814H18.5625ZM36.3942 104.814V91.7235H40.0249V104.814H36.3942ZM38.218 90.036C37.6783 90.036 37.2152 89.8571 36.8288 89.4991C36.4482 89.1355 36.2578 88.7008 36.2578 88.1951C36.2578 87.6951 36.4482 87.2662 36.8288 86.9082C37.2152 86.5446 37.6783 86.3627 38.218 86.3627C38.7578 86.3627 39.218 86.5446 39.5987 86.9082C39.9851 87.2662 40.1783 87.6951 40.1783 88.1951C40.1783 88.7008 39.9851 89.1355 39.5987 89.4991C39.218 89.8571 38.7578 90.036 38.218 90.036ZM49.8963 91.7235V94.4508H42.0128V91.7235H49.8963ZM43.8026 88.5872H47.4332V100.792C47.4332 101.127 47.4844 101.388 47.5866 101.576C47.6889 101.758 47.831 101.885 48.0128 101.959C48.2003 102.033 48.4162 102.07 48.6605 102.07C48.831 102.07 49.0014 102.056 49.1719 102.028C49.3423 101.993 49.473 101.968 49.5639 101.951L50.1349 104.653C49.9531 104.709 49.6974 104.775 49.3679 104.849C49.0384 104.928 48.6378 104.976 48.1662 104.993C47.2912 105.028 46.5241 104.911 45.8651 104.644C45.2116 104.377 44.7031 103.962 44.3395 103.4C43.9759 102.837 43.7969 102.127 43.8026 101.269V88.5872ZM59.2244 91.7235V94.4508H51.3409V91.7235H59.2244ZM53.1307 88.5872H56.7614V100.792C56.7614 101.127 56.8125 101.388 56.9148 101.576C57.017 101.758 57.1591 101.885 57.3409 101.959C57.5284 102.033 57.7443 102.07 57.9886 102.07C58.1591 102.07 58.3295 102.056 58.5 102.028C58.6705 101.993 58.8011 101.968 58.892 101.951L59.4631 104.653C59.2813 104.709 59.0256 104.775 58.696 104.849C58.3665 104.928 57.9659 104.976 57.4943 104.993C56.6193 105.028 55.8523 104.911 55.1932 104.644C54.5398 104.377 54.0313 103.962 53.6676 103.4C53.304 102.837 53.125 102.127 53.1307 101.269V88.5872ZM67.4148 105.07C66.0682 105.07 64.9091 104.797 63.9375 104.252C62.9716 103.701 62.2273 102.922 61.7045 101.917C61.1818 100.905 60.9205 99.7093 60.9205 98.3287C60.9205 96.9821 61.1818 95.8002 61.7045 94.7832C62.2273 93.7662 62.9631 92.9735 63.9119 92.4054C64.8665 91.8372 65.9858 91.5531 67.2699 91.5531C68.1335 91.5531 68.9375 91.6923 69.6818 91.9707C70.4318 92.2434 71.0852 92.6554 71.642 93.2065C72.2045 93.7576 72.642 94.4508 72.9545 95.286C73.267 96.1156 73.4233 97.0872 73.4233 98.2008V99.198H62.3693V96.948H70.0057C70.0057 96.4252 69.892 95.9622 69.6648 95.5588C69.4375 95.1554 69.1222 94.84 68.7188 94.6127C68.321 94.3798 67.858 94.2633 67.3295 94.2633C66.7784 94.2633 66.2898 94.3912 65.8636 94.6468C65.4432 94.8968 65.1136 95.2349 64.875 95.661C64.6364 96.0815 64.5142 96.5502 64.5085 97.0673V99.2065C64.5085 99.8542 64.6278 100.414 64.8665 100.885C65.1108 101.357 65.4545 101.721 65.8977 101.976C66.3409 102.232 66.8665 102.36 67.4744 102.36C67.8778 102.36 68.2472 102.303 68.5824 102.189C68.9176 102.076 69.2045 101.905 69.4432 101.678C69.6818 101.451 69.8636 101.172 69.9886 100.843L73.3466 101.064C73.1761 101.871 72.8267 102.576 72.2983 103.178C71.7756 103.775 71.0994 104.241 70.2699 104.576C69.446 104.905 68.4943 105.07 67.4148 105.07ZM75.7926 104.814V91.7235H79.3125V94.0076H79.4489C79.6875 93.1951 80.0881 92.5815 80.6506 92.1667C81.2131 91.7463 81.8608 91.536 82.5938 91.536C82.7756 91.536 82.9716 91.5474 83.1818 91.5701C83.392 91.5929 83.5767 91.6241 83.7358 91.6639V94.8855C83.5653 94.8343 83.3295 94.7889 83.0284 94.7491C82.7273 94.7093 82.4517 94.6895 82.2017 94.6895C81.6676 94.6895 81.1903 94.8059 80.7699 95.0389C80.3551 95.2662 80.0256 95.5843 79.7812 95.9934C79.5426 96.4025 79.4233 96.8741 79.4233 97.4082V104.814H75.7926Z" fill="white"/>
                <path d="M78 7.32509C75.2916 8.43568 72.4272 9.17377 69.495 9.51664C72.585 7.79313 74.8954 5.064 75.9885 1.84621C73.0951 3.45956 69.9294 4.5957 66.6285 5.20546C64.6046 3.17374 61.9776 1.76125 59.0887 1.15149C56.1999 0.541725 53.1827 0.762884 50.4293 1.78623C47.6759 2.80958 45.3134 4.58781 43.6489 6.88989C41.9844 9.19197 41.0947 11.9115 41.0955 14.6951C41.0955 15.7951 41.1945 16.8528 41.4375 17.8598C35.5654 17.5891 29.8201 16.1562 24.5774 13.6549C19.3346 11.1535 14.7124 7.63993 11.013 3.34391C9.11769 6.39794 8.53174 10.0163 9.37447 13.4623C10.2172 16.9083 12.4253 19.9227 15.549 21.8917C13.2124 21.8328 10.9251 21.2466 8.88 20.1825V20.3348C8.88391 23.5393 10.062 26.6448 12.2159 29.1283C14.3699 31.6119 17.3681 33.322 20.706 33.9706C19.4432 34.2835 18.1418 34.4372 16.836 34.4276C15.8982 34.4432 14.9612 34.3638 14.0415 34.1906C14.9952 36.945 16.8337 39.3537 19.3038 41.085C21.7738 42.8163 24.754 43.7851 27.834 43.858C22.6092 47.6997 16.1654 49.7837 9.5325 49.7769C8.322 49.7769 7.161 49.7261 6 49.5865C12.7495 53.6757 20.6145 55.8389 28.644 55.8142C55.806 55.8142 70.656 34.6603 70.656 16.324C70.656 15.7105 70.6335 15.1182 70.602 14.5301C73.5133 12.5712 76.0203 10.1296 78 7.32509Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container cv">
        <div className="title">
          <h1>ask for my cv :</h1>
          <div className="yellow-line top-4 ml-52 w-[150%]"></div>
        </div>
        <div className="btns">
          <button>PDF</button>
          <button>Mail it to me</button>
        </div>
      </div>
    </section>
  );
}
 
export default Resume;