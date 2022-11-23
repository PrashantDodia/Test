import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Input, Button, Line } from "components";

const NewPasswordModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-end lg:p-[221px] xl:p-[276px] 2xl:p-[311px] 3xl:p-[373px] rounded-radius10 w-[100%]">
            <Row className="items-start justify-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[51%]">
              <Text
                className="text-gray_900 tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                New Password
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] mt-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Text className="columnenterotp" variant="body2">
              Enter your new password
            </Text>
            <Input
              className="placeholder:text-gray_600 TextFieldLa"
              wrapClassName="2xl:mt-[34px] 3xl:mt-[40px] flex lg:mt-[24px] w-[51%] xl:mt-[30px]"
              type="password"
              name="TextFieldLa"
              placeholder="Password"
              prefix={
                <Img
                  src="images/img_user_24X24.svg"
                  className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[16px] my-[auto]"
                  alt="user"
                />
              }
              suffix={
                <Img
                  src="images/img_airplane.svg"
                  className="mr-[4px] lg:w-[17px] lg:h-[18px] lg:ml-[24px] xl:w-[21px] xl:h-[22px] xl:ml-[31px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[35px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[42px] my-[auto]"
                  alt="airplane"
                />
              }
              shape="RoundedBorder10"
            ></Input>
            <Input
              className="placeholder:text-gray_600 TextFieldLa"
              wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] flex lg:mt-[14px] w-[51%] xl:mt-[17px]"
              type="password"
              name="TextFieldLa One"
              placeholder="Re-New Password"
              prefix={
                <Img
                  src="images/img_user_24X24.svg"
                  className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[16px] my-[auto]"
                  alt="user"
                />
              }
              suffix={
                <Img
                  src="images/img_airplane.svg"
                  className="mr-[4px] lg:w-[17px] lg:h-[18px] lg:ml-[24px] xl:w-[21px] xl:h-[22px] xl:ml-[31px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[35px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[42px] my-[auto]"
                  alt="airplane"
                />
              }
              shape="RoundedBorder10"
            ></Input>
            <Button
              className="font-bold lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[51%]"
              shape="RoundedBorder10"
              size="xl"
              variant="FillGray900"
            >
              Update Password
            </Button>
            <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[51%]">
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

export { NewPasswordModal };
