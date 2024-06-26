import Image from 'next/image';
import Link from 'next/link';
export default function Footer({ children, home }) {
  return (
    <>

      <section className="sec-footer border-t relative group">
        <div className="w-full- h-full bg-gradient-to-br from-[#3E4095] to-[#3537BF] duration-300 opacity-90  absolute inset-0 z-10   "></div>
        <div className="container mx-auto px-5 z-20 relative">
          <div className="flex text-center justify-center items-center text-white">
            <div>
              <div>
                <Image
                  src="/images/athlotic-logo.png"
                  alt="Athlotic Sports GUJRANWALA"
                  className="sm:w-32 w-24 mx-auto transform hover:scale-125 duration-300" title='Athlotic Sports Logo'
                  width={128}
                  height={128}
                />
                <p className="mt-5 text-sm sm:text-base">

                  <strong>Athlotic Sports</strong> is a reliable manufacturer and supplier of Sportswear and Apparel Athletics Wear, Gym Wear, Leisure Wear, products, based in Gujranwala Pakistan. The company is leading industry and lead in expertise, innovation, designing and imprinting. The qualified team with extensive experience in the field of manufacturing and exporting manages the company. Most vigilant, quality experts control the quality standards.

                </p>
              </div>

              <div className="block mt-4">
                <h2 className="text-xl font-bold">
                  Athlotic Sports Head Quarter
                </h2>
                <p className="mt-3 sm:text-base text-sm text-gray-50 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-200 -mt-1 mr-1 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>{" "}
                  Akram Colony, Gill Road, Gujranwala, Pakistan.{" "}
                  <a
                    href="https://www.google.com/maps/place/Syed+Bukhari+St,+Akram+Colony+Civil+Lines,+Gujranwala,+Punjab,+Pakistan/@32.1676834,74.1938695,14z/data=!4m6!3m5!1s0x391f298d9d70ccb1:0x335f53e3ed749340!8m2!3d32.1753821!4d74.1914689!16s%2Fg%2F11g5_vhhjl?entry=ttu"
                    title="Direction"
                    className="tooltip"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 inline text-white -mt-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </p>

                <div className=" flex flex-col lg:flex-row items-center justify-center">
                  <p className="text-base mt-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-200 -mt-1 mr-1 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    <a href="tel:+923174696178" style={{ color: "white" }}>
                      +923174696178                    </a>
                  </p>
                  <p className="text-base mt-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-200 -mt-1 mr-1 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <a
                      href="mailto:info@athlotic.com"
                      style={{ color: "white" }}
                    >
                     mughalsammar988@gmail.com
                    </a>
                  </p>
                </div>
                <div className="gap-x-2 footer-social pt-4 relative items-center justify-center">
                  <a
                    href="mailto:mughalsammar988@gmail.com"
                    title="Email"
                    className="emailit tooltip group hover:fill-white hover:bg-black hover:border-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-auto fill-white"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=100011591113364/"
                    title="Athlotic Sports on Facebook"
                    className="facebook tooltip group hover:fill-white hover:bg-[#4267B2] hover:border-[#4267B2]"
                  >
                    <svg
                      className="w-6 h-auto fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z" />
                    </svg>
                  </a>

                  <a
                    href="http://instagram.com/athloticsports"
                    title="Athlotic Sports on Instagram"
                    className="instagram tooltip group hover:bg-[#fcfcfc] hover:border-[#405DE6]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-auto fill-white hover:fill-black"
                      viewBox="0 0 30 30"
                    >
                      {" "}
                      <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pg-footer border-t border-stone-300  bg-zinc-100 ">
        <div className="inset-0 1bg-blue-900 bg-opacity-90 w-full h-full py-2 pb-4">
          <div>
            <div>
              <div className="ftr-links">

                <Link href='/' title='Privacy Policy'>Privacy Policy</Link>
                <Link href='/' title='Disclaimer'>Disclaimer</Link>
                <Link href='/' title='Site Map'>Site Map</Link>
              </div>
              <p className="copy">
                Copyright &copy; Athlotic Sports - Gujranwala, Pakistan
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="chat-msg ">
        <div className="chat-msg-tip">
          <div></div>
        </div>
        <a href="https://wa.me/+923174696178" title='WhatsApp'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            className="w-8 h-auto fill-white"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7272 24.3561C10.5753 24.3561 8.55361 23.8061 6.79472 22.8408L0 25L2.215 18.4661C1.09778 16.6308 0.454167 14.4786 0.454167 12.1781C0.454167 5.45222 5.94889 0 12.7275 0C19.5053 0 25 5.45222 25 12.1781C25 18.9039 19.5056 24.3561 12.7272 24.3561ZM12.7272 1.93944C7.03722 1.93944 2.40889 6.5325 2.40889 12.1781C2.40889 14.4183 3.13917 16.4931 4.37417 18.1811L3.08528 21.9833L7.05028 20.7231C8.67972 21.7928 10.6314 22.4167 12.7272 22.4167C18.4164 22.4167 23.0456 17.8239 23.0456 12.1783C23.0456 6.53278 18.4164 1.93944 12.7272 1.93944ZM18.9244 14.9828C18.8489 14.8586 18.6483 14.7836 18.3481 14.6344C18.0469 14.4853 16.5675 13.7628 16.2922 13.6636C16.0161 13.5642 15.8153 13.5139 15.615 13.8128C15.4147 14.1117 14.8381 14.7836 14.6622 14.9828C14.4867 15.1822 14.3114 15.2072 14.0106 15.0578C13.71 14.9086 12.7406 14.5933 11.5911 13.5764C10.6969 12.7853 10.0931 11.8086 9.91778 11.5094C9.74222 11.2108 9.89917 11.0494 10.0497 10.9008C10.185 10.7669 10.3506 10.5522 10.5011 10.3781C10.6517 10.2036 10.7017 10.0794 10.8017 9.88C10.9022 9.68083 10.8519 9.50667 10.7767 9.35694C10.7014 9.20778 10.0994 7.73889 9.84889 7.14111C9.59833 6.54389 9.34806 6.64333 9.17222 6.64333C8.99667 6.64333 8.79611 6.61833 8.59556 6.61833C8.395 6.61833 8.06889 6.69306 7.79306 6.99167C7.5175 7.29056 6.74056 8.01278 6.74056 9.48139C6.74056 10.9503 7.81806 12.3694 7.96889 12.5683C8.11917 12.7672 10.0494 15.8794 13.1075 17.0747C16.1667 18.2697 16.1667 17.8711 16.7183 17.8214C17.2692 17.7717 18.4975 17.0994 18.7489 16.4025C18.9992 15.705 18.9992 15.1072 18.9244 14.9828Z"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}