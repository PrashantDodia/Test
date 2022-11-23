import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button, Line } from "components";

const EnterOTPModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-end lg:p-[222px] xl:p-[278px] 2xl:p-[313px] 3xl:p-[375px] rounded-radius10 w-[100%]">
            <Row className="items-start justify-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[52%]">
              <Text
                className="text-gray_900 tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                Enter OTP
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[156px] xl:ml-[195px] 2xl:ml-[220px] 3xl:ml-[264px] mt-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Text className="columnenterotp" variant="body2">
              Please check your mail, We sent an OTP code
            </Text>
            <Row className="items-center mr-[auto] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[34%]">
              <Button
                className="font-bold lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                shape="RoundedBorder10"
                size="xl"
                variant="OutlineGray600"
              >
                0
              </Button>
              <Button
                className="font-bold lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                shape="RoundedBorder10"
                size="xl"
                variant="OutlineGray600"
              >
                0
              </Button>
              <Button
                className="font-bold lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                shape="RoundedBorder10"
                size="xl"
                variant="OutlineGray600"
              >
                0
              </Button>
              <Button
                className="font-bold lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                shape="RoundedBorder10"
                size="xl"
                variant="OutlineGray600"
              >
                0
              </Button>
            </Row>
            <Button
              className="font-bold lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[52%]"
              shape="RoundedBorder10"
              size="xl"
              variant="FillGray900"
            >
              Confirm
            </Button>
            <Button
              className="font-bold lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[52%]"
              shape="RoundedBorder10"
              size="xl"
              variant="OutlineGray600"
            >
              Request OTP Again
            </Button>
            <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[52%]">
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <Text className="columnlinethree" variant="body1">
                <span className="text-gray_600 font-manrope lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  Remember the Password?{" "}
                </span>
                <span className="text-gray_900 font-manrope lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  Log in
                </span>
              </Text>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { EnterOTPModal };
