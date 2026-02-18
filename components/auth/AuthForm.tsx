import Image from "next/image";

const AuthForm = () => {
  return (
    <div className="w-full h-full overflow-hidden relative">
      {/* <div className="min-h-screen mx-auto relative flex justify-between max-md:justify-around md:py-8 flex-col max-xl:p-6 md:max-w-144.25"></div> */}
      <div className="md:max-w-144.25">
        {/* Auth Form Header */}
        <div className="">
          <Image
            src={"/images/ChuksKitchen.png"}
            alt="Chuks Kitchen Logo"
            height={41}
            width={183}
            className="hover:scale-y-105 w-auto h-auto"
          />
          <h2 className="">create your account</h2>
        </div>

        {/* Form container */}
        <div className="">
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
