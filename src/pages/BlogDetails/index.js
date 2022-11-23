import React from "react";

import { Column, Text, Img, Row, Line, List, Button } from "components";
import Header from "components/Header/Header";
import Footer1 from "components/Footer/Footer1";
import { useNavigate } from "react-router-dom";

const BlogDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }
  function handleNavigate5() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gray_51 items-center justify-start lg:pb-[127px] xl:pb-[159px] 2xl:pb-[179px] 3xl:pb-[214px] w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[83%]">
            <Text
              className="leading-[140.00%] text-gray_900 tracking-ls1 w-[46%]"
              as="h3"
              variant="h3"
            >
              10 Delightful Dining Room Decor Trends for Spring
            </Text>
            <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[99%]">
              <Img
                src="images/img_rectangle5618.png"
                className="lg:h-[392px] xl:h-[490px] 2xl:h-[551px] 3xl:h-[661px] rounded-radius10 w-[92%]"
                alt="Rectangle5618"
              />
              <Row className="items-start justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Text
                  className="font-normal leading-[180.00%] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-gray_600 w-[83%]"
                  variant="body2"
                >
                  What a time we are living in! A lot of things are coming back,
                  bringing back nostalgia. Wondering why I am talking about
                  nostalgia and all? Especially when it is supposed to be an
                  article on websites! Well, because some old famous website
                  technology is coming back too. Yes, I am talking about static
                  websites.
                  <br />
                  <br />
                  Long ago, almost all websites were used to be static sites
                  during the early days of the internet. Then dynamic sites came
                  and blew the space. A lot of websites shifted to it. Obviously
                  dynamic sites have their advantages. But static sites are
                  making a comeback. And it’s coming stronger than before. In
                  this article, you will cover the basics of static websites
                  like what is a static website, what are the advantages, and
                  when you should use a static website. Let’s kick things off.
                </Text>
                <Column className="justify-start w-[10%]">
                  <Img
                    src="images/img_facebook.svg"
                    className="common-pointer lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                    onClick={handleNavigate4}
                    alt="facebook"
                  />
                  <Row className="items-center justify-evenly lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Img
                      src="images/img_volume.svg"
                      className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                      alt="volume"
                    />
                    <Column
                      className="bg-cover bg-repeat items-end lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[71%]"
                      style={{ backgroundImage: "url('images/img_share.svg')" }}
                    >
                      <Text
                        className="mr-[2px] mt-[1px] text-gray_900 w-[auto]"
                        variant="body5"
                      >
                        Share this
                      </Text>
                    </Column>
                  </Row>
                  <Img
                    src="images/img_twitter.svg"
                    className="common-pointer lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                    onClick={handleNavigate5}
                    alt="twitter"
                  />
                  <Img
                    src="images/img_reddit.svg"
                    className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                    alt="reddit"
                  />
                </Column>
              </Row>
            </Column>
            <Column className="justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] w-[83%]">
              <Column className="justify-start w-[66%]">
                <Text
                  className="text-gray_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Blockquotes
                </Text>
                <Text
                  className="lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] code"
                  variant="body2"
                >
                  {
                    "Blockquotes can be nested. Add a >> in front of the paragraph you want to nest."
                  }
                </Text>
              </Column>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid items-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] 3xl:pr-[103px] lg:pr-[61px] xl:pr-[76px] 2xl:pr-[86px] rounded-radius10 w-[84%]">
                <Line className="bg-bluegray_100 lg:h-[217px] xl:h-[271px] 2xl:h-[305px] 3xl:h-[366px] w-[6px]" />
                <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[96%]">
                  <Text className="KausarPial_One" variant="body1">
                    Performance: Faster Loading Speed
                  </Text>
                  <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[97%]">
                    <Row className="items-start w-[100%]">
                      <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Text className="point8" variant="body2">
                        Static websites are way faster than dynamic ones. As
                        they don’t have a back-end system, there is no time loss
                        due to database connection. Instead, the lightweight,
                        pre-rendered HTML files load incredibly fast.
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[96%]">
                      <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      <Text className="point8" variant="body2">
                        But why fast loading is important? According to Neil
                        Patel, 47% of people on the internet expect a web page
                        to load in less than 2 seconds.
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Row>
              <List
                className="bg-white_A700 border border-bluegray_100 border-solid gap-[0] min-h-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:p-[32px] xl:p-[40px] 2xl:p-[46px] 3xl:p-[55px] rounded-radius10 w-[100%]"
                orientation="vertical"
              >
                <Column className="justify-start ml-[4px] lg:mr-[121px] xl:mr-[152px] 2xl:mr-[171px] 3xl:mr-[205px] lg:my-[13px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[22px] w-[80%]">
                  <Text className="KausarPial_One" variant="body1">
                    Performance: Faster Loading Speed
                  </Text>
                  <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[99%]">
                    <Line className="bg-bluegray_100 lg:h-[143px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] w-[4px]" />
                    <Column className="items-center w-[97%]">
                      <Row className="items-start w-[100%]">
                        <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        <Text className="point8" variant="body2">
                          Static websites are way faster than dynamic ones. As
                          they don’t have a back-end system, there is no time
                          loss due to database connection. Instead, the
                          lightweight, pre-rendered HTML files load incredibly
                          fast.
                        </Text>
                      </Row>
                      <Row className="items-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[96%]">
                        <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        <Text className="point8" variant="body2">
                          But why fast loading is important? According to Neil
                          Patel, 47% of people on the internet expect a web page
                          to load in less than 2 seconds.
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column className="justify-start ml-[4px] lg:mr-[121px] xl:mr-[152px] 2xl:mr-[171px] 3xl:mr-[205px] lg:my-[13px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[22px] w-[80%]">
                  <Text className="KausarPial_One" variant="body1">
                    Flexibility: More Freedom to Develop Websites
                  </Text>
                  <Row className="items-end justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                    <Line className="bg-bluegray_100 lg:h-[136px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] w-[4px]" />
                    <Column className="justify-end mb-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pr-[4px] py-[4px] w-[97%]">
                      <Row className="items-start mr-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[92%]">
                        <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        <Text className="point8" variant="body2">
                          Dynamic site CMS like WordPress has a greater
                          dependency. They require an operating system like
                          Linux
                        </Text>
                      </Row>
                      <Row className="items-start mr-[auto] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[92%]">
                        <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        <Text className="point8" variant="body2">
                          Unlike dynamic websites, you don’t have to depend on
                          plugins to add functionalities to your static site.
                          Instead, you can create or include features directly
                          into files. Or, you can insert widgets using a
                          snippet.
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </List>
            </Column>
            <Column className="items-center justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius10 w-[83%]">
              <Column className="justify-start w-[97%]">
                <Text
                  className="text-gray_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Images
                </Text>
                <Text
                  className="font-normal leading-[180.00%] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-gray_600 w-[100%]"
                  variant="body2"
                >
                  Being a fast loading and more secure website, you can choose a
                  static website for beginner to medium level workload.
                  Hopefully, you have got the answer to what is a static website
                  and why should you use it. Decide carefully does static sites
                  are enough for your need.
                </Text>
              </Column>
              <Img
                src="images/img_rectangle5619.png"
                className="lg:h-[379px] xl:h-[474px] 2xl:h-[533px] 3xl:h-[639px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] rounded-radius10 w-[100%]"
                alt="Rectangle5619"
              />
            </Column>
            <Column className="justify-start 3xl:mt-[102px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[85px] w-[80%]">
              <Text
                className="text-gray_900 tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                Lists
              </Text>
              <Text
                className="font-normal leading-[180.00%] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-gray_600 w-[100%]"
                variant="body2"
              >
                Being a fast loading and more secure website, you can choose a
                static website for beginner to medium level workload. Hopefully,
                you have got the answer to what is a static website and why
                should you use it. Decide carefully does static sites are enough
                for your need.
              </Text>
              <Column className="justify-end lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] py-[4px] w-[45%]">
                <Row className="items-start mr-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[75%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="list">
                    Performance: Faster Loading Speed
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[67%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="list">Less Server-side Dependencies</Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[95%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="list">
                    Flexibility: More Freedom to Develop Websites
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[69%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="list">Security: A More Secure Website</Text>
                </Row>
                <Row className="items-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[97%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="list">
                    Scalability: Capability to Handle Massive Traffic
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="list">
                    Hosting and Pricing: Saves Your Budget For Good
                  </Text>
                </Row>
              </Column>
              <Column className="justify-end lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] py-[4px] w-[47%]">
                <Row className="items-start mr-[auto] mt-[2px] w-[76%]">
                  <Text className="One" variant="body2">
                    01.
                  </Text>
                  <Text className="font-semibold lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
                    Performance: Faster Loading Speed
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[68%]">
                  <Text className="One" variant="body2">
                    02.
                  </Text>
                  <Text className="font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
                    Less Server-side Dependencies
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[95%]">
                  <Text className="One" variant="body2">
                    03.
                  </Text>
                  <Text className="FlexibilityMo_Two">
                    Flexibility: More Freedom to Develop Websites
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[70%]">
                  <Text className="One" variant="body2">
                    04.
                  </Text>
                  <Text className="FlexibilityMo_Two">
                    Security: A More Secure Website
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[97%]">
                  <Text className="One" variant="body2">
                    05.
                  </Text>
                  <Text className="FlexibilityMo_Two">
                    Scalability: Capability to Handle Massive Traffic
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                  <Text className="One" variant="body2">
                    06.
                  </Text>
                  <Text className="font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
                    Hosting and Pricing: Saves Your Budget For Good
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[71%]">
              <Column className="justify-start w-[77%]">
                <Text
                  className="text-gray_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Code
                </Text>
                <Text
                  className="lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] code"
                  variant="body2"
                >
                  Being a fast loading and more secure website, you can choose a
                  static website.
                </Text>
              </Column>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid items-start justify-end lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[100%]">
                <Text
                  className="font-normal lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-bluegray_100 w-[auto]"
                  variant="body2"
                >
                  1 2 3 4 5 6 7 8 9 10 11 12
                </Text>
                <Column className="justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:my-[11px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[81%]">
                  <Column className="justify-start w-[49%]">
                    <Text className="code" variant="body2">
                      {"<html>"}
                    </Text>
                    <Text
                      className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] code"
                      variant="body2"
                    >
                      {"<body>"}
                    </Text>
                    <Text
                      className="lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] code"
                      variant="body2"
                    >
                      {"<h2>JavaScript While Loop</h2>"}
                    </Text>
                  </Column>
                  <Column className="justify-start lg:ml-[49px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[43%]">
                    <Text className="code" variant="body2">
                      {"<script>"}
                    </Text>
                    <Text
                      className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] code"
                      variant="body2"
                    >
                      {`let text = ""; let i = 0;`}
                      <br />
                      {" while (i < 10) {"}
                      <br />
                      {`  text += "<br>The number is " + i;   i++;`}
                    </Text>
                    <Text
                      className="lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] code"
                      variant="body2"
                    >
                      {"<script>"}
                    </Text>
                  </Column>
                  <Text
                    className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] code"
                    variant="body2"
                  >
                    {"<body>"}
                  </Text>
                  <Text
                    className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] code"
                    variant="body2"
                  >
                    {"<html>"}
                  </Text>
                </Column>
                <Button
                  className="2xl:ml-[8px] 2xl:mt-[10px] 3xl:ml-[9px] 3xl:mt-[12px] flex items-center justify-center lg:ml-[5px] lg:mt-[7px] text-center w-[12%] xl:ml-[7px] xl:mt-[8px]"
                  leftIcon={
                    <Img
                      src="images/img_camera_16X16.svg"
                      className="mr-[4px] text-center lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                      alt="camera"
                    />
                  }
                  shape="RoundedBorder10"
                  size="md"
                  variant="OutlineGray600"
                >
                  <div className="bg-transparent font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Copy
                  </div>
                </Button>
              </Row>
            </Column>
            <Column className="justify-end lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] pr-[4px] py-[4px] w-[83%]">
              <Text className="rowlatestproperty" as="h4" variant="h4">
                Link
              </Text>
              <Text
                className="font-normal leading-[180.00%] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic text-gray_600 w-[98%]"
                variant="body2"
              >
                <span className="text-gray_600 font-manrope lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Yes, a static website may have all its benefits, but is it
                  suitable for you? That’s a big question. It depends on why you
                  are going to build a website, what purpose it will{" "}
                </span>
                <span className="text-gray_900 font-manrope font-semibold underline lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  serve
                </span>
                <span className="text-gray_600 font-manrope lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  . That’s why you must when you should use a static website.
                  <br />
                  <br />
                  The followings are the common applications where using the
                  static website is the best choice. -{" "}
                </span>
                <span className="text-gray_900 font-manrope font-semibold underline lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Blog sites
                </span>
                <span className="text-gray_600 font-manrope lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  - - Small business websites - Websites Under-Development -
                  Personal Portfolio sites - Websites that contain basic
                  information
                </span>
              </Text>
            </Column>
            <Column className="justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[75%]">
              <Column className="justify-end pr-[4px] py-[4px] w-[79%]">
                <Text className="rowlatestproperty" as="h4" variant="h4">
                  Tables
                </Text>
                <Text
                  className="font-normal leading-[180.00%] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-gray_600 w-[95%]"
                  variant="body2"
                >
                  The followings are the common applications where using the
                  static website is the best choice. - Blog sites- - Small
                  business websites.
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 w-[100%]">
                <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[91%]">
                  <Text
                    className="mb-[1px] text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    Full Name
                  </Text>
                  <Text
                    className="mb-[1px] lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    Title
                  </Text>
                  <Text
                    className="mb-[1px] lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    Email Address
                  </Text>
                  <Text
                    className="lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] mt-[1px] text-gray_900 w-[auto]"
                    variant="body5"
                  >
                    Phone Number
                  </Text>
                </Row>
                <List
                  className="gap-[0] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] min-h-[auto] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:pr-[20px] xl:pr-[25px] 2xl:pr-[29px] 3xl:pr-[34px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-start justify-between lg:my-[14px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[25px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      Zakir Hossen
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      UI, UX Designer
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      dezakir.uix@gmail.com
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      +88 222 5554 444
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
                  <Row className="items-start justify-between lg:my-[14px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[25px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      Zakir Hossen
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      UI, UX Designer
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      dezakir.uix@gmail.com
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      +88 222 5554 444
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
                  <Row className="items-start justify-between lg:my-[14px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[25px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      Zakir Hossen
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      UI, UX Designer
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      dezakir.uix@gmail.com
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      +88 222 5554 444
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
                  <Row className="items-start justify-between lg:my-[14px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[25px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      Zakir Hossen
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      UI, UX Designer
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      dezakir.uix@gmail.com
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      +88 222 5554 444
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
                  <Row className="items-start justify-between lg:my-[14px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[25px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      Zakir Hossen
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      UI, UX Designer
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      dezakir.uix@gmail.com
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 w-[auto]"
                      variant="body3"
                    >
                      +88 222 5554 444
                    </Text>
                  </Row>
                </List>
              </Column>
            </Column>
            <Column className="justify-start 2xl:mt-[107px] 3xl:mt-[128px] lg:mt-[76px] xl:mt-[95px] w-[40%]">
              <Text className="rowview_details_two" as="h5" variant="h5">
                Write by
              </Text>
              <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Img
                  src="images/img_profilepicture.png"
                  className="2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[71px] xl:w-[88px]"
                  alt="profilepicture"
                />
                <Column className="w-[37%]">
                  <Text className="rowview_details_two" as="h5" variant="h5">
                    Kristin Watson
                  </Text>
                  <Text
                    className="font-semibold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-gray_600 w-[auto]"
                    variant="body3"
                  >
                    Co-founder and CDO
                  </Text>
                </Column>
                <Line className="bg-bluegray_100 lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] w-[1px]" />
                <Row className="items-start w-[24%]">
                  <div className="bg-bluegray_100 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mt-[1px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                  <Text className="font-semibold Date" variant="body3">
                    July 20, 2022
                  </Text>
                </Row>
              </Row>
            </Column>
            <Column className="justify-start 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[76px] xl:mt-[96px] w-[100%]">
              <Text className="columnrecentnews" as="h3" variant="h3">
                Recent News
              </Text>
              <List
                className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="items-center justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5617.png"
                    className="Rectangle5617"
                    alt="Rectangle5617"
                  />
                  <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                    <Button
                      className="font-semibold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray100_1"
                    >
                      Business
                    </Button>
                    <Column className="justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                      <Text className="titledate" as="h5" variant="h5">
                        10 Delightful Dining Room Decor Trends for Spring
                      </Text>
                      <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                        <Row className="items-start mt-[1px] w-[48%]">
                          <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mt-[1px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                          <Text className="Date" variant="body5">
                            July 20, 2022
                          </Text>
                        </Row>
                        <Row className="items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[39%]">
                          <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                          <Text className="Date" variant="body5">
                            7 min read
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                    <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[49%]">
                      <Text className="ButtonAnchor4" variant="body2">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="arrowright_Three"
                        alt="arrowright"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5617.png"
                    className="Rectangle5617"
                    alt="Rectangle5617 One"
                  />
                  <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                    <Button
                      className="font-semibold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray100_1"
                    >
                      Business
                    </Button>
                    <Column className="justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                      <Text className="titledate" as="h5" variant="h5">
                        10 Delightful Dining Room Decor Trends for Spring
                      </Text>
                      <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                        <Row className="items-start mt-[1px] w-[48%]">
                          <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mt-[1px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                          <Text className="Date" variant="body5">
                            July 20, 2022
                          </Text>
                        </Row>
                        <Row className="items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[39%]">
                          <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                          <Text className="Date" variant="body5">
                            7 min read
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                    <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[49%]">
                      <Text className="ButtonAnchor4" variant="body2">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="arrowright_Three"
                        alt="arrowright One"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5617.png"
                    className="Rectangle5617"
                    alt="Rectangle5617 Two"
                  />
                  <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                    <Button
                      className="font-semibold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="OutlineBluegray100_1"
                    >
                      Business
                    </Button>
                    <Column className="justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                      <Text className="titledate" as="h5" variant="h5">
                        10 Delightful Dining Room Decor Trends for Spring
                      </Text>
                      <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                        <Row className="items-start mt-[1px] w-[48%]">
                          <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mt-[1px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                          <Text className="Date" variant="body5">
                            July 20, 2022
                          </Text>
                        </Row>
                        <Row className="items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[39%]">
                          <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                          <Text className="Date" variant="body5">
                            7 min read
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                    <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[49%]">
                      <Text className="ButtonAnchor4" variant="body2">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="arrowright_Three"
                        alt="arrowright Two"
                      />
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Column>
        <Footer1 className="bg-white_A700 w-[100%]" />
      </Column>
    </>
  );
};

export default BlogDetailsPage;
