import React from "react";

import {
  Column,
  Text,
  Row,
  Input,
  Img,
  SelectBox,
  Grid,
  Button,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import Footer1 from "components/Footer/Footer1";

const BlogPagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gray_51 items-center justify-start xl:pb-[110px] 2xl:pb-[124px] 3xl:pb-[148px] lg:pb-[88px] w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[83%]">
            <Column className="justify-start w-[62%]">
              <Text
                className="text-gray_900 tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                Real Estate News & Blogs
              </Text>
              <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="placeholder:text-gray_600 TextFieldLa"
                  wrapClassName="flex w-[56%]"
                  name="TextFieldLa"
                  placeholder="Enter your address"
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer mr-[2px] lg:w-[17px] lg:h-[18px] lg:ml-[24px] xl:w-[21px] xl:h-[22px] xl:ml-[31px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[35px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[42px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#6e6e6e"
                      />
                    ) : (
                      <Img
                        src="images/img_search_1.svg"
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
                  className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[21%]"
                  placeholderClassName="text-gray_600"
                  name="DropdownLarg"
                  placeholder="Category"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_16X16.svg"
                      className="lg:w-[17px] lg:h-[18px] lg:mr-[11px] xl:w-[21px] xl:h-[22px] xl:mr-[14px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[16px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[19px]"
                      alt="arrow_down"
                    />
                  }
                  size="lg"
                ></SelectBox>
                <SelectBox
                  className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[19%]"
                  placeholderClassName="text-gray_600"
                  name="DropdownLarg One"
                  placeholder="Popular"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_16X16.svg"
                      className="lg:w-[17px] lg:h-[18px] lg:mr-[11px] xl:w-[21px] xl:h-[22px] xl:mr-[14px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[16px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[19px]"
                      alt="arrow_down"
                    />
                  }
                  size="lg"
                ></SelectBox>
              </Row>
            </Column>
            <Grid className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
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
              <Column className="items-center justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5617.png"
                  className="Rectangle5617"
                  alt="Rectangle5617 Three"
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
                      alt="arrowright Three"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5617.png"
                  className="Rectangle5617"
                  alt="Rectangle5617 Four"
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
                      alt="arrowright Four"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5617.png"
                  className="Rectangle5617"
                  alt="Rectangle5617 Five"
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
                      alt="arrowright Five"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5617.png"
                  className="Rectangle5617"
                  alt="Rectangle5617 Six"
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
                      alt="arrowright Six"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5617.png"
                  className="Rectangle5617"
                  alt="Rectangle5617 Seven"
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
                      alt="arrowright Seven"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5617.png"
                  className="Rectangle5617"
                  alt="Rectangle5617 Eight"
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
                      alt="arrowright Eight"
                    />
                  </Row>
                </Column>
              </Column>
            </Grid>
            <Row className="items-center justify-between lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
              <Row className="items-center justify-evenly w-[21%]">
                <Button
                  className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[17%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineGray600"
                >
                  1
                </Button>
                <Button
                  className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineGray52"
                >
                  2
                </Button>
                <Button
                  className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineGray52"
                >
                  3
                </Button>
                <Button
                  className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineGray52"
                >
                  4
                </Button>
                <Button
                  className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineGray52"
                >
                  5
                </Button>
              </Row>
              <Button
                className="flex items-center justify-center text-center w-[12%]"
                rightIcon={
                  <Img
                    src="images/img_arrowright_16X16.svg"
                    className="ml-[4px] text-center lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                    alt="arrow_right"
                  />
                }
                shape="RoundedBorder10"
                size="lg"
                variant="OutlineGray600"
              >
                <div className="bg-transparent font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Next Page
                </div>
              </Button>
            </Row>
          </Column>
        </Column>
        <Footer1 className="bg-white_A700 w-[100%]" />
      </Column>
    </>
  );
};

export default BlogPagePage;
