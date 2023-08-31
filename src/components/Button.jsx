const Button = ({ label, icon }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-urbanist leading-none text-lg bg-coral-red rounded-full text-white border-coral-red">
      {label}{" "}
      {icon && <img src={icon} alt="" className="ml-2 rounded-full w-5 h-5 " />}
    </button>
  );
};

export default Button;
