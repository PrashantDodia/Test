import React from "react";

import {
  Column,
  Text,
  Row,
  Input,
  Img,
  SelectBox,
  Button,
  Stack,
  Radio,
  Grid,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import Footer from "components/Footer/Footer";

const ListingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="bg-gray_51 justify-start lg:p-[51px] xl:p-[64px] 2xl:p-[72px] 3xl:p-[86px] w-[100%]">
          <Column className="justify-start lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] w-[92%]">
            <Text
              className="text-gray_900 tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Find Property
            </Text>
            <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-semibold p-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                wrapClassName="flex w-[35%]"
                name="TextFieldLa"
                placeholder="Enter your address"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer mr-[2px] lg:w-[17px] lg:h-[18px] lg:ml-[24px] xl:w-[21px] xl:h-[22px] xl:ml-[31px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[35px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[42px] my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#626262"
                    />
                  ) : (
                    <Img
                      src="images/img_search_24X24.svg"
                      className="cursor-pointer mr-[2px] lg:w-[17px] lg:h-[18px] lg:ml-[24px] xl:w-[21px] xl:h-[22px] xl:ml-[31px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[35px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[42px] my-[auto]"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder10"
                size="mdSrc"
                variant="srcOutlineBluegray100"
              ></Input>
              <SelectBox
                className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[9%]"
                placeholderClassName="text-gray_700"
                name="DropdownLarg"
                placeholder="Buy"
                isSearchable={false}
                isMulti={false}
                size="lg"
              ></SelectBox>
              <SelectBox
                className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[18%]"
                placeholderClassName="text-gray_700"
                name="price"
                placeholder="$15000 - $18000"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_24X24.svg"
                    className="lg:w-[17px] lg:h-[18px] lg:mr-[11px] xl:w-[21px] xl:h-[22px] xl:mr-[14px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[16px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[19px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[11%]"
                placeholderClassName="text-gray_700"
                name="DropdownLarg One"
                placeholder="Bed - 3"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_24X24.svg"
                    className="lg:w-[17px] lg:h-[18px] lg:mr-[11px] xl:w-[21px] xl:h-[22px] xl:mr-[14px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[16px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[19px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Button
                className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[10%]"
                shape="RoundedBorder10"
                size="xl"
                variant="OutlineBluegray100"
              >
                More
              </Button>
              <Button
                className="flex items-center justify-center text-center w-[11%]"
                rightIcon={
                  <Img
                    src="images/img_search_70X70.svg"
                    className="text-center lg:w-[14px] lg:h-[15px] lg:ml-[7px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px]"
                    alt="search"
                  />
                }
                shape="RoundedBorder10"
                size="xl"
                variant="FillGray900"
              >
                <div className="bg-transparent font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Search
                </div>
              </Button>
            </Row>
            <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[77%]">
              <Row className="border border-bluegray_100 border-solid items-center justify-end 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[16%]">
                <Row className="items-center w-[76%]">
                  <Text className="Active" variant="body4">
                    Bathrooms
                  </Text>
                  <Text
                    className="font-semibold mb-[1px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    2+
                  </Text>
                </Row>
                <Img
                  src="images/img_close_16X16.svg"
                  className="close3"
                  alt="close"
                />
              </Row>
              <Row className="border border-bluegray_100 border-solid items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[27%]">
                <Row className="items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[84%]">
                  <Text className="Active" variant="body4">
                    Square Feet
                  </Text>
                  <Text
                    className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    750 - 2000 sq. ft
                  </Text>
                </Row>
                <Img
                  src="images/img_close_16X16.svg"
                  className="mr-[3px] my-[3px] close3"
                  alt="close One"
                />
              </Row>
              <Row className="border border-bluegray_100 border-solid items-center justify-end 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[17%]">
                <Row className="items-center w-[77%]">
                  <Text
                    className="font-semibold mb-[1px] text-gray_700 w-[auto]"
                    variant="body4"
                  >
                    Year Built
                  </Text>
                  <Text
                    className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] reveiw1"
                    variant="body4"
                  >
                    5 - 15
                  </Text>
                </Row>
                <Img
                  src="images/img_close_16X16.svg"
                  className="close3"
                  alt="close Two"
                />
              </Row>
              <Button
                className="2xl:ml-[10px] 3xl:ml-[12px] flex items-center justify-center lg:ml-[7px] text-center w-[18%] xl:ml-[8px]"
                rightIcon={
                  <Img
                    src="images/img_close_16X16.svg"
                    className="text-center lg:w-[11px] lg:h-[12px] lg:ml-[7px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="OutlineBluegray100_1"
              >
                <div className="bg-transparent font-semibold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                  For Sale By Agent
                </div>
              </Button>
              <Button
                className="2xl:ml-[10px] 3xl:ml-[12px] flex items-center justify-center lg:ml-[7px] text-center w-[19%] xl:ml-[8px]"
                rightIcon={
                  <Img
                    src="images/img_close_16X16.svg"
                    className="text-center lg:w-[11px] lg:h-[12px] lg:ml-[7px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder10"
                size="sm"
                variant="OutlineBluegray100_1"
              >
                <div className="bg-transparent font-semibold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                  New Construction
                </div>
              </Button>
            </Row>
          </Column>
          <Row className="items-start lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[93%]">
            <Column
              className="bg-cover bg-repeat justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius10 w-[32%]"
              style={{
                backgroundImage: "url('images/img_group100000141.png')",
              }}
            >
              <Img
                src="images/img_location_43X33.svg"
                className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:ml-[123px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] lg:mr-[85px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[10%]"
                alt="location"
              />
              <Stack className="lg:h-[261px] xl:h-[327px] 2xl:h-[368px] 3xl:h-[441px] lg:mb-[17px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
                <Column className="absolute justify-start right-[0] w-[93%]">
                  <Row className="items-start justify-end ml-[auto] w-[96%]">
                    <Img
                      src="images/img_location_43X33.svg"
                      className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:mb-[21px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] w-[12%]"
                      alt="location One"
                    />
                    <Img
                      src="images/img_location_43X33.svg"
                      className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:ml-[155px] xl:ml-[194px] 2xl:ml-[219px] 3xl:ml-[262px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[12%]"
                      alt="location Two"
                    />
                  </Row>
                  <Row className="items-start lg:mt-[169px] xl:mt-[212px] 2xl:mt-[239px] 3xl:mt-[286px] w-[92%]">
                    <Img
                      src="images/img_location_43X33.svg"
                      className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] w-[12%]"
                      alt="location Three"
                    />
                    <Img
                      src="images/img_location_43X33.svg"
                      className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:ml-[147px] xl:ml-[184px] 2xl:ml-[207px] 3xl:ml-[248px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[12%]"
                      alt="location Four"
                    />
                  </Row>
                </Column>
                <Column className="absolute bg-white_A700 border border-bluegray_100 border-solid justify-start left-[0] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 top-[16%] w-[93%]">
                  <Row className="items-end w-[100%]">
                    <Img
                      src="images/img_eye_24X24.svg"
                      className="arrowright"
                      alt="eye"
                    />
                    <Text className="location8" variant="body4">
                      2861 62nd Ave, Oakland, CA 94605
                    </Text>
                  </Row>
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[91%]">
                    <Row className="items-center justify-between w-[99%]">
                      <Row className="items-end mb-[1px] w-[47%]">
                        <Img
                          src="images/img_bookmark.svg"
                          className="bookmark1"
                          alt="bookmark"
                        />
                        <Text className="test_3BedRoom1" variant="body4">
                          3 Bed Room
                        </Text>
                      </Row>
                      <Row className="items-end w-[31%]">
                        <Img
                          src="images/img_ticket_20X20.svg"
                          className="bookmark1"
                          alt="ticket"
                        />
                        <Text className="test_3BedRoom1" variant="body4">
                          1 Bath
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                      <Row className="items-end w-[41%]">
                        <Img
                          src="images/img_icon_20X20.svg"
                          className="mb-[4px] bookmark"
                          alt="icon"
                        />
                        <Text className="test_1032sqft1" variant="body4">
                          1,032 sqft
                        </Text>
                      </Row>
                      <Radio
                        value="Family"
                        className="font-semibold xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_700"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        checked={false}
                        name="Family"
                        label="Family"
                        size="md"
                      ></Radio>
                    </Row>
                  </Column>
                  <Text className="info" as="h5" variant="h5">
                    $649,900
                  </Text>
                </Column>
              </Stack>
            </Column>
            <Grid className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-2 lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[66%]">
              <Column className="hover:cursor-pointer hover:shadow-bs1 hover:w-[100%] listing">
                <Img
                  src="images/img_image_260X384.png"
                  className="image_One"
                  alt="image"
                />
                <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                  <Row className="items-end w-[100%]">
                    <Img
                      src="images/img_eye_24X24.svg"
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
                          src="images/img_ticket_20X20.svg"
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
                          src="images/img_icon_20X20.svg"
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
              <Column className="hover:cursor-pointer hover:shadow-bs1 hover:w-[100%] listing">
                <Img
                  src="images/img_image_8.png"
                  className="image_One"
                  alt="image One"
                />
                <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                  <Row className="items-end w-[100%]">
                    <Img
                      src="images/img_eye_24X24.svg"
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
                          src="images/img_ticket_20X20.svg"
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
                          src="images/img_icon_20X20.svg"
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
                  <Row className="items-center ml-[2px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                    <Button
                      className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
                      shape="RoundedBorder10"
                      size="lg"
                      variant="FillGray900"
                    >
                      View Details
                    </Button>
                    <Text className="rowview_details_one" as="h5" variant="h5">
                      $649,900
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="hover:cursor-pointer hover:shadow-bs1 hover:w-[100%] listing">
                <Img
                  src="images/img_image_9.png"
                  className="image_One"
                  alt="image Two"
                />
                <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                  <Row className="items-end w-[100%]">
                    <Img
                      src="images/img_eye_24X24.svg"
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
                          src="images/img_ticket_20X20.svg"
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
                          src="images/img_icon_20X20.svg"
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
                  <Row className="items-center justify-between ml-[2px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                    <Button
                      className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
                      shape="RoundedBorder10"
                      size="lg"
                      variant="FillGray900"
                    >
                      View Details
                    </Button>
                    <Text className="rowview_details_two" as="h5" variant="h5">
                      $649,900
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="hover:cursor-pointer hover:shadow-bs1 hover:w-[100%] listing">
                <Img
                  src="images/img_image_10.png"
                  className="image_One"
                  alt="image Three"
                />
                <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                  <Row className="items-end w-[100%]">
                    <Img
                      src="images/img_eye_24X24.svg"
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
                          src="images/img_ticket_20X20.svg"
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
                          src="images/img_icon_20X20.svg"
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
                  <Row className="items-center justify-between ml-[2px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                    <Button
                      className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
                      shape="RoundedBorder10"
                      size="lg"
                      variant="FillGray700"
                    >
                      View Details
                    </Button>
                    <Text className="rowview_details_two" as="h5" variant="h5">
                      $649,900
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="hover:cursor-pointer hover:shadow-bs1 hover:w-[100%] listing">
                <Img
                  src="images/img_image_11.png"
                  className="image_One"
                  alt="image Four"
                />
                <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                  <Row className="items-end w-[100%]">
                    <Img
                      src="images/img_eye_24X24.svg"
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
                          src="images/img_ticket_20X20.svg"
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
                          src="images/img_icon_20X20.svg"
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
              <Column className="hover:cursor-pointer hover:shadow-bs1 hover:w-[100%] listing">
                <Img
                  src="images/img_image_12.png"
                  className="image_One"
                  alt="image Five"
                />
                <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                  <Row className="items-end w-[100%]">
                    <Img
                      src="images/img_eye_24X24.svg"
                      className="arrowright"
                      alt="eye Six"
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
                          alt="bookmark Six"
                        />
                        <Text className="test_3BedRoom" variant="body3">
                          3 Bed Room
                        </Text>
                      </Row>
                      <Row className="items-center w-[33%]">
                        <Img
                          src="images/img_ticket_20X20.svg"
                          className="bookmark"
                          alt="ticket Six"
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
                          alt="icon Six"
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
                        name="FamilySix"
                        label="Family"
                      ></Radio>
                    </Row>
                  </Column>
                  <Row className="items-center ml-[2px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                    <Button
                      className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
                      shape="RoundedBorder10"
                      size="lg"
                      variant="FillGray900"
                    >
                      View Details
                    </Button>
                    <Text className="rowview_details_one" as="h5" variant="h5">
                      $649,900
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="hover:cursor-pointer hover:shadow-bs1 hover:w-[100%] listing">
                <Img
                  src="images/img_image_13.png"
                  className="image_One"
                  alt="image Six"
                />
                <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                  <Row className="items-end w-[100%]">
                    <Img
                      src="images/img_eye_24X24.svg"
                      className="arrowright"
                      alt="eye Seven"
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
                          alt="bookmark Seven"
                        />
                        <Text className="test_3BedRoom" variant="body3">
                          3 Bed Room
                        </Text>
                      </Row>
                      <Row className="items-center w-[33%]">
                        <Img
                          src="images/img_ticket_20X20.svg"
                          className="bookmark"
                          alt="ticket Seven"
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
                          alt="icon Seven"
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
                        name="FamilySeven"
                        label="Family"
                      ></Radio>
                    </Row>
                  </Column>
                  <Row className="items-center justify-between ml-[2px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                    <Button
                      className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
                      shape="RoundedBorder10"
                      size="lg"
                      variant="FillGray900"
                    >
                      View Details
                    </Button>
                    <Text className="rowview_details_two" as="h5" variant="h5">
                      $649,900
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="hover:cursor-pointer hover:shadow-bs1 hover:w-[100%] listing">
                <Img
                  src="images/img_image_14.png"
                  className="image_One"
                  alt="image Seven"
                />
                <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[3px] w-[77%]">
                  <Row className="items-end w-[100%]">
                    <Img
                      src="images/img_eye_24X24.svg"
                      className="arrowright"
                      alt="eye Eight"
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
                          alt="bookmark Eight"
                        />
                        <Text className="test_3BedRoom" variant="body3">
                          3 Bed Room
                        </Text>
                      </Row>
                      <Row className="items-center w-[33%]">
                        <Img
                          src="images/img_ticket_20X20.svg"
                          className="bookmark"
                          alt="ticket Eight"
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
                          alt="icon Eight"
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
                        name="FamilyEight"
                        label="Family"
                      ></Radio>
                    </Row>
                  </Column>
                  <Row className="items-center justify-between ml-[2px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                    <Button
                      className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
                      shape="RoundedBorder10"
                      size="lg"
                      variant="FillGray900"
                    >
                      View Details
                    </Button>
                    <Text className="rowview_details_two" as="h5" variant="h5">
                      $649,900
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Grid>
          </Row>
          <Row className="items-center justify-end lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[auto] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[61%]">
            <Row className="items-center justify-evenly w-[31%]">
              <Button
                className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[17%]"
                shape="RoundedBorder10"
                size="lg"
                variant="OutlineGray700"
              >
                1
              </Button>
              <Button
                className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                shape="RoundedBorder10"
                size="lg"
                variant="OutlineBluegray101"
              >
                2
              </Button>
              <Button
                className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                shape="RoundedBorder10"
                size="lg"
                variant="OutlineBluegray101"
              >
                3
              </Button>
              <Button
                className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                shape="RoundedBorder10"
                size="lg"
                variant="OutlineBluegray101"
              >
                4
              </Button>
              <Button
                className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                shape="RoundedBorder10"
                size="lg"
                variant="OutlineBluegray101"
              >
                5
              </Button>
            </Row>
            <Button
              className="2xl:ml-[405px] 3xl:ml-[486px] flex items-center justify-center lg:ml-[288px] text-center w-[18%] xl:ml-[360px]"
              rightIcon={
                <Img
                  src="images/img_arrowright_16X16.svg"
                  className="ml-[4px] text-center lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                  alt="arrow_right"
                />
              }
              shape="RoundedBorder10"
              size="lg"
              variant="OutlineBluegray101"
            >
              <div className="bg-transparent font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                Next Page
              </div>
            </Button>
          </Row>
        </Column>
        <Footer className="bg-white_A700 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]" />
      </Column>
    </>
  );
};

export default ListingPage;
