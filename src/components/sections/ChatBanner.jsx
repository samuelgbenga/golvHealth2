import { IoLogoWhatsapp } from "react-icons/io";

const ChatBanner = () => {
  return (
    <div className="flex h-[42px] items-center justify-center space-x-4 bg-[#52ead8] text-white">
      <h5 className="text-center text-[10px] md:text-sm">
        Not sure where to start? Chat with our health advisor
      </h5>
      <a
        href="#"
        className="inline-flex items-center justify-center gap-x-2 rounded-full border border-white px-3 py-1 text-[10px] md:py-[2px] md:text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* WhatsApp Icon */}
        <IoLogoWhatsapp />
        <p>Chat now</p>
      </a>
    </div>
  );
};

export default ChatBanner;
