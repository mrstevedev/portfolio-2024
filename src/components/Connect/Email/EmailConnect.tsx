import { Button } from "@radix-ui/themes";
import styles from "@/styles/Connect.module.scss";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function EmailConnect() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger asChild>
          <Button className="IconButton flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.Connect__hover}
            >
              <path
                d="M12 9.713L0.015 0H23.985L12 9.713ZM12 12.287L0 2.562V18H24V2.562L12 12.287Z"
                fill="white"
              />
            </svg>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="TooltipContent"
            side="bottom"
            sideOffset={12}
          >
            My Email
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
