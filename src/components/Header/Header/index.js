import React from "react";

import { Row, Img, Text, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-white_A700 items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
          <Row className="items-center justify-center 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[72px] xl:ml-[90px] w-[9%]">
            <Img src="images/img_home.svg" className="home_Two" alt="home" />
            <Text
              className="cursor-pointer hover:font-normal rowhome_two1"
              variant="body1"
            >
              Relasto
            </Text>
          </Row>
          <Row className="items-start justify-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[47%]">
            <Row className="items-center justify-between mt-[1px] w-[10%]">
              <Text
                className="hover:font-normal hover:text-orange_A700 rowhome_one"
                variant="body3"
              >
                Home
              </Text>
              <Img
                src="images/img_arrowdown_16X16.svg"
                className="star"
                alt="arrowdown"
              />
            </Row>
            <Text
              className="hover:font-normal hover:text-orange_A700 rowabout"
              variant="body3"
            >
              About
            </Text>
            <Row className="items-start justify-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] mt-[1px] w-[11%]">
              <Text
                className="hover:font-normal hover:text-orange_A700 rowhome_one"
                variant="body3"
              >
                Listing
              </Text>
              <Img
                src="images/img_arrowdown_16X16.svg"
                className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] star"
                alt="arrowdown One"
              />
            </Row>
            <Row className="items-start justify-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] mt-[1px] w-[12%]">
              <Text
                className="hover:font-normal hover:text-orange_A700 rowhome_one"
                variant="body3"
              >
                Agents
              </Text>
              <Img
                src="images/img_arrowdown_16X16.svg"
                className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] star"
                alt="arrowdown Two"
              />
            </Row>
            <Text
              className="hover:font-normal hover:text-orange_A700 rowabout"
              variant="body3"
            >
              Property{" "}
            </Text>
            <Row className="items-start justify-between lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[19%]">
              <Text
                className="hover:font-normal hover:text-orange_A700 rowhome_one"
                variant="body3"
              >
                Others Pages
              </Text>
              <Img
                src="images/img_arrowdown_16X16.svg"
                className="star"
                alt="arrowdown Three"
              />
            </Row>
          </Row>
          <Row className="items-center justify-center 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[78px] xl:ml-[97px] w-[7%]">
            <Img
              src="images/img_search.svg"
              className="arrowright"
              alt="search"
            />
            <Text
              className="cursor-pointer hover:font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] hover:text-orange_A700 Features"
              variant="body2"
            >
              Search
            </Text>
          </Row>
          <Button
            className="font-manrope font-semibold mb-[1px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[8%]"
            shape="RoundedBorder10"
            size="md"
            variant="FillGray900"
          >
            Log in
          </Button>
        </Row>
      </header>
    </>
  );
};

export default Header;
