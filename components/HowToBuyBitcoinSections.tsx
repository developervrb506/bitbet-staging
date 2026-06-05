import ImageTextSection from "./ImageTextSection";
import DecorativeEllipse from "./DecorativeEllipse";
import Image from "next/image";
import CheckmarkListItem from "./CheckmarkListItem";

const timelineSteps = [
  {
    title: "Create an Account on BitBet:",
    desc: 'Open your preferred web browser and navigate to BitBet, the best bitcoin casino website.\nLook for the "Sign Up" or "Register" button and click on it.\nProvide the required information to create your account, including your email address, username, and password.',
  },
  {
    title: "Verify Your Account:",
    desc: "After registering, you might need to verify your email address by clicking on the verification link sent to your inbox.\nSome online casinos, including BitBet, may require additional identity verification steps to ensure security and regulatory compliance. This could involve providing a photo ID and other documents.",
  },
  {
    title: "Deposit Funds:",
    desc: 'Log in to your BitBet account using your newly created credentials.\nLook for the "Deposit" or "Wallet" section on the website.\nChoose Bitcoin as your preferred payment method.',
  },
  {
    title: "Obtain a Bitcoin Wallet:",
    desc: "If you don't already have a Bitcoin wallet, you'll need to set one up. A Bitcoin wallet is where you'll store your purchased Bitcoin.\n\nThere are different types of wallets, including software wallets, hardware wallets, and online wallets. Choose the one that suits your needs and follow the instructions to create one.",
  },
  {
    title: "Purchase Bitcoin:",
    desc: 'In your BitBet account, you\'ll find your Bitcoin deposit address. This is a long string of characters unique to your account.\nCopy your deposit address.\nOpen your Bitcoin wallet and navigate to the "Send" or "Withdraw" section.\nPaste the copied deposit address in the recipient field.\nEnter the amount of Bitcoin you want to purchase and initiate the transaction.\nConfirm the transaction details and complete the transfer.',
  },
  {
    title: "Wait for Confirmation:",
    desc: "Bitcoin transactions require confirmations on the blockchain, which can take some time. The number of confirmations needed may vary.\nYou can check the status of your transaction using the transaction ID provided by your wallet.",
  },
  {
    title: "Start Playing with Bitcoin:",
    desc: "Once your Bitcoin deposit is confirmed, the funds will appear in your BitBet casino account.\nYou can now use your Bitcoin balance to play various casino games on BitBet.\n\nBest way to buy bitcoin on BitBet online casino involves a few simple steps, from creating an account to making a deposit and playing games with your purchased Bitcoin. Remember to prioritize security by using reputable wallets and following best practices for keeping your cryptocurrency safe. As the popularity of cryptocurrency grows, platforms like BitBet make it easier than ever to enjoy the excitement of online casinos using digital currencies.",
  },
];

export default function HowToBuyBitcoinSections() {
  return (
    <>
      <section className="relative w-full bg-black py-10 md:py-20 lg:py-32 text-white overflow-hidden md:overflow-visible">
        {/* Background Gradient */}

        <DecorativeEllipse left="-247px" top="10%" />

        {/* Video Section */}
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10  pb-16 text-center">
          <h2 className="text-3xl md:text-[46px] font-bold text-white font-sora leading-tight mb-12">
            How to buy bitcoin online?
          </h2>

          <div className=" w-full relative mb-12 rounded-[20px] overflow-hidden">
            <Image
              src="/buybitcoin.png"
              alt="How to buy bitcoin online"
              fill
              className="relative!"
            />
          </div>

          <p className="text-white/80 font-sora text-[15px] leading-relaxed max-w-[1000px] mx-auto">
            In the world of online casinos, BitBet stands out as a popular
            platform that not only offers a range of exciting casino games but
            also allows users to transact using cryptocurrencies like Bitcoin.
            If you're new to cryptocurrencies and want to learn how to buy
            bitcoin online on BitBet, the best bitcoin casino, this step-by-step
            guide will walk you through the process.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="w-full relative">
                <Image
                  src="/aboutcombo.png"
                  alt="Casino promotions collage"
                  fill
                  className="relative!"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="flex-1 w-full">
              <h2 className="text-3xl max-w-full lg:max-w-[534px] md:text-[46px] font-bold text-white font-sora leading-tight mb-10">
                Benefits of Using Bitcoin in Online Casinos
              </h2>

              <ul className="space-y-8">
                {[
                  {
                    title: "Speed and Efficiency:",
                    desc: "Bitcoin transactions are typically faster compared to traditional banking methods, enabling quicker access to funds for gameplay and withdrawals.",
                  },
                  {
                    title: "Lower Transaction Fees:",
                    desc: "Bitcoin transactions often incur lower fees compared to traditional banking methods or credit card transactions, allowing players to retain more of their winnings.",
                  },
                  {
                    title: "Enhanced Security:",
                    desc: "Blockchain technology underpinning Bitcoin transactions provides a high level of security, reducing the risks associated with online financial transactions.",
                  },
                  {
                    title: "Accessibility:",
                    desc: "Bitcoin is accessible to anyone with an internet connection, bridging gaps created by banking restrictions in certain regions.",
                  },
                ].map((item, idx) => (
                  <CheckmarkListItem key={idx} align="start">
                    <p className="text-white font-sora text-base leading-relaxed">
                      <span className="text-[#EB6331] font-bold mr-1">
                        {item.title}
                      </span>
                      {item.desc}
                    </p>
                  </CheckmarkListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 ">
          <div className="relative">
            <div className="flex flex-col">
              {timelineSteps.map((step, idx) => {
                const isRightSideText = idx % 2 === 0;
                const isLast = idx === timelineSteps.length - 1;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start w-full ${isLast ? "" : "pb-16 md:pb-24"}`}
                  >
                    <div className="absolute left-[23px] md:left-1/2 -translate-x-1/2 w-[2px] bg-[#1B83FF] top-[6px] h-full z-0"></div>
                    <div className="absolute left-[23px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#1B83FF] border-[5px] border-white z-10 top-[6px] "></div>

                    <div
                      className={`hidden md:block w-1/2 ${isRightSideText ? "order-1" : "order-2"}`}
                    ></div>

                    <div
                      className={`w-full md:w-1/2 pl-14 md:pl-0 ${isRightSideText ? "order-2 md:pl-16 lg:pl-24" : "order-1 md:pr-16 lg:pr-24"} flex flex-col ${isRightSideText ? "md:text-left md:items-start" : "md:text-right md:items-end"} text-left items-start`}
                    >
                      <h3 className="text-xl md:text-[22px] font-bold text-white mb-4 font-sora mt-[-4px]">
                        {step.title}
                      </h3>
                      <p className="text-white/70 text-[15px] leading-relaxed font-sora whitespace-pre-wrap">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
