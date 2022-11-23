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
import { useGoogleLogin } from "@react-oauth/google";

const LogInModal = (props) => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

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
            <Row className="items-start justify-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[48%]">
              <Text
                className="mt-[2px] text-gray_900 tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                Log in
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[204px] xl:ml-[256px] 2xl:ml-[288px] 3xl:ml-[345px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Input
              className="placeholder:text-gray_600 TextFieldLa"
              wrapClassName="2xl:mt-[30px] 3xl:mt-[36px] flex lg:mt-[21px] w-[48%] xl:mt-[26px]"
              type="email"
              name="TextFieldLa"
              placeholder="user / email address"
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
              wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] flex lg:mt-[14px] w-[48%] xl:mt-[17px]"
              type="password"
              name="TextFieldLa One"
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
            <Row className="items-center justify-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[48%]">
              <CheckBox
                className="font-bold lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900"
                inputClassName="h-[18px] mr-[5px] w-[18px]"
                name="Remember"
                label="Remember"
                size="sm"
              ></CheckBox>
              <Text
                className="font-bold lg:ml-[109px] xl:ml-[136px] 2xl:ml-[154px] 3xl:ml-[184px] text-gray_900 w-[auto]"
                variant="body2"
              >
                Forgot Password
              </Text>
            </Row>
            <Button
              className="font-bold lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[48%]"
              shape="RoundedBorder10"
              size="xl"
              variant="FillGray900"
            >
              Log in
            </Button>
            <Button
              className="2xl:mt-[18px] 3xl:mt-[21px] flex items-center justify-center lg:mt-[12px] text-center w-[48%] xl:mt-[16px]"
              onClick={googleSignIn}
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
              <div className="common-pointer bg-transparent font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                Log in with Google
              </div>
            </Button>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[48%]" />
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

export { LogInModal };
