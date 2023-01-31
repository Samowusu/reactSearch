import React, { useState } from "react";
import FilterIcon from "../assets/svgs/FilterIcon";
import { Button } from "./commons/Button";
import { Container } from "./commons/Container";
import { Typography } from "./commons/Typography";
import FilterItem from "./FilterItem";
import data from "../mockData/MOCK_DATA.json";

interface FilterPanelProps {
  onCancel?: () => void;
}

interface QueryObjectState {
  order: string;
  item: string;
  category: string;
  type: string[];
}
const FilterPanel = ({ onCancel }: FilterPanelProps) => {
  const [queryObjectState, setQueryObjectState] = useState<QueryObjectState>({
    order: "",
    item: "",
    category: "",
    type: [],
  });
  const handleFilterData = ({
    value,
    key,
  }: {
    value: string | string[];
    key: string;
  }) => {
    console.log({ value, key });
    setQueryObjectState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  console.log({ queryObjectState });
  //   const filterByQueryObject = (
  //   () => {
  //     const filtered = data.filter((d) => {
  //       const matchesOrder = `${d.order_number}`.toLowerCase().includes(queryObjectState.order.trim().toLowerCase())
  //       // const matchesItem = `${d.item}`.toLowerCase().includes(queryObjectState.item.trim().toLowerCase())
  //       const matchesType = queryObjectState.type.some((i) => {
  //         return `${d.type}`.toLowerCase().includes(i.trim().toLowerCase())
  //       })
  //       const matchesCategory = ` ${d.category}`
  //         .toLowerCase()
  //         .includes(queryObjectState.category.trim().toLowerCase())

  //       matchesCategory && matchesType && matchesOrder && console.log({ matchesCategory, matchesType, matchesOrder, })

  //       return matchesCategory && matchesType && matchesOrder
  //     })

  //     console.log({ filtered })
  //     return filtered
  //   }
  // )()

  return (
    <Container
      width="300px"
      height="100vh"
      flexDirection="column"
      position="absolute"
      zIndex="10"
      right="0"
      bg="#fff"
      overflow="auto"
    >
      {/* header */}
      <Container bg="#F5F7F8" alignItems="center" padding="10px">
        <FilterIcon />
        <Container
          flexDirection="column"
          width="auto"
          marginLeft="15px"
          margintRight="40px"
          gap="10px"
        >
          <Typography fontSize="20px" fontWeight="600" color="#3F474B">
            set parameters
          </Typography>
          <Typography fontSize="12px" color="#778FAB">
            9 parameters available
          </Typography>
        </Container>
        <Button>
          <Typography
            fontSize="12px"
            color="#0C67A0"
            fontWeight="600"
            textTransform="inherit"
          >
            Reset all
          </Typography>
        </Button>
      </Container>

      {/* content */}
      <Container
        height="100%"
        flexDirection="column"
        justifyContent="space-between"
        paddingTop="10px"
      >
        <Container flexDirection="column">
          <FilterItem onChangeTextArea={handleFilterData} name="order" />
          <FilterItem
            title="Type"
            name="type"
            onChangeTextArea={handleFilterData}
          />
          <FilterItem
            title="Item"
            onChangeTextArea={handleFilterData}
            name="item"
          />
          <FilterItem
            title="Category"
            name="category"
            onChangeTextArea={handleFilterData}
          />
        </Container>

        {/* [{name:'order', title:'Order #',placeholder: ''}] */}

        {/* footer */}
        <Container justifyContent="space-around" bg="#F5F7F8" pV="15px">
          <Button onClick={onCancel}>
            <Typography
              fontSize="12px"
              color="#0C67A0"
              fontWeight="600"
              textTransform="inherit"
            >
              Cancel
            </Typography>
          </Button>
          <Button bg="#0C67A0" pH="35px" pV="8px" borderRadius="3px">
            <Typography fontSize="12px" color="#fff" fontWeight="500">
              apply
            </Typography>
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default FilterPanel;

// const data = require("./MOCK_DATA.json");

// const queryObjectState = {
//   orderNumber: "279",
//   type: ["EDF", "CAO"],
//   // item: "851",
//   category: "fruits"
// }

// filterByQueryObject = (
//   () => {
//     const filtered = data.filter((d) => {
//       const matchesOrder = `${d.order_number}`.toLowerCase().includes(queryObject.orderNumber.trim().toLowerCase())
//       // const matchesItem = `${d.item}`.toLowerCase().includes(queryObject.item.trim().toLowerCase())
//       const matchesType = queryObject.type.some((i) => {
//         return `${d.type}`.toLowerCase().includes(i.trim().toLowerCase())
//       })
//       const matchesCategory = ` ${d.category}`
//         .toLowerCase()
//         .includes(queryObject.category.trim().toLowerCase())

//       matchesCategory && matchesType && matchesOrder && console.log({ matchesCategory, matchesType, matchesOrder, })

//       return matchesCategory && matchesType && matchesOrder
//     })

//     console.log({ filtered })
//     return filtered
//   }
// )()
