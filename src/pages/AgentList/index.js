import React from "react";

import {
  Column,
  Text,
  Row,
  Input,
  Img,
  SelectBox,
  Button,
  Grid,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import Footer from "components/Footer/Footer";

const AgentListPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="bg-gray_51 justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[51px] xl:p-[64px] 2xl:p-[72px] 3xl:p-[86px] w-[100%]">
          <Column className="justify-start lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] w-[55%]">
            <Text
              className="text-gray_900 tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Some Nearby Good Agents
            </Text>
            <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="placeholder:text-gray_600 TextFieldLa"
                wrapClassName="flex w-[58%]"
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
                className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[19%]"
                placeholderClassName="text-gray_600"
                name="DropdownLarg"
                placeholder="Review"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_16X16.svg"
                    className="lg:w-[17px] lg:h-[18px] lg:mr-[11px] xl:w-[21px] xl:h-[22px] xl:mr-[14px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[16px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[19px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Button
                className="flex items-center justify-center text-center w-[18%]"
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
          </Column>
          <Grid className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-4 lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[93%]">
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614.png"
                className="Rectangle5614"
                alt="Rectangle5614"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
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
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_282X282.png"
                className="Rectangle5614"
                alt="Rectangle5614 One"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One One"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two One"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three One"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four One"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_1.png"
                className="Rectangle5614"
                alt="Rectangle5614 Two"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One Two"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two Two"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three Two"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four Two"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_2.png"
                className="Rectangle5614"
                alt="Rectangle5614 Three"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One Three"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two Three"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three Three"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four Three"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_3.png"
                className="Rectangle5614"
                alt="Rectangle5614 Four"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Four"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One Four"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two Four"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three Four"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four Four"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_4.png"
                className="Rectangle5614"
                alt="Rectangle5614 Five"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Five"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One Five"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two Five"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three Five"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four Five"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_5.png"
                className="Rectangle5614"
                alt="Rectangle5614 Six"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Six"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One Six"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two Six"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three Six"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four Six"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_6.png"
                className="Rectangle5614"
                alt="Rectangle5614 Seven"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Seven"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One Seven"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two Seven"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three Seven"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four Seven"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_7.png"
                className="Rectangle5614"
                alt="Rectangle5614 Eight"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Eight"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One Eight"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two Eight"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three Eight"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four Eight"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_8.png"
                className="Rectangle5614"
                alt="Rectangle5614 Nine"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Nine"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One Nine"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two Nine"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three Nine"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four Nine"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_9.png"
                className="Rectangle5614"
                alt="Rectangle5614 Ten"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Ten"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One Ten"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two Ten"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three Ten"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four Ten"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:pb-[14px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_rectangle5614_10.png"
                className="Rectangle5614"
                alt="Rectangle5614 Eleven"
              />
              <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                <Text className="KausarPial_One" variant="body1">
                  Bruno Fernandes
                </Text>
                <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Eleven"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star One Eleven"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Two Eleven"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="star"
                      alt="star Three Eleven"
                    />
                    <Img
                      src="images/img_star_16X16.svg"
                      className="star"
                      alt="star Four Eleven"
                    />
                  </Row>
                  <Text className="reveiw1" variant="body3">
                    4.5 review
                  </Text>
                </Row>
                <Button
                  className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineBluegray100_1"
                >
                  View Profile
                </Button>
              </Column>
            </Column>
          </Grid>
          <Row className="items-center justify-between lg:mb-[33px] xl:mb-[41px] 2xl:mb-[47px] 3xl:mb-[56px] lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[92%]">
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
              variant="OutlineBluegray100_1"
            >
              <div className="bg-transparent font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                Next Page
              </div>
            </Button>
          </Row>
        </Column>
        <Footer className="bg-white_A700 w-[100%]" />
      </Column>
    </>
  );
};

export default AgentListPage;
