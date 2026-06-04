import Image from "next/image";
import React from "react";

const cryptoData = [
  {
    name: "BITCOIN",
    icon: "/bitcoin.svg",
    description:
      "Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system. We will credit your account at the current market value of bitcoin.",
    marketValue: "1 = USD",
  },
  {
    name: "BITCOIN CASH",
    icon: "/bitcoincash.svg",
    description:
      "Bitcoin cash is a cryptocurrency is a fork of Bitcoin Classic that was created in August 2017. Bitcoin Cash increases the size of blocks, allowing more transactions to be processed.",
    marketValue: "1 = USD",
  },
  {
    name: "CARDANO",
    icon: "/cardano.svg",
    description:
      "Cardano is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality.",
    marketValue: "1 = USD",
  },
  {
    name: "COSMOS ATOM",
    icon: "/cosmos.svg",
    description:
      "Atom is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality. Current value at this time is:",
    marketValue: "1 = USD",
  },
  {
    name: "DASH",
    icon: "/dash.svg",
    description:
      "Dash is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality.",
    marketValue: "1 = USD",
  },
  {
    name: "ETHEREUM",
    icon: "/ethereum.svg",
    description:
      "Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality.",
    marketValue: "1 = USD",
  },
  {
    name: "LITECOIN",
    icon: "/litecoin.svg",
    description:
      "Litecoin (LTC or Ł) is a peer-to-peer cryptocurrency and open source software project released under the MIT/X11 license.",
    marketValue: "1 = USD",
  },
  {
    name: "POLKADOT",
    icon: "polkadot.svg",
    description:
      "Polkadot is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality.",
    marketValue: "1 = USD",
  },
  {
    name: "RIPPLE",
    icon: "/ripple.svg",
    description:
      "Ripple is a technology that acts as both a cryptocurrency and a digital payment network for financial transactions.",
    marketValue: "1 = USD",
  },
  {
    name: "STELLAR",
    icon: "/steller.svg",
    description:
      "Stellar is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality.",
    marketValue: "1 = USD",
  },
];

export default function CryptoCards() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 max-w-[1440px]  mt-16 md:mt-30">
      {cryptoData.map((crypto, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-2.5 rounded-[30px] "
          style={{
            background:
              "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)",
            backdropFilter: "blur(11.2993px)",
          }}
        >
          {/* Icon Container */}
          <div className="w-full lg:w-[240px] h-[200px] lg:h-[290px] shrink-0 bg-black rounded-[30px] flex items-center justify-center p-8 border border-white/5">
            <div className="relative w-full h-full">
              <Image
                src={crypto.icon}
                alt={crypto.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-col justify-between px-5 lg:px-0 py-5 lg:py-10 grow">
            <div>
              {" "}
              <h3 className="text-white text-xl md:text-2xl font-bold font-sora mb-3">
                {crypto.name}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-sora max-w-[1000px]">
                {crypto.description}
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-white/80 text-sm  md:text-[20px] font-sora">
                Current Market Value:{" "}
                <span className="font-bold text-white">
                  {crypto.marketValue}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
