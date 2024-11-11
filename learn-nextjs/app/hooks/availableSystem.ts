import { useCallback, useMemo } from "react";
import { IAvailableSystems, IPhase } from "../interfaces/interface";
import { PopConfirmComponentProps } from "../components/popConfirm";

export const useAvailableSystems = () => {
  const availableSystems = useMemo<IAvailableSystems[]>(
    () => [
      {
        systemSize: 2.16,
        phases: [
          {
            bomId: "6728c5dbfb27852403989e01",
            value: "2.16",
          },
        ],
      },
      {
        systemSize: 4.32,
        phases: [
          {
            bomId: "6728c5dbfb27852403989e04",
            value: "4.32",
          },
          {
            bomId: "6728c5dbfb27852403989e05",
            value: "4.32",
          },
        ],
      },
      {
        systemSize: 6.48,
        phases: [
          {
            bomId: "6728c5dbfb27852403989e08",
            value: "6.48",
          },
          {
            bomId: "6728c5dbfb27852403989e09",
            value: "6.48",
          },
        ],
      },
      {
        systemSize: 7.02,
        phases: [
          {
            bomId: "6728c5dbfb27852403989e0a",
            value: "7.02",
          },
        ],
      },
      {
        systemSize: 5.4,
        phases: [
          {
            bomId: "6728c5dbfb27852403989e06",
            value: "5.4",
          },
          {
            bomId: "6728c5dbfb27852403989e07",
            value: "5.4",
          },
        ],
      },
      {
        systemSize: 9.18,
        phases: [
          {
            bomId: "6728c5dbfb27852403989e0c",
            value: "9.18",
          },
        ],
      },
      {
        systemSize: 10.26,
        phases: [
          {
            bomId: "6728c5dbfb27852403989e0d",
            value: "last",
          },
        ],
      },
      {
        systemSize: 8.1,
        phases: [
          {
            bomId: "6728c5dbfb27852403989e0b",
            value: "8.1",
          },
        ],
      },
      {
        systemSize: 1.08,
        phases: [
          {
            bomId: "6728c5dbfb27852403989e00",
            value: "first",
          },
        ],
      },
      {
        systemSize: 3.24,
        phases: [
          {
            bomId: "6728c5dbfb27852403989e02",
            value: "3.24",
          },
          {
            bomId: "6728c5dbfb27852403989e03",
            value: "3.24",
          },
        ],
      },
    ],
    []
  );
  const systemSizes = useMemo(
    () => availableSystems.map((sys) => sys.systemSize),
    [availableSystems]
  );
  const minSystemSize = useMemo(() => Math.min(...systemSizes), [systemSizes]);
  const maxSystemSize = useMemo(() => Math.max(...systemSizes), [systemSizes]);
  const minMaxCheck = useCallback(
    (inputValue: number) => {
      let confirmationPopup = false;
      //   let confirmationMessage = "";
      let pendingSystemSize = "";
      let phases: IPhase[] = [];
      let type: PopConfirmComponentProps["type"] = "minimum";

      if (inputValue < minSystemSize) {
        pendingSystemSize = minSystemSize.toString();
        confirmationPopup = true;
        // confirmationMessage =
        //   "Entered system size is too low. Do you want to replace it with the minimum available size?";

        const matchingSystem = availableSystems.find(
          (system) => system.systemSize.toString() === pendingSystemSize
        );
        phases = matchingSystem ? matchingSystem.phases : [];
        type = "minimum";
      } else if (inputValue > maxSystemSize) {
        pendingSystemSize = maxSystemSize.toString();
        confirmationPopup = true;
        // confirmationMessage =
        //   "Entered system size is too high. Do you want to replace it with the maximum available size?";

        const matchingSystem = availableSystems.find(
          (system) => system.systemSize.toString() === pendingSystemSize
        );
        phases = matchingSystem ? matchingSystem.phases : [];
        type = "maximum";
      }

      return {
        confirmationPopup,
        // confirmationMessage,
        pendingSystemSize,
        phases,
        type,
      };
    },
    [availableSystems, maxSystemSize, minSystemSize]
  );
  return { minMaxCheck, availableSystems };
};
