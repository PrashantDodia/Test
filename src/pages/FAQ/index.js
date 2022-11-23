import React from "react";

import { Column, Text, Row, Input, Img, Line } from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const FAQPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }
  function handleNavigate2() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }
  function handleNavigate3() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_51 font-manrope items-center justify-start mx-[auto] lg:pb-[150px] xl:pb-[187px] 2xl:pb-[211px] 3xl:pb-[253px] w-[100%]">
        <Header className="w-[100%]" />
        <Text
          className="3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[84px] text-gray_900 tracking-ls1 w-[auto]"
          as="h2"
          variant="h2"
        >
          Search Property / Anything
        </Text>
        <Column className="items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[55%]">
          <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="placeholder:text-gray_600 TextFieldLa"
              wrapClassName="2xl:ml-[9px] 3xl:ml-[10px] flex lg:ml-[6px] mt-[2px] w-[90%] xl:ml-[8px]"
              name="FrameSeventeen"
              placeholder="Search Property / Anything"
              prefix={
                <Img
                  src="images/img_search_1.svg"
                  className="cursor-pointer ml-[1px] lg:w-[17px] lg:h-[18px] lg:mr-[9px] xl:w-[21px] xl:h-[22px] xl:mr-[12px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[14px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[16px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#6e6e6e"
                    className="cursor-pointer lg:w-[17px] lg:h-[18px] lg:ml-[7px] lg:mr-[15px] xl:w-[21px] xl:h-[22px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[24px] 2xl:h-[25px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[28px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              size="smSrc"
              variant="srcFillWhiteA700"
            ></Input>
            <Line className="bg-bluegray_100 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[1px]" />
            <Img
              src="images/img_settings.svg"
              className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] arrowright"
              alt="settings"
            />
          </Row>
          <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 w-[100%]">
            <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[86%]">
              <Text className="KausarPial_One" variant="body1">
                You're viewing sample results.
              </Text>
              <a
                href={"https://staticmania.com"}
                target="_blank"
                className="common-pointer font-semibold lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]"
                onClick={handleNavigate}
                rel="noreferrer"
              >
                https://staticmania.com
              </a>
              <Text
                className="font-normal leading-[150.00%] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-gray_600 w-[100%]"
                variant="body4"
              >
                Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam
                autem suscipit culpa perspiciatis. Exercitationem dolorum dolore
                perferendis praesen…
              </Text>
            </Column>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[93%]">
              <Text className="KausarPial_One" variant="body1">
                Add CMS or Business Hosting and index your site to see real
                search results!
              </Text>
              <Text
                className="common-pointer font-semibold lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-gray_600 w-[auto]"
                variant="body3"
                onClick={handleNavigate3}
              >
                https://staticmania.com
              </Text>
              <Text
                className="font-normal leading-[150.00%] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-gray_600 w-[92%]"
                variant="body4"
              >
                Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam
                autem suscipit culpa perspiciatis. Exercitationem dolorum dolore
                perferendis praesen…
              </Text>
            </Column>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            <Column className="justify-start mb-[2px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[86%]">
              <Text className="KausarPial_One" variant="body1">
                You're viewing sample results.
              </Text>
              <Text
                className="common-pointer font-semibold lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-gray_600 w-[auto]"
                variant="body3"
                onClick={handleNavigate2}
              >
                https://staticmania.com
              </Text>
              <Text
                className="font-normal leading-[150.00%] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-gray_600 w-[100%]"
                variant="body4"
              >
                Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam
                autem suscipit culpa perspiciatis. Exercitationem dolorum dolore
                perferendis praesen…
              </Text>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FAQPage;
