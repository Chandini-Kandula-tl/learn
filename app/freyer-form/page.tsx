"use client";
import { Form, Input, InputRef, Popconfirm, Select } from "antd";
import { useRef, useState } from "react";
const { Item: FormItem } = Form;

interface IPhase {
  bomId: string;
  value: string;
}

interface IAvailableSystems {
  systemSize: number;
  phases: IPhase[];
}

const availableSystems: IAvailableSystems[] = [
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
];

const Page = () => {
  const inputRef = useRef<InputRef>(null);
  const [selectOptions, setSelectOptions] = useState<IPhase[]>([]);
  const [confirmationPopUp, setConfirmationPopoup] = useState<boolean>(false);
  const [isFirstFocus, setIsFirstFocus] = useState<boolean>(true);
  const minSystemSize = Math.min(
    ...availableSystems.map((sys) => sys.systemSize)
  );
  const maxSystemSize = Math.max(
    ...availableSystems.map((sys) => sys.systemSize)
  );

  const [confirmationMessage, setConfirmationMessage] = useState<string>("");
  const [pendingSystemSize, setPendingSystemSize] = useState<string | "">("");
  const [inputValue, setInputValue] = useState<string>("");

  const hanldeInputClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFirstFocus) {
      setConfirmationPopoup(true);
    } else {
      inputRef.current?.focus();
    }
  };

  const handleInputFocus = () => {
    if (isFirstFocus) {
      //   setConfirmationPopoup(true);
      setIsFirstFocus(false);
    }
  };

  const confirm = () => {
    if (pendingSystemSize.length !== 0) {
      setInputValue(pendingSystemSize.toString());
      setConfirmationPopoup(false);
      inputRef.current?.blur();
    } else {
      inputRef.current?.focus();
      setConfirmationPopoup(false);
    }
  };

  const cancel = () => {
    inputRef.current?.focus();
    setConfirmationPopoup(false);
    setInputValue("");
  };

  const validateInput = (value: string) => {
    const inputValue = parseFloat(value);
    if (isNaN(inputValue)) return;
    if (inputValue < minSystemSize) {
      setPendingSystemSize(minSystemSize.toString());
      setConfirmationPopoup(true);
      setConfirmationMessage(
        "Entered system size is too low. Do you want to replace it with the minimum available size?"
      );
    }
    if (inputValue > maxSystemSize) {
      setPendingSystemSize(maxSystemSize.toString());
      setConfirmationPopoup(true);
      setConfirmationMessage(
        "Entered system size is too high. Do you want to replace it with the maximum available size?"
      );
    }
    const exactMatch = availableSystems.find(
      (system) => system.systemSize === inputValue
    );
    if (exactMatch) {
      setSelectOptions(exactMatch.phases);
    } else {
      let closestMatch = availableSystems[0];
      let smallestDifference = Math.abs(
        availableSystems[0].systemSize - inputValue
      );
      for (let i = 1; i < availableSystems.length; i++) {
        const currentSystem = availableSystems[i];
        const difference = Math.abs(currentSystem.systemSize - inputValue);

        if (difference < smallestDifference) {
          closestMatch = currentSystem;
          smallestDifference = difference;
        }
      }

      setSelectOptions(closestMatch.phases);
    }
  };
  //     else {
  //       const closestMatch = availableSystems.reduce((prev, curr) => {
  //         return Math.abs(curr.systemSize - inputValue) <
  //           Math.abs(prev.systemSize - inputValue)
  //           ? curr
  //           : prev;
  //       });

  //       setSelectOptions(closestMatch.phases);
  //     }
  //   };

  const handleInput = () => {
    if (inputRef.current?.input?.value) {
      validateInput(inputRef.current.input.value);
    }
  };

  return (
    <Form layout="vertical">
      <FormItem label="System size" name="systemSize">
        <Popconfirm
          title="Confirmatin of system size requirement"
          description={
            confirmationMessage.length === 0
              ? "Updating system size will change the phase!! Are you sure?"
              : confirmationMessage
          }
          okText="Yes"
          cancelText="NO"
          open={confirmationPopUp}
          onConfirm={confirm}
          onCancel={cancel}
        >
          <Input
            type="number"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onMouseDown={hanldeInputClick}
            onFocus={handleInputFocus}
            onBlur={handleInput}
          />
        </Popconfirm>
      </FormItem>
      <FormItem label="Phase size" name="phaseSize">
        <Select options={selectOptions} />
      </FormItem>
    </Form>
  );
};

export default Page;
