import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Mission() {
  return (
    <section className=" container-wrapper">
      <div className=" flex justify-center items-center flex-col-reverse ">
        <div className="w-full">
          <img src="images/logo.png" alt="" className=" mx-auto" />
        </div>

        <div className=" border border-[#0b5a66]  py-8 px-4 rounded-2xl shadow-xl max-w-2xl ">
          <h1 className=" font-kid font-bold text-3xl sm:text-5xl my-3 text-center">Join XKITTY</h1>

          <p className=" text-lg sm:text-xl text-center "> 
          XKITTY stands as the epitome of feline internet sovereignty, a coin that distills the essence of viral cat memes into a singular, irresistible crypto entity. It's a meld of sophistication, sassiness, and the distinctive cat attitude, encapsulating the charm of cats in every transaction.
          </p>

          
        <div className=" flex justify-center gap-5 items-center mt-4">
        <a
            href="https://twitter.com/XKitty_9"
            className=" text-xl text-white bg-[#525252] hover:scale-125 hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
          >
            <BsTwitterX />
          </a>

          <a
            href="https://t.me/xkittysol"
            target="_blank"
            className=" text-xl text-white hover:scale-125 bg-[#525252] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/43ynbYifdkqh9n7nMqazyFs98Adpi4BSJkmDN6cm68Mm?t=1713196075158"
            target="_blank"
            className=" bg-[#525252] rounded-full text-xl font-semibold p-1 border-2 hover:scale-125 "
          >
            <img src="images/dext.png" alt="" className=" h-[29px] w-auto" />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
