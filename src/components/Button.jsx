const Button = ({ label, icon, backgroundColor, textColor, borderColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-urbanist leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red border-coral-red text-white"
      } text-lg  rounded-full`}
    >
      {label}{" "}
      {icon && <img src={icon} alt="" className="ml-2 rounded-full w-5 h-5 " />}
    </button>
  );
};

export default Button;
