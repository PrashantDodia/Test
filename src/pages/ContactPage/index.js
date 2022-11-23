import React from "react";

import {
  Column,
  Text,
  Row,
  Input,
  Img,
  TextArea,
  Button,
  Line,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const ContactPagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gray_51 items-center justify-start xl:pb-[106px] 2xl:pb-[120px] 3xl:pb-[144px] lg:pb-[85px] w-[100%]">
          <Header className="w-[100%]" />
          <Column className="items-center justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[50%]">
            <Text
              className="text-gray_900 tracking-ls1 w-[auto]"
              as="h1"
              variant="h1"
            >
              Get in touch
            </Text>
            <Text
              className="font-normal leading-[180.00%] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic text-center text-gray_600 w-[100%]"
              variant="body2"
            >
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble.
            </Text>
          </Column>
          <Row className="bg-white_A700 border border-bluegray_100 border-solid items-end lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-radius10 w-[83%]">
            <Column className="justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[59%]">
              <Text
                className="text-gray_900 tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                Send a message
              </Text>
              <Column className="items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[85%]">
                <Input
                  className="placeholder:text-gray_600 TextFieldLa"
                  wrapClassName="flex w-[100%]"
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
                  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[8px] w-[100%] xl:mt-[10px]"
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
                <Input
                  className="placeholder:text-gray_600 TextFieldLa"
                  wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[8px] w-[100%] xl:mt-[10px]"
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
                <TextArea
                  className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  name="inputbox"
                  placeholder="Message"
                ></TextArea>
              </Column>
              <Button
                className="font-bold lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[27%]"
                shape="RoundedBorder10"
                size="xl"
                variant="FillGray900"
              >
                Send Message
              </Button>
            </Column>
            <Line className="bg-bluegray_100 lg:h-[380px] xl:h-[476px] 2xl:h-[535px] 3xl:h-[642px] mb-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[1px]" />
            <Column className="justify-start lg:mb-[169px] xl:mb-[212px] 2xl:mb-[239px] 3xl:mb-[286px] lg:ml-[34px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] pt-[4px] w-[24%]">
              <Column className="justify-start w-[100%]">
                <Text className="KausarPial_One" variant="body1">
                  Office Address
                </Text>
                <Text
                  className="font-semibold leading-[180.00%] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-gray_600 w-[100%]"
                  variant="body2"
                >
                  1421 San Pedro St, Los Angeles, CA 90015
                </Text>
              </Column>
              <Row className="items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[63%]">
                <Img
                  src="images/img_call.svg"
                  className="arrowright"
                  alt="call One"
                />
                <Text
                  className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[3px] text-gray_600 w-[auto]"
                  variant="body2"
                >
                  (302) 555-0107
                </Text>
              </Row>
              <Row className="items-end lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[91%]">
                <Img
                  src="images/img_mail.svg"
                  className="arrowright"
                  alt="mail One"
                />
                <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  staticmania@gmail.com
                </Text>
              </Row>
              <Column className="justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[80%]">
                <Text className="KausarPial_One" variant="body1">
                  Social
                </Text>
                <Img
                  src="images/img_socailicons_30X214.svg"
                  className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                  alt="Socailicons"
                />
              </Column>
            </Column>
          </Row>
        </Column>
        <Footer className="bg-white_A700 w-[100%]" />
      </Column>
    </>
  );
};

export default ContactPagePage;
