import React from "react";

import {
  Column,
  Stack,
  Text,
  Row,
  Button,
  Img,
  List,
  Grid,
  Radio,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const LandingPageOnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Stack className="bg-yellow_50 lg:h-[512px] xl:h-[641px] 2xl:h-[721px] 3xl:h-[865px] lg:pl-[46px] xl:pl-[58px] 2xl:pl-[66px] 3xl:pl-[79px] w-[100%]">
          <Column className="absolute justify-start left-[4%] top-[8%] w-[51%]">
            <Text
              className="text-gray_900 tracking-ls1 w-[auto]"
              as="h2"
              variant="h2"
            >
              Find a perfect property Where you'll love to live
            </Text>
            <Text
              className="font-normal leading-[180.00%] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-gray_700 w-[69%]"
              variant="body1"
            >
              We helps businesses customize, automate and scale up their ad
              production and delivery.
            </Text>
            <Column className="justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
              <Row className="items-center rounded-radius10 w-[40%]">
                <Button
                  className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[32%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="FillWhiteA700"
                >
                  Buy
                </Button>
                <Button
                  className="font-bold ml-[4px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[32%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="FillGray300"
                >
                  Sell
                </Button>
                <Button
                  className="font-bold ml-[4px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[32%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="FillGray300"
                >
                  Rent
                </Button>
              </Row>
              <Row className="bg-white_A700 items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius14 w-[100%]">
                <Row className="items-start ml-[4px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[79%]">
                  <Column className="justify-start mt-[1px] w-[33%]">
                    <Text
                      className="font-semibold text-gray_601 w-[auto]"
                      variant="body4"
                    >
                      City/Street
                    </Text>
                    <Row className="items-center mt-[4px] w-[78%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        New York City
                      </Text>
                      <Img
                        src="images/img_location_20X20.svg"
                        className="ml-[4px] bookmark1"
                        alt="location"
                      />
                    </Row>
                  </Column>
                  <List
                    className="lg:gap-[28px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-2 min-h-[auto] w-[67%]"
                    orientation="horizontal"
                  >
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_601 w-[auto]"
                        variant="body4"
                      >
                        Property Type
                      </Text>
                      <Row className="items-start justify-evenly mt-[4px] w-[100%]">
                        <Text className="rowduplexhouse" variant="body2">
                          Duplex House
                        </Text>
                        <Img
                          src="images/img_sort.svg"
                          className="sort"
                          alt="sort"
                        />
                      </Row>
                    </Column>
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_601 w-[auto]"
                        variant="body4"
                      >
                        Property Type
                      </Text>
                      <Row className="items-start justify-evenly mt-[4px] w-[100%]">
                        <Text
                          className="font-bold text-gray_900 w-[auto]"
                          variant="body2"
                        >
                          $15000 - $350000
                        </Text>
                        <Img
                          src="images/img_sort.svg"
                          className="sort"
                          alt="sort One"
                        />
                      </Row>
                    </Column>
                  </List>
                </Row>
                <Button
                  className="flex lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center lg:w-[49px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  shape="icbRoundedBorder16"
                  size="mdIcn"
                  variant="icbFillGray900"
                >
                  <Img
                    src="images/img_search_70X70.svg"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="search One"
                  />
                </Button>
              </Row>
            </Column>
          </Column>
          <Img
            src="images/img_image_503X591.png"
            className="absolute bottom-[0] lg:h-[358px] xl:h-[448px] 2xl:h-[504px] 3xl:h-[604px] right-[0] w-[41%]"
            alt="image"
          />
        </Stack>
        <Row className="items-center lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[83%]">
          <Column className="bg-red_100 lg:p-[32px] xl:p-[40px] 2xl:p-[46px] 3xl:p-[55px] rounded-radius20 w-[49%]">
            <Text
              className="leading-[140.00%] ml-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-gray_900 tracking-ls1 w-[70%]"
              as="h3"
              variant="h3"
            >
              Simple & easy way to find your dream Appointment
            </Text>
            <Text
              className="font-normal leading-[180.00%] ml-[4px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-gray_900 w-[81%]"
              variant="body2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </Text>
            <Button
              className="font-semibold ml-[4px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillGray900"
            >
              Get Started
            </Button>
          </Column>
          <List
            className="gap-[0] min-h-[auto] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[49%]"
            orientation="vertical"
          >
            <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
              <Column className="bg-deep_orange_50 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius20 w-[48%]">
                <Img
                  src="images/img_refresh_30X30.svg"
                  className="refresh"
                  alt="refresh"
                />
                <Text className="process" as="h4" variant="h4">
                  Search  your location
                </Text>
              </Column>
              <Column className="bg-deep_orange_50 lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 w-[48%]">
                <Img
                  src="images/img_instagram.svg"
                  className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] ml-[3px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  alt="instagram"
                />
                <Text className="process1" as="h4" variant="h4">
                  Visit  Appointment
                </Text>
              </Column>
            </Row>
            <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
              <Column className="bg-deep_orange_50 lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius20 w-[48%]">
                <Img
                  src="images/img_camera_30X30.svg"
                  className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mt-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  alt="camera"
                />
                <Text
                  className="lg:mb-[22px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Get your  dream house
                </Text>
              </Column>
              <Column className="bg-deep_orange_50 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius20 w-[48%]">
                <Img
                  src="images/img_instagram_30X30.svg"
                  className="refresh"
                  alt="instagram One"
                />
                <Text className="process" as="h4" variant="h4">
                  Enjoy your  Appointment
                </Text>
              </Column>
            </Row>
          </List>
        </Row>
        <Row className="bg-gray_50 items-start justify-between lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:p-[35px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
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
                alt="search Two"
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
        <Column className="justify-start 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[83%]">
          <Row className="items-start justify-between w-[100%]">
            <Text
              className="text-gray_900 tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Featured Properties
            </Text>
            <Row className="items-start justify-between mt-[1px] w-[10%]">
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
          <Row className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[65%]">
            <Text className="rowduplexhouse" variant="body2">
              Resident Property
            </Text>
            <Text className="mb-[1px] CommercialProp" variant="body2">
              Commercial Property
            </Text>
            <Text className="mb-[1px] CommercialProp" variant="body2">
              Industrial Property
            </Text>
            <Text className="CommercialProp" variant="body2">
              Agriculture Property
            </Text>
          </Row>
          <Grid className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[100%]">
            <Column className="grideye">
              <Img
                src="images/img_image_260X384.png"
                className="image_One"
                alt="image One"
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
                        src="images/img_ticket_20X20.svg"
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
                        src="images/img_icon_20X20.svg"
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
                alt="image Two"
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
                alt="image Three"
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
            <Column className="grideye">
              <Img
                src="images/img_image_3.png"
                className="image_One"
                alt="image Four"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                <Row className="items-end w-[100%]">
                  <Img
                    src="images/img_eye.svg"
                    className="arrowright"
                    alt="eye Three"
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
                        alt="bookmark Three"
                      />
                      <Text className="test_3BedRoom" variant="body3">
                        3 Bed Room
                      </Text>
                    </Row>
                    <Row className="items-center w-[33%]">
                      <Img
                        src="images/img_ticket.svg"
                        className="bookmark"
                        alt="ticket Three"
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
                        alt="icon Three"
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
                      name="FamilyThree"
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
                src="images/img_image_4.png"
                className="image_One"
                alt="image Five"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                <Row className="items-end w-[100%]">
                  <Img
                    src="images/img_eye.svg"
                    className="arrowright"
                    alt="eye Four"
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
                        alt="bookmark Four"
                      />
                      <Text className="test_3BedRoom" variant="body3">
                        3 Bed Room
                      </Text>
                    </Row>
                    <Row className="items-center w-[33%]">
                      <Img
                        src="images/img_ticket.svg"
                        className="bookmark"
                        alt="ticket Four"
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
                        alt="icon Four"
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
                      name="FamilyFour"
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
                src="images/img_image_5.png"
                className="image_One"
                alt="image Six"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                <Row className="items-end w-[100%]">
                  <Img
                    src="images/img_eye.svg"
                    className="arrowright"
                    alt="eye Five"
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
                        alt="bookmark Five"
                      />
                      <Text className="test_3BedRoom" variant="body3">
                        3 Bed Room
                      </Text>
                    </Row>
                    <Row className="items-center w-[33%]">
                      <Img
                        src="images/img_ticket.svg"
                        className="bookmark"
                        alt="ticket Five"
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
                        alt="icon Five"
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
                      name="FamilyFive"
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
          </Grid>
        </Column>
        <Column className="bg-gray_51 items-center justify-end lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] xl:p-[106px] 2xl:p-[120px] 3xl:p-[144px] lg:p-[85px] w-[100%]">
          <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius10 w-[100%]">
            <Column className="rounded-radius10 w-[38%]">
              <Text
                className="leading-[140.00%] ml-[1px] text-gray_900 tracking-ls1 w-[76%]"
                as="h3"
                variant="h3"
              >
                Simple & easy way to find your dream Appointment
              </Text>
              <Text className="description2" variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed.
              </Text>
              <Button
                className="font-semibold ml-[1px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[30%]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillGray900"
              >
                Get Started
              </Button>
            </Column>
            <Row className="items-center justify-between rounded-radius10 w-[49%]">
              <Column className="items-center w-[48%]">
                <Img
                  src="images/img_rectangle18.png"
                  className="lg:h-[233px] xl:h-[291px] 2xl:h-[328px] 3xl:h-[393px] rounded-radius10 w-[100%]"
                  alt="RectangleEighteen"
                />
                <Img
                  src="images/img_rectangle21.png"
                  className="lg:h-[156px] xl:h-[194px] 2xl:h-[219px] 3xl:h-[262px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius10 w-[100%]"
                  alt="RectangleTwentyOne"
                />
              </Column>
              <Column className="items-center w-[48%]">
                <Img
                  src="images/img_rectangle19.png"
                  className="lg:h-[156px] xl:h-[194px] 2xl:h-[219px] 3xl:h-[262px] rounded-radius10 w-[100%]"
                  alt="RectangleNineteen"
                />
                <Img
                  src="images/img_rectangle20.png"
                  className="lg:h-[233px] xl:h-[291px] 2xl:h-[328px] 3xl:h-[393px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius10 w-[100%]"
                  alt="RectangleTwenty"
                />
              </Column>
            </Row>
          </Row>
          <Row className="items-start justify-between lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] w-[100%]">
            <Stack className="lg:h-[459px] xl:h-[574px] 2xl:h-[646px] 3xl:h-[775px] rounded-radius10 w-[49%]">
              <div className="absolute bg-orange_A700 bottom-[0] lg:h-[424px] xl:h-[530px] 2xl:h-[596px] 3xl:h-[715px] left-[0] rounded-radius10 w-[88%]"></div>
              <Img
                src="images/img_rectangle20_589X537.png"
                className="RectangleTwenty_One"
                alt="RectangleTwenty One"
              />
            </Stack>
            <Column className="justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[37%]">
              <Text
                className="leading-[140.00%] ml-[1px] text-gray_900 tracking-ls1 w-[74%]"
                as="h3"
                variant="h3"
              >
                Best rated host on popular rental sites
              </Text>
              <Text className="description2" variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. In a free hour, when our power of choice is
                untrammelled.
              </Text>
              <Column className="justify-start ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] py-[4px] w-[63%]">
                <Row className="items-start w-[75%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="arrowright"
                    alt="checkmark"
                  />
                  <Text className="mt-[3px] point" variant="body2">
                    Find excellent deals
                  </Text>
                </Row>
                <Row className="items-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="arrowright"
                    alt="checkmark One"
                  />
                  <Text className="point2" variant="body2">
                    Friendly host & Fast support
                  </Text>
                </Row>
                <Row className="items-end lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[88%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="arrowright"
                    alt="checkmark Two"
                  />
                  <Text className="point2" variant="body2">
                    Secure payment system
                  </Text>
                </Row>
              </Column>
              <Button
                className="font-semibold ml-[1px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[30%]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillGray900"
              >
                Learn more
              </Button>
            </Column>
          </Row>
        </Column>
        <Row className="items-center justify-center lg:mt-[130px] xl:mt-[162px] 2xl:mt-[183px] 3xl:mt-[219px] lg:pr-[18px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] w-[70%]">
          <Img
            src="images/img_rectangle5591.png"
            className="lg:h-[286px] xl:h-[358px] 2xl:h-[403px] 3xl:h-[483px] rounded-radius8 w-[39%]"
            alt="Rectangle5591"
          />
          <Column className="lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] w-[53%]">
            <Row className="items-start w-[79%]">
              <Column className="justify-start mt-[2px] w-[83%]">
                <Text
                  className="text-gray_900 tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Taylor Wilson
                </Text>
                <Text className="ProductManager1" variant="body2">
                  Product Manager - Static Mania
                </Text>
              </Column>
              <Img
                src="images/img_shape.svg"
                className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[17%]"
                alt="shape"
              />
            </Row>
            <Text
              className="font-semibold leading-[165.00%] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] text-gray_700 w-[100%]"
              as="h5"
              variant="h5"
            >
              Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis
              proin sodales. Turpis viverra diam porttitor mattis morbi ac amet.
              Euismod commodo. We get you customer relationships that last.{" "}
            </Text>
            <Row className="items-center lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[41%]">
              <Row className="items-center w-[52%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="arrowright"
                  alt="arrowleft"
                />
                <Text className="ButtonAnchor1" variant="body2">
                  Previews
                </Text>
              </Row>
              <Row className="items-start justify-between lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[34%]">
                <Text
                  className="font-bold mt-[4px] text-orange_A700 w-[auto]"
                  variant="body2"
                >
                  Next
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="arrowright"
                  alt="arrowright One"
                />
              </Row>
            </Row>
          </Column>
        </Row>
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
                  alt="arrowright Two"
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
                  alt="image Thirteen"
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
                    alt="arrowright Three"
                  />
                </Row>
              </Column>
              <Column className="justify-start w-[100%]">
                <Img
                  src="images/img_image_6.png"
                  className="image_Thirteen"
                  alt="image Fourteen"
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
                    alt="arrowright Four"
                  />
                </Row>
              </Column>
              <Column className="justify-start w-[100%]">
                <Img
                  src="images/img_image_7.png"
                  className="image_Thirteen"
                  alt="image Fifteen"
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
                    alt="arrowright Five"
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

export default LandingPageOnePage;
