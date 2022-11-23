import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Row,
  Text,
  Img,
  Input,
  CheckBox,
  Button,
  Line,
} from "components";

const CreateAccountModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-start lg:p-[167px] xl:p-[209px] 2xl:p-[236px] 3xl:p-[283px] rounded-radius10 w-[100%]">
            <Row className="items-start justify-center w-[64%]">
              <Text
                className="text-gray_900 tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                Create Account
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[230px] xl:ml-[288px] 2xl:ml-[324px] 3xl:ml-[389px] mt-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Row className="items-center justify-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[64%]">
              <Input
                className="placeholder:text-gray_600 TextFieldLa"
                wrapClassName="flex w-[48%]"
                type="text"
                name="TextFieldLa"
                placeholder="Full Name"
                prefix={
                  <Img
                    src="images/img_user.svg"
                    className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[16px] my-[auto]"
                    alt="user"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
              <Input
                className="placeholder:text-gray_600 TextFieldLa"
                wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] flex lg:ml-[14px] w-[48%] xl:ml-[17px]"
                type="email"
                name="TextFieldLa One"
                placeholder="Email Address"
                prefix={
                  <Img
                    src="images/img_mail.svg"
                    className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[16px] my-[auto]"
                    alt="mail"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
            </Row>
            <Row className="items-center justify-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[64%]">
              <Input
                className="placeholder:text-gray_600 TextFieldLa"
                wrapClassName="flex w-[48%]"
                type="number"
                name="TextFieldLa Two"
                placeholder="Phone Number"
                prefix={
                  <Img
                    src="images/img_call.svg"
                    className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[16px] my-[auto]"
                    alt="call"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
              <Input
                className="placeholder:text-gray_600 TextFieldLa"
                wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] flex lg:ml-[14px] w-[48%] xl:ml-[17px]"
                name="TextFieldLa Three"
                placeholder="Address"
                prefix={
                  <Img
                    src="images/img_location.svg"
                    className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[16px] my-[auto]"
                    alt="location"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
            </Row>
            <Row className="items-center justify-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[64%]">
              <Input
                className="placeholder:text-gray_600 TextFieldLa"
                wrapClassName="flex w-[48%]"
                type="password"
                name="Group100000150"
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
                    className="mr-[2px] lg:w-[17px] lg:h-[18px] lg:ml-[24px] xl:w-[21px] xl:h-[22px] xl:ml-[31px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[35px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[42px] my-[auto]"
                    alt="airplane"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
              <Input
                className="placeholder:text-gray_600 TextFieldLa"
                wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] flex lg:ml-[14px] w-[48%] xl:ml-[17px]"
                type="password"
                name="Group100000150 One"
                placeholder="Re-Password"
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
                    className="mr-[2px] lg:w-[17px] lg:h-[18px] lg:ml-[24px] xl:w-[21px] xl:h-[22px] xl:ml-[31px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[35px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[42px] my-[auto]"
                    alt="airplane"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
            </Row>
            <CheckBox
              className="font-bold lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900"
              inputClassName="h-[18px] mr-[5px] w-[18px]"
              name="Iagreetoall"
              label="I agree to all Terms & Conditions"
            ></CheckBox>
            <Button
              className="font-bold lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[64%]"
              shape="RoundedBorder10"
              size="xl"
              variant="FillGray900"
            >
              Create Account
            </Button>
            <Button
              className="2xl:mt-[18px] 3xl:mt-[21px] flex items-center justify-center lg:mt-[12px] text-center w-[64%] xl:mt-[16px]"
              leftIcon={
                <Img
                  src="images/img_refresh.svg"
                  className="text-center lg:w-[14px] lg:h-[15px] lg:mr-[7px] xl:w-[17px] xl:h-[18px] xl:mr-[8px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[10px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[12px]"
                  alt="refresh"
                />
              }
              shape="RoundedBorder10"
              size="xl"
              variant="OutlineGray600"
            >
              <div className="bg-transparent font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                Create Account with Google
              </div>
            </Button>
            <Column className="items-center justify-start mb-[1px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[64%]">
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <Text className="columnlinethree" variant="body1">
                <span className="text-gray_600 font-manrope lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  H
                </span>
                <span className="text-gray_600 font-manrope lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  ave an account?{" "}
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

export { CreateAccountModal };
