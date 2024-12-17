import Link from "next/link";
import { Fragment } from "react";
import { projects } from "@/services/projects";
import { PATH, TYPE } from "@/constants/index";
import { capitalizeFirstCharacter } from "@/util/index";
import { Box, Container, Flex, Section } from "@radix-ui/themes";
import ProjectImage from "@/components/Projects/BBPMusicLibrary/Images/ProjectImageBBP";
import ProjectImageWDP from "@/components/Projects/Rivian/projects/Wdp/ProjectImageWDP";
import ProjectDescriptionWDP from "@/components/Projects/Rivian/projects/Wdp/ProjectDescriptionWDP";
import ProjectImageCampfire from "@/components/Projects/Rivian/projects/Campfire/ProjectImageCampfire";
import ProjectImageRivianOS from "@/components/Projects/Rivian/projects/RivianOS/ProjectImageRivianOS";
import PreviousButtonNavigation from "@/components/shared/PreviousButtonNavigation/PreviousButtonNavigation";
import ProjectDescriptionCampfire from "@/components/Projects/Rivian/projects/Campfire/ProjectDescriptionCampfire";
import SelectionButtonGroup from "@/components/Projects/Rivian/projects/SelectionButtonGroup";

export default function page({ params }: { params: { id: string } }) {
  const matched = projects.find(
    (project) => project.name === capitalizeFirstCharacter(params.id)
  );

  return (
    <Container className="p-4 lg:p-32 xl:w-[1200px] mx-auto">
      <Box className="lg:flex items-center gap-1 mb-8">
        <PreviousButtonNavigation />
        <h1 className="text-2xl pt-4 lg:pt-0 flex items-center">
          <div
            className="w-12"
            dangerouslySetInnerHTML={{ __html: matched?.logo as string }}
          />{" "}
          {matched?.name}
        </h1>
      </Box>

      {params.id === PATH.PATH_BBP_MUSIC_LIBRARY && (
        <Section className="gap-10 lg:flex">
          <Box className="lg:w-full lg:relative">
            <Box>
              <ProjectImage data={matched} />
            </Box>
            <SelectionButtonGroup />
          </Box>

          <Box className="lg:w-full">
            <p
              className="text-lg leading-7 py-4"
              dangerouslySetInnerHTML={{
                __html: matched?.description as string,
              }}
            />
            <Flex className="items-center gap-4 lg:gap-2 lg:justify-between">
              <Flex className=" items-center gap-2">
                <h2>URL:</h2>
                <p className="text-lg py-4">
                  {matched?.url !== "#" ? (
                    <Link
                      href={matched?.url as string}
                      target="_blank"
                      className="hover:underline"
                      style={{ color: "#A1B4E4" }}
                    >
                      {matched?.url}
                    </Link>
                  ) : (
                    <span style={{ color: "#ffc44a" }}>
                      Internal access only
                    </span>
                  )}
                </p>
              </Flex>
              <Flex className=" items-center gap-2">
                <h2>Host:</h2>
                <p
                  className="text-lg leading-8 py-4"
                  style={{ color: "#A1B4E4" }}
                >
                  {matched?.host}
                </p>
              </Flex>
            </Flex>
            <Box className="items-center gap-2">
              <p className="text-lg leading-7 py-4 ">
                <span className="text-nowrap">Technologies: </span>
                <span className="text-[#C3C3C3]"> {matched?.technologies}</span>
              </p>
            </Box>
          </Box>
        </Section>
      )}

      {params.id === PATH.PATH_RIVIAN && (
        <Fragment>
          <Section className="gap-10 lg:flex">
            <Box className="lg:w-full lg:relative">
              <Box>
                <ProjectImageRivianOS data={matched} />
              </Box>
            </Box>

            <Box className="lg:w-full">
              <p
                className="text-lg leading-7 py-4"
                dangerouslySetInnerHTML={{
                  __html: matched?.description as string,
                }}
              />
              <Flex className="items-center gap-4 lg:gap-2 lg:justify-between">
                <Flex className=" items-center gap-2">
                  <h2>URL:</h2>
                  <p className="text-lg py-4">
                    {matched?.url !== "#" ? (
                      <Link
                        href={matched?.url as string}
                        target="_blank"
                        className="hover:underline"
                        style={{ color: "#A1B4E4" }}
                      >
                        {matched?.url}
                      </Link>
                    ) : (
                      <span style={{ color: "#ffc44a" }}>
                        Internal access only
                      </span>
                    )}
                  </p>
                </Flex>
                <Flex className=" items-center gap-2">
                  <h2>Host:</h2>
                  <p
                    className="text-lg leading-8 py-4"
                    style={{ color: "#A1B4E4" }}
                  >
                    {matched?.host}
                  </p>
                </Flex>
              </Flex>
              <Box className="items-center gap-2">
                <p className="text-lg leading-7 py-4 ">
                  <span className="text-nowrap">Technologies: </span>
                  <span className="text-[#C3C3C3]">
                    {" "}
                    {matched?.technologies}
                  </span>
                </p>
              </Box>
            </Box>
          </Section>

          <Section className="lg:flex gap-10 my-10">
            <Box className="lg:w-full mb-4">
              <h2 className="text-xl mb-4 flex gap-2">
                The Wiring Design Portal
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9462 11.5149C24.4895 10.0263 16.4997 1.88266 15.043 0.700525C14.5133 0.30648 13.8512 0 13.0125 0C12.1738 0 11.5116 0.30648 10.9819 0.700525C9.4811 1.88266 1.53547 10.0263 0.0346345 11.5149C-0.0536502 11.6462 0.0346345 11.8651 0.211204 11.8651H3.65431C4.00745 11.8651 4.13987 11.8214 4.36059 11.5587C4.5813 11.296 5.729 10.1138 5.729 10.1138C7.1857 8.58144 10.6729 5.16637 11.9531 4.11559C12.4386 3.72154 12.9683 3.72154 12.9683 3.72154C12.9683 3.72154 13.5422 3.72154 13.9836 4.11559C15.3079 5.21016 18.8393 8.58144 20.2518 10.1138C20.2518 10.1138 21.3995 11.3398 21.6203 11.5587C21.841 11.8214 21.9734 11.8651 22.3265 11.8651H25.7696C25.9462 11.8651 26.0786 11.6462 25.9462 11.5149ZM0.0346345 13.4851C1.49133 14.9737 9.4811 23.1173 10.9378 24.2995C11.4675 24.6935 12.1296 25 12.9683 25C13.8071 25 14.4692 24.6935 14.9989 24.2995C16.4997 23.1173 24.4454 14.9737 25.9021 13.4851C26.0345 13.3538 25.9021 13.1349 25.7255 13.1349H22.2824C21.9292 13.1349 21.7968 13.1786 21.5761 13.4413C21.3554 13.704 20.2077 14.8862 20.2077 14.8862C18.751 16.4186 15.2638 19.8336 13.9836 20.8844C13.4981 21.2785 12.9683 21.2785 12.9683 21.2785C12.9683 21.2785 12.3945 21.2785 11.9531 20.8844C10.6729 19.8336 7.14156 16.4186 5.729 14.8862C5.729 14.8862 4.5813 13.6602 4.36059 13.4413C4.13987 13.1786 4.00745 13.1349 3.65431 13.1349H0.211204C0.0346345 13.0911 -0.0536502 13.31 0.0346345 13.4851ZM12.0414 15.1926C11.3792 14.5797 10.2315 13.4851 9.7901 13.0035C9.61353 12.7846 9.61353 12.5219 9.61353 12.5219C9.61353 12.5219 9.61353 12.2592 9.7901 12.0403C10.2315 11.5587 11.3792 10.4203 12.0414 9.85114C12.3062 9.58844 12.3945 9.45709 12.3945 9.15061V5.77933C12.3945 5.64799 12.2179 5.56042 12.1296 5.69177C10.6729 7.04904 7.40641 10.2452 6.30285 11.4711C5.77314 12.0403 5.81728 12.5657 5.81728 12.5657C5.81728 12.5657 5.77314 13.1349 6.30285 13.6602C7.40641 14.8862 10.6729 18.1261 12.1296 19.4396C12.2621 19.5709 12.3945 19.4834 12.3945 19.3082V15.937C12.3504 15.5867 12.3062 15.4553 12.0414 15.1926ZM13.9395 15.1926C14.6016 14.5797 15.7493 13.4851 16.1907 13.0035C16.3673 12.7846 16.3673 12.5219 16.3673 12.5219C16.3673 12.5219 16.3673 12.2592 16.1907 12.0403C15.7493 11.5587 14.6016 10.4203 13.9395 9.85114C13.6746 9.58844 13.5863 9.45709 13.5863 9.15061V5.77933C13.5863 5.6042 13.7188 5.56042 13.8512 5.64799C15.3079 7.00525 18.5744 10.2014 19.678 11.4273C20.2077 11.9965 20.1636 12.5219 20.1636 12.5219C20.1636 12.5219 20.2077 13.0911 19.678 13.6165C18.5744 14.8424 15.3079 18.0823 13.8512 19.3958C13.7188 19.5271 13.5863 19.4396 13.5863 19.2644V15.8932C13.6305 15.5867 13.6746 15.4553 13.9395 15.1926Z"
                    fill="white"
                  />
                </svg>
              </h2>
              {matched?.rivian_projects?.map((project) => {
                if (project.name === TYPE.TYPE_WDP) {
                  return (
                    <ProjectDescriptionWDP key={project.id} data={project} />
                  );
                }
              })}
            </Box>
            <Box className="lg:w-full">
              {matched?.rivian_projects?.map((project) => {
                if (project.name === TYPE.TYPE_WDP) {
                  return <ProjectImageWDP key={project.id} data={project} />;
                }
              })}
            </Box>
          </Section>
          <Section className="gap-10 lg:flex mb-8">
            <Box className="lg:w-full">
              {matched?.rivian_projects?.map((project) => {
                if (project.name === TYPE.TYPE_CAMPFIRE) {
                  return (
                    <ProjectImageCampfire key={project.id} data={project} />
                  );
                }
              })}
            </Box>
            <Box className="lg:w-full">
              <h2 className="text-xl mb-4 flex gap-2">
                Campfire
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9462 11.5149C24.4895 10.0263 16.4997 1.88266 15.043 0.700525C14.5133 0.30648 13.8512 0 13.0125 0C12.1738 0 11.5116 0.30648 10.9819 0.700525C9.4811 1.88266 1.53547 10.0263 0.0346345 11.5149C-0.0536502 11.6462 0.0346345 11.8651 0.211204 11.8651H3.65431C4.00745 11.8651 4.13987 11.8214 4.36059 11.5587C4.5813 11.296 5.729 10.1138 5.729 10.1138C7.1857 8.58144 10.6729 5.16637 11.9531 4.11559C12.4386 3.72154 12.9683 3.72154 12.9683 3.72154C12.9683 3.72154 13.5422 3.72154 13.9836 4.11559C15.3079 5.21016 18.8393 8.58144 20.2518 10.1138C20.2518 10.1138 21.3995 11.3398 21.6203 11.5587C21.841 11.8214 21.9734 11.8651 22.3265 11.8651H25.7696C25.9462 11.8651 26.0786 11.6462 25.9462 11.5149ZM0.0346345 13.4851C1.49133 14.9737 9.4811 23.1173 10.9378 24.2995C11.4675 24.6935 12.1296 25 12.9683 25C13.8071 25 14.4692 24.6935 14.9989 24.2995C16.4997 23.1173 24.4454 14.9737 25.9021 13.4851C26.0345 13.3538 25.9021 13.1349 25.7255 13.1349H22.2824C21.9292 13.1349 21.7968 13.1786 21.5761 13.4413C21.3554 13.704 20.2077 14.8862 20.2077 14.8862C18.751 16.4186 15.2638 19.8336 13.9836 20.8844C13.4981 21.2785 12.9683 21.2785 12.9683 21.2785C12.9683 21.2785 12.3945 21.2785 11.9531 20.8844C10.6729 19.8336 7.14156 16.4186 5.729 14.8862C5.729 14.8862 4.5813 13.6602 4.36059 13.4413C4.13987 13.1786 4.00745 13.1349 3.65431 13.1349H0.211204C0.0346345 13.0911 -0.0536502 13.31 0.0346345 13.4851ZM12.0414 15.1926C11.3792 14.5797 10.2315 13.4851 9.7901 13.0035C9.61353 12.7846 9.61353 12.5219 9.61353 12.5219C9.61353 12.5219 9.61353 12.2592 9.7901 12.0403C10.2315 11.5587 11.3792 10.4203 12.0414 9.85114C12.3062 9.58844 12.3945 9.45709 12.3945 9.15061V5.77933C12.3945 5.64799 12.2179 5.56042 12.1296 5.69177C10.6729 7.04904 7.40641 10.2452 6.30285 11.4711C5.77314 12.0403 5.81728 12.5657 5.81728 12.5657C5.81728 12.5657 5.77314 13.1349 6.30285 13.6602C7.40641 14.8862 10.6729 18.1261 12.1296 19.4396C12.2621 19.5709 12.3945 19.4834 12.3945 19.3082V15.937C12.3504 15.5867 12.3062 15.4553 12.0414 15.1926ZM13.9395 15.1926C14.6016 14.5797 15.7493 13.4851 16.1907 13.0035C16.3673 12.7846 16.3673 12.5219 16.3673 12.5219C16.3673 12.5219 16.3673 12.2592 16.1907 12.0403C15.7493 11.5587 14.6016 10.4203 13.9395 9.85114C13.6746 9.58844 13.5863 9.45709 13.5863 9.15061V5.77933C13.5863 5.6042 13.7188 5.56042 13.8512 5.64799C15.3079 7.00525 18.5744 10.2014 19.678 11.4273C20.2077 11.9965 20.1636 12.5219 20.1636 12.5219C20.1636 12.5219 20.2077 13.0911 19.678 13.6165C18.5744 14.8424 15.3079 18.0823 13.8512 19.3958C13.7188 19.5271 13.5863 19.4396 13.5863 19.2644V15.8932C13.6305 15.5867 13.6746 15.4553 13.9395 15.1926Z"
                    fill="white"
                  />
                </svg>
              </h2>
              {matched?.rivian_projects?.map((project) => {
                if (project.name === TYPE.TYPE_CAMPFIRE) {
                  return (
                    <ProjectDescriptionCampfire
                      key={project.name}
                      data={project}
                    />
                  );
                }
              })}
            </Box>
          </Section>
        </Fragment>
      )}
    </Container>
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return [{ id: "bbp-music-library" }, { id: "rivian-automotive" }];
}
