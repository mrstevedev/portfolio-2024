import { Button } from "@radix-ui/themes";
import styles from "@/styles/Connect.module.scss";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function LinkedInConnect() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger asChild>
          <Button className="IconButton flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.Connect__hover}
            >
              <path
                d="M4.98 2.6087C4.98 4.04974 3.87 5.21739 2.5 5.21739C1.13 5.21739 0.02 4.04974 0.02 2.6087C0.02 1.1687 1.13 0 2.5 0C3.87 0 4.98 1.1687 4.98 2.6087ZM5 7.30435H0V24H5V7.30435ZM12.982 7.30435H8.014V24H12.983V15.2358C12.983 10.3628 19.012 9.96417 19.012 15.2358V24H24V13.4285C24 5.20591 15.078 5.50539 12.982 9.55304V7.30435Z"
                fill="white"
              />

              <defs>
                <clipPath id="clip0_2_23">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="TooltipContent"
            side="bottom"
            sideOffset={12}
          >
            My LinkedIn
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
