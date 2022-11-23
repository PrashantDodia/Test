import React from "react";

import { Column, Row, Img, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="bg-white_A700 justify-end lg:p-[54px] xl:p-[68px] 2xl:p-[77px] 3xl:p-[92px] w-[100%]">
          <Row className="items-end lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
            <Column className="justify-start w-[42%]">
              <Row className="items-center w-[26%]">
                <Img
                  src="images/img_home.svg"
                  className="home_Two"
                  alt="home Two"
                />
                <Text className="rowhome_two1" variant="body1">
                  Relasto
                </Text>
              </Row>
              <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[52%]">
                <Text className="column59bervelyhill1" variant="body3">
                  59 Bervely Hill Ave, Brooklyn Town,  New York, NY 5630, CA, US
                </Text>
                <Text
                  className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] column59bervelyhill1"
                  variant="body3"
                >
                  +056 686 56 56 98 info@staticmania.com
                </Text>
                <Img
                  src="images/img_socialmedia_10.svg"
                  className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[77%]"
                  alt="socialmedia"
                />
              </Column>
            </Column>
            <Column className="bg-white_A700 justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] py-[1px] w-[6%]">
              <Text className="Features" variant="body2">
                Features
              </Text>
              <Text
                className="font-manrope font-semibold leading-[270.00%] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] text-gray_900 w-[84%]"
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
            <Column className="bg-white_A700 justify-start lg:ml-[59px] xl:ml-[73px] 2xl:ml-[83px] 3xl:ml-[99px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] w-[10%]">
              <Text className="Features" variant="body2">
                Informations
              </Text>
              <Text
                className="font-manrope font-semibold leading-[270.00%] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-gray_900 w-[100%]"
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
            <Column className="bg-white_A700 justify-start lg:ml-[59px] xl:ml-[73px] 2xl:ml-[83px] 3xl:ml-[99px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] w-[10%]">
              <Text className="Features" variant="body2">
                Documention
              </Text>
              <Text
                className="font-manrope font-semibold leading-[270.00%] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-gray_900 w-[87%]"
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
            <Column className="bg-white_A700 justify-start lg:ml-[59px] xl:ml-[73px] 2xl:ml-[83px] 3xl:ml-[99px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] 2xl:pb-[11px] 3xl:pb-[13px] lg:pb-[7px] xl:pb-[9px] 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[7px] xl:pr-[9px] w-[11%]">
              <Text className="Features" variant="body2">
                Others
              </Text>
              <Text
                className="font-manrope font-semibold leading-[270.00%] mb-[3px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] text-gray_900 w-[99%]"
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
            className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] column59bervelyhill1"
            variant="body3"
          >
            © Static Mania 2022. All rights reserved. / Template Documentation
          </Text>
        </Column>
      </footer>
    </>
  );
};

export default Footer1;
