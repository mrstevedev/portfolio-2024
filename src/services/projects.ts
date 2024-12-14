import { Love_Light } from "next/font/google";
import bbpImageTwo from "@/public/images/bbp_project_img_2.png";
import rivianImageOne from "@/public/images/rivian_project_img_1.png";
import wdpImage1 from "@/public/images/wdp_project1.png";
import campfireImage1 from "@/public/images/campfire_img1.png";
import wdpImageFull1 from "@/public/images/wdp_project_full1.webp";
import ProjectImageFullCampfire from "@/public/images/campfire_project_full.png";

const lovelight = Love_Light({ weight: "400", subsets: ["latin"] });

export const projects = [
  {
    id: 1,
    logo: `<svg fill="white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 360 360"><g enable-background="new"><g id="Layer-1" data-name="Layer 1"><clipPath id="cp0"><path transform="matrix(1,0,0,-1,0,360)" d="M 0 360 L 360 360 L 360 0 L 0 0 Z "/></clipPath><g clip-path="url(#cp0)"><path transform="matrix(1,0,0,-1,172.03,146.8818)" d="M 0 0 L 0 -.2 C -.145 -5.834 -6.28 -9.058 -10.062 -10.43 L -17.112 -13.018 L -17.904 -13.285 L -18.718 -13.575 L -26.928 -16.554 L -26.928 -4.483 L -10.463 1.495 L -9.415 1.896 C -8.11 2.332 -5.756 3.012 -3.759 3.012 L -3.503 3.012 C -2.733 3.001 -2.019 2.856 -1.461 2.589 C -.993 2.332 -.603 2.009 -.346 1.528 C -.101 1.127 0 .614 0 0 "/><path transform="matrix(1,0,0,-1,233.9616,180.2792)" d="M 0 0 L 0 -.2 C -.145 -5.822 -6.269 -9.035 -10.051 -10.418 L -17.112 -12.995 L -17.904 -13.273 L -18.718 -13.575 L -26.928 -16.564 L -26.928 -4.484 L -10.452 1.518 L -9.415 1.908 C -8.11 2.343 -5.745 3.012 -3.748 3.012 L -3.492 3.012 C -2.733 2.99 -2.03 2.867 -1.461 2.588 C -.993 2.343 -.603 2.02 -.346 1.54 C -.112 1.116 0 .614 0 0 "/><path transform="matrix(1,0,0,-1,237.0065,208.8574)" d="M 0 0 C 0 -7.34 -8.924 -9.95 -11.545 -10.909 L -29.973 -17.625 L -29.973 -4.317 L -11.512 2.398 L -9.705 3.057 C -8.623 3.402 -7.161 3.814 -5.7 3.938 C -5.343 3.993 -4.997 4.004 -4.663 4.004 L -4.506 4.004 C -4.25 4.004 -4.038 4.004 -3.781 3.993 C -1.695 3.814 0 2.811 0 0 "/><path transform="matrix(1,0,0,-1,230.1799,236.4208)" d="M 0 0 C -1.495 -.536 -3.112 -1.116 -4.718 -1.74 L -4.718 -1.774 L -23.146 -8.5 L -42.935 -15.695 L -42.935 62.924 L -64.609 78.909 L -64.665 78.887 L -64.665 64.051 C -64.72 64.039 -64.765 64.028 -64.81 64.018 L -66.617 63.348 L -85.078 56.621 L -85.078 43.336 L -66.639 50.052 C -66.17 50.229 -65.468 50.453 -64.665 50.754 L -64.665 32.394 C -65.312 32.147 -65.981 31.902 -66.639 31.657 L -66.639 31.612 L -85.078 24.897 L -104.877 17.691 L -104.877 97.56 L -123.83 111.615 L -105.067 118.397 L -101.23 119.78 L -82.892 126.439 L -82.757 126.484 C -82.757 126.484 -82.757 126.507 -82.713 126.507 L -82.702 126.529 C -80.694 127.266 -78.797 127.756 -77.158 128.091 C -77.113 128.091 -77.091 128.136 -77.046 128.136 C -76.979 128.136 -76.901 128.157 -76.801 128.18 C -74.682 128.525 -72.172 128.716 -69.573 128.336 L -69.539 128.336 C -67.576 127.945 -64.308 126.908 -61.262 124.387 L -59.076 122.714 L -59.065 122.714 L -49.193 115.173 L -43.894 111.258 L -43.917 111.247 C -38.986 107.51 -38.707 100.873 -38.707 100.873 C -38.696 100.828 -38.696 100.772 -38.685 100.728 C -38.685 100.684 -38.674 100.627 -38.674 100.561 C -38.484 99.277 -38.506 97.939 -38.696 96.556 C -38.696 96.522 -38.707 96.489 -38.707 96.455 C -39.031 93.299 -40.135 88.915 -43.426 84.899 L -43.225 84.966 L -41.596 85.558 L -40.86 85.836 L -39.287 86.394 L -20.96 93.054 L -20.837 93.098 C -20.837 93.098 -20.837 93.131 -20.792 93.131 L -20.77 93.143 C -18.762 93.879 -16.866 94.381 -15.215 94.715 C -15.182 94.715 -15.148 94.749 -15.115 94.749 C -15.048 94.749 -14.958 94.782 -14.869 94.793 C -12.761 95.14 -10.24 95.317 -7.641 94.938 L -7.619 94.938 C -5.655 94.57 -2.365 93.533 .669 91.012 L 2.878 89.316 L 12.728 81.787 L 17.703 78.095 L 18.026 77.85 C 22.946 74.112 23.235 67.486 23.235 67.486 C 24.396 60.348 19.086 51.066 14.702 46.092 C 16.632 45.946 26.147 44.63 26.147 32.918 C 26.147 19.889 16.554 6.013 0 0 M -18.205 159.257 L -152.442 159.257 L -152.442 23.86 C -152.442 -14.903 -120.918 -46.415 -82.167 -46.415 L 52.082 -46.415 L 52.082 88.971 C 52.082 127.733 20.547 159.257 -18.205 159.257 "/><path transform="matrix(1,0,0,-1,191.4953,135.6933)" d="M 0 0 C -.011 .045 -.011 .101 -.022 .146 C -.022 .146 -.011 .101 0 0 "/></g></g></g></svg>`,
    name: "BBP Music Library",
    description: `E-Commerce storefront selling digital downloads as compositions for Film Makers, Music Producers, Content Creators, Beats  <span class=${lovelight.className} style="font-size: 24px; color: #A1B4E4"> & </span> Sampling. <br/><br/> Stream the tracks to preview before purchase. Available as a pack of 10 tracks or as a single track.`,
    url: "https://bbpmusiclibrary.com",
    host: "Netlify",
    images: [bbpImageTwo],
    technologies:
      "Next.js, React, Javascript, Typescript, Node.js, Axios, AWS, REST, GraphQL, Apollo, Stripe, PayPal, GooglePay, HTML5, CSS3, Jest, HLS, FFmpeg.",
  },
  {
    id: 2,
    logo: `<svg height="40" viewBox="-.12 0 59.2 57.1" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m58.78 26.3c-3.3-3.4-21.4-22-24.7-24.7-1.2-.9-2.7-1.6-4.6-1.6s-3.4.7-4.6 1.6c-3.4 2.7-21.4 21.3-24.8 24.7-.2.3 0 .8.4.8h7.8c.8 0 1.1-.1 1.6-.7s3.1-3.3 3.1-3.3c3.3-3.5 11.2-11.3 14.1-13.7 1.1-.9 2.3-.9 2.3-.9s1.3 0 2.3.9c3 2.5 11 10.2 14.2 13.7 0 0 2.6 2.8 3.1 3.3.5.6.8.7 1.6.7h7.8c.4 0 .7-.5.4-.8m-58.7 4.5c3.3 3.4 21.4 22 24.7 24.7 1.2.9 2.7 1.6 4.6 1.6s3.4-.7 4.6-1.6c3.4-2.7 21.4-21.3 24.7-24.7.3-.3 0-.8-.4-.8h-7.8c-.8 0-1.1.1-1.6.7s-3.1 3.3-3.1 3.3c-3.3 3.5-11.2 11.3-14.1 13.7-1.1.9-2.3.9-2.3.9s-1.3 0-2.3-.9c-2.9-2.4-10.9-10.2-14.1-13.7 0 0-2.6-2.8-3.1-3.3-.5-.6-.8-.7-1.6-.7h-7.8c-.4-.1-.6.4-.4.8m27.2 3.9c-1.5-1.4-4.1-3.9-5.1-5-.4-.5-.4-1.1-.4-1.1s0-.6.4-1.1c1-1.1 3.6-3.7 5.1-5 .6-.6.8-.9.8-1.6v-7.7c0-.3-.4-.5-.6-.2-3.3 3.1-10.7 10.4-13.2 13.2-1.2 1.3-1.1 2.5-1.1 2.5s-.1 1.3 1.1 2.5c2.5 2.8 9.9 10.2 13.2 13.2.3.3.6.1.6-.3v-7.7c-.1-.8-.2-1.1-.8-1.7m4.3 0c1.5-1.4 4.1-3.9 5.1-5 .4-.5.4-1.1.4-1.1s0-.6-.4-1.1c-1-1.1-3.6-3.7-5.1-5-.6-.6-.8-.9-.8-1.6v-7.7c0-.4.3-.5.6-.3 3.3 3.1 10.7 10.4 13.2 13.2 1.2 1.3 1.1 2.5 1.1 2.5s.1 1.3-1.1 2.5c-2.5 2.8-9.9 10.2-13.2 13.2-.3.3-.6.1-.6-.3v-7.7c.1-.7.2-1 .8-1.6" fill="#ffac00"/></svg>`,
    secondaryLogo: "",
    name: "Rivian Automotive",
    description: `Internal software tools for internal employee use. I was involved in developing, scaling, <span class=${lovelight.className} style="font-size: 24px; color: #A1B4E4"> & </span> maintaining multiple greenfield micro frontend web applications that were accessed through a portal called RivianOS.`,
    url: "#",
    host: "Amazon Web Services",
    images: [rivianImageOne],
    rivian_projects: [
      {
        id: 1,
        logo: `<svg height="2406" viewBox="-.12 0 59.2 57.1" width="1555" xmlns="http://www.w3.org/2000/svg"><path d="m58.78 26.3c-3.3-3.4-21.4-22-24.7-24.7-1.2-.9-2.7-1.6-4.6-1.6s-3.4.7-4.6 1.6c-3.4 2.7-21.4 21.3-24.8 24.7-.2.3 0 .8.4.8h7.8c.8 0 1.1-.1 1.6-.7s3.1-3.3 3.1-3.3c3.3-3.5 11.2-11.3 14.1-13.7 1.1-.9 2.3-.9 2.3-.9s1.3 0 2.3.9c3 2.5 11 10.2 14.2 13.7 0 0 2.6 2.8 3.1 3.3.5.6.8.7 1.6.7h7.8c.4 0 .7-.5.4-.8m-58.7 4.5c3.3 3.4 21.4 22 24.7 24.7 1.2.9 2.7 1.6 4.6 1.6s3.4-.7 4.6-1.6c3.4-2.7 21.4-21.3 24.7-24.7.3-.3 0-.8-.4-.8h-7.8c-.8 0-1.1.1-1.6.7s-3.1 3.3-3.1 3.3c-3.3 3.5-11.2 11.3-14.1 13.7-1.1.9-2.3.9-2.3.9s-1.3 0-2.3-.9c-2.9-2.4-10.9-10.2-14.1-13.7 0 0-2.6-2.8-3.1-3.3-.5-.6-.8-.7-1.6-.7h-7.8c-.4-.1-.6.4-.4.8m27.2 3.9c-1.5-1.4-4.1-3.9-5.1-5-.4-.5-.4-1.1-.4-1.1s0-.6.4-1.1c1-1.1 3.6-3.7 5.1-5 .6-.6.8-.9.8-1.6v-7.7c0-.3-.4-.5-.6-.2-3.3 3.1-10.7 10.4-13.2 13.2-1.2 1.3-1.1 2.5-1.1 2.5s-.1 1.3 1.1 2.5c2.5 2.8 9.9 10.2 13.2 13.2.3.3.6.1.6-.3v-7.7c-.1-.8-.2-1.1-.8-1.7m4.3 0c1.5-1.4 4.1-3.9 5.1-5 .4-.5.4-1.1.4-1.1s0-.6-.4-1.1c-1-1.1-3.6-3.7-5.1-5-.6-.6-.8-.9-.8-1.6v-7.7c0-.4.3-.5.6-.3 3.3 3.1 10.7 10.4 13.2 13.2 1.2 1.3 1.1 2.5 1.1 2.5s.1 1.3-1.1 2.5c-2.5 2.8-9.9 10.2-13.2 13.2-.3.3-.6.1-.6-.3v-7.7c.1-.7.2-1 .8-1.6" fill="#ffac00"/></svg>`,
        name: "Wiring Design Portal",
        image_thumbnail: [wdpImage1],
        image_full: [wdpImageFull1],
        description: `<p>The Wiring Design Portal provides interactive access to all released wiring information in web-based format, providing information to stakeholders in a searchable, cross referenced, intuitive format, making released wiring data accessible, intuitive <span class=${lovelight.className} style="font-size: 24px; color: #A1B4E4"> & </span> consolidated in one place.</p>
           <br/><p>Provides a single source of information for all released HarnessXC, Physical wiring <span class=${lovelight.className} style="font-size: 24px; color: #A1B4E4"> & </span>and logical diagram, integrator plane view, 3DX JT views, library data <span class=${lovelight.className} style="font-size: 24px; color: #A1B4E4"> & </span> wiring report data</p>`,
      },
      {
        id: 2,
        logo: `<svg height="2406" viewBox="-.12 0 59.2 57.1" width="1555" xmlns="http://www.w3.org/2000/svg"><path d="m58.78 26.3c-3.3-3.4-21.4-22-24.7-24.7-1.2-.9-2.7-1.6-4.6-1.6s-3.4.7-4.6 1.6c-3.4 2.7-21.4 21.3-24.8 24.7-.2.3 0 .8.4.8h7.8c.8 0 1.1-.1 1.6-.7s3.1-3.3 3.1-3.3c3.3-3.5 11.2-11.3 14.1-13.7 1.1-.9 2.3-.9 2.3-.9s1.3 0 2.3.9c3 2.5 11 10.2 14.2 13.7 0 0 2.6 2.8 3.1 3.3.5.6.8.7 1.6.7h7.8c.4 0 .7-.5.4-.8m-58.7 4.5c3.3 3.4 21.4 22 24.7 24.7 1.2.9 2.7 1.6 4.6 1.6s3.4-.7 4.6-1.6c3.4-2.7 21.4-21.3 24.7-24.7.3-.3 0-.8-.4-.8h-7.8c-.8 0-1.1.1-1.6.7s-3.1 3.3-3.1 3.3c-3.3 3.5-11.2 11.3-14.1 13.7-1.1.9-2.3.9-2.3.9s-1.3 0-2.3-.9c-2.9-2.4-10.9-10.2-14.1-13.7 0 0-2.6-2.8-3.1-3.3-.5-.6-.8-.7-1.6-.7h-7.8c-.4-.1-.6.4-.4.8m27.2 3.9c-1.5-1.4-4.1-3.9-5.1-5-.4-.5-.4-1.1-.4-1.1s0-.6.4-1.1c1-1.1 3.6-3.7 5.1-5 .6-.6.8-.9.8-1.6v-7.7c0-.3-.4-.5-.6-.2-3.3 3.1-10.7 10.4-13.2 13.2-1.2 1.3-1.1 2.5-1.1 2.5s-.1 1.3 1.1 2.5c2.5 2.8 9.9 10.2 13.2 13.2.3.3.6.1.6-.3v-7.7c-.1-.8-.2-1.1-.8-1.7m4.3 0c1.5-1.4 4.1-3.9 5.1-5 .4-.5.4-1.1.4-1.1s0-.6-.4-1.1c-1-1.1-3.6-3.7-5.1-5-.6-.6-.8-.9-.8-1.6v-7.7c0-.4.3-.5.6-.3 3.3 3.1 10.7 10.4 13.2 13.2 1.2 1.3 1.1 2.5 1.1 2.5s.1 1.3-1.1 2.5c-2.5 2.8-9.9 10.2-13.2 13.2-.3.3-.6.1-.6-.3v-7.7c.1-.7.2-1 .8-1.6" fill="#ffac00"/></svg>`,
        name: "Campfire",
        image_thumbnail: [campfireImage1],
        image_full: [ProjectImageFullCampfire],
        description: `<p>Campfire is a platform for connecting engineering, manufacturing, configuration, change management, vehicle integration processes <span class=${lovelight.className} style="font-size: 24px; color: #A1B4E4"> & </span> data to drive collaboration/clear device reguirements for vehicle wire harness definition.</p><br/>
              <p>A central software tool driving a process to enter and store all electrical requirements in the form of device transmittals (DTs) for use in the design for vehicle wire harnesses.</p>`,
      },
    ],
    technologies:
      "React, Redux, Javascript, Typescript, Node.js, Python, SQL, Postgres, Prisma, MongoDB, AWS, REST, GraphQL, Apollo, HTML5, CSS3, Webpack, Git, Jest.",
  },
];
