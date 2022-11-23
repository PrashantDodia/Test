import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Button,
  Input,
  TextArea,
  List,
  Radio,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const PropertyDetailsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Stack className="lg:h-[2265px] xl:h-[2834px] 2xl:h-[3188px] 3xl:h-[3825px] w-[100%]">
          <Column className="absolute bg-white_A700 bottom-[2%] justify-end lg:p-[54px] xl:p-[68px] 2xl:p-[77px] 3xl:p-[92px] w-[100%]">
            <Row className="items-start lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[93%]">
              <Column className="justify-start w-[42%]">
                <Img
                  src="images/img_logo.svg"
                  className="lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[26%]"
                  alt="logo"
                />
                <Text
                  className="font-semibold lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] text-gray_600 w-[auto]"
                  variant="body3"
                >
                  59 Bervely Hill Ave, Brooklyn Town,  New York, NY 5630, CA, US
                </Text>
                <Text
                  className="font-semibold lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] text-gray_600 w-[auto]"
                  variant="body3"
                >
                  +056 686 56 56 98 info@staticmania.com
                </Text>
                <Img
                  src="images/img_socialmedia_4.svg"
                  className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[40%]"
                  alt="socialmedia"
                />
              </Column>
              <Column className="justify-start mt-[1px] w-[15%]">
                <Text
                  className="font-bold text-gray_900 w-[auto]"
                  variant="body2"
                >
                  Features
                </Text>
                <Text
                  className="font-semibold leading-[270.00%] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] text-gray_900 w-[37%]"
                  variant="body3"
                >
                  Home v1
                  <br />
                  <br />
                  Home v2
                  <br />
                  <br />
                  About
                  <br />
                  Contact
                  <br />
                  Search
                </Text>
              </Column>
              <Column className="justify-start w-[17%]">
                <Text
                  className="font-bold text-gray_900 w-[auto]"
                  variant="body2"
                >
                  Informations
                </Text>
                <Text
                  className="font-semibold leading-[270.00%] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-gray_900 w-[61%]"
                  variant="body3"
                >
                  Listing v1
                  <br />
                  <br />
                  Listing v2
                  <br />
                  <br />
                  Property Details
                  <br />
                  Agent List
                  <br />
                  <br />
                  Agent Profile
                  <br />
                </Text>
              </Column>
              <Column className="justify-start w-[16%]">
                <Text
                  className="font-bold text-gray_900 w-[auto]"
                  variant="body2"
                >
                  Documention
                </Text>
                <Text
                  className="font-semibold leading-[270.00%] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-gray_900 w-[55%]"
                  variant="body3"
                >
                  Blog
                  <br />
                  <br />
                  Blog - single
                  <br />
                  <br />
                  Privacy Policy
                  <br />
                  <br />
                  License
                  <br />
                  404 Page
                </Text>
              </Column>
              <Column className="justify-start 2xl:pb-[11px] 3xl:pb-[13px] lg:pb-[7px] xl:pb-[9px] 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[7px] xl:pr-[9px] w-[11%]">
                <Text
                  className="font-bold text-gray_900 w-[auto]"
                  variant="body2"
                >
                  Others
                </Text>
                <Text
                  className="font-semibold leading-[270.00%] mb-[3px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-gray_900 w-[99%]"
                  variant="body3"
                >
                  Log in
                  <br />
                  <br />
                  Enter OTP
                  <br />
                  <br />
                  New Password
                  <br />
                  <br />
                  Reset Password
                  <br />
                  <br />
                  Create Account
                  <br />
                </Text>
              </Column>
            </Row>
            <Text
              className="font-semibold lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] text-gray_600 w-[auto]"
              variant="body3"
            >
              © Static Mania 2022. All rights reserved. / Template Documentation
            </Text>
          </Column>
          <Column className="absolute bg-gray_51 items-center justify-start lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
            <Column className="justify-start w-[88%]">
              <Row className="items-center justify-between w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-center lg:p-[167px] xl:p-[209px] 2xl:p-[235px] 3xl:p-[282px] rounded-radius10 w-[66%]"
                  style={{
                    backgroundImage:
                      "url('images/img_group100000142_550X792.png')",
                  }}
                >
                  <Button
                    className="flex lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center justify-center rounded-radius50 lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    size="lgIcn"
                    variant="icbFillWhiteA700ab"
                  >
                    <Img
                      src="images/img_search.svg"
                      className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                      alt="search One"
                    />
                  </Button>
                </Column>
                <Column className="items-center w-[32%]">
                  <Img
                    src="images/img_rectangle5611.png"
                    className="lg:h-[188px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] rounded-radius10 w-[100%]"
                    alt="Rectangle5611"
                  />
                  <Column
                    className="bg-cover bg-repeat items-end justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage:
                        "url('images/img_group100000142_263X384.png')",
                    }}
                  >
                    <Button
                      className="2xl:mt-[159px] 3xl:mt-[190px] flex items-center justify-center lg:mt-[113px] text-center w-[38%] xl:mt-[141px]"
                      leftIcon={
                        <Img
                          src="images/img_mail_24X24.svg"
                          className="text-center lg:w-[17px] lg:h-[18px] lg:mr-[4px] xl:w-[21px] xl:h-[22px] xl:mr-[5px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[6px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[7px]"
                          alt="mail"
                        />
                      }
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillWhiteA700ab"
                    >
                      <div className="bg-transparent font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                        3 more
                      </div>
                    </Button>
                  </Column>
                </Column>
              </Row>
              <Row className="items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 w-[66%]">
                  <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[71%]">
                    <Text
                      className="leading-[135.00%] text-gray_900 tracking-ls1 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Trovilla Plan in Sereno Canyon - Estate Collection by Toll
                      Brothers
                    </Text>
                    <Text
                      className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] KausarPial_One"
                      variant="body1"
                    >
                      2861 62nd Ave, Oakland, CA 94605
                    </Text>
                    <Row className="items-center lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[83%]">
                      <Column className="bg-white_A700 border border-gray_600 border-solid lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[48%]">
                        <Text
                          className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rowview_details_two"
                          as="h5"
                          variant="h5"
                        >
                          $649,900
                        </Text>
                        <Text
                          className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-gray_600 w-[auto]"
                          variant="body5"
                        >
                          Online / Cash Payment
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[48%]">
                        <Text
                          className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowview_details_two"
                          as="h5"
                          variant="h5"
                        >
                          $850 / month
                        </Text>
                        <Text
                          className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-gray_600 w-[auto]"
                          variant="body5"
                        >
                          0% EMI for 6 Months
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[98%]">
                    <Text
                      className="font-semibold leading-[140.00%] text-gray_900 tracking-ls1 w-[65%]"
                      variant="body1"
                    >
                      Well-constructed 1562 Sq Ft Home Is Now Offering To You In
                      Uttara For Sale
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic text-gray_600 w-[100%]"
                      variant="body2"
                    >
                      A slider is great way to display a slideshow featuring
                      images or videos, usually on your homepage.
                      <br />
                      Adding sliders to your site is no longer difficult. You
                      don’t have to know coding anymore. Just use a slider
                      widget and it will automatically insert the slider on your
                      web page.
                      <br />
                      So, the Elementor slider would be a great tool to work
                      with when building a WordPress site.
                    </Text>
                  </Column>
                  <Column className="justify-start mb-[4px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
                    <Text
                      className="text-gray_900 tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Local Information
                    </Text>
                    <Row className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[70%]">
                      <Button
                        className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                        shape="RoundedBorder10"
                        size="md"
                        variant="OutlineBluegray100_1"
                      >
                        Map
                      </Button>
                      <Button
                        className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[24%]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="FillGray900"
                      >
                        Schools
                      </Button>
                      <Button
                        className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[21%]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineBluegray100_1"
                      >
                        Crime
                      </Button>
                      <Button
                        className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
                        shape="RoundedBorder10"
                        size="md"
                        variant="OutlineBluegray100_1"
                      >
                        Shop & Eat
                      </Button>
                    </Row>
                    <Stack
                      className="bg-cover bg-repeat lg:h-[285px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] 3xl:px-[102px] lg:px-[60px] xl:px-[75px] 2xl:px-[85px] rounded-radius10 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group100000141.png')",
                      }}
                    >
                      <Img
                        src="images/img_group100000142_153X389.svg"
                        className="absolute lg:h-[109px] xl:h-[137px] 2xl:h-[154px] 3xl:h-[184px] left-[7%] top-[0] w-[55%]"
                        alt="Group100000142"
                      />
                    </Stack>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius10 w-[32%]">
                  <Text
                    className="lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] text-gray_900 tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Request for Visit
                  </Text>
                  <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
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
                    <Input
                      className="placeholder:text-gray_600 TextFieldLa"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[8px] w-[100%] xl:mt-[10px]"
                      name="TextFieldLa Three"
                      placeholder="Date"
                      prefix={
                        <Img
                          src="images/img_calendar.svg"
                          className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[16px] my-[auto]"
                          alt="calendar"
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
                    className="font-semibold lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder10"
                    size="xl"
                    variant="FillGray900"
                  >
                    Send Request
                  </Button>
                </Column>
              </Row>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 w-[66%]">
                <Text
                  className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-gray_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Home Highlights
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[76%]"
                  orientation="vertical"
                >
                  <Row className="items-start justify-between lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] 2xl:my-[10px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[97%]">
                    <Row className="items-start w-[37%]">
                      <div className="bg-gray_600 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                      <Text
                        className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] code"
                        variant="body2"
                      >
                        Parking
                      </Text>
                      <Text
                        className="font-semibold mb-[2px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        No Info
                      </Text>
                    </Row>
                    <Row className="items-start mt-[1px] w-[34%]">
                      <div className="bg-gray_600 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                      <Text
                        className="mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] code"
                        variant="body2"
                      >
                        HOA
                      </Text>
                      <Text
                        className="lg:ml-[56px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] reveiw1"
                        variant="body2"
                      >
                        None
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-start justify-between lg:mr-[11px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] 2xl:my-[10px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[97%]">
                    <Row className="items-start w-[37%]">
                      <div className="bg-gray_600 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                      <Text className="Outdoor" variant="body2">
                        Outdoor
                      </Text>
                      <Text
                        className="font-semibold mb-[1px] lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        No Info
                      </Text>
                    </Row>
                    <Row className="items-start mt-[1px] w-[34%]">
                      <div className="bg-gray_600 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                      <Text
                        className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] code"
                        variant="body2"
                      >
                        Price/Sqft
                      </Text>
                      <Text
                        className="font-semibold mb-[2px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        $560
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center justify-between 2xl:my-[10px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                    <Row className="items-start mb-[1px] w-[36%]">
                      <div className="bg-gray_600 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                      <Text className="Outdoor" variant="body2">
                        A/C
                      </Text>
                      <Text
                        className="font-semibold mb-[1px] 3xl:ml-[102px] lg:ml-[60px] xl:ml-[75px] 2xl:ml-[85px] text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        No Info
                      </Text>
                    </Row>
                    <Row className="items-start w-[36%]">
                      <div className="bg-gray_600 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                      <Text className="Outdoor" variant="body2">
                        Listed
                      </Text>
                      <Text
                        className="font-semibold mb-[1px] lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        No Info
                      </Text>
                    </Row>
                  </Row>
                </List>
                <Row className="items-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[25%]">
                  <div className="bg-gray_600 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                  <Text className="Outdoor" variant="body2">
                    Year Built
                  </Text>
                  <Text
                    className="font-semibold mb-[1px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] text-gray_900 w-[auto]"
                    variant="body2"
                  >
                    2021
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-radius10 w-[66%]">
                <Text
                  className="ml-[2px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-gray_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Agent Information
                </Text>
                <Row className="items-center ml-[2px] mr-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[50%]">
                  <Img
                    src="images/img_rectangle5599.png"
                    className="lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] rounded-radius10 lg:w-[106px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
                    alt="Rectangle5599"
                  />
                  <Column className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] w-[51%]">
                    <Text className="KausarPial_One" variant="body1">
                      Bruno Fernandes
                    </Text>
                    <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[95%]">
                      <Row className="items-center justify-evenly mb-[1px] w-[55%]">
                        <Img
                          src="images/img_star.svg"
                          className="star"
                          alt="star"
                        />
                        <Img
                          src="images/img_star.svg"
                          className="star"
                          alt="star One"
                        />
                        <Img
                          src="images/img_star.svg"
                          className="star"
                          alt="star Two"
                        />
                        <Img
                          src="images/img_star.svg"
                          className="star"
                          alt="star Three"
                        />
                        <Img
                          src="images/img_star_16X16.svg"
                          className="star"
                          alt="star Four"
                        />
                      </Row>
                      <Text className="reveiw" variant="body3">
                        4 review
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Img
                        src="images/img_mail_20X20.svg"
                        className="bookmark"
                        alt="mail One"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                        bruno@relasto .com
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[89%]">
                      <Img
                        src="images/img_call.svg"
                        className="bookmark"
                        alt="call One"
                      />
                      <Text
                        className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] text-gray_600 w-[auto]"
                        variant="body3"
                      >
                        +65 0231 965 965
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:mb-[56px] xl:mb-[71px] 2xl:mb-[80px] 3xl:mb-[96px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[88%]">
              <Row className="items-start justify-between w-[100%]">
                <Text className="rowlatestproperty" as="h4" variant="h4">
                  Latest Property Listings
                </Text>
                <Row className="items-start justify-between w-[10%]">
                  <Text className="ButtonAnchor2" variant="body2">
                    Explore All
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="arrowright"
                    alt="arrowright"
                  />
                </Row>
              </Row>
              <List
                className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="grideye">
                  <Img
                    src="images/img_image_260X384.png"
                    className="image_One"
                    alt="image Eight"
                  />
                  <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                    <Row className="items-end w-[100%]">
                      <Img
                        src="images/img_eye.svg"
                        className="arrowright"
                        alt="eye"
                      />
                      <Text className="location2" variant="body3">
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[81%]">
                      <Row className="items-center justify-between w-[99%]">
                        <Row className="items-center w-[51%]">
                          <Img
                            src="images/img_bookmark.svg"
                            className="bookmark"
                            alt="bookmark"
                          />
                          <Text className="test_3BedRoom" variant="body3">
                            3 Bed Room
                          </Text>
                        </Row>
                        <Row className="items-center w-[33%]">
                          <Img
                            src="images/img_ticket.svg"
                            className="bookmark"
                            alt="ticket"
                          />
                          <Text className="test_3BedRoom" variant="body3">
                            1 Bath
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                        <Row className="items-start w-[44%]">
                          <Img
                            src="images/img_icon.svg"
                            className="bookmark"
                            alt="icon"
                          />
                          <Text className="test_1032sqft" variant="body3">
                            1,032 sqft
                          </Text>
                        </Row>
                        <Radio
                          value="Family"
                          className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          checked={false}
                          name="Family"
                          label="Family"
                        ></Radio>
                      </Row>
                    </Column>
                    <Row className="items-center ml-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button
                        className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="FillGray900"
                      >
                        View Details
                      </Button>
                      <Text className="rowview_details" as="h5" variant="h5">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="grideye">
                  <Img
                    src="images/img_image_1.png"
                    className="image_One"
                    alt="image Nine"
                  />
                  <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                    <Row className="items-end w-[100%]">
                      <Img
                        src="images/img_eye.svg"
                        className="arrowright"
                        alt="eye One"
                      />
                      <Text className="location2" variant="body3">
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[81%]">
                      <Row className="items-center justify-between w-[99%]">
                        <Row className="items-center w-[51%]">
                          <Img
                            src="images/img_bookmark.svg"
                            className="bookmark"
                            alt="bookmark One"
                          />
                          <Text className="test_3BedRoom" variant="body3">
                            3 Bed Room
                          </Text>
                        </Row>
                        <Row className="items-center w-[33%]">
                          <Img
                            src="images/img_ticket.svg"
                            className="bookmark"
                            alt="ticket One"
                          />
                          <Text className="test_3BedRoom" variant="body3">
                            1 Bath
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                        <Row className="items-start w-[44%]">
                          <Img
                            src="images/img_icon.svg"
                            className="bookmark"
                            alt="icon One"
                          />
                          <Text className="test_1032sqft" variant="body3">
                            1,032 sqft
                          </Text>
                        </Row>
                        <Radio
                          value="Family"
                          className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          checked={false}
                          name="FamilyOne"
                          label="Family"
                        ></Radio>
                      </Row>
                    </Column>
                    <Row className="items-center ml-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button
                        className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="FillGray900"
                      >
                        View Details
                      </Button>
                      <Text className="rowview_details" as="h5" variant="h5">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="grideye">
                  <Img
                    src="images/img_image_2.png"
                    className="image_One"
                    alt="image Ten"
                  />
                  <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                    <Row className="items-end w-[100%]">
                      <Img
                        src="images/img_eye.svg"
                        className="arrowright"
                        alt="eye Two"
                      />
                      <Text className="location2" variant="body3">
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[81%]">
                      <Row className="items-center justify-between w-[99%]">
                        <Row className="items-center w-[51%]">
                          <Img
                            src="images/img_bookmark.svg"
                            className="bookmark"
                            alt="bookmark Two"
                          />
                          <Text className="test_3BedRoom" variant="body3">
                            3 Bed Room
                          </Text>
                        </Row>
                        <Row className="items-center w-[33%]">
                          <Img
                            src="images/img_ticket.svg"
                            className="bookmark"
                            alt="ticket Two"
                          />
                          <Text className="test_3BedRoom" variant="body3">
                            1 Bath
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                        <Row className="items-start w-[44%]">
                          <Img
                            src="images/img_icon.svg"
                            className="bookmark"
                            alt="icon Two"
                          />
                          <Text className="test_1032sqft" variant="body3">
                            1,032 sqft
                          </Text>
                        </Row>
                        <Radio
                          value="Family"
                          className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          checked={false}
                          name="FamilyTwo"
                          label="Family"
                        ></Radio>
                      </Row>
                    </Column>
                    <Row className="items-center ml-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button
                        className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="FillGray900"
                      >
                        View Details
                      </Button>
                      <Text className="rowview_details" as="h5" variant="h5">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Stack>
        <Footer className="bg-white_A700 w-[100%]" />
      </Column>
    </>
  );
};

export default PropertyDetailsPage;
