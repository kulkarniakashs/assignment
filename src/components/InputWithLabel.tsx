export default function InputWithLabel({ label, type,placeholder,classes,req}: { label: string; type: string;placeholder:string ,classes?:string,req?:boolean}) {
    return (
      <div className={`h-[49px] w-[335px] relative ${classes ? `${classes}` : ''}`}>
        <div className={`absolute left-[9px] top-0 w-[103px] h-[17px] bg-[#F7F8F9] flex items-center z-10 input-label-text pl-[5px] ${req? 'required' : ''}`}>{label}</div>
        <input type={type} className="input-border w-full h-[40px] input-text absolute bottom-0" placeholder={placeholder}/>
      </div>
    );
  }