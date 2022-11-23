import React from "react";

import { Column, Img, Text, Button } from "components";
import Header from "components/Header/Header";

const ErrorPage = () => {
  return (
    <>
      <Column className="bg-gray_51 font-manrope items-center justify-start mx-[auto] lg:pb-[139px] xl:pb-[174px] 2xl:pb-[196px] 3xl:pb-[235px] w-[100%]">
        <Header className="w-[100%]" />
        <Img
          src="images/img_illustration.svg"
          className="lg:h-[342px] xl:h-[427px] 2xl:h-[481px] 3xl:h-[577px] xl:mt-[103px] 2xl:mt-[116px] 3xl:mt-[139px] lg:mt-[82px] w-[32%]"
          alt="illustration"
        />
        <Text
          className="lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] text-gray_900 tracking-ls1 w-[auto]"
          as="h4"
          variant="h4"
        >
          Something wrong!
        </Text>
        <Button
          className="2xl:mt-[24px] 3xl:mt-[28px] flex items-center justify-center lg:mt-[17px] text-center w-[11%] xl:mt-[21px]"
          rightIcon={
            <Img
              src="images/img_arrowright_16X16.svg"
              className="text-center lg:w-[14px] lg:h-[15px] lg:ml-[7px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px]"
              alt="arrow_right"
            />
          }
          shape="RoundedBorder10"
          size="xl"
          variant="OutlineGray600"
        >
          <div className="bg-transparent font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
            Homepage
          </div>
        </Button>
      </Column>
    </>
  );
};

export default ErrorPage;
