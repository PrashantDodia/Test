import React from "react";

import {
  Column,
  Text,
  Row,
  Img,
  List,
  Button,
  Stack,
  Grid,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="items-center justify-start 3xl:mt-[106px] lg:mt-[63px] xl:mt-[79px] 2xl:mt-[89px] w-[50%]">
          <Text
            className="leading-[140.00%] text-center text-gray_900 tracking-ls1 w-[91%]"
            as="h1"
            variant="h1"
          >
            Reimagining real estate to make it easier to unlock.
          </Text>
          <Text
            className="font-normal leading-[180.00%] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] not-italic text-center text-gray_700 w-[100%]"
            variant="body2"
          >
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble.
          </Text>
        </Column>
        <Column className="items-center justify-start lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] rounded-radius10 w-[83%]">
          <Row className="items-center justify-between w-[100%]">
            <Img
              src="images/img_rectangle5592.png"
              className="lg:h-[285px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] rounded-radius10 w-[66%]"
              alt="Rectangle5592"
            />
            <Img
              src="images/img_rectangle5593.png"
              className="lg:h-[285px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] rounded-radius10 w-[32%]"
              alt="Rectangle5593"
            />
          </Row>
          <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
            <Img
              src="images/img_rectangle5595.png"
              className="lg:h-[285px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] rounded-radius10 w-[32%]"
              alt="Rectangle5595"
            />
            <Img
              src="images/img_rectangle5594.png"
              className="lg:h-[285px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] rounded-radius10 w-[66%]"
              alt="Rectangle5594"
            />
          </Row>
        </Column>
        <Row className="bg-gray_50 items-start justify-between 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
          <List
            className="lg:gap-[116px] xl:gap-[145px] 2xl:gap-[164px] 3xl:gap-[196px] grid grid-cols-2 lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] min-h-[auto] lg:ml-[49px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] w-[41%]"
            orientation="horizontal"
          >
            <Column className="justify-start w-[100%]">
              <Button
                className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                size="smIcn"
                variant="icbOutlineBluegray30033"
              >
                <Img
                  src="images/img_clock.svg"
                  className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
                  alt="clock"
                />
              </Button>
              <Text className="price_One1" as="h2" variant="h2">
                $15.4M
              </Text>
              <Text className="OwnedfromProp1" variant="body1">
                Owned from
                <br />
                <br />
                Properties transactions
              </Text>
            </Column>
            <Column className="justify-start w-[100%]">
              <Button
                className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                size="smIcn"
                variant="icbOutlineBluegray30033"
              >
                <Img
                  src="images/img_arrowdown.svg"
                  className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
                  alt="arrowdown Four"
                />
              </Button>
              <Text className="price_One1" as="h2" variant="h2">
                25K+
              </Text>
              <Text className="OwnedfromProp1" variant="body1">
                Properties for Buy & sell Successfully
              </Text>
            </Column>
          </List>
          <Column className="justify-start w-[11%]">
            <Button
              className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
              size="smIcn"
              variant="icbOutlineBluegray30033"
            >
              <Img
                src="images/img_reply.svg"
                className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
                alt="reply"
              />
            </Button>
            <Text className="price_One1" as="h2" variant="h2">
              500
            </Text>
            <Text className="Dailycompleted1" variant="body1">
              Daily completed  transactions
            </Text>
          </Column>
          <Column className="justify-start 3xl:mr-[103px] lg:mr-[61px] xl:mr-[76px] 2xl:mr-[86px] w-[11%]">
            <Button
              className="flex lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
              size="smIcn"
              variant="icbOutlineBluegray30033"
            >
              <Img
                src="images/img_search_60X60.svg"
                className="flex items-center justify-center lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px]"
                alt="search One"
              />
            </Button>
            <Text className="ml-[3px] price_One1" as="h2" variant="h2">
              600+
            </Text>
            <Text className="Dailycompleted1" variant="body1">
              Reagular Clients
            </Text>
          </Column>
        </Row>
        <Row className="items-center 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[83%]">
          <Column className="pb-[4px] pr-[4px] w-[51%]">
            <Text
              className="leading-[140.00%] text-gray_900 tracking-ls1 w-[43%]"
              as="h3"
              variant="h3"
            >
              A note from our founders.
            </Text>
            <Text
              className="font-normal leading-[180.00%] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic text-gray_700 w-[72%]"
              variant="body2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. In a free hour,
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[86%]"
              orientation="vertical"
            >
              <Column className="justify-start lg:mr-[14px] xl:mr-[18px] 2xl:mr-[21px] 3xl:mr-[25px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[96%]">
                <Row className="items-center w-[51%]">
                  <Text
                    className="border-2 border-gray_900 border-solid flex font-extrabold items-center xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 text-gray_900 tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    1
                  </Text>
                  <Text
                    className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] text-gray_900 tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    It all started in 1995
                  </Text>
                </Row>
                <Text className="columnpoint" variant="body2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment.
                </Text>
              </Column>
              <Column className="justify-start lg:mr-[14px] xl:mr-[18px] 2xl:mr-[21px] 3xl:mr-[25px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[96%]">
                <Row className="items-center w-[62%]">
                  <Text
                    className="border-2 border-gray_900 border-solid flex font-extrabold items-center 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius50 text-gray_900 tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    2
                  </Text>
                  <Text
                    className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] text-gray_900 tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Donate launches in 2007
                  </Text>
                </Row>
                <Text className="columnpoint" variant="body2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment.
                </Text>
              </Column>
              <Column className="justify-start lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[100%]">
                <Row className="items-end w-[100%]">
                  <Text
                    className="border-2 border-gray_900 border-solid flex font-extrabold items-center 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius50 text-gray_900 tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    3
                  </Text>
                  <Text
                    className="mb-[2px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-gray_900 tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Relasto holds its initial public offering in 2008
                  </Text>
                </Row>
                <Text
                  className="font-normal leading-[180.00%] lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-gray_700 w-[84%]"
                  variant="body2"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment.
                </Text>
              </Column>
            </List>
          </Column>
          <Stack className="lg:h-[459px] xl:h-[574px] 2xl:h-[646px] 3xl:h-[775px] rotate-[180deg] rounded-radius10 w-[49%]">
            <div className="absolute bg-orange_A700 bottom-[0] lg:h-[424px] xl:h-[530px] 2xl:h-[596px] 3xl:h-[715px] right-[0] rounded-radius10 w-[88%]"></div>
            <Img
              src="images/img_rectangle20_1.png"
              className="absolute lg:h-[419px] xl:h-[524px] 2xl:h-[590px] 3xl:h-[708px] left-[0] rounded-radius10 top-[0] w-[91%]"
              alt="RectangleTwenty"
            />
          </Stack>
        </Row>
        <Row className="items-center justify-between 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[7px] xl:pr-[9px] rounded-radius10 w-[83%]">
          <Stack className="lg:h-[459px] xl:h-[574px] 2xl:h-[646px] 3xl:h-[775px] rounded-radius10 w-[49%]">
            <div className="absolute bg-orange_A700 bottom-[0] lg:h-[424px] xl:h-[530px] 2xl:h-[596px] 3xl:h-[715px] left-[0] rounded-radius10 w-[88%]"></div>
            <Img
              src="images/img_rectangle20_2.png"
              className="RectangleTwenty_One"
              alt="RectangleTwenty One"
            />
          </Stack>
          <Column className="w-[37%]">
            <Text
              className="text-gray_900 tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Our vision is simple.
            </Text>
            <Text className="description2" variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. In a free hour, On the other hand, we denounce with
              righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment.
              <br />
              In a free hour, On the other hand, we denounce with righteous
              indignation and dislike men .
            </Text>
            <Text
              className="lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] KausarPial_One"
              variant="body1"
            >
              Kausar Pial
            </Text>
            <Text
              className="font-semibold lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-gray_700 w-[auto]"
              variant="body2"
            >
              CEO at Static Mania
            </Text>
          </Column>
        </Row>
        <Column className="items-center justify-start 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[76px] xl:mt-[96px] rounded-radius10 w-[83%]">
          <Text
            className="text-gray_900 tracking-ls1 w-[auto]"
            as="h3"
            variant="h3"
          >
            Relasto Team members
          </Text>
          <Column className="items-center justify-start lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] rounded-radius10 w-[100%]">
            <Grid className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-4 w-[100%]">
              <Column className="justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5596.png"
                  className="Rectangle5596"
                  alt="Rectangle5596"
                />
                <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[36%]">
                  <Text className="KausarPial_One" variant="body1">
                    Kausar Pial
                  </Text>
                  <Text
                    className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-gray_700 w-[auto]"
                    variant="body2"
                  >
                    CEO
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5597.png"
                  className="Rectangle5596"
                  alt="Rectangle5597"
                />
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[53%]">
                  <Text className="KausarPial_One" variant="body1">
                    Floyd Miles
                  </Text>
                  <Text
                    className="font-normal lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-gray_700 w-[auto]"
                    variant="body2"
                  >
                    President of Sales
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start pb-[4px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5598.png"
                  className="Rectangle5596"
                  alt="Rectangle5598"
                />
                <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[67%]">
                  <Text className="KausarPial_One" variant="body1">
                    Darlene Robertson
                  </Text>
                  <Text className="MarketingCoord" variant="body2">
                    Marketing Coordinator
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start pb-[4px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5599.png"
                  className="Rectangle5596"
                  alt="Rectangle5599"
                />
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[67%]">
                  <Text className="KausarPial_One" variant="body1">
                    Guy Hawkins
                  </Text>
                  <Text className="MarketingCoord_One" variant="body2">
                    Marketing Coordinator
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start pb-[4px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5600.png"
                  className="Rectangle5596"
                  alt="Rectangle5600"
                />
                <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[67%]">
                  <Text className="KausarPial_One" variant="body1">
                    Jerome Bell
                  </Text>
                  <Text className="MarketingCoord" variant="body2">
                    Marketing Coordinator
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start pb-[4px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5601.png"
                  className="Rectangle5596"
                  alt="Rectangle5601"
                />
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[67%]">
                  <Text className="KausarPial_One" variant="body1">
                    Ralph Edwards
                  </Text>
                  <Text className="MarketingCoord_One" variant="body2">
                    Marketing Coordinator
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start pb-[4px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5602.png"
                  className="Rectangle5596"
                  alt="Rectangle5602"
                />
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[67%]">
                  <Text className="KausarPial_One" variant="body1">
                    Arlene McCoy
                  </Text>
                  <Text className="MarketingCoord_One" variant="body2">
                    Marketing Coordinator
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start pb-[4px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5603.png"
                  className="Rectangle5596"
                  alt="Rectangle5603"
                />
                <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[67%]">
                  <Text className="KausarPial_One" variant="body1">
                    Devon Lane
                  </Text>
                  <Text className="MarketingCoord" variant="body2">
                    Marketing Coordinator
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start pb-[4px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5604.png"
                  className="Rectangle5596"
                  alt="Rectangle5604"
                />
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[67%]">
                  <Text className="KausarPial_One" variant="body1">
                    Courtney Henry
                  </Text>
                  <Text className="MarketingCoord_One" variant="body2">
                    Marketing Coordinator
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start pb-[4px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5605.png"
                  className="Rectangle5596"
                  alt="Rectangle5605"
                />
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[67%]">
                  <Text className="KausarPial_One" variant="body1">
                    Bessie Cooper
                  </Text>
                  <Text className="MarketingCoord_One" variant="body2">
                    Marketing Coordinator
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start pb-[4px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5606.png"
                  className="Rectangle5596"
                  alt="Rectangle5606"
                />
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[67%]">
                  <Text className="KausarPial_One" variant="body1">
                    Cody Fisher
                  </Text>
                  <Text className="MarketingCoord_One" variant="body2">
                    Marketing Coordinator
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start pb-[4px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5607.png"
                  className="Rectangle5596"
                  alt="Rectangle5607"
                />
                <Column className="justify-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[67%]">
                  <Text className="KausarPial_One" variant="body1">
                    Cody Fisher
                  </Text>
                  <Text className="MarketingCoord_One" variant="body2">
                    Marketing Coordinator
                  </Text>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Column>
        <Column className="bg-gray_900 items-center justify-start 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] xl:p-[106px] 2xl:p-[120px] 3xl:p-[144px] lg:p-[85px] w-[100%]">
          <Column className="items-center justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[100%]">
            <Row className="items-start justify-between w-[100%]">
              <Text
                className="text-white_A700 tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                News & Consult
              </Text>
              <Row className="items-start justify-between mt-[4px] w-[10%]">
                <Text className="rowexploreall1" variant="body2">
                  Explore All
                </Text>
                <Img
                  src="images/img_arrowright_24X24.svg"
                  className="arrowright"
                  alt="arrowright"
                />
              </Row>
            </Row>
            <List
              className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="justify-start w-[100%]">
                <Img
                  src="images/img_image_350X384.png"
                  className="image_Thirteen"
                  alt="image Eighteen"
                />
                <Text className="blog1" as="h5" variant="h5">
                  9 Easy-to-Ambitious DIY Projects to Improve Your Home
                </Text>
                <Row className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[45%]">
                  <Text
                    className="font-bold text-deep_orange_400 w-[auto]"
                    variant="body2"
                  >
                    Read the Article
                  </Text>
                  <Img
                    src="images/img_arrowright_24X24.svg"
                    className="arrowright_Three"
                    alt="arrowright One"
                  />
                </Row>
              </Column>
              <Column className="justify-start w-[100%]">
                <Img
                  src="images/img_image_6.png"
                  className="image_Thirteen"
                  alt="image Nineteen"
                />
                <Text className="blog2" as="h5" variant="h5">
                  Serie Shophouse Launch In July, Opportunity For Investors
                </Text>
                <Row className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[45%]">
                  <Text
                    className="font-bold text-deep_orange_400 w-[auto]"
                    variant="body2"
                  >
                    Read the Article
                  </Text>
                  <Img
                    src="images/img_arrowright_24X24.svg"
                    className="arrowright_Three"
                    alt="arrowright Two"
                  />
                </Row>
              </Column>
              <Column className="justify-start w-[100%]">
                <Img
                  src="images/img_image_7.png"
                  className="image_Thirteen"
                  alt="image Twenty"
                />
                <Text className="blog3" as="h5" variant="h5">
                  Looking for a New Place? Use This Time to Create Your Wishlist
                </Text>
                <Row className="items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[45%]">
                  <Text
                    className="font-bold text-deep_orange_400 w-[auto]"
                    variant="body2"
                  >
                    Read the Article
                  </Text>
                  <Img
                    src="images/img_arrowright_24X24.svg"
                    className="arrowright_Three"
                    alt="arrowright Three"
                  />
                </Row>
              </Column>
            </List>
          </Column>
          <Column className="bg-gray_401 items-center justify-end xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[85px] lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 w-[58%]">
            <Text
              className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] text-gray_900 tracking-ls1 w-[auto]"
              as="h4"
              variant="h4"
            >
              For Recent Update, News.
            </Text>
            <Text
              className="font-normal leading-[180.00%] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic text-center text-gray_900 w-[74%]"
              variant="body2"
            >
              We helps businesses customize, automate and scale up their ad
              production and delivery.
            </Text>
            <Row className="items-center justify-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] rounded-radius10 w-[64%]">
              <Input
                className="placeholder:text-gray_700 input"
                wrapClassName="w-[65%]"
                type="email"
                name="input"
                placeholder="Enter your Email"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray52"
              ></Input>
              <Button
                className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[32%]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillGray900"
              >
                Subscribe
              </Button>
            </Row>
          </Column>
        </Column>
        <Footer className="bg-white_A700 w-[100%]" />
      </Column>
    </>
  );
};

export default AboutUsPage;
