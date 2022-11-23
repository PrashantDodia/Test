import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Input, Button, Line } from "components";

const ResetPasswordModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-end lg:p-[197px] xl:p-[247px] 2xl:p-[278px] 3xl:p-[333px] rounded-radius10 w-[100%]">
            <Row className="items-start justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[48%]">
              <Text
                className="text-gray_900 tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                Reset Password
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] mt-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Text
              className="font-normal leading-[180.00%] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-gray_900 w-[43%]"
              variant="body2"
            >
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </Text>
            <Input
              className="placeholder:text-gray_600 TextFieldLa"
              wrapClassName="2xl:mt-[34px] 3xl:mt-[40px] flex lg:mt-[24px] w-[48%] xl:mt-[30px]"
              type="email"
              name="TextFieldLa"
              placeholder="email address"
              prefix={
                <Img
                  src="images/img_mail.svg"
                  className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[16px] my-[auto]"
                  alt="mail"
                />
              }
              shape="RoundedBorder10"
            ></Input>
            <Button
              className="font-bold lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[48%]"
              shape="RoundedBorder10"
              size="xl"
              variant="FillGray900"
            >
              Get OTP
            </Button>
            <Button
              className="font-bold lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[48%]"
              shape="RoundedBorder10"
              size="xl"
              variant="OutlineGray600"
            >
              Return to sign in
            </Button>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[48%]" />
            <Text className="columnlogin" variant="body1">
              <span className="text-gray_600 font-manrope lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                Don’t have an account?{" "}
              </span>
              <span className="text-gray_900 font-manrope lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                Create Account
              </span>
            </Text>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { ResetPasswordModal };
