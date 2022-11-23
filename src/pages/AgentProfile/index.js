import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Button,
  Grid,
  Text,
  Radio,
  Line,
  List,
  SelectBox,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const AgentProfilePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Stack className="lg:h-[2873px] xl:h-[3594px] 2xl:h-[4043px] 3xl:h-[4851px] w-[100%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Img
              src="images/img_coverimage.png"
              className="lg:h-[178px] xl:h-[223px] 2xl:h-[251px] 3xl:h-[301px] w-[100%]"
              alt="CoverImage"
            />
            <Column className="bg-gray_51 items-center justify-end lg:p-[47px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] w-[100%]">
              <Column className="justify-start 2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[77px] xl:mt-[96px] w-[92%]">
                <Row className="items-center w-[41%]">
                  <Button
                    className="font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[24%]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillGray900"
                  >
                    For rent
                  </Button>
                  <Button
                    className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[24%]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="OutlineGray600"
                  >
                    For sale
                  </Button>
                  <Button
                    className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="OutlineGray600"
                  >
                    About
                  </Button>
                  <Button
                    className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[23%]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="OutlineGray600"
                  >
                    Review
                  </Button>
                </Row>
                <Grid className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
                  <Column className="grideye">
                    <Img
                      src="images/img_image_260X384.png"
                      className="image_One"
                      alt="image"
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
                      alt="image One"
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
                      alt="image Two"
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
                      src="images/img_image_2.png"
                      className="image_One"
                      alt="image Three"
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
                      src="images/img_image_260X384.png"
                      className="image_One"
                      alt="image Four"
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
                      src="images/img_image_1.png"
                      className="image_One"
                      alt="image Five"
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
              <Row className="items-center justify-between lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[92%]">
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
                  variant="OutlineBluegray101"
                >
                  <div className="bg-transparent font-semibold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Next Page
                  </div>
                </Button>
              </Row>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 w-[92%]">
                <Column className="lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[60%]">
                  <Row className="items-start w-[68%]">
                    <Img
                      src="images/img_rectangle5599.png"
                      className="lg:h-[130px] xl:h-[162px] 2xl:h-[183px] 3xl:h-[219px] rounded-radius10 lg:w-[129px] xl:w-[161px] 2xl:w-[182px] 3xl:w-[218px]"
                      alt="Rectangle5616"
                    />
                    <Column className="justify-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] pb-[4px] w-[54%]">
                      <Text
                        className="rowview_details_two"
                        as="h5"
                        variant="h5"
                      >
                        Bruno Fernandes
                      </Text>
                      <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[77%]">
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
                        <Text className="reveiw" variant="body3">
                          4.5 review
                        </Text>
                      </Row>
                      <Row className="items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[69%]">
                        <Img
                          src="images/img_call_24X24.svg"
                          className="arrowright"
                          alt="call"
                        />
                        <Text className="phone" variant="body2">
                          (302) 555-0107
                        </Text>
                      </Row>
                      <Row className="items-end 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                        <Img
                          src="images/img_mail_1.svg"
                          className="arrowright"
                          alt="mail"
                        />
                        <Text className="mail2">staticmania@gmail.com</Text>
                      </Row>
                    </Column>
                  </Row>
                  <Text
                    className="font-normal leading-[180.00%] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic text-gray_600 w-[85%]"
                    variant="body2"
                  >
                    A slider is great way to display a slideshow featuring
                    images or videos, usually on your homepage.
                    <br />
                    Adding sliders to your site is no longer difficult. You
                    don’t have to know coding anymore. Just use a slider widget
                    and it will automatically insert the slider on your web
                    page.
                    <br />
                    One of the best ways to add beautiful sliders with excellent
                    responsiveness and advanced options.{" "}
                  </Text>
                  <Button
                    className="font-semibold lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[17%]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillGray900"
                  >
                    Contact
                  </Button>
                </Column>
                <Line className="bg-bluegray_100 lg:h-[364px] xl:h-[455px] 2xl:h-[512px] 3xl:h-[614px] w-[1px]" />
                <Column className="lg:ml-[34px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[33%]">
                  <Column className="justify-start w-[48%]">
                    <Text className="KausarPial_One" variant="body1">
                      Experiences
                    </Text>
                    <Text
                      className="font-semibold xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-gray_600 w-[auto]"
                      variant="body2"
                    >
                      15+ years experience
                    </Text>
                  </Column>
                  <Column className="justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                    <Text className="KausarPial_One" variant="body1">
                      Property Types
                    </Text>
                    <Text
                      className="font-semibold xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-gray_600 w-[auto]"
                      variant="body2"
                    >
                      Private House, Villa, Townhouse, Apartment
                    </Text>
                  </Column>
                  <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[62%]">
                    <Text className="KausarPial_One" variant="body1">
                      Area
                    </Text>
                    <Text
                      className="font-semibold lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_600 w-[auto]"
                      variant="body2"
                    >
                      <span className="text-gray_900 font-manrope lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                        California
                      </span>
                      <span className="text-gray_600 font-manrope lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                        ,{" "}
                      </span>
                      <span className="text-gray_600 font-manrope lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                        San Jose
                      </span>
                      <span className="text-gray_600 font-manrope lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                        , Miami
                      </span>
                    </Text>
                  </Column>
                  <Column className="justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[56%]">
                    <Text className="KausarPial_One" variant="body1">
                      Address
                    </Text>
                    <Text
                      className="font-semibold lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_600 w-[auto]"
                      variant="body2"
                    >
                      59 Orchard, NY 5005, US
                    </Text>
                  </Column>
                  <Row className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[95%]">
                    <Column className="mb-[1px] w-[46%]">
                      <Text className="KausarPial_One" variant="body1">
                        License No
                      </Text>
                      <Text
                        className="font-semibold xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-gray_600 w-[auto]"
                        variant="body2"
                      >
                        BF-0535
                      </Text>
                    </Column>
                    <Column className="w-[54%]">
                      <Text className="KausarPial_One" variant="body1">
                        Website
                      </Text>
                      <Text
                        className="common-pointer font-semibold xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]"
                        onClick={handleNavigate1}
                      >
                        www.staticmania.com
                      </Text>
                    </Column>
                  </Row>
                  <Column className="justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[58%]">
                    <Text className="KausarPial_One" variant="body1">
                      Social
                    </Text>
                    <Img
                      src="images/img_socailicons.svg"
                      className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                      alt="Socailicons"
                    />
                  </Column>
                </Column>
              </Row>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start xl:mt-[110px] 2xl:mt-[124px] 3xl:mt-[148px] lg:mt-[88px] lg:py-[21px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[36px] rounded-radius10 w-[92%]">
                <Row className="items-center justify-between rounded-radius10 w-[93%]">
                  <Text
                    className="text-gray_900 tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Clients Review
                  </Text>
                  <Button
                    className="flex items-center justify-center text-center w-[17%]"
                    rightIcon={
                      <Img
                        src="images/img_plus.svg"
                        className="text-center lg:w-[14px] lg:h-[15px] lg:ml-[7px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px]"
                        alt="plus"
                      />
                    }
                    shape="RoundedBorder10"
                    size="xl"
                    variant="FillGray900"
                  >
                    <div className="bg-transparent font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                      Write a Reveiw
                    </div>
                  </Button>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                <Column className="justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[92%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 w-[100%]">
                      <Text
                        className="columndescription_one"
                        as="h5"
                        variant="h5"
                      >
                        Eget eu massa et consectetur. Mauris donec. Leo a, id
                        sed duis proin sodales. Turpis viverra diam porttitor
                        mattis morbi ac amet. Euismod commodo. We get you
                        customer relationships that last.{" "}
                      </Text>
                      <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] pt-[2px] w-[38%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Row className="items-start justify-between w-[56%]">
                            <Row className="items-center justify-between w-[54%]">
                              <Img
                                src="images/img_star_24X24.svg"
                                className="arrowright"
                                alt="star Five"
                              />
                              <Img
                                src="images/img_star_24X24.svg"
                                className="arrowright"
                                alt="star One"
                              />
                              <Img
                                src="images/img_star_24X24.svg"
                                className="arrowright"
                                alt="star Two"
                              />
                              <Img
                                src="images/img_star_1.svg"
                                className="arrowright"
                                alt="star Three"
                              />
                            </Row>
                            <Text
                              className="rowreviewcounter_one"
                              variant="body1"
                            >
                              4.5 review
                            </Text>
                          </Row>
                          <Text
                            className="rowreviewcounter_one"
                            variant="body1"
                          >
                            02 June 2022
                          </Text>
                        </Row>
                        <Row className="items-center ml-[4px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[93%]">
                          <Img
                            src="images/img_rectangle5614.png"
                            className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                            alt="Ellipse2695"
                          />
                          <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[74%]">
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
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 w-[100%]">
                      <Text
                        className="columndescription_one"
                        as="h5"
                        variant="h5"
                      >
                        Eget eu massa et consectetur. Mauris donec. Leo a, id
                        sed duis proin sodales. Turpis viverra diam porttitor
                        mattis morbi ac amet. Euismod commodo. We get you
                        customer relationships that last.{" "}
                      </Text>
                      <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] pt-[2px] w-[38%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Row className="items-start justify-between w-[56%]">
                            <Row className="items-center justify-between w-[54%]">
                              <Img
                                src="images/img_star_24X24.svg"
                                className="arrowright"
                                alt="star Six"
                              />
                              <Img
                                src="images/img_star_24X24.svg"
                                className="arrowright"
                                alt="star One One"
                              />
                              <Img
                                src="images/img_star_24X24.svg"
                                className="arrowright"
                                alt="star Two One"
                              />
                              <Img
                                src="images/img_star_1.svg"
                                className="arrowright"
                                alt="star Three One"
                              />
                            </Row>
                            <Text
                              className="rowreviewcounter_one"
                              variant="body1"
                            >
                              4.5 review
                            </Text>
                          </Row>
                          <Text
                            className="rowreviewcounter_one"
                            variant="body1"
                          >
                            02 June 2022
                          </Text>
                        </Row>
                        <Row className="items-center ml-[4px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[93%]">
                          <Img
                            src="images/img_rectangle5614.png"
                            className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                            alt="Ellipse2696"
                          />
                          <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[74%]">
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
                        </Row>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 w-[100%]">
                      <Text
                        className="columndescription_one"
                        as="h5"
                        variant="h5"
                      >
                        Eget eu massa et consectetur. Mauris donec. Leo a, id
                        sed duis proin sodales. Turpis viverra diam porttitor
                        mattis morbi ac amet. Euismod commodo. We get you
                        customer relationships that last.{" "}
                      </Text>
                      <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] pt-[2px] w-[38%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Row className="items-start justify-between w-[56%]">
                            <Row className="items-center justify-between w-[54%]">
                              <Img
                                src="images/img_star_24X24.svg"
                                className="arrowright"
                                alt="star Seven"
                              />
                              <Img
                                src="images/img_star_24X24.svg"
                                className="arrowright"
                                alt="star One Two"
                              />
                              <Img
                                src="images/img_star_24X24.svg"
                                className="arrowright"
                                alt="star Two Two"
                              />
                              <Img
                                src="images/img_star_1.svg"
                                className="arrowright"
                                alt="star Three Two"
                              />
                            </Row>
                            <Text
                              className="rowreviewcounter_one"
                              variant="body1"
                            >
                              4.5 review
                            </Text>
                          </Row>
                          <Text
                            className="rowreviewcounter_one"
                            variant="body1"
                          >
                            02 June 2022
                          </Text>
                        </Row>
                        <Row className="items-center ml-[4px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[93%]">
                          <Img
                            src="images/img_rectangle5614.png"
                            className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                            alt="Ellipse2697"
                          />
                          <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[74%]">
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
                        </Row>
                      </Column>
                    </Column>
                  </List>
                  <SelectBox
                    className="font-semibold lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[12%]"
                    placeholderClassName="text-gray_900"
                    name="ButtonMedium"
                    placeholder="See more"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_1.svg"
                        className="lg:w-[11px] lg:h-[12px] lg:mr-[12px] xl:w-[14px] xl:h-[15px] xl:mr-[16px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[18px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[21px]"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                    variant="OutlineGray600"
                  ></SelectBox>
                </Column>
              </Column>
            </Column>
          </Column>
          <Row className="absolute inset-x-[0] items-start justify-between mx-[auto] top-[5%] w-[80%]">
            <Row className="items-start justify-between w-[60%]">
              <Img
                src="images/img_rectangle5599.png"
                className="lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] rounded-radius10 lg:w-[106px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
                alt="Rectangle5599"
              />
              <Column className="justify-start lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] py-[1px] w-[74%]">
                <Row className="items-start w-[85%]">
                  <Text
                    className="mb-[2px] rowview_details_two"
                    as="h5"
                    variant="h5"
                  >
                    Bruno Fernandes
                  </Text>
                  <Row className="items-start lg:ml-[56px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] mt-[2px] w-[38%]">
                    <Img
                      src="images/img_call_24X24.svg"
                      className="arrowright"
                      alt="call One"
                    />
                    <Text className="phone" variant="body2">
                      (302) 555-0107
                    </Text>
                  </Row>
                </Row>
                <Row className="items-end justify-between mb-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Row className="items-center justify-between mb-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[36%]">
                    <Row className="items-center justify-evenly mb-[1px] w-[51%]">
                      <Img
                        src="images/img_star.svg"
                        className="star"
                        alt="star Eight"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="star"
                        alt="star Nine"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="star"
                        alt="star Ten"
                      />
                      <Img
                        src="images/img_star.svg"
                        className="star"
                        alt="star Eleven"
                      />
                      <Img
                        src="images/img_star_16X16.svg"
                        className="star"
                        alt="star Twelve"
                      />
                    </Row>
                    <Text className="reveiw1" variant="body3">
                      4.5 review
                    </Text>
                  </Row>
                  <Row className="items-end w-[47%]">
                    <Img
                      src="images/img_mail_1.svg"
                      className="arrowright"
                      alt="mail One"
                    />
                    <Text className="mail2">staticmania@gmail.com</Text>
                  </Row>
                </Row>
              </Column>
            </Row>
            <Button
              className="font-semibold lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[10%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillGray900"
            >
              Contact
            </Button>
          </Row>
        </Stack>
        <Footer className="bg-white_A700 w-[100%]" />
      </Column>
    </>
  );
};

export default AgentProfilePage;
