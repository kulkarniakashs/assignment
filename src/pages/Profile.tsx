function Profile() {
    return (
        <div className="">
            <div className='rubik-normal-18 text-left pl-[15px] pt-[27px] pb-[19px] bg-[#FFFFFF]' style={{ lineHeight: '21px' }}>Account Setting</div>
            <div className="h-full bg-[#F7F8F9] pl-5 pt-[30px]">
                <div className="flex">
                    <div className="profile-picture relative">
                        <div className="absolute bottom-0 right-0 camera-pic"></div>
                    </div>
                    <div className="ml-5">
                        <div className="text-[#1D2226] font-medium text-[15px] leading-[19px] text-left">Marry Doe</div>
                        <div className="text-[#1D2226] font-normal text-[14px] leading-[19px] text-left mt-1.5">Marry@Gmail.Com</div>
                    </div>
                </div>
                <div className="text-[#1D2226] font-normal text-[14px] leading-[22px] text-left mt-[30px]" >
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </div>
            </div>
            <div className="w-full border border-dashed border-[#CBCBCB] mt-[20px]"></div>
            <div className="w-full border border-dashed border-[#CBCBCB] absolute bottom-[36px]"></div>
        </div>
    )
}

export default Profile