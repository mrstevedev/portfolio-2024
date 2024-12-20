import { Button } from "@radix-ui/themes";
import styles from "@/styles/Connect.module.scss";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function GithubConnect() {
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
                d="M12 0C5.374 0 0 5.50883 0 12.3034C0 17.7394 3.438 22.3511 8.207 23.9782C8.806 24.092 9 23.7106 9 23.3866V21.0962C5.662 21.8405 4.967 19.6444 4.967 19.6444C4.421 18.2223 3.634 17.844 3.634 17.844C2.545 17.0801 3.717 17.0965 3.717 17.0965C4.922 17.1827 5.556 18.3648 5.556 18.3648C6.626 20.2452 8.363 19.7018 9.048 19.387C9.155 18.5924 9.466 18.049 9.81 17.7425C7.145 17.4298 4.343 16.3748 4.343 11.6615C4.343 10.3174 4.812 9.22035 5.579 8.35911C5.455 8.04845 5.044 6.79658 5.696 5.10282C5.696 5.10282 6.704 4.77268 8.997 6.36391C9.954 6.09119 10.98 5.95483 12 5.9497C13.02 5.95483 14.047 6.09119 15.006 6.36391C17.297 4.77268 18.303 5.10282 18.303 5.10282C18.956 6.79761 18.545 8.04948 18.421 8.35911C19.191 9.22035 19.656 10.3184 19.656 11.6615C19.656 16.3871 16.849 17.4277 14.177 17.7322C14.607 18.1136 15 18.8621 15 20.0104V23.3866C15 23.7137 15.192 24.0982 15.801 23.9772C20.566 22.348 24 17.7374 24 12.3034C24 5.50883 18.627 0 12 0Z"
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
            My GitHub
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
