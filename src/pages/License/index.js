import React from "react";

import { Column, Text, Row } from "components";
import Header from "components/Header/Header";
import Footer1 from "components/Footer/Footer1";

const LicensePage = () => {
  return (
    <>
      <Column className="bg-gray_51 font-manrope justify-start mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Header className="w-[100%]" />
        </Column>
        <Column className="justify-start xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] lg:mt-[55px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] w-[69%]">
          <Text className="columnrecentnews" as="h2" variant="h2">
            License
          </Text>
          <Text
            className="lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] code"
            variant="body2"
          >
            Last updated: January 2020
          </Text>
          <Text
            className="font-normal leading-[180.00%] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic text-gray_600 w-[100%]"
            variant="body2"
          >
            Your content remains yours, which means that you retain any
            intellectual property rights that you have in your content. For
            example, you have intellectual property rights in the creative
            content you make, such as reviews you write. Or you may have the
            right to share someone else’s creative content if they’ve given you
            their permission.
            <br />
            <br />
            We need your permission if your intellectual property rights
            restrict our use of your content. You provide Google with that
            permission through this license.
          </Text>
          <Column className="justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
            <Column className="justify-end pr-[4px] py-[4px] w-[100%]">
              <Text
                className="mt-[1px] rowview_details_two"
                as="h5"
                variant="h5"
              >
                What’s covered
              </Text>
              <Text
                className="lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] code"
                variant="body2"
              >
                This license covers your content if that content is protected by
                intellectual property rights.
              </Text>
            </Column>
            <Column className="justify-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pr-[4px] py-[4px] w-[100%]">
              <Text
                className="mt-[1px] rowview_details_two"
                as="h5"
                variant="h5"
              >
                What’s not covered
              </Text>
              <Text
                className="font-normal leading-[180.00%] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] not-italic text-gray_600 w-[100%]"
                variant="body2"
              >
                We use cookies to recognize and monitor users, their on-site
                behavior, and their preferences for accessing their website.
                These cookies include the IP and time of visits by visitors.
                Visitors to StaticMania that do not want cookies put on their
                browsers should configure their browsers to reject cookies
                before using the StaticMania website.
              </Text>
            </Column>
            <Column className="justify-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pr-[4px] py-[4px] w-[100%]">
              <Text
                className="mt-[3px] rowview_details_two"
                as="h5"
                variant="h5"
              >
                Price Updates
              </Text>
              <Text
                className="font-normal leading-[180.00%] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic text-gray_600 w-[97%]"
                variant="body2"
              >
                We will need to update this policy from time to time to ensure
                that it remains up-to-date with the latest legal requirements
                and any improvements to our privacy management practices.
                <br />
                When we change the policy, we will make sure that we inform you,
                if any, of such changes. A copy of this policy’s latest version
                will always be available at this page.
              </Text>
            </Column>
            <Column className="justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[71%]">
              <Text className="rowview_details_two" as="h5" variant="h5">
                Refund Policy
              </Text>
              <Row className="items-start lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[96%]">
                <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="point8" variant="body2">
                  But why fast loading is important? According to Neil Patel,
                  47% of people on the internet expect a web page to load in
                  less than 2 seconds.
                </Text>
              </Row>
              <Row className="items-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]">
                <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="point8" variant="body2">
                  Static websites are way faster than dynamic ones. As they
                  don’t have a back-end system, there is no time loss due to
                  database connection. Instead, the lightweight, pre-rendered
                  HTML files load incredibly fast.
                </Text>
              </Row>
              <Row className="items-start mb-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]">
                <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="point8" variant="body2">
                  You may not disclose any information about your order
                  including, but not limited to, Order ID, download connection,
                  etc.
                </Text>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="items-center 3xl:mt-[102px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[85px] w-[100%]">
          <Footer1 className="bg-white_A700 w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default LicensePage;
